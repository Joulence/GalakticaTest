export const onclick = () => {
  const menuBtn = document.getElementById("menuToggle");
  const menuList = document.getElementById("menu");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-open");
    menuList.classList.toggle("nav-open");

    if (menuBtn.classList.contains("is-open")) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
  });
};
