$('#li-dashboard').click(function (){
    $('#manage-customer').addClass('d-none');
    $('#manage-items').addClass('d-none');
    $('#place-order').addClass('d-none');
    $('#search-order').addClass('d-none');
    $('#dashboard').removeClass('d-none');


    $('#li-dashboard').children().addClass('active');
    $('#li-manage-customers').children().removeClass('active');
    $('#li-search-orders').children().removeClass('active');
    $('#li-place-orders').children().removeClass('active');
    $('#li-manage-items').children().removeClass('active');


});


$('#li-manage-customers').click(function (){
    $('#dashboard').addClass('d-none');
    $('#manage-items').addClass('d-none');
    $('#place-order').addClass('d-none');
    $('#search-order').addClass('d-none');
    $('#manage-customer').removeClass('d-none');


    $('#li-dashboard').children().removeClass('active');
    $('#li-manage-items').children().removeClass('active');
    $('#li-place-orders').children().removeClass('active');
    $('#li-search-orders').children().removeClass('active');
    $('#li-manage-customers').children().addClass('active');

});


$('#li-manage-items').click(function (){
    $('#manage-customer').addClass('d-none');
    $('#dashboard').addClass('d-none');
    $('#place-order').addClass('d-none');
    $('#search-order').addClass('d-none');
    $('#manage-items').removeClass('d-none');

    $('#li-dashboard').children().removeClass('active');
    $('#li-manage-customers').children().removeClass('active');
    $('#li-search-orders').children().removeClass('active');
    $('#li-place-orders').children().removeClass('active');
    $('#li-manage-items').children().addClass('active');


});


$('#li-place-orders').click(function (){
    $('#manage-customer').addClass('d-none');
    $('#manage-items').addClass('d-none');
    $('#dashboard').addClass('d-none');
    $('#search-order').addClass('d-none');
    $('#place-order').removeClass('d-none');

    $('#li-manage-items').children().removeClass('active');
    $('#li-manage-customers').children().removeClass('active');
    $('#li-search-orders').children().removeClass('active');
    $('#li-dashboard').children().removeClass('active');
    $('#li-place-orders').children().addClass('active');
});


$('#li-search-orders').click(function (){
    $('#manage-customer').addClass('d-none');
    $('#manage-items').addClass('d-none');
    $('#place-order').addClass('d-none');
    $('#dashboard').addClass('d-none');
    $('#search-order').removeClass('d-none');


    $('#li-manage-items').children().removeClass('active');
    $('#li-manage-customers').children().removeClass('active');
    $('#li-dashboard').children().removeClass('active');
    $('#li-place-orders').children().removeClass('active');
    $('#li-search-orders').children().addClass('active');
});