const headerLangDom = document.querySelector(".gnb-btn > li > .language-btn");
const headerModeDom = document.querySelector(".gnb-btn > li > .mode-btn");
const headerMoreDom = document.querySelector(".gnb-btn > li > .more-btn");
const asideDom = document.querySelector("aside");
const asideCloseDom = document.querySelector(
  "aside .logo-wrap+ul > li:last-child > button"
);
const asideCloseDomMobile = document.querySelector(
  "aside .mobile-btn-wrap > button"
);
const asideLightMode = document.querySelector("aside .sun-mode");
const asideNightMode = document.querySelector("aside .night-mode");
const topBtn = document.querySelector(".top-btn");

//^ header btn
document.querySelectorAll("header button").forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

function asideOpen() {
  asideDom.classList.remove("close");
  asideDom.classList.add("open");
}

// 언어 선택창 활성화
function enableLang() {
  document.querySelector(".gnb-btn .language").classList.toggle("hidden");
}
// 언어 선택
const languageBtn = document.querySelectorAll(".gnb-btn .language > div > div");
languageBtn.forEach((sel) => {
  sel.onclick = (e) => {
    const index = e.target.parentNode;
    for (i = 0; i < languageBtn.length; i++) {
      languageBtn[i].classList.remove("active");
    }
    index.classList.add("active");
  };
});
// 라이트모드
function lightMode() {
  html.dataset.theme = "";
  darkModeImg();
}
// 다크모드
function nightMode() {
  html.dataset.theme = "dark";
  darkModeImg();
}

// 다크모드 온오프
function modeChange() {
  if (html.getAttribute("data-theme") === "") {
    nightMode();
  } else {
    lightMode();
  }
}

headerLangDom.addEventListener("click", enableLang);
headerMoreDom.addEventListener("click", asideOpen);
headerModeDom.addEventListener("click", modeChange);
asideLightMode.addEventListener("click", lightMode);
asideNightMode.addEventListener("click", nightMode);
//^ aside btn

function asideClose() {
  asideDom.classList.remove("open");
  asideDom.classList.add("close");
}

// 형제 선택
const siblings = (t) => [...t.parentElement.children].filter((e) => e != t);

// 언어 선택
const language = document.querySelectorAll(".lang-wrap > button");
language.forEach((sel) => {
  sel.onclick = (e) => {
    const index = e.target;
    for (i = 0; i < language.length; i++) {
      language[i].classList.remove("check");
    }
    index.classList.add("check");
  };
});
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
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
$(window).on("scroll", topBtnOpacity);
