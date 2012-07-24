$(document).ready(function() {
	var val, address;
	address = location.href;
	val = address.split("?");

	if(val[1] != undefined) {
		$($('.container a')[val[1]]).css('background-color', 'grey');
		$($('a')[val[1]]).parents().slideDown();
	}
	
	$('.container a').bind('click', function(e){
		var a_link = $(this).attr('href');
		if($(this).children().length == 0) {
			e.preventDefault();
			num = $('a').index(this);
			a_link += '?' + num;
			window.open(a_link, '_self');
		}
	});

});
