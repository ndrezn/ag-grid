import { BeanStub, ChartModel, ChartRef, ChartType, CreateCrossFilterChartParams, CreatePivotChartParams, CreateRangeChartParams, IChartService } from "@ag-grid-community/core";
export interface CrossFilteringContext {
    lastSelectedChartId: string;
}
export declare class ChartService extends BeanStub implements IChartService {
    private rangeController;
    private columnController;
    private environment;
    private activeCharts;
    private activeChartComps;
    private crossFilteringContext;
    getChartModels(): ChartModel[];
    createChartFromCurrentRange(chartType?: ChartType): ChartRef | undefined;
    createRangeChart(params: CreateRangeChartParams): ChartRef | undefined;
    createPivotChart(params: CreatePivotChartParams): ChartRef | undefined;
    createCrossFilterChart(params: CreateCrossFilterChartParams): ChartRef | undefined;
    private createChart;
    private createChartRef;
    private getSelectedRange;
    private destroyAllActiveCharts;
}
