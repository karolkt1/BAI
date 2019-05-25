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
// Temporary solution
var tableOfEvents = new Array(12);

function addDate() {
    userText = document.getElementById("text1").value;
    userDate = document.getElementById("date1").value;
    userTime = document.getElementById("time1").value;
    event1 = new Event(userText, userDate, userTime);
    myJSON = JSON.stringify(event1);
    fillCalendar();
}

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

function fillCalendar() {
    var userHour = parseInt(userTime);
    if (userHour > 12) {
        userHour = userHour - 12;
    } else if (userHour == 0) {
        userHour = userHour + 1;
    }
    tableOfEvents[userHour - 1] = event1;

    tbl.rows[userHour].cells[1].innerHTML = userText;
    // This line is extremely important because it stores events in localStorage 
    storeObject(tableOfEvents);
}

function storeObject(param1) {
    // Put the object into storage
    localStorage.setItem('storedObject', JSON.stringify(param1));
}

function getStoredObject() {
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('storedObject');
    return retrievedObject;
}

var parsedJSON;
function jsonToEvent(jsonFile) {
    parsedJSON = JSON.parse(jsonFile);
    return parsedJSON;
}

// Get tableOfEvents if stored in localStorage
var magicFormula
function rebuildCalendar() {
    magicFormula = jsonToEvent(getStoredObject());
    for (var x = 0; x < magicFormula.length; x++) {
        if (magicFormula[x]) {
            // tbl.rows[parseInt(magicFormula[x].userTime)].cells[1].innerHTML = magicFormula[x].userMessage;
            tbl.rows[x + 1].cells[1].innerHTML = magicFormula[x].userMessage;
        }
    }
    console.log(magicFormula);
}
function clearLocalStorage() {
    localStorage.clear();
}
// custom alert features, pre-mobile version
