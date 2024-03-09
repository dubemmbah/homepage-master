"use strict";

const headerLeft = document.querySelector(".overview-left");
const headerRight = document.querySelector(".overview-right");
const headingMain = document.querySelector(".heading-main");
const introMain = document.querySelector(".intro-main");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const mobileBtnPrev = document.querySelector(".mobile-btn-prev");
const mobileBtnNext = document.querySelector(".mobile-btn-next");
const btnHamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const btnClose = document.querySelector(".btn-close");
const menuOverlay = document.querySelector(".menu-overlay");
const headerBgImgs = [
  "./images/desktop-image-hero-1.jpg",
  "./images/desktop-image-hero-2.jpg",
  "./images/desktop-image-hero-3.jpg",
];

// const mobileHeaderBgImgs = [
//   "./images/desktop-mobile-image-hero-1.jpg",
//   "./images/desktop-mobile-image-hero-2.jpg",
//   "./images/desktop-mobile-image-hero-3.jpg",
// ];

const headerViews = [
  {
    heading: "Discover innovate ways to decorate",
    intro: `We provide unmatched quality, comfort, and style for property owners
    across the country. Our experts combine form and function in bringing
    your vision to life. Create a room in your own style with our
    collection and make your property a reflection of you and what you
    love.`,
    img: "./images/desktop-image-hero-1.jpg",
    mobileImg: "./images/mobile-image-hero-1.jpg",
  },
  {
    heading: "We are available all across the globe",
    intro: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`,
    img: "./images/desktop-image-hero-2.jpg",
    mobileImg: "./images/mobile-image-hero-2.jpg",
  },
  {
    heading: "Manufactured with the best materials",
    intro: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`,
    img: "./images/desktop-image-hero-3.jpg",
    mobileImg: "./images/mobile-image-hero-3.jpg",
  },
];

let currentImg = 0;

const changeHeaderContent = function (direction) {
  if (direction === "prev") {
    currentImg = (currentImg - 1 + headerBgImgs.length) % headerBgImgs.length;
    // when the direction is 'prev', we want to decrement the currentImg. however, if currentImg is already at 0, we want to loop back to the last image in the 'headerBgImgs' array. 'currentImg - 1' decrements the variable by 1, '+ headerBgImgs.length' ensures that if currentImg is 0, the result becomes 'headerBgImg.length - 1'. Makes sense yeah? lol! So, its effectively pointing to the last image
    // console.log(currentImg);
  } else if (direction === "next") {
    currentImg = (currentImg + 1) % headerBgImgs.length;
  }

  // if (window.matchMedia("(max-width: 59.375em)").matches) {
  //   headerLeft.style.background = `url(${headerViews[currentImg].mobileImg}) no-repeat center/cover`;
  // } else {
  //   headerLeft.style.background = `url(${headerViews[currentImg].img}) no-repeat center/cover`;
  // }
  const imageUrl =
    window.innerWidth <= 950
      ? headerViews[currentImg].mobileImg
      : headerViews[currentImg].img;

  headerLeft.style.background = `url(${imageUrl}) no-repeat center/cover`;

  headingMain.textContent = headerViews[currentImg].heading;
  introMain.textContent = headerViews[currentImg].intro;
};

btnPrev.addEventListener("click", () => {
  changeHeaderContent("prev");
});

btnNext.addEventListener("click", () => {
  changeHeaderContent("next");
});

mobileBtnPrev.addEventListener("click", () => {
  changeHeaderContent("prev");
});

mobileBtnNext.addEventListener("click", () => {
  changeHeaderContent("next");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    changeHeaderContent("prev");
  }

  if (e.key === "ArrowRight") {
    changeHeaderContent("next");
  }
});

btnHamburger.addEventListener("click", () => {
  mobileMenu.classList.add("in-view");

  menuOverlay.style.display = "block";
  document.body.classList.add("menu-open");
});

btnClose.addEventListener("click", () => {
  mobileMenu.classList.remove("in-view");

  menuOverlay.style.display = "none";
  document.body.classList.remove("menu-open");
});

// const changeHeaderContentEveryThreeSeconds = setInterval(() => {
//   changeHeaderContent("next");
// }, 3000);

// setTimeout(() => {
//   clearInterval(changeHeaderContentEveryThreeSeconds);
// }, 9000);
