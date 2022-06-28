const error = document.getElementById('error-text')
const btn = document.getElementById('btn')
const email = document.getElementById('email')

emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

btn.addEventListener('click', (e) => {
  if(email.value === '') {
    e.preventDefault()
    error.innerHTML = 'Whoops! It looks like you forgot to add your email'
    error.classList.remove('hide')
    error.classList.add('error')
    email.classList.add('error-border')
  }
  else if (!emailRegex.test(email.value)) {
    e.preventDefault()
    error.innerHTML = 'Please provide a valid email address'
    error.classList.remove('hide')
    error.classList.add('error')
    email.classList.add('error-border')
  }
})