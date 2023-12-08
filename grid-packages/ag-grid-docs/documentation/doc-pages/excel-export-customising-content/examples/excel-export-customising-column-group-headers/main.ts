import {
  ExcelExportParams,
  GridApi,
  createGrid,
  GridOptions,
  ProcessCellForExportParams,
  ProcessGroupHeaderForExportParams,
  ProcessHeaderForExportParams,
  ProcessRowGroupForExportParams,
} from "@ag-grid-community/core";

const gridOptions: GridOptions<IOlympicData> = {
  columnDefs: [
    {
      headerName: 'Athlete details',
      children: [
        { field: "athlete", minWidth: 200 },
        { field: "country", minWidth: 150 },
        { field: "sport", minWidth: 150 },
      ]
    },
    {
      headerName: 'Medal results',
      children: [
        { field: "gold" },
        { field: "silver" },
        { field: "bronze" }
      ]
    }
  ],

  defaultColDef: {
    filter: true,
    minWidth: 100,
    flex: 1,
  },

  popupParent: document.body,
}

const getParams: () => ExcelExportParams = () => ({
  processHeaderCallback(params: ProcessHeaderForExportParams): string {
    return `header: ${params.api.getDisplayNameForColumn(params.column, null)}`
  },
  processGroupHeaderCallback(params: ProcessGroupHeaderForExportParams): string {
    return `group header: ${params.api.getDisplayNameForColumnGroup(params.columnGroup, null)}`
  }
})

function onBtExport() {
  gridApi!.exportDataAsExcel(getParams())
}

// setup the grid
const gridDiv = document.querySelector<HTMLElement>("#myGrid")!
const gridApi: GridApi<IOlympicData> = createGrid(gridDiv, gridOptions);

fetch("https://www.ag-grid.com/example-assets/small-olympic-winners.json")
  .then(response => response.json())
  .then(data =>
    gridApi.setGridOption('rowData',
      data.filter((rec: any) => rec.country != null)
    )
  )
