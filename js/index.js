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

const buttons = document.querySelectorAll('.btn');
console.log(buttons);

buttons[0].classList.add('one');
buttons[1].classList.add('two');
buttons[2].classList.add('three');

const btn1 = document.querySelector('.btn.one');
console.log(btn1);

btn1.addEventListener('dblclick', function() {
  btn1.style.color = 'green';
  btn1.style.backgroundColor = 'yellow';
});

const btn2 = document.querySelector('.two');
console.log(btn2);

btn2.addEventListener('dblclick', function() {
  btn2.style.color = 'white';
  btn2.style.backgroundColor = 'black';
});

const btn3 = document.querySelector('.three');
console.log(btn3);

btn3.addEventListener('dblclick', function() {
  btn3.style.color = 'purple';
  btn3.style.backgroundColor = 'red';
});

const destination = document.querySelector('.text-content');
console.log(destination);


function classToggle() {
  this.classList.toggle('large');
  this.classList.toggle('normal');
}
destination.addEventListener('click', classToggle);


// document.querySelector('#div').addEventListener('click', classToggle);

// destination.addEventListener('keydown', event => {
//   if ('keydown') {
//     return destination.style.backgroundColor = 'green';
//     }
// });




// const textLarge = document.querySelectorAll('.text-content');
// console.log(textLarge);

