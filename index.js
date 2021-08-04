// //var index = 0;
// function moveGallery(direction){

// }

// })();

var movies = [
  "Alive June 18th, 2021",
  "AnneFrank - Parallel Stories, August 18th 2019",
  "FriendButMarried	, September 5th,2018",
  "100 Days of Solitude, May 23rd 2021",
  "1898: Our Last Men in the Philippines , October 10th, 2020",
  "#FriendButMarried 2 , June 15th, 2021",
  "13TH: A Conversation with Oprah Winfrey & Ava DuVernay , March 8th, 2019",
  "18 Presents , April 1st, 2021",
  "1BR  February 2nd, 2020",
  "100 Meters December 8th, 2021",
];
// document.querySelector(".schedule").innerHTML = movies[0];
for (let i = 0; i < movies.length; i++) {
  //document.querySelector(".schedule").innerHTML += `<p>${movies[i]}</p>`;
}

const random = Math.floor(Math.random() * 9);
document.querySelector(".random").innerHTML += `<p>${movies[random]}</p>`;

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
