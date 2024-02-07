const menuA = [
  '회사소개',
  '주문예약',
  '매장관리',
  '판매실적',
  '도움말',
];

window.onload = function () {
  for (let i = 0; i < 5; i++) {
    $('header div:eq(' + i + ')').html(menuA[i]);
  }
};

$(function () {
  $('header div').on('click', function () {
    let headerNo = $(this).index();
    $('header div').css('background', 'white');
    $('header div:eq(' + headerNo + ')').css(
      'background',
      'orange'
    );
  });
});
