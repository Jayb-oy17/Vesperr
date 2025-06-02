"use strict";

// NAV INTERSECTION OBSERVER

const navChange = document.querySelector(".hero");

const navObserver = new IntersectionObserver(
  function (entry) {
    const [enter] = entry;
    if (!enter.isIntersecting) {
      document.body.classList.add("NavStick");
    } else {
      document.body.classList.remove("NavStick");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  }
);

navObserver.observe(navChange);

// NAV TOGGLE
const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".navToggle");

navBtn.addEventListener("click", function () {
  nav.classList.toggle("stick");
});

// NAV STICK REMOVER
const navLink = document.querySelectorAll(".navLink");
navLink.forEach((btn) => {
  btn.addEventListener("click", function () {
    nav.classList.remove("stick");
  });
});

// FORM VALIDATION
const nam = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const image = document.querySelector(".image-upload");
const message = document.querySelector(".meassge");

const submit = document.querySelector(".ctbtn");

const allData = [];

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    !nam.value ||
    !email.value ||
    !subject.value ||
    !image.value ||
    !message
  ) {
    alert("enter all input field");
  } else {
    alert("Sent successfully");
  }

  console.log(image.value);

  const data = {
    fullName: nam.value,
    email: email.value,
    subject: subject.value,
    image: image.value,
    message: message.value,
  };
  allData.push(data);
  console.log(data, allData);
  nam.value = email.value = subject.value = message.value = image.value = "";
});

// SWIPER JS RESPONSIVENESS
const swiperEl = document.querySelector("swiper-container");
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    300: {
      slidesPerView: 1,
    },
    200: {
      slidesPerView: 1,
    },
  },
});
swiperEl.initialize();
