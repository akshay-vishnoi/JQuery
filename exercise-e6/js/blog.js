$(document).ready(function() {
 
    $('#blog a').click(function(e) {
            e.preventDefault();
    });
    
});

$('h3').bind('click', function() {

    if($(this).next('p.excerpt').css('display')=="none") {
        $('p.excerpt:visible').slideUp(200);
        $(this).next('p.excerpt').slideDown(200);
    }

});