$(document).ready(function(){
console.log("2.1.1 Div with Class MODULE");
console.log($("div.module"));


console.log("2.1.2 Three selectors");
console.log($("ul#myList li:eq(2)"));
console.log($($("ul#myList").children()[2]));
console.log($($("ul#myList li")[2]));
console.log(" First one was best to use because it will directly point to 2nd index of li of ul with id myList. ");


console.log("2.1.3 Label for the search input.");
console.log($("label[for=q]"));


console.log("2.1.4 The number of elements that are hidden.");
console.log(($("*:hidden").length));


console.log("2.1.5 The number of image elements having alt attribute set are:");
console.log($("img[alt]").length);


console.log("2.1.6 Table rows at odd position");
console.log($("table tr:even"));
});
