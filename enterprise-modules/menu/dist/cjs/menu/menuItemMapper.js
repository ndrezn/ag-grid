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
var core_1 = require("@ag-grid-community/core");
var MenuItemMapper = /** @class */ (function (_super) {
    __extends(MenuItemMapper, _super);
    function MenuItemMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuItemMapper.prototype.mapWithStockItems = function (originalList, column) {
        var _this = this;
        if (!originalList) {
            return [];
        }
        var resultList = [];
        originalList.forEach(function (menuItemOrString) {
            var result;
            if (typeof menuItemOrString === 'string') {
                result = _this.getStockMenuItem(menuItemOrString, column);
            }
            else {
                result = menuItemOrString;
            }
            // if no mapping, can happen when module is not loaded but user tries to use module anyway
            if (!result) {
                return;
            }
            var resultDef = result;
            var subMenu = resultDef.subMenu;
            if (subMenu && subMenu instanceof Array) {
                resultDef.subMenu = _this.mapWithStockItems(resultDef.subMenu, column);
            }
            if (result != null) {
                resultList.push(result);
            }
        });
        return resultList;
    };
    MenuItemMapper.prototype.getStockMenuItem = function (key, column) {
        var _this = this;
        var localeTextFunc = this.gridOptionsWrapper.getLocaleTextFunc();
        var skipHeaderOnAutoSize = this.gridOptionsWrapper.isSkipHeaderOnAutoSize();
        switch (key) {
            case 'pinSubMenu':
                return {
                    name: localeTextFunc('pinColumn', 'Pin Column'),
                    icon: core_1._.createIconNoSpan('menuPin', this.gridOptionsWrapper, null),
                    subMenu: ['pinLeft', 'pinRight', 'clearPinned']
                };
            case 'pinLeft':
                return {
                    name: localeTextFunc('pinLeft', 'Pin Left'),
                    action: function () { return _this.columnController.setColumnPinned(column, core_1.Constants.PINNED_LEFT, "contextMenu"); },
                    checked: column.isPinnedLeft()
                };
            case 'pinRight':
                return {
                    name: localeTextFunc('pinRight', 'Pin Right'),
                    action: function () { return _this.columnController.setColumnPinned(column, core_1.Constants.PINNED_RIGHT, "contextMenu"); },
                    checked: column.isPinnedRight()
                };
            case 'clearPinned':
                return {
                    name: localeTextFunc('noPin', 'No Pin'),
                    action: function () { return _this.columnController.setColumnPinned(column, null, "contextMenu"); },
                    checked: !column.isPinned()
                };
            case 'valueAggSubMenu':
                if (core_1.ModuleRegistry.assertRegistered(core_1.ModuleNames.RowGroupingModule, 'Aggregation from Menu')) {
                    return {
                        name: localeTextFunc('valueAggregation', 'Value Aggregation'),
                        icon: core_1._.createIconNoSpan('menuValue', this.gridOptionsWrapper, null),
                        subMenu: this.createAggregationSubMenu(column)
                    };
                }
                else {
                    return null;
                }
            case 'autoSizeThis':
                return {
                    name: localeTextFunc('autosizeThiscolumn', 'Autosize This Column'),
                    action: function () { return _this.columnController.autoSizeColumn(column, skipHeaderOnAutoSize, "contextMenu"); }
                };
            case 'autoSizeAll':
                return {
                    name: localeTextFunc('autosizeAllColumns', 'Autosize All Columns'),
                    action: function () { return _this.columnController.autoSizeAllColumns(skipHeaderOnAutoSize, "contextMenu"); }
                };
            case 'rowGroup':
                return {
                    name: localeTextFunc('groupBy', 'Group by') + ' ' + core_1._.escapeString(this.columnController.getDisplayNameForColumn(column, 'header')),
                    action: function () { return _this.columnController.addRowGroupColumn(column, "contextMenu"); },
                    icon: core_1._.createIconNoSpan('menuAddRowGroup', this.gridOptionsWrapper, null)
                };
            case 'rowUnGroup':
                return {
                    name: localeTextFunc('ungroupBy', 'Un-Group by') + ' ' + core_1._.escapeString(this.columnController.getDisplayNameForColumn(column, 'header')),
                    action: function () { return _this.columnController.removeRowGroupColumn(column, "contextMenu"); },
                    icon: core_1._.createIconNoSpan('menuRemoveRowGroup', this.gridOptionsWrapper, null)
                };
            case 'resetColumns':
                return {
                    name: localeTextFunc('resetColumns', 'Reset Columns'),
                    action: function () { return _this.columnController.resetColumnState(false, "contextMenu"); }
                };
            case 'expandAll':
                return {
                    name: localeTextFunc('expandAll', 'Expand All'),
                    action: function () { return _this.gridApi.expandAll(); }
                };
            case 'contractAll':
                return {
                    name: localeTextFunc('collapseAll', 'Collapse All'),
                    action: function () { return _this.gridApi.collapseAll(); }
                };
            case 'copy':
                if (core_1.ModuleRegistry.assertRegistered(core_1.ModuleNames.ClipboardModule, 'Copy from Menu')) {
                    return {
                        name: localeTextFunc('copy', 'Copy'),
                        shortcut: localeTextFunc('ctrlC', 'Ctrl+C'),
                        icon: core_1._.createIconNoSpan('clipboardCopy', this.gridOptionsWrapper, null),
                        action: function () { return _this.clipboardService.copyToClipboard(false); }
                    };
                }
                else {
                    return null;
                }
            case 'copyWithHeaders':
                if (core_1.ModuleRegistry.assertRegistered(core_1.ModuleNames.ClipboardModule, 'Copy with Headers from Menu')) {
                    return {
                        name: localeTextFunc('copyWithHeaders', 'Copy with Headers'),
                        // shortcut: localeTextFunc('ctrlC','Ctrl+C'),
                        icon: core_1._.createIconNoSpan('clipboardCopy', this.gridOptionsWrapper, null),
                        action: function () { return _this.clipboardService.copyToClipboard(true); }
                    };
                }
                else {
                    return null;
                }
            case 'paste':
                if (core_1.ModuleRegistry.assertRegistered(core_1.ModuleNames.ClipboardModule, 'Copy with Headers from Menu')) {
                    return {
                        name: localeTextFunc('paste', 'Paste'),
                        shortcut: localeTextFunc('ctrlV', 'Ctrl+V'),
                        disabled: true,
                        icon: core_1._.createIconNoSpan('clipboardPaste', this.gridOptionsWrapper, null),
                        action: function () { return _this.clipboardService.pasteFromClipboard(); }
                    };
                }
                else {
                    return null;
                }
            case 'export':
                var exportSubMenuItems = [];
                var csvModuleLoaded = core_1.ModuleRegistry.isRegistered(core_1.ModuleNames.CsvExportModule);
                var excelModuleLoaded = core_1.ModuleRegistry.isRegistered(core_1.ModuleNames.ExcelExportModule);
                if (!this.gridOptionsWrapper.isSuppressCsvExport() && csvModuleLoaded) {
                    exportSubMenuItems.push('csvExport');
                }
                if (!this.gridOptionsWrapper.isSuppressExcelExport() && excelModuleLoaded) {
                    exportSubMenuItems.push('excelExport');
                    exportSubMenuItems.push('excelXmlExport');
                }
                return {
                    name: localeTextFunc('export', 'Export'),
                    subMenu: exportSubMenuItems,
                    icon: core_1._.createIconNoSpan('save', this.gridOptionsWrapper, null),
                };
            case 'csvExport':
                return {
                    name: localeTextFunc('csvExport', 'CSV Export'),
                    action: function () { return _this.gridApi.exportDataAsCsv({}); }
                };
            case 'excelExport':
                return {
                    name: localeTextFunc('excelExport', 'Excel Export (.xlsx)&lrm;'),
                    action: function () { return _this.gridApi.exportDataAsExcel({
                        exportMode: 'xlsx'
                    }); }
                };
            case 'excelXmlExport':
                return {
                    name: localeTextFunc('excelXmlExport', 'Excel Export (.xml)&lrm;'),
                    action: function () { return _this.gridApi.exportDataAsExcel({
                        exportMode: 'xml'
                    }); }
                };
            case 'separator':
                return 'separator';
            default:
                var chartMenuItem = this.getChartItems(key);
                if (chartMenuItem) {
                    return chartMenuItem;
                }
                else {
                    console.warn("ag-Grid: unknown menu item type " + key);
                    return null;
                }
        }
    };
    MenuItemMapper.prototype.getChartItems = function (key) {
        var _this = this;
        var localeTextFunc = this.gridOptionsWrapper.getLocaleTextFunc();
        var pivotChartMenuItem = function (localeKey, defaultText, chartType) {
            return {
                name: localeTextFunc(localeKey, defaultText),
                action: function () { return _this.chartService.createPivotChart({ chartType: chartType }); }
            };
        };
        var rangeChartMenuItem = function (localeKey, defaultText, chartType) {
            return {
                name: localeTextFunc(localeKey, defaultText),
                action: function () { return _this.chartService.createChartFromCurrentRange(chartType); }
            };
        };
        switch (key) {
            // case 'pivotChartAndPivotMode':
            //     return {
            //         name: localeTextFunc('pivotChartAndPivotMode', 'Pivot Chart & Pivot Mode&lrm;'),
            //         action: () => this.chartService.pivotChart(ChartType.GroupedColumn),
            //         icon: _.createIconNoSpan('chart', this.gridOptionsWrapper, null)
            //     };
            case 'pivotChart':
                return {
                    name: localeTextFunc('pivotChart', 'Pivot Chart'),
                    subMenu: [
                        'pivotColumnChart',
                        'pivotBarChart',
                        'pivotPieChart',
                        'pivotLineChart',
                        'pivotXYChart',
                        'pivotAreaChart'
                    ],
                    icon: core_1._.createIconNoSpan('chart', this.gridOptionsWrapper, null),
                };
            case 'chartRange':
                return {
                    name: localeTextFunc('chartRange', 'Chart Range'),
                    subMenu: [
                        'rangeColumnChart',
                        'rangeBarChart',
                        'rangePieChart',
                        'rangeLineChart',
                        'rangeXYChart',
                        'rangeAreaChart',
                        'rangeHistogramChart'
                    ],
                    icon: core_1._.createIconNoSpan('chart', this.gridOptionsWrapper, null),
                };
            case 'pivotColumnChart':
                return {
                    name: localeTextFunc('columnChart', 'Column'),
                    subMenu: ['pivotGroupedColumn', 'pivotStackedColumn', 'pivotNormalizedColumn']
                };
            case 'pivotGroupedColumn':
                return pivotChartMenuItem('groupedColumn', 'Grouped&lrm;', core_1.ChartType.GroupedColumn);
            case 'pivotStackedColumn':
                return pivotChartMenuItem('stackedColumn', 'Stacked&lrm;', core_1.ChartType.StackedColumn);
            case 'pivotNormalizedColumn':
                return pivotChartMenuItem('normalizedColumn', '100% Stacked&lrm;', core_1.ChartType.NormalizedColumn);
            case 'rangeColumnChart':
                return {
                    name: localeTextFunc('columnChart', 'Column'),
                    subMenu: ['rangeGroupedColumn', 'rangeStackedColumn', 'rangeNormalizedColumn']
                };
            case 'rangeGroupedColumn':
                return rangeChartMenuItem('groupedColumn', 'Grouped&lrm;', core_1.ChartType.GroupedColumn);
            case 'rangeStackedColumn':
                return rangeChartMenuItem('stackedColumn', 'Stacked&lrm;', core_1.ChartType.StackedColumn);
            case 'rangeNormalizedColumn':
                return rangeChartMenuItem('normalizedColumn', '100% Stacked&lrm;', core_1.ChartType.NormalizedColumn);
            case 'pivotBarChart':
                return {
                    name: localeTextFunc('barChart', 'Bar'),
                    subMenu: ['pivotGroupedBar', 'pivotStackedBar', 'pivotNormalizedBar']
                };
            case 'pivotGroupedBar':
                return pivotChartMenuItem('groupedBar', 'Grouped&lrm;', core_1.ChartType.GroupedBar);
            case 'pivotStackedBar':
                return pivotChartMenuItem('stackedBar', 'Stacked&lrm;', core_1.ChartType.StackedBar);
            case 'pivotNormalizedBar':
                return pivotChartMenuItem('normalizedBar', '100% Stacked&lrm;', core_1.ChartType.NormalizedBar);
            case 'rangeBarChart':
                return {
                    name: localeTextFunc('barChart', 'Bar'),
                    subMenu: ['rangeGroupedBar', 'rangeStackedBar', 'rangeNormalizedBar']
                };
            case 'rangeGroupedBar':
                return rangeChartMenuItem('groupedBar', 'Grouped&lrm;', core_1.ChartType.GroupedBar);
            case 'rangeStackedBar':
                return rangeChartMenuItem('stackedBar', 'Stacked&lrm;', core_1.ChartType.StackedBar);
            case 'rangeNormalizedBar':
                return rangeChartMenuItem('normalizedBar', '100% Stacked&lrm;', core_1.ChartType.NormalizedBar);
            case 'pivotPieChart':
                return {
                    name: localeTextFunc('pieChart', 'Pie'),
                    subMenu: ['pivotPie', 'pivotDoughnut']
                };
            case 'pivotPie':
                return pivotChartMenuItem('pie', 'Pie&lrm;', core_1.ChartType.Pie);
            case 'pivotDoughnut':
                return pivotChartMenuItem('doughnut', 'Doughnut&lrm;', core_1.ChartType.Doughnut);
            case 'rangePieChart':
                return {
                    name: localeTextFunc('pieChart', 'Pie'),
                    subMenu: ['rangePie', 'rangeDoughnut']
                };
            case 'rangePie':
                return rangeChartMenuItem('pie', 'Pie&lrm;', core_1.ChartType.Pie);
            case 'rangeDoughnut':
                return rangeChartMenuItem('doughnut', 'Doughnut&lrm;', core_1.ChartType.Doughnut);
            case 'pivotLineChart':
                return pivotChartMenuItem('line', 'Line&lrm;', core_1.ChartType.Line);
            case 'rangeLineChart':
                return rangeChartMenuItem('line', 'Line&lrm;', core_1.ChartType.Line);
            case 'pivotXYChart':
                return {
                    name: localeTextFunc('xyChart', 'X Y (Scatter)'),
                    subMenu: ['pivotScatter', 'pivotBubble']
                };
            case 'pivotScatter':
                return pivotChartMenuItem('scatter', 'Scatter&lrm;', core_1.ChartType.Scatter);
            case 'pivotBubble':
                return pivotChartMenuItem('bubble', 'Bubble&lrm;', core_1.ChartType.Bubble);
            case 'rangeXYChart':
                return {
                    name: localeTextFunc('xyChart', 'X Y (Scatter)'),
                    subMenu: ['rangeScatter', 'rangeBubble']
                };
            case 'rangeScatter':
                return rangeChartMenuItem('scatter', 'Scatter&lrm;', core_1.ChartType.Scatter);
            case 'rangeBubble':
                return rangeChartMenuItem('bubble', 'Bubble&lrm;', core_1.ChartType.Bubble);
            case 'pivotAreaChart':
                return {
                    name: localeTextFunc('areaChart', 'Area'),
                    subMenu: ['pivotArea', 'pivotStackedArea', 'pivotNormalizedArea']
                };
            case 'pivotArea':
                return pivotChartMenuItem('area', 'Area&lrm;', core_1.ChartType.Area);
            case 'pivotStackedArea':
                return pivotChartMenuItem('stackedArea', 'Stacked&lrm;', core_1.ChartType.StackedArea);
            case 'pivotNormalizedArea':
                return pivotChartMenuItem('normalizedArea', '100% Stacked&lrm;', core_1.ChartType.NormalizedArea);
            case 'rangeAreaChart':
                return {
                    name: localeTextFunc('areaChart', 'Area'),
                    subMenu: ['rangeArea', 'rangeStackedArea', 'rangeNormalizedArea']
                };
            case 'rangeArea':
                return rangeChartMenuItem('area', 'Area&lrm;', core_1.ChartType.Area);
            case 'rangeStackedArea':
                return rangeChartMenuItem('stackedArea', 'Stacked&lrm;', core_1.ChartType.StackedArea);
            case 'rangeNormalizedArea':
                return rangeChartMenuItem('normalizedArea', '100% Stacked&lrm;', core_1.ChartType.NormalizedArea);
            case 'rangeHistogramChart':
                return rangeChartMenuItem('histogramChart', 'Histogram&lrm;', core_1.ChartType.Histogram);
            default:
                return null;
        }
    };
    MenuItemMapper.prototype.createAggregationSubMenu = function (column) {
        var _this = this;
        var localeTextFunc = this.gridOptionsWrapper.getLocaleTextFunc();
        var columnIsAlreadyAggValue = column.isValueActive();
        var funcNames = this.aggFuncService.getFuncNames(column);
        var columnToUse;
        if (column.isPrimary()) {
            columnToUse = column;
        }
        else {
            var pivotValueColumn = column.getColDef().pivotValueColumn;
            columnToUse = core_1._.exists(pivotValueColumn) ? pivotValueColumn : undefined;
        }
        var result = [];
        funcNames.forEach(function (funcName) {
            result.push({
                name: localeTextFunc(funcName, funcName),
                action: function () {
                    _this.columnController.setColumnAggFunc(columnToUse, funcName, "contextMenu");
                    _this.columnController.addValueColumn(columnToUse, "contextMenu");
                },
                checked: columnIsAlreadyAggValue && columnToUse.getAggFunc() === funcName
            });
        });
        return result;
    };
    __decorate([
        core_1.Autowired('columnController')
    ], MenuItemMapper.prototype, "columnController", void 0);
    __decorate([
        core_1.Autowired('gridApi')
    ], MenuItemMapper.prototype, "gridApi", void 0);
    __decorate([
        core_1.Optional('clipboardService')
    ], MenuItemMapper.prototype, "clipboardService", void 0);
    __decorate([
        core_1.Optional('aggFuncService')
    ], MenuItemMapper.prototype, "aggFuncService", void 0);
    __decorate([
        core_1.Optional('chartService')
    ], MenuItemMapper.prototype, "chartService", void 0);
    MenuItemMapper = __decorate([
        core_1.Bean('menuItemMapper')
    ], MenuItemMapper);
    return MenuItemMapper;
}(core_1.BeanStub));
exports.MenuItemMapper = MenuItemMapper;
//# sourceMappingURL=menuItemMapper.js.map