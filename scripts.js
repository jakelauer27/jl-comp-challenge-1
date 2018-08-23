var photos = document.querySelectorAll(".slide");
var photoIndicators = document.querySelectorAll(".slide-button")
var rightArrow = document.querySelector(".arrow-right");
var leftArrow = document.querySelector(".arrow-left");

var index = 0;

showPhoto();

rightArrow.addEventListener("click", function(){
  changeSlideIndex(1, "scrollInRight")
});

leftArrow.addEventListener("click", function(){
  changeSlideIndex(-1, "scrollInLeft")
});


function changeSlideIndex(plusMinus, direction) {
  index += plusMinus;
  if (index < 0) {
    index = photos.length - 1;
  } 
  if (index > (photos.length - 1)) {
    index = 0;
  }
  showPhoto(direction);
}

function showPhoto(scrollDirection) {
  for (i = 0; i < photos.length; i++) {
    photos[i].classList.add("noDisplay");
    photoIndicators[i].classList.add("buttonNoHighlight");
  }
  photos[index].classList.remove("noDisplay");
  photoIndicators[index].classList.remove("buttonNoHighlight");
  photos[index].classList.add(scrollDirection);
  rightArrow.disabled = true;
  leftArrow.disabled = true;
  setTimeout(function(){
    rightArrow.disabled = false;
    leftArrow.disabled = false;
    photos[index].classList.remove(scrollDirection);
}, 1000);
}
