import { GridApi, createGrid, ColDef, GridOptions } from '@ag-grid-community/core';

const columnDefs: ColDef[] = [
  { field: 'athlete', minWidth: 170, checkboxSelection: true, headerCheckboxSelection: true },
  { field: 'age' },
  { field: 'country' },
  { field: 'year' },
  { field: 'date' },
  { field: 'sport' },
  { field: 'gold' },
  { field: 'silver' },
  { field: 'bronze' },
  { field: 'total' },
]

const gridOptions: GridOptions<IOlympicData> = {
  rowData: null,
  columnDefs: columnDefs,
  rowSelection: 'multiple',
  defaultColDef: {
    editable: true,
    filter: true,
  }
}

// setup the grid
var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi<IOlympicData> = createGrid(gridDiv, gridOptions);

fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  .then(response => response.json())
  .then((data: IOlympicData[]) => gridApi.setGridOption('rowData', data))

