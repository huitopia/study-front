window.onload = function () {};

// -- 짝수 홀수
let btn1 = () => {
  let num1 = document.getElementById("num1").value;
  let result1 = document.getElementById("result1");
  // parseInt() : 문자열 숫자로 변환
  num1 = parseInt(num1);
  if (num1 % 2 == 0) {
    result1.innerHTML = "짝수";
  } else {
    result1.innerHTML = "홀수";
  }
};

// -- 3의 배수
let btn2 = () => {
  let num2 = document.getElementById("num2").value;
  let result2 = document.getElementById("result2");
  num2 = parseInt(num2);
  if (num2 % 3 == 0) {
    result2.innerHTML = "O";
  } else {
    result2.innerHTML = "X";
  }
};

// -- 성인 or 미성년자
let btn3 = () => {
  let num3 = document.getElementById("num3").value;
  let result3 = document.getElementById("result3");
  num3 = parseInt(num3);
  if (num3 >= 20) {
    result3.innerHTML = "성인";
  } else {
    result3.innerHTML = "미성년자";
  }
};

// -- 합격 or 불합격
let btn4 = () => {
  let num4 = document.getElementById("num4").value;
  let result4 = document.getElementById("result4");
  num4 = parseInt(num4);
  if (num4 >= 80) {
    result4.innerHTML = "합격";
  } else {
    result4.innerHTML = "불합격";
  }
};

// -- 학점 구하기
// A : 90, B : 80, C : 70, D : 60
let btn5 = () => {
  let num5 = document.getElementById("num5").value;
  console.log("num5: ", num5);
  let result5 = document.getElementById("result5");
  num5 = parseInt(num5);
  if (num5 >= 90) {
    result5.innerHTML = "A";
  } else if (num5 >= 80) {
    result5.innerHTML = "B";
  } else if (num5 >= 70) {
    result5.innerHTML = "C";
  } else if (num5 >= 60) {
    result5.innerHTML = "D";
  } else {
    result5.innerHTML = "F";
  }
};
