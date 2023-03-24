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
    .fadeIn(1000)
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
      bAutoPlay = setInterval(bNextBtn, 4000);
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
  $(".product > ul > li > ul.active").parent().children("button").css({
    color: "#fff",
    borderBottomColor: "#fff",
  });
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
  console.log(listName);
  listName.push(list);
  for (let i = 0; i < tecList.length; i++) {
    tecList[i].setAttribute("class", "");
    tecList[i].classList.add(listName[i]);
  }
}
function cardNextMove() {
  let list = listName.pop();
  console.log(listName);
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

// 이동 애니메이션
function lcdBtnMove() {
  $(".technology-lcd2 .overflow > ul")
    .stop()
    .animate({
      marginLeft: -lcdNum * lcdWidth,
    });
  $(".slide-bar__now")
    .stop()
    .animate({
      left: lcdNum * 25 + "%",
    });
}
// 다음 버튼
function lcdNextBtn() {
  lcdNum++;
  if (lcdNum > lcdLength) {
    $(".overflow > ul").css({
      marginLeft: 0,
    });
    lcdNum = 1;
  }
  if (lcdNum == lcdLength) {
    $(".slide-bar__now").css({
      left: -lcdNum * lcdWidth,
    });
    lcdNum = 0;
  }
  lcdBtnMove();
}
// 이전 버튼
function lcdPrevBtn() {
  console.log("lcdNum: ", lcdNum);
  if (lcdNum == 0) {
    lcdNum = lcdLength;
    $(".overflow > ul").css({
      marginLeft: -lcdNum * lcdWidth,
    });
    $(".slide-bar__now").css({
      left: lcdNum * 25 + "%",
    });
  }
  lcdNum--;
  lcdBtnMove();
}
document
  .querySelector(".technology-lcd2 .prev")
  .addEventListener("click", lcdPrevBtn);
document
  .querySelector(".technology-lcd2 .next")
  .addEventListener("click", lcdNextBtn);

//^ lcd2
const lcdSlidebarHandle = $(".technology-lcd2 .slide-bar");

let lcdSlidebar = $("<div></div>")
  .css({
    width: "25%",
    height: "7px",
    "background-color": "#fff",
    position: "absolute",
    top: "0",
    left: "0",
  })
  .addClass("slide-bar__now");

lcdSlidebarHandle.append(lcdSlidebar);

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
  console.log("실행");
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
