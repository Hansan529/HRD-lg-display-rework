const html = document.querySelector("html");
const headerSearDom = document.querySelector(".gnb-btn > li > .search-btn");
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

// 선택된 개체 부모 활성화, 형제들 비활성화 - 함수화
function activeParentClass(e, className, targetElems) {
  const index = e.target.parentNode;
  for (i = 0; i < targetElems.length; i++) {
    targetElems[i].classList.remove(className);
  }
  index.classList.add(className);
}
// 선택된 개체 타겟 활성화, 형제들 비활성화 - 함수화
function activeClass(e, className, targetElems) {
  const index = e.target;
  for (i = 0; i < targetElems.length; i++) {
    targetElems[i].classList.remove(className);
  }
  index.classList.add(className);
}

// 검색창 활성화
function enableSearch() {
  let lang = document.querySelector(".gnb-btn .language");
  if (lang.classList.length == 1) {
    lang.classList.add("hidden");
  }
  document.querySelector(".gnb-btn .search").classList.toggle("hidden");
}

// 언어 선택창 활성화
function enableLang() {
  let search = document.querySelector(".gnb-btn .search");
  if (search.classList.length == 1) {
    search.classList.add("hidden");
  }
  document.querySelector(".gnb-btn .language").classList.toggle("hidden");
}
// 언어 선택
const languageBtn = document.querySelectorAll(".gnb-btn .language > div > div");
languageBtn.forEach((sel) => {
  sel.onclick = (e) => {
    activeParentClass(e, "active", languageBtn);
  };
});

// 모바일 언어 선택
const asideLanguageBtn = document.querySelectorAll(
  "aside .mobile-btn-wrap > ul > li"
);
asideLanguageBtn.forEach((sel) => {
  sel.onclick = (e) => {
    activeParentClass(e, "select", asideLanguageBtn);
  };
});

// 라이트모드
function lightMode() {
  html.dataset.theme = "";
}
// 다크모드
function nightMode() {
  html.dataset.theme = "dark";
}

// 다크모드 온오프
function modeChange() {
  html.getAttribute("data-theme") === "" ? nightMode() : lightMode();
}

headerSearDom.addEventListener("click", enableSearch);
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
    activeClass(e, "check", language);
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
