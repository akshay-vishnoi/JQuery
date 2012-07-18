$(document).ready(function() {

//4.2.1 Hide all of the modules.
    $('div.module').hide();


//4.2.2 Creating an unordered list element before the first module.
    $('div.module:first').before($('<ul id="module_ul"></ul>'));


//4.2.3 Iterating over modules using .each. For each module, using text of h2 element as text for li that are added to ul element.
//4.2.4 Bind a click event to the list item.
    $('div.module').each(function() {
        $('<li class="div_hide_li" name=' + $(this).attr("id") + '>' + $(this).find('h2').text() + '</li>')
            .bind('click', function() { 
                $('div#' + $(this).attr("name")).show("slow");
                $(this).addClass("current"); 
                $(this).siblings().each(function() {
                    $('div#' + $(this).attr("name")).hide("slow");
                    $(this).removeClass("current"); 
                })
        }).appendTo($('ul#module_ul'));  
    });


//4.2.5 Showing First tab.
    $('li.div_hide_li:first').trigger('click');
    
});


