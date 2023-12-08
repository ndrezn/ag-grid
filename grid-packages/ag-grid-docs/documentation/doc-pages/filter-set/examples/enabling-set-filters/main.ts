import { GridApi, createGrid, GridOptions } from '@ag-grid-community/core';

const gridOptions: GridOptions<IOlympicData> = {
  columnDefs: [
    // set filters
    { field: 'athlete', filter: true },
    { field: 'country', filter: 'agSetColumnFilter' },

    // number filters
    { field: 'gold', filter: 'agNumberColumnFilter' },
    { field: 'silver', filter: 'agNumberColumnFilter' },
    { field: 'bronze', filter: 'agNumberColumnFilter' },
  ],

  defaultColDef: {
    flex: 1,
    minWidth: 200,
    floatingFilter: true,
  },
}

// setup the grid
var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi<IOlympicData> = createGrid(gridDiv, gridOptions);

fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  .then(response => response.json())
  .then((data: IOlympicData[]) => gridApi.setGridOption('rowData', data))
