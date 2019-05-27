const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  const repeat = signupForm['signup-repeat'].value;
  const imiea = signupForm['signup-imie'].value;
  const nazwiskoa = signupForm['signup-nazwisko'].value;
  const numera = signupForm['signup-numer'].value;
  

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});
