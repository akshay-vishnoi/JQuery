$(document).ready(function() {
	
        $('#blog a').click(function(e) {
                e.preventDefault();
        });

	$('#blog').find('h3').each(function() {
		var div = $('<div></div>'), current_h3 = $(this), h3_a_Href = 'data/' + current_h3.find('a').attr('href');
		h3_a_Href = h3_a_Href.replace('#', ' #');
		current_h3.after(div);
		current_h3.data("test", h3_a_Href);
	});

	$('h3').live('click', function() {
		var clikd_h3 = $(this);
		clikd_h3.next('div').load(clikd_h3.data("test"));
		
	});
});
