import {
  GridApi,
  createGrid,
  CsvCell,
  CsvExportParams,
  ExcelCell,
  ExcelRow,
  ExcelExportParams,
  GridOptions,
  IDetailCellRendererParams,
  ProcessRowGroupForExportParams,
} from '@ag-grid-community/core';

var getRows = (params: ProcessRowGroupForExportParams) => {
  const rows = [{
    outlineLevel: 1,
    cells: [
      cell(''),
      cell('Call Id', 'header'),
      cell('Direction', 'header'),
      cell('Number', 'header'),
      cell('Duration', 'header'),
      cell('Switch Code', 'header'),
    ]
  }].concat(
    ...params.node.data.callRecords.map((record: any) => [{
        outlineLevel: 1,
        cells: [
          cell(''),
          cell(record.callId, 'body'),
          cell(record.direction, 'body'),
          cell(record.number, 'body'),
          cell(record.duration, 'body'),
          cell(record.switchCode, 'body'),
        ]
      }])
  )
  return rows;
}

var defaultCsvExportParams: CsvExportParams = {
  getCustomContentBelowRow: (params) => {
    const rows = getRows(params);

    return rows.map(row => row.cells) as CsvCell[][];
  }
}
var defaultExcelExportParams: ExcelExportParams = {
  getCustomContentBelowRow: (params) => getRows(params) as ExcelRow[],
  columnWidth: 120,
  fileName: 'ag-grid.xlsx'
}

const gridOptions: GridOptions<IAccount> = {
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
  masterDetail: true,
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
      },
    },
    getDetailRowData: (params) => {
      params.successCallback(params.data.callRecords)
    },
  } as IDetailCellRendererParams<IAccount, ICallRecord>,
  defaultCsvExportParams: defaultCsvExportParams,
  defaultExcelExportParams: defaultExcelExportParams,
  excelStyles: [
    {
      id: 'header',
      interior: {
        color: '#aaaaaa',
        pattern: 'Solid',
      },
    },
    {
      id: 'body',
      interior: {
        color: '#dddddd',
        pattern: 'Solid',
      },
    },
  ],
}

function cell(text: string, styleId?: string): ExcelCell {
  return {
    styleId: styleId,
    data: {
      type: /^\d+$/.test(text) ? 'Number' : 'String',
      value: String(text),
    },
  };
}

function onBtExport() {
  gridApi!.exportDataAsExcel()
}

// setup the grid
var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi<IAccount> = createGrid(gridDiv, gridOptions);

fetch('https://www.ag-grid.com/example-assets/master-detail-data.json')
  .then(response => response.json())
  .then((data: IAccount[]) => {
    gridApi.setGridOption('rowData', data)
  })
