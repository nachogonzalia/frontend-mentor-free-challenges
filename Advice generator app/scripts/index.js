const adviceId = document.getElementById("adviceId")
const adviceQuote = document.getElementById("adviceQuote")
const button = document.getElementById("button")

function adviceInfo(){
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
  .then(response => response.json())
  .then(data => {
    let advice = data.slip
    adviceId.innerHTML = `ADVICE #${advice.id}`
    adviceQuote.innerHTML = `${advice.advice}`
  })
}

button.addEventListener("click", adviceInfo)