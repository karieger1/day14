
	var $button = $("button");

	$button.on("click",function(){

	    $(this).attr('disabled');
	 		$button.html("Loading...")
	 		$button.css("color", "lightgrey");

	 	setTimeout(button, 4000);
	 });

	 function changeBack(e) {
		$btn.html('Submit');
		$btn.css('color', '#black');
}