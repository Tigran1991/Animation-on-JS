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
const RELOAD = document.getElementById("reload-btn");

const ANIMATION_ELEMENTS = [
  {
    name: IMAGE,
    timer: 500,
  },
  {
    name: FIRST_STEP,
    timer: 1000,
  },
  {
    name: ADDING_TEXT,
    timer: 1500,
  },
  {
    name: SECOND_STEP,
    timer: 2000,
  },
];

const ANIMATION_TEMPLATES = [
  {
    name: TEMPLATE1,
    property: { duration: 1, x: -300, y: -300 },
    moveToX: -20,
    moveToY: 20,
  },
  {
    name: TEMPLATE2,
    property: { duration: 1, x: 300, y: 300 },
    moveToX: 20,
    moveToY: 20,
  },
  {
    name: TEMPLATE3,
    property: { duration: 1, x: -300, y: 300 },
    moveToX: -20,
    moveToY: 20,
  },
  {
    name: TEMPLATE4,
    property: { duration: 1, x: 300, y: -300 },
    moveToX: 20,
    moveToY: -20,
  },
  {
    name: TEMPLATE5,
    property: { duration: 1, x: 300, y: 300 },
    moveToX: 20,
    moveToY: 20,
  },
  {
    name: TEMPLATE6,
    property: { duration: 1, x: 300, y: -300 },
    moveToX: 20,
    moveToY: -20,
  },
  {
    name: TEMPLATE7,
    property: { duration: 1, x: 300, y: -300 },
    moveToX: 20,
    moveToY: -20,
  },
  {
    name: TEMPLATE8,
    property: { duration: 1, x: 300, y: 300 },
    moveToX: 20,
    moveToY: 20,
  },
  {
    name: TEMPLATE9,
    property: { duration: 1, x: -300, y: 300 },
    moveToX: -20,
    moveToY: 20,
  },
  {
    name: TEMPLATE10,
    property: { duration: 1, x: -300, y: 300 },
    moveToX: 20,
    moveToY: 20,
  },
];

const playAnimation = () => {
  IMAGE.style.opacity = 1;
  gsap
    .timeline()
    .from(".image", { scale: 2 })
    .to(".image-wrapper", {
      clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    })
    .to(".image-wrapper", { scale: 0.95, duration: 1 })
    .to(".image-wrapper", {
      duration: 2,
      y: 10,
      stagger: { each: 0.15, yoyo: true, repeat: -1 },
      ease: "sine.inOut",
    });

  setTimeout(() => {
    FIRST_STEP.style.opacity = 1;
    gsap.to(FIRST_STEP, { duration: 1, x: 40 });
  }, 990);

  setTimeout(() => {
    ADDING_TEXT.style.opacity = 1;
    gsap
      .timeline()
      .from(".adding-text-image", { scale: 2 })
      .to(".adding-text-wrapper", {
        clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
      })
      .to(".adding-text-wrapper", { scale: 0.95, duration: 2 })
      .to(".adding-text-wrapper", {
        duration: 2,
        y: 10,
        stagger: { each: 0.15, yoyo: true, repeat: -1 },
        ease: "sine.inOut",
      });
  }, 1100);

  setTimeout(() => {
    SECOND_STEP.style.opacity = 1;
    gsap.to(SECOND_STEP, { duration: 1, x: 40 });
  }, 2000);

  setTimeout(() => {
    ANIMATION_TEMPLATES.forEach((template) => {
      template.name.style.opacity = 1;
      gsap.from(template.name, template.property);
    });
  }, 2350);

  setTimeout(() => {
    ANIMATION_TEMPLATES.forEach((template) => {
      gsap.to(template.name, {
        duration: 2,
        x: template.moveToX,
        y: template.moveToY,
        ease: "none",
        stagger: {
          each: 0.5,
          repeat: -1,
          yoyo: true,
        },
      });
    });
  }, 4000);

  setTimeout(() => {
    ANIMATION_ELEMENTS.forEach((element) => {
      setTimeout(() => {
        gsap.to(element.name, { opacity: 0 });
      }, element.timer);
    });
    setTimeout(() => {
      ANIMATION_TEMPLATES.forEach((template) => {
        gsap.to(template.name, { opacity: 0 });
      });
    }, 2500);
  }, 4000);

  // setTimeout(() => {
  //   setTimeout(() => {
  //     gsap.to(IMAGE, { opacity: 1 });
  //   }, 500);
  //   setTimeout(() => {
  //     gsap.to(FIRST_STEP, { opacity: 1 });
  //   }, 1000);
  //   setTimeout(() => {
  //     gsap.to(ADDING_TEXT, { opacity: 1 });
  //   }, 1500);
  //   setTimeout(() => {
  //     gsap.to(SECOND_STEP, { opacity: 1 });
  //   }, 2000);
  //   setTimeout(() => {
  //     TEMPLATES.forEach((template) => {
  //       gsap.to(template.name, { opacity: 1 });
  //     });
  //   }, 2500);
  // }, 6000);

  setTimeout(() => {
    ANIMATION_ELEMENTS.forEach((element) => {
      gsap.to(element.name, { opacity: 1 });
    });
    ANIMATION_TEMPLATES.forEach((template) => {
      gsap.to(template.name, { opacity: 1 });
    });
    RELOAD.style.opacity = 1;
  }, 7000);
};

playAnimation();

const playAgain = () => {
  ANIMATION_ELEMENTS.forEach((element) => {
    element.name.style.opacity = 0;
  });
  ANIMATION_TEMPLATES.forEach((template) => {
    template.name.style.opacity = 0;
  });
  RELOAD.style.opacity = 0;
  playAnimation();
};
