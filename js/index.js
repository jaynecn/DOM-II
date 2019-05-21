// Your code goes here
let logoHeading = document.querySelector('.logo-heading');
console.log(logoHeading);

logoHeading.addEventListener('mouseenter', function() { logoHeading.style.backgroundColor = "yellow";
});
logoHeading.addEventListener('mouseleave', function() { logoHeading.style.backgroundColor = "white";
});

const navContainer = document.querySelector('.nav');
console.log(navContainer);

navContainer.addEventListener('click', function(element) {
    element.target.style.backgroundColor = 'yellow';
});

const containerHome = document.querySelector('.content-destination p');
console.log(containerHome);

containerHome.addEventListener('copy', function(element) {
  console.log(`This text has been copied`);
});

const images = document.querySelector('.img-fluid');
console.log(images);
const imageList = Array.from(images);

images.addEventListener('dblclick', function() {
  images.style.display = 'none';
});




// const textLarge = document.querySelectorAll('.text-content');
// console.log(textLarge);

// textLarge.addEventListener('dblclick', function() {
//   textLarge.classList.toggle('.large');
// });