  // let menu = document.querySelector('#menu-btn');
  // let navbar = document.querySelector('.header .navbar');
  // let photobtn = document.querySelectorAll('.photo-btn');

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


// photobtn.forEach(btn =>{
//     btn.addEventListener('click', ()=>{
//       document.querySelector('.controls .active').classList.remove('active');
//       btn.classList.add('active');
//       let src = btn.getAttribute('data-src');
//       document.querySelector('#photo-slider').src = src;
//     });

// });

let products = {
  data:[
    {
    tourName: "Obudu Cattle Ranch",
    category: "Tour",
    state: "Cross-River",
    city: "Calabar",
    price: "200",
    image: "images/obudu-holy-mountain.jpg",
  },

  {
    tourName: "Art Tech District",
    category: "Museum",
    state: "FCT",
    city: "Abuja",
    price: "50",
    image: "images/art-district.jpeg",
  },

],
};

for(let i of products.data){
  let card = document.createElement("div");
  card.classList.add("card","i.category");
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imageContainer.appendchild(image);
  card.appendchild(imgContainer);

  document.getElementById("products").appendChild(card);

}
