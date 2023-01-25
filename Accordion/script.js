const questionElms = document.querySelectorAll(".accordion__item__question");

questionElms.forEach((qElm) => {
  qElm.addEventListener("click", () => {
    qElm.classList.toggle("active");
    const symbolElm = qElm.children[1];
    if (symbolElm.classList.contains("fa-plus")) {
      symbolElm.classList.remove("fa-plus");
      symbolElm.classList.add("fa-minus");
    } else {
      symbolElm.classList.remove("fa-minus");
      symbolElm.classList.add("fa-plus");
    }
    qElm.nextElementSibling.classList.toggle("open");
  });
});
