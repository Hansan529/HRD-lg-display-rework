const pager = document.querySelectorAll(".pager > div");

//^ main-banner
let toggle = true;
let bAutoPlay = 0;
let bNum = 0;
const bLength = $(".main-banner > ul > li").length;
const bWidth = $(".main-banner > ul > li").width();

const bObj = $(".main-banner>ul>li").first().clone();
$(".main-banner>ul").append(bObj);
const bCopyLength = $(".main-banner > ul > li").length;

// 배너 이동 애니메이션
function bAnimation() {
  $(".main-banner > ul > li")
    .eq(bNum)
    .fadeIn(1000)
    .css({
      display: "flex",
    })
    .siblings()
    .hide();
}
// 이전으로 이동
function bPrevBtn() {
  if (bNum == 0) {
    bNum = bLength;
    $(".main-banner > ul").css({
      marginLeft: -bNum * bWidth,
    });
  }
  bNum--;
  bAnimation();
  $(".main-banner #selected-page").text(bNum + 1);
}
// 다음으로 이동
function bNextBtn() {
  bNum++;
  if (bNum == bLength) {
    bNum = 0;
  }
  bAnimation();
  if (bNum < 4) {
    $(".main-banner #selected-page").text(bNum + 1);
  } else {
    $(".main-banner>ul>li").hide();
    $(".main-banner>ul>li").first().fadeIn;
    $(".main-banner #selected-page").text(1);
  }
}
// 자동 이동 토글
function bToggle() {
  switch (toggle) {
    case true:
      clearInterval(bAutoPlay);
      toggle = false;
      $(".main-banner .slide-btn-ps").removeClass("start").addClass("stop");
      break;
    default:
      bAutoPlay = setInterval(bNextBtn, 4000);
      $(".main-banner .slide-btn-ps").removeClass("stop").addClass("start");
      toggle = true;
      break;
  }
}
// 다음 섹션으로 이동
function bDownScroll() {
  let bHeight = $(".main-banner>ul").outerHeight();
  $("html").stop().animate({
    scrollTop: bHeight,
  });
  topBtnOpacity();
}
pager.forEach((select) => {
  select.onclick = (e) => {
    activeClass(e, "select", pager);
  };
});

$(".main-banner .next").on("click", bNextBtn);
$(".main-banner .prev").on("click", bPrevBtn);
$(".main-banner .slide-btn-ps").on("click", bToggle);
$(".main-down").on("click", bDownScroll);
$(".main-banner .slide-btn").on("mouseenter", bToggle);
$(".main-banner .slide-btn").on("mouseleave", bToggle);

//^ product
$(".product > ul > li").on("click", function () {
  let productListNum = $(this).index();
  $(this).children("ul").addClass("active");
  $(this).siblings().children("ul").removeClass("active");
  $(this).children("ul").fadeIn(400);
  $(this).siblings().children("ul").fadeOut(400);
  $(".product > ul > li > ul").parent().children("button").css({
    color: "#ccc",
    borderBottomColor: "#666666",
  });
  if (html.getAttribute("data-theme") == "dark") {
    $(".product > ul > li > ul.active").parent().children("button").css({
      color: "#fff",
      borderBottomColor: "#fff",
    });
  } else {
    $(".product > ul > li > ul.active").parent().children("button").css({
      color: "#000",
      borderBottomColor: "#000",
    });
  }
});

//^ technology oled
// $(".technology-oled2 .text-box").css("display", "none");
const tecNextBtn = document.querySelector(".technology-oled2 .next");
const tecPrevBtn = document.querySelector(".technology-oled2 .prev");
const tecList = document.querySelectorAll(".technology-oled2 > ul > li");
const tecTextBox = document.querySelectorAll(
  ".technology-oled2 > ul > li .text-box"
);
let listName = ["card-1", "card-2", "card-3", "card-4", "card-5", "card-6"];

let cardIndex = 0;

function cardPrevMove() {
  let list = listName.shift();
  listName.push(list);
  for (let i = 0; i < tecList.length; i++) {
    tecList[i].setAttribute("class", "");
    tecList[i].classList.add(listName[i]);
  }
}
function cardNextMove() {
  let list = listName.pop();
  listName.unshift(list);
  for (let i = 0; i < tecList.length; i++) {
    tecList[i].setAttribute("class", "");
    tecList[i].classList.add(listName[i]);
  }
}

tecNextBtn.addEventListener("click", cardNextMove);
tecPrevBtn.addEventListener("click", cardPrevMove);

