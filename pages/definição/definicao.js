const inicio = document.querySelector("header .logo")

inicio.addEventListener("click", homeIr)

function homeIr() {
    window.location.href = "../../index.html"
}

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

const botaoDireita = document.querySelector(".direita")
botaoDireita.addEventListener("click", direita)

function direita(){
    window.location.href = "../exodorural/exodorural.html"
}