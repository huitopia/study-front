window.onload = function () {};

$(function () {
  let menu = document.querySelector(".nav-menu");
  let sectionImg = document.querySelector(".section-img");
  menu.addEventListener("click", function () {
    let no = $(this).index();
    console.log("no: ", no);
    sectionImg.style.backgroundImg = "black";
  });
});
