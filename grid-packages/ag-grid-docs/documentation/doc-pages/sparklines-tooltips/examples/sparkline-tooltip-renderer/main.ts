import {
  GridApi,
  createGrid,
  GridOptions,
  LineSparklineOptions,
  TooltipRendererParams,
} from '@ag-grid-community/core';
import { getData } from "./data";


const gridOptions: GridOptions = {
  columnDefs: [
    { field: 'symbol', maxWidth: 120 },
    { field: 'name', minWidth: 250 },
    {
      field: 'change',
      cellRenderer: 'agSparklineCellRenderer',
      cellRendererParams: {
        sparklineOptions: {
          tooltip: {
            renderer: tooltipRenderer,
          },
        } as LineSparklineOptions,
      },
    },
    {
      field: 'volume',
      type: 'numericColumn',
      maxWidth: 140,
    },
  ],
  defaultColDef: {
    flex: 1,
    minWidth: 100,
  },
  rowData: getData(),
  rowHeight: 50,
}

function tooltipRenderer(params: TooltipRendererParams) {
  return {
    title: new Date(params.xValue).toLocaleDateString(),
    content: params.yValue.toFixed(1),
  }
}

// setup the grid
var gridDiv = document.querySelector<HTMLElement>('#myGrid')!;
const gridApi: GridApi = createGrid(gridDiv, gridOptions);
