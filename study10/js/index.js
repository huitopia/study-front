const data = {
  menuTitle: [
    "Spring",
    "Node",
    "React",
    "Vue",
    "Flutter",
    "Kotlin",
    "Swift",
  ],
};

window.onload = function () {
  //-- jQuery
  // for (let i = 0; i < $(".menu-title").length; i++) {
  //   $(".menu-title:eq(" + i + ")").html(data.menuTitle[i]);
  // }

  //-- javascript
  let menuTitle = document.getElementsByClassName("menu-title");
  for (let i = 0; i < menuTitle.length; i++) {
    menuTitle[i].innerHTML = data.menuTitle[i];
  }
};

$(function () {
  // sub li click font color change
  $(".sub li").on("click", function () {
    $(".sub li").css("backgroundColor", "transparent");
    $(this).css("backgroundColor", "rgb(220, 220, 220)");
  });
});
