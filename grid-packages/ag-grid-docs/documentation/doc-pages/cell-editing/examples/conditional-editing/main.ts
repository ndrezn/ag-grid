import { GridApi, createGrid, GridOptions, EditableCallbackParams, CellClassParams } from '@ag-grid-community/core';

let editableYear = 2012;

function isCellEditable(params: EditableCallbackParams | CellClassParams) {
  return params.data.year === editableYear;
}

const gridOptions: GridOptions<IOlympicData> = {
  columnDefs: [
    { field: 'athlete', type: 'editableColumn' },
    { field: 'age', type: 'editableColumn' },
    { field: 'year' },
    { field: 'country' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ],
  columnTypes: {
    editableColumn: {
      editable: (params: EditableCallbackParams<IOlympicData>) => {
        return isCellEditable(params);
      },
      cellStyle: (params: CellClassParams<IOlympicData>) => {
        if (isCellEditable(params)) {
          return { backgroundColor: '#2244CC44' };
        }
      }
    }
  }
}

function setEditableYear(year: number) {
  editableYear = year;
  // Redraw to re-apply the new cell style
  gridApi!.redrawRows();
}

// setup the grid
const gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi<IOlympicData> = createGrid(gridDiv, gridOptions);


fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  .then(response => response.json())
  .then((data: IOlympicData[]) => gridApi.setGridOption('rowData', data))
