import { botaoHomeir } from "../../helpers/botaohome.js"
const botaoRecomecar = document.querySelector("main section button")

botaoRecomecar.addEventListener('click', botaoRecomecarIr)

function botaoRecomecarIr() {
    window.location.href = "../quiz/quiz.html"
}

function inserirResultado() {
    const divPontuacao = document.querySelector("main section .pontuacao")
    const pontos = localStorage.getItem("pontos")

    divPontuacao.innerHTML = `
                <h2>Você acertou...</h2>

                <strong>${pontos}</strong>
                <p>de 10 questões</p>
    `
}

inserirResultado()