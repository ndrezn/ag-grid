import { GridApi, createGrid, CellKeyDownEvent, ColDef, GridOptions } from '@ag-grid-community/core';
import { KeyboardEvent } from 'react';

const columnDefs: ColDef[] = [
  { field: 'athlete', minWidth: 170 },
  { field: 'age' },
  { field: 'country' },
  { field: 'year' },
  { field: 'date' },
  { field: 'sport' },
  { field: 'gold' },
  { field: 'silver' },
  { field: 'bronze' },
  { field: 'total' },
]

const gridOptions: GridOptions<IOlympicData> = {
  rowData: null,
  columnDefs: columnDefs,
  defaultColDef: {
    flex: 1,
    minWidth: 100,
    filter: true,
  },
  onCellKeyDown: onCellKeyDown
}

function onCellKeyDown(e: CellKeyDownEvent) {
  console.log('onCellKeyDown', e);
  if (!e.event) { return; }

  const keyboardEvent = e.event as unknown as KeyboardEvent;
  const key = keyboardEvent.key;

  if (key.length) {
    console.log('Key Pressed = ' + key)
    if (key === 's') {
      var rowNode = e.node
      var newSelection = !rowNode.isSelected()
      console.log(
        'setting selection on node ' +
        rowNode.data.athlete +
        ' to ' +
        newSelection
      )
      rowNode.setSelected(newSelection)
    }
  }

}

// setup the grid
var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi<IOlympicData> = createGrid(gridDiv, gridOptions);

fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  .then(response => response.json())
  .then((data: IOlympicData[]) => gridApi.setGridOption('rowData', data))