//^ technology lcd
let lcdNum = 0;
let lcdBar = 0;
const lcdLi = document.querySelector(".overflow > ul > li");
const lcdWidth = $(".technology-lcd2 .overflow > ul> li").outerWidth();
const lcdLength = $(".technology-lcd2 .overflow > ul> li").length;
const lcdBanner = document.querySelector(".technology-lcd2 .overflow > ul");
let lcdBannerList = document
  .querySelector(".technology-lcd2 .overflow > ul > li:first-child")
  .cloneNode(true);
document
  .querySelector(".technology-lcd2 .overflow > ul")
  .appendChild(lcdBannerList);
const lcdCopyLength = $(".technology-lcd2 .overflow > ul> li").length;

// 이동 애니메이션
function lcdBtnMove() {
  $(".technology-lcd2 .overflow > ul")
    .stop()
    .animate({
      marginLeft: -lcdNum * lcdWidth,
    });
  if (lcdBar < 5) {
    $(".slide-bar__now")
      .stop()
      .animate({
        left: lcdBar * 25 + "%",
      });
  }
}
// 다음 버튼
function lcdNextBtn() {
  lcdNum++;
  lcdBar++;
  if (lcdNum > lcdLength) {
    $(".overflow > ul").css({
      marginLeft: 0,
    });
    lcdNum = 1;
  }
  if (lcdBar == lcdLength) {
    $(".slide-bar__now").css({
      left: -25 + "%",
    });
    lcdBar = 0;
  }
  lcdBtnMove();
}
// 이전 버튼
function lcdPrevBtn() {
  if (lcdNum == 0) {
    lcdNum = lcdLength;
    $(".overflow > ul").css({
      marginLeft: -lcdNum * lcdWidth,
    });
    $(".slide-bar__now").css({
      left: lcdNum * 25 + "%",
    });
  }
  switch (lcdBar) {
    case 0:
      lcdBar = lcdLength;
      break;
    default:
      break;
  }
  lcdNum--;
  lcdBar--;
  lcdBtnMove();
}
// 슬라이드바
const lcdSlidebarHandle = $(".technology-lcd2 .slide-bar");

document
  .querySelector(".technology-lcd2 .prev")
  .addEventListener("click", lcdPrevBtn);
document
  .querySelector(".technology-lcd2 .next")
  .addEventListener("click", lcdNextBtn);

//^ esg

function esgAnimate() {
  $(".esg").css(
    {
      height: "initial",
    },
    300
  );
  $(".esg article").css(
    {
      display: "flex",
    },
    300
  );
}

function esgActive() {
  let esgcheck1 = document.querySelector(".esg > ul > li:first-child").classList
    .length;
  let esgcheck2 = document.querySelector(".esg > ul > li:nth-child(2").classList
    .length;
  let esgcheck3 = document.querySelector(".esg > ul > li:last-child").classList
    .length;
  if (esgcheck1 == 1) {
    $(".env").addClass("active").siblings().removeClass("active");
  }
  if (esgcheck2 == 1) {
    $(".social").addClass("active").siblings().removeClass("active");
  }
  if (esgcheck3 == 1) {
    $(".gover").addClass("active").siblings().removeClass("active");
  }
}

$(".esg > ul > li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  esgActive();
});

const html = document.querySelector("html");
const esgImgDom1 = document.querySelector("#esg-1");
const esgImgDom2 = document.querySelector("#esg-2");
const esgImgDom3 = document.querySelector("#esg-3");

function darkModeImg() {
  if (html.getAttribute("data-theme") === "dark") {
    // 다크 모드일 때 이미지를 바꾸세요.
    esgImgDom1.src = "./images/icon_esg-1__white.png";
    esgImgDom2.src = "./images/icon_esg-2__white.png";
    esgImgDom3.src = "./images/icon_esg-3__white.png";
  } else if (html.getAttribute("data-theme") === "") {
    esgImgDom1.src = "./images/icon_esg-1.png";
    esgImgDom2.src = "./images/icon_esg-2.png";
    esgImgDom3.src = "./images/icon_esg-3.png";
  }
}
darkModeImg();

//^ 반응형 체크
let respon = false;
function responCheck() {
  if (window.innerWidth <= 1280) {
    respon = true;
    toggle = true;
    bToggle();
  } else {
    respon = false;
    toggle = false;
    bToggle();
  }
}
window.addEventListener("resize", responCheck);
responCheck();
