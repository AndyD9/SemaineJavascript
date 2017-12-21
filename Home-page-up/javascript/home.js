// Home page
var create = document.querySelector('.create-account');
var signIn = document.querySelector('.sign-in');
var log = document.querySelector('.log');
var hydcr = document.querySelector('.login-account');
var hydlo = document.querySelector('.create-account');

function hydecr() {
  if (hydlo.style.display === "none") {
    hydlo.style.display = "block";
  } else {
    hydlo.style.display = "none";
  }
}

function hydelo() {
  if (hydcr.style.display === "none") {
    hydcr.style.display = "block";
  } else {
    hydcr.style.display = "none";
  }
}
create.addEventListener('click', function(event) {
  signIn.style.display = 'block';
  signUp.style.display = '';
})

var logIn = document.querySelector('.login-account');
var signUp = document.querySelector('.sign-up');
var log = document.querySelector('.log');

logIn.addEventListener('click', function(event) {
  signUp.style.display = 'block';
  signIn.style.display = '';
})

var userField = document.querySelector('.username-field');
var pwField = document.querySelector('.pw-field');

userField.addEventListener('focus', function() {
  userField.style.border = '1px solid #000';
  if (userField.value === 'Choose a username') {
    userField.value = '';
  }
  /*    if (isNaN(dateField.value) === true) {
      result.innerHTML = 'Tu dois entrer un nombre !';
    } else if (dateField.value > year) {
      result.innerHTML = 'Tu n\'es pas encore né !';
    } else {
      result.innerHTML = 'Tu es né en ' + dateField.value + ' et tu as ' + difference + ' ans.';
    }*/
})
userField.addEventListener('blur', function() {
  userField.style.border = '';
  if (userField.value === '') {
    userField.value = 'Choose a username';
  }
})

pwField.addEventListener('focus', function() {
  pwField.style.border = '1px solid #000';
  if (pwField.value === 'Choose a password') {
    pwField.value = '';
  }
})

pwField.addEventListener('blur', function() {
  pwField.style.border = '';
  if (pwField.value === '') {
    pwField.value = 'Choose a password';
  }
})


// VALIDATION DU MOT DE PASSE //
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  var username = document.querySelector('.mail-Case').value;
  var password = document.querySelector('.passeword-Case').value;
  var sub = document.querySelector('.buttonconnect')
  var alertmsgPara = document.querySelector('.alertmsgp');
  if (username == "groupe18" && password == "grp18") {
    alert("Connecter !");
    window.location = "../index.html"; // Redirecting to other page.
    return false;
  } else {
    attempt--; // Decrementing by one.
    alertmsgPara.innerHTML =" Le mot de passe ou l'adresse mail ne correspondent pas !";
    // Disabling fields after 3 attempts.
    if (attempt === 0) {
      username.disabled = true;
      password.disabled = true;
      sub.disabled = true;
      return false;
    }
  }
}
