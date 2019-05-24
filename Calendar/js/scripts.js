var userText;
var userDate;
var userTime;
var myJSON;

class Event {
    constructor(userMessage, userDate, userTime) {
        this.userMessage = userMessage;
        this.userDate = userDate;
        this.userTime = userTime;
    }
}
var event1; 
function addDate(){
    userText = document.getElementById("text1").value;
    userDate = document.getElementById("date1").value;
    userTime = document.getElementById("time1").value;
    event1 = new Event(userText, userDate, userTime);
    myJSON = JSON.stringify(event1);
    resultBeta();
}

function resultBeta(){
    var result = document.getElementById("result");
    result.innerHTML = "\n To jest JSON object "+ myJSON
}
