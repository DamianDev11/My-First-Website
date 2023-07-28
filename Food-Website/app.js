let menu = document.querySelector.apply("#menu-bars");
let navbar = document.querySelector.apply(".navbar");

menu.onClick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

document.querySelector("#search-icon").onClick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#sclose").onClick = () => {
  document.querySelector("#search-form").classList.remove("active");
};
