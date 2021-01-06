/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v25.0.0
 * @link http://www.ag-grid.com/
 * @license MIT
 */
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
import { BeanStub } from "../context/beanStub";
var RowNodeBlock = /** @class */ (function (_super) {
    __extends(RowNodeBlock, _super);
    function RowNodeBlock(id) {
        var _this = _super.call(this) || this;
        _this.state = RowNodeBlock.STATE_WAITING_TO_LOAD;
        _this.version = 0;
        _this.id = id;
        return _this;
    }
    RowNodeBlock.prototype.getId = function () {
        return this.id;
    };
    RowNodeBlock.prototype.load = function () {
        this.state = RowNodeBlock.STATE_LOADING;
        this.loadFromDatasource();
    };
    RowNodeBlock.prototype.getVersion = function () {
        return this.version;
    };
    RowNodeBlock.prototype.setStateWaitingToLoad = function () {
        // in case any current loads in progress, this will have their results ignored
        this.version++;
        this.state = RowNodeBlock.STATE_WAITING_TO_LOAD;
    };
    RowNodeBlock.prototype.getState = function () {
        return this.state;
    };
    RowNodeBlock.prototype.pageLoadFailed = function (version) {
        var requestMostRecentAndLive = this.isRequestMostRecentAndLive(version);
        if (requestMostRecentAndLive) {
            this.state = RowNodeBlock.STATE_FAILED;
            this.processServerFail();
        }
        this.dispatchLoadCompleted(false);
    };
    RowNodeBlock.prototype.success = function (version, params) {
        this.successCommon(version, params);
    };
    RowNodeBlock.prototype.pageLoaded = function (version, rows, lastRow) {
        this.successCommon(version, { rowData: rows, rowCount: lastRow });
    };
    RowNodeBlock.prototype.isRequestMostRecentAndLive = function (version) {
        // thisIsMostRecentRequest - if block was refreshed, then another request
        // could of been sent after this one.
        var thisIsMostRecentRequest = version === this.version;
        // weAreNotDestroyed - if InfiniteStore is purged, then blocks are destroyed
        // and new blocks created. so data loads of old blocks are discarded.
        var weAreNotDestroyed = this.isAlive();
        return thisIsMostRecentRequest && weAreNotDestroyed;
    };
    RowNodeBlock.prototype.successCommon = function (version, params) {
        var requestMostRecentAndLive = this.isRequestMostRecentAndLive(version);
        if (requestMostRecentAndLive) {
            this.state = RowNodeBlock.STATE_LOADED;
            this.processServerResult(params);
        }
        this.dispatchLoadCompleted();
    };
    RowNodeBlock.prototype.dispatchLoadCompleted = function (success) {
        if (success === void 0) { success = true; }
        // we fire event regardless of processing data or now, as we want
        // the concurrentLoadRequests count to be reduced in BlockLoader
        var event = {
            type: RowNodeBlock.EVENT_LOAD_COMPLETE,
            success: success,
            block: this
        };
        this.dispatchEvent(event);
    };
    RowNodeBlock.EVENT_LOAD_COMPLETE = 'loadComplete';
    RowNodeBlock.STATE_WAITING_TO_LOAD = 'needsLoading';
    RowNodeBlock.STATE_LOADING = 'loading';
    RowNodeBlock.STATE_LOADED = 'loaded';
    RowNodeBlock.STATE_FAILED = 'failed';
    return RowNodeBlock;
}(BeanStub));
export { RowNodeBlock };
