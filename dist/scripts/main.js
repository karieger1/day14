$(document).on("ready", function(){
// 	var $button = $("#likeButton");
// 		$button.on("click", logLikes);
// 		var clicks = 0;
// 		function logLikes(e) {
// 			$button.html("1 like");
// 			clicks++;
// 			$button.html(clicks + " likes");
// 				if (clicks === 1) {
// 					$button.html(clicks + " like");
// 				}
// 		}


// 	var $button = $("button");

// 	$('#button').click(function(){

// 	    $(this).attr('disabled');
// 	 		$button.html("Loading...")
// 	 		$button.css("color", "lightgrey");

// 	 	setTimeout(button, 4000);
// 	 });

// 	 function changeBack(e) {
// 		$btn.html('Submit');
// 		$btn.css('color', '#black');
// 	}
// //I can't figure out why it won't revert back. It's giving me an error "unexpected identifier VM145:1"?

//TABS PROBLEM



	var $targetSection = $(window.location.hash);
	if(!$targetSection.length) {
		$targetSection = $("main section").eq(0);
	}
	$targetSection.show();

	$('nav a[href="#' +$targetSection.attr('id')+'"]').addClass('active');

	$('nav').on('click', function(e) {
		var $target = $(e.target);
		var targetName = $target.attr('href');
		$('main section').hide();
		$(targetName).show();


		$('nav a').removeClass('active');
		$target.addClass('active');

	});
});
