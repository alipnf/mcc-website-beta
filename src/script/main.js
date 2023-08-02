const btnProgram = document.querySelector("#btnProgram");
const btnCreative = document.querySelector("#btnCreative");
const btnPr = document.querySelector("#btnPr");
const btnHr = document.querySelector("#btnHr");
const programDiv = document.querySelector("#program");
const creativeDiv = document.querySelector("#creative");
const prDiv = document.querySelector("#pr");
const hrDiv = document.querySelector("#hr");

btnProgram.addEventListener("click", () => {
  programDiv.classList.toggle("hidden");
});
btnCreative.addEventListener("click", () => {
  creativeDiv.classList.toggle("hidden");
});
btnPr.addEventListener("click", () => {
  prDiv.classList.toggle("hidden");
});
btnHr.addEventListener("click", () => {
  hrDiv.classList.toggle("hidden");
});

function changeText(elementId, newText, fontSize, fontWeight) {
  const textElement = document.getElementById(elementId);
  const originalText = textElement.innerText;

  if (textElement.innerText === originalText) {
    textElement.innerText = newText;
    textElement.style.fontSize = fontSize;
    textElement.style.fontWeight = fontWeight;
    textElement.classList.add("lg:p-0");
    textElement.classList.remove("py-8");
  }
}

function resetText(elementId, originalText, fontSize, fontWeight) {
  const textElement = document.getElementById(elementId);

  if (textElement.innerText !== originalText) {
    textElement.innerText = originalText;
    textElement.style.fontSize = fontSize;
    textElement.style.fontWeight = fontWeight;
    textElement.classList.remove("lg:p-0");
    textElement.classList.add("py-8");
  }
}
