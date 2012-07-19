$(document).ready(function() {

//4.2.1 Hide all of the modules.
    $('div.module').hide();


//4.2.2 Creating an unordered list element before the first module.
    $('div.module:first').before($('<ul id="module_ul"></ul>'));


//4.2.3 Iterating over modules using .each. For each module, using text of h2 element as text for li that are added to ul element.
//4.2.4, 4.2.5, 4.2.6 and 4.2.7 Bind a click event to the list item.
    $('div.module').each(function() {
        $('<li " name=' + $(this).attr("id") + '>' + $(this).find('h2').text() + '</li>')
            .bind('click', function() { 
                $('div#' + $(this).attr("name")).show("slow");
                $(this).addClass("current"); 
                $(this).siblings().each(function() {
                    $('div#' + $(this).attr("name")).hide("slow");
                    $(this).removeClass("current"); 
                })
        }).appendTo($('ul#module_ul'));  
    });


//4.2.8 Showing First tab.
    $('ul#module_ul li:first').trigger('click');
    
});


