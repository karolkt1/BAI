const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  const repeat = signupForm['signup-repeat'].value;

  auth.createUserWithEmailAndPassword(email, password)
})

auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    location.href = "edycja-danych.html";
	
  } else {
    console.log('user logged out');
  }
})

var haslo = document.getElementById("signup-password");
var powtorz = document.getElementById("signup-repeat");

function validatePassword(){
  if(haslo.value != powtorz.value) {
    powtorz.setCustomValidity("Passwords Don't Match");
  } else {
    powtorz.setCustomValidity('');
  }
}

haslo.onchange = validatePassword;
powtorz.onkeyup = validatePassword;