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
function addDate() {
    userText = document.getElementById("text1").value;
    userDate = document.getElementById("date1").value;
    userTime = document.getElementById("time1").value;
    event1 = new Event(userText, userDate, userTime);
    myJSON = JSON.stringify(event1);
    resultBeta();
    fillCallendar();
}

function resultBeta() {
    var result = document.getElementById("result");
    result.innerHTML = "\n To jest JSON object " + myJSON
}

// new code, it will probably break the app
var tbl = document.getElementById("table1");
function buildTable() {
    var tbl = document.getElementById("table1");
    if (tbl.rows.length > 1) {
        for (var x = tbl.rows.length - 1; x > 0; x--) {
            var row = tbl.deleteRow(x);
        }
    }
    var cell = [];
    var row = [];

    for (var i = 0; i < 12; ++i) {
        row[i + 1] = tbl.insertRow(-1);
        cell[i + 1] = row[i + 1].insertCell(-1);
        cell[i + 2] = row[i + 1].insertCell(0);
        cell[i + 2].innerHTML = i + 1;
        // cell[i+1].innerHTML = "random text"+i
        cell[i + 1].innerHTML = "";
    }
}
buildTable();

function fillCallendar() {
    var userHour = parseInt(userTime);
    if (userHour > 12) {
        userHour = userHour - 12;
    } else if (userHour == 0) {
        userHour = userHour + 1;
    }
    tbl.rows[userHour].cells[1].innerHTML = userText;
}