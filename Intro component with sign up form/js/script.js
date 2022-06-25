// button
const submit = document.getElementById('submit')

// text areas
const fstName = document.getElementById('fst-name')
const lstName = document.getElementById('lst-name')
const email = document.getElementById('email')
const password = document.getElementById('password')

// error messages
const fstNameError = document.getElementById('fst-name-error')
const lstNameError = document.getElementById('lst-name-error')
const emailError = document.getElementById('email-error')
const passwordError = document.getElementById('password-error')

// error icon
const iconError1 = document.getElementById('icon-error1')
const iconError2 = document.getElementById('icon-error2')
const iconError3 = document.getElementById('icon-error3')
const iconError4 = document.getElementById('icon-error4')

// arrays
const textAreas = [fstName, lstName, email, password]
const errorMessages = [fstNameError, lstNameError, emailError, passwordError]
const errorIcons = [iconError1, iconError2, iconError3, iconError4]


submit.addEventListener('click', function(e) {
  // validate first name
  if (fstName.value === '') {
    fstNameError.classList.remove('hide')
    iconError1.classList.remove('hide')
    e.preventDefault()
  }
  // validate last name
  if (lstName.value === '') {
    lstNameError.classList.remove('hide')
    iconError2.classList.remove('hide')
    e.preventDefault()
  }
  // validate email
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (!emailRegex.test(email.value)) {
    emailError.classList.remove('hide')
    iconError3.classList.remove('hide')
    e.preventDefault()
  }
  // validate password
  if (password.value === '') {
    passwordError.classList.remove('hide')
    iconError4.classList.remove('hide')
    e.preventDefault()
  }
  else {
    e.defaultPrevented()
  }
})

fstName.focus()