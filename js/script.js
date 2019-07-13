$(document).ready(() => {

	$('#loginButton').click(() => {
		$('#loginSection').slideDown(600);
	});

	$('#signupButton').click(() => {
		$('#signupSection').slideDown(600);
	});	

	$(function() {
  		$('.js-description_readmore').moreLines({
    		linecount: 5,
    		baseclass: 'b-description',
    		basejsclass: 'js-description',
    		classspecific: '_readmore',
    		buttontxtmore: "Read more",
    		buttontxtless: "Рома, спизжено",
    		animationspeed: 250
  		});
	});
});