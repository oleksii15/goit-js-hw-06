const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget;
  const mail = elements.email.value;
  const password = elements.password.value;
  if (mail === "" || password === "") {
    alert("Заполните все поля");
    return;
  }
  const formData = {
    mail,
    password,
  };
  console.log(formData);
  form.reset();
}
