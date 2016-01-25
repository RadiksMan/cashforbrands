function headerSearchFocus(){
    $(document).on('focus', '.search-input-wrap input', function(event) {
        $(this).parents('.search-form').addClass('active');
    });
    $(document).on('blur', '.search-input-wrap input', function(event) {
        $(this).parents('.search-form').removeClass('active');
    });
}

$(document).ready(function(){
    headerSearchFocus();
});

$(window).load(function(){

});

$(window).resize(function(){

});