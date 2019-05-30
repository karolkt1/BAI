// Oczywiście tutaj trzeba pobierać input usera a nie zhardocodowane dane
var alarmPrzyBezruchu = false;
var powiadomienia = true;
var czytaniePowiadomien = true;
var numerAlarmowy = "112"


var wskaznik = db.collection("Dziennik pacjentow Karol").doc(testUserMail).collection("Ustawienia").doc("dokument");
wskaznik.set({
    alarmPrzyBezruchu: alarmPrzyBezruchu,
    powiadomienia: powiadomienia,
    czytaniePowiadomien: czytaniePowiadomien,
    numerAlarmowy: numerAlarmowy
})
var settingsObject; 
wskaznik.get().then(function (doc) {
    if (doc.exists) {
        settingsObject = doc.data();
    }
})
