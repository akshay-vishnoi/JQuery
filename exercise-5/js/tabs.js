$(document).ready(function() {

//4.2.1 Hide all of the modules.
    $('div.module')
	.hide();


//4.2.2 Creating an unordered list element before the first module.
    $('div.module:first')
	.before($('<ul id="module_ul"></ul>'));


//4.2.3 Iterating over modules using .each. For each module, using text of h2 element as text for li that are added to ul element.
//4.2.4, 4.2.5, 4.2.6 and 4.2.7 Bind a click event to the list item.
    $('div.module')
	.each(function() {
		var div_element = $(this);
	        $('<li " name=' + div_element.attr("id") + '>' + div_element.find('h2').text() + '</li>')
	            .bind('click', function() { 
				var clickd_li = $(this);
		                $('div#' + clickd_li.attr("name")).show("slow");
        		        clickd_li.addClass("current"); 
        		        clickd_li.siblings().each(function() {
				    var clikd_li_Sibling = $(this);
                		    $('div#' + clikd_li_Sibling.attr("name")).hide("slow");
                		    clikd_li_Sibling.removeClass("current"); 
                		})
        	}).appendTo($('ul#module_ul'));  
    });


//4.2.8 Showing First tab.
    $('ul#module_ul li:first')
	.trigger('click');
    
});


