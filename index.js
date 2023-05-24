// swiper js link
/* <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script> */
// Look for .hamburger
// function myFunction() {
//     var x = document.getElementByClass("icon");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

  let menu = document.querySelector('#menu-btn');
  let navbar = document.querySelector('.header .navbar');

  menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

  }
 


