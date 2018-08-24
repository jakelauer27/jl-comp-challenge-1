var photos = document.querySelectorAll(".slide");
var photoIndicators = document.querySelectorAll(".slide-button")
var rightArrow = document.querySelector(".arrow-right");
var leftArrow = document.querySelector(".arrow-left");

var index = 0;
var indexLeft = 1;
var indexRight = photos.length - 1;

showPhoto();

rightArrow.addEventListener("click", function(){
  changeSlideIndex(1);
  // scroll("Right", indexRight);
  // setTimeout(function(){
    showPhoto();
// }, 1000);
});

leftArrow.addEventListener("click", function(){
  changeSlideIndex(-1);
  // scroll("Left", indexLeft);
  // setTimeout(function(){
    showPhoto();
// }, 1000);
});

function changeSlideIndex(plusMinus) {
  index += plusMinus;
  indexLeft += plusMinus;
  indexRight += plusMinus;

  var indexArr = [index, indexLeft, indexRight];
  for (i = 0; i < indexArr.length; i++){
    if (indexArr[i] < 0) {
      indexArr[i] = photos.length - 1;
    } 
    if (indexArr[i] > (photos.length - 1)) {
      indexArr[i] = 0;
    }
  }

  index = indexArr[0];
  indexLeft = indexArr[1];
  indexRight = indexArr[2];

}


function showPhoto() {
    for (i = 0; i < photos.length; i++) {
      photos[i].classList.add("noDisplay");
      photoIndicators[i].classList.add("buttonNoHighlight");
    }
    photos[index].classList.remove("noDisplay");
    photoIndicators[index].classList.remove("buttonNoHighlight");
  }

  // function scroll(direction, scrollDirection) {
  //   photos[index].classList.remove("noDisplay");
  //   photos[index].classList.add(`scrollIn${direction}`);
  //   photos[scrollDirection].classList.add(`scrollOut${direction}`);
    // rightArrow.disabled = true;
    // leftArrow.disabled = true;
    // setTimeout(function(){
    //   rightArrow.disabled = false;
    //   leftArrow.disabled = false;
    //   photos[index].classList.remove(`scrollIn${direction}`)
    //   photos[scrollDirection].classList.remove(`scrollOut${direction}`);
    //   photos[scrollDirection].classList.add("noDisplay");
    // }, 1000);
  // }
  

// function showPhoto(plusMinus, direction) {
//   for (i = 0; i < photos.length; i++) {
//     photos[i].classList.add("noDisplay");
//     photoIndicators[i].classList.add("buttonNoHighlight");
//   }
//   photos[index].classList.remove("noDisplay");
//   photoIndicators[index].classList.remove("buttonNoHighlight");
//   photos[index].classList.add(scrollDirection);
//   rightArrow.disabled = true;
//   leftArrow.disabled = true;
//   setTimeout(function(){
//     rightArrow.disabled = false;
//     leftArrow.disabled = false;
//     photos[index].classList.remove(scrollDirection);
//   }, 1000);
// }


// function changeSlideIndex(plusMinus, direction) {
//   index += plusMinus;
//   if (index < 0) {
//     index = photos.length - 1;
//   } 
//   if (index > (photos.length - 1)) {
//     index = 0;
//   }
//   showPhoto(plusMinus, direction);

// 
