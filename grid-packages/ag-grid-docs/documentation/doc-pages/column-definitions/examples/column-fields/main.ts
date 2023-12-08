import { GridApi, createGrid, GridOptions } from "@ag-grid-community/core";
import { getData } from './data';

const gridOptions: GridOptions = {
    // define grid columns
    columnDefs: [
        { field: 'name' },
        // Using dot notation to access nested property
        { field: 'medals.gold', headerName: 'Gold' },
        // Show default header name
        { field: 'person.age' },
    ],
    rowData: getData(),
};

// setup the grid
  var gridDiv = document.querySelector<HTMLElement>('#myGrid')!;
  const gridApi: GridApi = createGrid(gridDiv, gridOptions);

