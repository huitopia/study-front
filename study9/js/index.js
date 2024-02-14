const data = {
  menuTitle: ["메뉴 1", "메뉴 2", "메뉴 3", "메뉴 4"],
  articleTitle: ["제목 1", "제목 2", "제목 3", "제목 4"],
  titleColor: [
    "rgb(240,240,240)",
    "rgb(220,220,220)",
    "rgb(200,200,200)",
    "rgb(180,180,180)",
  ],
  at0Img: ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg"],
};

window.onload = function () {
  //-- javascript
  // let title = document.getElementsByClassName("title");
  for (let i = 0; i < data.articleTitle.length; i++) {
    $(".title" + i)
      .html(data.articleTitle[i])
      .css("backgroundColor", data.titleColor[i]);
    //-- javascript
    // title[i].style.background = data.titleColor[i];
  }

  //-- 햄버거 이미지 찍기
  let positionLeft = 5;
  for (let j = 0; j < data.at0Img.length; j++) {
    $(".at0-wall img:eq(" + j + ")").css("left", positionLeft + "%");
    positionLeft += 25;
  }
};

$(function () {
  $(".menu-call").on("click", function () {
    $(".menu-box")
      .css("display", "block")
      .stop()
      .animate({ right: "0" }, 500);
  });

  $(".menu-box li").on("click", function () {
    $(".menu-box")
      .stop()
      .animate({ right: "-20%" }, 1500)
      .css("display", "none");
  });
});
