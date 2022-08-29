const IMAGE = document.getElementById("main-image-wrapper");
const FIRST_STEP = document.getElementById("first-step-image-wrapper");
const ADD_TEXT = document.getElementById("add-text-image-wrapper");
const SECOND_STEP = document.getElementById("second-step-image-wrapper");
const TEMPLATE1 = document.getElementById("template1-wrapper");
const TEMPLATE2 = document.getElementById("template2-wrapper");
const TEMPLATE3 = document.getElementById("template3-wrapper");
const TEMPLATE4 = document.getElementById("template4-wrapper");
const TEMPLATE5 = document.getElementById("template5-wrapper");
const TEMPLATE6 = document.getElementById("template6-wrapper");
const TEMPLATE7 = document.getElementById("template7-wrapper");
const TEMPLATE8 = document.getElementById("template8-wrapper");
const TEMPLATE9 = document.getElementById("template9-wrapper");
const TEMPLATE10 = document.getElementById("template10-wrapper");

const ANIMATION_TEMPLATES = [
  {
    name: TEMPLATE1,
    initialPosition: { x: 200, y: 200, opacity: 0 },
    finalPosition: { x: 100, y: 100, opacity: 1 },
  },
  {
    name: TEMPLATE2,
    initialPosition: { x: 100, y: 200, opacity: 0 },
    finalPosition: { x: 100, y: 100, opacity: 1 },
  },
  {
    name: TEMPLATE3,
    initialPosition: { x: 200, y: 100, opacity: 0 },
    finalPosition: { x: 100, y: 200, opacity: 1 },
  },
  {
    name: TEMPLATE4,
    initialPosition: { x: -100, y: -200, opacity: 0 },
    finalPosition: { x: -100, y: 100, opacity: 1 },
  },
  {
    name: TEMPLATE5,
    initialPosition: { x: -100, y: 200, opacity: 0 },
    finalPosition: { x: 200, y: 100, opacity: 1 },
  },
  {
    name: TEMPLATE6,
    initialPosition: { x: 100, y: -200, opacity: 0 },
    finalPosition: { x: 100, y: 100, opacity: 1 },
  },
  {
    name: TEMPLATE7,
    initialPosition: { x: 100, y: 200, opacity: 0 },
    finalPosition: { x: 100, y: -100, opacity: 1 },
  },
  {
    name: TEMPLATE8,
    initialPosition: { x: 200, y: 200, opacity: 0 },
    finalPosition: { x: -100, y: -100, opacity: 1 },
  },
  {
    name: TEMPLATE9,
    initialPosition: { x: -100, y: 100, opacity: 0 },
    finalPosition: { x: 100, y: 100, opacity: 1 },
  },
  {
    name: TEMPLATE10,
    initialPosition: { x: 100, y: 100, opacity: 0 },
    finalPosition: { x: 200, y: 100, opacity: 1 },
  },
];

const playAnimation = () => {
  gsap
    .timeline()
    .from(IMAGE, { scale: 2 })
    .to(IMAGE, {
      clipPath: "polygon(0% 0%,200% 0%,200% 200%,0% 200%)",
      opacity: 1,
      duration: 1,
    })
    .to(IMAGE, { scale: 1, duration: 1 })
    .to(IMAGE, {
      duration: 1,
      y: 10,
      stagger: { each: 0.15, yoyo: true, repeat: -1 },
      ease: "sine.inOut",
    });

  setTimeout(() => {
    gsap.to(FIRST_STEP, { duration: 1, x: 60, opacity: 1 });
    gsap
      .timeline()
      .from(ADD_TEXT, { scale: 2 })
      .to(ADD_TEXT, {
        clipPath: "polygon(0% 0%,200% 0%,200% 200%,0% 200%)",
        opacity: 1,
        duration: 1,
      })
      .to(ADD_TEXT, { scale: 0.95, duration: 1 })
      .to(ADD_TEXT, {
        duration: 1,
        y: 10,
        stagger: { each: 0.15, yoyo: true, repeat: -1 },
        ease: "sine.inOut",
      });
  }, 990);

  setTimeout(() => {
    gsap.to(SECOND_STEP, { duration: 1, x: 40, opacity: 1 });
    ANIMATION_TEMPLATES.forEach((template) => {
      gsap
        .timeline()
        .fromTo(
          template.name,
          template.initialPosition,
          template.finalPosition
        );
      gsap.timeline().to(template.name, {
        x: "random(20, 10, 3)",
        y: "random(20, 10, 3)",
        ease: "none",
        repeat: -1,
        repeatRefresh: true,
        duration: 1,
      });
    });
  }, 2000);
};

playAnimation();
