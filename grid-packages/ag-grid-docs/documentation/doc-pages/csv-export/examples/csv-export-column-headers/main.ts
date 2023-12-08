import { GridApi, createGrid, GridOptions, GridReadyEvent } from '@ag-grid-community/core';

const gridOptions: GridOptions = {
  defaultColDef: {
    editable: true,
    minWidth: 100,
    flex: 1,
  },

  suppressExcelExport: true,
  popupParent: document.body,

  columnDefs: [
    { headerName: 'Brand', children: [{ field: 'make' }, { field: 'model' }] },
    {
      headerName: 'Value',
      children: [{ field: 'price' }],
    },
  ],

  rowData: [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ],

  onGridReady: (params: GridReadyEvent) => {
    (document.getElementById('columnGroups') as HTMLInputElement).checked = true
  },
}

function getBoolean(id: string) {
  var field = document.querySelector('#' + id) as HTMLInputElement

  return !!field.checked
}

function getParams() {
  return {
    skipColumnGroupHeaders: getBoolean('columnGroups'),
    skipColumnHeaders: getBoolean('skipHeader'),
  }
}

function onBtnExport() {
  gridApi!.exportDataAsCsv(getParams())
}

function onBtnUpdate() {
  (document.querySelector('#csvResult') as any).value = gridApi!.getDataAsCsv(
    getParams()
  )
}

// setup the grid
var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi = createGrid(gridDiv, gridOptions);
