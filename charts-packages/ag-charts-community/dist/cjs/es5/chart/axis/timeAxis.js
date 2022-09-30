"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var validation_1 = require("../../util/validation");
var timeScale_1 = require("../../scale/timeScale");
var array_1 = require("../../util/array");
var value_1 = require("../../util/value");
var chartAxis_1 = require("../chartAxis");
var numberAxis_1 = require("./numberAxis");
var TimeAxis = /** @class */ (function (_super) {
    __extends(TimeAxis, _super);
    function TimeAxis() {
        var _this = _super.call(this, new timeScale_1.TimeScale()) || this;
        _this.datumFormat = '%m/%d/%y, %H:%M:%S';
        _this.nice = true;
        _this.min = undefined;
        _this.max = undefined;
        var scale = _this.scale;
        scale.clamp = true;
        scale.clamper = numberAxis_1.clamper;
        _this.scale = scale;
        _this.datumFormatter = scale.tickFormat({
            ticks: _this.getTicks(),
            count: _this.calculatedTickCount,
            specifier: _this.datumFormat,
        });
        return _this;
    }
    Object.defineProperty(TimeAxis.prototype, "domain", {
        get: function () {
            return this.scale.domain;
        },
        set: function (domain) {
            this.setDomain(domain);
        },
        enumerable: true,
        configurable: true
    });
    TimeAxis.prototype.setDomain = function (domain, _primaryTickCount) {
        var _a = this, scale = _a.scale, nice = _a.nice, min = _a.min, max = _a.max, calculatedTickCount = _a.calculatedTickCount;
        if (domain.length > 2) {
            domain = (array_1.extent(domain, value_1.isContinuous, Number) || [0, 1000]).map(function (x) { return new Date(x); });
        }
        if (min instanceof Date) {
            domain = [min, domain[1]];
        }
        if (max instanceof Date) {
            domain = [domain[0], max];
        }
        if (domain[0] > domain[1]) {
            domain = [];
        }
        this.scale.domain = domain;
        if (nice && scale.nice) {
            scale.nice(typeof calculatedTickCount === 'number' ? calculatedTickCount : undefined);
        }
        this.onLabelFormatChange(this.label.format);
    };
    TimeAxis.prototype.onLabelFormatChange = function (format) {
        if (format) {
            _super.prototype.onLabelFormatChange.call(this, format);
        }
        else {
            // For time axis labels to look nice, even if date format wasn't set.
            this.labelFormatter = this.scale.tickFormat({ ticks: this.getTicks(), count: this.calculatedTickCount });
        }
    };
    TimeAxis.prototype.formatDatum = function (datum) {
        return this.datumFormatter(datum);
    };
    TimeAxis.prototype.updateDomain = function (domain, _isYAxis, primaryTickCount) {
        // the `primaryTickCount` is used to align the secondary axis tick count with the primary
        this.setDomain(domain, primaryTickCount);
        return (primaryTickCount !== null && primaryTickCount !== void 0 ? primaryTickCount : this.scale.ticks(this.calculatedTickCount).length);
    };
    TimeAxis.className = 'TimeAxis';
    TimeAxis.type = 'time';
    __decorate([
        validation_1.Validate(validation_1.BOOLEAN)
    ], TimeAxis.prototype, "nice", void 0);
    __decorate([
        validation_1.Validate(validation_1.AND(validation_1.OPT_DATE, validation_1.LESS_THAN('max')))
    ], TimeAxis.prototype, "min", void 0);
    __decorate([
        validation_1.Validate(validation_1.AND(validation_1.OPT_DATE, validation_1.GREATER_THAN('min')))
    ], TimeAxis.prototype, "max", void 0);
    return TimeAxis;
}(chartAxis_1.ChartAxis));
exports.TimeAxis = TimeAxis;
