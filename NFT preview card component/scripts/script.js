const eth = document.getElementById('eth');
const eye = document.getElementById('eye');
const box = document.getElementById('box');

eye.addEventListener ('mouseenter', () => {
  eye.classList.add('active')
  box.classList.add('mid-opacity')
})

eye.addEventListener ('mouseleave', () => {
  eye.classList.remove('active')
  box.classList.remove('mid-opacity')
})