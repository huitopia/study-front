let menu1,
  menu2,
  menu3,
  menu4,
  pic,
  no,
  count = 1;
window.onload = function () {
  menu1 = document.getElementById("menu1");
  menu2 = document.getElementById("menu2");
  menu3 = document.getElementById("menu3");
  menu4 = document.getElementById("menu4");

  pic = document.querySelector(".pic");
  no = document.querySelector(".no");

  menu1.onclick = function () {
    pic.src = "img/1.jpeg";
    no.innerHTML = 1;
  };
  menu2.onclick = function () {
    pic.src = "img/2.jpeg";
    no.innerHTML = 2;
  };
  menu3.onclick = function () {
    pic.src = "img/3.jpeg";
    no.innerHTML = 3;
  };
  menu4.onclick = function () {
    pic.src = "img/4.jpeg";
    no.innerHTML = 4;
  };

  let left, right;
  left = document.querySelector(".left");
  right = document.querySelector(".right");

  // right.onclick = function () {
  //   if (count < 4) {
  //     count++;
  //   }
  //   no.innerHTML = count;
  //   pic.src = "img/" + count + ".jpeg";
  // };

  // left.onclick = function () {
  //   if (count > 1) {
  //     count--;
  //   }
  //   no.innerHTML = count;
  //   pic.src = "img/" + count + ".jpeg";
  // };
  right.addEventListener("click", function () {
    if (count < 4) {
      count++;
    }
    no.innerHTML = count;
    pic.src = "img/" + count + ".jpeg";
  });

  left.addEventListener("click", function () {
    if (count > 1) {
      count--;
    }
    no.innerHTML = count;
    pic.src = "img/" + count + ".jpeg";
  });
};
