$(document).ready(function(){
	$('.js-open-envelope').one('click', function (event) {
		event.preventDefault();
		var $self = $(this);
		$self.find('.envelope').removeClass('tossing').addClass('open');
		$self.find('.heart use').attr("xlink:href", "#icon-heart-broken");
		$('.js-open-envelope').animate({transform:'scale(0)'});  
	});
});