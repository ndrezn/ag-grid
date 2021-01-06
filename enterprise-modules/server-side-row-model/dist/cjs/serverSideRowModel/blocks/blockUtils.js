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
var BlockUtils = /** @class */ (function (_super) {
    __extends(BlockUtils, _super);
    function BlockUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockUtils.prototype.postConstruct = function () {
        this.rowHeight = this.gridOptionsWrapper.getRowHeightAsNumber();
        this.usingTreeData = this.gridOptionsWrapper.isTreeData();
        this.usingMasterDetail = this.gridOptionsWrapper.isMasterDetail();
    };
    BlockUtils.prototype.createRowNode = function (params) {
        var rowNode = this.getContext().createBean(new core_1.RowNode());
        rowNode.setRowHeight(this.rowHeight);
        rowNode.group = params.group;
        rowNode.leafGroup = params.leafGroup;
        rowNode.level = params.level;
        rowNode.uiLevel = params.level;
        rowNode.parent = params.parent;
        // stub gets set to true here, and then false when this rowNode gets it's data
        rowNode.stub = true;
        if (rowNode.group) {
            rowNode.expanded = false;
            rowNode.field = params.field;
            rowNode.rowGroupColumn = params.rowGroupColumn;
        }
        return rowNode;
    };
    BlockUtils.prototype.destroyRowNodes = function (rowNodes) {
        if (rowNodes) {
            rowNodes.forEach(this.destroyRowNode.bind(this));
        }
    };
    BlockUtils.prototype.destroyRowNode = function (rowNode) {
        if (rowNode.childStore) {
            this.destroyBean(rowNode.childStore);
            rowNode.childStore = null;
        }
        // this is needed, so row render knows to fade out the row, otherwise it
        // sees row top is present, and thinks the row should be shown. maybe
        // rowNode should have a flag on whether it is visible???
        rowNode.clearRowTop();
        if (rowNode.id != null) {
            this.nodeManager.removeNode(rowNode);
        }
    };
    BlockUtils.prototype.setDataIntoRowNode = function (rowNode, data, defaultId) {
        rowNode.stub = false;
        if (core_1._.exists(data)) {
            rowNode.setDataAndId(data, defaultId);
            if (this.usingTreeData) {
                var isGroupFunc = this.gridOptionsWrapper.getIsServerSideGroupFunc();
                var getKeyFunc = this.gridOptionsWrapper.getServerSideGroupKeyFunc();
                if (isGroupFunc != null) {
                    rowNode.group = isGroupFunc(rowNode.data);
                    if (rowNode.group && getKeyFunc != null) {
                        rowNode.key = getKeyFunc(rowNode.data);
                    }
                }
            }
            else if (rowNode.group) {
                rowNode.key = this.valueService.getValue(rowNode.rowGroupColumn, rowNode);
                if (rowNode.key === null || rowNode.key === undefined) {
                    core_1._.doOnce(function () {
                        console.warn("null and undefined values are not allowed for server side row model keys");
                        if (rowNode.rowGroupColumn) {
                            console.warn("column = " + rowNode.rowGroupColumn.getId());
                        }
                        console.warn("data is ", rowNode.data);
                    }, 'ServerSideBlock-CannotHaveNullOrUndefinedForKey');
                }
            }
            else if (this.usingMasterDetail) {
                var isMasterFunc = this.gridOptionsWrapper.getIsRowMasterFunc();
                if (isMasterFunc != null) {
                    rowNode.master = isMasterFunc(rowNode.data);
                }
                else {
                    rowNode.master = true;
                }
            }
        }
        else {
            rowNode.setDataAndId(undefined, undefined);
            rowNode.key = null;
        }
        if (this.usingTreeData || rowNode.group) {
            this.setGroupDataIntoRowNode(rowNode);
            this.setChildCountIntoRowNode(rowNode);
        }
        // this needs to be done AFTER setGroupDataIntoRowNode(), as the height can depend on the group data
        // getting set, if it's a group node and colDef.autoHeight=true
        if (core_1._.exists(data)) {
            rowNode.setRowHeight(this.gridOptionsWrapper.getRowHeightForNode(rowNode).height);
        }
    };
    BlockUtils.prototype.setChildCountIntoRowNode = function (rowNode) {
        var getChildCount = this.gridOptionsWrapper.getChildCountFunc();
        if (getChildCount) {
            rowNode.allChildrenCount = getChildCount(rowNode.data);
        }
    };
    BlockUtils.prototype.setGroupDataIntoRowNode = function (rowNode) {
        var _this = this;
        var groupDisplayCols = this.columnController.getGroupDisplayColumns();
        var usingTreeData = this.gridOptionsWrapper.isTreeData();
        groupDisplayCols.forEach(function (col) {
            if (rowNode.groupData == null) {
                rowNode.groupData = {};
            }
            if (usingTreeData) {
                rowNode.groupData[col.getColId()] = rowNode.key;
            }
            else if (col.isRowGroupDisplayed(rowNode.rowGroupColumn.getId())) {
                var groupValue = _this.valueService.getValue(rowNode.rowGroupColumn, rowNode);
                rowNode.groupData[col.getColId()] = groupValue;
            }
        });
    };
    BlockUtils.prototype.clearDisplayIndex = function (rowNode) {
        rowNode.clearRowTop();
        rowNode.setRowIndex();
        var hasChildStore = rowNode.group && core_1._.exists(rowNode.childStore);
        if (hasChildStore) {
            var childStore = rowNode.childStore;
            childStore.clearDisplayIndexes();
        }
        var hasDetailNode = rowNode.master && rowNode.detailNode;
        if (hasDetailNode) {
            rowNode.detailNode.clearRowTop();
            rowNode.detailNode.setRowIndex();
        }
    };
    BlockUtils.prototype.setDisplayIndex = function (rowNode, displayIndexSeq, nextRowTop) {
        // set this row
        rowNode.setRowIndex(displayIndexSeq.next());
        rowNode.setRowTop(nextRowTop.value);
        nextRowTop.value += rowNode.rowHeight;
        // set child for master / detail
        var hasDetailRow = rowNode.master;
        if (hasDetailRow) {
            if (rowNode.expanded && rowNode.detailNode) {
                rowNode.detailNode.setRowIndex(displayIndexSeq.next());
                rowNode.detailNode.setRowTop(nextRowTop.value);
                nextRowTop.value += rowNode.detailNode.rowHeight;
            }
            else if (rowNode.detailNode) {
                rowNode.detailNode.clearRowTop();
                rowNode.detailNode.setRowIndex();
            }
        }
        // set children for SSRM child rows
        var hasChildStore = rowNode.group && core_1._.exists(rowNode.childStore);
        if (hasChildStore) {
            var childStore = rowNode.childStore;
            if (rowNode.expanded) {
                childStore.setDisplayIndexes(displayIndexSeq, nextRowTop);
            }
            else {
                // we need to clear the row tops, as the row renderer depends on
                // this to know if the row should be faded out
                childStore.clearDisplayIndexes();
            }
        }
    };
    BlockUtils.prototype.binarySearchForDisplayIndex = function (displayRowIndex, rowNodes) {
        var bottomPointer = 0;
        var topPointer = rowNodes.length - 1;
        if (core_1._.missing(topPointer) || core_1._.missing(bottomPointer)) {
            console.warn("ag-grid: error: topPointer = " + topPointer + ", bottomPointer = " + bottomPointer);
            return null;
        }
        while (true) {
            var midPointer = Math.floor((bottomPointer + topPointer) / 2);
            var currentRowNode = rowNodes[midPointer];
            // first check current row for index
            if (currentRowNode.rowIndex === displayRowIndex) {
                return currentRowNode;
            }
            // then check if current row contains a detail row with the index
            var expandedMasterRow = currentRowNode.master && currentRowNode.expanded;
            if (expandedMasterRow && currentRowNode.detailNode.rowIndex === displayRowIndex) {
                return currentRowNode.detailNode;
            }
            // then check if child cache contains index
            var childStore = currentRowNode.childStore;
            if (currentRowNode.expanded && childStore && childStore.isDisplayIndexInStore(displayRowIndex)) {
                return childStore.getRowUsingDisplayIndex(displayRowIndex);
            }
            // otherwise adjust pointers to continue searching for index
            if (currentRowNode.rowIndex < displayRowIndex) {
                bottomPointer = midPointer + 1;
            }
            else if (currentRowNode.rowIndex > displayRowIndex) {
                topPointer = midPointer - 1;
            }
            else {
                console.warn("ag-Grid: error: unable to locate rowIndex = " + displayRowIndex + " in cache");
                return null;
            }
        }
    };
    BlockUtils.prototype.extractRowBounds = function (rowNode, index) {
        var extractRowBounds = function (currentRowNode) { return ({
            rowHeight: currentRowNode.rowHeight,
            rowTop: currentRowNode.rowTop
        }); };
        if (rowNode.rowIndex === index) {
            return extractRowBounds(rowNode);
        }
        if (rowNode.group && rowNode.expanded && core_1._.exists(rowNode.childStore)) {
            var childStore = rowNode.childStore;
            if (childStore.isDisplayIndexInStore(index)) {
                return childStore.getRowBounds(index);
            }
        }
        else if (rowNode.master && rowNode.expanded && core_1._.exists(rowNode.detailNode)) {
            if (rowNode.detailNode.rowIndex === index) {
                return extractRowBounds(rowNode.detailNode);
            }
        }
    };
    BlockUtils.prototype.getIndexAtPixel = function (rowNode, pixel) {
        // first check if pixel is in range of current row
        if (rowNode.isPixelInRange(pixel)) {
            return rowNode.rowIndex;
        }
        // then check if current row contains a detail row with pixel in range
        var expandedMasterRow = rowNode.master && rowNode.expanded;
        if (expandedMasterRow && rowNode.detailNode.isPixelInRange(pixel)) {
            return rowNode.detailNode.rowIndex;
        }
        // then check if it's a group row with a child cache with pixel in range
        if (rowNode.group && rowNode.expanded && core_1._.exists(rowNode.childStore)) {
            var childStore = rowNode.childStore;
            if (childStore.isPixelInRange(pixel)) {
                return childStore.getRowIndexAtPixel(pixel);
            }
        }
        // pixel is not within this row node or it's children / detail, so return undefined
    };
    BlockUtils.prototype.createNodeIdPrefix = function (parentRowNode) {
        var parts = [];
        var rowNode = parentRowNode;
        // pull keys from all parent nodes, but do not include the root node
        while (rowNode && rowNode.level >= 0) {
            parts.push(rowNode.key);
            rowNode = rowNode.parent;
        }
        if (parts.length > 0) {
            return parts.reverse().join('-');
        }
        else {
            // no prefix, so node id's are left as they are
            return undefined;
        }
    };
    BlockUtils.prototype.checkOpenByDefault = function (rowNode) {
        if (!rowNode.isExpandable()) {
            return;
        }
        var userFunc = this.gridOptionsWrapper.getIsServerSideGroupOpenByDefaultFunc();
        if (!userFunc) {
            return;
        }
        var params = {
            data: rowNode.data,
            rowNode: rowNode
        };
        var userFuncRes = userFunc(params);
        if (userFuncRes) {
            // we do this in a timeout, so that we don't expand a row node while in the middle
            // of setting up rows, setting up rows is complex enough without another chunk of work
            // getting added to the call stack. this is also helpful as openByDefault may or may
            // not happen (so makes setting up rows more deterministic by expands never happening)
            // and also checkOpenByDefault is shard with both store types, so easier control how it
            // impacts things by keeping it in new VM turn.
            window.setTimeout(function () { return rowNode.setExpanded(true); }, 0);
        }
    };
    __decorate([
        core_1.Autowired('valueService')
    ], BlockUtils.prototype, "valueService", void 0);
    __decorate([
        core_1.Autowired('columnController')
    ], BlockUtils.prototype, "columnController", void 0);
    __decorate([
        core_1.Autowired('ssrmNodeManager')
    ], BlockUtils.prototype, "nodeManager", void 0);
    __decorate([
        core_1.PostConstruct
    ], BlockUtils.prototype, "postConstruct", null);
    BlockUtils = __decorate([
        core_1.Bean('ssrmBlockUtils')
    ], BlockUtils);
    return BlockUtils;
}(core_1.BeanStub));
exports.BlockUtils = BlockUtils;
//# sourceMappingURL=blockUtils.js.map