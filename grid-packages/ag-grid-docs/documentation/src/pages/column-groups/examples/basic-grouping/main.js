var columnDefs = [
    {
        headerName: 'Athlete Details',
        children: [
            { headerName: 'Athlete', field: 'athlete', width: 180, filter: 'agTextColumnFilter' },
            { headerName: 'Age', field: 'age', width: 90, filter: 'agNumberColumnFilter' },
            { headerName: 'Country', field: 'country', width: 140 }
        ]
    },
    {
        headerName: 'Sports Results',
        children: [
            { headerName: 'Sport', field: 'sport', width: 140 },
            { headerName: 'Total', columnGroupShow: 'closed', field: 'total', width: 100, filter: 'agNumberColumnFilter' },
            { headerName: 'Gold', columnGroupShow: 'open', field: 'gold', width: 100, filter: 'agNumberColumnFilter' },
            { headerName: 'Silver', columnGroupShow: 'open', field: 'silver', width: 100, filter: 'agNumberColumnFilter' },
            { headerName: 'Bronze', columnGroupShow: 'open', field: 'bronze', width: 100, filter: 'agNumberColumnFilter' }
        ]
    }
];

var gridOptions = {
    defaultColDef: {
        sortable: true,
        resizable: true,
        filter: true
    },
    debug: true,
    columnDefs: columnDefs,
    rowData: null
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    agGrid.simpleHttpRequest({ url: 'https://www.ag-grid.com/example-assets/olympic-winners.json' })
        .then(function(data) {
            gridOptions.api.setRowData(data);
        });
});
