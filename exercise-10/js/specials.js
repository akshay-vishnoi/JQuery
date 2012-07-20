$(document).ready(function() {
	div = $('<div class = "target"></div>');
	$('#specials').find('form').after(div);
	$('#specials').find('select').change(function() {
		var select = $(this);		
		$.getJSON('data/specials.json', function(resp) {
			var select_day, div_html="";
			if(select.val().length > 0) {
				select_day = resp[select.val()];
				div_html += "<h3><b>" + select.find('option:selected').text() + "</b></h3><br/>";
				div_html += "Title : " + select_day.title + "<br/>";
				div_html += "Text : " + select_day.text + "<br/>";
				div_html += "Image url : " + select_day.image + "<br/>";
				div_html += "Color : " + select_day.color + "<br/>";
			}
			div.html(div_html);
		});

	});
});
