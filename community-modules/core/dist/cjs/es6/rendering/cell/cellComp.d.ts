// Type definitions for @ag-grid-community/core v28.2.0
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Beans } from "./../beans";
import { Component } from "../../widgets/component";
import { ICellEditorComp } from "../../interfaces/iCellEditor";
import { ICellRendererComp } from "./../cellRenderers/iCellRenderer";
import { RowCtrl } from "./../row/rowCtrl";
import { TooltipParentComp } from "../../widgets/customTooltipFeature";
import { CellCtrl } from "./cellCtrl";
export declare class CellComp extends Component implements TooltipParentComp {
    private eCellWrapper;
    private eCellValue;
    private beans;
    private column;
    private rowNode;
    private eRow;
    private includeSelection;
    private includeRowDrag;
    private includeDndSource;
    private forceWrapper;
    private checkboxSelectionComp;
    private dndSourceComp;
    private rowDraggingComp;
    private hideEditorPopup;
    private cellEditorPopupWrapper;
    private cellEditor;
    private cellEditorGui;
    private cellRenderer;
    private cellRendererGui;
    private cellRendererClass;
    private rowCtrl;
    private cellCtrl;
    private firstRender;
    private rendererVersion;
    private editorVersion;
    constructor(beans: Beans, cellCtrl: CellCtrl, printLayout: boolean, eRow: HTMLElement, editingRow: boolean);
    private getParentOfValue;
    private setRenderDetails;
    private setEditDetails;
    private removeControls;
    private refreshWrapper;
    private addControls;
    private createCellEditorInstance;
    private insertValueWithoutCellRenderer;
    private destroyEditorAndRenderer;
    private destroyRenderer;
    private destroyEditor;
    private refreshCellRenderer;
    private createCellRendererInstance;
    getCtrl(): CellCtrl;
    getRowCtrl(): RowCtrl | null;
    getCellRenderer(): ICellRendererComp | null | undefined;
    getCellEditor(): ICellEditorComp | null | undefined;
    private afterCellRendererCreated;
    private afterCellEditorCreated;
    private addInCellEditor;
    private addPopupCellEditor;
    detach(): void;
    destroy(): void;
    private clearParentOfValue;
}
