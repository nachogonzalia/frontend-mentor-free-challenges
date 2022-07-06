const questions = document.querySelectorAll(".container")

questions.forEach((question) => {
  const btn = question.querySelector(".container__btn")
  const questionText = question.querySelector(".container__up")
  
  btn.addEventListener("click", () => {
    // show the answer
    question.classList.toggle("show-text")

    // if other questions are open, close them
    questions.forEach((item) => {
      if(item !== question) {
        item.classList.remove("show-text")
      }
    })
  })

  // if the question is open, close it
  questionText.addEventListener("click", () => {
    questions.forEach((item) => {
      if(item !== question) {
        item.classList.remove("show-text")
      }
    })
    question.classList.toggle("show-text")
  })
})