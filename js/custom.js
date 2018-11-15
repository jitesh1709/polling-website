// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$(document).ready(function() {
	$('.leader-signup').click(function() {
		$('#leader-sign-up').show(1000);
		$('#voter-registration').hide(1000);
		$('#normal-login').hide(1000);
	});
	$('.voter').click(function() {
		$('#voter-registration').show(1000);
		$('#leader-sign-up').hide(1000);
		$('#normal-login').hide(1000);
		// $('#leader-sign-up').hide(1000);
	});
	$('.login').click(function() {
		$('#normal-login').show(1000);
		$('#voter-registration').hide(1000);
		$('#leader-sign-up').hide(1000);
	});
});