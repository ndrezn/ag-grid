import { createGrid, GridApi, GridOptions, CellValueChangedEvent } from '@ag-grid-community/core';

const gridOptions: GridOptions = {
    // Data to be displayed
    rowData: [
        { company: "RVSN USSR", country: "Kazakhstan", date: "1957-10-04", mission: "Sputnik-1", price: 9550000, successful: true },
        { company: "RVSN USSR", country: "Kazakhstan", date: "1957-11-03", mission: "Sputnik-2", price: 8990000, successful: true },
        { company: "US Navy", country: "USA", date: "1957-12-06", mission: "Vanguard TV3", price: 6860000, successful: false }
    ],
    // Columns to be displayed (Should match rowData properties)
    columnDefs: [
        {
            field: "mission",
            resizable: false,
            checkboxSelection: true
        },
        {
            field: "country"
        },
        {
            field: "successful",
            width: 130
        },
        {
            field: "date"
        },
        {
            field: "price",
            width: 130,
        },
        {
            field: "company"
        }
    ],
    // Configurations applied to all columns
    defaultColDef: {
        filter: true,
        editable: true,
    },
    // Grid Options & Callbacks
    pagination: true,
    rowClass: 'row',
    rowSelection: 'multiple'
}
  var gridDiv = document.querySelector<HTMLElement>('#myGrid')!;
  const gridApi: GridApi = createGrid(gridDiv, gridOptions);
  fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .then(response => response.json())
      .then((data: any) => gridApi.setGridOption('rowData', data))
