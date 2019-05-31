
	function submitClick() {
	var inputText = document.getElementById("text_field").value;
	var inputText1 = document.getElementById("text_field1").value;
	var inputText2 = document.getElementById("text_field2").value;
	var raz = db.collection("Dziennik pacjenta").doc(firebase.auth().currentUser.email);
	raz.set({
		Imie: inputText,
		Nazwisko: inputText1,
		Numer: inputText2
	})
	console.log("data sent")
	}

//funkcja sprawdzająca poprawnosc podanego hasła w polu currentpass	
	
function currentClick() {
var user = firebase.auth().currentUser;
var currentpass = document.getElementById("currentpass").value="";
var credential = firebase.auth.EmailAuthProvider.credential(
  firebase.auth().currentUser.email,
  currentpass
);

//następnie jeżeli hasełko się zgadza to jest możliwość jego zmiany

user.reauthenticateWithCredential(credential).then(function() {
var user = firebase.auth().currentUser;
var resetpass = document.getElementById("resetpass").value="";

user.updatePassword(resetpass).then(function() {
  alert("Nastąpiła zmiana hasła");
  
}).catch(function(error) {
  alert(error);
});
}).catch(function(error) {
  alert("Sprawdź czy podane hasło jest poprawne");
});
}