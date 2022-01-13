const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// check required fields - pass in array of inputs that we want to chec
function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    // console.log(input.value)
    // use the .trim below to remove white space
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// get field name and uppercase the first letter use slice to cut off the first letter since we have that coming in from charAt(0), add the rest of the word with the + input.id.slice(1)
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// event listeners below the functions
form.addEventListener("submit", function (e) {
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
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  // checkLength checks the field, the minium, and the max - we built this above
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
