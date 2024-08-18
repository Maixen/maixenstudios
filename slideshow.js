let slideIndex = [1, 1, 1];
let slideId = ["gamedev-slide", "videoediting-slide", "airealphotography-slide"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

// Automatic slideshow every 5 seconds
setInterval(function() {
  plusSlides(1, 0);
}, 5000);

setInterval(function() {
  plusSlides(1, 1);
}, 5000);

setInterval(function() {
    plusSlides(1, 2);
  }, 5000);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no])[0].getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName(slideId[no])[0].getElementsByClassName("dot");
  
  if (n > x.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = x.length }
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  x[slideIndex[no] - 1].style.display = "block";  
  dots[slideIndex[no] - 1].className += " active";
}