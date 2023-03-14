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
