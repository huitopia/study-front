//-- data
const menuList = ["불면증", "면역력 저하", "혈관", "피로회복"];
const picContent = {
  0: {
    // 불면증: 트립토판, 글리신, l테아닌, 마그네슘
    0: {
      title: "트립토판(tryptophan)",
      img: "img0",
      desc: "잠들기 전까지 걸리는 시간을 단축하고, 수면 단계 중 REM 단계를 연장함으로써 수면에 긍정적인 영햐을 준다는 연구 결과가 있습니다. 우리 몸에 트립토판이 충분하지 않으면 세로토닌이 감소하게 되고 우울증과 수면 부족과 같은 다양한 증상을 경험할 수 있습니다.",
    },
    1: {
      title: "글리신(glycine)",
      img: "img1",
      desc: "체내에서 합성할 수 있는 아미노산의 일종으로 글리신은 척추와 뇌간에 많이 존재하고, 중추신경으로 신경전달물질로 작용합니다. 피부미용을 유지하는 효과뿐만 아니라 콜라겐이 존재하는 관절등에도 중요한 기능을 합니다.",
    },
    2: {
      title: "L-테아닌(L-THEANINE)",
      img: "img2",
      desc: "L-테아닌은 뇌의 화학 물질에 영향을 미쳐 수면을 촉진시키는 역할을 합니다. L-테아닌을 잠자리에 들기 전에 섭취하면 긴장을 줄여주어 더 깊은 수면을 가능하게 합니다.",
    },
    3: {
      title: "마그네슘(magnesium)",
      img: "img3",
      desc: "마그네슘은 인위적으로 신경을 억제하거나, 바이오 리듬을 깨트리지 않고 마그네슘 본연의 성질을 이용하는 원리로 부작용이 없다고 유명합니다.",
    },
  },
  // 면역력: 아연, 프로폴리스, 셀레늄, 비타민c
  1: {
    0: {
      title: "아연(zinc)",
      img: "img0",
      desc: "다양한 효소를 활성화하여 면역 체계를 강화하고, 신경계의 기능을 발달시키면서 세포의 신진대사 작용에 관여합니다.",
    },
    1: {
      title: "프로폴리스(propolis)",
      img: "img1",
      desc: "꿀벌들이 모은 나무 수액과 꽃가루에 꿀벌 분비물이 더해져 만들어진 천연물질입니다. 꿀벌의 생존에 있어 중요한 벌집을 무균상태로 유지시켜주는 게 프로폴리스이며, 프로폴리스는 향균-항산화 효과가 뛰어납니다.",
    },
    2: {
      title: "셀레늄(Selenium)",
      img: "img2",
      desc: "셀레늄은 항산화 작용으로 활성산소에 대응하여 세포 변종을 막고 노화를 예방하여 면역력을 높입니다. 신진대사를 활발하게 하고 소염작용을 통해 여러 질병을 예방합니다.",
    },
    3: {
      title: "비타민(vitamin)C",
      img: "img3",
      desc: "비타민C는 강력한 항산화 물질이자 신체 내 여러 물질들의 합성에 관여하는 조효소입니다. 그렇기 때문에 비타민이 부족하면 우리 몸의 화학 반응이 원활히 일어나지 않아 여러 활동과 기능이 떨어집니다.",
    },
  },
  // 혈관: 오메가3, 마그네슘, 비타민B, 아르기닌
  2: {
    0: {
      title: "오메가(omega)3",
      img: "img0",
      desc: "오메가-3는 혈소판 응집과 염증반응을 감소시키고, 혈중 중성지방의 농도를 감소시키고, 심박수와 혈압을 강하시켜 심혈관계 질환으로 인한 사망을 감소시킵니다.",
    },
    1: {
      title: "마그네슘(magnesium)",
      img: "img1",
      desc: "마그네슘은 칼슘의 길항작용으로 혈관을 이완시키고 심장박동을 일정하게 유지해 주어 고혈압 완화에 도움된다. 또한 췌장의 기능을 정상화하여 인슐린 분비를 촉진하기 때문에 당뇨병 관리에도 도움됩니다.",
    },
    2: {
      title: "비타민(vitamin)B",
      img: "img2",
      desc: "혈관을 수축시키고 혈전이나 혈액 응고를 야기하여 뇌졸중 등을 일으키는 호모시스테인을 억제함으로써 뇌졸중 발병 위험을 낮춰줍니다.",
    },
    3: {
      title: "아르기닌(arginine)",
      img: "img3",
      desc: "L-아르기닌은 산화질소(Nitric oxide·NO)를 생성한다. 산화질소는 혈관 근육에 신호를 보내 긴장을 풀어주고 혈관을 확장시켜 동맥 혈류 개선에 도움을 줄 수 있다. 혈관 속의 혈전, 플라크가 생기는 것을 방지한다. 혈압을 정상으로 유지시키며 혈관이 좁아져 나타나는 흉통이나 협심증, 관상동맥 질환의 증상 호전에도 좋다.",
    },
  },
  // 피로회복: 커큐민, 밀크씨슬, 비타민C, 아미노산
  3: {
    0: {
      title: "커큐민(curcumin)",
      img: "img0",
      desc: "커큐민은 강력한 항산화 작용을 가지고 있습니다. 항산화 작용은 세포 손상을 예방하고 세포 재생을 촉진하여 피로 회복에 도움을 줄 수 있습니다.",
    },
    1: {
      title: "밀크씨슬(milk thistle)",
      img: "img1",
      desc: "밀크시슬이라 불리 는 서양엉겅퀴라는 식물에서 유효성분을 추출한 물질로 항산화 작용을 하는 실리마린이 함유되어 있다. 실리마린은 활성산소를 제거하여 간세포를 보호하고 해독 작용을 한다. 단독으로 사용되거나 간 건강과 피로 회복에 도움이 되는 비타민과 복합되어 사용됩니다.",
    },
    2: {
      title: "비타민(vitamin)C",
      img: "img2",
      desc: "비타민C는 강력한 항산화제로써 피로로 인해 생기는 체내 활성산소를 제거하며 피로로 인해 생길 수 있는 면역력 감소를 줄이고, 피로에 대한 저항력을 높이는 등의 피로 회복 효과가 있습니다.",
    },
    3: {
      title: "아미노산(amino acid)",
      img: "img3",
      desc: "아미노산은 근력과 지구력을 높여 주고, 신체 능력을 향상시킨다. 근육 분해를 막고, 오랫동안 에너지를 낼 수 있게 해주며, 근육 피로해소에 도움을 준다. 뇌 신경세포와 신경전달물질을 만드는 데도 아미노산이 필요합니다.",
    },
  },
};

