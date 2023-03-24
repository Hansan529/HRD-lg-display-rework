//^ header btn
document.querySelectorAll("header button").forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

$("header .more-btn").on("click", () => {
  $("aside").fadeIn(500);
});

//^ aside btn
$("aside header > ul > li:last > button").on("click", () => {
  $("aside").fadeOut(500);
});

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
