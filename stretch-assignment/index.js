const block = document.querySelectorAll('.block');
console.log(block);

let blockArray = Array.from(block);
console.log(blockArray);

blockArray.forEach((element) => {
  element.target.display.order = '1';
  // element.style.backgroundColor = 'green';
  element.addEventListener('click', (event) => {
    // event.order = '0';
    // event.target.style.backgroundColor = 'yellow';
    event.target.display.order = '0';
  });
});