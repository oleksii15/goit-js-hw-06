const inputBlur = document.querySelector("#validation-input");
inputBlur.addEventListener("blur", onCheckField);
const length = Number(inputBlur.dataset.length);
function onCheckField(event) {
  if (event.currentTarget.value.length === length) {
    inputBlur.classList.add("valid");
    inputBlur.classList.remove("invalid");
    return;
  }
  inputBlur.classList.add("invalid");
  inputBlur.classList.remove("valid");
}
