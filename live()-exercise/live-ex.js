$(document).ready(function() {

	var div_container = $('<div class = "div_container"><p>Empty Stack</p></div>'), id = 1;

	div_container.prependTo('body');
	
	addItem = $('<button>Add Item</button>');
	addItem.appendTo('body');
	
	$('body').delegate('button', 'click', function() {		
		if(id == 1) {
			$('body').find('p').css('display', 'none');
		}
		div_item = $('<div class = "stack_item" id = div' + id + '>' + id + '</div>');
		id++;
		div_container.prepend(div_item);	
	});

	$('body').delegate('div.stack_item', 'click', function() {
		var clikd_div = $(this);
		if(clikd_div.attr('id') == ('div' + (id-1))) {
			clikd_div.remove();
			id--;
			if(id == 1) {
				$('body').find('p').css('display', 'block');
			}
		} else {
			clikd_div.css('border','5px dashed yellow');
		}
	});
});
