const inicio = document.querySelector("header .logo")

inicio.addEventListener("click", homeIr)

function homeIr() {
    window.location.href = "../../index.html"
}

const botaoEsquerda = document.querySelector(".esquerda")
botaoEsquerda.addEventListener("click", esquerda)

function esquerda(){
    window.location.href = "../../definiçao/definicao.html"
}

const botaoDireita = document.querySelector(".direita")
botaoDireita.addEventListener("click", direita)

function direita(){
    window.location.href = "../principaisdesafios/principaisdesafios.html"
}