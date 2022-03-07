let hamburger = document.getElementById("hamburger-icon");
let drop = document.getElementById("drop");
hamburger.addEventListener("click", () => {
  drop.style.display="block";
});
let path = document.getElementById("path");

// Gallery Slide Show

let paginationOne = document.getElementById("pagination-one");
paginationOne.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('./images/fisherman.jpg')";
  path.style.fill = "white";
});

let paginationTwo = document.getElementById("pagination-two");
paginationTwo.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('./images/ocean.jpg')";
  path.style.fill = "white";
});

let paginationThree = document.getElementById("pagination-three");
paginationThree.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('./images/boyslove.jpg')";
  path.style.fill = "black";
});

let paginationFour = document.getElementById("pagination-four");
paginationFour.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('./images/manandrock.jpg')";
  path.style.fill = "black";
});

let paginationFive = document.getElementById("pagination-five");
paginationFive.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('./images/elegushi.jpg')";
  path.style.fill = "white";
});
