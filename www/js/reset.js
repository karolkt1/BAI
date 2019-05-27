
var emailadrr = document.getElementById("emailr").value;

auth.sendPasswordResetEmail(emailadrr).then(function() {
  console.log('poszedł mail');
}).catch(function(error) {
  console.log('problem');
});