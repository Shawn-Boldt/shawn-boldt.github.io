$(document).ready(function(){
	var $card = $('.card');

		$card.mouseenter(function(){
			$(this).css("background-color", "black");
		});

		$card.mouseleave(function(){
			$(this).css("background-color", "#008080");
		});


});