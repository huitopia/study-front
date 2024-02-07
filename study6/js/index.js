const menuA = [
  '토끼와 거북이 경주',
  '취업과 진로',
  '4차 산업',
  'NCS 국가직무',
  'MBTI와 적성검사',
];

const backgroundColor = [
  'rgb(153, 204, 204)',
  'rgb(153, 204, 255)',
  'rgb(102, 153, 204)',
  'rgb(153, 204, 255)',
  'rgb(102, 153, 204)',
];

const at0A = [
  '전략적인 속도 조절',
  '휴식과 집중',
  '지혜로운 선택',
  '동료들과 협력',
  '도움을 청하다',
];
const at1A = [
  '전문성 강화',
  '풀스택 개발자로의 전환',
  '산업 동향과 수요',
  '프로젝트 경험의 다양성',
  '개인 공부와 병행하기',
];

const bgImg = ['bg0.png', 'bg1.png', 'bg2.png', 'bg3.png', 'bg4.png'];

const titleImg0 = ['img0.jpg', 'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
const titleImg1 = ['img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg'];
const titleImg2 = [
  'img10.jpg',
  'img11.jpg',
  'img12.jpg',
  'img13.jpg',
  'img14.jpg',
];

window.onload = function () {};
let sw = 0;
let sw2 = 0;
$(function () {
  $('.at').hide();
  let barNo = 0;
  $('.at' + barNo).show();
  $('.at' + barNo).css('background', backgroundColor[barNo]);

  for (let i = 0; i < menuA.length; i++) {
    $('nav div:nth-child(' + (i + 1) + ')').html(menuA[i]);
    $('.title' + i).html(menuA[i]);
    $('.at0 .text li:eq(' + i + ')').html(at0A[i]);
    $('.at1 .text li:eq(' + i + ')').html(at1A[i]);
  }

  $('.bar').on('click', function () {
    if (sw2 == 0) {
      $(this).html('>');
      $('nav').animate({ left: '80%' }, 500);
      sw2 = 1;
    } else {
      $(this).html('<');
      $('nav').animate({ left: '100%' }, 500);
      sw2 = 0;
    }
  });

  $('nav div').on('click', function () {
    sw2 = 0;
    $('.bar').html('<');
    $('nav').animate({ left: '100%' }, 500);
    barNo = $(this).index();
    $('.at').hide();
    $('.at' + barNo).show();
    $('.at' + barNo).css('background', backgroundColor[barNo]);
    $('.big')
      .css('background', 'url(img/bg/' + bgImg[barNo] + ')')
      .css('backgroundSize', '100% 100%');
  });

  $('.text li').on('click', function () {
    if (sw == 0) {
      sw = 1;
      text_li();
    }
    let textNo = $(this).index();
    $('.text li').css('background', 'white');
    $(this).css({
      background: 'gray',
    });
    $('.big').css('background', 'url()').css('backgroundSize', '100% 100%');
  });
});

function text_li() {
  $('.text').animate(
    {
      width: '80%',
      height: '50px',
      top: '70%',
      padding: '0px',
    },
    500,
    function () {
      $('.text').css({
        display: 'flex',
        justifyContent: 'space-around',
      });
      $('.text li').css({
        fontSize: '1rem',
        height: '100%',
        width: '15%',
        lineHeight: '50px',
        textAlign: 'center',
        marginTop: '0',
      });
    },
  );

  $('.big').animate({ left: '100px', borderRadius: '5%' }, 500);

  $('.title').animate({ top: '0px' }, 500);
}
