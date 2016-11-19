$(document).ready(function(){
	//adds a hover to the cards
	var $card = $('.card');

		$card.mouseenter(function(){
			$(this).css("background-color", "black");
		});

		$card.mouseleave(function(){
			$(this).css("background-color", "#008080");
		});


		//animates nav scrolling. works but needs refactoring
	var $htmlBody = $('html, body');	

    $('#navHome').click(function(){					   
		$htmlBody.animate({
			scrollTop: $("#home").offset().top
				}, 2000);
			});

						
	$('#navAbout').click(function(){					   
		$htmlBody.animate({
			scrollTop: $("#about").offset().top
				}, 2000);				   							   
			});

						
	$('#navPortfolio').click(function(){					   
		$htmlBody.animate({
			scrollTop: $("#portfolio").offset().top
				}, 2000);				   							   
			});


	$('#navContact').click(function(){					   
		$htmlBody.animate({
			scrollTop: $("#contact").offset().top
				}, 2000);				   						   
			});

});