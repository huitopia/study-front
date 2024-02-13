const repeatA = [
  "For",
  "For each",
  "For in",
  "For of",
  "Map",
  "While",
  "Do While",
];

const imgList = [
  "open0.jpg",
  "open1.jpg",
  "open2.jpg",
  "open3.jpg",
  "open4.jpg",
];

let i;
window.onload = function () {
  for (i = 0; i < repeatA.length; i++) {
    $("nav div:eq(" + i + ")").html(repeatA[i]);
  }
  for (i = 0; i < imgList.length; i++) {
    $(".content img:eq(" + i + ")").attr(
      "src",
      "img/open/" + imgList[i],
    );
  }
};

$(function () {});
