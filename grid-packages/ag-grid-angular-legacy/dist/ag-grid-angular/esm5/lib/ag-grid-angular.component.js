import { __decorate, __metadata } from "tslib";
import { AfterViewInit, Component, ComponentFactoryResolver, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { AgPromise, ComponentUtil, Grid } from "ag-grid-community";
// @END_IMPORTS@
import { AngularFrameworkOverrides } from "./angularFrameworkOverrides";
import { AngularFrameworkComponentWrapper } from "./angularFrameworkComponentWrapper";
import { AgGridColumn } from "./ag-grid-column.component";
var AgGridAngular = /** @class */ (function () {
    function AgGridAngular(elementDef, viewContainerRef, angularFrameworkOverrides, frameworkComponentWrapper, componentFactoryResolver) {
        this.viewContainerRef = viewContainerRef;
        this.angularFrameworkOverrides = angularFrameworkOverrides;
        this.frameworkComponentWrapper = frameworkComponentWrapper;
        this.componentFactoryResolver = componentFactoryResolver;
        this._initialised = false;
        this._destroyed = false;
        // in order to ensure firing of gridReady is deterministic
        this._fullyReady = AgPromise.resolve(true);
        // @START@
        /** Specifies the status bar components to use in the status bar.     */
        this.statusBar = undefined;
        /** Specifies the side bar components.     */
        this.sideBar = undefined;
        /** Set to `true` to not show the context menu. Use if you don't want to use the default 'right click' context menu. Default: `false`     */
        this.suppressContextMenu = undefined;
        /** When using `suppressContextMenu`, you can use the `onCellContextMenu` function to provide your own code to handle cell `contextmenu` events.
         * This flag is useful to prevent the browser from showing its default context menu.
         * Default: `false`     */
        this.preventDefaultOnContextMenu = undefined;
        /** Allows context menu to show, even when `Ctrl` key is held down. Default: `false`     */
        this.allowContextMenuWithControlKey = undefined;
        /** Set to `true` to always show the column menu button, rather than only showing when the mouse is over the column header. Default: `false`     */
        this.suppressMenuHide = undefined;
        /** Set to `true` to use the browser's default tooltip instead of using the grid's Tooltip Component. Default: `false`     */
        this.enableBrowserTooltips = undefined;
        /** The delay in milliseconds that it takes for tooltips to show up once an element is hovered over.
         *     **Note:** This property does not work if `enableBrowserTooltips` is `true`.
         * Default: `2000`     */
        this.tooltipShowDelay = undefined;
        /** The delay in milliseconds that it takes for tooltips to hide once they have been displayed.
         *     **Note:** This property does not work if `enableBrowserTooltips` is `true`.
         * Default: `10000`     */
        this.tooltipHideDelay = undefined;
        /** Set to `true` to have tooltips follow the cursor once they are displayed. Default: `false`     */
        this.tooltipMouseTrack = undefined;
        /** DOM element to use as the popup parent for grid popups (context menu, column menu etc).     */
        this.popupParent = undefined;
        /** Set to `true` to also include headers when copying to clipboard using `Ctrl + C` clipboard. Default: `false`     */
        this.copyHeadersToClipboard = undefined;
        /** Set to `true` to also include group headers when copying to clipboard using `Ctrl + C` clipboard. Default: `false`     */
        this.copyGroupHeadersToClipboard = undefined;
        /** Specify the delimiter to use when copying to clipboard.
         * Default: `\t`     */
        this.clipboardDelimiter = undefined;
        /** Set to `true` to copy the cell range or focused cell to the clipboard and never the selected rows. Default: `false`     */
        this.suppressCopyRowsToClipboard = undefined;
        /** Set to `true` to copy rows instead of ranges when a range with only a single cell is selected. Default: `false`     */
        this.suppressCopySingleCellRanges = undefined;
        /** Set to `true` to work around a bug with Excel (Windows) that adds an extra empty line at the end of ranges copied to the clipboard. Default: `false`     */
        this.suppressLastEmptyLineOnPaste = undefined;
        /** Set to `true` to turn off paste operations within the grid.     */
        this.suppressClipboardPaste = undefined;
        /** Set to `true` to stop the grid trying to use the Clipboard API, if it is blocked, and immediately fallback to the workaround.     */
        this.suppressClipboardApi = undefined;
        /** Array of Column / Column Group definitions.     */
        this.columnDefs = undefined;
        /** A default column definition. Items defined in the actual column definitions get precedence.     */
        this.defaultColDef = undefined;
        /** A default column group definition. All column group definitions will use these properties. Items defined in the actual column group definition get precedence.     */
        this.defaultColGroupDef = undefined;
        /** An object map of custom column types which contain groups of properties that column definitions can inherit by referencing in their `type` property.     */
        this.columnTypes = undefined;
        /** Keeps the order of Columns maintained after new Column Definitions are updated. Default: `false`     */
        this.maintainColumnOrder = undefined;
        /** If `true`, then dots in field names (e.g. `'address.firstLine'`) are not treated as deep references. Allows you to use dots in your field name if you prefer. Default: `false`     */
        this.suppressFieldDotNotation = undefined;
        /** @deprecated     */
        this.deltaColumnMode = undefined;
        /** @deprecated     */
        this.applyColumnDefOrder = undefined;
        /** @deprecated     */
        this.immutableColumns = undefined;
        /** @deprecated     */
        this.suppressSetColumnStateEvents = undefined;
        /** @deprecated     */
        this.suppressColumnStateEvents = undefined;
        /** @deprecated Set via `defaultColDef.width`
         */
        this.colWidth = undefined;
        /** @deprecated Set via `defaultColDef.minWidth`
         */
        this.minColWidth = undefined;
        /** @deprecated Set via `defaultColDef.maxWidth`
         */
        this.maxColWidth = undefined;
        /** The height in pixels for the row containing the column label header. If not specified, it uses the theme value of `header-height`.     */
        this.headerHeight = undefined;
        /** The height in pixels for the rows containing header column groups. If not specified, it uses `headerHeight`.     */
        this.groupHeaderHeight = undefined;
        /** The height in pixels for the row containing the floating filters. If not specified, it uses the theme value of `header-height`.     */
        this.floatingFiltersHeight = undefined;
        /** The height in pixels for the row containing the columns when in pivot mode. If not specified, it uses `headerHeight`.     */
        this.pivotHeaderHeight = undefined;
        /** The height in pixels for the row containing header column groups when in pivot mode. If not specified, it uses `groupHeaderHeight`.     */
        this.pivotGroupHeaderHeight = undefined;
        /** Allow reordering and pinning columns by dragging columns from the Columns Tool Panel to the grid. Default: `false`     */
        this.allowDragFromColumnsToolPanel = undefined;
        /** Set to `true` to suppress column moving, i.e. to make the columns fixed position. Default: `false`     */
        this.suppressMovableColumns = undefined;
        /** If `true`, the `ag-column-moving` class is not added to the grid while columns are moving. In the default themes, this results in no animation when moving columns. Default: `false`     */
        this.suppressColumnMoveAnimation = undefined;
        /** If `true`, when you drag a column out of the grid (e.g. to the group zone) the column is not hidden. Default: `false`     */
        this.suppressDragLeaveHidesColumns = undefined;
        /** If `true`, when you drag a column into a row group panel the column is not hidden. Default: `false`     */
        this.suppressRowGroupHidesColumns = undefined;
        /** Set to `'shift'` to have shift-resize as the default resize operation (same as user holding down `Shift` while resizing).     */
        this.colResizeDefault = undefined;
        /** Suppresses auto-sizing columns for columns. In other words, double clicking a column's header's edge will not auto-size. Default: `false`     */
        this.suppressAutoSize = undefined;
        /** Number of pixels to add to a column width after the [auto-sizing](/column-sizing/#auto-size-columns) calculation.
         * Set this if you want to add extra room to accommodate (for example) sort icons, or some other dynamic nature of the header.
         * Default: `4`     */
        this.autoSizePadding = undefined;
        /** Set this to `true` to skip the `headerName` when `autoSize` is called by default. Default: `false`     */
        this.skipHeaderOnAutoSize = undefined;
        /** A map of component names to components.     */
        this.components = undefined;
        /** @deprecated As of v27, use `components` for framework components too.
         */
        this.frameworkComponents = undefined;
        /** Set to `'fullRow'` to enable Full Row Editing. Otherwise leave blank to edit one cell at a time.     */
        this.editType = undefined;
        /** Set to `true` to enable Single Click Editing for cells, to start editing with a single click. Default: `false`     */
        this.singleClickEdit = undefined;
        /** Set to `true` so that neither single nor double click starts editing. Default: `false`     */
        this.suppressClickEdit = undefined;
        /** Set to `true` so stop the grid updating data after and edit. When this is set, it is intended the application will update the data, eg in an external immutable store, and then pass the new dataset to the grid.     */
        this.readOnlyEdit = undefined;
        /** Set this to `true` to stop cell editing when grid loses focus.
         * The default is that the grid stays editing until focus goes onto another cell.
         * Default: `false`     */
        this.stopEditingWhenCellsLoseFocus = undefined;
        /** Set to `true` along with `enterMovesDownAfterEdit` to have Excel-style behaviour for the `Enter` key.
         * i.e. pressing the `Enter` key will move down to the cell beneath.
         * Default: `false`     */
        this.enterMovesDown = undefined;
        /** Set to `true` along with `enterMovesDown` to have Excel-style behaviour for the 'Enter' key.
         * i.e. pressing the Enter key will move down to the cell beneath.
         * Default: `false`     */
        this.enterMovesDownAfterEdit = undefined;
        /** Forces Cell Editing to start when backspace is pressed. This is only relevant for MacOS users.     */
        this.enableCellEditingOnBackspace = undefined;
        /** Set to `true` to enable Undo / Redo while editing.     */
        this.undoRedoCellEditing = undefined;
        /** Set the size of the undo / redo stack. Default: `10`     */
        this.undoRedoCellEditingLimit = undefined;
        /** @deprecated Use stopEditingWhenCellsLoseFocus instead
         */
        this.stopEditingWhenGridLosesFocus = undefined;
        /** A default configuration object used to export to CSV.     */
        this.defaultCsvExportParams = undefined;
        /** Prevents the user from exporting the grid to CSV. Default: `false`     */
        this.suppressCsvExport = undefined;
        /** A default configuration object used to export to Excel.     */
        this.defaultExcelExportParams = undefined;
        /** Prevents the user from exporting the grid to Excel. Default: `false`     */
        this.suppressExcelExport = undefined;
        /** A list (array) of Excel styles to be used when exporting to Excel with styles.     */
        this.excelStyles = undefined;
        /** @deprecated Use defaultCsvExportParams or defaultExcelExportParams
         */
        this.defaultExportParams = undefined;
        /** Rows are filtered using this text as a quick filter.     */
        this.quickFilterText = undefined;
        /** Set to `true` to turn on the quick filter cache, used to improve performance when using the quick filter. Default: `false`     */
        this.cacheQuickFilter = undefined;
        /** Set to `true` to override the default tree data filtering behaviour to instead exclude child nodes from filter results. Default: `false`     */
        this.excludeChildrenWhenTreeDataFiltering = undefined;
        /** Set to `true` to Enable Charts. Default: `false`     */
        this.enableCharts = undefined;
        /** The list of chart themes to be used.     */
        this.chartThemes = undefined;
        /** A map containing custom chart themes.     */
        this.customChartThemes = undefined;
        /** Chart theme overrides applied to all themes.     */
        this.chartThemeOverrides = undefined;
        /** Set to `true` to show the Chart Tool Panels button. Note this will also remove the 'hamburger' menu option from the Chart Toolbar and always display the remaining toolbar buttons. Default: `false`     */
        this.enableChartToolPanelsButton = undefined;
        /** Chart Tool Panel overrides.     */
        this.chartToolPanelsDef = undefined;
        /** Provide your own loading cell renderer to use when data is loading via a DataSource.
         * See [Loading Cell Renderer](https://www.ag-grid.com/javascript-data-grid/component-loading-cell-renderer/) for framework specific implementation details.     */
        this.loadingCellRenderer = undefined;
        /** @deprecated As of v27, use `loadingCellRenderer` for framework components too.
         */
        this.loadingCellRendererFramework = undefined;
        /** Params to be passed to the `loadingCellRenderer` component.     */
        this.loadingCellRendererParams = undefined;
        /** Callback to select which loading cell renderer to be used when data is loading via a DataSource.     */
        this.loadingCellRendererSelector = undefined;
        /** A map of key->value pairs for localising text within the grid.     */
        this.localeText = undefined;
        /** Set to `true` to enable Master Detail. Default: `false`     */
        this.masterDetail = undefined;
        /** Set to `true` to keep detail rows for when they are displayed again. Default: `false`     */
        this.keepDetailRows = undefined;
        /** Sets the number of details rows to keep. Default: `10`     */
        this.keepDetailRowsCount = undefined;
        /** Provide a custom `detailCellRenderer` to use when a master row is expanded.
         * See [Detail Cell Renderer](https://www.ag-grid.com/javascript-data-grid/master-detail-custom-detail/) for framework specific implementation details.     */
        this.detailCellRenderer = undefined;
        /** @deprecated As of v27, use `detailCellRenderer` for framework components too.
         */
        this.detailCellRendererFramework = undefined;
        /** Specifies the params to be used by the Detail Cell Renderer. Can also be a function that provides the params to enable dynamic definitions of the params.     */
        this.detailCellRendererParams = undefined;
        /** Set fixed height in pixels for each detail row.     */
        this.detailRowHeight = undefined;
        /** Set to `true` to have the detail grid dynamically change it's height to fit it's rows.     */
        this.detailRowAutoHeight = undefined;
        /** Provides a context object that is provided to different callbacks the grid uses. Used for passing additional information to the callbacks by your application.     */
        this.context = undefined;
        /** A list of grids to treat as Aligned Grids. If grids are aligned then the columns and horizontal scrolling will be kept in sync.     */
        this.alignedGrids = undefined;
        /** Change this value to set the tabIndex order of the Grid within your application. Default: `0`     */
        this.tabIndex = undefined;
        /** The number of rows rendered outside the viewable area the grid renders.
         * Having a buffer means the grid will have rows ready to show as the user slowly scrolls vertically.
         * Default: `10`     */
        this.rowBuffer = undefined;
        /** Set to `true` to turn on the value cache. Default: `false`     */
        this.valueCache = undefined;
        /** Set to `true` to configure the value cache to not expire after data updates. Default: `false`     */
        this.valueCacheNeverExpires = undefined;
        /** Set to `true` to allow cell expressions. Default: `false`     */
        this.enableCellExpressions = undefined;
        /** If `true`, row nodes do not have their parents set.
         * The grid doesn't use the parent reference, but it is included to help the client code navigate the node tree if it wants by providing bi-direction navigation up and down the tree.
         * If this is a problem (e.g. if you need to convert the tree to JSON, which does not allow cyclic dependencies) then set this to `true`.
         * Default: `false`     */
        this.suppressParentsInRowNodes = undefined;
        /** Disables touch support (but does not remove the browser's efforts to simulate mouse events on touch). Default: `false`     */
        this.suppressTouch = undefined;
        /** Set to `true` to not set focus back on the grid after a refresh. This can avoid issues where you want to keep the focus on another part of the browser. Default: `false`     */
        this.suppressFocusAfterRefresh = undefined;
        /** Disables the asynchronous nature of the events introduced in v10, and makes them synchronous. This property only exists for the purpose of supporting legacy code which has a dependency on synchronous events from earlier versions (v9 or earlier) of AG Grid.     **It is strongly recommended that you do not change this property unless you have legacy issues.** Default: `false`     */
        this.suppressAsyncEvents = undefined;
        /** The grid will check for `ResizeObserver` and use it if it exists in the browser, otherwise it will use the grid's alternative implementation. Some users reported issues with Chrome's `ResizeObserver`. Use this property to always use the grid's alternative implementation should such problems exist. Default: `false`     */
        this.suppressBrowserResizeObserver = undefined;
        /** Disables showing a warning message in the console if using a `gridOptions` or `colDef` property that doesn't exist. Default: `false`     */
        this.suppressPropertyNamesCheck = undefined;
        /** Disables change detection. Default: `false`     */
        this.suppressChangeDetection = undefined;
        /** Set this to `true` to enable debug information from the grid and related components. Will result in additional logging being output, but very useful when investigating problems. Default: `false`     */
        this.debug = undefined;
        /** Provide a template for 'loading' overlay.     */
        this.overlayLoadingTemplate = undefined;
        /** Provide a custom loading overlay component.
         * See [Loading Overlay Component](https://www.ag-grid.com/javascript-data-grid/component-overlay/#simple-loading-overlay-component) for framework specific implementation details.     */
        this.loadingOverlayComponent = undefined;
        /** @deprecated As of v27, use `loadingOverlayComponent` for framework components too.
         */
        this.loadingOverlayComponentFramework = undefined;
        /** Customise the parameters provided to the loading overlay component.     */
        this.loadingOverlayComponentParams = undefined;
        /** Disables the 'loading' overlay. Default: `false`     */
        this.suppressLoadingOverlay = undefined;
        /** Provide a template for 'no rows' overlay.     */
        this.overlayNoRowsTemplate = undefined;
        /** Provide a custom no rows overlay component.
         * See [No Rows Overlay Component](https://www.ag-grid.com/javascript-data-grid/component-overlay/#simple-no-rows-overlay-component) for framework specific implementation details.     */
        this.noRowsOverlayComponent = undefined;
        /** @deprecated As of v27, use `noRowsOverlayComponent` for framework components too.
         */
        this.noRowsOverlayComponentFramework = undefined;
        /** Customise the parameters provided to the no rows overlay component.     */
        this.noRowsOverlayComponentParams = undefined;
        /** Disables the 'no rows' overlay. Default: `false`     */
        this.suppressNoRowsOverlay = undefined;
        /** Set whether pagination is enabled. Default: `false`     */
        this.pagination = undefined;
        /** How many rows to load per page. If `paginationAutoPageSize` is specified, this property is ignored. Default: `100`     */
        this.paginationPageSize = undefined;
        /** Set to `true` so that the number of rows to load per page is automatically adjusted by the grid so each page shows enough rows to just fill the area designated for the grid. If `false`, `paginationPageSize` is used. Default: `false`     */
        this.paginationAutoPageSize = undefined;
        /** Set to `true` to have pages split children of groups when using Row Grouping or detail rows with Master Detail. Default: `false`     */
        this.paginateChildRows = undefined;
        /** If `true`, the default grid controls for navigation are hidden.
         * This is useful if `pagination=true` and you want to provide your own pagination controls.
         * Otherwise, when `pagination=true` the grid automatically shows the necessary controls at the bottom so that the user can navigate through the different pages.
         * Default: `false`     */
        this.suppressPaginationPanel = undefined;
        /** Set to `true` to enable pivot mode. Default: `false`     */
        this.pivotMode = undefined;
        /** When to show the 'pivot panel' (where you drag rows to pivot) at the top. Note that the pivot panel will never show if `pivotMode` is off. Default: `never`     */
        this.pivotPanelShow = undefined;
        /** When set and the grid is in pivot mode, automatically calculated totals will appear within the Pivot Column Groups, in the position specified.     */
        this.pivotColumnGroupTotals = undefined;
        /** When set and the grid is in pivot mode, automatically calculated totals will appear for each value column in the position specified.     */
        this.pivotRowTotals = undefined;
        /** If `true`, the grid will not swap in the grouping column when pivoting. Useful if pivoting using Server Side Row Model or Viewport Row Model and you want full control of all columns including the group column. Default: `false`     */
        this.pivotSuppressAutoColumn = undefined;
        /** When enabled, pivot column groups will appear 'fixed', without the ability to expand and collapse the column groups. Default: `false`     */
        this.suppressExpandablePivotGroups = undefined;
        /** If `true`, then row group, pivot and value aggregation will be read-only from the GUI. The grid will display what values are used for each, but will not allow the user to change the selection. Default: `false`     */
        this.functionsReadOnly = undefined;
        /** A map of 'function name' to 'function' for custom aggregation functions.     */
        this.aggFuncs = undefined;
        /** When `true`, column headers won't include the `aggFunc` name, e.g. `'sum(Bank Balance)`' will just be `'Bank Balance'`. Default: `false`     */
        this.suppressAggFuncInHeader = undefined;
        /** When `true`, the aggregations won't be computed for the root node of the grid. Default: `false`     */
        this.suppressAggAtRootLevel = undefined;
        /** When using change detection, only the updated column will be re-aggregated. Default: `false`     */
        this.aggregateOnlyChangedColumns = undefined;
        /** Set to `true` so that aggregations are not impacted by filtering. Default: `false`     */
        this.suppressAggFilteredOnly = undefined;
        /** Set to `true` to omit the value Column header when there is only a single value column. Default: `false`     */
        this.removePivotHeaderRowWhenSingleValueColumn = undefined;
        /** Set to `true` to enable Row Animation. Default: `false`     */
        this.animateRows = undefined;
        /** Set to `true` to have cells flash after data changes. Default: `false`     */
        this.enableCellChangeFlash = undefined;
        /** To be used in combination with `enableCellChangeFlash`, this configuration will set the delay in milliseconds of how long a cell should remain in its "flashed" state.
         * Default: `500`     */
        this.cellFlashDelay = undefined;
        /** To be used in combination with `enableCellChangeFlash`, this configuration will set the delay in milliseconds of how long the "flashed" state animation takes to fade away after the timer set by `cellFlashDelay` has completed.
         * Default: `1000`     */
        this.cellFadeDelay = undefined;
        /** Switch between layout options: `normal`, `autoHeight`, `print`.
         * Default: `normal`     */
        this.domLayout = undefined;
        /** When `true`, the order of rows and columns in the DOM are consistent with what is on screen. Default: `false`     */
        this.ensureDomOrder = undefined;
        /** Set to `true` to operate the grid in RTL (Right to Left) mode. Default: `false`     */
        this.enableRtl = undefined;
        /** Set to `true` so that the grid doesn't virtualise the columns. For example, if you have 100 columns, but only 10 visible due to scrolling, all 100 will always be rendered. Default: `false`     */
        this.suppressColumnVirtualisation = undefined;
        /** By default the grid has a limit of rendering a maximum of 500 rows at once (remember the grid only renders rows you can see, so unless your display shows more than 500 rows without vertically scrolling this will never be an issue).
         * <br />**This is only relevant if you are manually setting `rowBuffer` to a high value (rendering more rows than can be seen) or if your grid height is able to display more than 500 rows at once.**
         * Default: `false`     */
        this.suppressMaxRenderedRowRestriction = undefined;
        /** Set to `true` so that the grid doesn't virtualise the rows. For example, if you have 100 rows, but only 10 visible due to scrolling, all 100 will always be rendered. Default: `false`     */
        this.suppressRowVirtualisation = undefined;
        /** Set to `true` to enable Managed Row Dragging. Default: `false`     */
        this.rowDragManaged = undefined;
        /** Set to `true` to suppress row dragging. Default: `false`     */
        this.suppressRowDrag = undefined;
        /** Set to `true` to suppress moving rows while dragging the `rowDrag` waffle. This option highlights the position where the row will be placed and it will only move the row on mouse up. Default: `false`     */
        this.suppressMoveWhenRowDragging = undefined;
        /** Set to `true` to enable clicking and dragging anywhere on the row without the need for a drag handle. Default: `false`     */
        this.rowDragEntireRow = undefined;
        /** Set to `true` to enable dragging multiple rows at the same time. Default: `false`     */
        this.rowDragMultiRow = undefined;
        /** A callback that should return a string to be displayed by the `rowDragComp` while dragging a row.
         * If this callback is not set, the current cell value will be used.
         * If the `rowDragText` callback is set in the ColDef it will take precedence over this.     */
        this.rowDragText = undefined;
        /** Provide your own cell renderer component to use for full width rows.
         * See [Full Width Rows](https://www.ag-grid.com/javascript-data-grid/full-width-rows/) for framework specific implementation details.     */
        this.fullWidthCellRenderer = undefined;
        /** @deprecated As of v27, use `fullWidthCellRenderer` for framework components too.
         */
        this.fullWidthCellRendererFramework = undefined;
        /** Customise the parameters provided to the `fullWidthCellRenderer` component.     */
        this.fullWidthCellRendererParams = undefined;
        /** Set to `true` to have the detail grid embedded in the master grid's container and so link their horizontal scrolling.     */
        this.embedFullWidthRows = undefined;
        /** @deprecated     */
        this.deprecatedEmbedFullWidthRows = undefined;
        /** Specifies how the results of row grouping should be displayed.
         *
         *   The options are:
         *
         * - `'singleColumn'`: single group column automatically added by the grid.
         * - `'multipleColumns'`: a group column per row group is added automatically.
         * - `'groupRows'`: group rows are automatically added instead of group columns.
         * - `'custom'`: informs the grid that group columns will be provided.     */
        this.groupDisplayType = undefined;
        /** If grouping, set to the number of levels to expand by default, e.g. `0` for none, `1` for first level only, etc. Set to `-1` to expand everything. Default: `0`     */
        this.groupDefaultExpanded = undefined;
        /** Allows specifying the group 'auto column' if you are not happy with the default. If grouping, this column definition is included as the first column in the grid. If not grouping, this column is not included.     */
        this.autoGroupColumnDef = undefined;
        /** When `true`, preserves the current group order when sorting on non-group columns. Default: `false`     */
        this.groupMaintainOrder = undefined;
        /** When `true`, if you select a group, the children of the group will also be selected. Default: `false`     */
        this.groupSelectsChildren = undefined;
        /** Set to determine whether filters should be applied on aggregated group values. Default: `false`     */
        this.groupAggFiltering = undefined;
        /** If grouping, this controls whether to show a group footer when the group is expanded.
         * If `true`, then by default, the footer will contain aggregate data (if any) when shown and the header will be blank.
         * When closed, the header will contain the aggregate data regardless of this setting (as the footer is hidden anyway).
         * This is handy for 'total' rows, that are displayed below the data when the group is open, and alongside the group when it is closed.
         * Default: `false`     */
        this.groupIncludeFooter = undefined;
        /** Set to `true` to show a 'grand total' group footer across all groups. Default: `false`     */
        this.groupIncludeTotalFooter = undefined;
        /** If `true`, and showing footer, aggregate data will always be displayed at both the header and footer levels. This stops the possibly undesirable behaviour of the header details 'jumping' to the footer on expand. Default: `false`     */
        this.groupSuppressBlankHeader = undefined;
        /** If using `groupSelectsChildren`, then only the children that pass the current filter will get selected. Default: `false`     */
        this.groupSelectsFiltered = undefined;
        /** Shows the open group in the group column for non-group rows. Default: `false`     */
        this.showOpenedGroup = undefined;
        /** Set to `true` to collapse groups that only have one child.     */
        this.groupRemoveSingleChildren = undefined;
        /** Set to `true` to collapse lowest level groups that only have one child. Default: `false`     */
        this.groupRemoveLowestSingleChildren = undefined;
        /** Set to `true` to hide parents that are open. When used with multiple columns for showing groups, it can give a more pleasing user experience. Default: `false`     */
        this.groupHideOpenParents = undefined;
        /** When to show the 'row group panel' (where you drag rows to group) at the top. Default: `never`     */
        this.rowGroupPanelShow = undefined;
        /** Provide the Cell Renderer to use when `groupDisplayType = 'groupRows'`.
         * See [Group Row Cell Renderer](https://www.ag-grid.com/javascript-data-grid/grouping-group-rows/#providing-cell-renderer) for framework specific implementation details.     */
        this.groupRowRenderer = undefined;
        /** @deprecated As of v27, use `groupRowRenderer` for framework components too.
         */
        this.groupRowRendererFramework = undefined;
        /** Customise the parameters provided to the `groupRowRenderer` component.     */
        this.groupRowRendererParams = undefined;
        /** By default, when a column is un-grouped, i.e. using the Row Group Panel, it is made visible in the grid. This property stops the column becoming visible again when un-grouping. Default: `false`     */
        this.suppressMakeColumnVisibleAfterUnGroup = undefined;
        /** Set to `true` to enable the Grid to work with Tree Data. You must also implement the `getDataPath(data)` callback.     */
        this.treeData = undefined;
        /** Set to `true` to suppress sort indicators and actions from the row group panel. Default: `false`.     */
        this.rowGroupPanelSuppressSort = undefined;
        /** Set to `true` to keep open Group Rows visible at the top of the grid. Default: `false`.     */
        this.groupRowsSticky = undefined;
        /** @deprecated - this is now groupRowRendererParams.innerRenderer
         */
        this.groupRowInnerRenderer = undefined;
        /** @deprecated - this is now groupRowRendererParams.innerRenderer
         */
        this.groupRowInnerRendererFramework = undefined;
        /** @deprecated - Use groupDisplayType = 'multipleColumns' instead
         */
        this.groupMultiAutoColumn = undefined;
        /** @deprecated - Use groupDisplayType = 'groupRows' instead
         */
        this.groupUseEntireRow = undefined;
        /** @deprecated - Use groupDisplayType = 'custom' instead
         */
        this.groupSuppressAutoColumn = undefined;
        /** @deprecated - no longer needed, transaction updates keep group state
         */
        this.rememberGroupStateWhenNewData = undefined;
        /** Data to be displayed as pinned top rows in the grid.     */
        this.pinnedTopRowData = undefined;
        /** Data to be displayed as pinned bottom rows in the grid.     */
        this.pinnedBottomRowData = undefined;
        /** Sets the row model type. Default: `clientSide`     */
        this.rowModelType = undefined;
        /** Set the data to be displayed as rows in the grid.     */
        this.rowData = undefined;
        /** @deprecated Immutable Data is on by default when grid callback getRowId() is implemented
    Enables Immutable Data mode, for compatibility with immutable stores. Default: `false`
         */
        this.immutableData = undefined;
        /** How many milliseconds to wait before executing a batch of async transactions.     */
        this.asyncTransactionWaitMillis = undefined;
        /** Prevents Transactions changing sort, filter, group or pivot state when transaction only contains updates. Default: `false`     */
        this.suppressModelUpdateAfterUpdateTransaction = undefined;
        /** @deprecated     */
        this.deltaRowDataMode = undefined;
        /** @deprecated use asyncTransactionWaitMillis instead
         */
        this.batchUpdateWaitMillis = undefined;
        /** Provide the datasource for infinite scrolling.     */
        this.datasource = undefined;
        /** How many extra blank rows to display to the user at the end of the dataset, which sets the vertical scroll and then allows the grid to request viewing more rows of data.
         * Default: `1`     */
        this.cacheOverflowSize = undefined;
        /** How many extra blank rows to display to the user at the end of the dataset, which sets the vertical scroll and then allows the grid to request viewing more rows of data.
         * Default: `1`     */
        this.infiniteInitialRowCount = undefined;
        /** Set how many loading rows to display to the user for the root level group.
         * Default: `1`     */
        this.serverSideInitialRowCount = undefined;
        /** @deprecated Whether to use Full Store or Partial Store for storing rows. Default: `full`.
    Deprecated in favour of serverSideInfiniteScroll. When true, Partial Store is used. When false,
    Full Store is used.
         */
        this.serverSideStoreType = undefined;
        /** Set whether Server-side Row Model will use Infinite Scrolling
         * Default: `false`     */
        this.serverSideInfiniteScroll = undefined;
        /** How many rows for each block in the store, i.e. how many rows returned from the server at a time.
         * Default: `100`     */
        this.cacheBlockSize = undefined;
        /** How many blocks to keep in the store. Default is no limit, so every requested block is kept. Use this if you have memory concerns, and blocks that were least recently viewed will be purged when the limit is hit. The grid will additionally make sure it has all the blocks needed to display what is currently visible, in case this property is set to a low value.     */
        this.maxBlocksInCache = undefined;
        /** How many requests to hit the server with concurrently. If the max is reached, requests are queued.
         * Set to `-1` for no maximum restriction on requests.
         * Default: `2`     */
        this.maxConcurrentDatasourceRequests = undefined;
        /** How many milliseconds to wait before loading a block. Useful when infinite scrolling and scrolling over many infinite blocks, as it prevents blocks loading until scrolling has settled.     */
        this.blockLoadDebounceMillis = undefined;
        /** When enabled, closing group rows will remove children of that row. Next time the row is opened, child rows will be read from the datasource again. This property only applies when there is Row Grouping. Default: `false`     */
        this.purgeClosedRowNodes = undefined;
        /** Provide the `serverSideDatasource` for server side row model.     */
        this.serverSideDatasource = undefined;
        /** When enabled, always refreshes top level groups regardless of which column was sorted. This property only applies when there is Row Grouping & sorting is handled on the server. Default: `false`     */
        this.serverSideSortAllLevels = undefined;
        /** When enabled, always refreshes top level groups regardless of which column was filtered. This property only applies when there is Row Grouping & filtering is handled on the server. Default: `false`     */
        this.serverSideFilterAllLevels = undefined;
        /** When enabled, Sorting will be done on the server side. When serverSideInfiniteScroll=true, does nothing,
         * as Sorting is always server side when Infinite Scroll is active.
         * Default: `false`     */
        this.serverSideSortOnServer = undefined;
        /** When enabled, Filtering will be done on the server side. When serverSideInfiniteScroll=true, does nothing,
         * as Filtering is always server side when Infinite Scroll is active.
         * Default: `false`     */
        this.serverSideFilterOnServer = undefined;
        /** @deprecated This property has been deprecated. Use `serverSideSortAllLevels` instead.
         */
        this.serverSideSortingAlwaysResets = undefined;
        /** @deprecated This property has been deprecated. Use `serverSideFilterAllLevels` instead.
         */
        this.serverSideFilteringAlwaysResets = undefined;
        /** @deprecated     */
        this.suppressEnterpriseResetOnNewColumns = undefined;
        /** To use the viewport row model you need to provide the grid with a `viewportDatasource`.     */
        this.viewportDatasource = undefined;
        /** When using viewport row model, sets the page size for the viewport.     */
        this.viewportRowModelPageSize = undefined;
        /** When using viewport row model, sets the buffer size for the viewport.     */
        this.viewportRowModelBufferSize = undefined;
        /** Set to `true` to always show the horizontal scrollbar. Default: `false`     */
        this.alwaysShowHorizontalScroll = undefined;
        /** Set to `true` to always show the vertical scrollbar. Default: `false`     */
        this.alwaysShowVerticalScroll = undefined;
        /** Set to `true` to debounce the vertical scrollbar. Can provide smoother scrolling on slow machines. Default: `false`     */
        this.debounceVerticalScrollbar = undefined;
        /** Set to `true` to never show the horizontal scroll. This is useful if the grid is aligned with another grid and will scroll when the other grid scrolls. (Should not be used in combination with `alwaysShowHorizontalScroll`.) Default: `false`     */
        this.suppressHorizontalScroll = undefined;
        /** When `true`, the grid will not scroll to the top when new row data is provided. Use this if you don't want the default behaviour of scrolling to the top every time you load new data. Default: `false`     */
        this.suppressScrollOnNewData = undefined;
        /** When `true`, the grid will not allow mousewheel / touchpad scroll when popup elements are present. Default: `false`     */
        this.suppressScrollWhenPopupsAreOpen = undefined;
        /** When `true`, the grid will not use animation frames when drawing rows while scrolling. Use this if the grid is working fast enough that you don't need animation frames and you don't want the grid to flicker. Default: `false`     */
        this.suppressAnimationFrame = undefined;
        /** If `true`, middle clicks will result in `click` events for cells and rows. Otherwise the browser will use middle click to scroll the grid.<br />**Note:** Not all browsers fire `click` events with the middle button. Most will fire only `mousedown` and `mouseup` events, which can be used to focus a cell, but will not work to call the `onCellClicked` function. Default: `false`     */
        this.suppressMiddleClickScrolls = undefined;
        /** If `true`, mouse wheel events will be passed to the browser. Useful if your grid has no vertical scrolls and you want the mouse to scroll the browser page. Default: `false`     */
        this.suppressPreventDefaultOnMouseWheel = undefined;
        /** Tell the grid how wide in pixels the scrollbar is, which is used in grid width calculations. Set only if using non-standard browser-provided scrollbars, so the grid can use the non-standard size in its calculations.     */
        this.scrollbarWidth = undefined;
        /** Type of Row Selection: `single`, `multiple`.     */
        this.rowSelection = undefined;
        /** Set to `true` to allow multiple rows to be selected using single click. Default: `false`     */
        this.rowMultiSelectWithClick = undefined;
        /** If `true`, rows will not be deselected if you hold down `Ctrl` and click the row or press `Space`. Default: `false`     */
        this.suppressRowDeselection = undefined;
        /** If `true`, row selection won't happen when rows are clicked. Use when you only want checkbox selection. Default: `false`     */
        this.suppressRowClickSelection = undefined;
        /** @deprecated This property has been deprecated. Use `suppressCellFocus` instead.
         */
        this.suppressCellSelection = undefined;
        /** If `true`, cells won't be focusable. This means keyboard navigation will be disabled for grid cells, but remain enabled in other elements of the grid such as column headers, floating filters, tool panels. Default: `false`     */
        this.suppressCellFocus = undefined;
        /** If `true`, only a single range can be selected. Default: `false`     */
        this.suppressMultiRangeSelection = undefined;
        /** Set to `true` to be able to select the text within cells.
         *
         *     **Note:** When this is set to `true`, the clipboard service is disabled.
         * Default: `false`     */
        this.enableCellTextSelection = undefined;
        /** Set to `true` to enable Range Selection. Default: `false`     */
        this.enableRangeSelection = undefined;
        /** Set to `true` to enable the Range Handle. Default: `false`     */
        this.enableRangeHandle = undefined;
        /** Set to `true` to enable the Fill Handle. Default: `false`     */
        this.enableFillHandle = undefined;
        /** Set to `'x'` to force the fill handle direction to horizontal, or set to `'y'` to force the fill handle direction to vertical. Default: `xy`     */
        this.fillHandleDirection = undefined;
        /** Set this to `true` to prevent cell values from being cleared when the Range Selection is reduced by the Fill Handle. Default: `false`     */
        this.suppressClearOnFillReduction = undefined;
        /** Array defining the order in which sorting occurs (if sorting is enabled). Values can be `'asc'`, `'desc'` or `null`. For example: `sortingOrder: ['asc', 'desc']`. Default: `[null, 'asc', 'desc']`     */
        this.sortingOrder = undefined;
        /** Set to `true` to specify that the sort should take accented characters into account. If this feature is turned on the sort will be slower. Default: `false`     */
        this.accentedSort = undefined;
        /** Set to `true` to show the 'no sort' icon. Default: `false`     */
        this.unSortIcon = undefined;
        /** Set to `true` to suppress multi-sort when the user shift-clicks a column header. Default: `false`     */
        this.suppressMultiSort = undefined;
        /** Set to `true` to always multi-sort when the user clicks a column header, regardless of key presses. Default: `false`     */
        this.alwaysMultiSort = undefined;
        /** Set to `'ctrl'` to have multi sorting work using the `Ctrl` (or `Command ⌘` for Mac) key.     */
        this.multiSortKey = undefined;
        /** Set to `true` to suppress sorting of un-sorted data to match original row data. Default: `false`     */
        this.suppressMaintainUnsortedOrder = undefined;
        /** Icons to use inside the grid instead of the grid's default icons.     */
        this.icons = undefined;
        /** Default row height in pixels. Default: `25`     */
        this.rowHeight = undefined;
        /** The style properties to apply to all rows. Set to an object of key (style names) and values (style values)     */
        this.rowStyle = undefined;
        /** CSS class(es) for all rows. Provide either a string (class name) or array of strings (array of class names).     */
        this.rowClass = undefined;
        /** Rules which can be applied to include certain CSS classes.     */
        this.rowClassRules = undefined;
        /** Set to `true` to not highlight rows by adding the `ag-row-hover` CSS class. Default: `false`     */
        this.suppressRowHoverHighlight = undefined;
        /** Uses CSS `top` instead of CSS `transform` for positioning rows. Useful if the transform function is causing issues such as used in row spanning. Default: `false`     */
        this.suppressRowTransform = undefined;
        /** Set to `true` to highlight columns by adding the `ag-column-hover` CSS class. Default: `false`     */
        this.columnHoverHighlight = undefined;
        this.deltaSort = undefined;
        this.treeDataDisplayType = undefined;
        /** @deprecated     */
        this.angularCompileRows = undefined;
        /** @deprecated     */
        this.angularCompileFilters = undefined;
        this.functionsPassive = undefined;
        this.enableGroupEdit = undefined;
        /** For customising the context menu.     */
        this.getContextMenuItems = undefined;
        /** For customising the main 'column header' menu.     */
        this.getMainMenuItems = undefined;
        /** Allows user to process popups after they are created. Applications can use this if they want to, for example, reposition the popup.     */
        this.postProcessPopup = undefined;
        /** Allows you to process cells for the clipboard. Handy if for example you have `Date` objects that need to have a particular format if importing into Excel.     */
        this.processCellForClipboard = undefined;
        /** Allows you to process header values for the clipboard.     */
        this.processHeaderForClipboard = undefined;
        /** Allows you to process group header values for the clipboard.     */
        this.processGroupHeaderForClipboard = undefined;
        /** Allows you to process cells from the clipboard. Handy if for example you have number fields, and want to block non-numbers from getting into the grid.     */
        this.processCellFromClipboard = undefined;
        /** Allows you to get the data that would otherwise go to the clipboard. To be used when you want to control the 'copy to clipboard' operation yourself.     */
        this.sendToClipboard = undefined;
        /** Allows complete control of the paste operation, including cancelling the operation (so nothing happens) or replacing the data with other data.     */
        this.processDataFromClipboard = undefined;
        /** Grid calls this method to know if an external filter is present.     */
        this.isExternalFilterPresent = undefined;
        /** Should return `true` if external filter passes, otherwise `false`.     */
        this.doesExternalFilterPass = undefined;
        /** Callback to be used to customise the chart toolbar items.     */
        this.getChartToolbarItems = undefined;
        /** Callback to enable displaying the chart in an alternative chart container.     */
        this.createChartContainer = undefined;
        /** Allows overriding the default behaviour for when user hits navigation (arrow) key when a header is focused. Return the next Header position to navigate to or `null` to stay on current header.     */
        this.navigateToNextHeader = undefined;
        /** Allows overriding the default behaviour for when user hits `Tab` key when a header is focused. Return the next Header position to navigate to or `null` to stay on current header.     */
        this.tabToNextHeader = undefined;
        /** Allows overriding the default behaviour for when user hits navigation (arrow) key when a cell is focused. Return the next Cell position to navigate to or `null` to stay on current cell.     */
        this.navigateToNextCell = undefined;
        /** Allows overriding the default behaviour for when user hits `Tab` key when a cell is focused. Return the next Cell position to navigate to or null to stay on current cell.     */
        this.tabToNextCell = undefined;
        /** @deprecated - Set via `colDef.suppressKeyboardEvent`. If you need this to be set for every column set via the `defaultColDef.suppressKeyboardEvent` property.
         */
        this.suppressKeyboardEvent = undefined;
        /** @deprecated - Use `getLocaleText` instead.
         */
        this.localeTextFunc = undefined;
        /** A callback for localising text within the grid.     */
        this.getLocaleText = undefined;
        /** Allows overriding what `document` is used. Currently used by Drag and Drop (may extend to other places in the future). Use this when you want the grid to use a different `document` than the one available on the global scope. This can happen if docking out components (something which Electron supports)     */
        this.getDocument = undefined;
        /** Allows user to format the numbers in the pagination panel, i.e. 'row count' and 'page number' labels. This is for pagination panel only, to format numbers inside the grid's cells (i.e. your data), then use `valueFormatter` in the column definitions.     */
        this.paginationNumberFormatter = undefined;
        /** @deprecated - Use `getGroupRowAgg` instead.
         */
        this.groupRowAggNodes = undefined;
        /** Callback to use when you need access to more then the current column for aggregation.     */
        this.getGroupRowAgg = undefined;
        /** (Client-side Row Model only) Allows groups to be open by default.     */
        this.isGroupOpenByDefault = undefined;
        /** Allows default sorting of groups.     */
        this.initialGroupOrderComparator = undefined;
        /** @deprecated - Use `initialGroupOrderComparator` instead
         */
        this.defaultGroupOrderComparator = undefined;
        /** @deprecated - Use `processPivotResultColDef` instead
         */
        this.processSecondaryColDef = undefined;
        /** @deprecated - Use `processPivotResultColGroupDef` instead
         */
        this.processSecondaryColGroupDef = undefined;
        /** Callback to be used with pivoting, to allow changing the second column definition.     */
        this.processPivotResultColDef = undefined;
        /** Callback to be used with pivoting, to allow changing the second column group definition.     */
        this.processPivotResultColGroupDef = undefined;
        /** Callback to be used when working with Tree Data when `treeData = true`.     */
        this.getDataPath = undefined;
        /** @deprecated - Use initialGroupOrderComparator instead
         */
        this.defaultGroupSortComparator = undefined;
        /** Allows setting the child count for a group row.     */
        this.getChildCount = undefined;
        /** Allows providing different params for different levels of grouping.     */
        this.getServerSideGroupLevelParams = undefined;
        /** @deprecated use `getServerSideGroupLevelParams` instead.
         */
        this.getServerSideStoreParams = undefined;
        /** Allows groups to be open by default.     */
        this.isServerSideGroupOpenByDefault = undefined;
        /** Allows cancelling transactions.     */
        this.isApplyServerSideTransaction = undefined;
        /** SSRM Tree Data: Allows specifying which rows are expandable.     */
        this.isServerSideGroup = undefined;
        /** SSRM Tree Data: Allows specifying group keys.     */
        this.getServerSideGroupKey = undefined;
        /** Return a business key for the node. If implemented, each row in the DOM will have an attribute `row-id='abc'` where `abc` is what you return as the business key.
         * This is useful for automated testing, as it provides a way for your tool to identify rows based on unique business keys.     */
        this.getBusinessKeyForNode = undefined;
        /** @deprecated Use `getRowId` instead - however be aware, `getRowId()` will also set grid option `immutableData=true`
    Allows you to set the ID for a particular row node based on the data.
         */
        this.getRowNodeId = undefined;
        /** Allows setting the ID for a particular row node based on the data.     */
        this.getRowId = undefined;
        /** When enabled, getRowId() callback is implemented and new Row Data is set, the grid will disregard all previous rows and treat the new Row Data as new data. As a consequence, all Row State (eg selection, rendered rows) will be reset.  Default: `false`     */
        this.resetRowDataOnUpdate = undefined;
        /** Allows you to process rows after they are created, so you can do final adding of custom attributes etc.     */
        this.processRowPostCreate = undefined;
        /** Callback to be used to determine which rows are selectable. By default rows are selectable, so return `false` to make a row un-selectable.     */
        this.isRowSelectable = undefined;
        /** Callback to be used with Master Detail to determine if a row should be a master row. If `false` is returned no detail row will exist for this row.     */
        this.isRowMaster = undefined;
        /** Callback to fill values instead of simply copying values or increasing number values using linear progression.     */
        this.fillOperation = undefined;
        /** @deprecated Use `postSortRows` instead
         */
        this.postSort = undefined;
        /** Callback to perform additional sorting after the grid has sorted the rows.     */
        this.postSortRows = undefined;
        /** Callback version of property `rowStyle` to set style for each row individually. Function should return an object of CSS values or undefined for no styles.     */
        this.getRowStyle = undefined;
        /** Callback version of property `rowClass` to set class(es) for each row individually. Function should return either a string (class name), array of strings (array of class names) or undefined for no class.     */
        this.getRowClass = undefined;
        /** Callback version of property `rowHeight` to set height for each row individually. Function should return a positive number of pixels, or return `null`/`undefined` to use the default row height.     */
        this.getRowHeight = undefined;
        /** @deprecated Use `isFullWidthRow` instead.
         */
        this.isFullWidthCell = undefined;
        /** Tells the grid if this row should be rendered as full width.     */
        this.isFullWidthRow = undefined;
        /** The tool panel was hidden or shown. Use `api.isToolPanelShowing()` to get status.     */
        this.toolPanelVisibleChanged = new EventEmitter();
        /** The tool panel size has been changed.     */
        this.toolPanelSizeChanged = new EventEmitter();
        /** Paste operation has started.     */
        this.pasteStart = new EventEmitter();
        /** Paste operation has ended.     */
        this.pasteEnd = new EventEmitter();
        /** A column, or group of columns, was hidden / shown.     */
        this.columnVisible = new EventEmitter();
        /** A column, or group of columns, was pinned / unpinned.     */
        this.columnPinned = new EventEmitter();
        /** A column was resized.     */
        this.columnResized = new EventEmitter();
        /** A column was moved. To find out when the column move is finished you can use the `dragStopped` event below.     */
        this.columnMoved = new EventEmitter();
        /** A value column was added or removed.     */
        this.columnValueChanged = new EventEmitter();
        /** The pivot mode flag was changed.     */
        this.columnPivotModeChanged = new EventEmitter();
        /** A pivot column was added, removed or order changed.     */
        this.columnPivotChanged = new EventEmitter();
        /** A column group was opened / closed.     */
        this.columnGroupOpened = new EventEmitter();
        /** User set new columns.     */
        this.newColumnsLoaded = new EventEmitter();
        /** The list of grid columns changed.     */
        this.gridColumnsChanged = new EventEmitter();
        /** The list of displayed columns changed. This can result from columns open / close, column move, pivot, group, etc.     */
        this.displayedColumnsChanged = new EventEmitter();
        /** The list of rendered columns changed (only columns in the visible scrolled viewport are rendered by default).     */
        this.virtualColumnsChanged = new EventEmitter();
        /** Shotgun - gets called when either a) new columns are set or b) `columnApi.setState()` is used, so everything has changed.     */
        this.columnEverythingChanged = new EventEmitter();
        /** Only used by Angular, React and VueJS AG Grid components (not used if doing plain JavaScript).
         * If the grid receives changes due to bound properties, this event fires after the grid has finished processing the change.     */
        this.componentStateChanged = new EventEmitter();
        /** Value has changed after editing (this event will not fire if editing was cancelled, eg ESC was pressed) or
         *   if cell value has changed as a result of paste operation.     */
        this.cellValueChanged = new EventEmitter();
        /** Value has changed after editing. Only fires when doing Read Only Edits, ie `readOnlyEdit=true`.     */
        this.cellEditRequest = new EventEmitter();
        /** A cell's value within a row has changed. This event corresponds to Full Row Editing only.     */
        this.rowValueChanged = new EventEmitter();
        /** Editing a cell has started.     */
        this.cellEditingStarted = new EventEmitter();
        /** Editing a cell has stopped.     */
        this.cellEditingStopped = new EventEmitter();
        /** Editing a row has started (when row editing is enabled). When row editing, this event will be fired once and `cellEditingStarted` will be fired for each individual cell. Only fires when doing Full Row Editing.     */
        this.rowEditingStarted = new EventEmitter();
        /** Editing a row has stopped (when row editing is enabled). When row editing, this event will be fired once and `cellEditingStopped` will be fired for each individual cell. Only fires when doing Full Row Editing.     */
        this.rowEditingStopped = new EventEmitter();
        /** Filter has been opened.     */
        this.filterOpened = new EventEmitter();
        /** Filter has been modified and applied.     */
        this.filterChanged = new EventEmitter();
        /** Filter was modified but not applied. Used when filters have 'Apply' buttons.     */
        this.filterModified = new EventEmitter();
        /** A chart has been created.     */
        this.chartCreated = new EventEmitter();
        /** The data range for the chart has been changed.     */
        this.chartRangeSelectionChanged = new EventEmitter();
        /** Formatting changes have been made by users through the Format Panel.     */
        this.chartOptionsChanged = new EventEmitter();
        /** A chart has been destroyed.     */
        this.chartDestroyed = new EventEmitter();
        /** DOM event `keyDown` happened on a cell.     */
        this.cellKeyDown = new EventEmitter();
        /** DOM event `keyPress` happened on a cell.     */
        this.cellKeyPress = new EventEmitter();
        /** The grid has initialised and is ready for most api calls, but may not be fully rendered yet     */
        this.gridReady = new EventEmitter();
        /** Fired the first time data is rendered into the grid. Use this event if you want to auto resize columns based on their contents     */
        this.firstDataRendered = new EventEmitter();
        /** The size of the grid `div` has changed. In other words, the grid was resized.     */
        this.gridSizeChanged = new EventEmitter();
        /** Displayed rows have changed. Triggered after sort, filter or tree expand / collapse events.     */
        this.modelUpdated = new EventEmitter();
        /** A row was removed from the DOM, for any reason. Use to clean up resources (if any) used by the row.     */
        this.virtualRowRemoved = new EventEmitter();
        /** Which rows are rendered in the DOM has changed.     */
        this.viewportChanged = new EventEmitter();
        /** The body was scrolled horizontally or vertically.     */
        this.bodyScroll = new EventEmitter();
        /** Main body of the grid has stopped scrolling, either horizontally or vertically.     */
        this.bodyScrollEnd = new EventEmitter();
        /** When dragging starts. This could be any action that uses the grid's Drag and Drop service, e.g. Column Moving, Column Resizing, Range Selection, Fill Handle, etc.     */
        this.dragStarted = new EventEmitter();
        /** When dragging stops. This could be any action that uses the grid's Drag and Drop service, e.g. Column Moving, Column Resizing, Range Selection, Fill Handle, etc.     */
        this.dragStopped = new EventEmitter();
        /** Triggered every time the paging state changes. Some of the most common scenarios for this event to be triggered are:
         *
         *   - The page size changes.
         *   - The current shown page is changed.
         *   - New data is loaded onto the grid.     */
        this.paginationChanged = new EventEmitter();
        /** A drag has started, or dragging was already started and the mouse has re-entered the grid having previously left the grid.     */
        this.rowDragEnter = new EventEmitter();
        /** The mouse has moved while dragging.     */
        this.rowDragMove = new EventEmitter();
        /** The mouse has left the grid while dragging.     */
        this.rowDragLeave = new EventEmitter();
        /** The drag has finished over the grid.     */
        this.rowDragEnd = new EventEmitter();
        /** A row group column was added or removed.     */
        this.columnRowGroupChanged = new EventEmitter();
        /** A row group was opened or closed.     */
        this.rowGroupOpened = new EventEmitter();
        /** Fired when calling either of the API methods `expandAll()` or `collapseAll()`.     */
        this.expandOrCollapseAll = new EventEmitter();
        /** The client has set new pinned row data into the grid.     */
        this.pinnedRowDataChanged = new EventEmitter();
        /** @deprecated No longer fired, use onRowDataUpdated instead
         */
        this.rowDataChanged = new EventEmitter();
        /** The client has updated data for the grid by either a) setting new Row Data or b) Applying a Row Transaction.     */
        this.rowDataUpdated = new EventEmitter();
        /** Async transactions have been applied. Contains a list of all transaction results.     */
        this.asyncTransactionsFlushed = new EventEmitter();
        /** Cell is clicked.     */
        this.cellClicked = new EventEmitter();
        /** Cell is double clicked.     */
        this.cellDoubleClicked = new EventEmitter();
        /** Cell is focused.     */
        this.cellFocused = new EventEmitter();
        /** Mouse entered cell.     */
        this.cellMouseOver = new EventEmitter();
        /** Mouse left cell.     */
        this.cellMouseOut = new EventEmitter();
        /** Mouse down on cell.     */
        this.cellMouseDown = new EventEmitter();
        /** Row is clicked.     */
        this.rowClicked = new EventEmitter();
        /** Row is double clicked.     */
        this.rowDoubleClicked = new EventEmitter();
        /** Row is selected or deselected. The event contains the node in question, so call the node's `isSelected()` method to see if it was just selected or deselected.     */
        this.rowSelected = new EventEmitter();
        /** Row selection is changed. Use the grid API `getSelectedNodes()` or `getSelectedRows()` to get the new list of selected nodes / row data.     */
        this.selectionChanged = new EventEmitter();
        /** Cell is right clicked.     */
        this.cellContextMenu = new EventEmitter();
        /** A change to range selection has occurred.     */
        this.rangeSelectionChanged = new EventEmitter();
        /** Sort has changed. The grid also listens for this and updates the model.     */
        this.sortChanged = new EventEmitter();
        this.columnRowGroupChangeRequest = new EventEmitter();
        this.columnPivotChangeRequest = new EventEmitter();
        this.columnValueChangeRequest = new EventEmitter();
        this.columnAggFuncChangeRequest = new EventEmitter();
        this._nativeElement = elementDef.nativeElement;
    }
    AgGridAngular.prototype.ngAfterViewInit = function () {
        this.frameworkComponentWrapper.setViewContainerRef(this.viewContainerRef);
        this.frameworkComponentWrapper.setComponentFactoryResolver(this.componentFactoryResolver);
        this.angularFrameworkOverrides.setEmitterUsedCallback(this.isEmitterUsed.bind(this));
        this.gridOptions = ComponentUtil.copyAttributesToGridOptions(this.gridOptions, this, true);
        this.gridParams = {
            globalEventListener: this.globalEventListener.bind(this),
            frameworkOverrides: this.angularFrameworkOverrides,
            providedBeanInstances: {
                frameworkComponentWrapper: this.frameworkComponentWrapper
            },
            modules: (this.modules || [])
        };
        if (this.columns && this.columns.length > 0) {
            this.gridOptions.columnDefs = this.columns
                .map(function (column) {
                return column.toColDef();
            });
        }
        new Grid(this._nativeElement, this.gridOptions, this.gridParams);
        if (this.gridOptions.api) {
            this.api = this.gridOptions.api;
        }
        if (this.gridOptions.columnApi) {
            this.columnApi = this.gridOptions.columnApi;
        }
        this._initialised = true;
        // sometimes, especially in large client apps gridReady can fire before ngAfterViewInit
        // this ties these together so that gridReady will always fire after agGridAngular's ngAfterViewInit
        // the actual containing component's ngAfterViewInit will fire just after agGridAngular's
        this._fullyReady.resolveNow(null, function (resolve) { return resolve; });
    };
    AgGridAngular.prototype.ngOnChanges = function (changes) {
        if (this._initialised) {
            ComponentUtil.processOnChange(changes, this.gridOptions, this.api, this.columnApi);
        }
    };
    AgGridAngular.prototype.ngOnDestroy = function () {
        if (this._initialised) {
            // need to do this before the destroy, so we know not to emit any events
            // while tearing down the grid.
            this._destroyed = true;
            if (this.api) {
                this.api.destroy();
            }
        }
    };
    // we'll emit the emit if a user is listening for a given event either on the component via normal angular binding
    // or via gridOptions
    AgGridAngular.prototype.isEmitterUsed = function (eventType) {
        var emitter = this[eventType];
        var hasEmitter = !!emitter && emitter.observers && emitter.observers.length > 0;
        // gridReady => onGridReady
        var asEventName = "on" + eventType.charAt(0).toUpperCase() + eventType.substring(1);
        var hasGridOptionListener = !!this.gridOptions && !!this.gridOptions[asEventName];
        return hasEmitter || hasGridOptionListener;
    };
    AgGridAngular.prototype.globalEventListener = function (eventType, event) {
        // if we are tearing down, don't emit angular events, as this causes
        // problems with the angular router
        if (this._destroyed) {
            return;
        }
        // generically look up the eventType
        var emitter = this[eventType];
        if (emitter && this.isEmitterUsed(eventType)) {
            if (eventType === 'gridReady') {
                // if the user is listening for gridReady, wait for ngAfterViewInit to fire first, then emit the
                // gridReady event
                this._fullyReady.then((function (result) {
                    emitter.emit(event);
                }));
            }
            else {
                emitter.emit(event);
            }
        }
    };
    AgGridAngular.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: AngularFrameworkOverrides },
        { type: AngularFrameworkComponentWrapper },
        { type: ComponentFactoryResolver }
    ]; };
    __decorate([
        ContentChildren(AgGridColumn),
        __metadata("design:type", QueryList)
    ], AgGridAngular.prototype, "columns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "gridOptions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AgGridAngular.prototype, "modules", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "statusBar", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "sideBar", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressContextMenu", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "preventDefaultOnContextMenu", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "allowContextMenuWithControlKey", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressMenuHide", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "enableBrowserTooltips", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "tooltipShowDelay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "tooltipHideDelay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "tooltipMouseTrack", void 0);
    __decorate([
        Input(),
        __metadata("design:type", HTMLElement)
    ], AgGridAngular.prototype, "popupParent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "copyHeadersToClipboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "copyGroupHeadersToClipboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "clipboardDelimiter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressCopyRowsToClipboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressCopySingleCellRanges", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressLastEmptyLineOnPaste", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressClipboardPaste", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressClipboardApi", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AgGridAngular.prototype, "columnDefs", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "defaultColDef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "defaultColGroupDef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "columnTypes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "maintainColumnOrder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressFieldDotNotation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "deltaColumnMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "applyColumnDefOrder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "immutableColumns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressSetColumnStateEvents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressColumnStateEvents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "colWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "minColWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "maxColWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "headerHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "groupHeaderHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "floatingFiltersHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "pivotHeaderHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "pivotGroupHeaderHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "allowDragFromColumnsToolPanel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressMovableColumns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressColumnMoveAnimation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressDragLeaveHidesColumns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressRowGroupHidesColumns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "colResizeDefault", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressAutoSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "autoSizePadding", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "skipHeaderOnAutoSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "components", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "frameworkComponents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "editType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "singleClickEdit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressClickEdit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "readOnlyEdit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "stopEditingWhenCellsLoseFocus", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "enterMovesDown", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "enterMovesDownAfterEdit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "enableCellEditingOnBackspace", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "undoRedoCellEditing", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "undoRedoCellEditingLimit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "stopEditingWhenGridLosesFocus", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "defaultCsvExportParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressCsvExport", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "defaultExcelExportParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressExcelExport", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AgGridAngular.prototype, "excelStyles", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "defaultExportParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "quickFilterText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "cacheQuickFilter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "excludeChildrenWhenTreeDataFiltering", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "enableCharts", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AgGridAngular.prototype, "chartThemes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "customChartThemes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "chartThemeOverrides", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "enableChartToolPanelsButton", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "chartToolPanelsDef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "loadingCellRenderer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "loadingCellRendererFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "loadingCellRendererParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "loadingCellRendererSelector", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "localeText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "masterDetail", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "keepDetailRows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "keepDetailRowsCount", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "detailCellRenderer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "detailCellRendererFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "detailCellRendererParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "detailRowHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "detailRowAutoHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "context", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AgGridAngular.prototype, "alignedGrids", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "tabIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "rowBuffer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "valueCache", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "valueCacheNeverExpires", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "enableCellExpressions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressParentsInRowNodes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressTouch", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressFocusAfterRefresh", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressAsyncEvents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressBrowserResizeObserver", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressPropertyNamesCheck", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressChangeDetection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "debug", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "overlayLoadingTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "loadingOverlayComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "loadingOverlayComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "loadingOverlayComponentParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressLoadingOverlay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "overlayNoRowsTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "noRowsOverlayComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "noRowsOverlayComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "noRowsOverlayComponentParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressNoRowsOverlay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "pagination", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "paginationPageSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "paginationAutoPageSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "paginateChildRows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressPaginationPanel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "pivotMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "pivotPanelShow", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "pivotColumnGroupTotals", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "pivotRowTotals", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "pivotSuppressAutoColumn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressExpandablePivotGroups", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "functionsReadOnly", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "aggFuncs", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressAggFuncInHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressAggAtRootLevel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "aggregateOnlyChangedColumns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressAggFilteredOnly", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "removePivotHeaderRowWhenSingleValueColumn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "animateRows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "enableCellChangeFlash", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "cellFlashDelay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "cellFadeDelay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "domLayout", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "ensureDomOrder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "enableRtl", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressColumnVirtualisation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressMaxRenderedRowRestriction", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressRowVirtualisation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "rowDragManaged", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressRowDrag", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressMoveWhenRowDragging", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "rowDragEntireRow", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "rowDragMultiRow", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "rowDragText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "fullWidthCellRenderer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "fullWidthCellRendererFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "fullWidthCellRendererParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "embedFullWidthRows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "deprecatedEmbedFullWidthRows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "groupDisplayType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "groupDefaultExpanded", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "autoGroupColumnDef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "groupMaintainOrder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "groupSelectsChildren", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "groupAggFiltering", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "groupIncludeFooter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "groupIncludeTotalFooter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "groupSuppressBlankHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "groupSelectsFiltered", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "showOpenedGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "groupRemoveSingleChildren", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "groupRemoveLowestSingleChildren", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "groupHideOpenParents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "rowGroupPanelShow", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "groupRowRenderer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "groupRowRendererFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "groupRowRendererParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressMakeColumnVisibleAfterUnGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "treeData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "rowGroupPanelSuppressSort", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "groupRowsSticky", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "groupRowInnerRenderer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "groupRowInnerRendererFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "groupMultiAutoColumn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "groupUseEntireRow", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "groupSuppressAutoColumn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "rememberGroupStateWhenNewData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AgGridAngular.prototype, "pinnedTopRowData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AgGridAngular.prototype, "pinnedBottomRowData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "rowModelType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AgGridAngular.prototype, "rowData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "immutableData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "asyncTransactionWaitMillis", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressModelUpdateAfterUpdateTransaction", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "deltaRowDataMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "batchUpdateWaitMillis", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "datasource", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "cacheOverflowSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "infiniteInitialRowCount", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "serverSideInitialRowCount", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "serverSideStoreType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "serverSideInfiniteScroll", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "cacheBlockSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "maxBlocksInCache", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "maxConcurrentDatasourceRequests", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "blockLoadDebounceMillis", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "purgeClosedRowNodes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "serverSideDatasource", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "serverSideSortAllLevels", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "serverSideFilterAllLevels", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "serverSideSortOnServer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "serverSideFilterOnServer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "serverSideSortingAlwaysResets", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "serverSideFilteringAlwaysResets", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressEnterpriseResetOnNewColumns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "viewportDatasource", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "viewportRowModelPageSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "viewportRowModelBufferSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "alwaysShowHorizontalScroll", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "alwaysShowVerticalScroll", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "debounceVerticalScrollbar", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressHorizontalScroll", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressScrollOnNewData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressScrollWhenPopupsAreOpen", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressAnimationFrame", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressMiddleClickScrolls", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressPreventDefaultOnMouseWheel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "scrollbarWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "rowSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "rowMultiSelectWithClick", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressRowDeselection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressRowClickSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressCellSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressCellFocus", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressMultiRangeSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "enableCellTextSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "enableRangeSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "enableRangeHandle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "enableFillHandle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "fillHandleDirection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressClearOnFillReduction", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AgGridAngular.prototype, "sortingOrder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "accentedSort", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "unSortIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressMultiSort", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "alwaysMultiSort", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "multiSortKey", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressMaintainUnsortedOrder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "icons", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridAngular.prototype, "rowHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "rowStyle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "rowClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridAngular.prototype, "rowClassRules", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressRowHoverHighlight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "suppressRowTransform", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "columnHoverHighlight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "deltaSort", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridAngular.prototype, "treeDataDisplayType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "angularCompileRows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "angularCompileFilters", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "functionsPassive", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "enableGroupEdit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getContextMenuItems", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getMainMenuItems", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "postProcessPopup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "processCellForClipboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "processHeaderForClipboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "processGroupHeaderForClipboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "processCellFromClipboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "sendToClipboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "processDataFromClipboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "isExternalFilterPresent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "doesExternalFilterPass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getChartToolbarItems", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "createChartContainer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "navigateToNextHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "tabToNextHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "navigateToNextCell", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "tabToNextCell", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "suppressKeyboardEvent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "localeTextFunc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getLocaleText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getDocument", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "paginationNumberFormatter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "groupRowAggNodes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getGroupRowAgg", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "isGroupOpenByDefault", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "initialGroupOrderComparator", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "defaultGroupOrderComparator", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "processSecondaryColDef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "processSecondaryColGroupDef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "processPivotResultColDef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "processPivotResultColGroupDef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getDataPath", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "defaultGroupSortComparator", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getChildCount", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getServerSideGroupLevelParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getServerSideStoreParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "isServerSideGroupOpenByDefault", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "isApplyServerSideTransaction", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "isServerSideGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getServerSideGroupKey", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getBusinessKeyForNode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getRowNodeId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getRowId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridAngular.prototype, "resetRowDataOnUpdate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "processRowPostCreate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "isRowSelectable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "isRowMaster", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "fillOperation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "postSort", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "postSortRows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getRowStyle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getRowClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "getRowHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "isFullWidthCell", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridAngular.prototype, "isFullWidthRow", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "toolPanelVisibleChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "toolPanelSizeChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "pasteStart", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "pasteEnd", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "columnVisible", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "columnPinned", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "columnResized", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "columnMoved", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "columnValueChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "columnPivotModeChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "columnPivotChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "columnGroupOpened", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "newColumnsLoaded", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "gridColumnsChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "displayedColumnsChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "virtualColumnsChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "columnEverythingChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "componentStateChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "cellValueChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "cellEditRequest", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "rowValueChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "cellEditingStarted", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "cellEditingStopped", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "rowEditingStarted", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "rowEditingStopped", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "filterOpened", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "filterChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "filterModified", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "chartCreated", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "chartRangeSelectionChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "chartOptionsChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "chartDestroyed", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "cellKeyDown", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "cellKeyPress", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "gridReady", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "firstDataRendered", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "gridSizeChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "modelUpdated", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "virtualRowRemoved", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "viewportChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "bodyScroll", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "bodyScrollEnd", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "dragStarted", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "dragStopped", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "paginationChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "rowDragEnter", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "rowDragMove", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "rowDragLeave", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "rowDragEnd", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "columnRowGroupChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "rowGroupOpened", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "expandOrCollapseAll", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "pinnedRowDataChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "rowDataChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "rowDataUpdated", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "asyncTransactionsFlushed", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "cellClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "cellDoubleClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "cellFocused", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "cellMouseOver", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "cellMouseOut", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "cellMouseDown", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "rowClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "rowDoubleClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "rowSelected", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "selectionChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "cellContextMenu", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "rangeSelectionChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "sortChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "columnRowGroupChangeRequest", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "columnPivotChangeRequest", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "columnValueChangeRequest", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridAngular.prototype, "columnAggFuncChangeRequest", void 0);
    AgGridAngular = __decorate([
        Component({
            selector: 'ag-grid-angular',
            template: '',
            providers: [
                AngularFrameworkOverrides,
                AngularFrameworkComponentWrapper
            ],
            // tell angular we don't want view encapsulation, we don't want a shadow root
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [ElementRef,
            ViewContainerRef,
            AngularFrameworkOverrides,
            AngularFrameworkComponentWrapper,
            ComponentFactoryResolver])
    ], AgGridAngular);
    return AgGridAngular;
}());
export { AgGridAngular };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWctZ3JpZC1hbmd1bGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnLWdyaWQtYW5ndWxhci1sZWdhY3kvIiwic291cmNlcyI6WyJsaWIvYWctZ3JpZC1hbmd1bGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILGFBQWEsRUFDYixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFtQyxNQUFNLG1CQUFtQixDQUFDO0FBK0lwRyxnQkFBZ0I7QUFFaEIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBWTFEO0lBa0JJLHVCQUFZLFVBQXNCLEVBQ3RCLGdCQUFrQyxFQUNsQyx5QkFBb0QsRUFDcEQseUJBQTJELEVBQzNELHdCQUFrRDtRQUhsRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFrQztRQUMzRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBbEJ0RCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSTNCLDBEQUEwRDtRQUNsRCxnQkFBVyxHQUF1QixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBaUhsRSxVQUFVO1FBQ1Ysd0VBQXdFO1FBQ3hELGNBQVMsR0FBb0QsU0FBUyxDQUFD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OlsiaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENvbXBvbmVudCxcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBRdWVyeUxpc3QsXG4gICAgVmlld0NvbnRhaW5lclJlZixcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBBZ1Byb21pc2UsIENvbXBvbmVudFV0aWwsIEdyaWQsIEdyaWRPcHRpb25zLCBHcmlkUGFyYW1zLCBNb2R1bGUgfSBmcm9tIFwiYWctZ3JpZC1jb21tdW5pdHlcIjtcblxuLy8gQFNUQVJUX0lNUE9SVFNAXG5pbXBvcnQge1xuICAgIEFnQ2hhcnRUaGVtZSxcbiAgICBBZ0NoYXJ0VGhlbWVPdmVycmlkZXMsXG4gICAgQXN5bmNUcmFuc2FjdGlvbnNGbHVzaGVkLFxuICAgIEJvZHlTY3JvbGxFbmRFdmVudCxcbiAgICBCb2R5U2Nyb2xsRXZlbnQsXG4gICAgQ2VsbENsaWNrZWRFdmVudCxcbiAgICBDZWxsQ29udGV4dE1lbnVFdmVudCxcbiAgICBDZWxsRG91YmxlQ2xpY2tlZEV2ZW50LFxuICAgIENlbGxFZGl0UmVxdWVzdEV2ZW50LFxuICAgIENlbGxFZGl0aW5nU3RhcnRlZEV2ZW50LFxuICAgIENlbGxFZGl0aW5nU3RvcHBlZEV2ZW50LFxuICAgIENlbGxGb2N1c2VkRXZlbnQsXG4gICAgQ2VsbEtleURvd25FdmVudCxcbiAgICBDZWxsS2V5UHJlc3NFdmVudCxcbiAgICBDZWxsTW91c2VEb3duRXZlbnQsXG4gICAgQ2VsbE1vdXNlT3V0RXZlbnQsXG4gICAgQ2VsbE1vdXNlT3ZlckV2ZW50LFxuICAgIENlbGxQb3NpdGlvbixcbiAgICBDZWxsVmFsdWVDaGFuZ2VkRXZlbnQsXG4gICAgQ2hhcnRDcmVhdGVkLFxuICAgIENoYXJ0RGVzdHJveWVkLFxuICAgIENoYXJ0T3B0aW9uc0NoYW5nZWQsXG4gICAgQ2hhcnRSYW5nZVNlbGVjdGlvbkNoYW5nZWQsXG4gICAgQ2hhcnRSZWZQYXJhbXMsXG4gICAgQ2hhcnRUb29sUGFuZWxzRGVmLFxuICAgIENvbERlZixcbiAgICBDb2xHcm91cERlZixcbiAgICBDb2x1bW5BZ2dGdW5jQ2hhbmdlUmVxdWVzdEV2ZW50LFxuICAgIENvbHVtbkFwaSxcbiAgICBDb2x1bW5FdmVyeXRoaW5nQ2hhbmdlZEV2ZW50LFxuICAgIENvbHVtbkdyb3VwT3BlbmVkRXZlbnQsXG4gICAgQ29sdW1uTW92ZWRFdmVudCxcbiAgICBDb2x1bW5QaW5uZWRFdmVudCxcbiAgICBDb2x1bW5QaXZvdENoYW5nZVJlcXVlc3RFdmVudCxcbiAgICBDb2x1bW5QaXZvdENoYW5nZWRFdmVudCxcbiAgICBDb2x1bW5QaXZvdE1vZGVDaGFuZ2VkRXZlbnQsXG4gICAgQ29sdW1uUmVzaXplZEV2ZW50LFxuICAgIENvbHVtblJvd0dyb3VwQ2hhbmdlUmVxdWVzdEV2ZW50LFxuICAgIENvbHVtblJvd0dyb3VwQ2hhbmdlZEV2ZW50LFxuICAgIENvbHVtblZhbHVlQ2hhbmdlUmVxdWVzdEV2ZW50LFxuICAgIENvbHVtblZhbHVlQ2hhbmdlZEV2ZW50LFxuICAgIENvbHVtblZpc2libGVFdmVudCxcbiAgICBDb21wb25lbnRTdGF0ZUNoYW5nZWRFdmVudCxcbiAgICBDc3ZFeHBvcnRQYXJhbXMsXG4gICAgRGlzcGxheWVkQ29sdW1uc0NoYW5nZWRFdmVudCxcbiAgICBEcmFnU3RhcnRlZEV2ZW50LFxuICAgIERyYWdTdG9wcGVkRXZlbnQsXG4gICAgRXhjZWxFeHBvcnRQYXJhbXMsXG4gICAgRXhjZWxTdHlsZSxcbiAgICBFeHBhbmRDb2xsYXBzZUFsbEV2ZW50LFxuICAgIEZpbGxPcGVyYXRpb25QYXJhbXMsXG4gICAgRmlsdGVyQ2hhbmdlZEV2ZW50LFxuICAgIEZpbHRlck1vZGlmaWVkRXZlbnQsXG4gICAgRmlsdGVyT3BlbmVkRXZlbnQsXG4gICAgRmlyc3REYXRhUmVuZGVyZWRFdmVudCxcbiAgICBGdWxsV2lkdGhDZWxsS2V5RG93bkV2ZW50LFxuICAgIEZ1bGxXaWR0aENlbGxLZXlQcmVzc0V2ZW50LFxuICAgIEdldENoYXJ0VG9vbGJhckl0ZW1zLFxuICAgIEdldENvbnRleHRNZW51SXRlbXMsXG4gICAgR2V0RGF0YVBhdGgsXG4gICAgR2V0R3JvdXBSb3dBZ2dQYXJhbXMsXG4gICAgR2V0TG9jYWxlVGV4dFBhcmFtcyxcbiAgICBHZXRNYWluTWVudUl0ZW1zLFxuICAgIEdldFJvd0lkRnVuYyxcbiAgICBHZXRSb3dOb2RlSWRGdW5jLFxuICAgIEdldFNlcnZlclNpZGVHcm91cEtleSxcbiAgICBHZXRTZXJ2ZXJTaWRlR3JvdXBMZXZlbFBhcmFtc1BhcmFtcyxcbiAgICBHcmlkQXBpLFxuICAgIEdyaWRDb2x1bW5zQ2hhbmdlZEV2ZW50LFxuICAgIEdyaWRSZWFkeUV2ZW50LFxuICAgIEdyaWRTaXplQ2hhbmdlZEV2ZW50LFxuICAgIEhlYWRlclBvc2l0aW9uLFxuICAgIElBZ2dGdW5jLFxuICAgIElEYXRhc291cmNlLFxuICAgIElSb3dEcmFnSXRlbSxcbiAgICBJU2VydmVyU2lkZURhdGFzb3VyY2UsXG4gICAgSVZpZXdwb3J0RGF0YXNvdXJjZSxcbiAgICBJbml0aWFsR3JvdXBPcmRlckNvbXBhcmF0b3JQYXJhbXMsXG4gICAgSXNBcHBseVNlcnZlclNpZGVUcmFuc2FjdGlvbixcbiAgICBJc0V4dGVybmFsRmlsdGVyUHJlc2VudFBhcmFtcyxcbiAgICBJc0Z1bGxXaWR0aFJvd1BhcmFtcyxcbiAgICBJc0dyb3VwT3BlbkJ5RGVmYXVsdFBhcmFtcyxcbiAgICBJc1Jvd0ZpbHRlcmFibGUsXG4gICAgSXNSb3dNYXN0ZXIsXG4gICAgSXNSb3dTZWxlY3RhYmxlLFxuICAgIElzU2VydmVyU2lkZUdyb3VwLFxuICAgIElzU2VydmVyU2lkZUdyb3VwT3BlbkJ5RGVmYXVsdFBhcmFtcyxcbiAgICBMb2FkaW5nQ2VsbFJlbmRlcmVyU2VsZWN0b3JGdW5jLFxuICAgIE1vZGVsVXBkYXRlZEV2ZW50LFxuICAgIE5hdmlnYXRlVG9OZXh0Q2VsbFBhcmFtcyxcbiAgICBOYXZpZ2F0ZVRvTmV4dEhlYWRlclBhcmFtcyxcbiAgICBOZXdDb2x1bW5zTG9hZGVkRXZlbnQsXG4gICAgUGFnaW5hdGlvbkNoYW5nZWRFdmVudCxcbiAgICBQYWdpbmF0aW9uTnVtYmVyRm9ybWF0dGVyUGFyYW1zLFxuICAgIFBhc3RlRW5kRXZlbnQsXG4gICAgUGFzdGVTdGFydEV2ZW50LFxuICAgIFBpbm5lZFJvd0RhdGFDaGFuZ2VkRXZlbnQsXG4gICAgUG9zdFByb2Nlc3NQb3B1cFBhcmFtcyxcbiAgICBQb3N0U29ydFJvd3NQYXJhbXMsXG4gICAgUHJvY2Vzc0NlbGxGb3JFeHBvcnRQYXJhbXMsXG4gICAgUHJvY2Vzc0RhdGFGcm9tQ2xpcGJvYXJkUGFyYW1zLFxuICAgIFByb2Nlc3NHcm91cEhlYWRlckZvckV4cG9ydFBhcmFtcyxcbiAgICBQcm9jZXNzSGVhZGVyRm9yRXhwb3J0UGFyYW1zLFxuICAgIFByb2Nlc3NSb3dQYXJhbXMsXG4gICAgUmFuZ2VTZWxlY3Rpb25DaGFuZ2VkRXZlbnQsXG4gICAgUm93Q2xhc3NQYXJhbXMsXG4gICAgUm93Q2xhc3NSdWxlcyxcbiAgICBSb3dDbGlja2VkRXZlbnQsXG4gICAgUm93RGF0YUNoYW5nZWRFdmVudCxcbiAgICBSb3dEYXRhVXBkYXRlZEV2ZW50LFxuICAgIFJvd0RvdWJsZUNsaWNrZWRFdmVudCxcbiAgICBSb3dEcmFnRXZlbnQsXG4gICAgUm93RWRpdGluZ1N0YXJ0ZWRFdmVudCxcbiAgICBSb3dFZGl0aW5nU3RvcHBlZEV2ZW50LFxuICAgIFJvd0dyb3VwT3BlbmVkRXZlbnQsXG4gICAgUm93R3JvdXBpbmdEaXNwbGF5VHlwZSxcbiAgICBSb3dIZWlnaHRQYXJhbXMsXG4gICAgUm93TW9kZWxUeXBlLFxuICAgIFJvd05vZGUsXG4gICAgUm93U2VsZWN0ZWRFdmVudCxcbiAgICBSb3dTdHlsZSxcbiAgICBSb3dWYWx1ZUNoYW5nZWRFdmVudCxcbiAgICBTZWxlY3Rpb25DaGFuZ2VkRXZlbnQsXG4gICAgU2VuZFRvQ2xpcGJvYXJkUGFyYW1zLFxuICAgIFNlcnZlclNpZGVHcm91cExldmVsUGFyYW1zLFxuICAgIFNlcnZlclNpZGVTdG9yZVR5cGUsXG4gICAgU2lkZUJhckRlZixcbiAgICBTb3J0Q2hhbmdlZEV2ZW50LFxuICAgIFN0YXR1c1BhbmVsRGVmLFxuICAgIFN1cHByZXNzS2V5Ym9hcmRFdmVudFBhcmFtcyxcbiAgICBUYWJUb05leHRDZWxsUGFyYW1zLFxuICAgIFRhYlRvTmV4dEhlYWRlclBhcmFtcyxcbiAgICBUb29sUGFuZWxTaXplQ2hhbmdlZEV2ZW50LFxuICAgIFRvb2xQYW5lbFZpc2libGVDaGFuZ2VkRXZlbnQsXG4gICAgVHJlZURhdGFEaXNwbGF5VHlwZSxcbiAgICBWaWV3cG9ydENoYW5nZWRFdmVudCxcbiAgICBWaXJ0dWFsQ29sdW1uc0NoYW5nZWRFdmVudCxcbiAgICBWaXJ0dWFsUm93UmVtb3ZlZEV2ZW50XG59IGZyb20gXCJhZy1ncmlkLWNvbW11bml0eVwiO1xuLy8gQEVORF9JTVBPUlRTQFxuXG5pbXBvcnQgeyBBbmd1bGFyRnJhbWV3b3JrT3ZlcnJpZGVzIH0gZnJvbSBcIi4vYW5ndWxhckZyYW1ld29ya092ZXJyaWRlc1wiO1xuaW1wb3J0IHsgQW5ndWxhckZyYW1ld29ya0NvbXBvbmVudFdyYXBwZXIgfSBmcm9tIFwiLi9hbmd1bGFyRnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlclwiO1xuaW1wb3J0IHsgQWdHcmlkQ29sdW1uIH0gZnJvbSBcIi4vYWctZ3JpZC1jb2x1bW4uY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWctZ3JpZC1hbmd1bGFyJyxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEFuZ3VsYXJGcmFtZXdvcmtPdmVycmlkZXMsXG4gICAgICAgIEFuZ3VsYXJGcmFtZXdvcmtDb21wb25lbnRXcmFwcGVyXG4gICAgXSxcbiAgICAvLyB0ZWxsIGFuZ3VsYXIgd2UgZG9uJ3Qgd2FudCB2aWV3IGVuY2Fwc3VsYXRpb24sIHdlIGRvbid0IHdhbnQgYSBzaGFkb3cgcm9vdFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQWdHcmlkQW5ndWxhcjxURGF0YSA9IGFueSwgVENvbERlZiBleHRlbmRzIENvbERlZjxURGF0YT4gPSBDb2xEZWY8YW55Pj4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICAvLyBub3QgaW50ZW5kZWQgZm9yIHVzZXIgdG8gaW50ZXJhY3Qgd2l0aC4gc28gcHV0dGluZyBfIGluIHNvIGlmIHVzZXIgZ2V0cyByZWZlcmVuY2VcbiAgICAvLyB0byB0aGlzIG9iamVjdCwgdGhleSBraW5kJ2Ega25vdyBpdCdzIG5vdCBwYXJ0IG9mIHRoZSBhZ3JlZWQgaW50ZXJmYWNlXG4gICAgcHJpdmF0ZSBfbmF0aXZlRWxlbWVudDogYW55O1xuICAgIHByaXZhdGUgX2luaXRpYWxpc2VkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGdyaWRQYXJhbXM6IEdyaWRQYXJhbXM7XG5cbiAgICAvLyBpbiBvcmRlciB0byBlbnN1cmUgZmlyaW5nIG9mIGdyaWRSZWFkeSBpcyBkZXRlcm1pbmlzdGljXG4gICAgcHJpdmF0ZSBfZnVsbHlSZWFkeTogQWdQcm9taXNlPGJvb2xlYW4+ID0gQWdQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG5cbiAgICAvLyBtYWtpbmcgdGhlc2UgcHVibGljLCBzbyB0aGV5IGFyZSBhY2Nlc3NpYmxlIHRvIHBlb3BsZSB1c2luZyB0aGUgbmcyIGNvbXBvbmVudCByZWZlcmVuY2VzXG4gICAgcHVibGljIGFwaTogR3JpZEFwaTxURGF0YT47XG4gICAgcHVibGljIGNvbHVtbkFwaTogQ29sdW1uQXBpO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihBZ0dyaWRDb2x1bW4pIHB1YmxpYyBjb2x1bW5zOiBRdWVyeUxpc3Q8QWdHcmlkQ29sdW1uPjtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnREZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSBhbmd1bGFyRnJhbWV3b3JrT3ZlcnJpZGVzOiBBbmd1bGFyRnJhbWV3b3JrT3ZlcnJpZGVzLFxuICAgICAgICBwcml2YXRlIGZyYW1ld29ya0NvbXBvbmVudFdyYXBwZXI6IEFuZ3VsYXJGcmFtZXdvcmtDb21wb25lbnRXcmFwcGVyLFxuICAgICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG4gICAgICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBlbGVtZW50RGVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlci5zZXRWaWV3Q29udGFpbmVyUmVmKHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMuZnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlci5zZXRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIodGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpO1xuICAgICAgICB0aGlzLmFuZ3VsYXJGcmFtZXdvcmtPdmVycmlkZXMuc2V0RW1pdHRlclVzZWRDYWxsYmFjayh0aGlzLmlzRW1pdHRlclVzZWQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5ncmlkT3B0aW9ucyA9IENvbXBvbmVudFV0aWwuY29weUF0dHJpYnV0ZXNUb0dyaWRPcHRpb25zKHRoaXMuZ3JpZE9wdGlvbnMsIHRoaXMsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuZ3JpZFBhcmFtcyA9IHtcbiAgICAgICAgICAgIGdsb2JhbEV2ZW50TGlzdGVuZXI6IHRoaXMuZ2xvYmFsRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZnJhbWV3b3JrT3ZlcnJpZGVzOiB0aGlzLmFuZ3VsYXJGcmFtZXdvcmtPdmVycmlkZXMsXG4gICAgICAgICAgICBwcm92aWRlZEJlYW5JbnN0YW5jZXM6IHtcbiAgICAgICAgICAgICAgICBmcmFtZXdvcmtDb21wb25lbnRXcmFwcGVyOiB0aGlzLmZyYW1ld29ya0NvbXBvbmVudFdyYXBwZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2R1bGVzOiAodGhpcy5tb2R1bGVzIHx8IFtdKSBhcyBhbnlcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5jb2x1bW5zICYmIHRoaXMuY29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRPcHRpb25zLmNvbHVtbkRlZnMgPSB0aGlzLmNvbHVtbnNcbiAgICAgICAgICAgICAgICAubWFwKChjb2x1bW46IEFnR3JpZENvbHVtbik6IENvbERlZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW4udG9Db2xEZWYoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ldyBHcmlkKHRoaXMuX25hdGl2ZUVsZW1lbnQsIHRoaXMuZ3JpZE9wdGlvbnMsIHRoaXMuZ3JpZFBhcmFtcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ3JpZE9wdGlvbnMuYXBpKSB7XG4gICAgICAgICAgICB0aGlzLmFwaSA9IHRoaXMuZ3JpZE9wdGlvbnMuYXBpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ3JpZE9wdGlvbnMuY29sdW1uQXBpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbkFwaSA9IHRoaXMuZ3JpZE9wdGlvbnMuY29sdW1uQXBpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faW5pdGlhbGlzZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIHNvbWV0aW1lcywgZXNwZWNpYWxseSBpbiBsYXJnZSBjbGllbnQgYXBwcyBncmlkUmVhZHkgY2FuIGZpcmUgYmVmb3JlIG5nQWZ0ZXJWaWV3SW5pdFxuICAgICAgICAvLyB0aGlzIHRpZXMgdGhlc2UgdG9nZXRoZXIgc28gdGhhdCBncmlkUmVhZHkgd2lsbCBhbHdheXMgZmlyZSBhZnRlciBhZ0dyaWRBbmd1bGFyJ3MgbmdBZnRlclZpZXdJbml0XG4gICAgICAgIC8vIHRoZSBhY3R1YWwgY29udGFpbmluZyBjb21wb25lbnQncyBuZ0FmdGVyVmlld0luaXQgd2lsbCBmaXJlIGp1c3QgYWZ0ZXIgYWdHcmlkQW5ndWxhcidzXG4gICAgICAgIHRoaXMuX2Z1bGx5UmVhZHkucmVzb2x2ZU5vdyhudWxsLCByZXNvbHZlID0+IHJlc29sdmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2luaXRpYWxpc2VkKSB7XG4gICAgICAgICAgICBDb21wb25lbnRVdGlsLnByb2Nlc3NPbkNoYW5nZShjaGFuZ2VzLCB0aGlzLmdyaWRPcHRpb25zLCB0aGlzLmFwaSwgdGhpcy5jb2x1bW5BcGkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5faW5pdGlhbGlzZWQpIHtcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gZG8gdGhpcyBiZWZvcmUgdGhlIGRlc3Ryb3ksIHNvIHdlIGtub3cgbm90IHRvIGVtaXQgYW55IGV2ZW50c1xuICAgICAgICAgICAgLy8gd2hpbGUgdGVhcmluZyBkb3duIHRoZSBncmlkLlxuICAgICAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwaSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHdlJ2xsIGVtaXQgdGhlIGVtaXQgaWYgYSB1c2VyIGlzIGxpc3RlbmluZyBmb3IgYSBnaXZlbiBldmVudCBlaXRoZXIgb24gdGhlIGNvbXBvbmVudCB2aWEgbm9ybWFsIGFuZ3VsYXIgYmluZGluZ1xuICAgIC8vIG9yIHZpYSBncmlkT3B0aW9uc1xuICAgIHByb3RlY3RlZCBpc0VtaXR0ZXJVc2VkKGV2ZW50VHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGVtaXR0ZXIgPSA8RXZlbnRFbWl0dGVyPGFueT4+KDxhbnk+dGhpcylbZXZlbnRUeXBlXTtcbiAgICAgICAgY29uc3QgaGFzRW1pdHRlciA9ICEhZW1pdHRlciAmJiBlbWl0dGVyLm9ic2VydmVycyAmJiBlbWl0dGVyLm9ic2VydmVycy5sZW5ndGggPiAwO1xuXG4gICAgICAgIC8vIGdyaWRSZWFkeSA9PiBvbkdyaWRSZWFkeVxuICAgICAgICBjb25zdCBhc0V2ZW50TmFtZSA9IGBvbiR7ZXZlbnRUeXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnRUeXBlLnN1YnN0cmluZygxKX1gXG4gICAgICAgIGNvbnN0IGhhc0dyaWRPcHRpb25MaXN0ZW5lciA9ICEhdGhpcy5ncmlkT3B0aW9ucyAmJiAhIXRoaXMuZ3JpZE9wdGlvbnNbYXNFdmVudE5hbWVdO1xuXG4gICAgICAgIHJldHVybiBoYXNFbWl0dGVyIHx8IGhhc0dyaWRPcHRpb25MaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdsb2JhbEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBzdHJpbmcsIGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIHRlYXJpbmcgZG93biwgZG9uJ3QgZW1pdCBhbmd1bGFyIGV2ZW50cywgYXMgdGhpcyBjYXVzZXNcbiAgICAgICAgLy8gcHJvYmxlbXMgd2l0aCB0aGUgYW5ndWxhciByb3V0ZXJcbiAgICAgICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2VuZXJpY2FsbHkgbG9vayB1cCB0aGUgZXZlbnRUeXBlXG4gICAgICAgIGNvbnN0IGVtaXR0ZXIgPSA8RXZlbnRFbWl0dGVyPGFueT4+KDxhbnk+dGhpcylbZXZlbnRUeXBlXTtcbiAgICAgICAgaWYgKGVtaXR0ZXIgJiYgdGhpcy5pc0VtaXR0ZXJVc2VkKGV2ZW50VHlwZSkpIHtcbiAgICAgICAgICAgIGlmIChldmVudFR5cGUgPT09ICdncmlkUmVhZHknKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHVzZXIgaXMgbGlzdGVuaW5nIGZvciBncmlkUmVhZHksIHdhaXQgZm9yIG5nQWZ0ZXJWaWV3SW5pdCB0byBmaXJlIGZpcnN0LCB0aGVuIGVtaXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gZ3JpZFJlYWR5IGV2ZW50XG4gICAgICAgICAgICAgICAgdGhpcy5fZnVsbHlSZWFkeS50aGVuKChyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpIHB1YmxpYyBncmlkT3B0aW9uczogR3JpZE9wdGlvbnM8VERhdGE+O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtb2R1bGVzOiBNb2R1bGVbXTtcblxuICAgIC8vIEBTVEFSVEBcbiAgICAvKiogU3BlY2lmaWVzIHRoZSBzdGF0dXMgYmFyIGNvbXBvbmVudHMgdG8gdXNlIGluIHRoZSBzdGF0dXMgYmFyLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3RhdHVzQmFyOiB7IHN0YXR1c1BhbmVsczogU3RhdHVzUGFuZWxEZWZbXTsgfSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU3BlY2lmaWVzIHRoZSBzaWRlIGJhciBjb21wb25lbnRzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc2lkZUJhcjogU2lkZUJhckRlZiB8IHN0cmluZyB8IHN0cmluZ1tdIHwgYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gbm90IHNob3cgdGhlIGNvbnRleHQgbWVudS4gVXNlIGlmIHlvdSBkb24ndCB3YW50IHRvIHVzZSB0aGUgZGVmYXVsdCAncmlnaHQgY2xpY2snIGNvbnRleHQgbWVudS4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDb250ZXh0TWVudTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogV2hlbiB1c2luZyBgc3VwcHJlc3NDb250ZXh0TWVudWAsIHlvdSBjYW4gdXNlIHRoZSBgb25DZWxsQ29udGV4dE1lbnVgIGZ1bmN0aW9uIHRvIHByb3ZpZGUgeW91ciBvd24gY29kZSB0byBoYW5kbGUgY2VsbCBgY29udGV4dG1lbnVgIGV2ZW50cy5cbiAgICAgKiBUaGlzIGZsYWcgaXMgdXNlZnVsIHRvIHByZXZlbnQgdGhlIGJyb3dzZXIgZnJvbSBzaG93aW5nIGl0cyBkZWZhdWx0IGNvbnRleHQgbWVudS5cbiAgICAgKiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwcmV2ZW50RGVmYXVsdE9uQ29udGV4dE1lbnU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEFsbG93cyBjb250ZXh0IG1lbnUgdG8gc2hvdywgZXZlbiB3aGVuIGBDdHJsYCBrZXkgaXMgaGVsZCBkb3duLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhbGxvd0NvbnRleHRNZW51V2l0aENvbnRyb2xLZXk6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gYWx3YXlzIHNob3cgdGhlIGNvbHVtbiBtZW51IGJ1dHRvbiwgcmF0aGVyIHRoYW4gb25seSBzaG93aW5nIHdoZW4gdGhlIG1vdXNlIGlzIG92ZXIgdGhlIGNvbHVtbiBoZWFkZXIuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTWVudUhpZGU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gdXNlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCB0b29sdGlwIGluc3RlYWQgb2YgdXNpbmcgdGhlIGdyaWQncyBUb29sdGlwIENvbXBvbmVudC4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlQnJvd3NlclRvb2x0aXBzOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBUaGUgZGVsYXkgaW4gbWlsbGlzZWNvbmRzIHRoYXQgaXQgdGFrZXMgZm9yIHRvb2x0aXBzIHRvIHNob3cgdXAgb25jZSBhbiBlbGVtZW50IGlzIGhvdmVyZWQgb3Zlci5cbiAgICAgKiAgICAgKipOb3RlOioqIFRoaXMgcHJvcGVydHkgZG9lcyBub3Qgd29yayBpZiBgZW5hYmxlQnJvd3NlclRvb2x0aXBzYCBpcyBgdHJ1ZWAuXG4gICAgICogRGVmYXVsdDogYDIwMDBgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwU2hvd0RlbGF5OiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFRoZSBkZWxheSBpbiBtaWxsaXNlY29uZHMgdGhhdCBpdCB0YWtlcyBmb3IgdG9vbHRpcHMgdG8gaGlkZSBvbmNlIHRoZXkgaGF2ZSBiZWVuIGRpc3BsYXllZC5cbiAgICAgKiAgICAgKipOb3RlOioqIFRoaXMgcHJvcGVydHkgZG9lcyBub3Qgd29yayBpZiBgZW5hYmxlQnJvd3NlclRvb2x0aXBzYCBpcyBgdHJ1ZWAuXG4gICAgICogRGVmYXVsdDogYDEwMDAwYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcEhpZGVEZWxheTogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGhhdmUgdG9vbHRpcHMgZm9sbG93IHRoZSBjdXJzb3Igb25jZSB0aGV5IGFyZSBkaXNwbGF5ZWQuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHRvb2x0aXBNb3VzZVRyYWNrOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBET00gZWxlbWVudCB0byB1c2UgYXMgdGhlIHBvcHVwIHBhcmVudCBmb3IgZ3JpZCBwb3B1cHMgKGNvbnRleHQgbWVudSwgY29sdW1uIG1lbnUgZXRjKS4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHBvcHVwUGFyZW50OiBIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gYWxzbyBpbmNsdWRlIGhlYWRlcnMgd2hlbiBjb3B5aW5nIHRvIGNsaXBib2FyZCB1c2luZyBgQ3RybCArIENgIGNsaXBib2FyZC4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY29weUhlYWRlcnNUb0NsaXBib2FyZDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBhbHNvIGluY2x1ZGUgZ3JvdXAgaGVhZGVycyB3aGVuIGNvcHlpbmcgdG8gY2xpcGJvYXJkIHVzaW5nIGBDdHJsICsgQ2AgY2xpcGJvYXJkLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb3B5R3JvdXBIZWFkZXJzVG9DbGlwYm9hcmQ6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNwZWNpZnkgdGhlIGRlbGltaXRlciB0byB1c2Ugd2hlbiBjb3B5aW5nIHRvIGNsaXBib2FyZC5cbiAgICAgKiBEZWZhdWx0OiBgXFx0YCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY2xpcGJvYXJkRGVsaW1pdGVyOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gY29weSB0aGUgY2VsbCByYW5nZSBvciBmb2N1c2VkIGNlbGwgdG8gdGhlIGNsaXBib2FyZCBhbmQgbmV2ZXIgdGhlIHNlbGVjdGVkIHJvd3MuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ29weVJvd3NUb0NsaXBib2FyZDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBjb3B5IHJvd3MgaW5zdGVhZCBvZiByYW5nZXMgd2hlbiBhIHJhbmdlIHdpdGggb25seSBhIHNpbmdsZSBjZWxsIGlzIHNlbGVjdGVkLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NvcHlTaW5nbGVDZWxsUmFuZ2VzOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIHdvcmsgYXJvdW5kIGEgYnVnIHdpdGggRXhjZWwgKFdpbmRvd3MpIHRoYXQgYWRkcyBhbiBleHRyYSBlbXB0eSBsaW5lIGF0IHRoZSBlbmQgb2YgcmFuZ2VzIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0xhc3RFbXB0eUxpbmVPblBhc3RlOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIHR1cm4gb2ZmIHBhc3RlIG9wZXJhdGlvbnMgd2l0aGluIHRoZSBncmlkLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDbGlwYm9hcmRQYXN0ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBzdG9wIHRoZSBncmlkIHRyeWluZyB0byB1c2UgdGhlIENsaXBib2FyZCBBUEksIGlmIGl0IGlzIGJsb2NrZWQsIGFuZCBpbW1lZGlhdGVseSBmYWxsYmFjayB0byB0aGUgd29ya2Fyb3VuZC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ2xpcGJvYXJkQXBpOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBBcnJheSBvZiBDb2x1bW4gLyBDb2x1bW4gR3JvdXAgZGVmaW5pdGlvbnMuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2x1bW5EZWZzOiAoVENvbERlZiB8IENvbEdyb3VwRGVmPFREYXRhPilbXSB8IG51bGwgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEEgZGVmYXVsdCBjb2x1bW4gZGVmaW5pdGlvbi4gSXRlbXMgZGVmaW5lZCBpbiB0aGUgYWN0dWFsIGNvbHVtbiBkZWZpbml0aW9ucyBnZXQgcHJlY2VkZW5jZS4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRlZmF1bHRDb2xEZWY6IENvbERlZjxURGF0YT4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEEgZGVmYXVsdCBjb2x1bW4gZ3JvdXAgZGVmaW5pdGlvbi4gQWxsIGNvbHVtbiBncm91cCBkZWZpbml0aW9ucyB3aWxsIHVzZSB0aGVzZSBwcm9wZXJ0aWVzLiBJdGVtcyBkZWZpbmVkIGluIHRoZSBhY3R1YWwgY29sdW1uIGdyb3VwIGRlZmluaXRpb24gZ2V0IHByZWNlZGVuY2UuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0Q29sR3JvdXBEZWY6IFBhcnRpYWw8Q29sR3JvdXBEZWY8VERhdGE+PiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQW4gb2JqZWN0IG1hcCBvZiBjdXN0b20gY29sdW1uIHR5cGVzIHdoaWNoIGNvbnRhaW4gZ3JvdXBzIG9mIHByb3BlcnRpZXMgdGhhdCBjb2x1bW4gZGVmaW5pdGlvbnMgY2FuIGluaGVyaXQgYnkgcmVmZXJlbmNpbmcgaW4gdGhlaXIgYHR5cGVgIHByb3BlcnR5LiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY29sdW1uVHlwZXM6IHsgW2tleTogc3RyaW5nXTogQ29sRGVmPFREYXRhPjsgfSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogS2VlcHMgdGhlIG9yZGVyIG9mIENvbHVtbnMgbWFpbnRhaW5lZCBhZnRlciBuZXcgQ29sdW1uIERlZmluaXRpb25zIGFyZSB1cGRhdGVkLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtYWludGFpbkNvbHVtbk9yZGVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBJZiBgdHJ1ZWAsIHRoZW4gZG90cyBpbiBmaWVsZCBuYW1lcyAoZS5nLiBgJ2FkZHJlc3MuZmlyc3RMaW5lJ2ApIGFyZSBub3QgdHJlYXRlZCBhcyBkZWVwIHJlZmVyZW5jZXMuIEFsbG93cyB5b3UgdG8gdXNlIGRvdHMgaW4geW91ciBmaWVsZCBuYW1lIGlmIHlvdSBwcmVmZXIuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzRmllbGREb3ROb3RhdGlvbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRlbHRhQ29sdW1uTW9kZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFwcGx5Q29sdW1uRGVmT3JkZXI6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpbW11dGFibGVDb2x1bW5zOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBAZGVwcmVjYXRlZCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NTZXRDb2x1bW5TdGF0ZUV2ZW50czogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ29sdW1uU3RhdGVFdmVudHM6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIFNldCB2aWEgYGRlZmF1bHRDb2xEZWYud2lkdGhgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNvbFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIFNldCB2aWEgYGRlZmF1bHRDb2xEZWYubWluV2lkdGhgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG1pbkNvbFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIFNldCB2aWEgYGRlZmF1bHRDb2xEZWYubWF4V2lkdGhgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG1heENvbFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFRoZSBoZWlnaHQgaW4gcGl4ZWxzIGZvciB0aGUgcm93IGNvbnRhaW5pbmcgdGhlIGNvbHVtbiBsYWJlbCBoZWFkZXIuIElmIG5vdCBzcGVjaWZpZWQsIGl0IHVzZXMgdGhlIHRoZW1lIHZhbHVlIG9mIGBoZWFkZXItaGVpZ2h0YC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckhlaWdodDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBUaGUgaGVpZ2h0IGluIHBpeGVscyBmb3IgdGhlIHJvd3MgY29udGFpbmluZyBoZWFkZXIgY29sdW1uIGdyb3Vwcy4gSWYgbm90IHNwZWNpZmllZCwgaXQgdXNlcyBgaGVhZGVySGVpZ2h0YC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwSGVhZGVySGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFRoZSBoZWlnaHQgaW4gcGl4ZWxzIGZvciB0aGUgcm93IGNvbnRhaW5pbmcgdGhlIGZsb2F0aW5nIGZpbHRlcnMuIElmIG5vdCBzcGVjaWZpZWQsIGl0IHVzZXMgdGhlIHRoZW1lIHZhbHVlIG9mIGBoZWFkZXItaGVpZ2h0YC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGZsb2F0aW5nRmlsdGVyc0hlaWdodDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBUaGUgaGVpZ2h0IGluIHBpeGVscyBmb3IgdGhlIHJvdyBjb250YWluaW5nIHRoZSBjb2x1bW5zIHdoZW4gaW4gcGl2b3QgbW9kZS4gSWYgbm90IHNwZWNpZmllZCwgaXQgdXNlcyBgaGVhZGVySGVpZ2h0YC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHBpdm90SGVhZGVySGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFRoZSBoZWlnaHQgaW4gcGl4ZWxzIGZvciB0aGUgcm93IGNvbnRhaW5pbmcgaGVhZGVyIGNvbHVtbiBncm91cHMgd2hlbiBpbiBwaXZvdCBtb2RlLiBJZiBub3Qgc3BlY2lmaWVkLCBpdCB1c2VzIGBncm91cEhlYWRlckhlaWdodGAuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXZvdEdyb3VwSGVhZGVySGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEFsbG93IHJlb3JkZXJpbmcgYW5kIHBpbm5pbmcgY29sdW1ucyBieSBkcmFnZ2luZyBjb2x1bW5zIGZyb20gdGhlIENvbHVtbnMgVG9vbCBQYW5lbCB0byB0aGUgZ3JpZC4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYWxsb3dEcmFnRnJvbUNvbHVtbnNUb29sUGFuZWw6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gc3VwcHJlc3MgY29sdW1uIG1vdmluZywgaS5lLiB0byBtYWtlIHRoZSBjb2x1bW5zIGZpeGVkIHBvc2l0aW9uLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01vdmFibGVDb2x1bW5zOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBJZiBgdHJ1ZWAsIHRoZSBgYWctY29sdW1uLW1vdmluZ2AgY2xhc3MgaXMgbm90IGFkZGVkIHRvIHRoZSBncmlkIHdoaWxlIGNvbHVtbnMgYXJlIG1vdmluZy4gSW4gdGhlIGRlZmF1bHQgdGhlbWVzLCB0aGlzIHJlc3VsdHMgaW4gbm8gYW5pbWF0aW9uIHdoZW4gbW92aW5nIGNvbHVtbnMuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ29sdW1uTW92ZUFuaW1hdGlvbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogSWYgYHRydWVgLCB3aGVuIHlvdSBkcmFnIGEgY29sdW1uIG91dCBvZiB0aGUgZ3JpZCAoZS5nLiB0byB0aGUgZ3JvdXAgem9uZSkgdGhlIGNvbHVtbiBpcyBub3QgaGlkZGVuLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0RyYWdMZWF2ZUhpZGVzQ29sdW1uczogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogSWYgYHRydWVgLCB3aGVuIHlvdSBkcmFnIGEgY29sdW1uIGludG8gYSByb3cgZ3JvdXAgcGFuZWwgdGhlIGNvbHVtbiBpcyBub3QgaGlkZGVuLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1Jvd0dyb3VwSGlkZXNDb2x1bW5zOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYCdzaGlmdCdgIHRvIGhhdmUgc2hpZnQtcmVzaXplIGFzIHRoZSBkZWZhdWx0IHJlc2l6ZSBvcGVyYXRpb24gKHNhbWUgYXMgdXNlciBob2xkaW5nIGRvd24gYFNoaWZ0YCB3aGlsZSByZXNpemluZykuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2xSZXNpemVEZWZhdWx0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFN1cHByZXNzZXMgYXV0by1zaXppbmcgY29sdW1ucyBmb3IgY29sdW1ucy4gSW4gb3RoZXIgd29yZHMsIGRvdWJsZSBjbGlja2luZyBhIGNvbHVtbidzIGhlYWRlcidzIGVkZ2Ugd2lsbCBub3QgYXV0by1zaXplLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0F1dG9TaXplOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBOdW1iZXIgb2YgcGl4ZWxzIHRvIGFkZCB0byBhIGNvbHVtbiB3aWR0aCBhZnRlciB0aGUgW2F1dG8tc2l6aW5nXSgvY29sdW1uLXNpemluZy8jYXV0by1zaXplLWNvbHVtbnMpIGNhbGN1bGF0aW9uLlxuICAgICAqIFNldCB0aGlzIGlmIHlvdSB3YW50IHRvIGFkZCBleHRyYSByb29tIHRvIGFjY29tbW9kYXRlIChmb3IgZXhhbXBsZSkgc29ydCBpY29ucywgb3Igc29tZSBvdGhlciBkeW5hbWljIG5hdHVyZSBvZiB0aGUgaGVhZGVyLlxuICAgICAqIERlZmF1bHQ6IGA0YCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXV0b1NpemVQYWRkaW5nOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0aGlzIHRvIGB0cnVlYCB0byBza2lwIHRoZSBgaGVhZGVyTmFtZWAgd2hlbiBgYXV0b1NpemVgIGlzIGNhbGxlZCBieSBkZWZhdWx0LiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBza2lwSGVhZGVyT25BdXRvU2l6ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQSBtYXAgb2YgY29tcG9uZW50IG5hbWVzIHRvIGNvbXBvbmVudHMuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb21wb25lbnRzOiB7IFtwOiBzdHJpbmddOiBhbnk7IH0gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIEFzIG9mIHYyNywgdXNlIGBjb21wb25lbnRzYCBmb3IgZnJhbWV3b3JrIGNvbXBvbmVudHMgdG9vLlxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmcmFtZXdvcmtDb21wb25lbnRzOiB7IFtwOiBzdHJpbmddOiB7IG5ldygpOiBhbnk7IH07IH0gfCBhbnkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgJ2Z1bGxSb3cnYCB0byBlbmFibGUgRnVsbCBSb3cgRWRpdGluZy4gT3RoZXJ3aXNlIGxlYXZlIGJsYW5rIHRvIGVkaXQgb25lIGNlbGwgYXQgYSB0aW1lLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZWRpdFR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBlbmFibGUgU2luZ2xlIENsaWNrIEVkaXRpbmcgZm9yIGNlbGxzLCB0byBzdGFydCBlZGl0aW5nIHdpdGggYSBzaW5nbGUgY2xpY2suIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHNpbmdsZUNsaWNrRWRpdDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCBzbyB0aGF0IG5laXRoZXIgc2luZ2xlIG5vciBkb3VibGUgY2xpY2sgc3RhcnRzIGVkaXRpbmcuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ2xpY2tFZGl0OiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHNvIHN0b3AgdGhlIGdyaWQgdXBkYXRpbmcgZGF0YSBhZnRlciBhbmQgZWRpdC4gV2hlbiB0aGlzIGlzIHNldCwgaXQgaXMgaW50ZW5kZWQgdGhlIGFwcGxpY2F0aW9uIHdpbGwgdXBkYXRlIHRoZSBkYXRhLCBlZyBpbiBhbiBleHRlcm5hbCBpbW11dGFibGUgc3RvcmUsIGFuZCB0aGVuIHBhc3MgdGhlIG5ldyBkYXRhc2V0IHRvIHRoZSBncmlkLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcmVhZE9ubHlFZGl0OiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdGhpcyB0byBgdHJ1ZWAgdG8gc3RvcCBjZWxsIGVkaXRpbmcgd2hlbiBncmlkIGxvc2VzIGZvY3VzLlxuICAgICAqIFRoZSBkZWZhdWx0IGlzIHRoYXQgdGhlIGdyaWQgc3RheXMgZWRpdGluZyB1bnRpbCBmb2N1cyBnb2VzIG9udG8gYW5vdGhlciBjZWxsLlxuICAgICAqIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN0b3BFZGl0aW5nV2hlbkNlbGxzTG9zZUZvY3VzOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIGFsb25nIHdpdGggYGVudGVyTW92ZXNEb3duQWZ0ZXJFZGl0YCB0byBoYXZlIEV4Y2VsLXN0eWxlIGJlaGF2aW91ciBmb3IgdGhlIGBFbnRlcmAga2V5LlxuICAgICAqIGkuZS4gcHJlc3NpbmcgdGhlIGBFbnRlcmAga2V5IHdpbGwgbW92ZSBkb3duIHRvIHRoZSBjZWxsIGJlbmVhdGguXG4gICAgICogRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZW50ZXJNb3Zlc0Rvd246IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgYWxvbmcgd2l0aCBgZW50ZXJNb3Zlc0Rvd25gIHRvIGhhdmUgRXhjZWwtc3R5bGUgYmVoYXZpb3VyIGZvciB0aGUgJ0VudGVyJyBrZXkuXG4gICAgICogaS5lLiBwcmVzc2luZyB0aGUgRW50ZXIga2V5IHdpbGwgbW92ZSBkb3duIHRvIHRoZSBjZWxsIGJlbmVhdGguXG4gICAgICogRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZW50ZXJNb3Zlc0Rvd25BZnRlckVkaXQ6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEZvcmNlcyBDZWxsIEVkaXRpbmcgdG8gc3RhcnQgd2hlbiBiYWNrc3BhY2UgaXMgcHJlc3NlZC4gVGhpcyBpcyBvbmx5IHJlbGV2YW50IGZvciBNYWNPUyB1c2Vycy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZUNlbGxFZGl0aW5nT25CYWNrc3BhY2U6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gZW5hYmxlIFVuZG8gLyBSZWRvIHdoaWxlIGVkaXRpbmcuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB1bmRvUmVkb0NlbGxFZGl0aW5nOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdGhlIHNpemUgb2YgdGhlIHVuZG8gLyByZWRvIHN0YWNrLiBEZWZhdWx0OiBgMTBgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB1bmRvUmVkb0NlbGxFZGl0aW5nTGltaXQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIHN0b3BFZGl0aW5nV2hlbkNlbGxzTG9zZUZvY3VzIGluc3RlYWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3RvcEVkaXRpbmdXaGVuR3JpZExvc2VzRm9jdXM6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEEgZGVmYXVsdCBjb25maWd1cmF0aW9uIG9iamVjdCB1c2VkIHRvIGV4cG9ydCB0byBDU1YuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0Q3N2RXhwb3J0UGFyYW1zOiBDc3ZFeHBvcnRQYXJhbXMgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFByZXZlbnRzIHRoZSB1c2VyIGZyb20gZXhwb3J0aW5nIHRoZSBncmlkIHRvIENTVi4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDc3ZFeHBvcnQ6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEEgZGVmYXVsdCBjb25maWd1cmF0aW9uIG9iamVjdCB1c2VkIHRvIGV4cG9ydCB0byBFeGNlbC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRlZmF1bHRFeGNlbEV4cG9ydFBhcmFtczogRXhjZWxFeHBvcnRQYXJhbXMgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFByZXZlbnRzIHRoZSB1c2VyIGZyb20gZXhwb3J0aW5nIHRoZSBncmlkIHRvIEV4Y2VsLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0V4Y2VsRXhwb3J0OiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBBIGxpc3QgKGFycmF5KSBvZiBFeGNlbCBzdHlsZXMgdG8gYmUgdXNlZCB3aGVuIGV4cG9ydGluZyB0byBFeGNlbCB3aXRoIHN0eWxlcy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGV4Y2VsU3R5bGVzOiBFeGNlbFN0eWxlW10gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIFVzZSBkZWZhdWx0Q3N2RXhwb3J0UGFyYW1zIG9yIGRlZmF1bHRFeGNlbEV4cG9ydFBhcmFtc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0RXhwb3J0UGFyYW1zOiBDc3ZFeHBvcnRQYXJhbXMgfCBFeGNlbEV4cG9ydFBhcmFtcyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogUm93cyBhcmUgZmlsdGVyZWQgdXNpbmcgdGhpcyB0ZXh0IGFzIGEgcXVpY2sgZmlsdGVyLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcXVpY2tGaWx0ZXJUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gdHVybiBvbiB0aGUgcXVpY2sgZmlsdGVyIGNhY2hlLCB1c2VkIHRvIGltcHJvdmUgcGVyZm9ybWFuY2Ugd2hlbiB1c2luZyB0aGUgcXVpY2sgZmlsdGVyLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjYWNoZVF1aWNrRmlsdGVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHRyZWUgZGF0YSBmaWx0ZXJpbmcgYmVoYXZpb3VyIHRvIGluc3RlYWQgZXhjbHVkZSBjaGlsZCBub2RlcyBmcm9tIGZpbHRlciByZXN1bHRzLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBleGNsdWRlQ2hpbGRyZW5XaGVuVHJlZURhdGFGaWx0ZXJpbmc6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gRW5hYmxlIENoYXJ0cy4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlQ2hhcnRzOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBUaGUgbGlzdCBvZiBjaGFydCB0aGVtZXMgdG8gYmUgdXNlZC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNoYXJ0VGhlbWVzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQSBtYXAgY29udGFpbmluZyBjdXN0b20gY2hhcnQgdGhlbWVzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY3VzdG9tQ2hhcnRUaGVtZXM6IHsgW25hbWU6IHN0cmluZ106IEFnQ2hhcnRUaGVtZSB9IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBDaGFydCB0aGVtZSBvdmVycmlkZXMgYXBwbGllZCB0byBhbGwgdGhlbWVzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY2hhcnRUaGVtZU92ZXJyaWRlczogQWdDaGFydFRoZW1lT3ZlcnJpZGVzIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIHNob3cgdGhlIENoYXJ0IFRvb2wgUGFuZWxzIGJ1dHRvbi4gTm90ZSB0aGlzIHdpbGwgYWxzbyByZW1vdmUgdGhlICdoYW1idXJnZXInIG1lbnUgb3B0aW9uIGZyb20gdGhlIENoYXJ0IFRvb2xiYXIgYW5kIGFsd2F5cyBkaXNwbGF5IHRoZSByZW1haW5pbmcgdG9vbGJhciBidXR0b25zLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVDaGFydFRvb2xQYW5lbHNCdXR0b246IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIENoYXJ0IFRvb2wgUGFuZWwgb3ZlcnJpZGVzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY2hhcnRUb29sUGFuZWxzRGVmOiBDaGFydFRvb2xQYW5lbHNEZWYgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFByb3ZpZGUgeW91ciBvd24gbG9hZGluZyBjZWxsIHJlbmRlcmVyIHRvIHVzZSB3aGVuIGRhdGEgaXMgbG9hZGluZyB2aWEgYSBEYXRhU291cmNlLlxuICAgICAqIFNlZSBbTG9hZGluZyBDZWxsIFJlbmRlcmVyXShodHRwczovL3d3dy5hZy1ncmlkLmNvbS9qYXZhc2NyaXB0LWRhdGEtZ3JpZC9jb21wb25lbnQtbG9hZGluZy1jZWxsLXJlbmRlcmVyLykgZm9yIGZyYW1ld29yayBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZ0NlbGxSZW5kZXJlcjogYW55ID0gdW5kZWZpbmVkO1xuICAgIC8qKiBAZGVwcmVjYXRlZCBBcyBvZiB2MjcsIHVzZSBgbG9hZGluZ0NlbGxSZW5kZXJlcmAgZm9yIGZyYW1ld29yayBjb21wb25lbnRzIHRvby5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZ0NlbGxSZW5kZXJlckZyYW1ld29yazogYW55ID0gdW5kZWZpbmVkO1xuICAgIC8qKiBQYXJhbXMgdG8gYmUgcGFzc2VkIHRvIHRoZSBgbG9hZGluZ0NlbGxSZW5kZXJlcmAgY29tcG9uZW50LiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZ0NlbGxSZW5kZXJlclBhcmFtczogYW55ID0gdW5kZWZpbmVkO1xuICAgIC8qKiBDYWxsYmFjayB0byBzZWxlY3Qgd2hpY2ggbG9hZGluZyBjZWxsIHJlbmRlcmVyIHRvIGJlIHVzZWQgd2hlbiBkYXRhIGlzIGxvYWRpbmcgdmlhIGEgRGF0YVNvdXJjZS4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGxvYWRpbmdDZWxsUmVuZGVyZXJTZWxlY3RvcjogTG9hZGluZ0NlbGxSZW5kZXJlclNlbGVjdG9yRnVuYzxURGF0YT4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEEgbWFwIG9mIGtleS0+dmFsdWUgcGFpcnMgZm9yIGxvY2FsaXNpbmcgdGV4dCB3aXRoaW4gdGhlIGdyaWQuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2NhbGVUZXh0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGVuYWJsZSBNYXN0ZXIgRGV0YWlsLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtYXN0ZXJEZXRhaWw6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8ga2VlcCBkZXRhaWwgcm93cyBmb3Igd2hlbiB0aGV5IGFyZSBkaXNwbGF5ZWQgYWdhaW4uIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGtlZXBEZXRhaWxSb3dzOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXRzIHRoZSBudW1iZXIgb2YgZGV0YWlscyByb3dzIHRvIGtlZXAuIERlZmF1bHQ6IGAxMGAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGtlZXBEZXRhaWxSb3dzQ291bnQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogUHJvdmlkZSBhIGN1c3RvbSBgZGV0YWlsQ2VsbFJlbmRlcmVyYCB0byB1c2Ugd2hlbiBhIG1hc3RlciByb3cgaXMgZXhwYW5kZWQuXG4gICAgICogU2VlIFtEZXRhaWwgQ2VsbCBSZW5kZXJlcl0oaHR0cHM6Ly93d3cuYWctZ3JpZC5jb20vamF2YXNjcmlwdC1kYXRhLWdyaWQvbWFzdGVyLWRldGFpbC1jdXN0b20tZGV0YWlsLykgZm9yIGZyYW1ld29yayBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGV0YWlsQ2VsbFJlbmRlcmVyOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIEFzIG9mIHYyNywgdXNlIGBkZXRhaWxDZWxsUmVuZGVyZXJgIGZvciBmcmFtZXdvcmsgY29tcG9uZW50cyB0b28uXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRldGFpbENlbGxSZW5kZXJlckZyYW1ld29yazogYW55ID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTcGVjaWZpZXMgdGhlIHBhcmFtcyB0byBiZSB1c2VkIGJ5IHRoZSBEZXRhaWwgQ2VsbCBSZW5kZXJlci4gQ2FuIGFsc28gYmUgYSBmdW5jdGlvbiB0aGF0IHByb3ZpZGVzIHRoZSBwYXJhbXMgdG8gZW5hYmxlIGR5bmFtaWMgZGVmaW5pdGlvbnMgb2YgdGhlIHBhcmFtcy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRldGFpbENlbGxSZW5kZXJlclBhcmFtczogYW55ID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgZml4ZWQgaGVpZ2h0IGluIHBpeGVscyBmb3IgZWFjaCBkZXRhaWwgcm93LiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGV0YWlsUm93SGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gaGF2ZSB0aGUgZGV0YWlsIGdyaWQgZHluYW1pY2FsbHkgY2hhbmdlIGl0J3MgaGVpZ2h0IHRvIGZpdCBpdCdzIHJvd3MuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkZXRhaWxSb3dBdXRvSGVpZ2h0OiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBQcm92aWRlcyBhIGNvbnRleHQgb2JqZWN0IHRoYXQgaXMgcHJvdmlkZWQgdG8gZGlmZmVyZW50IGNhbGxiYWNrcyB0aGUgZ3JpZCB1c2VzLiBVc2VkIGZvciBwYXNzaW5nIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8gdGhlIGNhbGxiYWNrcyBieSB5b3VyIGFwcGxpY2F0aW9uLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY29udGV4dDogYW55ID0gdW5kZWZpbmVkO1xuICAgIC8qKiBBIGxpc3Qgb2YgZ3JpZHMgdG8gdHJlYXQgYXMgQWxpZ25lZCBHcmlkcy4gSWYgZ3JpZHMgYXJlIGFsaWduZWQgdGhlbiB0aGUgY29sdW1ucyBhbmQgaG9yaXpvbnRhbCBzY3JvbGxpbmcgd2lsbCBiZSBrZXB0IGluIHN5bmMuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhbGlnbmVkR3JpZHM6IHsgYXBpPzogR3JpZEFwaSB8IG51bGwsIGNvbHVtbkFwaT86IENvbHVtbkFwaSB8IG51bGwgfVtdIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBDaGFuZ2UgdGhpcyB2YWx1ZSB0byBzZXQgdGhlIHRhYkluZGV4IG9yZGVyIG9mIHRoZSBHcmlkIHdpdGhpbiB5b3VyIGFwcGxpY2F0aW9uLiBEZWZhdWx0OiBgMGAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHRhYkluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFRoZSBudW1iZXIgb2Ygcm93cyByZW5kZXJlZCBvdXRzaWRlIHRoZSB2aWV3YWJsZSBhcmVhIHRoZSBncmlkIHJlbmRlcnMuXG4gICAgICogSGF2aW5nIGEgYnVmZmVyIG1lYW5zIHRoZSBncmlkIHdpbGwgaGF2ZSByb3dzIHJlYWR5IHRvIHNob3cgYXMgdGhlIHVzZXIgc2xvd2x5IHNjcm9sbHMgdmVydGljYWxseS5cbiAgICAgKiBEZWZhdWx0OiBgMTBgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dCdWZmZXI6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byB0dXJuIG9uIHRoZSB2YWx1ZSBjYWNoZS4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsdWVDYWNoZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBjb25maWd1cmUgdGhlIHZhbHVlIGNhY2hlIHRvIG5vdCBleHBpcmUgYWZ0ZXIgZGF0YSB1cGRhdGVzLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZUNhY2hlTmV2ZXJFeHBpcmVzOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGFsbG93IGNlbGwgZXhwcmVzc2lvbnMuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZUNlbGxFeHByZXNzaW9uczogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogSWYgYHRydWVgLCByb3cgbm9kZXMgZG8gbm90IGhhdmUgdGhlaXIgcGFyZW50cyBzZXQuXG4gICAgICogVGhlIGdyaWQgZG9lc24ndCB1c2UgdGhlIHBhcmVudCByZWZlcmVuY2UsIGJ1dCBpdCBpcyBpbmNsdWRlZCB0byBoZWxwIHRoZSBjbGllbnQgY29kZSBuYXZpZ2F0ZSB0aGUgbm9kZSB0cmVlIGlmIGl0IHdhbnRzIGJ5IHByb3ZpZGluZyBiaS1kaXJlY3Rpb24gbmF2aWdhdGlvbiB1cCBhbmQgZG93biB0aGUgdHJlZS5cbiAgICAgKiBJZiB0aGlzIGlzIGEgcHJvYmxlbSAoZS5nLiBpZiB5b3UgbmVlZCB0byBjb252ZXJ0IHRoZSB0cmVlIHRvIEpTT04sIHdoaWNoIGRvZXMgbm90IGFsbG93IGN5Y2xpYyBkZXBlbmRlbmNpZXMpIHRoZW4gc2V0IHRoaXMgdG8gYHRydWVgLlxuICAgICAqIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUGFyZW50c0luUm93Tm9kZXM6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIERpc2FibGVzIHRvdWNoIHN1cHBvcnQgKGJ1dCBkb2VzIG5vdCByZW1vdmUgdGhlIGJyb3dzZXIncyBlZmZvcnRzIHRvIHNpbXVsYXRlIG1vdXNlIGV2ZW50cyBvbiB0b3VjaCkuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzVG91Y2g6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gbm90IHNldCBmb2N1cyBiYWNrIG9uIHRoZSBncmlkIGFmdGVyIGEgcmVmcmVzaC4gVGhpcyBjYW4gYXZvaWQgaXNzdWVzIHdoZXJlIHlvdSB3YW50IHRvIGtlZXAgdGhlIGZvY3VzIG9uIGFub3RoZXIgcGFydCBvZiB0aGUgYnJvd3Nlci4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NGb2N1c0FmdGVyUmVmcmVzaDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogRGlzYWJsZXMgdGhlIGFzeW5jaHJvbm91cyBuYXR1cmUgb2YgdGhlIGV2ZW50cyBpbnRyb2R1Y2VkIGluIHYxMCwgYW5kIG1ha2VzIHRoZW0gc3luY2hyb25vdXMuIFRoaXMgcHJvcGVydHkgb25seSBleGlzdHMgZm9yIHRoZSBwdXJwb3NlIG9mIHN1cHBvcnRpbmcgbGVnYWN5IGNvZGUgd2hpY2ggaGFzIGEgZGVwZW5kZW5jeSBvbiBzeW5jaHJvbm91cyBldmVudHMgZnJvbSBlYXJsaWVyIHZlcnNpb25zICh2OSBvciBlYXJsaWVyKSBvZiBBRyBHcmlkLiAgICAgKipJdCBpcyBzdHJvbmdseSByZWNvbW1lbmRlZCB0aGF0IHlvdSBkbyBub3QgY2hhbmdlIHRoaXMgcHJvcGVydHkgdW5sZXNzIHlvdSBoYXZlIGxlZ2FjeSBpc3N1ZXMuKiogRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NBc3luY0V2ZW50czogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogVGhlIGdyaWQgd2lsbCBjaGVjayBmb3IgYFJlc2l6ZU9ic2VydmVyYCBhbmQgdXNlIGl0IGlmIGl0IGV4aXN0cyBpbiB0aGUgYnJvd3Nlciwgb3RoZXJ3aXNlIGl0IHdpbGwgdXNlIHRoZSBncmlkJ3MgYWx0ZXJuYXRpdmUgaW1wbGVtZW50YXRpb24uIFNvbWUgdXNlcnMgcmVwb3J0ZWQgaXNzdWVzIHdpdGggQ2hyb21lJ3MgYFJlc2l6ZU9ic2VydmVyYC4gVXNlIHRoaXMgcHJvcGVydHkgdG8gYWx3YXlzIHVzZSB0aGUgZ3JpZCdzIGFsdGVybmF0aXZlIGltcGxlbWVudGF0aW9uIHNob3VsZCBzdWNoIHByb2JsZW1zIGV4aXN0LiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0Jyb3dzZXJSZXNpemVPYnNlcnZlcjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogRGlzYWJsZXMgc2hvd2luZyBhIHdhcm5pbmcgbWVzc2FnZSBpbiB0aGUgY29uc29sZSBpZiB1c2luZyBhIGBncmlkT3B0aW9uc2Agb3IgYGNvbERlZmAgcHJvcGVydHkgdGhhdCBkb2Vzbid0IGV4aXN0LiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1Byb3BlcnR5TmFtZXNDaGVjazogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogRGlzYWJsZXMgY2hhbmdlIGRldGVjdGlvbi4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDaGFuZ2VEZXRlY3Rpb246IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0aGlzIHRvIGB0cnVlYCB0byBlbmFibGUgZGVidWcgaW5mb3JtYXRpb24gZnJvbSB0aGUgZ3JpZCBhbmQgcmVsYXRlZCBjb21wb25lbnRzLiBXaWxsIHJlc3VsdCBpbiBhZGRpdGlvbmFsIGxvZ2dpbmcgYmVpbmcgb3V0cHV0LCBidXQgdmVyeSB1c2VmdWwgd2hlbiBpbnZlc3RpZ2F0aW5nIHByb2JsZW1zLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWJ1ZzogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogUHJvdmlkZSBhIHRlbXBsYXRlIGZvciAnbG9hZGluZycgb3ZlcmxheS4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG92ZXJsYXlMb2FkaW5nVGVtcGxhdGU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogUHJvdmlkZSBhIGN1c3RvbSBsb2FkaW5nIG92ZXJsYXkgY29tcG9uZW50LlxuICAgICAqIFNlZSBbTG9hZGluZyBPdmVybGF5IENvbXBvbmVudF0oaHR0cHM6Ly93d3cuYWctZ3JpZC5jb20vamF2YXNjcmlwdC1kYXRhLWdyaWQvY29tcG9uZW50LW92ZXJsYXkvI3NpbXBsZS1sb2FkaW5nLW92ZXJsYXktY29tcG9uZW50KSBmb3IgZnJhbWV3b3JrIHNwZWNpZmljIGltcGxlbWVudGF0aW9uIGRldGFpbHMuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2FkaW5nT3ZlcmxheUNvbXBvbmVudDogYW55ID0gdW5kZWZpbmVkO1xuICAgIC8qKiBAZGVwcmVjYXRlZCBBcyBvZiB2MjcsIHVzZSBgbG9hZGluZ092ZXJsYXlDb21wb25lbnRgIGZvciBmcmFtZXdvcmsgY29tcG9uZW50cyB0b28uXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGxvYWRpbmdPdmVybGF5Q29tcG9uZW50RnJhbWV3b3JrOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEN1c3RvbWlzZSB0aGUgcGFyYW1ldGVycyBwcm92aWRlZCB0byB0aGUgbG9hZGluZyBvdmVybGF5IGNvbXBvbmVudC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGxvYWRpbmdPdmVybGF5Q29tcG9uZW50UGFyYW1zOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgLyoqIERpc2FibGVzIHRoZSAnbG9hZGluZycgb3ZlcmxheS4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NMb2FkaW5nT3ZlcmxheTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogUHJvdmlkZSBhIHRlbXBsYXRlIGZvciAnbm8gcm93cycgb3ZlcmxheS4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG92ZXJsYXlOb1Jvd3NUZW1wbGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBQcm92aWRlIGEgY3VzdG9tIG5vIHJvd3Mgb3ZlcmxheSBjb21wb25lbnQuXG4gICAgICogU2VlIFtObyBSb3dzIE92ZXJsYXkgQ29tcG9uZW50XShodHRwczovL3d3dy5hZy1ncmlkLmNvbS9qYXZhc2NyaXB0LWRhdGEtZ3JpZC9jb21wb25lbnQtb3ZlcmxheS8jc2ltcGxlLW5vLXJvd3Mtb3ZlcmxheS1jb21wb25lbnQpIGZvciBmcmFtZXdvcmsgc3BlY2lmaWMgaW1wbGVtZW50YXRpb24gZGV0YWlscy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG5vUm93c092ZXJsYXlDb21wb25lbnQ6IGFueSA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgQXMgb2YgdjI3LCB1c2UgYG5vUm93c092ZXJsYXlDb21wb25lbnRgIGZvciBmcmFtZXdvcmsgY29tcG9uZW50cyB0b28uXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG5vUm93c092ZXJsYXlDb21wb25lbnRGcmFtZXdvcms6IGFueSA9IHVuZGVmaW5lZDtcbiAgICAvKiogQ3VzdG9taXNlIHRoZSBwYXJhbWV0ZXJzIHByb3ZpZGVkIHRvIHRoZSBubyByb3dzIG92ZXJsYXkgY29tcG9uZW50LiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbm9Sb3dzT3ZlcmxheUNvbXBvbmVudFBhcmFtczogYW55ID0gdW5kZWZpbmVkO1xuICAgIC8qKiBEaXNhYmxlcyB0aGUgJ25vIHJvd3MnIG92ZXJsYXkuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTm9Sb3dzT3ZlcmxheTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHdoZXRoZXIgcGFnaW5hdGlvbiBpcyBlbmFibGVkLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwYWdpbmF0aW9uOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBIb3cgbWFueSByb3dzIHRvIGxvYWQgcGVyIHBhZ2UuIElmIGBwYWdpbmF0aW9uQXV0b1BhZ2VTaXplYCBpcyBzcGVjaWZpZWQsIHRoaXMgcHJvcGVydHkgaXMgaWdub3JlZC4gRGVmYXVsdDogYDEwMGAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHBhZ2luYXRpb25QYWdlU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHNvIHRoYXQgdGhlIG51bWJlciBvZiByb3dzIHRvIGxvYWQgcGVyIHBhZ2UgaXMgYXV0b21hdGljYWxseSBhZGp1c3RlZCBieSB0aGUgZ3JpZCBzbyBlYWNoIHBhZ2Ugc2hvd3MgZW5vdWdoIHJvd3MgdG8ganVzdCBmaWxsIHRoZSBhcmVhIGRlc2lnbmF0ZWQgZm9yIHRoZSBncmlkLiBJZiBgZmFsc2VgLCBgcGFnaW5hdGlvblBhZ2VTaXplYCBpcyB1c2VkLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwYWdpbmF0aW9uQXV0b1BhZ2VTaXplOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGhhdmUgcGFnZXMgc3BsaXQgY2hpbGRyZW4gb2YgZ3JvdXBzIHdoZW4gdXNpbmcgUm93IEdyb3VwaW5nIG9yIGRldGFpbCByb3dzIHdpdGggTWFzdGVyIERldGFpbC4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGFnaW5hdGVDaGlsZFJvd3M6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIElmIGB0cnVlYCwgdGhlIGRlZmF1bHQgZ3JpZCBjb250cm9scyBmb3IgbmF2aWdhdGlvbiBhcmUgaGlkZGVuLlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIGlmIGBwYWdpbmF0aW9uPXRydWVgIGFuZCB5b3Ugd2FudCB0byBwcm92aWRlIHlvdXIgb3duIHBhZ2luYXRpb24gY29udHJvbHMuXG4gICAgICogT3RoZXJ3aXNlLCB3aGVuIGBwYWdpbmF0aW9uPXRydWVgIHRoZSBncmlkIGF1dG9tYXRpY2FsbHkgc2hvd3MgdGhlIG5lY2Vzc2FyeSBjb250cm9scyBhdCB0aGUgYm90dG9tIHNvIHRoYXQgdGhlIHVzZXIgY2FuIG5hdmlnYXRlIHRocm91Z2ggdGhlIGRpZmZlcmVudCBwYWdlcy5cbiAgICAgKiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1BhZ2luYXRpb25QYW5lbDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBlbmFibGUgcGl2b3QgbW9kZS4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGl2b3RNb2RlOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBXaGVuIHRvIHNob3cgdGhlICdwaXZvdCBwYW5lbCcgKHdoZXJlIHlvdSBkcmFnIHJvd3MgdG8gcGl2b3QpIGF0IHRoZSB0b3AuIE5vdGUgdGhhdCB0aGUgcGl2b3QgcGFuZWwgd2lsbCBuZXZlciBzaG93IGlmIGBwaXZvdE1vZGVgIGlzIG9mZi4gRGVmYXVsdDogYG5ldmVyYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGl2b3RQYW5lbFNob3c6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogV2hlbiBzZXQgYW5kIHRoZSBncmlkIGlzIGluIHBpdm90IG1vZGUsIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCB0b3RhbHMgd2lsbCBhcHBlYXIgd2l0aGluIHRoZSBQaXZvdCBDb2x1bW4gR3JvdXBzLCBpbiB0aGUgcG9zaXRpb24gc3BlY2lmaWVkLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGl2b3RDb2x1bW5Hcm91cFRvdGFsczogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBXaGVuIHNldCBhbmQgdGhlIGdyaWQgaXMgaW4gcGl2b3QgbW9kZSwgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIHRvdGFscyB3aWxsIGFwcGVhciBmb3IgZWFjaCB2YWx1ZSBjb2x1bW4gaW4gdGhlIHBvc2l0aW9uIHNwZWNpZmllZC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHBpdm90Um93VG90YWxzOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIElmIGB0cnVlYCwgdGhlIGdyaWQgd2lsbCBub3Qgc3dhcCBpbiB0aGUgZ3JvdXBpbmcgY29sdW1uIHdoZW4gcGl2b3RpbmcuIFVzZWZ1bCBpZiBwaXZvdGluZyB1c2luZyBTZXJ2ZXIgU2lkZSBSb3cgTW9kZWwgb3IgVmlld3BvcnQgUm93IE1vZGVsIGFuZCB5b3Ugd2FudCBmdWxsIGNvbnRyb2wgb2YgYWxsIGNvbHVtbnMgaW5jbHVkaW5nIHRoZSBncm91cCBjb2x1bW4uIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHBpdm90U3VwcHJlc3NBdXRvQ29sdW1uOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBXaGVuIGVuYWJsZWQsIHBpdm90IGNvbHVtbiBncm91cHMgd2lsbCBhcHBlYXIgJ2ZpeGVkJywgd2l0aG91dCB0aGUgYWJpbGl0eSB0byBleHBhbmQgYW5kIGNvbGxhcHNlIHRoZSBjb2x1bW4gZ3JvdXBzLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0V4cGFuZGFibGVQaXZvdEdyb3VwczogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogSWYgYHRydWVgLCB0aGVuIHJvdyBncm91cCwgcGl2b3QgYW5kIHZhbHVlIGFnZ3JlZ2F0aW9uIHdpbGwgYmUgcmVhZC1vbmx5IGZyb20gdGhlIEdVSS4gVGhlIGdyaWQgd2lsbCBkaXNwbGF5IHdoYXQgdmFsdWVzIGFyZSB1c2VkIGZvciBlYWNoLCBidXQgd2lsbCBub3QgYWxsb3cgdGhlIHVzZXIgdG8gY2hhbmdlIHRoZSBzZWxlY3Rpb24uIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGZ1bmN0aW9uc1JlYWRPbmx5OiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBBIG1hcCBvZiAnZnVuY3Rpb24gbmFtZScgdG8gJ2Z1bmN0aW9uJyBmb3IgY3VzdG9tIGFnZ3JlZ2F0aW9uIGZ1bmN0aW9ucy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFnZ0Z1bmNzOiB7IFtrZXk6IHN0cmluZ106IElBZ2dGdW5jPFREYXRhPjsgfSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogV2hlbiBgdHJ1ZWAsIGNvbHVtbiBoZWFkZXJzIHdvbid0IGluY2x1ZGUgdGhlIGBhZ2dGdW5jYCBuYW1lLCBlLmcuIGAnc3VtKEJhbmsgQmFsYW5jZSlgJyB3aWxsIGp1c3QgYmUgYCdCYW5rIEJhbGFuY2UnYC4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NBZ2dGdW5jSW5IZWFkZXI6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFdoZW4gYHRydWVgLCB0aGUgYWdncmVnYXRpb25zIHdvbid0IGJlIGNvbXB1dGVkIGZvciB0aGUgcm9vdCBub2RlIG9mIHRoZSBncmlkLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0FnZ0F0Um9vdExldmVsOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBXaGVuIHVzaW5nIGNoYW5nZSBkZXRlY3Rpb24sIG9ubHkgdGhlIHVwZGF0ZWQgY29sdW1uIHdpbGwgYmUgcmUtYWdncmVnYXRlZC4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYWdncmVnYXRlT25seUNoYW5nZWRDb2x1bW5zOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHNvIHRoYXQgYWdncmVnYXRpb25zIGFyZSBub3QgaW1wYWN0ZWQgYnkgZmlsdGVyaW5nLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0FnZ0ZpbHRlcmVkT25seTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBvbWl0IHRoZSB2YWx1ZSBDb2x1bW4gaGVhZGVyIHdoZW4gdGhlcmUgaXMgb25seSBhIHNpbmdsZSB2YWx1ZSBjb2x1bW4uIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHJlbW92ZVBpdm90SGVhZGVyUm93V2hlblNpbmdsZVZhbHVlQ29sdW1uOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGVuYWJsZSBSb3cgQW5pbWF0aW9uLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhbmltYXRlUm93czogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBoYXZlIGNlbGxzIGZsYXNoIGFmdGVyIGRhdGEgY2hhbmdlcy4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlQ2VsbENoYW5nZUZsYXNoOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBUbyBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggYGVuYWJsZUNlbGxDaGFuZ2VGbGFzaGAsIHRoaXMgY29uZmlndXJhdGlvbiB3aWxsIHNldCB0aGUgZGVsYXkgaW4gbWlsbGlzZWNvbmRzIG9mIGhvdyBsb25nIGEgY2VsbCBzaG91bGQgcmVtYWluIGluIGl0cyBcImZsYXNoZWRcIiBzdGF0ZS5cbiAgICAgKiBEZWZhdWx0OiBgNTAwYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbEZsYXNoRGVsYXk6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogVG8gYmUgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIGBlbmFibGVDZWxsQ2hhbmdlRmxhc2hgLCB0aGlzIGNvbmZpZ3VyYXRpb24gd2lsbCBzZXQgdGhlIGRlbGF5IGluIG1pbGxpc2Vjb25kcyBvZiBob3cgbG9uZyB0aGUgXCJmbGFzaGVkXCIgc3RhdGUgYW5pbWF0aW9uIHRha2VzIHRvIGZhZGUgYXdheSBhZnRlciB0aGUgdGltZXIgc2V0IGJ5IGBjZWxsRmxhc2hEZWxheWAgaGFzIGNvbXBsZXRlZC5cbiAgICAgKiBEZWZhdWx0OiBgMTAwMGAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxGYWRlRGVsYXk6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU3dpdGNoIGJldHdlZW4gbGF5b3V0IG9wdGlvbnM6IGBub3JtYWxgLCBgYXV0b0hlaWdodGAsIGBwcmludGAuXG4gICAgICogRGVmYXVsdDogYG5vcm1hbGAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRvbUxheW91dDogJ25vcm1hbCcgfCAnYXV0b0hlaWdodCcgfCAncHJpbnQnIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBXaGVuIGB0cnVlYCwgdGhlIG9yZGVyIG9mIHJvd3MgYW5kIGNvbHVtbnMgaW4gdGhlIERPTSBhcmUgY29uc2lzdGVudCB3aXRoIHdoYXQgaXMgb24gc2NyZWVuLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlbnN1cmVEb21PcmRlcjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBvcGVyYXRlIHRoZSBncmlkIGluIFJUTCAoUmlnaHQgdG8gTGVmdCkgbW9kZS4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlUnRsOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHNvIHRoYXQgdGhlIGdyaWQgZG9lc24ndCB2aXJ0dWFsaXNlIHRoZSBjb2x1bW5zLiBGb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgMTAwIGNvbHVtbnMsIGJ1dCBvbmx5IDEwIHZpc2libGUgZHVlIHRvIHNjcm9sbGluZywgYWxsIDEwMCB3aWxsIGFsd2F5cyBiZSByZW5kZXJlZC4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDb2x1bW5WaXJ0dWFsaXNhdGlvbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQnkgZGVmYXVsdCB0aGUgZ3JpZCBoYXMgYSBsaW1pdCBvZiByZW5kZXJpbmcgYSBtYXhpbXVtIG9mIDUwMCByb3dzIGF0IG9uY2UgKHJlbWVtYmVyIHRoZSBncmlkIG9ubHkgcmVuZGVycyByb3dzIHlvdSBjYW4gc2VlLCBzbyB1bmxlc3MgeW91ciBkaXNwbGF5IHNob3dzIG1vcmUgdGhhbiA1MDAgcm93cyB3aXRob3V0IHZlcnRpY2FsbHkgc2Nyb2xsaW5nIHRoaXMgd2lsbCBuZXZlciBiZSBhbiBpc3N1ZSkuXG4gICAgICogPGJyIC8+KipUaGlzIGlzIG9ubHkgcmVsZXZhbnQgaWYgeW91IGFyZSBtYW51YWxseSBzZXR0aW5nIGByb3dCdWZmZXJgIHRvIGEgaGlnaCB2YWx1ZSAocmVuZGVyaW5nIG1vcmUgcm93cyB0aGFuIGNhbiBiZSBzZWVuKSBvciBpZiB5b3VyIGdyaWQgaGVpZ2h0IGlzIGFibGUgdG8gZGlzcGxheSBtb3JlIHRoYW4gNTAwIHJvd3MgYXQgb25jZS4qKlxuICAgICAqIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTWF4UmVuZGVyZWRSb3dSZXN0cmljdGlvbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCBzbyB0aGF0IHRoZSBncmlkIGRvZXNuJ3QgdmlydHVhbGlzZSB0aGUgcm93cy4gRm9yIGV4YW1wbGUsIGlmIHlvdSBoYXZlIDEwMCByb3dzLCBidXQgb25seSAxMCB2aXNpYmxlIGR1ZSB0byBzY3JvbGxpbmcsIGFsbCAxMDAgd2lsbCBhbHdheXMgYmUgcmVuZGVyZWQuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUm93VmlydHVhbGlzYXRpb246IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gZW5hYmxlIE1hbmFnZWQgUm93IERyYWdnaW5nLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dEcmFnTWFuYWdlZDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBzdXBwcmVzcyByb3cgZHJhZ2dpbmcuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUm93RHJhZzogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBzdXBwcmVzcyBtb3Zpbmcgcm93cyB3aGlsZSBkcmFnZ2luZyB0aGUgYHJvd0RyYWdgIHdhZmZsZS4gVGhpcyBvcHRpb24gaGlnaGxpZ2h0cyB0aGUgcG9zaXRpb24gd2hlcmUgdGhlIHJvdyB3aWxsIGJlIHBsYWNlZCBhbmQgaXQgd2lsbCBvbmx5IG1vdmUgdGhlIHJvdyBvbiBtb3VzZSB1cC4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNb3ZlV2hlblJvd0RyYWdnaW5nOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGVuYWJsZSBjbGlja2luZyBhbmQgZHJhZ2dpbmcgYW55d2hlcmUgb24gdGhlIHJvdyB3aXRob3V0IHRoZSBuZWVkIGZvciBhIGRyYWcgaGFuZGxlLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dEcmFnRW50aXJlUm93OiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGVuYWJsZSBkcmFnZ2luZyBtdWx0aXBsZSByb3dzIGF0IHRoZSBzYW1lIHRpbWUuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHJvd0RyYWdNdWx0aVJvdzogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQSBjYWxsYmFjayB0aGF0IHNob3VsZCByZXR1cm4gYSBzdHJpbmcgdG8gYmUgZGlzcGxheWVkIGJ5IHRoZSBgcm93RHJhZ0NvbXBgIHdoaWxlIGRyYWdnaW5nIGEgcm93LlxuICAgICAqIElmIHRoaXMgY2FsbGJhY2sgaXMgbm90IHNldCwgdGhlIGN1cnJlbnQgY2VsbCB2YWx1ZSB3aWxsIGJlIHVzZWQuXG4gICAgICogSWYgdGhlIGByb3dEcmFnVGV4dGAgY2FsbGJhY2sgaXMgc2V0IGluIHRoZSBDb2xEZWYgaXQgd2lsbCB0YWtlIHByZWNlZGVuY2Ugb3ZlciB0aGlzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcm93RHJhZ1RleHQ6ICgocGFyYW1zOiBJUm93RHJhZ0l0ZW0sIGRyYWdJdGVtQ291bnQ6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogUHJvdmlkZSB5b3VyIG93biBjZWxsIHJlbmRlcmVyIGNvbXBvbmVudCB0byB1c2UgZm9yIGZ1bGwgd2lkdGggcm93cy5cbiAgICAgKiBTZWUgW0Z1bGwgV2lkdGggUm93c10oaHR0cHM6Ly93d3cuYWctZ3JpZC5jb20vamF2YXNjcmlwdC1kYXRhLWdyaWQvZnVsbC13aWR0aC1yb3dzLykgZm9yIGZyYW1ld29yayBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZnVsbFdpZHRoQ2VsbFJlbmRlcmVyOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIEFzIG9mIHYyNywgdXNlIGBmdWxsV2lkdGhDZWxsUmVuZGVyZXJgIGZvciBmcmFtZXdvcmsgY29tcG9uZW50cyB0b28uXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGZ1bGxXaWR0aENlbGxSZW5kZXJlckZyYW1ld29yazogYW55ID0gdW5kZWZpbmVkO1xuICAgIC8qKiBDdXN0b21pc2UgdGhlIHBhcmFtZXRlcnMgcHJvdmlkZWQgdG8gdGhlIGBmdWxsV2lkdGhDZWxsUmVuZGVyZXJgIGNvbXBvbmVudC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGZ1bGxXaWR0aENlbGxSZW5kZXJlclBhcmFtczogYW55ID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGhhdmUgdGhlIGRldGFpbCBncmlkIGVtYmVkZGVkIGluIHRoZSBtYXN0ZXIgZ3JpZCdzIGNvbnRhaW5lciBhbmQgc28gbGluayB0aGVpciBob3Jpem9udGFsIHNjcm9sbGluZy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVtYmVkRnVsbFdpZHRoUm93czogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRlcHJlY2F0ZWRFbWJlZEZ1bGxXaWR0aFJvd3M6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNwZWNpZmllcyBob3cgdGhlIHJlc3VsdHMgb2Ygcm93IGdyb3VwaW5nIHNob3VsZCBiZSBkaXNwbGF5ZWQuXG4gICAgICogXG4gICAgICogICBUaGUgb3B0aW9ucyBhcmU6XG4gICAgICogXG4gICAgICogLSBgJ3NpbmdsZUNvbHVtbidgOiBzaW5nbGUgZ3JvdXAgY29sdW1uIGF1dG9tYXRpY2FsbHkgYWRkZWQgYnkgdGhlIGdyaWQuXG4gICAgICogLSBgJ211bHRpcGxlQ29sdW1ucydgOiBhIGdyb3VwIGNvbHVtbiBwZXIgcm93IGdyb3VwIGlzIGFkZGVkIGF1dG9tYXRpY2FsbHkuXG4gICAgICogLSBgJ2dyb3VwUm93cydgOiBncm91cCByb3dzIGFyZSBhdXRvbWF0aWNhbGx5IGFkZGVkIGluc3RlYWQgb2YgZ3JvdXAgY29sdW1ucy5cbiAgICAgKiAtIGAnY3VzdG9tJ2A6IGluZm9ybXMgdGhlIGdyaWQgdGhhdCBncm91cCBjb2x1bW5zIHdpbGwgYmUgcHJvdmlkZWQuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cERpc3BsYXlUeXBlOiBSb3dHcm91cGluZ0Rpc3BsYXlUeXBlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBJZiBncm91cGluZywgc2V0IHRvIHRoZSBudW1iZXIgb2YgbGV2ZWxzIHRvIGV4cGFuZCBieSBkZWZhdWx0LCBlLmcuIGAwYCBmb3Igbm9uZSwgYDFgIGZvciBmaXJzdCBsZXZlbCBvbmx5LCBldGMuIFNldCB0byBgLTFgIHRvIGV4cGFuZCBldmVyeXRoaW5nLiBEZWZhdWx0OiBgMGAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwRGVmYXVsdEV4cGFuZGVkOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEFsbG93cyBzcGVjaWZ5aW5nIHRoZSBncm91cCAnYXV0byBjb2x1bW4nIGlmIHlvdSBhcmUgbm90IGhhcHB5IHdpdGggdGhlIGRlZmF1bHQuIElmIGdyb3VwaW5nLCB0aGlzIGNvbHVtbiBkZWZpbml0aW9uIGlzIGluY2x1ZGVkIGFzIHRoZSBmaXJzdCBjb2x1bW4gaW4gdGhlIGdyaWQuIElmIG5vdCBncm91cGluZywgdGhpcyBjb2x1bW4gaXMgbm90IGluY2x1ZGVkLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXV0b0dyb3VwQ29sdW1uRGVmOiBDb2xEZWY8VERhdGE+IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBXaGVuIGB0cnVlYCwgcHJlc2VydmVzIHRoZSBjdXJyZW50IGdyb3VwIG9yZGVyIHdoZW4gc29ydGluZyBvbiBub24tZ3JvdXAgY29sdW1ucy4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBNYWludGFpbk9yZGVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBXaGVuIGB0cnVlYCwgaWYgeW91IHNlbGVjdCBhIGdyb3VwLCB0aGUgY2hpbGRyZW4gb2YgdGhlIGdyb3VwIHdpbGwgYWxzbyBiZSBzZWxlY3RlZC4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBTZWxlY3RzQ2hpbGRyZW46IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBkZXRlcm1pbmUgd2hldGhlciBmaWx0ZXJzIHNob3VsZCBiZSBhcHBsaWVkIG9uIGFnZ3JlZ2F0ZWQgZ3JvdXAgdmFsdWVzLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cEFnZ0ZpbHRlcmluZzogYm9vbGVhbiB8IElzUm93RmlsdGVyYWJsZTxURGF0YT4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIElmIGdyb3VwaW5nLCB0aGlzIGNvbnRyb2xzIHdoZXRoZXIgdG8gc2hvdyBhIGdyb3VwIGZvb3RlciB3aGVuIHRoZSBncm91cCBpcyBleHBhbmRlZC5cbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZW4gYnkgZGVmYXVsdCwgdGhlIGZvb3RlciB3aWxsIGNvbnRhaW4gYWdncmVnYXRlIGRhdGEgKGlmIGFueSkgd2hlbiBzaG93biBhbmQgdGhlIGhlYWRlciB3aWxsIGJlIGJsYW5rLlxuICAgICAqIFdoZW4gY2xvc2VkLCB0aGUgaGVhZGVyIHdpbGwgY29udGFpbiB0aGUgYWdncmVnYXRlIGRhdGEgcmVnYXJkbGVzcyBvZiB0aGlzIHNldHRpbmcgKGFzIHRoZSBmb290ZXIgaXMgaGlkZGVuIGFueXdheSkuXG4gICAgICogVGhpcyBpcyBoYW5keSBmb3IgJ3RvdGFsJyByb3dzLCB0aGF0IGFyZSBkaXNwbGF5ZWQgYmVsb3cgdGhlIGRhdGEgd2hlbiB0aGUgZ3JvdXAgaXMgb3BlbiwgYW5kIGFsb25nc2lkZSB0aGUgZ3JvdXAgd2hlbiBpdCBpcyBjbG9zZWQuXG4gICAgICogRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBJbmNsdWRlRm9vdGVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIHNob3cgYSAnZ3JhbmQgdG90YWwnIGdyb3VwIGZvb3RlciBhY3Jvc3MgYWxsIGdyb3Vwcy4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBJbmNsdWRlVG90YWxGb290ZXI6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIElmIGB0cnVlYCwgYW5kIHNob3dpbmcgZm9vdGVyLCBhZ2dyZWdhdGUgZGF0YSB3aWxsIGFsd2F5cyBiZSBkaXNwbGF5ZWQgYXQgYm90aCB0aGUgaGVhZGVyIGFuZCBmb290ZXIgbGV2ZWxzLiBUaGlzIHN0b3BzIHRoZSBwb3NzaWJseSB1bmRlc2lyYWJsZSBiZWhhdmlvdXIgb2YgdGhlIGhlYWRlciBkZXRhaWxzICdqdW1waW5nJyB0byB0aGUgZm9vdGVyIG9uIGV4cGFuZC4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBTdXBwcmVzc0JsYW5rSGVhZGVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBJZiB1c2luZyBgZ3JvdXBTZWxlY3RzQ2hpbGRyZW5gLCB0aGVuIG9ubHkgdGhlIGNoaWxkcmVuIHRoYXQgcGFzcyB0aGUgY3VycmVudCBmaWx0ZXIgd2lsbCBnZXQgc2VsZWN0ZWQuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwU2VsZWN0c0ZpbHRlcmVkOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTaG93cyB0aGUgb3BlbiBncm91cCBpbiB0aGUgZ3JvdXAgY29sdW1uIGZvciBub24tZ3JvdXAgcm93cy4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc2hvd09wZW5lZEdyb3VwOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGNvbGxhcHNlIGdyb3VwcyB0aGF0IG9ubHkgaGF2ZSBvbmUgY2hpbGQuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFJlbW92ZVNpbmdsZUNoaWxkcmVuOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGNvbGxhcHNlIGxvd2VzdCBsZXZlbCBncm91cHMgdGhhdCBvbmx5IGhhdmUgb25lIGNoaWxkLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFJlbW92ZUxvd2VzdFNpbmdsZUNoaWxkcmVuOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGhpZGUgcGFyZW50cyB0aGF0IGFyZSBvcGVuLiBXaGVuIHVzZWQgd2l0aCBtdWx0aXBsZSBjb2x1bW5zIGZvciBzaG93aW5nIGdyb3VwcywgaXQgY2FuIGdpdmUgYSBtb3JlIHBsZWFzaW5nIHVzZXIgZXhwZXJpZW5jZS4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBIaWRlT3BlblBhcmVudHM6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFdoZW4gdG8gc2hvdyB0aGUgJ3JvdyBncm91cCBwYW5lbCcgKHdoZXJlIHlvdSBkcmFnIHJvd3MgdG8gZ3JvdXApIGF0IHRoZSB0b3AuIERlZmF1bHQ6IGBuZXZlcmAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHJvd0dyb3VwUGFuZWxTaG93OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFByb3ZpZGUgdGhlIENlbGwgUmVuZGVyZXIgdG8gdXNlIHdoZW4gYGdyb3VwRGlzcGxheVR5cGUgPSAnZ3JvdXBSb3dzJ2AuXG4gICAgICogU2VlIFtHcm91cCBSb3cgQ2VsbCBSZW5kZXJlcl0oaHR0cHM6Ly93d3cuYWctZ3JpZC5jb20vamF2YXNjcmlwdC1kYXRhLWdyaWQvZ3JvdXBpbmctZ3JvdXAtcm93cy8jcHJvdmlkaW5nLWNlbGwtcmVuZGVyZXIpIGZvciBmcmFtZXdvcmsgc3BlY2lmaWMgaW1wbGVtZW50YXRpb24gZGV0YWlscy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwUm93UmVuZGVyZXI6IGFueSA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgQXMgb2YgdjI3LCB1c2UgYGdyb3VwUm93UmVuZGVyZXJgIGZvciBmcmFtZXdvcmsgY29tcG9uZW50cyB0b28uXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwUm93UmVuZGVyZXJGcmFtZXdvcms6IGFueSA9IHVuZGVmaW5lZDtcbiAgICAvKiogQ3VzdG9taXNlIHRoZSBwYXJhbWV0ZXJzIHByb3ZpZGVkIHRvIHRoZSBgZ3JvdXBSb3dSZW5kZXJlcmAgY29tcG9uZW50LiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBSb3dSZW5kZXJlclBhcmFtczogYW55ID0gdW5kZWZpbmVkO1xuICAgIC8qKiBCeSBkZWZhdWx0LCB3aGVuIGEgY29sdW1uIGlzIHVuLWdyb3VwZWQsIGkuZS4gdXNpbmcgdGhlIFJvdyBHcm91cCBQYW5lbCwgaXQgaXMgbWFkZSB2aXNpYmxlIGluIHRoZSBncmlkLiBUaGlzIHByb3BlcnR5IHN0b3BzIHRoZSBjb2x1bW4gYmVjb21pbmcgdmlzaWJsZSBhZ2FpbiB3aGVuIHVuLWdyb3VwaW5nLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01ha2VDb2x1bW5WaXNpYmxlQWZ0ZXJVbkdyb3VwOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGVuYWJsZSB0aGUgR3JpZCB0byB3b3JrIHdpdGggVHJlZSBEYXRhLiBZb3UgbXVzdCBhbHNvIGltcGxlbWVudCB0aGUgYGdldERhdGFQYXRoKGRhdGEpYCBjYWxsYmFjay4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHRyZWVEYXRhOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIHN1cHByZXNzIHNvcnQgaW5kaWNhdG9ycyBhbmQgYWN0aW9ucyBmcm9tIHRoZSByb3cgZ3JvdXAgcGFuZWwuIERlZmF1bHQ6IGBmYWxzZWAuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dHcm91cFBhbmVsU3VwcHJlc3NTb3J0OiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGtlZXAgb3BlbiBHcm91cCBSb3dzIHZpc2libGUgYXQgdGhlIHRvcCBvZiB0aGUgZ3JpZC4gRGVmYXVsdDogYGZhbHNlYC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwUm93c1N0aWNreTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgLSB0aGlzIGlzIG5vdyBncm91cFJvd1JlbmRlcmVyUGFyYW1zLmlubmVyUmVuZGVyZXJcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBSb3dJbm5lclJlbmRlcmVyOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIC0gdGhpcyBpcyBub3cgZ3JvdXBSb3dSZW5kZXJlclBhcmFtcy5pbm5lclJlbmRlcmVyXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwUm93SW5uZXJSZW5kZXJlckZyYW1ld29yazogYW55ID0gdW5kZWZpbmVkO1xuICAgIC8qKiBAZGVwcmVjYXRlZCAtIFVzZSBncm91cERpc3BsYXlUeXBlID0gJ211bHRpcGxlQ29sdW1ucycgaW5zdGVhZFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cE11bHRpQXV0b0NvbHVtbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgLSBVc2UgZ3JvdXBEaXNwbGF5VHlwZSA9ICdncm91cFJvd3MnIGluc3RlYWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBVc2VFbnRpcmVSb3c6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIC0gVXNlIGdyb3VwRGlzcGxheVR5cGUgPSAnY3VzdG9tJyBpbnN0ZWFkXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwU3VwcHJlc3NBdXRvQ29sdW1uOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBAZGVwcmVjYXRlZCAtIG5vIGxvbmdlciBuZWVkZWQsIHRyYW5zYWN0aW9uIHVwZGF0ZXMga2VlcCBncm91cCBzdGF0ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByZW1lbWJlckdyb3VwU3RhdGVXaGVuTmV3RGF0YTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogRGF0YSB0byBiZSBkaXNwbGF5ZWQgYXMgcGlubmVkIHRvcCByb3dzIGluIHRoZSBncmlkLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGlubmVkVG9wUm93RGF0YTogYW55W10gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIERhdGEgdG8gYmUgZGlzcGxheWVkIGFzIHBpbm5lZCBib3R0b20gcm93cyBpbiB0aGUgZ3JpZC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHBpbm5lZEJvdHRvbVJvd0RhdGE6IGFueVtdIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXRzIHRoZSByb3cgbW9kZWwgdHlwZS4gRGVmYXVsdDogYGNsaWVudFNpZGVgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dNb2RlbFR5cGU6IFJvd01vZGVsVHlwZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRoZSBkYXRhIHRvIGJlIGRpc3BsYXllZCBhcyByb3dzIGluIHRoZSBncmlkLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcm93RGF0YTogVERhdGFbXSB8IG51bGwgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIEltbXV0YWJsZSBEYXRhIGlzIG9uIGJ5IGRlZmF1bHQgd2hlbiBncmlkIGNhbGxiYWNrIGdldFJvd0lkKCkgaXMgaW1wbGVtZW50ZWRcbkVuYWJsZXMgSW1tdXRhYmxlIERhdGEgbW9kZSwgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBpbW11dGFibGUgc3RvcmVzLiBEZWZhdWx0OiBgZmFsc2VgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGltbXV0YWJsZURhdGE6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEhvdyBtYW55IG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZSBleGVjdXRpbmcgYSBiYXRjaCBvZiBhc3luYyB0cmFuc2FjdGlvbnMuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhc3luY1RyYW5zYWN0aW9uV2FpdE1pbGxpczogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBQcmV2ZW50cyBUcmFuc2FjdGlvbnMgY2hhbmdpbmcgc29ydCwgZmlsdGVyLCBncm91cCBvciBwaXZvdCBzdGF0ZSB3aGVuIHRyYW5zYWN0aW9uIG9ubHkgY29udGFpbnMgdXBkYXRlcy4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNb2RlbFVwZGF0ZUFmdGVyVXBkYXRlVHJhbnNhY3Rpb246IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWx0YVJvd0RhdGFNb2RlOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBAZGVwcmVjYXRlZCB1c2UgYXN5bmNUcmFuc2FjdGlvbldhaXRNaWxsaXMgaW5zdGVhZFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBiYXRjaFVwZGF0ZVdhaXRNaWxsaXM6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogUHJvdmlkZSB0aGUgZGF0YXNvdXJjZSBmb3IgaW5maW5pdGUgc2Nyb2xsaW5nLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGF0YXNvdXJjZTogSURhdGFzb3VyY2UgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEhvdyBtYW55IGV4dHJhIGJsYW5rIHJvd3MgdG8gZGlzcGxheSB0byB0aGUgdXNlciBhdCB0aGUgZW5kIG9mIHRoZSBkYXRhc2V0LCB3aGljaCBzZXRzIHRoZSB2ZXJ0aWNhbCBzY3JvbGwgYW5kIHRoZW4gYWxsb3dzIHRoZSBncmlkIHRvIHJlcXVlc3Qgdmlld2luZyBtb3JlIHJvd3Mgb2YgZGF0YS5cbiAgICAgKiBEZWZhdWx0OiBgMWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNhY2hlT3ZlcmZsb3dTaXplOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEhvdyBtYW55IGV4dHJhIGJsYW5rIHJvd3MgdG8gZGlzcGxheSB0byB0aGUgdXNlciBhdCB0aGUgZW5kIG9mIHRoZSBkYXRhc2V0LCB3aGljaCBzZXRzIHRoZSB2ZXJ0aWNhbCBzY3JvbGwgYW5kIHRoZW4gYWxsb3dzIHRoZSBncmlkIHRvIHJlcXVlc3Qgdmlld2luZyBtb3JlIHJvd3Mgb2YgZGF0YS5cbiAgICAgKiBEZWZhdWx0OiBgMWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGluZmluaXRlSW5pdGlhbFJvd0NvdW50OiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCBob3cgbWFueSBsb2FkaW5nIHJvd3MgdG8gZGlzcGxheSB0byB0aGUgdXNlciBmb3IgdGhlIHJvb3QgbGV2ZWwgZ3JvdXAuXG4gICAgICogRGVmYXVsdDogYDFgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzZXJ2ZXJTaWRlSW5pdGlhbFJvd0NvdW50OiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIFdoZXRoZXIgdG8gdXNlIEZ1bGwgU3RvcmUgb3IgUGFydGlhbCBTdG9yZSBmb3Igc3RvcmluZyByb3dzLiBEZWZhdWx0OiBgZnVsbGAuXG5EZXByZWNhdGVkIGluIGZhdm91ciBvZiBzZXJ2ZXJTaWRlSW5maW5pdGVTY3JvbGwuIFdoZW4gdHJ1ZSwgUGFydGlhbCBTdG9yZSBpcyB1c2VkLiBXaGVuIGZhbHNlLFxuRnVsbCBTdG9yZSBpcyB1c2VkLlxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzZXJ2ZXJTaWRlU3RvcmVUeXBlOiBTZXJ2ZXJTaWRlU3RvcmVUeXBlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgd2hldGhlciBTZXJ2ZXItc2lkZSBSb3cgTW9kZWwgd2lsbCB1c2UgSW5maW5pdGUgU2Nyb2xsaW5nXG4gICAgICogRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc2VydmVyU2lkZUluZmluaXRlU2Nyb2xsOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBIb3cgbWFueSByb3dzIGZvciBlYWNoIGJsb2NrIGluIHRoZSBzdG9yZSwgaS5lLiBob3cgbWFueSByb3dzIHJldHVybmVkIGZyb20gdGhlIHNlcnZlciBhdCBhIHRpbWUuXG4gICAgICogRGVmYXVsdDogYDEwMGAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNhY2hlQmxvY2tTaXplOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEhvdyBtYW55IGJsb2NrcyB0byBrZWVwIGluIHRoZSBzdG9yZS4gRGVmYXVsdCBpcyBubyBsaW1pdCwgc28gZXZlcnkgcmVxdWVzdGVkIGJsb2NrIGlzIGtlcHQuIFVzZSB0aGlzIGlmIHlvdSBoYXZlIG1lbW9yeSBjb25jZXJucywgYW5kIGJsb2NrcyB0aGF0IHdlcmUgbGVhc3QgcmVjZW50bHkgdmlld2VkIHdpbGwgYmUgcHVyZ2VkIHdoZW4gdGhlIGxpbWl0IGlzIGhpdC4gVGhlIGdyaWQgd2lsbCBhZGRpdGlvbmFsbHkgbWFrZSBzdXJlIGl0IGhhcyBhbGwgdGhlIGJsb2NrcyBuZWVkZWQgdG8gZGlzcGxheSB3aGF0IGlzIGN1cnJlbnRseSB2aXNpYmxlLCBpbiBjYXNlIHRoaXMgcHJvcGVydHkgaXMgc2V0IHRvIGEgbG93IHZhbHVlLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbWF4QmxvY2tzSW5DYWNoZTogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBIb3cgbWFueSByZXF1ZXN0cyB0byBoaXQgdGhlIHNlcnZlciB3aXRoIGNvbmN1cnJlbnRseS4gSWYgdGhlIG1heCBpcyByZWFjaGVkLCByZXF1ZXN0cyBhcmUgcXVldWVkLlxuICAgICAqIFNldCB0byBgLTFgIGZvciBubyBtYXhpbXVtIHJlc3RyaWN0aW9uIG9uIHJlcXVlc3RzLlxuICAgICAqIERlZmF1bHQ6IGAyYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbWF4Q29uY3VycmVudERhdGFzb3VyY2VSZXF1ZXN0czogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBIb3cgbWFueSBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmUgbG9hZGluZyBhIGJsb2NrLiBVc2VmdWwgd2hlbiBpbmZpbml0ZSBzY3JvbGxpbmcgYW5kIHNjcm9sbGluZyBvdmVyIG1hbnkgaW5maW5pdGUgYmxvY2tzLCBhcyBpdCBwcmV2ZW50cyBibG9ja3MgbG9hZGluZyB1bnRpbCBzY3JvbGxpbmcgaGFzIHNldHRsZWQuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBibG9ja0xvYWREZWJvdW5jZU1pbGxpczogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBXaGVuIGVuYWJsZWQsIGNsb3NpbmcgZ3JvdXAgcm93cyB3aWxsIHJlbW92ZSBjaGlsZHJlbiBvZiB0aGF0IHJvdy4gTmV4dCB0aW1lIHRoZSByb3cgaXMgb3BlbmVkLCBjaGlsZCByb3dzIHdpbGwgYmUgcmVhZCBmcm9tIHRoZSBkYXRhc291cmNlIGFnYWluLiBUaGlzIHByb3BlcnR5IG9ubHkgYXBwbGllcyB3aGVuIHRoZXJlIGlzIFJvdyBHcm91cGluZy4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcHVyZ2VDbG9zZWRSb3dOb2RlczogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogUHJvdmlkZSB0aGUgYHNlcnZlclNpZGVEYXRhc291cmNlYCBmb3Igc2VydmVyIHNpZGUgcm93IG1vZGVsLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc2VydmVyU2lkZURhdGFzb3VyY2U6IElTZXJ2ZXJTaWRlRGF0YXNvdXJjZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogV2hlbiBlbmFibGVkLCBhbHdheXMgcmVmcmVzaGVzIHRvcCBsZXZlbCBncm91cHMgcmVnYXJkbGVzcyBvZiB3aGljaCBjb2x1bW4gd2FzIHNvcnRlZC4gVGhpcyBwcm9wZXJ0eSBvbmx5IGFwcGxpZXMgd2hlbiB0aGVyZSBpcyBSb3cgR3JvdXBpbmcgJiBzb3J0aW5nIGlzIGhhbmRsZWQgb24gdGhlIHNlcnZlci4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc2VydmVyU2lkZVNvcnRBbGxMZXZlbHM6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFdoZW4gZW5hYmxlZCwgYWx3YXlzIHJlZnJlc2hlcyB0b3AgbGV2ZWwgZ3JvdXBzIHJlZ2FyZGxlc3Mgb2Ygd2hpY2ggY29sdW1uIHdhcyBmaWx0ZXJlZC4gVGhpcyBwcm9wZXJ0eSBvbmx5IGFwcGxpZXMgd2hlbiB0aGVyZSBpcyBSb3cgR3JvdXBpbmcgJiBmaWx0ZXJpbmcgaXMgaGFuZGxlZCBvbiB0aGUgc2VydmVyLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzZXJ2ZXJTaWRlRmlsdGVyQWxsTGV2ZWxzOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBXaGVuIGVuYWJsZWQsIFNvcnRpbmcgd2lsbCBiZSBkb25lIG9uIHRoZSBzZXJ2ZXIgc2lkZS4gV2hlbiBzZXJ2ZXJTaWRlSW5maW5pdGVTY3JvbGw9dHJ1ZSwgZG9lcyBub3RoaW5nLFxuICAgICAqIGFzIFNvcnRpbmcgaXMgYWx3YXlzIHNlcnZlciBzaWRlIHdoZW4gSW5maW5pdGUgU2Nyb2xsIGlzIGFjdGl2ZS5cbiAgICAgKiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzZXJ2ZXJTaWRlU29ydE9uU2VydmVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBXaGVuIGVuYWJsZWQsIEZpbHRlcmluZyB3aWxsIGJlIGRvbmUgb24gdGhlIHNlcnZlciBzaWRlLiBXaGVuIHNlcnZlclNpZGVJbmZpbml0ZVNjcm9sbD10cnVlLCBkb2VzIG5vdGhpbmcsXG4gICAgICogYXMgRmlsdGVyaW5nIGlzIGFsd2F5cyBzZXJ2ZXIgc2lkZSB3aGVuIEluZmluaXRlIFNjcm9sbCBpcyBhY3RpdmUuXG4gICAgICogRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc2VydmVyU2lkZUZpbHRlck9uU2VydmVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBAZGVwcmVjYXRlZCBUaGlzIHByb3BlcnR5IGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSBgc2VydmVyU2lkZVNvcnRBbGxMZXZlbHNgIGluc3RlYWQuXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHNlcnZlclNpZGVTb3J0aW5nQWx3YXlzUmVzZXRzOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBAZGVwcmVjYXRlZCBUaGlzIHByb3BlcnR5IGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSBgc2VydmVyU2lkZUZpbHRlckFsbExldmVsc2AgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc2VydmVyU2lkZUZpbHRlcmluZ0Fsd2F5c1Jlc2V0czogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzRW50ZXJwcmlzZVJlc2V0T25OZXdDb2x1bW5zOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBUbyB1c2UgdGhlIHZpZXdwb3J0IHJvdyBtb2RlbCB5b3UgbmVlZCB0byBwcm92aWRlIHRoZSBncmlkIHdpdGggYSBgdmlld3BvcnREYXRhc291cmNlYC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHZpZXdwb3J0RGF0YXNvdXJjZTogSVZpZXdwb3J0RGF0YXNvdXJjZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogV2hlbiB1c2luZyB2aWV3cG9ydCByb3cgbW9kZWwsIHNldHMgdGhlIHBhZ2Ugc2l6ZSBmb3IgdGhlIHZpZXdwb3J0LiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdmlld3BvcnRSb3dNb2RlbFBhZ2VTaXplOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFdoZW4gdXNpbmcgdmlld3BvcnQgcm93IG1vZGVsLCBzZXRzIHRoZSBidWZmZXIgc2l6ZSBmb3IgdGhlIHZpZXdwb3J0LiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdmlld3BvcnRSb3dNb2RlbEJ1ZmZlclNpemU6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBhbHdheXMgc2hvdyB0aGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFsd2F5c1Nob3dIb3Jpem9udGFsU2Nyb2xsOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGFsd2F5cyBzaG93IHRoZSB2ZXJ0aWNhbCBzY3JvbGxiYXIuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFsd2F5c1Nob3dWZXJ0aWNhbFNjcm9sbDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBkZWJvdW5jZSB0aGUgdmVydGljYWwgc2Nyb2xsYmFyLiBDYW4gcHJvdmlkZSBzbW9vdGhlciBzY3JvbGxpbmcgb24gc2xvdyBtYWNoaW5lcy4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGVib3VuY2VWZXJ0aWNhbFNjcm9sbGJhcjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBuZXZlciBzaG93IHRoZSBob3Jpem9udGFsIHNjcm9sbC4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIGdyaWQgaXMgYWxpZ25lZCB3aXRoIGFub3RoZXIgZ3JpZCBhbmQgd2lsbCBzY3JvbGwgd2hlbiB0aGUgb3RoZXIgZ3JpZCBzY3JvbGxzLiAoU2hvdWxkIG5vdCBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggYGFsd2F5c1Nob3dIb3Jpem9udGFsU2Nyb2xsYC4pIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzSG9yaXpvbnRhbFNjcm9sbDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogV2hlbiBgdHJ1ZWAsIHRoZSBncmlkIHdpbGwgbm90IHNjcm9sbCB0byB0aGUgdG9wIHdoZW4gbmV3IHJvdyBkYXRhIGlzIHByb3ZpZGVkLiBVc2UgdGhpcyBpZiB5b3UgZG9uJ3Qgd2FudCB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgb2Ygc2Nyb2xsaW5nIHRvIHRoZSB0b3AgZXZlcnkgdGltZSB5b3UgbG9hZCBuZXcgZGF0YS4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NTY3JvbGxPbk5ld0RhdGE6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFdoZW4gYHRydWVgLCB0aGUgZ3JpZCB3aWxsIG5vdCBhbGxvdyBtb3VzZXdoZWVsIC8gdG91Y2hwYWQgc2Nyb2xsIHdoZW4gcG9wdXAgZWxlbWVudHMgYXJlIHByZXNlbnQuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzU2Nyb2xsV2hlblBvcHVwc0FyZU9wZW46IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFdoZW4gYHRydWVgLCB0aGUgZ3JpZCB3aWxsIG5vdCB1c2UgYW5pbWF0aW9uIGZyYW1lcyB3aGVuIGRyYXdpbmcgcm93cyB3aGlsZSBzY3JvbGxpbmcuIFVzZSB0aGlzIGlmIHRoZSBncmlkIGlzIHdvcmtpbmcgZmFzdCBlbm91Z2ggdGhhdCB5b3UgZG9uJ3QgbmVlZCBhbmltYXRpb24gZnJhbWVzIGFuZCB5b3UgZG9uJ3Qgd2FudCB0aGUgZ3JpZCB0byBmbGlja2VyLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0FuaW1hdGlvbkZyYW1lOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBJZiBgdHJ1ZWAsIG1pZGRsZSBjbGlja3Mgd2lsbCByZXN1bHQgaW4gYGNsaWNrYCBldmVudHMgZm9yIGNlbGxzIGFuZCByb3dzLiBPdGhlcndpc2UgdGhlIGJyb3dzZXIgd2lsbCB1c2UgbWlkZGxlIGNsaWNrIHRvIHNjcm9sbCB0aGUgZ3JpZC48YnIgLz4qKk5vdGU6KiogTm90IGFsbCBicm93c2VycyBmaXJlIGBjbGlja2AgZXZlbnRzIHdpdGggdGhlIG1pZGRsZSBidXR0b24uIE1vc3Qgd2lsbCBmaXJlIG9ubHkgYG1vdXNlZG93bmAgYW5kIGBtb3VzZXVwYCBldmVudHMsIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGZvY3VzIGEgY2VsbCwgYnV0IHdpbGwgbm90IHdvcmsgdG8gY2FsbCB0aGUgYG9uQ2VsbENsaWNrZWRgIGZ1bmN0aW9uLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01pZGRsZUNsaWNrU2Nyb2xsczogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogSWYgYHRydWVgLCBtb3VzZSB3aGVlbCBldmVudHMgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGJyb3dzZXIuIFVzZWZ1bCBpZiB5b3VyIGdyaWQgaGFzIG5vIHZlcnRpY2FsIHNjcm9sbHMgYW5kIHlvdSB3YW50IHRoZSBtb3VzZSB0byBzY3JvbGwgdGhlIGJyb3dzZXIgcGFnZS4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NQcmV2ZW50RGVmYXVsdE9uTW91c2VXaGVlbDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogVGVsbCB0aGUgZ3JpZCBob3cgd2lkZSBpbiBwaXhlbHMgdGhlIHNjcm9sbGJhciBpcywgd2hpY2ggaXMgdXNlZCBpbiBncmlkIHdpZHRoIGNhbGN1bGF0aW9ucy4gU2V0IG9ubHkgaWYgdXNpbmcgbm9uLXN0YW5kYXJkIGJyb3dzZXItcHJvdmlkZWQgc2Nyb2xsYmFycywgc28gdGhlIGdyaWQgY2FuIHVzZSB0aGUgbm9uLXN0YW5kYXJkIHNpemUgaW4gaXRzIGNhbGN1bGF0aW9ucy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHNjcm9sbGJhcldpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFR5cGUgb2YgUm93IFNlbGVjdGlvbjogYHNpbmdsZWAsIGBtdWx0aXBsZWAuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dTZWxlY3Rpb246ICdzaW5nbGUnIHwgJ211bHRpcGxlJyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBhbGxvdyBtdWx0aXBsZSByb3dzIHRvIGJlIHNlbGVjdGVkIHVzaW5nIHNpbmdsZSBjbGljay4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcm93TXVsdGlTZWxlY3RXaXRoQ2xpY2s6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIElmIGB0cnVlYCwgcm93cyB3aWxsIG5vdCBiZSBkZXNlbGVjdGVkIGlmIHlvdSBob2xkIGRvd24gYEN0cmxgIGFuZCBjbGljayB0aGUgcm93IG9yIHByZXNzIGBTcGFjZWAuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUm93RGVzZWxlY3Rpb246IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIElmIGB0cnVlYCwgcm93IHNlbGVjdGlvbiB3b24ndCBoYXBwZW4gd2hlbiByb3dzIGFyZSBjbGlja2VkLiBVc2Ugd2hlbiB5b3Ugb25seSB3YW50IGNoZWNrYm94IHNlbGVjdGlvbi4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NSb3dDbGlja1NlbGVjdGlvbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgVGhpcyBwcm9wZXJ0eSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgYHN1cHByZXNzQ2VsbEZvY3VzYCBpbnN0ZWFkLlxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NlbGxTZWxlY3Rpb246IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIElmIGB0cnVlYCwgY2VsbHMgd29uJ3QgYmUgZm9jdXNhYmxlLiBUaGlzIG1lYW5zIGtleWJvYXJkIG5hdmlnYXRpb24gd2lsbCBiZSBkaXNhYmxlZCBmb3IgZ3JpZCBjZWxscywgYnV0IHJlbWFpbiBlbmFibGVkIGluIG90aGVyIGVsZW1lbnRzIG9mIHRoZSBncmlkIHN1Y2ggYXMgY29sdW1uIGhlYWRlcnMsIGZsb2F0aW5nIGZpbHRlcnMsIHRvb2wgcGFuZWxzLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NlbGxGb2N1czogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogSWYgYHRydWVgLCBvbmx5IGEgc2luZ2xlIHJhbmdlIGNhbiBiZSBzZWxlY3RlZC4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNdWx0aVJhbmdlU2VsZWN0aW9uOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGJlIGFibGUgdG8gc2VsZWN0IHRoZSB0ZXh0IHdpdGhpbiBjZWxscy5cbiAgICAgKiBcbiAgICAgKiAgICAgKipOb3RlOioqIFdoZW4gdGhpcyBpcyBzZXQgdG8gYHRydWVgLCB0aGUgY2xpcGJvYXJkIHNlcnZpY2UgaXMgZGlzYWJsZWQuXG4gICAgICogRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlQ2VsbFRleHRTZWxlY3Rpb246IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gZW5hYmxlIFJhbmdlIFNlbGVjdGlvbi4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlUmFuZ2VTZWxlY3Rpb246IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gZW5hYmxlIHRoZSBSYW5nZSBIYW5kbGUuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZVJhbmdlSGFuZGxlOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGVuYWJsZSB0aGUgRmlsbCBIYW5kbGUuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZUZpbGxIYW5kbGU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgJ3gnYCB0byBmb3JjZSB0aGUgZmlsbCBoYW5kbGUgZGlyZWN0aW9uIHRvIGhvcml6b250YWwsIG9yIHNldCB0byBgJ3knYCB0byBmb3JjZSB0aGUgZmlsbCBoYW5kbGUgZGlyZWN0aW9uIHRvIHZlcnRpY2FsLiBEZWZhdWx0OiBgeHlgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmaWxsSGFuZGxlRGlyZWN0aW9uOiAneCcgfCAneScgfCAneHknIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdGhpcyB0byBgdHJ1ZWAgdG8gcHJldmVudCBjZWxsIHZhbHVlcyBmcm9tIGJlaW5nIGNsZWFyZWQgd2hlbiB0aGUgUmFuZ2UgU2VsZWN0aW9uIGlzIHJlZHVjZWQgYnkgdGhlIEZpbGwgSGFuZGxlLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NsZWFyT25GaWxsUmVkdWN0aW9uOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBBcnJheSBkZWZpbmluZyB0aGUgb3JkZXIgaW4gd2hpY2ggc29ydGluZyBvY2N1cnMgKGlmIHNvcnRpbmcgaXMgZW5hYmxlZCkuIFZhbHVlcyBjYW4gYmUgYCdhc2MnYCwgYCdkZXNjJ2Agb3IgYG51bGxgLiBGb3IgZXhhbXBsZTogYHNvcnRpbmdPcmRlcjogWydhc2MnLCAnZGVzYyddYC4gRGVmYXVsdDogYFtudWxsLCAnYXNjJywgJ2Rlc2MnXWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHNvcnRpbmdPcmRlcjogKCdhc2MnIHwgJ2Rlc2MnIHwgbnVsbClbXSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBzcGVjaWZ5IHRoYXQgdGhlIHNvcnQgc2hvdWxkIHRha2UgYWNjZW50ZWQgY2hhcmFjdGVycyBpbnRvIGFjY291bnQuIElmIHRoaXMgZmVhdHVyZSBpcyB0dXJuZWQgb24gdGhlIHNvcnQgd2lsbCBiZSBzbG93ZXIuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFjY2VudGVkU29ydDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBzaG93IHRoZSAnbm8gc29ydCcgaWNvbi4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdW5Tb3J0SWNvbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBzdXBwcmVzcyBtdWx0aS1zb3J0IHdoZW4gdGhlIHVzZXIgc2hpZnQtY2xpY2tzIGEgY29sdW1uIGhlYWRlci4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNdWx0aVNvcnQ6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gYWx3YXlzIG11bHRpLXNvcnQgd2hlbiB0aGUgdXNlciBjbGlja3MgYSBjb2x1bW4gaGVhZGVyLCByZWdhcmRsZXNzIG9mIGtleSBwcmVzc2VzLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhbHdheXNNdWx0aVNvcnQ6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgJ2N0cmwnYCB0byBoYXZlIG11bHRpIHNvcnRpbmcgd29yayB1c2luZyB0aGUgYEN0cmxgIChvciBgQ29tbWFuZCDijJhgIGZvciBNYWMpIGtleS4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG11bHRpU29ydEtleTogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIHN1cHByZXNzIHNvcnRpbmcgb2YgdW4tc29ydGVkIGRhdGEgdG8gbWF0Y2ggb3JpZ2luYWwgcm93IGRhdGEuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTWFpbnRhaW5VbnNvcnRlZE9yZGVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBJY29ucyB0byB1c2UgaW5zaWRlIHRoZSBncmlkIGluc3RlYWQgb2YgdGhlIGdyaWQncyBkZWZhdWx0IGljb25zLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaWNvbnM6IHsgW2tleTogc3RyaW5nXTogRnVuY3Rpb24gfCBzdHJpbmc7IH0gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIERlZmF1bHQgcm93IGhlaWdodCBpbiBwaXhlbHMuIERlZmF1bHQ6IGAyNWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHJvd0hlaWdodDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBUaGUgc3R5bGUgcHJvcGVydGllcyB0byBhcHBseSB0byBhbGwgcm93cy4gU2V0IHRvIGFuIG9iamVjdCBvZiBrZXkgKHN0eWxlIG5hbWVzKSBhbmQgdmFsdWVzIChzdHlsZSB2YWx1ZXMpICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dTdHlsZTogUm93U3R5bGUgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIENTUyBjbGFzcyhlcykgZm9yIGFsbCByb3dzLiBQcm92aWRlIGVpdGhlciBhIHN0cmluZyAoY2xhc3MgbmFtZSkgb3IgYXJyYXkgb2Ygc3RyaW5ncyAoYXJyYXkgb2YgY2xhc3MgbmFtZXMpLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcm93Q2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBSdWxlcyB3aGljaCBjYW4gYmUgYXBwbGllZCB0byBpbmNsdWRlIGNlcnRhaW4gQ1NTIGNsYXNzZXMuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dDbGFzc1J1bGVzOiBSb3dDbGFzc1J1bGVzPFREYXRhPiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBub3QgaGlnaGxpZ2h0IHJvd3MgYnkgYWRkaW5nIHRoZSBgYWctcm93LWhvdmVyYCBDU1MgY2xhc3MuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUm93SG92ZXJIaWdobGlnaHQ6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFVzZXMgQ1NTIGB0b3BgIGluc3RlYWQgb2YgQ1NTIGB0cmFuc2Zvcm1gIGZvciBwb3NpdGlvbmluZyByb3dzLiBVc2VmdWwgaWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiBpcyBjYXVzaW5nIGlzc3VlcyBzdWNoIGFzIHVzZWQgaW4gcm93IHNwYW5uaW5nLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1Jvd1RyYW5zZm9ybTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBoaWdobGlnaHQgY29sdW1ucyBieSBhZGRpbmcgdGhlIGBhZy1jb2x1bW4taG92ZXJgIENTUyBjbGFzcy4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY29sdW1uSG92ZXJIaWdobGlnaHQ6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGRlbHRhU29ydDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgdHJlZURhdGFEaXNwbGF5VHlwZTogVHJlZURhdGFEaXNwbGF5VHlwZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFuZ3VsYXJDb21waWxlUm93czogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFuZ3VsYXJDb21waWxlRmlsdGVyczogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZnVuY3Rpb25zUGFzc2l2ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlR3JvdXBFZGl0OiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBGb3IgY3VzdG9taXNpbmcgdGhlIGNvbnRleHQgbWVudS4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdldENvbnRleHRNZW51SXRlbXM6IEdldENvbnRleHRNZW51SXRlbXM8VERhdGE+IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBGb3IgY3VzdG9taXNpbmcgdGhlIG1haW4gJ2NvbHVtbiBoZWFkZXInIG1lbnUuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRNYWluTWVudUl0ZW1zOiBHZXRNYWluTWVudUl0ZW1zIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBBbGxvd3MgdXNlciB0byBwcm9jZXNzIHBvcHVwcyBhZnRlciB0aGV5IGFyZSBjcmVhdGVkLiBBcHBsaWNhdGlvbnMgY2FuIHVzZSB0aGlzIGlmIHRoZXkgd2FudCB0bywgZm9yIGV4YW1wbGUsIHJlcG9zaXRpb24gdGhlIHBvcHVwLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcG9zdFByb2Nlc3NQb3B1cDogKChwYXJhbXM6IFBvc3RQcm9jZXNzUG9wdXBQYXJhbXM8VERhdGE+KSA9PiB2b2lkKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQWxsb3dzIHlvdSB0byBwcm9jZXNzIGNlbGxzIGZvciB0aGUgY2xpcGJvYXJkLiBIYW5keSBpZiBmb3IgZXhhbXBsZSB5b3UgaGF2ZSBgRGF0ZWAgb2JqZWN0cyB0aGF0IG5lZWQgdG8gaGF2ZSBhIHBhcnRpY3VsYXIgZm9ybWF0IGlmIGltcG9ydGluZyBpbnRvIEV4Y2VsLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcHJvY2Vzc0NlbGxGb3JDbGlwYm9hcmQ6ICgocGFyYW1zOiBQcm9jZXNzQ2VsbEZvckV4cG9ydFBhcmFtczxURGF0YT4pID0+IGFueSkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEFsbG93cyB5b3UgdG8gcHJvY2VzcyBoZWFkZXIgdmFsdWVzIGZvciB0aGUgY2xpcGJvYXJkLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcHJvY2Vzc0hlYWRlckZvckNsaXBib2FyZDogKChwYXJhbXM6IFByb2Nlc3NIZWFkZXJGb3JFeHBvcnRQYXJhbXM8VERhdGE+KSA9PiBhbnkpIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBBbGxvd3MgeW91IHRvIHByb2Nlc3MgZ3JvdXAgaGVhZGVyIHZhbHVlcyBmb3IgdGhlIGNsaXBib2FyZC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHByb2Nlc3NHcm91cEhlYWRlckZvckNsaXBib2FyZDogKChwYXJhbXM6IFByb2Nlc3NHcm91cEhlYWRlckZvckV4cG9ydFBhcmFtczxURGF0YT4pID0+IGFueSkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEFsbG93cyB5b3UgdG8gcHJvY2VzcyBjZWxscyBmcm9tIHRoZSBjbGlwYm9hcmQuIEhhbmR5IGlmIGZvciBleGFtcGxlIHlvdSBoYXZlIG51bWJlciBmaWVsZHMsIGFuZCB3YW50IHRvIGJsb2NrIG5vbi1udW1iZXJzIGZyb20gZ2V0dGluZyBpbnRvIHRoZSBncmlkLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcHJvY2Vzc0NlbGxGcm9tQ2xpcGJvYXJkOiAoKHBhcmFtczogUHJvY2Vzc0NlbGxGb3JFeHBvcnRQYXJhbXM8VERhdGE+KSA9PiBhbnkpIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBBbGxvd3MgeW91IHRvIGdldCB0aGUgZGF0YSB0aGF0IHdvdWxkIG90aGVyd2lzZSBnbyB0byB0aGUgY2xpcGJvYXJkLiBUbyBiZSB1c2VkIHdoZW4geW91IHdhbnQgdG8gY29udHJvbCB0aGUgJ2NvcHkgdG8gY2xpcGJvYXJkJyBvcGVyYXRpb24geW91cnNlbGYuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzZW5kVG9DbGlwYm9hcmQ6ICgocGFyYW1zOiBTZW5kVG9DbGlwYm9hcmRQYXJhbXM8VERhdGE+KSA9PiB2b2lkKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQWxsb3dzIGNvbXBsZXRlIGNvbnRyb2wgb2YgdGhlIHBhc3RlIG9wZXJhdGlvbiwgaW5jbHVkaW5nIGNhbmNlbGxpbmcgdGhlIG9wZXJhdGlvbiAoc28gbm90aGluZyBoYXBwZW5zKSBvciByZXBsYWNpbmcgdGhlIGRhdGEgd2l0aCBvdGhlciBkYXRhLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcHJvY2Vzc0RhdGFGcm9tQ2xpcGJvYXJkOiAoKHBhcmFtczogUHJvY2Vzc0RhdGFGcm9tQ2xpcGJvYXJkUGFyYW1zPFREYXRhPikgPT4gc3RyaW5nW11bXSB8IG51bGwpIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBHcmlkIGNhbGxzIHRoaXMgbWV0aG9kIHRvIGtub3cgaWYgYW4gZXh0ZXJuYWwgZmlsdGVyIGlzIHByZXNlbnQuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpc0V4dGVybmFsRmlsdGVyUHJlc2VudDogKChwYXJhbXM6IElzRXh0ZXJuYWxGaWx0ZXJQcmVzZW50UGFyYW1zPFREYXRhPikgPT4gYm9vbGVhbikgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNob3VsZCByZXR1cm4gYHRydWVgIGlmIGV4dGVybmFsIGZpbHRlciBwYXNzZXMsIG90aGVyd2lzZSBgZmFsc2VgLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZG9lc0V4dGVybmFsRmlsdGVyUGFzczogKChub2RlOiBSb3dOb2RlPFREYXRhPikgPT4gYm9vbGVhbikgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIENhbGxiYWNrIHRvIGJlIHVzZWQgdG8gY3VzdG9taXNlIHRoZSBjaGFydCB0b29sYmFyIGl0ZW1zLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0Q2hhcnRUb29sYmFySXRlbXM6IEdldENoYXJ0VG9vbGJhckl0ZW1zIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBDYWxsYmFjayB0byBlbmFibGUgZGlzcGxheWluZyB0aGUgY2hhcnQgaW4gYW4gYWx0ZXJuYXRpdmUgY2hhcnQgY29udGFpbmVyLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY3JlYXRlQ2hhcnRDb250YWluZXI6ICgocGFyYW1zOiBDaGFydFJlZlBhcmFtczxURGF0YT4pID0+IHZvaWQpIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBBbGxvd3Mgb3ZlcnJpZGluZyB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgZm9yIHdoZW4gdXNlciBoaXRzIG5hdmlnYXRpb24gKGFycm93KSBrZXkgd2hlbiBhIGhlYWRlciBpcyBmb2N1c2VkLiBSZXR1cm4gdGhlIG5leHQgSGVhZGVyIHBvc2l0aW9uIHRvIG5hdmlnYXRlIHRvIG9yIGBudWxsYCB0byBzdGF5IG9uIGN1cnJlbnQgaGVhZGVyLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbmF2aWdhdGVUb05leHRIZWFkZXI6ICgocGFyYW1zOiBOYXZpZ2F0ZVRvTmV4dEhlYWRlclBhcmFtczxURGF0YT4pID0+IChIZWFkZXJQb3NpdGlvbiB8IG51bGwpKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQWxsb3dzIG92ZXJyaWRpbmcgdGhlIGRlZmF1bHQgYmVoYXZpb3VyIGZvciB3aGVuIHVzZXIgaGl0cyBgVGFiYCBrZXkgd2hlbiBhIGhlYWRlciBpcyBmb2N1c2VkLiBSZXR1cm4gdGhlIG5leHQgSGVhZGVyIHBvc2l0aW9uIHRvIG5hdmlnYXRlIHRvIG9yIGBudWxsYCB0byBzdGF5IG9uIGN1cnJlbnQgaGVhZGVyLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdGFiVG9OZXh0SGVhZGVyOiAoKHBhcmFtczogVGFiVG9OZXh0SGVhZGVyUGFyYW1zPFREYXRhPikgPT4gKEhlYWRlclBvc2l0aW9uIHwgbnVsbCkpIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBBbGxvd3Mgb3ZlcnJpZGluZyB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgZm9yIHdoZW4gdXNlciBoaXRzIG5hdmlnYXRpb24gKGFycm93KSBrZXkgd2hlbiBhIGNlbGwgaXMgZm9jdXNlZC4gUmV0dXJuIHRoZSBuZXh0IENlbGwgcG9zaXRpb24gdG8gbmF2aWdhdGUgdG8gb3IgYG51bGxgIHRvIHN0YXkgb24gY3VycmVudCBjZWxsLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbmF2aWdhdGVUb05leHRDZWxsOiAoKHBhcmFtczogTmF2aWdhdGVUb05leHRDZWxsUGFyYW1zPFREYXRhPikgPT4gKENlbGxQb3NpdGlvbiB8IG51bGwpKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQWxsb3dzIG92ZXJyaWRpbmcgdGhlIGRlZmF1bHQgYmVoYXZpb3VyIGZvciB3aGVuIHVzZXIgaGl0cyBgVGFiYCBrZXkgd2hlbiBhIGNlbGwgaXMgZm9jdXNlZC4gUmV0dXJuIHRoZSBuZXh0IENlbGwgcG9zaXRpb24gdG8gbmF2aWdhdGUgdG8gb3IgbnVsbCB0byBzdGF5IG9uIGN1cnJlbnQgY2VsbC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHRhYlRvTmV4dENlbGw6ICgocGFyYW1zOiBUYWJUb05leHRDZWxsUGFyYW1zPFREYXRhPikgPT4gKENlbGxQb3NpdGlvbiB8IG51bGwpKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgLSBTZXQgdmlhIGBjb2xEZWYuc3VwcHJlc3NLZXlib2FyZEV2ZW50YC4gSWYgeW91IG5lZWQgdGhpcyB0byBiZSBzZXQgZm9yIGV2ZXJ5IGNvbHVtbiBzZXQgdmlhIHRoZSBgZGVmYXVsdENvbERlZi5zdXBwcmVzc0tleWJvYXJkRXZlbnRgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0tleWJvYXJkRXZlbnQ6ICgocGFyYW1zOiBTdXBwcmVzc0tleWJvYXJkRXZlbnRQYXJhbXM8VERhdGE+KSA9PiBib29sZWFuKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgLSBVc2UgYGdldExvY2FsZVRleHRgIGluc3RlYWQuXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGxvY2FsZVRleHRGdW5jOiAoKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IHN0cmluZywgdmFyaWFibGVWYWx1ZXM/OiBzdHJpbmdbXSkgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQSBjYWxsYmFjayBmb3IgbG9jYWxpc2luZyB0ZXh0IHdpdGhpbiB0aGUgZ3JpZC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdldExvY2FsZVRleHQ6ICgocGFyYW1zOiBHZXRMb2NhbGVUZXh0UGFyYW1zPFREYXRhPikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQWxsb3dzIG92ZXJyaWRpbmcgd2hhdCBgZG9jdW1lbnRgIGlzIHVzZWQuIEN1cnJlbnRseSB1c2VkIGJ5IERyYWcgYW5kIERyb3AgKG1heSBleHRlbmQgdG8gb3RoZXIgcGxhY2VzIGluIHRoZSBmdXR1cmUpLiBVc2UgdGhpcyB3aGVuIHlvdSB3YW50IHRoZSBncmlkIHRvIHVzZSBhIGRpZmZlcmVudCBgZG9jdW1lbnRgIHRoYW4gdGhlIG9uZSBhdmFpbGFibGUgb24gdGhlIGdsb2JhbCBzY29wZS4gVGhpcyBjYW4gaGFwcGVuIGlmIGRvY2tpbmcgb3V0IGNvbXBvbmVudHMgKHNvbWV0aGluZyB3aGljaCBFbGVjdHJvbiBzdXBwb3J0cykgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdldERvY3VtZW50OiAoKCkgPT4gRG9jdW1lbnQpIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBBbGxvd3MgdXNlciB0byBmb3JtYXQgdGhlIG51bWJlcnMgaW4gdGhlIHBhZ2luYXRpb24gcGFuZWwsIGkuZS4gJ3JvdyBjb3VudCcgYW5kICdwYWdlIG51bWJlcicgbGFiZWxzLiBUaGlzIGlzIGZvciBwYWdpbmF0aW9uIHBhbmVsIG9ubHksIHRvIGZvcm1hdCBudW1iZXJzIGluc2lkZSB0aGUgZ3JpZCdzIGNlbGxzIChpLmUuIHlvdXIgZGF0YSksIHRoZW4gdXNlIGB2YWx1ZUZvcm1hdHRlcmAgaW4gdGhlIGNvbHVtbiBkZWZpbml0aW9ucy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHBhZ2luYXRpb25OdW1iZXJGb3JtYXR0ZXI6ICgocGFyYW1zOiBQYWdpbmF0aW9uTnVtYmVyRm9ybWF0dGVyUGFyYW1zPFREYXRhPikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgLSBVc2UgYGdldEdyb3VwUm93QWdnYCBpbnN0ZWFkLlxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFJvd0FnZ05vZGVzOiAoKG5vZGVzOiBSb3dOb2RlW10pID0+IGFueSkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIENhbGxiYWNrIHRvIHVzZSB3aGVuIHlvdSBuZWVkIGFjY2VzcyB0byBtb3JlIHRoZW4gdGhlIGN1cnJlbnQgY29sdW1uIGZvciBhZ2dyZWdhdGlvbi4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdldEdyb3VwUm93QWdnOiAoKHBhcmFtczogR2V0R3JvdXBSb3dBZ2dQYXJhbXM8VERhdGE+KSA9PiBhbnkpIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiAoQ2xpZW50LXNpZGUgUm93IE1vZGVsIG9ubHkpIEFsbG93cyBncm91cHMgdG8gYmUgb3BlbiBieSBkZWZhdWx0LiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaXNHcm91cE9wZW5CeURlZmF1bHQ6ICgocGFyYW1zOiBJc0dyb3VwT3BlbkJ5RGVmYXVsdFBhcmFtczxURGF0YT4pID0+IGJvb2xlYW4pIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBBbGxvd3MgZGVmYXVsdCBzb3J0aW5nIG9mIGdyb3Vwcy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGluaXRpYWxHcm91cE9yZGVyQ29tcGFyYXRvcjogKChwYXJhbXM6IEluaXRpYWxHcm91cE9yZGVyQ29tcGFyYXRvclBhcmFtczxURGF0YT4pID0+IG51bWJlcikgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIC0gVXNlIGBpbml0aWFsR3JvdXBPcmRlckNvbXBhcmF0b3JgIGluc3RlYWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGVmYXVsdEdyb3VwT3JkZXJDb21wYXJhdG9yOiAoKG5vZGVBOiBSb3dOb2RlPFREYXRhPiwgbm9kZUI6IFJvd05vZGU8VERhdGE+KSA9PiBudW1iZXIpIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBAZGVwcmVjYXRlZCAtIFVzZSBgcHJvY2Vzc1Bpdm90UmVzdWx0Q29sRGVmYCBpbnN0ZWFkXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHByb2Nlc3NTZWNvbmRhcnlDb2xEZWY6ICgoY29sRGVmOiBDb2xEZWY8VERhdGE+KSA9PiB2b2lkKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgLSBVc2UgYHByb2Nlc3NQaXZvdFJlc3VsdENvbEdyb3VwRGVmYCBpbnN0ZWFkXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHByb2Nlc3NTZWNvbmRhcnlDb2xHcm91cERlZjogKChjb2xHcm91cERlZjogQ29sR3JvdXBEZWY8VERhdGE+KSA9PiB2b2lkKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQ2FsbGJhY2sgdG8gYmUgdXNlZCB3aXRoIHBpdm90aW5nLCB0byBhbGxvdyBjaGFuZ2luZyB0aGUgc2Vjb25kIGNvbHVtbiBkZWZpbml0aW9uLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcHJvY2Vzc1Bpdm90UmVzdWx0Q29sRGVmOiAoKGNvbERlZjogQ29sRGVmPFREYXRhPikgPT4gdm9pZCkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIENhbGxiYWNrIHRvIGJlIHVzZWQgd2l0aCBwaXZvdGluZywgdG8gYWxsb3cgY2hhbmdpbmcgdGhlIHNlY29uZCBjb2x1bW4gZ3JvdXAgZGVmaW5pdGlvbi4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHByb2Nlc3NQaXZvdFJlc3VsdENvbEdyb3VwRGVmOiAoKGNvbEdyb3VwRGVmOiBDb2xHcm91cERlZjxURGF0YT4pID0+IHZvaWQpIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBDYWxsYmFjayB0byBiZSB1c2VkIHdoZW4gd29ya2luZyB3aXRoIFRyZWUgRGF0YSB3aGVuIGB0cmVlRGF0YSA9IHRydWVgLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0RGF0YVBhdGg6IEdldERhdGFQYXRoPFREYXRhPiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgLSBVc2UgaW5pdGlhbEdyb3VwT3JkZXJDb21wYXJhdG9yIGluc3RlYWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGVmYXVsdEdyb3VwU29ydENvbXBhcmF0b3I6ICgobm9kZUE6IFJvd05vZGU8VERhdGE+LCBub2RlQjogUm93Tm9kZTxURGF0YT4pID0+IG51bWJlcikgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEFsbG93cyBzZXR0aW5nIHRoZSBjaGlsZCBjb3VudCBmb3IgYSBncm91cCByb3cuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRDaGlsZENvdW50OiAoKGRhdGFJdGVtOiBhbnkpID0+IG51bWJlcikgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEFsbG93cyBwcm92aWRpbmcgZGlmZmVyZW50IHBhcmFtcyBmb3IgZGlmZmVyZW50IGxldmVscyBvZiBncm91cGluZy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdldFNlcnZlclNpZGVHcm91cExldmVsUGFyYW1zOiAoKHBhcmFtczogR2V0U2VydmVyU2lkZUdyb3VwTGV2ZWxQYXJhbXNQYXJhbXMpID0+IFNlcnZlclNpZGVHcm91cExldmVsUGFyYW1zKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgdXNlIGBnZXRTZXJ2ZXJTaWRlR3JvdXBMZXZlbFBhcmFtc2AgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0U2VydmVyU2lkZVN0b3JlUGFyYW1zOiAoKHBhcmFtczogR2V0U2VydmVyU2lkZUdyb3VwTGV2ZWxQYXJhbXNQYXJhbXMpID0+IFNlcnZlclNpZGVHcm91cExldmVsUGFyYW1zKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQWxsb3dzIGdyb3VwcyB0byBiZSBvcGVuIGJ5IGRlZmF1bHQuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpc1NlcnZlclNpZGVHcm91cE9wZW5CeURlZmF1bHQ6ICgocGFyYW1zOiBJc1NlcnZlclNpZGVHcm91cE9wZW5CeURlZmF1bHRQYXJhbXMpID0+IGJvb2xlYW4pIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBBbGxvd3MgY2FuY2VsbGluZyB0cmFuc2FjdGlvbnMuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpc0FwcGx5U2VydmVyU2lkZVRyYW5zYWN0aW9uOiBJc0FwcGx5U2VydmVyU2lkZVRyYW5zYWN0aW9uIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTU1JNIFRyZWUgRGF0YTogQWxsb3dzIHNwZWNpZnlpbmcgd2hpY2ggcm93cyBhcmUgZXhwYW5kYWJsZS4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGlzU2VydmVyU2lkZUdyb3VwOiBJc1NlcnZlclNpZGVHcm91cCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU1NSTSBUcmVlIERhdGE6IEFsbG93cyBzcGVjaWZ5aW5nIGdyb3VwIGtleXMuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRTZXJ2ZXJTaWRlR3JvdXBLZXk6IEdldFNlcnZlclNpZGVHcm91cEtleSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogUmV0dXJuIGEgYnVzaW5lc3Mga2V5IGZvciB0aGUgbm9kZS4gSWYgaW1wbGVtZW50ZWQsIGVhY2ggcm93IGluIHRoZSBET00gd2lsbCBoYXZlIGFuIGF0dHJpYnV0ZSBgcm93LWlkPSdhYmMnYCB3aGVyZSBgYWJjYCBpcyB3aGF0IHlvdSByZXR1cm4gYXMgdGhlIGJ1c2luZXNzIGtleS5cbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgYXV0b21hdGVkIHRlc3RpbmcsIGFzIGl0IHByb3ZpZGVzIGEgd2F5IGZvciB5b3VyIHRvb2wgdG8gaWRlbnRpZnkgcm93cyBiYXNlZCBvbiB1bmlxdWUgYnVzaW5lc3Mga2V5cy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdldEJ1c2luZXNzS2V5Rm9yTm9kZTogKChub2RlOiBSb3dOb2RlPFREYXRhPikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBnZXRSb3dJZGAgaW5zdGVhZCAtIGhvd2V2ZXIgYmUgYXdhcmUsIGBnZXRSb3dJZCgpYCB3aWxsIGFsc28gc2V0IGdyaWQgb3B0aW9uIGBpbW11dGFibGVEYXRhPXRydWVgXG5BbGxvd3MgeW91IHRvIHNldCB0aGUgSUQgZm9yIGEgcGFydGljdWxhciByb3cgbm9kZSBiYXNlZCBvbiB0aGUgZGF0YS5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0Um93Tm9kZUlkOiBHZXRSb3dOb2RlSWRGdW5jPFREYXRhPiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQWxsb3dzIHNldHRpbmcgdGhlIElEIGZvciBhIHBhcnRpY3VsYXIgcm93IG5vZGUgYmFzZWQgb24gdGhlIGRhdGEuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRSb3dJZDogR2V0Um93SWRGdW5jPFREYXRhPiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogV2hlbiBlbmFibGVkLCBnZXRSb3dJZCgpIGNhbGxiYWNrIGlzIGltcGxlbWVudGVkIGFuZCBuZXcgUm93IERhdGEgaXMgc2V0LCB0aGUgZ3JpZCB3aWxsIGRpc3JlZ2FyZCBhbGwgcHJldmlvdXMgcm93cyBhbmQgdHJlYXQgdGhlIG5ldyBSb3cgRGF0YSBhcyBuZXcgZGF0YS4gQXMgYSBjb25zZXF1ZW5jZSwgYWxsIFJvdyBTdGF0ZSAoZWcgc2VsZWN0aW9uLCByZW5kZXJlZCByb3dzKSB3aWxsIGJlIHJlc2V0LiAgRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcmVzZXRSb3dEYXRhT25VcGRhdGU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEFsbG93cyB5b3UgdG8gcHJvY2VzcyByb3dzIGFmdGVyIHRoZXkgYXJlIGNyZWF0ZWQsIHNvIHlvdSBjYW4gZG8gZmluYWwgYWRkaW5nIG9mIGN1c3RvbSBhdHRyaWJ1dGVzIGV0Yy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHByb2Nlc3NSb3dQb3N0Q3JlYXRlOiAoKHBhcmFtczogUHJvY2Vzc1Jvd1BhcmFtczxURGF0YT4pID0+IHZvaWQpIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBDYWxsYmFjayB0byBiZSB1c2VkIHRvIGRldGVybWluZSB3aGljaCByb3dzIGFyZSBzZWxlY3RhYmxlLiBCeSBkZWZhdWx0IHJvd3MgYXJlIHNlbGVjdGFibGUsIHNvIHJldHVybiBgZmFsc2VgIHRvIG1ha2UgYSByb3cgdW4tc2VsZWN0YWJsZS4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGlzUm93U2VsZWN0YWJsZTogSXNSb3dTZWxlY3RhYmxlPFREYXRhPiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQ2FsbGJhY2sgdG8gYmUgdXNlZCB3aXRoIE1hc3RlciBEZXRhaWwgdG8gZGV0ZXJtaW5lIGlmIGEgcm93IHNob3VsZCBiZSBhIG1hc3RlciByb3cuIElmIGBmYWxzZWAgaXMgcmV0dXJuZWQgbm8gZGV0YWlsIHJvdyB3aWxsIGV4aXN0IGZvciB0aGlzIHJvdy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGlzUm93TWFzdGVyOiBJc1Jvd01hc3RlcjxURGF0YT4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIENhbGxiYWNrIHRvIGZpbGwgdmFsdWVzIGluc3RlYWQgb2Ygc2ltcGx5IGNvcHlpbmcgdmFsdWVzIG9yIGluY3JlYXNpbmcgbnVtYmVyIHZhbHVlcyB1c2luZyBsaW5lYXIgcHJvZ3Jlc3Npb24uICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmaWxsT3BlcmF0aW9uOiAoKHBhcmFtczogRmlsbE9wZXJhdGlvblBhcmFtczxURGF0YT4pID0+IGFueSkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgcG9zdFNvcnRSb3dzYCBpbnN0ZWFkXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHBvc3RTb3J0OiAoKG5vZGVzOiBSb3dOb2RlPFREYXRhPltdKSA9PiB2b2lkKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQ2FsbGJhY2sgdG8gcGVyZm9ybSBhZGRpdGlvbmFsIHNvcnRpbmcgYWZ0ZXIgdGhlIGdyaWQgaGFzIHNvcnRlZCB0aGUgcm93cy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHBvc3RTb3J0Um93czogKChwYXJhbXM6IFBvc3RTb3J0Um93c1BhcmFtczxURGF0YT4pID0+IHZvaWQpIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBDYWxsYmFjayB2ZXJzaW9uIG9mIHByb3BlcnR5IGByb3dTdHlsZWAgdG8gc2V0IHN0eWxlIGZvciBlYWNoIHJvdyBpbmRpdmlkdWFsbHkuIEZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYW4gb2JqZWN0IG9mIENTUyB2YWx1ZXMgb3IgdW5kZWZpbmVkIGZvciBubyBzdHlsZXMuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRSb3dTdHlsZTogKChwYXJhbXM6IFJvd0NsYXNzUGFyYW1zPFREYXRhPikgPT4gUm93U3R5bGUgfCB1bmRlZmluZWQpIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBDYWxsYmFjayB2ZXJzaW9uIG9mIHByb3BlcnR5IGByb3dDbGFzc2AgdG8gc2V0IGNsYXNzKGVzKSBmb3IgZWFjaCByb3cgaW5kaXZpZHVhbGx5LiBGdW5jdGlvbiBzaG91bGQgcmV0dXJuIGVpdGhlciBhIHN0cmluZyAoY2xhc3MgbmFtZSksIGFycmF5IG9mIHN0cmluZ3MgKGFycmF5IG9mIGNsYXNzIG5hbWVzKSBvciB1bmRlZmluZWQgZm9yIG5vIGNsYXNzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0Um93Q2xhc3M6ICgocGFyYW1zOiBSb3dDbGFzc1BhcmFtczxURGF0YT4pID0+IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQ2FsbGJhY2sgdmVyc2lvbiBvZiBwcm9wZXJ0eSBgcm93SGVpZ2h0YCB0byBzZXQgaGVpZ2h0IGZvciBlYWNoIHJvdyBpbmRpdmlkdWFsbHkuIEZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSBwb3NpdGl2ZSBudW1iZXIgb2YgcGl4ZWxzLCBvciByZXR1cm4gYG51bGxgL2B1bmRlZmluZWRgIHRvIHVzZSB0aGUgZGVmYXVsdCByb3cgaGVpZ2h0LiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0Um93SGVpZ2h0OiAoKHBhcmFtczogUm93SGVpZ2h0UGFyYW1zPFREYXRhPikgPT4gbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbCkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgaXNGdWxsV2lkdGhSb3dgIGluc3RlYWQuXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGlzRnVsbFdpZHRoQ2VsbDogKChyb3dOb2RlOiBSb3dOb2RlPFREYXRhPikgPT4gYm9vbGVhbikgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFRlbGxzIHRoZSBncmlkIGlmIHRoaXMgcm93IHNob3VsZCBiZSByZW5kZXJlZCBhcyBmdWxsIHdpZHRoLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaXNGdWxsV2lkdGhSb3c6ICgocGFyYW1zOiBJc0Z1bGxXaWR0aFJvd1BhcmFtczxURGF0YT4pID0+IGJvb2xlYW4pIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gICAgLyoqIFRoZSB0b29sIHBhbmVsIHdhcyBoaWRkZW4gb3Igc2hvd24uIFVzZSBgYXBpLmlzVG9vbFBhbmVsU2hvd2luZygpYCB0byBnZXQgc3RhdHVzLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIHRvb2xQYW5lbFZpc2libGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8VG9vbFBhbmVsVmlzaWJsZUNoYW5nZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxUb29sUGFuZWxWaXNpYmxlQ2hhbmdlZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogVGhlIHRvb2wgcGFuZWwgc2l6ZSBoYXMgYmVlbiBjaGFuZ2VkLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIHRvb2xQYW5lbFNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8VG9vbFBhbmVsU2l6ZUNoYW5nZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxUb29sUGFuZWxTaXplQ2hhbmdlZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogUGFzdGUgb3BlcmF0aW9uIGhhcyBzdGFydGVkLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIHBhc3RlU3RhcnQ6IEV2ZW50RW1pdHRlcjxQYXN0ZVN0YXJ0RXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8UGFzdGVTdGFydEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogUGFzdGUgb3BlcmF0aW9uIGhhcyBlbmRlZC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBwYXN0ZUVuZDogRXZlbnRFbWl0dGVyPFBhc3RlRW5kRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8UGFzdGVFbmRFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIEEgY29sdW1uLCBvciBncm91cCBvZiBjb2x1bW5zLCB3YXMgaGlkZGVuIC8gc2hvd24uICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uVmlzaWJsZTogRXZlbnRFbWl0dGVyPENvbHVtblZpc2libGVFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDb2x1bW5WaXNpYmxlRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBBIGNvbHVtbiwgb3IgZ3JvdXAgb2YgY29sdW1ucywgd2FzIHBpbm5lZCAvIHVucGlubmVkLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtblBpbm5lZDogRXZlbnRFbWl0dGVyPENvbHVtblBpbm5lZEV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENvbHVtblBpbm5lZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogQSBjb2x1bW4gd2FzIHJlc2l6ZWQuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uUmVzaXplZDogRXZlbnRFbWl0dGVyPENvbHVtblJlc2l6ZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDb2x1bW5SZXNpemVkRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBBIGNvbHVtbiB3YXMgbW92ZWQuIFRvIGZpbmQgb3V0IHdoZW4gdGhlIGNvbHVtbiBtb3ZlIGlzIGZpbmlzaGVkIHlvdSBjYW4gdXNlIHRoZSBgZHJhZ1N0b3BwZWRgIGV2ZW50IGJlbG93LiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtbk1vdmVkOiBFdmVudEVtaXR0ZXI8Q29sdW1uTW92ZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDb2x1bW5Nb3ZlZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogQSB2YWx1ZSBjb2x1bW4gd2FzIGFkZGVkIG9yIHJlbW92ZWQuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uVmFsdWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Q29sdW1uVmFsdWVDaGFuZ2VkRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sdW1uVmFsdWVDaGFuZ2VkRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBUaGUgcGl2b3QgbW9kZSBmbGFnIHdhcyBjaGFuZ2VkLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtblBpdm90TW9kZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxDb2x1bW5QaXZvdE1vZGVDaGFuZ2VkRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sdW1uUGl2b3RNb2RlQ2hhbmdlZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogQSBwaXZvdCBjb2x1bW4gd2FzIGFkZGVkLCByZW1vdmVkIG9yIG9yZGVyIGNoYW5nZWQuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uUGl2b3RDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Q29sdW1uUGl2b3RDaGFuZ2VkRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sdW1uUGl2b3RDaGFuZ2VkRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBBIGNvbHVtbiBncm91cCB3YXMgb3BlbmVkIC8gY2xvc2VkLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtbkdyb3VwT3BlbmVkOiBFdmVudEVtaXR0ZXI8Q29sdW1uR3JvdXBPcGVuZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDb2x1bW5Hcm91cE9wZW5lZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogVXNlciBzZXQgbmV3IGNvbHVtbnMuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgbmV3Q29sdW1uc0xvYWRlZDogRXZlbnRFbWl0dGVyPE5ld0NvbHVtbnNMb2FkZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZXdDb2x1bW5zTG9hZGVkRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBUaGUgbGlzdCBvZiBncmlkIGNvbHVtbnMgY2hhbmdlZC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBncmlkQ29sdW1uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxHcmlkQ29sdW1uc0NoYW5nZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkQ29sdW1uc0NoYW5nZWRFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIFRoZSBsaXN0IG9mIGRpc3BsYXllZCBjb2x1bW5zIGNoYW5nZWQuIFRoaXMgY2FuIHJlc3VsdCBmcm9tIGNvbHVtbnMgb3BlbiAvIGNsb3NlLCBjb2x1bW4gbW92ZSwgcGl2b3QsIGdyb3VwLCBldGMuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgZGlzcGxheWVkQ29sdW1uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxEaXNwbGF5ZWRDb2x1bW5zQ2hhbmdlZEV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPERpc3BsYXllZENvbHVtbnNDaGFuZ2VkRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBUaGUgbGlzdCBvZiByZW5kZXJlZCBjb2x1bW5zIGNoYW5nZWQgKG9ubHkgY29sdW1ucyBpbiB0aGUgdmlzaWJsZSBzY3JvbGxlZCB2aWV3cG9ydCBhcmUgcmVuZGVyZWQgYnkgZGVmYXVsdCkuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgdmlydHVhbENvbHVtbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8VmlydHVhbENvbHVtbnNDaGFuZ2VkRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8VmlydHVhbENvbHVtbnNDaGFuZ2VkRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBTaG90Z3VuIC0gZ2V0cyBjYWxsZWQgd2hlbiBlaXRoZXIgYSkgbmV3IGNvbHVtbnMgYXJlIHNldCBvciBiKSBgY29sdW1uQXBpLnNldFN0YXRlKClgIGlzIHVzZWQsIHNvIGV2ZXJ5dGhpbmcgaGFzIGNoYW5nZWQuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uRXZlcnl0aGluZ0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxDb2x1bW5FdmVyeXRoaW5nQ2hhbmdlZEV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENvbHVtbkV2ZXJ5dGhpbmdDaGFuZ2VkRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBPbmx5IHVzZWQgYnkgQW5ndWxhciwgUmVhY3QgYW5kIFZ1ZUpTIEFHIEdyaWQgY29tcG9uZW50cyAobm90IHVzZWQgaWYgZG9pbmcgcGxhaW4gSmF2YVNjcmlwdCkuXG4gICAgICogSWYgdGhlIGdyaWQgcmVjZWl2ZXMgY2hhbmdlcyBkdWUgdG8gYm91bmQgcHJvcGVydGllcywgdGhpcyBldmVudCBmaXJlcyBhZnRlciB0aGUgZ3JpZCBoYXMgZmluaXNoZWQgcHJvY2Vzc2luZyB0aGUgY2hhbmdlLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbXBvbmVudFN0YXRlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPENvbXBvbmVudFN0YXRlQ2hhbmdlZEV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBvbmVudFN0YXRlQ2hhbmdlZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogVmFsdWUgaGFzIGNoYW5nZWQgYWZ0ZXIgZWRpdGluZyAodGhpcyBldmVudCB3aWxsIG5vdCBmaXJlIGlmIGVkaXRpbmcgd2FzIGNhbmNlbGxlZCwgZWcgRVNDIHdhcyBwcmVzc2VkKSBvclxuICAgICAqICAgaWYgY2VsbCB2YWx1ZSBoYXMgY2hhbmdlZCBhcyBhIHJlc3VsdCBvZiBwYXN0ZSBvcGVyYXRpb24uICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2VsbFZhbHVlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPENlbGxWYWx1ZUNoYW5nZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsVmFsdWVDaGFuZ2VkRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBWYWx1ZSBoYXMgY2hhbmdlZCBhZnRlciBlZGl0aW5nLiBPbmx5IGZpcmVzIHdoZW4gZG9pbmcgUmVhZCBPbmx5IEVkaXRzLCBpZSBgcmVhZE9ubHlFZGl0PXRydWVgLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIGNlbGxFZGl0UmVxdWVzdDogRXZlbnRFbWl0dGVyPENlbGxFZGl0UmVxdWVzdEV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxFZGl0UmVxdWVzdEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogQSBjZWxsJ3MgdmFsdWUgd2l0aGluIGEgcm93IGhhcyBjaGFuZ2VkLiBUaGlzIGV2ZW50IGNvcnJlc3BvbmRzIHRvIEZ1bGwgUm93IEVkaXRpbmcgb25seS4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dWYWx1ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxSb3dWYWx1ZUNoYW5nZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxSb3dWYWx1ZUNoYW5nZWRFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIEVkaXRpbmcgYSBjZWxsIGhhcyBzdGFydGVkLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIGNlbGxFZGl0aW5nU3RhcnRlZDogRXZlbnRFbWl0dGVyPENlbGxFZGl0aW5nU3RhcnRlZEV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxFZGl0aW5nU3RhcnRlZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogRWRpdGluZyBhIGNlbGwgaGFzIHN0b3BwZWQuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2VsbEVkaXRpbmdTdG9wcGVkOiBFdmVudEVtaXR0ZXI8Q2VsbEVkaXRpbmdTdG9wcGVkRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2VsbEVkaXRpbmdTdG9wcGVkRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBFZGl0aW5nIGEgcm93IGhhcyBzdGFydGVkICh3aGVuIHJvdyBlZGl0aW5nIGlzIGVuYWJsZWQpLiBXaGVuIHJvdyBlZGl0aW5nLCB0aGlzIGV2ZW50IHdpbGwgYmUgZmlyZWQgb25jZSBhbmQgYGNlbGxFZGl0aW5nU3RhcnRlZGAgd2lsbCBiZSBmaXJlZCBmb3IgZWFjaCBpbmRpdmlkdWFsIGNlbGwuIE9ubHkgZmlyZXMgd2hlbiBkb2luZyBGdWxsIFJvdyBFZGl0aW5nLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0VkaXRpbmdTdGFydGVkOiBFdmVudEVtaXR0ZXI8Um93RWRpdGluZ1N0YXJ0ZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxSb3dFZGl0aW5nU3RhcnRlZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogRWRpdGluZyBhIHJvdyBoYXMgc3RvcHBlZCAod2hlbiByb3cgZWRpdGluZyBpcyBlbmFibGVkKS4gV2hlbiByb3cgZWRpdGluZywgdGhpcyBldmVudCB3aWxsIGJlIGZpcmVkIG9uY2UgYW5kIGBjZWxsRWRpdGluZ1N0b3BwZWRgIHdpbGwgYmUgZmlyZWQgZm9yIGVhY2ggaW5kaXZpZHVhbCBjZWxsLiBPbmx5IGZpcmVzIHdoZW4gZG9pbmcgRnVsbCBSb3cgRWRpdGluZy4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dFZGl0aW5nU3RvcHBlZDogRXZlbnRFbWl0dGVyPFJvd0VkaXRpbmdTdG9wcGVkRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Um93RWRpdGluZ1N0b3BwZWRFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIEZpbHRlciBoYXMgYmVlbiBvcGVuZWQuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgZmlsdGVyT3BlbmVkOiBFdmVudEVtaXR0ZXI8RmlsdGVyT3BlbmVkRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsdGVyT3BlbmVkRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBGaWx0ZXIgaGFzIGJlZW4gbW9kaWZpZWQgYW5kIGFwcGxpZWQuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgZmlsdGVyQ2hhbmdlZDogRXZlbnRFbWl0dGVyPEZpbHRlckNoYW5nZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWx0ZXJDaGFuZ2VkRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBGaWx0ZXIgd2FzIG1vZGlmaWVkIGJ1dCBub3QgYXBwbGllZC4gVXNlZCB3aGVuIGZpbHRlcnMgaGF2ZSAnQXBwbHknIGJ1dHRvbnMuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgZmlsdGVyTW9kaWZpZWQ6IEV2ZW50RW1pdHRlcjxGaWx0ZXJNb2RpZmllZEV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbHRlck1vZGlmaWVkRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBBIGNoYXJ0IGhhcyBiZWVuIGNyZWF0ZWQuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2hhcnRDcmVhdGVkOiBFdmVudEVtaXR0ZXI8Q2hhcnRDcmVhdGVkPFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0Q3JlYXRlZDxURGF0YT4+KCk7XG4gICAgLyoqIFRoZSBkYXRhIHJhbmdlIGZvciB0aGUgY2hhcnQgaGFzIGJlZW4gY2hhbmdlZC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjaGFydFJhbmdlU2VsZWN0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPENoYXJ0UmFuZ2VTZWxlY3Rpb25DaGFuZ2VkPFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0UmFuZ2VTZWxlY3Rpb25DaGFuZ2VkPFREYXRhPj4oKTtcbiAgICAvKiogRm9ybWF0dGluZyBjaGFuZ2VzIGhhdmUgYmVlbiBtYWRlIGJ5IHVzZXJzIHRocm91Z2ggdGhlIEZvcm1hdCBQYW5lbC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjaGFydE9wdGlvbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Q2hhcnRPcHRpb25zQ2hhbmdlZDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydE9wdGlvbnNDaGFuZ2VkPFREYXRhPj4oKTtcbiAgICAvKiogQSBjaGFydCBoYXMgYmVlbiBkZXN0cm95ZWQuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2hhcnREZXN0cm95ZWQ6IEV2ZW50RW1pdHRlcjxDaGFydERlc3Ryb3llZDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydERlc3Ryb3llZDxURGF0YT4+KCk7XG4gICAgLyoqIERPTSBldmVudCBga2V5RG93bmAgaGFwcGVuZWQgb24gYSBjZWxsLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIGNlbGxLZXlEb3duOiBFdmVudEVtaXR0ZXI8Q2VsbEtleURvd25FdmVudDxURGF0YT4gfCBGdWxsV2lkdGhDZWxsS2V5RG93bkV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxLZXlEb3duRXZlbnQ8VERhdGE+IHwgRnVsbFdpZHRoQ2VsbEtleURvd25FdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIERPTSBldmVudCBga2V5UHJlc3NgIGhhcHBlbmVkIG9uIGEgY2VsbC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsS2V5UHJlc3M6IEV2ZW50RW1pdHRlcjxDZWxsS2V5UHJlc3NFdmVudDxURGF0YT4gfCBGdWxsV2lkdGhDZWxsS2V5UHJlc3NFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsS2V5UHJlc3NFdmVudDxURGF0YT4gfCBGdWxsV2lkdGhDZWxsS2V5UHJlc3NFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIFRoZSBncmlkIGhhcyBpbml0aWFsaXNlZCBhbmQgaXMgcmVhZHkgZm9yIG1vc3QgYXBpIGNhbGxzLCBidXQgbWF5IG5vdCBiZSBmdWxseSByZW5kZXJlZCB5ZXQgICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBncmlkUmVhZHk6IEV2ZW50RW1pdHRlcjxHcmlkUmVhZHlFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkUmVhZHlFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIEZpcmVkIHRoZSBmaXJzdCB0aW1lIGRhdGEgaXMgcmVuZGVyZWQgaW50byB0aGUgZ3JpZC4gVXNlIHRoaXMgZXZlbnQgaWYgeW91IHdhbnQgdG8gYXV0byByZXNpemUgY29sdW1ucyBiYXNlZCBvbiB0aGVpciBjb250ZW50cyAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIGZpcnN0RGF0YVJlbmRlcmVkOiBFdmVudEVtaXR0ZXI8Rmlyc3REYXRhUmVuZGVyZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaXJzdERhdGFSZW5kZXJlZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogVGhlIHNpemUgb2YgdGhlIGdyaWQgYGRpdmAgaGFzIGNoYW5nZWQuIEluIG90aGVyIHdvcmRzLCB0aGUgZ3JpZCB3YXMgcmVzaXplZC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBncmlkU2l6ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxHcmlkU2l6ZUNoYW5nZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkU2l6ZUNoYW5nZWRFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIERpc3BsYXllZCByb3dzIGhhdmUgY2hhbmdlZC4gVHJpZ2dlcmVkIGFmdGVyIHNvcnQsIGZpbHRlciBvciB0cmVlIGV4cGFuZCAvIGNvbGxhcHNlIGV2ZW50cy4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBtb2RlbFVwZGF0ZWQ6IEV2ZW50RW1pdHRlcjxNb2RlbFVwZGF0ZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RlbFVwZGF0ZWRFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIEEgcm93IHdhcyByZW1vdmVkIGZyb20gdGhlIERPTSwgZm9yIGFueSByZWFzb24uIFVzZSB0byBjbGVhbiB1cCByZXNvdXJjZXMgKGlmIGFueSkgdXNlZCBieSB0aGUgcm93LiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIHZpcnR1YWxSb3dSZW1vdmVkOiBFdmVudEVtaXR0ZXI8VmlydHVhbFJvd1JlbW92ZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxWaXJ0dWFsUm93UmVtb3ZlZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogV2hpY2ggcm93cyBhcmUgcmVuZGVyZWQgaW4gdGhlIERPTSBoYXMgY2hhbmdlZC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyB2aWV3cG9ydENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxWaWV3cG9ydENoYW5nZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxWaWV3cG9ydENoYW5nZWRFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIFRoZSBib2R5IHdhcyBzY3JvbGxlZCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseS4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBib2R5U2Nyb2xsOiBFdmVudEVtaXR0ZXI8Qm9keVNjcm9sbEV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEJvZHlTY3JvbGxFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIE1haW4gYm9keSBvZiB0aGUgZ3JpZCBoYXMgc3RvcHBlZCBzY3JvbGxpbmcsIGVpdGhlciBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseS4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBib2R5U2Nyb2xsRW5kOiBFdmVudEVtaXR0ZXI8Qm9keVNjcm9sbEVuZEV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEJvZHlTY3JvbGxFbmRFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIFdoZW4gZHJhZ2dpbmcgc3RhcnRzLiBUaGlzIGNvdWxkIGJlIGFueSBhY3Rpb24gdGhhdCB1c2VzIHRoZSBncmlkJ3MgRHJhZyBhbmQgRHJvcCBzZXJ2aWNlLCBlLmcuIENvbHVtbiBNb3ZpbmcsIENvbHVtbiBSZXNpemluZywgUmFuZ2UgU2VsZWN0aW9uLCBGaWxsIEhhbmRsZSwgZXRjLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIGRyYWdTdGFydGVkOiBFdmVudEVtaXR0ZXI8RHJhZ1N0YXJ0ZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnU3RhcnRlZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogV2hlbiBkcmFnZ2luZyBzdG9wcy4gVGhpcyBjb3VsZCBiZSBhbnkgYWN0aW9uIHRoYXQgdXNlcyB0aGUgZ3JpZCdzIERyYWcgYW5kIERyb3Agc2VydmljZSwgZS5nLiBDb2x1bW4gTW92aW5nLCBDb2x1bW4gUmVzaXppbmcsIFJhbmdlIFNlbGVjdGlvbiwgRmlsbCBIYW5kbGUsIGV0Yy4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBkcmFnU3RvcHBlZDogRXZlbnRFbWl0dGVyPERyYWdTdG9wcGVkRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ1N0b3BwZWRFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIFRyaWdnZXJlZCBldmVyeSB0aW1lIHRoZSBwYWdpbmcgc3RhdGUgY2hhbmdlcy4gU29tZSBvZiB0aGUgbW9zdCBjb21tb24gc2NlbmFyaW9zIGZvciB0aGlzIGV2ZW50IHRvIGJlIHRyaWdnZXJlZCBhcmU6XG4gICAgICogXG4gICAgICogICAtIFRoZSBwYWdlIHNpemUgY2hhbmdlcy5cbiAgICAgKiAgIC0gVGhlIGN1cnJlbnQgc2hvd24gcGFnZSBpcyBjaGFuZ2VkLlxuICAgICAqICAgLSBOZXcgZGF0YSBpcyBsb2FkZWQgb250byB0aGUgZ3JpZC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBwYWdpbmF0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFBhZ2luYXRpb25DaGFuZ2VkRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnaW5hdGlvbkNoYW5nZWRFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIEEgZHJhZyBoYXMgc3RhcnRlZCwgb3IgZHJhZ2dpbmcgd2FzIGFscmVhZHkgc3RhcnRlZCBhbmQgdGhlIG1vdXNlIGhhcyByZS1lbnRlcmVkIHRoZSBncmlkIGhhdmluZyBwcmV2aW91c2x5IGxlZnQgdGhlIGdyaWQuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgcm93RHJhZ0VudGVyOiBFdmVudEVtaXR0ZXI8Um93RHJhZ0V2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPFJvd0RyYWdFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIFRoZSBtb3VzZSBoYXMgbW92ZWQgd2hpbGUgZHJhZ2dpbmcuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgcm93RHJhZ01vdmU6IEV2ZW50RW1pdHRlcjxSb3dEcmFnRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Um93RHJhZ0V2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogVGhlIG1vdXNlIGhhcyBsZWZ0IHRoZSBncmlkIHdoaWxlIGRyYWdnaW5nLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0RyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPFJvd0RyYWdFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxSb3dEcmFnRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBUaGUgZHJhZyBoYXMgZmluaXNoZWQgb3ZlciB0aGUgZ3JpZC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dEcmFnRW5kOiBFdmVudEVtaXR0ZXI8Um93RHJhZ0V2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPFJvd0RyYWdFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIEEgcm93IGdyb3VwIGNvbHVtbiB3YXMgYWRkZWQgb3IgcmVtb3ZlZC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5Sb3dHcm91cENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxDb2x1bW5Sb3dHcm91cENoYW5nZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDb2x1bW5Sb3dHcm91cENoYW5nZWRFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIEEgcm93IGdyb3VwIHdhcyBvcGVuZWQgb3IgY2xvc2VkLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0dyb3VwT3BlbmVkOiBFdmVudEVtaXR0ZXI8Um93R3JvdXBPcGVuZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxSb3dHcm91cE9wZW5lZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogRmlyZWQgd2hlbiBjYWxsaW5nIGVpdGhlciBvZiB0aGUgQVBJIG1ldGhvZHMgYGV4cGFuZEFsbCgpYCBvciBgY29sbGFwc2VBbGwoKWAuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgZXhwYW5kT3JDb2xsYXBzZUFsbDogRXZlbnRFbWl0dGVyPEV4cGFuZENvbGxhcHNlQWxsRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXhwYW5kQ29sbGFwc2VBbGxFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIFRoZSBjbGllbnQgaGFzIHNldCBuZXcgcGlubmVkIHJvdyBkYXRhIGludG8gdGhlIGdyaWQuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgcGlubmVkUm93RGF0YUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxQaW5uZWRSb3dEYXRhQ2hhbmdlZEV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPFBpbm5lZFJvd0RhdGFDaGFuZ2VkRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBAZGVwcmVjYXRlZCBObyBsb25nZXIgZmlyZWQsIHVzZSBvblJvd0RhdGFVcGRhdGVkIGluc3RlYWRcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0RhdGFDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Um93RGF0YUNoYW5nZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxSb3dEYXRhQ2hhbmdlZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogVGhlIGNsaWVudCBoYXMgdXBkYXRlZCBkYXRhIGZvciB0aGUgZ3JpZCBieSBlaXRoZXIgYSkgc2V0dGluZyBuZXcgUm93IERhdGEgb3IgYikgQXBwbHlpbmcgYSBSb3cgVHJhbnNhY3Rpb24uICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgcm93RGF0YVVwZGF0ZWQ6IEV2ZW50RW1pdHRlcjxSb3dEYXRhVXBkYXRlZEV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPFJvd0RhdGFVcGRhdGVkRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBBc3luYyB0cmFuc2FjdGlvbnMgaGF2ZSBiZWVuIGFwcGxpZWQuIENvbnRhaW5zIGEgbGlzdCBvZiBhbGwgdHJhbnNhY3Rpb24gcmVzdWx0cy4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBhc3luY1RyYW5zYWN0aW9uc0ZsdXNoZWQ6IEV2ZW50RW1pdHRlcjxBc3luY1RyYW5zYWN0aW9uc0ZsdXNoZWQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXN5bmNUcmFuc2FjdGlvbnNGbHVzaGVkPFREYXRhPj4oKTtcbiAgICAvKiogQ2VsbCBpcyBjbGlja2VkLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIGNlbGxDbGlja2VkOiBFdmVudEVtaXR0ZXI8Q2VsbENsaWNrZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsQ2xpY2tlZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogQ2VsbCBpcyBkb3VibGUgY2xpY2tlZC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsRG91YmxlQ2xpY2tlZDogRXZlbnRFbWl0dGVyPENlbGxEb3VibGVDbGlja2VkRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2VsbERvdWJsZUNsaWNrZWRFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIENlbGwgaXMgZm9jdXNlZC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsRm9jdXNlZDogRXZlbnRFbWl0dGVyPENlbGxGb2N1c2VkRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2VsbEZvY3VzZWRFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIE1vdXNlIGVudGVyZWQgY2VsbC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsTW91c2VPdmVyOiBFdmVudEVtaXR0ZXI8Q2VsbE1vdXNlT3ZlckV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxNb3VzZU92ZXJFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIE1vdXNlIGxlZnQgY2VsbC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsTW91c2VPdXQ6IEV2ZW50RW1pdHRlcjxDZWxsTW91c2VPdXRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsTW91c2VPdXRFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIE1vdXNlIGRvd24gb24gY2VsbC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsTW91c2VEb3duOiBFdmVudEVtaXR0ZXI8Q2VsbE1vdXNlRG93bkV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxNb3VzZURvd25FdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIFJvdyBpcyBjbGlja2VkLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0NsaWNrZWQ6IEV2ZW50RW1pdHRlcjxSb3dDbGlja2VkRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Um93Q2xpY2tlZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogUm93IGlzIGRvdWJsZSBjbGlja2VkLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0RvdWJsZUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxSb3dEb3VibGVDbGlja2VkRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Um93RG91YmxlQ2xpY2tlZEV2ZW50PFREYXRhPj4oKTtcbiAgICAvKiogUm93IGlzIHNlbGVjdGVkIG9yIGRlc2VsZWN0ZWQuIFRoZSBldmVudCBjb250YWlucyB0aGUgbm9kZSBpbiBxdWVzdGlvbiwgc28gY2FsbCB0aGUgbm9kZSdzIGBpc1NlbGVjdGVkKClgIG1ldGhvZCB0byBzZWUgaWYgaXQgd2FzIGp1c3Qgc2VsZWN0ZWQgb3IgZGVzZWxlY3RlZC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dTZWxlY3RlZDogRXZlbnRFbWl0dGVyPFJvd1NlbGVjdGVkRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Um93U2VsZWN0ZWRFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIFJvdyBzZWxlY3Rpb24gaXMgY2hhbmdlZC4gVXNlIHRoZSBncmlkIEFQSSBgZ2V0U2VsZWN0ZWROb2RlcygpYCBvciBgZ2V0U2VsZWN0ZWRSb3dzKClgIHRvIGdldCB0aGUgbmV3IGxpc3Qgb2Ygc2VsZWN0ZWQgbm9kZXMgLyByb3cgZGF0YS4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBzZWxlY3Rpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8U2VsZWN0aW9uQ2hhbmdlZEV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdGlvbkNoYW5nZWRFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIENlbGwgaXMgcmlnaHQgY2xpY2tlZC4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsQ29udGV4dE1lbnU6IEV2ZW50RW1pdHRlcjxDZWxsQ29udGV4dE1lbnVFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsQ29udGV4dE1lbnVFdmVudDxURGF0YT4+KCk7XG4gICAgLyoqIEEgY2hhbmdlIHRvIHJhbmdlIHNlbGVjdGlvbiBoYXMgb2NjdXJyZWQuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgcmFuZ2VTZWxlY3Rpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8UmFuZ2VTZWxlY3Rpb25DaGFuZ2VkRXZlbnQ8VERhdGE+PiA9IG5ldyBFdmVudEVtaXR0ZXI8UmFuZ2VTZWxlY3Rpb25DaGFuZ2VkRXZlbnQ8VERhdGE+PigpO1xuICAgIC8qKiBTb3J0IGhhcyBjaGFuZ2VkLiBUaGUgZ3JpZCBhbHNvIGxpc3RlbnMgZm9yIHRoaXMgYW5kIHVwZGF0ZXMgdGhlIG1vZGVsLiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIHNvcnRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8U29ydENoYW5nZWRFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxTb3J0Q2hhbmdlZEV2ZW50PFREYXRhPj4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtblJvd0dyb3VwQ2hhbmdlUmVxdWVzdDogRXZlbnRFbWl0dGVyPENvbHVtblJvd0dyb3VwQ2hhbmdlUmVxdWVzdEV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENvbHVtblJvd0dyb3VwQ2hhbmdlUmVxdWVzdEV2ZW50PFREYXRhPj4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtblBpdm90Q2hhbmdlUmVxdWVzdDogRXZlbnRFbWl0dGVyPENvbHVtblBpdm90Q2hhbmdlUmVxdWVzdEV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENvbHVtblBpdm90Q2hhbmdlUmVxdWVzdEV2ZW50PFREYXRhPj4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtblZhbHVlQ2hhbmdlUmVxdWVzdDogRXZlbnRFbWl0dGVyPENvbHVtblZhbHVlQ2hhbmdlUmVxdWVzdEV2ZW50PFREYXRhPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENvbHVtblZhbHVlQ2hhbmdlUmVxdWVzdEV2ZW50PFREYXRhPj4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtbkFnZ0Z1bmNDaGFuZ2VSZXF1ZXN0OiBFdmVudEVtaXR0ZXI8Q29sdW1uQWdnRnVuY0NoYW5nZVJlcXVlc3RFdmVudDxURGF0YT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDb2x1bW5BZ2dGdW5jQ2hhbmdlUmVxdWVzdEV2ZW50PFREYXRhPj4oKTtcblxuXG4gICAgLy8gRW5hYmxlIHR5cGUgY29lcmNpb24gZm9yIGJvb2xlYW4gSW5wdXRzIHRvIHN1cHBvcnQgdXNlIGxpa2UgJ2VuYWJsZUNoYXJ0cycgaW5zdGVhZCBvZiBmb3JjaW5nICdbZW5hYmxlQ2hhcnRzXT1cInRydWVcIicgXG4gICAgLy8gaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL3RlbXBsYXRlLXR5cGVjaGVjayNpbnB1dC1zZXR0ZXItY29lcmNpb24gXG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzTWFrZUNvbHVtblZpc2libGVBZnRlclVuR3JvdXA6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzUm93Q2xpY2tTZWxlY3Rpb246IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzQ2VsbFNlbGVjdGlvbjogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NDZWxsRm9jdXM6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzSG9yaXpvbnRhbFNjcm9sbDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYWx3YXlzU2hvd0hvcml6b250YWxTY3JvbGw6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Fsd2F5c1Nob3dWZXJ0aWNhbFNjcm9sbDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVidWc6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2VuYWJsZUJyb3dzZXJUb29sdGlwczogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZW5hYmxlQ2VsbEV4cHJlc3Npb25zOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hbmd1bGFyQ29tcGlsZVJvd3M6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2FuZ3VsYXJDb21waWxlRmlsdGVyczogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZ3JvdXBTdXBwcmVzc0F1dG9Db2x1bW46IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2dyb3VwU2VsZWN0c0NoaWxkcmVuOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ncm91cEluY2x1ZGVGb290ZXI6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2dyb3VwSW5jbHVkZVRvdGFsRm9vdGVyOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ncm91cFVzZUVudGlyZVJvdzogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZ3JvdXBTdXBwcmVzc0JsYW5rSGVhZGVyOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc01lbnVIaWRlOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc1Jvd0Rlc2VsZWN0aW9uOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV91blNvcnRJY29uOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc011bHRpU29ydDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYWx3YXlzTXVsdGlTb3J0OiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaW5nbGVDbGlja0VkaXQ6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzTG9hZGluZ092ZXJsYXk6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzTm9Sb3dzT3ZlcmxheTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NBdXRvU2l6ZTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2tpcEhlYWRlck9uQXV0b1NpemU6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzUGFyZW50c0luUm93Tm9kZXM6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzQ29sdW1uTW92ZUFuaW1hdGlvbjogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NNb3ZhYmxlQ29sdW1uczogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NGaWVsZERvdE5vdGF0aW9uOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9lbmFibGVSYW5nZVNlbGVjdGlvbjogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZW5hYmxlUmFuZ2VIYW5kbGU6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2VuYWJsZUZpbGxIYW5kbGU6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzQ2xlYXJPbkZpbGxSZWR1Y3Rpb246IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbHRhU29ydDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NUb3VjaDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NBc3luY0V2ZW50czogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYWxsb3dDb250ZXh0TWVudVdpdGhDb250cm9sS2V5OiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc0NvbnRleHRNZW51OiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZW1lbWJlckdyb3VwU3RhdGVXaGVuTmV3RGF0YTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZW5hYmxlQ2VsbENoYW5nZUZsYXNoOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc0RyYWdMZWF2ZUhpZGVzQ29sdW1uczogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NSb3dHcm91cEhpZGVzQ29sdW1uczogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NNaWRkbGVDbGlja1Njcm9sbHM6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzUHJldmVudERlZmF1bHRPbk1vdXNlV2hlZWw6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzQ29weVJvd3NUb0NsaXBib2FyZDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29weUhlYWRlcnNUb0NsaXBib2FyZDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29weUdyb3VwSGVhZGVyc1RvQ2xpcGJvYXJkOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9waXZvdE1vZGU6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzQWdnRnVuY0luSGVhZGVyOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc0NvbHVtblZpcnR1YWxpc2F0aW9uOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc0FnZ0F0Um9vdExldmVsOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc0ZvY3VzQWZ0ZXJSZWZyZXNoOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9mdW5jdGlvbnNQYXNzaXZlOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9mdW5jdGlvbnNSZWFkT25seTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYW5pbWF0ZVJvd3M6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2dyb3VwU2VsZWN0c0ZpbHRlcmVkOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ncm91cFJlbW92ZVNpbmdsZUNoaWxkcmVuOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ncm91cFJlbW92ZUxvd2VzdFNpbmdsZUNoaWxkcmVuOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9lbmFibGVSdGw6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzQ2xpY2tFZGl0OiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yb3dEcmFnRW50aXJlUm93OiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yb3dEcmFnTWFuYWdlZDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NSb3dEcmFnOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc01vdmVXaGVuUm93RHJhZ2dpbmc6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Jvd0RyYWdNdWx0aVJvdzogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZW5hYmxlR3JvdXBFZGl0OiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9lbWJlZEZ1bGxXaWR0aFJvd3M6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlcHJlY2F0ZWRFbWJlZEZ1bGxXaWR0aFJvd3M6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzUGFnaW5hdGlvblBhbmVsOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ncm91cEhpZGVPcGVuUGFyZW50czogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZ3JvdXBNdWx0aUF1dG9Db2x1bW46IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BhZ2luYXRpb246IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0b3BFZGl0aW5nV2hlbkdyaWRMb3Nlc0ZvY3VzOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wYWdpbmF0aW9uQXV0b1BhZ2VTaXplOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc1Njcm9sbE9uTmV3RGF0YTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NTY3JvbGxXaGVuUG9wdXBzQXJlT3BlbjogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcHVyZ2VDbG9zZWRSb3dOb2RlczogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY2FjaGVRdWlja0ZpbHRlcjogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsdGFSb3dEYXRhTW9kZTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZW5zdXJlRG9tT3JkZXI6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2FjY2VudGVkU29ydDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NDaGFuZ2VEZXRlY3Rpb246IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3ZhbHVlQ2FjaGU6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3ZhbHVlQ2FjaGVOZXZlckV4cGlyZXM6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2FnZ3JlZ2F0ZU9ubHlDaGFuZ2VkQ29sdW1uczogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NBbmltYXRpb25GcmFtZTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NFeGNlbEV4cG9ydDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NDc3ZFeHBvcnQ6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3RyZWVEYXRhOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9tYXN0ZXJEZXRhaWw6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzTXVsdGlSYW5nZVNlbGVjdGlvbjogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZW50ZXJNb3Zlc0Rvd25BZnRlckVkaXQ6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2VudGVyTW92ZXNEb3duOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc1Byb3BlcnR5TmFtZXNDaGVjazogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcm93TXVsdGlTZWxlY3RXaXRoQ2xpY2s6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzRW50ZXJwcmlzZVJlc2V0T25OZXdDb2x1bW5zOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc1Jvd0hvdmVySGlnaGxpZ2h0OiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc1Jvd1RyYW5zZm9ybTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NDbGlwYm9hcmRQYXN0ZTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NMYXN0RW1wdHlMaW5lT25QYXN0ZTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NTZXRDb2x1bW5TdGF0ZUV2ZW50czogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NDb2x1bW5TdGF0ZUV2ZW50czogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZW5hYmxlQ2hhcnRzOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9lbmFibGVDaGFydFRvb2xQYW5lbHNCdXR0b246IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbHRhQ29sdW1uTW9kZTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NNYWludGFpblVuc29ydGVkT3JkZXI6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2VuYWJsZUNlbGxUZXh0U2VsZWN0aW9uOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc0Jyb3dzZXJSZXNpemVPYnNlcnZlcjogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NNYXhSZW5kZXJlZFJvd1Jlc3RyaWN0aW9uOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9leGNsdWRlQ2hpbGRyZW5XaGVuVHJlZURhdGFGaWx0ZXJpbmc6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Rvb2x0aXBNb3VzZVRyYWNrOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9rZWVwRGV0YWlsUm93czogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcGFnaW5hdGVDaGlsZFJvd3M6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3ByZXZlbnREZWZhdWx0T25Db250ZXh0TWVudTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdW5kb1JlZG9DZWxsRWRpdGluZzogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYWxsb3dEcmFnRnJvbUNvbHVtbnNUb29sUGFuZWw6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ltbXV0YWJsZURhdGE6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ltbXV0YWJsZUNvbHVtbnM6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Bpdm90U3VwcHJlc3NBdXRvQ29sdW1uOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc0V4cGFuZGFibGVQaXZvdEdyb3VwczogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYXBwbHlDb2x1bW5EZWZPcmRlcjogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVib3VuY2VWZXJ0aWNhbFNjcm9sbGJhcjogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGV0YWlsUm93QXV0b0hlaWdodDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2VydmVyU2lkZUZpbHRlcmluZ0Fsd2F5c1Jlc2V0czogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2VydmVyU2lkZVNvcnRpbmdBbHdheXNSZXNldHM6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NlcnZlclNpZGVTb3J0QWxsTGV2ZWxzOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zZXJ2ZXJTaWRlRmlsdGVyQWxsTGV2ZWxzOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zZXJ2ZXJTaWRlU29ydE9uU2VydmVyOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zZXJ2ZXJTaWRlRmlsdGVyT25TZXJ2ZXI6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzQWdnRmlsdGVyZWRPbmx5OiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaG93T3BlbmVkR3JvdXA6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzQ2xpcGJvYXJkQXBpOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc01vZGVsVXBkYXRlQWZ0ZXJVcGRhdGVUcmFuc2FjdGlvbjogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3RvcEVkaXRpbmdXaGVuQ2VsbHNMb3NlRm9jdXM6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21haW50YWluQ29sdW1uT3JkZXI6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2dyb3VwTWFpbnRhaW5PcmRlcjogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29sdW1uSG92ZXJIaWdobGlnaHQ6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlYWN0VWk6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzUmVhY3RVaTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVhZE9ubHlFZGl0OiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc1Jvd1ZpcnR1YWxpc2F0aW9uOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9lbmFibGVDZWxsRWRpdGluZ09uQmFja3NwYWNlOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXNldFJvd0RhdGFPblVwZGF0ZTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVtb3ZlUGl2b3RIZWFkZXJSb3dXaGVuU2luZ2xlVmFsdWVDb2x1bW46IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzQ29weVNpbmdsZUNlbGxSYW5nZXM6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2dyb3VwUm93c1N0aWNreTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2VydmVyU2lkZUluZmluaXRlU2Nyb2xsOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yb3dHcm91cFBhbmVsU3VwcHJlc3NTb3J0OiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIC8vIEBFTkRAXG59XG5cbiJdfQ==