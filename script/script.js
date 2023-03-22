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
const bObj = $(".main-banner .bg-1").clone();
$(".main-banner > ul").append(bObj);
const bCopyLength = $(".main-banner > ul > li").length;

function bAnimation() {
  $(".main-banner > ul")
    .stop()
    .animate(
      {
        marginLeft: -bNum * bWidth,
      },
      500
    );
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
  if (bNum >= bLength) {
    bNum = 0;
    $(".main-banner > ul").css({
      marginLeft: 0,
    });
  }
  bNum++;
  bAnimation();
  if (bNum < 4) {
    $(".main-banner #selected-page").text(bNum + 1);
  } else {
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
