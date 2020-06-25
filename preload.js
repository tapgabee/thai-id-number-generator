const { clipboard } = require("electron");
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  let textId = generateID();
  clipboard.writeText(textId);
  replaceText("thai-id", textId);

  const btn = document.getElementById("generate-id");
  btn.addEventListener("click", () => {
    textId = generateID();
    clipboard.writeText(textId);
    replaceText("thai-id", textId);
    new Notification("Copied!", {
      body: `ID: ${textId}`,
    });
  });
});

function generateID() {
  var d1 = Math.floor(Math.random() * 10);
  var d2 = Math.floor(Math.random() * 10);
  var d3 = Math.floor(Math.random() * 10);
  var d4 = Math.floor(Math.random() * 10);
  var d5 = Math.floor(Math.random() * 10);
  var d6 = Math.floor(Math.random() * 10);
  var d7 = Math.floor(Math.random() * 10);
  var d8 = Math.floor(Math.random() * 10);
  var d9 = Math.floor(Math.random() * 10);
  var d10 = Math.floor(Math.random() * 10);
  var d11 = Math.floor(Math.random() * 10);
  var d12 = Math.floor(Math.random() * 10);
  var n13 =
    11 -
    ((d1 * 13 +
      d2 * 12 +
      d3 * 11 +
      d4 * 10 +
      d5 * 9 +
      d6 * 8 +
      d7 * 7 +
      d8 * 6 +
      d9 * 5 +
      d10 * 4 +
      d11 * 3 +
      d12 * 2) %
      11);
  if (n13 == 10) {
    var d13 = 0;
  } else if (n13 == 11) {
    var d13 = 1;
  } else {
    var d13 = n13;
  }
  return `${d1}${d2}${d3}${d4}${d5}${d6}${d7}${d8}${d9}${d10}${d11}${d12}${d13}`;
}
