import { GridApi, createGrid, GridOptions, ValueGetterParams } from '@ag-grid-community/core';

const gridOptions: GridOptions<IOlympicData> = {
  columnDefs: [
    { field: 'sport', rowGroup: true, hide: true },
    { field: 'country', rowGroup: true, hide: true },
    { field: 'gold', aggFunc: 'sum' },
    { field: 'silver', aggFunc: 'sum' },
    { field: 'bronze', aggFunc: 'sum' },
  ],
  defaultColDef: {
    flex: 1,
    minWidth: 150,
    filter: true,
    floatingFilter: true,
  },
  autoGroupColumnDef: {
    minWidth: 260,
    filter: 'agTextColumnFilter',
    filterValueGetter: (params: ValueGetterParams) => params.data.sport,
  },
}

function applyFilter() {
  gridApi!.setFilterModel({
    'ag-Grid-AutoColumn': {
      filterType: 'text',
      type: 'contains',
      filter: 'Skiing'
    },
  });
}

// setup the grid
var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi<IOlympicData> = createGrid(gridDiv, gridOptions);

fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  .then(response => response.json())
  .then((data: IOlympicData[]) => gridApi.setGridOption('rowData', data))
