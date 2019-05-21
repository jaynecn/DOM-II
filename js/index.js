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

const containerHome = document.getElementsByClassName('content-destination');
console.log(containerHome);

containerHome.addEventListener('scroll', function() {
  containerHome.style.backgroundColor = 'green';
});

// const images = document.getElementsByTagName('img');
// console.log(images);

// images.addEventListener('dblclick', function(event) {
//   event.target.style.display = 'none';
// });


const textLarge = document.querySelectorAll('.text-content');
console.log(textLarge);

textLarge.addEventListener('dblclick', function() {
  textLarge.classList.toggle('.large');
});