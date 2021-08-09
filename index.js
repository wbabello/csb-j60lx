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
document.querySelector(".schedule").innerHTML = movies[0];
for (let i = 0; i < movies.length; i++) {
  document.querySelector(".schedule").innerHTML += `<p>${movies[i]}</p>`;
}

const random = Math.floor(Math.random() * 9);
document.querySelector(".random").innerHTML += `<p>${movies[random]}</p>`;

// let currentSlide = 0;
// const slides = document.querySelectorAll(".slide");
// const dots = document.querySelectorAll(".dot");

// const init = (n) => {
//   slides.forEach((slide, index) => {
//     slide.style.display = "none";
//     dots.forEach((dot, index) => {
//       dot.classList.remove("active");
//     });
//   });
//   slides[n].style.display = "block";
//   dots[n].classList.add("active");
// };
// document.addEventListener("DOMContentLoaded", init(currentSlide));
// const next = () => {
//   currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
//   init(currentSlide);
// };

// const prev = () => {
//   currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
//   init(currentSlide);
// };

// document.querySelector(".next").addEventListener("click", next);

// document.querySelector(".prev").addEventListener("click", prev);

// setInterval(() => {
//   next();
// }, 5000);

// dots.forEach((dot, i) => {
//   dot.addEventListener("click", () => {
//     console.log(currentSlide);
//     init(i);
//     currentSlide = i;
//   });
// });
