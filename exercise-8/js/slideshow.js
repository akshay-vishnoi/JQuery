var li_count = 0, current_img, i = 1, slideshow;
$(document).ready(function() {
    var total_imgs_span, total_imgs, current_img_span;

    slideshow = $('#slideshow');
    $('body')
	.prepend(slideshow);

    $(slideshow)
	.children().hide();

    $('#slideshow li:first-child')
	.fadeIn(1500);
    setInterval('imageGlider()', 2000);
    
    total_imgs_span = $('<span></span>');
    total_imgs_span.text('Total images  ');
    total_imgs = $('<input disabled="disabled"/>');
    current_img_span = $('<span></span>');
    current_img_span.html('<br/>Current Image Number  ');
    current_img = $('<input disabled="disabled" value = "1"/>');
    container = $('<div></div>');

    container.append(total_imgs_span).append(total_imgs).append(current_img_span).append(current_img);

    container.insertAfter(slideshow);

    li_count = slideshow.find('li').length;
    total_imgs.val(li_count);
       
});


function imageGlider() {
	if(i <= li_count) {
		slideshow.find('li:visible').fadeOut(400, function() {
			current_img.val(i);    
			slideshow.find('li:nth-child(' + i + ')').fadeIn(1500);	    
		});
    		i++;
	}
	if(i > li_count) {
    		i = 1;
	}
}
