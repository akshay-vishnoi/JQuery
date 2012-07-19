$(document).ready(function() {
    $("#nav li").hover(function() {
        $(this).find('ul').addClass('hover');
    },function() {
        $(this).find('ul').removeClass('hover');
    });
});
