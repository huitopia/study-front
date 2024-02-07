const menuA = [
  "회사소개",
  "주문예약",
  "매장관리",
  "판매실적",
  "도움말",
];

const bigImg = [
  "bg0.png",
  "bg1.png",
  "bg2.png",
  "bg3.png",
  "bg4.png",
];

const imgText = ["가나", "다라", "마바", "사아", "자차"];

window.onload = function () {
  for (let i = 0; i < 5; i++) {
    $("header div:eq(" + i + ")").html(menuA[i]);
  }
};

$(function () {
  $("header div").on("click", function () {
    let headerNo = $(this).index();
    $("header div").css("background", "white");
    $("header div:eq(" + headerNo + ")").css("background", "orange");

    $(".pic").attr("src", "img/bg/" + bigImg[headerNo]);
    $(".text").html(imgText[headerNo]);
  });

  let listNo = 0;
  $(".menu").on("click", function () {
    if (listNo == 0) {
      listNo = 1;
      $(".menu").text("<");
      $("nav").animate({ left: "0px" }, 300);
    } else {
      $(".menu").text(">");
      $("nav").animate({ left: "-100px" }, 300);
      listNo = 0;
    }
  });

  $("nav div").on("click", function () {
    $("nav").animate({ left: "-100px" }, 300);
  });
});
