const inicio = document.querySelector("header .logo")

inicio.addEventListener("click", homeIr)

function homeIr() {
    window.location.href = "../../index.html"
}

const botaoQuiz = document.querySelector("main section button")

botaoQuiz.addEventListener('click', botaoQuizir)

function botaoQuizir() {
    window.location.href = "../perguntasquiz/perguntasquiz.html"
}