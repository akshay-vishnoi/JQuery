var li_count = 0, current_img, i = 1;
$(document).ready(function() {
    var slideshow, total_imgs_span, total_imgs, current_img_span;

//5.3.1 Moving #slideshow to the top of the body.
    $('body')
	.prepend($('#slideshow'));
    $('#slideshow')
	.children()
	.each(function() {
        	$(this).hide();
    	});
    slideshow = $('#slideshow');
    $(slideshow.children().first())
	.fadeIn(1500);
    setInterval('change1()', 2000);
    
    total_imgs_span = $('<span>Total images  </span>');
    total_imgs = $('<input disabled="disabled"/>');
    current_img_span = $('<span><br/>Current Image Number  </span>');
    current_img = $('<input disabled="disabled" value = "1"/>');
    slideshow.append(total_imgs_span).append(total_imgs).append(current_img_span).append(current_img);
    li_count = slideshow.find('li').length;
    total_imgs.val(li_count);
       
});


function change1() {
	if(i <= li_count) {
		$('#slideshow li:visible').fadeOut(400, function() {
			current_img.val(i);    
			$('#slideshow li:nth-child(' + i + ')').fadeIn(1500);	    
		});
    		i++;
		}
	if(i > li_count) {
    		i = 1;
	}
}