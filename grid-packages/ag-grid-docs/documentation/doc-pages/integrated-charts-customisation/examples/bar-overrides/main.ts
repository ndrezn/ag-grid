import {createGrid, FirstDataRenderedEvent, GridApi, GridOptions, GridReadyEvent} from '@ag-grid-community/core';
import {getData} from "./data";

const gridOptions: GridOptions = {
  columnDefs: [
    { field: 'country', width: 150, chartDataType: 'category' },
    { field: 'gold', chartDataType: 'series' },
    { field: 'silver', chartDataType: 'series' },
    { field: 'bronze', chartDataType: 'series' },
  ],
  defaultColDef: {
    flex: 1,
    minWidth: 100,
  },
  popupParent: document.body,
  enableRangeSelection: true,
  enableCharts: true,
  chartThemeOverrides: {
    bar: {
      series: {
        fillOpacity: 0.7,
        strokeWidth: 2,
        strokeOpacity: 0.7,
        label: {
          enabled: true,
          fontStyle: 'italic',
          fontWeight: 'bold',
          fontSize: 12,
          fontFamily: 'Arial, sans-serif',
          color: 'white'
        },
      },
    },
  },
  onGridReady : (params: GridReadyEvent) => {
    getData().then(rowData => params.api.setGridOption('rowData', rowData));
  },
  onFirstDataRendered,
};



function onFirstDataRendered(params: FirstDataRenderedEvent) {
  params.api.createRangeChart({
    cellRange: {
      rowStartIndex: 6,
      rowEndIndex: 7,
      columns: ['country', 'gold', 'silver', 'bronze'],
    },
    chartType: 'groupedBar',
  });
}

// setup the grid
const gridDiv = document.querySelector<HTMLElement>('#myGrid')!
const gridApi: GridApi = createGrid(gridDiv, gridOptions);
