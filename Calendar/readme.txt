Plik index.html to kalendarz zintegrowany z firebase. Linia 222 informuje gdzie trzeba dodać mail usera
W pliku pressure.html jest to linia 142. Najłatwiej będzie Ci zrobić przypisanie w stylu
var testUserMail = firebase.auth().currentUser.email; 
w liniach opisanych powyżej

