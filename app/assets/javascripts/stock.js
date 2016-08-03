var init_stock_lookup;

init_stock_lookup = function () {
    $('#stock-lookup-form').on('ajax:success', function (event, data, status) {
        $('#stock-lookup').replaceWith(data);
        init_stock_lookup();
    });

    $('#stock-lookup-form').on('ajax:error', function (event, xhr, status, error) {
        $('#stock-lookup-results').replaceWith(' ');
        $('#stock-lookup-erros').replaceWith('Cotação não encontrada!')
    });
};


$(document).ready(function () {
   init_stock_lookup();
});