const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const select = document.getElementById("select");
const radioDiv = document.getElementById("type");
const radioButtons = radioDiv.querySelectorAll("input[type='radio']");
const inputBox = document.getElementById("img");

function radioSelected(radioButtons) {
  let isChecked = false;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    return false; // prevent form submission
  }
  return isChecked;
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isValidEmail(email) {
  const re = /^(?!.*@.*@.*)([\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,})$/;

  return re.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (select.value === "Not selected") {
    showError(select, "You must select a position");
  } else {
    showSuccess(select);
  }

  if (radioSelected(radioButtons) === false) {
    showError(type, "You must select a type");
  } else {
    showSuccess(ft);
  }

  if (username.value === "") {
    showError(username, " Name is required");
  } else {
    showSuccess(username);
  }

  if (username.value.length < 6 || username.value.length > 10) {
    showError(username, "Username should be >=6 and <=10");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is required");
  } else {
    showSuccess(email);
  }

  if (!isValidEmail(email.value)) {
    showError(email, "Not a valid e-mail address");
  } else {
    showSuccess(email);
  }
});
