import { GridApi, createGrid, FirstDataRenderedEvent, GridOptions } from '@ag-grid-community/core';
import { DetailCellRenderer } from './detailCellRenderer_typescript'

const gridOptions: GridOptions<IAccount> = {
  masterDetail: true,
  detailCellRenderer: DetailCellRenderer,
  columnDefs: [
    // group cell renderer needed for expand / collapse icons
    { field: 'name', cellRenderer: 'agGroupCellRenderer' },
    { field: 'account' },
    { field: 'calls' },
    { field: 'minutes', valueFormatter: "x.toLocaleString() + 'm'" },
  ],
  defaultColDef: {
    flex: 1,
  },
  onFirstDataRendered: onFirstDataRendered,
}

function onFirstDataRendered(params: FirstDataRenderedEvent) {
  params.api.forEachNode(function (node) {
    node.setExpanded(node.id === '1')
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
