  // let menu = document.querySelector('#menu-btn');
  // let navbar = document.querySelector('.header .navbar');
  let photobtn = document.querySelectorAll('.photo-btn');

  // menu.onclick = () => {
  //   menu.classList.toggle('fa-times');
  //   navbar.classList.toggle('active');
//   let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 1000); }
  // };


photobtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
      document.querySelector('.controls .active').classList.remove('active');
      btn.classList.add('active');
      let src = btn.getAttribute('data-src');
      document.querySelector('#photo-slider').src = src;
    });

});


