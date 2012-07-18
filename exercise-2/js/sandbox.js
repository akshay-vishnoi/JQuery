$(document).ready(function(){

console.log("2.2 Traversing");


console.log("2.2.1 Select all image elements and log their alt attribute.");
$("img").each(function(index,element){console.log($(element));console.log("ALT attr: "+element.alt);});


console.log("2.2.2 Traversing up to form and adding class");
console.log($($("input[name=q][type=text]").closest("form")).addClass("form_class"));

console.log("2.2.3 selecting li with class 'current bar' under #mylist removing its class and assigning its class name to next li");
console.log($("ul#myList li[class='current bar']").removeClass(function(){console.log($(this));}).next("li").addClass("current bar"));


console.log("2.2.4 Selecting element inside #specials and traversing till submit button.");
console.log($("#specials select").parent().siblings().find("input[type=submit]"));


console.log("2.2.5  Selecting first li in #slideshow and add class 'current' to it, and then add class of 'disabled' to its sibling elements.");
console.log($("#slideshow li:first").addClass("current").nextAll().addClass("disabled"));
console.log($("#slideshow li:first"));
});
