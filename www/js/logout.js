// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
	console.log(user.uid);
    console.log(user.email);
	
  } else {
    console.log('user logged out');
    location.href = "index.html";
  }
})