import { GridApi, createGrid, ColGroupDef, GridOptions } from '@ag-grid-community/core';

const columnDefs: ColGroupDef[] = [
  {
    headerName: 'Everything Resizes',
    children: [
      {
        field: 'athlete',
        headerClass: 'resizable-header',
      },
      { field: 'age', headerClass: 'resizable-header' },
      {
        field: 'country',
        headerClass: 'resizable-header',
      },
    ],
  },
  {
    headerName: 'Only Year Resizes',
    children: [
      { field: 'year', headerClass: 'resizable-header' },
      {
        field: 'date',
        resizable: false,
        headerClass: 'fixed-size-header',
      },
      {
        field: 'sport',
        resizable: false,
        headerClass: 'fixed-size-header',
      },
    ],
  },
  {
    headerName: 'Nothing Resizes',
    children: [
      {
        field: 'gold',
        resizable: false,
        headerClass: 'fixed-size-header',
      },
      {
        field: 'silver',
        resizable: false,
        headerClass: 'fixed-size-header',
      },
      {
        field: 'bronze',
        resizable: false,
        headerClass: 'fixed-size-header',
      },
      {
        field: 'total',
        resizable: false,
        headerClass: 'fixed-size-header',
      },
    ],
  },
]

const gridOptions: GridOptions<IOlympicData> = {
  defaultColDef: {
    width: 150,
  },
  columnDefs: columnDefs,
}

// setup the grid
const gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi<IOlympicData> = createGrid(gridDiv, gridOptions);


fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  .then(response => response.json())
  .then((data: IOlympicData[]) => gridApi.setGridOption('rowData', data))
