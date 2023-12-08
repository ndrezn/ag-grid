import {
  GridApi,
  createGrid,
  FirstDataRenderedEvent,
  GridOptions,
  GetRowIdParams,
  IDetailCellRendererParams,
} from '@ag-grid-community/core';

const gridOptions: GridOptions<IAccount> = {
  columnDefs: [
    // group cell renderer needed for expand / collapse icons
    { field: 'name', cellRenderer: 'agGroupCellRenderer' },
    { field: 'account' },
    { field: 'calls' },
    { field: 'minutes', valueFormatter: "x.toLocaleString() + 'm'" },
  ],
  masterDetail: true,
  detailRowHeight: 200,
  detailCellRendererParams: {
    detailGridOptions: {
      columnDefs: [
        { field: 'callId' },
        { field: 'direction' },
        { field: 'number', minWidth: 150 },
        { field: 'duration', valueFormatter: "x.toLocaleString() + 's'" },
        { field: 'switchCode', minWidth: 150 },
      ],
      defaultColDef: {
        flex: 1,
        editable: true,
      },
    },
    getDetailRowData: (params) => {
      params.successCallback(params.data.callRecords)
    },
  } as IDetailCellRendererParams<IAccount, ICallRecord>,
  getRowId: (params: GetRowIdParams) => {
    // use 'account' as the row ID
    return params.data.account
  },
  defaultColDef: {
    flex: 1,
    editable: true,
  },
  onFirstDataRendered: onFirstDataRendered,
}

function onFirstDataRendered(params: FirstDataRenderedEvent) {
  // expand the first two rows
  setTimeout(() => {
    params.api.forEachNode(function (node) {
      node.setExpanded(true)
    })
  }, 0)
}

function flashMilaSmithOnly() {
  // flash Mila Smith - we know her account is 177001 and we use the account for the row ID
  var detailGrid = gridApi!.getDetailGridInfo('detail_177001')
  if (detailGrid) {
    detailGrid.api!.flashCells()
  }
}

function flashAll() {
  gridApi!.forEachDetailGridInfo(function (detailGridApi) {
    detailGridApi.api!.flashCells()
  })
}

// setup the grid
var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi<IAccount> = createGrid(gridDiv, gridOptions);

fetch('https://www.ag-grid.com/example-assets/master-detail-data.json')
  .then(response => response.json())
  .then((data: IAccount[]) => {
    gridApi.setGridOption('rowData', data)
  })
