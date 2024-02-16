let data = {
  menu0: ["딸기주스", "4000원", "없음", "img1.jpg"],
  menu1: ["아이스크림", "1000원", "없음", "img2.jpg"],
  menu2: ["아이스 아메리카노", "1500원", "없음", "img3.jpg"],
  menu3: ["디저트", "3000원", "없음", "img4.jpg"],
  menu4: ["망고주스", "7000원", "없음", "img5.jpg"],
  menu5: ["팥빙수", "10000", "없음", "img6.jpg"],
};
window.onload = function () {
  let menu = document
    .querySelector(".menu")
    .getElementsByTagName("li");
  for (let i = 0; i < menu.length; i++) {
    let menuTitle = Object.values(data)[i][0];
    menu[i].innerHTML = menuTitle;
  }
};

$(function () {
  $(".menu li").on("click", function () {
    let menuNo = $(this).index();
    let title = Object.values(data)[menuNo][0];
    let price = Object.values(data)[menuNo][1];
    let kcal = Object.values(data)[menuNo][2];
    $("#text1").html("상품 : " + title);
    $("#text2").html("가격 : " + price);
    $("#text3").html("칼로리 : " + kcal);
    $(".big img").attr(
      "src",
      "img/" + Object.values(data)[menuNo][3],
    );
  });
});
