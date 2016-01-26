

function headerSearchFocus(){
    $(document).on('focus', '.search-input-wrap input', function(event) {
        $(this).parents('.search-form').addClass('active');
    });
    $(document).on('blur', '.search-input-wrap input', function(event) {
        $(this).parents('.search-form').removeClass('active');
    });
}

function fancyboxPop(){
    $('.fancybox-pop').fancybox({
        wrapCSS: 'popup-main',
        width: '100%',
        padding:'0px',
        openMethod : 'dropIn',
        openSpeed : 250,

        closeMethod : 'dropOut',
        closeSpeed : 150,

        nextMethod : 'slideIn',
        nextSpeed : 250,

        prevMethod : 'slideOut',
        prevSpeed : 250
    });
}

$(document).ready(function(){
    fancyboxPop();
    headerSearchFocus();
});

$(window).load(function(){

});

$(window).resize(function(){

});