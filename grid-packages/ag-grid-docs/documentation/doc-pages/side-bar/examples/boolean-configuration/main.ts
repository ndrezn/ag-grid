import { GridApi, createGrid, GridOptions } from '@ag-grid-community/core';

const gridOptions: GridOptions<IOlympicData> = {
  columnDefs: [
    { field: 'athlete', filter: 'agTextColumnFilter', minWidth: 200 },
    { field: 'age' },
    { field: 'country', minWidth: 180 },
    { field: 'year' },
    { field: 'date', minWidth: 150 },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ],
  defaultColDef: {
    flex: 1,
    minWidth: 100,
    // allow every column to be aggregated
    enableValue: true,
    // allow every column to be grouped
    enableRowGroup: true,
    // allow every column to be pivoted
    enablePivot: true,
    filter: true,
  },
  autoGroupColumnDef: {
    minWidth: 200,
  },
  sideBar: true,
}

// setup the grid
var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi<IOlympicData> = createGrid(gridDiv, gridOptions);

fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  .then(response => response.json())
  .then((data: IOlympicData[]) => gridApi.setGridOption('rowData', data))
