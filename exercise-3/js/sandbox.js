$(document).ready(function(){

//2.3.1 Add five new list items to the end of the unordered list #myList.
    for(i=1;i<=5;i++) {
        $('ul#myList').append('<li>New list item ' + i + '</li>');
    }

//2.3.2 Remove odd li
    $('ul#myList li:odd').remove();

//2.3.3 Add another h2 and another paragraph to the last div.module
    $('div.module:last').append('<h2>New Header 2</h2><p>New Paragraph</p>');

//2.3.4 Add another option to the select element; give the option the value "Wednesday"
    $('select').append('<option>Wednesday</option>');

//2.3.5 Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
    var img_object = $('img');    
    var first_imgElement = $(img_object)[0];
    $(first_imgElement)
	.clone()
	.appendTo($('<div>NEW DIV</div>')
	.addClass("module")
	.appendTo('div.module:last'));
});

