const IMAGE = document.getElementById("image");
const FIRST_STEP = document.getElementById("first-step-image");
const ADDING_TEXT = document.getElementById("adding-text-image");
const SECOND_STEP = document.getElementById("second-step-image");
const TEMPLATE1 = document.getElementById("template1");
const TEMPLATE2 = document.getElementById("template2");
const TEMPLATE3 = document.getElementById("template3");
const TEMPLATE4 = document.getElementById("template4");
const TEMPLATE5 = document.getElementById("template5");
const TEMPLATE6 = document.getElementById("template6");
const TEMPLATE7 = document.getElementById("template7");
const TEMPLATE8 = document.getElementById("template8");
const TEMPLATE9 = document.getElementById("template9");
const TEMPLATE10 = document.getElementById("template10");

const TEMPLATES = [
  {
    name: TEMPLATE1,
    property: { duration: 1, x: -300, y: -300 },
  },
  {
    name: TEMPLATE2,
    property: { duration: 1, x: 300, y: 300 },
  },
  {
    name: TEMPLATE3,
    property: { duration: 1, x: -300, y: 300 },
  },
  {
    name: TEMPLATE4,
    property: { duration: 1, x: 300, y: -300 },
  },
  {
    name: TEMPLATE5,
    property: { duration: 1, x: 300, y: 300 },
  },
  {
    name: TEMPLATE6,
    property: { duration: 1, x: 300, y: -300 },
  },
  {
    name: TEMPLATE7,
    property: { duration: 1, x: 300, y: -300 },
  },
  {
    name: TEMPLATE8,
    property: { duration: 1, x: 300, y: 300 },
  },
  {
    name: TEMPLATE9,
    property: { duration: 1, x: -300, y: 300 },
  },
  {
    name: TEMPLATE10,
    property: { duration: 1, x: -300, y: 300 },
  },
];

const playAnimation = () => {
  IMAGE.style.visibility = "visible";
  gsap
    .timeline()
    .from(".image", { scale: 2 })
    .to(".image-wrapper", {
      clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    })
    .to(".image-wrapper", { scale: 0.95, duration: 2 });

  setTimeout(() => {
    FIRST_STEP.style.visibility = "visible";
    gsap.to(FIRST_STEP, { duration: 1, x: 40 });
  }, 2000);

  setTimeout(() => {
    ADDING_TEXT.style.visibility = "visible";
    gsap
      .timeline()
      .from(".adding-text-image", { scale: 2 })
      .to(".adding-text-wrapper", {
        clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
      })
      .to(".adding-text-wrapper", { scale: 0.95, duration: 2 });
  }, 3000);

  setTimeout(() => {
    SECOND_STEP.style.visibility = "visible";
    gsap.to(SECOND_STEP, { duration: 1, x: 40 });
  }, 4000);

  setTimeout(() => {
    TEMPLATES.forEach((template) => {
      template.name.style.visibility = "visible";
      gsap.from(template.name, template.property);
    });
  }, 5000);
};

playAnimation();
