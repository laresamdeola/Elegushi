let hamburger = document.getElementById("hamburger-icon");
let drop = document.getElementById("drop");
hamburger.addEventListener("click", () => {
  drop.style.display="block";
});

// Gallery Slide Show

let paginationOne = document.getElementById("pagination-one");
paginationOne.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('./images/fisherman.jpg')";
});

let paginationTwo = document.getElementById("pagination-two");
paginationTwo.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('./images/ocean.jpg')";
});

let paginationThree = document.getElementById("pagination-three");
paginationThree.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('./images/boyslove.jpg')";
});

let paginationFour = document.getElementById("pagination-four");
paginationFour.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('./images/manandrock.jpg')";
});

let paginationFive = document.getElementById("pagination-five");
paginationFive.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('./images/elegushi.jpg')";
});
