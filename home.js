const hamburger = document.querySelector("button.menu"); // 汉堡按钮
const menu = document.querySelector("header ul");             // 你的菜单 ul
const me = document.querySelector("header h1");

hamburger.addEventListener("click", () => {
  // 如果隐藏，就显示；如果显示，就隐藏
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

hamburger.addEventListener("click", () => {
  // 如果隐藏，就显示；如果显示，就隐藏
  if (me.style.display === "none") {
    me.style.display = "block";
  } else {
    me.style.display = "none";
  }
});