import { botaoHomeir } from "../../helpers/botaohome.js"
import { abrirMenu, fecharMenu } from "../../helpers/menu.js"

const botaoSobreNos = document.querySelector("header .menus #sobrenos")
const botaoSugestoes = document.querySelector("header .menus #sugestoes")

botaoSobreNos.addEventListener('click', botaoSobreNosir)
botaoSugestoes.addEventListener('click', botaoSugestoesir)

function botaoSobreNosir() {
    window.location.href = "../sobrenos/sobrenos.html"
}

function botaoSugestoesir() {
    window.location.href = "../sugestoes/sugestoes.html"
}

const botaoDireita = document.querySelector(".setas .direita")
botaoDireita.addEventListener("click", direita)

function direita(){
    window.location.href = "../exodorural/exodorural.html"
}