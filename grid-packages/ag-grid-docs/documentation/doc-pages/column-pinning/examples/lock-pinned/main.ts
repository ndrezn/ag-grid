import { GridApi, createGrid, ColDef, GridOptions } from '@ag-grid-community/core';

const columnDefs: ColDef[] = [
  {
    headerName: 'Athlete (locked as pinned)',
    field: 'athlete',
    width: 240,
    pinned: 'left',
    lockPinned: true,
    cellClass: 'lock-pinned',
  },
  {
    headerName: 'Age (locked as not pinnable)',
    field: 'age',
    width: 260,
    lockPinned: true,
    cellClass: 'lock-pinned',
  },
  { field: 'country', width: 150 },
  { field: 'year', width: 90 },
  { field: 'date', width: 150 },
  { field: 'sport', width: 150 },
  { field: 'gold' },
  { field: 'silver' },
  { field: 'bronze' },
  { field: 'total' },
]

const gridOptions: GridOptions<IOlympicData> = {
  columnDefs: columnDefs,

}

// setup the grid
const gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi<IOlympicData> = createGrid(gridDiv, gridOptions);

fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  .then(response => response.json())
  .then((data: IOlympicData[]) => gridApi.setGridOption('rowData', data))
