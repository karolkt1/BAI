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

function speakAPI(){
  responsiveVoice.speak(textToRead,"Polish Female");
};


function vibration(){
navigator.vibrate(3000);
}

var watchID = null;


function gyro(){
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
  element.innerHTML = 'Acceleration X: ' + acceleration.x         + '<br />' +
                      'Acceleration Y: ' + acceleration.y         + '<br />' +
                      'Acceleration Z: ' + acceleration.z         + '<br />' +
                      'Timestamp: '      + acceleration.timestamp + '<br />';
}


function onError() {
  alert('onError!');
}