
$(document).ready(function () {
	var $button = $('#button')

	$button.on('click', loadButton);

	function loadButton(e) {
		$button.html('Loading...');
		$button.css('color', 'grey');

		setTimeout(submitButton, 4000);
	}
	function submitButton(e) {
		$button.html('Submit');
		$button.css('color', 'black');
	}

});