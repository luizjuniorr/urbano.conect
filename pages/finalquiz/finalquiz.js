import { botaoHomeir } from "../../helpers/botaohome.js"
import { abrirMenu, fecharMenu } from "../../helpers/menu.js"

const botaoSobreNos = document.querySelector("header .menus #sobrenos")
const botaoSugestoes = document.querySelector("header .menus #sugestoes")
const botaoRecomecar = document.querySelector("main section button")

botaoSobreNos.addEventListener('click', botaoSobreNosir)
botaoSugestoes.addEventListener('click', botaoSugestoesir)
botaoRecomecar.addEventListener('click', botaoRecomecarIr)

function botaoSobreNosir() {
    window.location.href = "../sobrenos/sobrenos.html"
}

function botaoSugestoesir() {
    window.location.href = "../sugestoes/sugestoes.html"
}

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