document.querySelector(".menu-btn").addEventListener("click", function () {
  document.body.classList.add("menu-open");
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.body.classList.remove("menu-open");
});
