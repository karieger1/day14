$(document).on("ready", function(){
	var $button = $("#likeButton");
		$button.on("click", logLikes);
		var clicks = 0;
		function logLikes(e) {
			$button.html("1 like");
			clicks++;
			$button.html(clicks + " likes");
				if (clicks === 1) {
					$button.html(clicks + " like");
				}
		}




});