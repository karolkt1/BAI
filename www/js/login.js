// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form

  });

});

auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    location.href = "strona-glowna.html";
	
  } else {
    console.log('user logged out');
  }
})