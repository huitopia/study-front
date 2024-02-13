const menuA = [
  "메뉴0",
  "메뉴1",
  "메뉴2",
  "메뉴3",
  "메뉴4",
  "메뉴5",
  "메뉴6",
];

const textA = [
  "메뉴0의 그림 상세설명",
  "메뉴1의 그림 상세설명",
  "메뉴2의 그림 상세설명",
  "메뉴3의 그림 상세설명",
  "메뉴4의 그림 상세설명",
  "메뉴5의 그림 상세설명",
  "메뉴6의 그림 상세설명",
];

let menuNo = 0;
window.onload = function () {
  for (let i = 0; i < menuA.length; i++) {
    $("nav div:eq(" + i + ")").html(menuA[i]);
  }
};

$(function () {
  $("nav div").on("click", function () {
    menuNo = $(this).index();
    menuClick(menuNo);
  });
});

//-- function
let menuClick = menuNo => {
  $(".nav-img").attr("src", "img/open/open" + menuNo + ".jpg");
  $(".nav-img-text").html(textA[menuNo]);
};
