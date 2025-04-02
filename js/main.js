const myDelay = 7000;
let timer;

const switchAnimation = () => {
  clearTimeout(timer);
  let activeSlide = document.querySelectorAll(
    ".mv02 .swiper-slide[class*=-active]"
  );
  for (let i = 0; i < activeSlide.length; i++) {
    activeSlide[i].classList.remove("anm-finished");
    activeSlide[i].classList.add("anm-started");
  }
  timer = setTimeout(() => {
    for (let i = 0; i < activeSlide.length; i++) {
      activeSlide[i].classList.remove("anm-started");
      activeSlide[i].classList.add("anm-finished");
    }
  }, myDelay - 1000);
};

const finishAnimation = () => {
  let activeSlide = document.querySelectorAll(
    ".mv02 .swiper-slide.anm-started"
  );
  for (let i = 0; i < activeSlide.length; i++) {
    activeSlide[i].classList.remove("anm-started");
    activeSlide[i].classList.add("anm-finished");
  }
};

const mySwiper = new Swiper(".mv02 .swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  loopAdditionalSlides: 1,
  speed: 2000,
  autoplay: {
    delay: myDelay,
    disableOnInteraction: false,
    waitForTransition: false,
  },
  followFinger: false,
  pagination: {
    el: ".mv02 .swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: () => {
      finishAnimation();
    },
    slideChangeTransitionStart: () => {
      switchAnimation();
    },
  },
});
