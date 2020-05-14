const menuItems = document.querySelectorAll(
  "a[href^='#']" || "div[id^='m']"
);
menuItems.forEach((item) => {
  console.log(item)
  item.addEventListener("click", scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const to = document.querySelector(id).offsetTop;
  window.scroll({
    top: to - 60,
    behavior: "smooth",
  });
}

const btnTop = document.getElementById("moveToTop");

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.classList.add("moveToTop--visible");
  } else {
    btnTop.classList.remove("moveToTop--visible");
  }
};
