import { botaoHomeir } from "../../helpers/botaohome.js"

const botaoQuiz = document.querySelector("main section button")

botaoQuiz.addEventListener('click', botaoQuizir)

function botaoQuizir() {
    window.location.href = "../perguntasquiz/perguntasquiz.html"
}
