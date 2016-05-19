$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
	$(".read-more").click(function(){
		$("#text-hidden").toggle();
		$("#text-hidden").toggleClass("red-border");
	});
	$("button").click(function(){
		$("body").toggleClass("dark-background");
	});
});
