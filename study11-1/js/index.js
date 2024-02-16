let func1 = () => {
  // 수량
  let cnt = document.getElementById("many").value;
  cnt = parseInt(cnt);

  // 가격
  let price = 320;

  // 총 금액
  let totalPrice = price * cnt;
  let total = document.getElementById("total");

  // 세일 3만원 이상 구매시 3% 반환
  let sale = document.getElementById("sale");
  let salePrice = 0;
  if (totalPrice >= 30000) {
    salePrice = (totalPrice / 100) * 97;
    sale.innerHTML = salePrice.toFixed();
  } else {
    salePrice = totalPrice.toFixed();
    sale.innerHTML = 0;
  }

  // 포인트 10원 단위 적립
  let point = document.getElementById("point");
  if (salePrice % 100 != 0) {
    point.innerHTML = (salePrice % 100).toFixed();
  } else {
    point.innerHTML = 0;
  }

  // 기존 총 금액
  total.innerHTML = totalPrice.toFixed();
};

// -- 취소하기
let func2 = () => {
  let cnt2 = document.getElementById("many").value;
  cnt2.innerHTML = 0;
};
