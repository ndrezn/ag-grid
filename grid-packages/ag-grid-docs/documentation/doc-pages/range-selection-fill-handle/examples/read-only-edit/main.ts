import { GridApi, createGrid, GridOptions, CellEditRequestEvent, GetRowIdParams } from '@ag-grid-community/core';

const gridOptions: GridOptions<IOlympicDataWithId> = {
  columnDefs: [
    { field: 'athlete', minWidth: 160 },
    { field: 'age' },
    { field: 'country', minWidth: 140 },
    { field: 'year' },
    { field: 'date', minWidth: 140 },
    { field: 'sport', minWidth: 160 },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ],
  defaultColDef: {
    flex: 1,
    minWidth: 100,
    editable: true,
    cellDataType: false,
  },
  getRowId: (params: GetRowIdParams) => params.data.id,
  enableRangeSelection: true,
  enableFillHandle: true,
  readOnlyEdit: true,
  onCellEditRequest: onCellEditRequest
}

let rowImmutableStore: any[];

function onCellEditRequest(event: CellEditRequestEvent) {
  const data = event.data;
  const field = event.colDef.field;
  const newValue = event.newValue;

  const oldItem = rowImmutableStore.find(row => row.id === data.id);

  if (!oldItem || !field) { return; }

  const newItem = {...oldItem };

  newItem[field] = newValue;

  console.log('onCellEditRequest, updating ' + field + ' to ' + newValue);

  rowImmutableStore = rowImmutableStore.map(oldItem => oldItem.id == newItem.id ? newItem : oldItem);
  gridApi!.setGridOption('rowData', rowImmutableStore);
}

// setup the grid
const gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi<IOlympicDataWithId> = createGrid(gridDiv, gridOptions);


fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  .then(response => response.json())
  .then((data: any[]) => {
    data.forEach((item, index) => item.id = index);
    rowImmutableStore = data;
    gridApi.setGridOption('rowData', rowImmutableStore);
  });
