// const menuTitle = ["메뉴1", "메뉴2", "메뉴3"];

const menu = {
  title: ["menu1", "menu2", "menu3"],
  img: [
    "open0.jpg",
    "open1.jpg",
    "open2.jpg",
    "open3.jpg",
    "open4.jpg",
  ],
};

window.onload = function () {
  //-- javascript
  let menuBtn = document.getElementsByTagName("li");
  console.log("menuBtn: ", menuBtn);
  for (let i = 0; i < menu.title.length; i++) {
    menuBtn[i].innerHTML = menu.title[i];
  }

  //-- jQuery
  // for (let i = 0; i < menu.title.length; i++) {
  //   $("nav ul li:eq(" + i + ")").html(menu.title[i]);
  // }
};

$(function () {
  // menu btn click
  $("nav ul li").on("click", function () {
    let random = Math.floor(Math.random() * 5);
    // img left 20%
    $(".move").animate({ left: "20%" }, 500);
    // img change
    // let menuNo = $(this).index();
    $(".move img").attr("src", "img/open/" + menu.img[random]);
    // 원위치
    $(".move").animate({ left: "90%" }, 1000);
  });
});
