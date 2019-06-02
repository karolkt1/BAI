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
  window.navigator.vibrate(500)
}

var watchID = null;
function gyro() {
  startWatch();
}

function startWatch() {
  // Update acceleration every 3 seconds
  var options = { frequency: 10000 };

  watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function stopWatch() {
  if (watchID) {
    navigator.accelerometer.clearWatch(watchID);
    watchID = null;
  }
}

var firstRun = true;
var arrayOfMeasurement;
var arrayOfMeasurementLater;
function onSuccess(acceleration) {
  var element = document.getElementById('accelerometer');
  element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
    'Acceleration Y: ' + acceleration.y + '<br />' +
    'Acceleration Z: ' + acceleration.z + '<br />' +
    'Timestamp: ' + acceleration.timestamp + '<br />';

  if (firstRun) {
    arrayOfMeasurement = [Math.round(parseInt(acceleration.x)), Math.round(parseInt(acceleration.y)), Math.round(parseInt(acceleration.z))];
    firstRun = false;
  } else {
    arrayOfMeasurementLater = [Math.round(parseInt(acceleration.x)), Math.round(parseInt(acceleration.y)), Math.round(parseInt(acceleration.z))];
    firstRun = true;
  } 
  compareMeasurements();
}

function compareMeasurements() {
  if (arrayOfMeasurement[0] == arrayOfMeasurementLater[0] && arrayOfMeasurement[1] == arrayOfMeasurementLater[1] && arrayOfMeasurement[2] == arrayOfMeasurementLater[2]) {
    alert('if');
    window.open("tel:" + "555");
  } else {
    alert('else');
  }
}

function onError() {
  alert('onError!');
}

function setupPopout() {
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


// Legacy code for realtime database 
// function submitClick2() {
//   var rootRef = firebase.database().ref();
//   rootRef.child("Text").set("This is a test value");
// }

function submitClick() {
  db.collection("Users").doc("Data").set({
    email: "kowalski@uek.krakow.pl",
    name: "Jan",
    phoneNumber: "500500500"
  })
}
