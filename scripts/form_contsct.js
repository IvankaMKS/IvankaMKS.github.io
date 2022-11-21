const baseUrl = "https://63712a810399d1995d8ca5e6.mockapi.io/contact";

const formElem = document.querySelector(".login-form");
const buttonElem = document.querySelector(".submit_button");
const userNameInput = document.querySelector('.input[name = "name"]');
const emailInput = document.querySelector('.input[name = "email"]');
const userPhoneInput = document.querySelector('.input[name = "phone"]');
const userMessInput = document.querySelector('.input[name = "message"]');

// ----------------------------------------------------
const isFormValidCheck = () => {
  const isFormDone = formElem.reportValidity();

  if (isFormDone) {
    buttonElem.removeAttribute("disabled");
  }
};

// ----------------------------------------------------
formElem.addEventListener("input", isFormValidCheck);
// ----------------------------------------------------
function createUser(userData) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

// ----------------------------------------------------
const onCreateUserHandler = (event) => {
  event.preventDefault();

  const newUser = {
    email: emailInput.value,
    name: userNameInput.value,
    phone: userPhoneInput.value,
    message: userMessInput.value,
  };

  createUser(newUser)
    .then((response) => response.json())
    .then((response) => alert(JSON.stringify(response)))
    .then(() => {
      userNameInput.value = "";
      emailInput.value = "";
      userPhoneInput.value = "";
      userMessInput.value = "";
    });
};

buttonElem.addEventListener("click", onCreateUserHandler);