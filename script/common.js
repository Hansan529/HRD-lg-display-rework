//^ header btn
document.querySelectorAll("header button").forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

const headerMoreDom = document.querySelector(".gnb-btn > li > .more-btn");

function asideOpen() {
  asideDom.classList.remove("close");
  asideDom.classList.add("open");
}

headerMoreDom.addEventListener("click", asideOpen);
//^ aside btn
const asideDom = document.querySelector("aside");
const asideCloseDom = document.querySelector(
  "aside .logo-wrap+ul > li:last-child > button"
);
const asideCloseDomMobile = document.querySelector(
  "aside .mobile-btn-wrap > button"
);

function asideClose() {
  asideDom.classList.remove("open");
  asideDom.classList.add("close");
}

asideCloseDom.addEventListener("click", asideClose);
asideCloseDomMobile.addEventListener("click", asideClose);
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
