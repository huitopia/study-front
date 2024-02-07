window.onload = function () {
  $(".right").hide();
  $("#view_4").show();
};

//-- left menu
$(function () {
  $(".menu").on("click", function () {
    let leftMenuNo = $(this).attr("class").substring(5, 6);
    $(".right").hide();
    $("#view_" + leftMenuNo).show();
  });

  let menuNo = 0;
  //-- right view_4
  $(".right_menu li").on("click", function () {
    //  메뉴 클릭시 색상 변경
    $(".right_menu li").css("background", "white");
    $(this).css("background", "rgb(238, 238, 238)");

    menuNo = $(this).index();
    // 메뉴 클릭시 view_4_big 0번째 그림 반환
    $(".view_4_pic").attr("src", "img/gallery/menu" + menuNo + "_bg0.jpg");
    // 메뉴 클릭시 content left small img 변경
    for (i = 0; i < 5; i++) {
      $(".pic" + i).attr("src", "img/gallery/menu" + menuNo + "_bg" + i + ".jpg");
    }
  });

  // left 이미지 클릭시 view_4_big 반환
  $(".view_4_small li").on("click", function () {
    let imgNo = $(this).index();
    $(".view_4_pic").attr("src", "img/gallery/menu" + menuNo + "_bg" + imgNo + ".jpg");
  });
});
