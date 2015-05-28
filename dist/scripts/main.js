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


	var $button = $("button");

	$('#button').click(function(){

	    $(this).attr('disabled');
	 		$button.html("Loading...")
	 		$button.css("color", "lightgrey");

	 	setTimeout(button, 4000);
	 });

	 function changeBack(e) {
		$btn.html('Submit');
		$btn.css('color', '#black');
	}
//I can't figure out why it won't revert back. It's giving me an error "unexpected identifier VM145:1"?





});