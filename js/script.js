<<<<<<< HEAD
'use strict';

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

=======
'use strict';

$(document).ready(() => {

	$('#loginButton').click(() => {
		$('#loginSection').slideDown(600);
	});

	$('#signupButton').click(() => {
		$('#signupSection').slideDown(600);
	});	
>>>>>>> a248f8b80d6781f019d02a06a5b58d586d7d0e4a
});