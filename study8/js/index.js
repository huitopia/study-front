window.onload = function () {};

$(function () {
  let skip = document.querySelector(".skip");
  let back = document.querySelector(".back");
  // skip.onclick = function () {
  //   back.style.display = "none";
  // };

  skip.addEventListener("click", function () {
    back.style.display = "none";
  });

  // skip.addEventListener("click", video_skip(back));
});
