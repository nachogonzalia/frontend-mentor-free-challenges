const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')

const submit = document.getElementById('submit')
const card = document.getElementById('card')
const thankYou = document.getElementById('thankYou')

const number = document.getElementById('number')

let rate = 0;
let btns = [btn1, btn2, btn3, btn4, btn5]

btn1.addEventListener('click', () => {
  btn1.classList.add('active')
  btns.forEach(btn => {
    if (btn !== btn1) {
      btn.classList.remove('active')
    }
  })
  rate = 1
})

btn2.addEventListener('click', () => {
  btn2.classList.add('active')
  btns.forEach(btn => {
    if (btn !== btn2) {
      btn.classList.remove('active')
    }
  })
  rate = 2
})

btn3.addEventListener('click', () => {
  btn3.classList.add('active')
  btns.forEach(btn => {
    if (btn !== btn3) {
      btn.classList.remove('active')
    }
  })
  rate = 3
})

btn4.addEventListener('click', () => {
  btn4.classList.add('active')
  btns.forEach(btn => {
    if (btn !== btn4) {
      btn.classList.remove('active')
    }
  })
  rate = 4
})

btn5.addEventListener('click', () => {
  btn5.classList.add('active')
  btns.forEach(btn => {
    if (btn !== btn5) {
      btn.classList.remove('active')
    }
  })
  rate = 5
})

submit.addEventListener('click', () => {
  card.classList.add('hidden')
  thankYou.classList.remove('hidden')

  if(rate === 0) number.textContent = `You selected 0 out of 5`
  else number.textContent = `You selected ${rate} out of 5`
})