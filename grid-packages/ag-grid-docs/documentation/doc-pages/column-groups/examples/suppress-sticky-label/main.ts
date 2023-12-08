import { GridApi, createGrid, ColDef, ColGroupDef, GridOptions } from '@ag-grid-community/core';

const columnDefs: (ColDef | ColGroupDef)[] = [
  {
    headerName: 'Athlete Details',
    suppressStickyLabel: true,
    children: [
      { field: 'athlete', pinned: true, colId: 'athlete' },
      { field: 'country', colId: 'country' },
      { field: 'age', colId: 'age' }
    ],
  },
  {
    headerName: 'Sports Results',
    suppressStickyLabel: true,
    openByDefault: true,
    children: [
      { field: 'sport', colId: 'sport' },
      { field: 'gold', colId: 'gold', columnGroupShow: 'open' },
      { field: 'silver', colId: 'silver', columnGroupShow: 'open' },
      { field: 'bronze', colId: 'bronze', columnGroupShow: 'open' },
      { field: 'total', colId: 'total', columnGroupShow: 'closed' },
    ],
  },
]

const gridOptions: GridOptions<IOlympicData> = {
  defaultColDef: {
    width: 200,
  },
  columnDefs: columnDefs,
  rowData: null,
}

// setup the grid
const gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi<IOlympicData> = createGrid(gridDiv, gridOptions);

fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  .then(response => response.json())
  .then((data: IOlympicData[]) => gridApi.setGridOption('rowData', data))
