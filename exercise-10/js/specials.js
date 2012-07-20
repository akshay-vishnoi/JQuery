$(document).ready(function() {

	var data, select, runOnlyOnce = true;
	div = $('<div></div>');
	$('#specials')
		.find('form')
			.after(div)
		.end()
		.find('input')
			.parent()
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
		var select_day, div_html="";
		if(select.val().length > 0) {
			select_day = data[select.val()];
			div.css('color', select_day.color);			
			div_html += "<h2>" + select_day.title + "</h2><br/>";
			div_html += select_day.text + "<br/><br/>";
			div_html += '<img src ="' + select_day.image + '"/><br/><br/>';
		}
		div.html(div_html);
	}
});


//This program will load json only once on the first change of the select item.

