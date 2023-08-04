const btnProgram = document.querySelector("#btnProgram");
const btnCreative = document.querySelector("#btnCreative");
const btnPr = document.querySelector("#btnPr");
const btnHr = document.querySelector("#btnHr");
const programDiv = document.querySelector("#program");
const creativeDiv = document.querySelector("#creative");
const prDiv = document.querySelector("#pr");
const hrDiv = document.querySelector("#hr");
const tham = document.querySelector(".tham");
const navmenu = document.querySelector("#navbar");
const navLinks = document.querySelectorAll("#navbar a");

function sembunyikanSemuaDiv() {
  programDiv.classList.add("hidden");
  creativeDiv.classList.add("hidden");
  prDiv.classList.add("hidden");
  hrDiv.classList.add("hidden");
}

function toggleProgramDiv() {
  if (programDiv.classList.contains("hidden")) {
    sembunyikanSemuaDiv();
    programDiv.classList.remove("hidden");
  } else {
    programDiv.classList.add("hidden");
  }
}

function toggleCreativeDiv() {
  if (creativeDiv.classList.contains("hidden")) {
    sembunyikanSemuaDiv();
    creativeDiv.classList.remove("hidden");
  } else {
    creativeDiv.classList.add("hidden");
  }
}

function togglePrDiv() {
  if (prDiv.classList.contains("hidden")) {
    sembunyikanSemuaDiv();
    prDiv.classList.remove("hidden");
  } else {
    prDiv.classList.add("hidden");
  }
}

function toggleHrDiv() {
  if (hrDiv.classList.contains("hidden")) {
    sembunyikanSemuaDiv();
    hrDiv.classList.remove("hidden");
  } else {
    hrDiv.classList.add("hidden");
  }
}

btnProgram.addEventListener("click", toggleProgramDiv);
btnCreative.addEventListener("click", toggleCreativeDiv);
btnPr.addEventListener("click", togglePrDiv);
btnHr.addEventListener("click", toggleHrDiv);

tham.addEventListener("click", () => {
  tham.classList.toggle("tham-active");
  navmenu.classList.toggle("hidden");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    tham.classList.remove("tham-active");
    navmenu.classList.add("hidden");
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!navmenu.contains(target) && !tham.contains(target)) {
    tham.classList.remove("tham-active");
    navmenu.classList.add("hidden");
  }
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
