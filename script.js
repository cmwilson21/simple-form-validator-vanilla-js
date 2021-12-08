const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message
}

// show success outline 
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// check email is valid 
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// check required fields - pass in array of inputs that we want to chec
function checkRequired(inputArray) {
  inputArray.forEach(function(input) {
    // console.log(input.value)
    // use the .trim below to remove white space
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input)
    }
  })
}

// get field name and uppercase the first letter use slice to cut off the first letter since we have that coming in from charAt(0), add the rest of the word with the + input.id.slice(1)
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// event listeners below the functions
form.addEventListener('submit', function(e){
  e.preventDefault();
  // if(username.value === '') {
  //   showError(username, 'Username is required');
  // } else {
  //   showSuccess(username);
  // }
  // if(email.value === '') {
  //   showError(email, 'Email is required');
  // } else if(!isValidEmail(email.value)){
  //   showError(email, 'Email is not valid');
  // } else {
  //   showSuccess(username);
  // }
  // if(password.value === '') {
  //   showError(password, 'Password is required');
  // } else {
  //   showSuccess(username);
  // }
  // if(password2.value === '') {
  //   showError(password2, 'Password2 is required');
  // } else {
  //   showSuccess(username);
  // }
  checkRequired([username, email, password, password2])

})