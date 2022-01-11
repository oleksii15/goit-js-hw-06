const changeInput = document.querySelector("#font-size-control");
const changeText = document.querySelector("#text");
changeInput.addEventListener("input", onChangeSize);
function onChangeSize() {
  const fontSize = changeInput.value;
  changeText.style.fontSize = `${fontSize}px`;
}
