// Your code goes here

let loaded = window.addEventListener('load', (event) => {
  console.log('the page is fully loaded - yaaaasss');
});

const bodyContainer = window.addEventListener('resize', (event) => {
  console.log(`Your window size: - Width: ${window.innerWidth}px, Height: ${window.innerHeight}px`);
});


let logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('mouseenter', function() { logoHeading.style.backgroundColor = "yellow";
});
logoHeading.addEventListener('mouseleave', function() { logoHeading.style.backgroundColor = "white";
});

const navContainer = document.querySelector('.nav');

navContainer.addEventListener('click', function(element) {
    element.target.style.backgroundColor = 'yellow';
});

const containerHome = document.querySelector('.content-destination p');

containerHome.addEventListener('copy', function(element) {
  console.log(`This text has been copied`);
});

const images = document.querySelector('.img-fluid');
const imageList = Array.from(images);

const scrollImage = window.addEventListener('scroll', (event) => {
  console.log('THEY SEE ME SCROLLIN, THEY HATIN');
});

images.addEventListener('dblclick', function() {
  images.style.display = 'none';
});

const buttons = document.querySelectorAll('.btn');

buttons[0].classList.add('one');
buttons[1].classList.add('two');
buttons[2].classList.add('three');

const btn1 = document.querySelector('.btn.one');

btn1.addEventListener('dblclick', function() {
  btn1.style.color = 'green';
  btn1.style.backgroundColor = 'yellow';
});

const btn2 = document.querySelector('.two');

btn2.addEventListener('dblclick', function() {
  btn2.style.color = 'white';
  btn2.style.backgroundColor = 'black';
});

const btn3 = document.querySelector('.three');

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

let wheelDiv = document.querySelector('.img-content');
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  wheelDiv.style.transform = `scale(${scale})`;
}
let scale = 1;
wheelDiv.onwheel = zoom;


let contDest = document.querySelector('.content-destination');
console.log(contDest);

function greenBlack(element) {
  element.target.style.color =  'green';
  element.target.style.backgroundColor = 'black';
}

contDest.addEventListener('mouseover', greenBlack);

function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);




