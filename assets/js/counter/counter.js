const addbuttons = Array.from(document.querySelectorAll('.btn-add'));

addbuttons.forEach(button => {
  button.addEventListener('click', showCounter);
})

function showCounter() {
  this.classList.add('d-none');
  const counterbox = this.nextElementSibling;
  
  if(counterbox.classList.contains('active')) {
    counterbox.classList.remove('active');
  } else {
    counterbox.classList.add('active');
  }

  const decrement = counterbox.querySelector('.btn-decrement');
  const input = counterbox.querySelector('.counterfield');
  const increment = counterbox.querySelector('.btn-increment');

  input.value++;

  decrement.addEventListener('click', () => {
    if(input.value > 0) {
      input.value--;
    }

    if(input.value < 1) {
      counterbox.classList.remove('active');
      this.classList.remove('d-none');
    }
  })

  increment.addEventListener('click', () => {
    input.value++;
  })
}