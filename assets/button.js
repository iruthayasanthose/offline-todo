$(function () {
  $(".rem").on("click", function () {
    $(this)
      .parent()
      .css({ "font-style": "oblique", "text-decoration": "line-through" });
  });
  $(".rem").on("dblclick", function () {
    $(this).parent().css({ "font-style": "normal", "text-decoration": "none" });
  });
});
