import { GridApi, createGrid, ColGroupDef, GridOptions } from '@ag-grid-community/core';

const columnDefs: ColGroupDef[] = [
  {
    headerName: 'Top Level Column Group',
    children: [
      {
        headerName: 'Group A',
        children: [
          { field: 'athlete', minWidth: 200 },
          { field: 'country', minWidth: 200 },
          { headerName: 'Group', valueGetter: 'data.country.charAt(0)' },
        ],
      },
      {
        headerName: 'Group B',
        children: [
          { field: 'sport', minWidth: 150 },
          { field: 'gold', hide: true },
          { field: 'silver', hide: true },
          { field: 'bronze', hide: true },
          { field: 'total', hide: true },
        ],
      },
    ],
  },
]

const gridOptions: GridOptions<IOlympicData> = {
  columnDefs: columnDefs,
  defaultColDef: {
    filter: true,
    minWidth: 100,
    flex: 1,
  },

  popupParent: document.body,
}

function getBoolean(id: string) {
  return !!(document.querySelector('#' + id) as HTMLInputElement).checked
}

function getParams() {
  return {
    allColumns: getBoolean('allColumns'),
  }
}

function onBtExport() {
  gridApi!.exportDataAsExcel(getParams())
}

// setup the grid
const gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi<IOlympicData> = createGrid(gridDiv, gridOptions);
fetch('https://www.ag-grid.com/example-assets/small-olympic-winners.json')
  .then(response => response.json())
  .then(data =>
    gridApi.setGridOption('rowData', data.filter((rec: any) => rec.country != null))
  )
