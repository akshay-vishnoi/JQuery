$(document).ready(function() {
	var val, address, aUnderContainer = $('.container a');;
	address = location.href;
	val = address.split("?");

	if(val[1] != undefined) {

		$(aUnderContainer[val[1]]).css('background-color', 'grey');
		$(aUnderContainer[val[1]]).parents().slideDown();
	}
	
	aUnderContainer.bind('click', function(e){
		var clikd_a = $(this);
		var a_link = clikd_a.attr('href');

		if(clikd_a.children().length == 0) {

			e.preventDefault();
			num = aUnderContainer.index(clikd_a);
			a_link += '?' + num;
			window.open(a_link, '_self');
		}
	});

});
