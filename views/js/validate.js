const form = document.querySelector("form");
const email = document.querySelector("input[type=email]");
const password = document.querySelector("input[type=password]");

form.addEventListener("submit", submitFunction);

function submitFunction(event) {
  if (email.value === "" || password === "") {
    event.preventDefault(); //

    alert("Please fill the form");
    return false;
  }
}
