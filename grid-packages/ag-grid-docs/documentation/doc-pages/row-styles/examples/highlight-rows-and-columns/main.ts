import { GridApi, createGrid, GridOptions } from '@ag-grid-community/core';

const gridOptions: GridOptions<IOlympicData> = {
  columnDefs: [
    {
      headerName: 'Participant',
      children: [{ field: 'athlete' }, { field: 'age' }],
    },
    {
      headerName: 'Details',
      children: [
        { field: 'country' },
        { field: 'year' },
        { field: 'date' },
        { field: 'sport' },
      ],
    },
  ],
  defaultColDef: {
    flex: 1,
  },
  columnHoverHighlight: true,
}

// setup the grid
var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi<IOlympicData> = createGrid(gridDiv, gridOptions);

fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  .then(response => response.json())
  .then((data: IOlympicData[]) => gridApi.setGridOption('rowData', data))