// -- function
let menuClickColor = menuNo => {
  $(".menu div").css("backgroundColor", "rgb(250, 250, 250)");
  $(".menu-" + menuNo).css("backgroundColor", "rgb(228, 228, 228)");
};

let listClickColor = picNo => {
  $(".pic-list li").css("border", "1px solid rgb(210, 210, 210)");
  $(".pic-list-" + picNo).css(
    "border",
    "2px solid rgb(150, 150, 150)",
  );
};

let clickView = (menuNo, picNo) => {
  let content = Object.values(picContent[menuNo][picNo]);
  $(".main-title").html(content[0]);
  $(".main-pic").attr(
    "src",
    "img/menu" + menuNo + "/" + content[1] + ".png",
  );
  $(".main-pic-content").html(content[2]);
};

let menuBtn = () => {
  if (iconNo == 0) {
    $(".menu").animate({ left: "30px" }, 300);
    for (let i = 0; i < menuList.length; i++) {
      $(".menu-" + i).html(menuList[i]);
    }
    iconNo = 1;
  } else {
    // $(".menu").animate({ left: "-300px" }, 300);
    // iconNo = 0;
  }
};

let picListView = menuNo => {
  $(".pic-list").css("display", "block");
  for (let j = 0; j < 4; j++) {
    $(".pic-list-" + j).css(
      "backgroundImage",
      "url(img/menu" + menuNo + "/img" + j + ".png",
    );
  }
};

let firstView = menuNo => {
  $(".main-content").css("display", "block");
  let firstContent = Object.values(picContent[menuNo][0]);
  $(".main-title").html(firstContent[0]);
  $(".main-pic").attr(
    "src",
    "img/menu" + menuNo + "/" + firstContent[1] + ".png",
  );
  $(".main-pic-content").html(firstContent[2]);
};

window.onload = function () {};

let iconNo = 0;
$(function () {
  $(".menu-icon").on("click", function () {
    menuBtn();
  });

  $(".menu div").on("click", function () {
    iconNo = 1;
    let menuNo = $(this).index();

    menuBtn(iconNo);
    picListView(menuNo);

    //-- 메뉴 클릭시 상단으로 올리기
    $(".menu").css({
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
      top: "80px",
    });
    $(".menu div").css({
      textIndent: "0",
      textAlign: "center",
    });
    $(".menu div").hover(
      function () {
        $(this).css({
          cursor: "pointer",
          backgroundColor: "rgb(228, 228, 228)",
        });
      },
      function () {
        $(this).css({ backgroundColor: "rgb(250, 250, 250)" });
      },
    );
    //
    menuClickColor(menuNo);
    firstView(menuNo);
    $(".pic-list li").on("click", function () {
      let picNo = $(this).index();
      listClickColor(picNo);
      clickView(menuNo, picNo);
    });
  });
});
