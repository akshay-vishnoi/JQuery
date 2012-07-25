$(document).ready(function() {

	var data, select, runOnlyOnce = true;
	div = $('<div></div>');
	$('#specials')
		.find('form')
			.after(div)
		.end()
		.find('.buttons')
			.remove();
	
	
	$('#specials')
		.find('select')
		.change(function() {
			select = $(this);
			if(runOnlyOnce == true) {		
				$.ajax({
					url : 'data/specials.json',
					type : 'GET',
					dataType : 'json',

					success : function(response) {
							data = response;
							runOnlyOnce = false;
							display_div(data);
						},
					error : function(xhr, status) {
							alert('Sorry, there was a problem in fetching information');
						}
				});
			}else {
				display_div(data);
			}
		
		});
	function display_div(data) {
		var select_day;
		div.html("");
		if(select.val().length > 0) {
			select_day = data[select.val()];
			div.css('color', select_day.color);			
			header = $('<h2></h2>');
			header.text(select_day.title);
			
			day_info = $('<p></p>');
			day_info.text(select_day.text);

			day_image = $('<img />');
			day_image.attr('src', select_day.image);
			div.append(header).append(day_info).append(day_image);
		}

	}
});


//This program will load json only once on the first change of the select item.

