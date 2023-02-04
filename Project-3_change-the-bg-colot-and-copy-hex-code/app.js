/**
 * Project Requirements:
 * - Change the background color by generating the random hex color by clicking a button
 * also show the hex code to a disabled input field
 */

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  const output = document.getElementById("output");

  btn.addEventListener("click", function () {
    const bgColor = generateHEXColor();
    root.style.backgroundColor = bgColor;

    output.value = bgColor;
  });
}

function generateHEXColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

