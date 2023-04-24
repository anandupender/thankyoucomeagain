var screenWidth;
var screenHeight;
var canvas = document.querySelector("#canvas");

var boxSize = 30;
var totalBoxes;
var myBackgroundColor = [0, 0, 0];

var deleteDelay = 400;
var deleteToggle = true;

window.addEventListener("load", init);
var isTouchDevice = "ontouchstart" in document.documentElement;

function init() {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  totalBoxes = (screenWidth * screenHeight) / (boxSize * boxSize);
  console.log(totalBoxes);
  fillScreen();
}

function fillScreen() {
  canvas.innerHTML = "";
  for (var i = 0; i < totalBoxes; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.width = boxSize + "px";
    pixel.style.height = boxSize + "px";
    if (isTouchDevice) {
      pixel.ontouchstart = mouseOver;
      if (deleteToggle) {
        pixel.ontouchend = mouseLeave;
      }
    } else {
      pixel.onmouseover = mouseOver;
      if (deleteToggle) {
        pixel.onmouseleave = mouseLeave;
      }
    }
    canvas.appendChild(pixel);
  }
}

function mouseOver() {
  this.style.backgroundColor = rgbToHex(myBackgroundColor);
    // this.style.borderColor = rgbToHex(myBackgroundColor);
}

function mouseLeave() {
  window.setTimeout(
    function (el) {
      el.style.backgroundColor = "transparent";
    // el.style.borderColor = "transparent";
    },
    deleteDelay,
    this
  );
}

function rgbToHex(array) {
  return (
    "#" +
    ((1 << 24) + (array[0] << 16) + (array[1] << 8) + array[2])
      .toString(16)
      .slice(1)
  );
}