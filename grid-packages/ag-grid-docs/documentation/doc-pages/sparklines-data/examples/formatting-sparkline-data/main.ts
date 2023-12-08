import { AreaSparklineOptions, GridApi, createGrid, GridOptions, ValueGetterParams } from '@ag-grid-community/core';
import { getData } from "./data";


const gridOptions: GridOptions = {
  columnDefs: [
    { field: 'symbol', maxWidth: 110 },
    { field: 'name', minWidth: 250 },
    {
      headerName: 'Rate of Change',
      cellRenderer: 'agSparklineCellRenderer',
      cellRendererParams: {
        sparklineOptions: {
          type: 'area',
        } as AreaSparklineOptions,
      },
      valueGetter: (params: ValueGetterParams) => {
        const formattedData: any = []
        const rateOfChange = params.data.rateOfChange
        const { x, y } = rateOfChange
        x.map((xVal: any, i: number) => formattedData.push([xVal, y[i]]))
        return formattedData
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
