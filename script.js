const LEFT_IAMGE = document.getElementById("left-image");
const FRAME1 = document.getElementById("frame1-image");
const CENTER_IMAGE = document.getElementById("center-image");
const FRAME2 = document.getElementById("frame2-image");
const TODO1 = document.getElementById("todo1");
const TODO2 = document.getElementById("todo2");
const TODO3 = document.getElementById("todo3");
const TODO4 = document.getElementById("todo4");
const TODO5 = document.getElementById("todo5");
const TODO6 = document.getElementById("todo6");
const TODO7 = document.getElementById("todo7");
const TODO8 = document.getElementById("todo8");
const TODO9 = document.getElementById("todo9");
const TODO10 = document.getElementById("todo10");

const TODOS = [
  {
    name: TODO1,
    property: { duration: 1, x: -300, y: -300 },
  },
  {
    name: TODO2,
    property: { duration: 1, x: 300, y: 300 },
  },
  {
    name: TODO3,
    property: { duration: 1, x: -300, y: 300 },
  },
  {
    name: TODO4,
    property: { duration: 1, x: -300, y: -300 },
  },
  {
    name: TODO5,
    property: { duration: 1, x: 300, y: 300 },
  },
  {
    name: TODO6,
    property: { duration: 1, x: -300, y: 300 },
  },
  {
    name: TODO7,
    property: { duration: 1, x: -300, y: -300 },
  },
  {
    name: TODO8,
    property: { duration: 1, x: 300, y: 300 },
  },
  {
    name: TODO9,
    property: { duration: 1, x: -300, y: 300 },
  },
  {
    name: TODO10,
    property: { duration: 1, x: -300, y: 300 },
  },
];

gsap
  .timeline()
  .from(".left-image", { scale: 2 })
  .to(".left-image-wrapper", {
    clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
  })
  .to(".left-image-wrapper", { scale: 0.95, duration: 2 });

setTimeout(() => {
  FRAME1.style.visibility = "visible";
}, 2000);

setTimeout(() => {
  CENTER_IMAGE.style.visibility = "visible";
  gsap
    .timeline()
    .from(".center-image", { scale: 2 })
    .to(".center-image-wrapper", {
      clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    })
    .to(".center-image-wrapper", { scale: 0.95, duration: 2 });
}, 3000);

setTimeout(() => {
  FRAME2.style.visibility = "visible";
}, 4000);

setTimeout(() => {
  TODOS.forEach((todo) => {
    todo.name.style.visibility = "visible";
    gsap.from(todo.name, todo.property);
  });
}, 5000);
