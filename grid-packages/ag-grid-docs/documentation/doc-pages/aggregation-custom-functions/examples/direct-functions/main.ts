import { GridApi, createGrid, GridOptions, IAggFuncParams, ValueGetterParams } from '@ag-grid-community/core';

const gridOptions: GridOptions<IOlympicData> = {
    columnDefs: [
        { field: 'country', rowGroup: true, hide: true },
        { field: 'year', rowGroup: true, hide: true },
        {
            field: 'total',
            aggFunc: (params: IAggFuncParams) => {
                let sum = 0;
                params.values.forEach((value: number) => sum += value);
                return sum;
            }
        },
    ],
    defaultColDef: {
        flex: 1,
        minWidth: 100,
    },
    autoGroupColumnDef: {
        minWidth: 200,
    },
    sideBar: true,
}

// setup the grid
  var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
  const gridApi: GridApi<IOlympicData> = createGrid(gridDiv, gridOptions);

  fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then(response => response.json())
      .then((data: IOlympicData[]) => gridApi.setGridOption('rowData', data))
