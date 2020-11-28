$('#li-dashboard').click(function () {
    navigation("DASHBOARD")
});


$('#li-manage-customers').click(function () {
    navigation("MANAGE_CUSTOMERS")
});


$('#li-manage-items').click(function () {
    navigation("MANGE_ITEMS")
});


$('#li-place-orders').click(function () {
    navigation("PLACE_ORDER")
});


$('#li-search-orders').click(function () {
    navigation("SEARCH_ORDER")
});


function navigation(pageName) {
    $('.nav-item').children().removeClass('active');
    $('.content-wrapper').addClass('d-none');
    switch (pageName) {
        case "DASHBOARD":

            $('#dashboard').removeClass('d-none');
            $('#li-dashboard').children().addClass('active');
            break;
        case "MANAGE_CUSTOMERS":

            $('#manage-customer').removeClass('d-none');
            $('#li-manage-customers').children().addClass('active');
            break;
        case "MANGE_ITEMS":

            $('#manage-items').removeClass('d-none');
            $('#li-manage-items').children().addClass('active');
            break;
        case "PLACE_ORDER":

            $('#place-order').removeClass('d-none');
            $('#li-place-orders').children().addClass('active');
            break;
        case "SEARCH_ORDER":

            $('#search-order').removeClass('d-none');
            $('#li-search-orders').children().addClass('active');
            break;
    }
}















