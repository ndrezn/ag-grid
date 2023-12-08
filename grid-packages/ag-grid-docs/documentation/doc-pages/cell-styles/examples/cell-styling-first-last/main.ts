import {
  GridApi,
  createGrid,
  CellClassParams,
  CellClassRules,
  ColDef,
  GridOptions,
  ICellRendererParams,
  ValueParserParams,
} from '@ag-grid-community/core';

const columnDefs: ColDef[] = [
  { field: 'athlete' },
  {
    field: 'age',
    maxWidth: 90,
  },
  { field: 'country' },
  {
    field: 'gold'
  },
  {
    field: 'silver'
  },
  {
    field: 'bronze'
  },
]

const gridOptions: GridOptions<IOlympicData> = {
  columnDefs: columnDefs,
  defaultColDef: {
    flex: 1,
    minWidth: 150,
    editable: true,
  },
}

// setup the grid
const gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi<IOlympicData> = createGrid(gridDiv, gridOptions);

fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  .then(response => response.json())
  .then((data: IOlympicData[]) => gridApi.setGridOption('rowData', data))
