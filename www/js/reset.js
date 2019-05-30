function resetPass(){
	var email = document.getElementById('emailreset').value;
	firebase.auth().sendPasswordResetEmail(email).then(function() {
		alert('Password Reset Email Sent!');
	}).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		if (errorCode == 'auth/invalid-email') {
			alert(errorMessage);
		} else if (errorCode == 'auth/user-not-found') {
			alert(errorMessage);
		}
		console.log(error);
	});
}