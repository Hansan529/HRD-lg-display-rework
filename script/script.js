//^ top btn 버튼 액션
function topBtnOpacity() {
  let posY = $(this).scrollTop();
  if (posY >= 100) {
    $(".top-btn").stop().animate(
      {
        opacity: 1,
      },
      300
    );
  } else {
    $(".top-btn").stop().animate(
      {
        opacity: 0,
      },
      300
    );
  }
}
const topBtn = document.querySelector(".top-btn");
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
$(window).on("scroll", topBtnOpacity);

//^ main-banner
let toggle = true;
let bAutoPlay = 0;
let bNum = 0;
const bLength = $(".main-banner > ul > li").length;
const bWidth = $(".main-banner > ul > li").width();

const bObj = $(".main-banner>ul>li").first().clone();
$(".main-banner>ul").append(bObj);
const bCopyLength = $(".main-banner > ul > li").length;

function bAnimation() {
  $(".main-banner > ul > li")
    .eq(bNum)
    .fadeIn(800)
    .css({
      display: "flex",
    })
    .siblings()
    .hide();
}
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
function bToggle() {
  switch (toggle) {
    case true:
      clearInterval(bAutoPlay);
      toggle = false;
      $(".main-banner .slide-btn-ps").removeClass("start").addClass("stop");
      break;
    default:
      bAutoPlay = setInterval(bNextBtn, 2000);
      $(".main-banner .slide-btn-ps").removeClass("stop").addClass("start");
      toggle = true;
      break;
  }
}
function bDownScroll() {
  let bHeight = $(".main-banner>ul").outerHeight();
  $("html").stop().animate({
    scrollTop: bHeight,
  });
  topBtnOpacity();
}

$(".main-banner .next").on("click", bNextBtn);
$(".main-banner .prev").on("click", bPrevBtn);
$(".main-banner .slide-btn-ps").on("click", bToggle);
$(".main-down").on("click", bDownScroll);

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
  $(".product > ul > li > ul.active").parent().children("button").css({
    color: "#fff",
    borderBottomColor: "#fff",
  });
});

//^ technology oled
// const cardList = document.querySelectorAll(".technology-oled2 > ul > li");
// let cardNum = 0;
// let transX = 0;
// let transZ = 0;
// let rotateY = 0;

const tecNextBtn = document.querySelector(".technology-oled2 .next");
const tecPrevBtn = document.querySelector(".technology-oled2 .prev");
const tecList = document.querySelectorAll(".technology-oled2 > ul > li");
const tecTextBox = document.querySelectorAll(
  ".technology-oled2 > ul > li .text-box"
);

let cardIndex = 1;

function cardPrevMove() {
  cardIndex = (cardIndex % 6) + 1;
  for (let i = 0; i < tecList.length; i++) {
    tecList[i].classList.remove(`card-${(i + cardIndex - 1) % 6}`);
    tecList[i].classList.add(`card-${((i + cardIndex - 1) % 6) + 1}`);
    if (tecList[i].classList.length >= 2) {
      tecList[i].classList.remove("card-6");
    }
    tecTextBox[i].style.backgroundImage = `url(../images/oled-${i + 1}.jpg)`;
  }
}
function cardNextMove() {
  cardIndex = (cardIndex % 6) + 1;
  tecList[0].classList.remove(`card-${cardIndex + 4}`);
  for (let i = 0; i < tecList.length; i++) {
    tecList[i].classList.remove(`card-${i + cardIndex - 1}`);
    tecList[i].classList.add(`card-${((i + cardIndex + 3) % 6) + 1}`);
    tecTextBox[i].style.backgroundImage = `url(../images/oled-${i + 1}.jpg)`;
  }
}

tecNextBtn.addEventListener("click", cardNextMove);
tecPrevBtn.addEventListener("click", cardPrevMove);

// document
//   .querySelector(".technology-oled2 .next")
//   .addEventListener("click", cardMove);

//^ 반응형 체크
let respon = false;
const responWidth = $("body").width();
function responCheck() {
  if (responWidth <= 1280) {
    respon = true;
    toggle = true;
    bToggle();
  } else {
    respon = false;
    toggle = false;
    bToggle();
  }
}
responCheck();
