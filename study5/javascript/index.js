window.onload = function () {};

$(function () {
  $(".left div").on("click", function () {
    $(".left div").css("background", "none");
    // 클릭한 div의 배경 하늘색으로 변경
    $(this).css("background", "skyblue");
  });

  no = 0;

  $(".at0_box" + no).on("click", function () {
    $(".at0_box").css("opacity", "0.4");
    $(".at0_box" + (no + 1))
      .css("opacity", "1")
      .css("background", "white")
      .css("color", "black");
  });
});

$(function () {
  $(".menu li").on("click", function () {
    $(".menu li ").css("background", "none");
    // 클릭한 menu의 배경 주황색으로 변경
    $(this).css("background", "orange");

    $("article").hide();

    no = $(this).index();

    if (no == 0) {
      $(".title").text("MBTI 검사에 오신 것을 환영합니다.");
      $(".at" + no).show();
      $(".left .sub0").text(data.sub0[0]);
      $(".left .sub1").text(data.sub0[1]);
      $(".left .sub2").text(data.sub0[2]);
      $(".left .sub3").text(data.sub0[3]);
    }
    if (no == 1) {
      $(".title").text("DISC 검사에 오신 것을 환영합니다.");
      $(".at" + no).show();
      $(".left .sub0").text(data.sub1[0]);
      $(".left .sub1").text(data.sub1[1]);
      $(".left .sub2").text(data.sub1[2]);
      $(".left .sub3").text(data.sub1[3]);
    }
    if (no == 2) {
      $(".title").text("흥미적성 검사에 오신 것을 환영합니다.");
      $(".at" + no).show();
      $(".left .sub0").text(data.sub2[0]);
      $(".left .sub1").text(data.sub2[1]);
      $(".left .sub2").text(data.sub2[2]);
      $(".left .sub3").text(data.sub2[3]);
    }
    if (no == 3) {
      $(".title").text("흥미적성 검사에 오신 것을 환영합니다.");
      $(".at" + no).show();
      $(".left .sub0").text(data.sub3[0]);
      $(".left .sub1").text(data.sub3[1]);
      $(".left .sub2").text(data.sub3[2]);
      $(".left .sub3").text(data.sub3[3]);
    }
  });

  // Javascript
  // let menu0, menu1, menu2, menu3;
  // menu0 = document.getElementById("menu0");
  // menu1 = document.getElementById("menu1");
  // menu2 = document.getElementById("menu2");
  // menu3 = document.getElementById("menu3");
  // let title = document.querySelector(".title");
  // menu0.onclick = function () {
  //   title.innerHTML = "MBTI 검사에 오신 것을 환영합니다.";
  // };
  // menu1.onclick = function () {
  //   title.innerHTML = "DISC 검사에 오신 것을 환영합니다.";
  // };
  // menu2.onclick = function () {
  //   title.innerHTML = "흥미적성 검사에 오신 것을 환영합니다.";
  // };
  // menu3.onclick = function () {
  //   title.innerHTML = "학습영량 검사에 오신 것을 환영합니다.";
  // };
});

let data = {
  sub0: {
    0: "에너지 충전",
    1: "인식기증(정보수집)",
    2: "판단기능(결정, 선택)",
    3: "생활양식(판단, 인식)",
  },
  sub1: {
    0: "주도형",
    1: "사교형",
    2: "안정형",
    3: "신중형",
  },
  sub2: {
    0: "흥미00",
    1: "흥미01",
    2: "흥미02",
    3: "흥미03",
  },
  sub3: {
    0: "학습역량0",
    1: "학습역량1",
    2: "학습역량2",
    3: "학습역량3",
  },
};
