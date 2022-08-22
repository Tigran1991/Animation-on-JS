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

const ANIMATION_ELEMENTS = [IMAGE, FIRST_STEP, ADDING_TEXT, SECOND_STEP];

const TEMPLATES = [
  {
    name: TEMPLATE1,
    property: { duration: 1, x: -300, y: -300 },
    moveToX: -10,
    moveToY: 10,
  },
  {
    name: TEMPLATE2,
    property: { duration: 1, x: 300, y: 300 },
    moveToX: 10,
    moveToY: 10,
  },
  {
    name: TEMPLATE3,
    property: { duration: 1, x: -300, y: 300 },
    moveToX: -10,
    moveToY: 10,
  },
  {
    name: TEMPLATE4,
    property: { duration: 1, x: 300, y: -300 },
    moveToX: 10,
    moveToY: -10,
  },
  {
    name: TEMPLATE5,
    property: { duration: 1, x: 300, y: 300 },
    moveToX: 10,
    moveToY: 10,
  },
  {
    name: TEMPLATE6,
    property: { duration: 1, x: 300, y: -300 },
    moveToX: 10,
    moveToY: -10,
  },
  {
    name: TEMPLATE7,
    property: { duration: 1, x: 300, y: -300 },
    moveToX: 10,
    moveToY: -10,
  },
  {
    name: TEMPLATE8,
    property: { duration: 1, x: 300, y: 300 },
    moveToX: 10,
    moveToY: 10,
  },
  {
    name: TEMPLATE9,
    property: { duration: 1, x: -300, y: 300 },
    moveToX: -10,
    moveToY: 10,
  },
  {
    name: TEMPLATE10,
    property: { duration: 1, x: -300, y: 300 },
    moveToX: 10,
    moveToY: 10,
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
    TEMPLATES.forEach((template) => {
      template.name.style.opacity = 1;
      gsap.from(template.name, template.property);
    });
  }, 2350);

  setTimeout(() => {
    TEMPLATES.forEach((template) => {
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
    setTimeout(() => {
      gsap.to(IMAGE, { opacity: 0 });
    }, 500);
    setTimeout(() => {
      gsap.to(FIRST_STEP, { opacity: 0 });
    }, 1000);
    setTimeout(() => {
      gsap.to(ADDING_TEXT, { opacity: 0 });
    }, 1500);
    setTimeout(() => {
      gsap.to(SECOND_STEP, { opacity: 0 });
    }, 2000);
    setTimeout(() => {
      TEMPLATES.forEach((template) => {
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
    gsap.to(IMAGE, { opacity: 1 });
    gsap.to(FIRST_STEP, { opacity: 1 });
    gsap.to(ADDING_TEXT, { opacity: 1 });
    gsap.to(SECOND_STEP, { opacity: 1 });
    TEMPLATES.forEach((template) => {
      gsap.to(template.name, { opacity: 1 });
    });
    RELOAD.style.opacity = 1;
  }, 7000);
};

playAnimation();

const playAgain = () => {
  IMAGE.style.opacity = 0;
  FIRST_STEP.style.opacity = 0;
  ADDING_TEXT.style.opacity = 0;
  SECOND_STEP.style.opacity = 0;
  TEMPLATES.forEach((template) => {
    template.name.style.opacity = 0;
  });
  RELOAD.style.opacity = 0;
  playAnimation();
};

// setInterval(playAnimation, 7000);
