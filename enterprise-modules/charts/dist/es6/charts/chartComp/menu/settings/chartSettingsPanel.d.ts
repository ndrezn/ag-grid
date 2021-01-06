import { Component } from "@ag-grid-community/core";
import { ChartController } from "../../chartController";
export declare class ChartSettingsPanel extends Component {
    static TEMPLATE: string;
    private readonly eMiniChartsContainer;
    private readonly eNavBar;
    private readonly eCardSelector;
    private readonly ePrevBtn;
    private readonly eNextBtn;
    private miniCharts;
    private cardItems;
    private readonly chartController;
    private activePaletteIndex;
    private palettes;
    private themes;
    private isAnimating;
    constructor(chartController: ChartController);
    private postConstruct;
    private resetPalettes;
    private addCardLink;
    private getPrev;
    private prev;
    private getNext;
    private setActivePalette;
    private destroyMiniCharts;
    protected destroy(): void;
}
