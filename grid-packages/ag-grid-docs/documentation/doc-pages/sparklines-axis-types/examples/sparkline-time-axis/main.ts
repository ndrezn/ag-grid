import { AreaSparklineOptions, GridApi, createGrid, GridOptions } from '@ag-grid-community/core';
import { getData } from "./data";


const gridOptions: GridOptions = {
  columnDefs: [
    { field: 'symbol', maxWidth: 110 },
    { field: 'name', minWidth: 250 },
    {
      field: 'change',
      cellRenderer: 'agSparklineCellRenderer',
      cellRendererParams: {
        sparklineOptions: {
          type: 'area',
          axis: {
            // set axis type to 'time'
            type: 'time',
          },
          marker: {
            size: 3,
          },
        } as AreaSparklineOptions,
      },
    },
    { field: 'volume', type: 'numericColumn', maxWidth: 140 },
  ],
  defaultColDef: {
    flex: 1,
    minWidth: 100,
  },
  rowData: getData(),
  rowHeight: 50,
}

// setup the grid
var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi = createGrid(gridDiv, gridOptions);
