var textToRead;


function popup() {
  textToRead = prompt("Co mam przeczytać", "");

  if (textToRead != null) {
    document.getElementById("readme").innerHTML =
      "Zostanie przeczytana następująca wiadomość: " + textToRead;
  }
};

function speak() {
  speechSynthesis.speak(new SpeechSynthesisUtterance(textToRead));
};

function speakAPI() {
  responsiveVoice.speak(textToRead, "Polish Female");
};


function vibration() {
  navigator.vibrate(1000);
}

var watchID = null;


function gyro() {
  startWatch();
}
function startWatch() {

  // Update acceleration every 3 seconds
  var options = { frequency: 3000 };

  watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function stopWatch() {
  if (watchID) {
    navigator.accelerometer.clearWatch(watchID);
    watchID = null;
  }
}

function onSuccess(acceleration) {
  var element = document.getElementById('accelerometer');
  element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
    'Acceleration Y: ' + acceleration.y + '<br />' +
    'Acceleration Z: ' + acceleration.z + '<br />' +
    'Timestamp: ' + acceleration.timestamp + '<br />';
}


function onError() {
  alert('onError!');
}

function phoneCall() {
  var numerAlarmowy = "900300400";
  // location.href = "tel:+" + numerAlarmowy; THIS IS A WEB VERSION
  window.open("tel:"+numerAlarmowy);
}


// Here begins firebase code

var db;
var firebaseConfig = {
  apiKey: "AIzaSyBP8Un_hWobMbOE5HgU41Cwne7L7vMTVhw",
  authDomain: "bogate-aplikacje-internetowe.firebaseapp.com",
  databaseURL: "https://bogate-aplikacje-internetowe.firebaseio.com",
  projectId: "bogate-aplikacje-internetowe",
  storageBucket: "bogate-aplikacje-internetowe.appspot.com",
  messagingSenderId: "860894210224",
  appId: "1:860894210224:web:b950180e478fe509"
};


// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
db = firebase.firestore(app);

var textVar = document.getElementById("fbText");
var submitButton = document.getElementById("submitButton");

const auth = firebase.auth();

// Legacy code for realtime database 
// function submitClick2() {
//   var rootRef = firebase.database().ref();
//   rootRef.child("Text").set("This is a test value");
// }
//function submitClick() {
 // var inputText = document.getElementById("text_field").value;
//  db.collection("Users").doc().set({
//    email: inputText
//  })
//  console.log("data sent")
//}

function submitClick() {
  var inputText = document.getElementById("text_field").value;
  var inputText1 = document.getElementById("text_field1").value;
  var inputText2 = document.getElementById("text_field2").value;
  var das = db.collection("Users").doc();
  das.set({
	  Imie: inputText1
  })
  das.collection("Users").doc().set({
    email: inputText,
	miasto: inputText2
  })
  console.log("data sent")
}

// listen for auth status changes
//auth.onAuthStateChanged(user => {
//  if (user) {
 //   console.log('user logged in: ', user);
//  } else {
//    console.log('user logged out');
//  }
//})

//const signupForm = document.querySelector('#signup-form');
//signupForm.addEventListener('submit', (e) => {
 // e.preventDefault();
 // const email = signupForm['signup-email'].value;
//  const password = signupForm['signup-password'].value;

//  auth.createUserWithEmailAndPassword(email, password).then(cred => {
//    const modal = document.querySelector('#modal-signup');
//    M.Modal.getInstance(modal).close();
//    signupForm.reset();
 // });
//});

