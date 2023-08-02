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
