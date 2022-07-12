const email = document.getElementById('email')
const btn = document.getElementById('btn')
const icon = document.getElementById('error-icon')
const text = document.getElementById('error-text')

emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

btn.addEventListener('click', (e) => {
  if(email.value === '') {
    e.preventDefault()
    email.classList.add('error-border')
    icon.classList.add('show')
    text.innerHTML = 'Please enter an email'
  }
  else if(!emailRegex.test(email.value)) {
    e.preventDefault()
    email.classList.add('error-border')
    icon.classList.add('show')
    text.innerHTML = 'Please provide a valid email'
  }
})