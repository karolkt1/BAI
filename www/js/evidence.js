
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