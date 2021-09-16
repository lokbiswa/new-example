function submitForm() {
  // gather user input
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;

  // process user input
  firstName && lastName
    ? processName(firstName, lastName)
    : displayMessage("Please Enter A First And A Last Name");
}

function processName(firstName, lastName) {
  validate(firstName, lastName);
  displayMessage("You entered a valid name");
}
function validate(...names) {
  //  name contains number or symbols
  isValid = (name) => name.match(/[^A-z ']/g) == null;
  const isNotValid = !names.every(isValid);

  if (isNotValid) {
    displayMessage("The input is not a Valid Name");
    throw new Error("The name is not Valid");
  }
}

function displayMessage(message) {
  document.getElementById("message").innerHTML = message;
}
