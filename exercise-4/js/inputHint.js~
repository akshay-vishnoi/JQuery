var hint_text = $('label[for=q]').text();

$(document).ready(function(){


//4.1.1 & 4.2.2 Setting value of search input to text of label element and Adding class of "hint" to search input.
    console.log($('input[name=q]').val(hint_text).removeClass().addClass('hint'));


//4.1.3 Remove the label element.
    $('label[for=q]').remove();
    console.log($('label[for=q]'));

});


//4.1.4 Binding focus event to search input that removes the hint text and the "hint" class
$('input[name=q]').bind('focus',function(){$(this).val("").removeClass();});


//4.1.5 Bind a blur event to the search input that restores the hint text and "hint" class if no search text was entered.
$('input[name=q]').bind('blur',function() {
    if ($(this).val().length == 0) {
        $(this).val(hint_text);
        $(this).addClass('hint');
    }
});
