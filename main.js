let icon = document.querySelector(".header .container .links .icon");
let ul = document.querySelector(".header .container .links ul");

icon.addEventListener("click", function () {
  if (ul.style.display === "none") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
});
