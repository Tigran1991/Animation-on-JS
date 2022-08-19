const LEFT_IAMGE = document.getElementById("left-image");
const FRAME1 = document.getElementById("frame1-image");
const CENTER_IMAGE = document.getElementById("center-image");
const FRAME2 = document.getElementById("frame2-image");
const RIGHT_IMAGE1 = document.getElementById("first");
const RIGHT_IMAGE2 = document.getElementById("second");
const RIGHT_IMAGE3 = document.getElementById("third");

let todo1 = 1000;
let todo2 = 1000;
let todo3 = 1000;

const stopLeft = () => {
  clearInterval(toBrightLeft);
};

let initialPosition = 0;

let initialBrightnessLeft = 0;
let initialBrightnessCenter = 0;

const toBrightLeft = setInterval(() => {
  LEFT_IAMGE.style.visibility = "visible";
  LEFT_IAMGE.style.filter = `brightness(${initialBrightnessLeft}%)`;
  initialBrightnessLeft += 6;
  if (initialBrightnessLeft === 90) {
    stopLeft();
    FRAME1.style.visibility = "visible";
    setTimeout(() => {
      CENTER_IMAGE.style.visibility = "visible";
    }, 1000);
    const stopCenter = () => {
      clearInterval(toBrightCenter);
    };
    const toBrightCenter = setInterval(() => {
      CENTER_IMAGE.style.filter = `brightness(${initialBrightnessCenter}%)`;
      initialBrightnessCenter += 6;
      if (initialBrightnessCenter === 90) {
        stopCenter();
        FRAME2.style.visibility = "visible";
        setTimeout(() => {
          const stop1 = () => {
            clearInterval(moveToLeft1);
          };

          const stop2 = () => {
            clearInterval(moveToLeft2);
          };

          const stop3 = () => {
            clearInterval(moveToLeft3);
          };

          const moveToLeft1 = setInterval(() => {
            RIGHT_IMAGE1.style.right = initialPosition + "px";
            RIGHT_IMAGE1.style.top = initialPosition + "px";
            initialPosition++;
            todo1--;
            if (todo1 === 940) {
              stop1();
            }
          }, 10);

          const moveToLeft2 = setInterval(() => {
            RIGHT_IMAGE2.style.right = initialPosition + "px";
            initialPosition++;
            todo2--;
            if (todo2 === 900) {
              stop2();
            }
          }, 10);

          const moveToLeft3 = setInterval(() => {
            RIGHT_IMAGE3.style.left = initialPosition + "px";
            RIGHT_IMAGE3.style.top = initialPosition + "px";
            initialPosition++;
            todo3--;
            if (todo3 === 920) {
              stop3();
            }
          }, 10);
        }, 1000);
      }
    }, 100);
  }
}, 100);
