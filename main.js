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
    rootMargin: "-100px",
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
  btn.addEventListener('click', function(){
    nav.classList.remove('stick')
  })
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
    return alert("enter all input field");
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
