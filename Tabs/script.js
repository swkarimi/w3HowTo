const titles = document.querySelectorAll(".tabs__bar > h3");
const contents = document.querySelectorAll(".tabs__contents__content");

titles.forEach((title, idx) => {
  title.addEventListener("click", () => {
    deactiveTabs();
    title.classList.add("active");
    contents[idx].classList.add("active");
  });
});

const deactiveTabs = () => {
  titles.forEach((title) => {
    title.classList.remove("active");
  });
  contents.forEach((content) => {
    content.classList.remove("active");
  });
};
