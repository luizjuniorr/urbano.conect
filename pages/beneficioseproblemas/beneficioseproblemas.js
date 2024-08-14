const inicio = document.querySelector("header .logo")

inicio.addEventListener("click", homeIr)

function homeIr() {
    window.location.href = "../../index.html"
}

const botaoEsquerda = document.querySelector(".esquerda")
botaoEsquerda.addEventListener("click", esquerda)

function esquerda(){
    window.location.href = "../industrializacao/industrializacao.html"
}

const botaoSubir = document.querySelector(".subirpg button")
botaoSubir.addEventListener("click", subirPagina)

function subirPagina() {
    window.Location.href("./beneficioseproblemas.html")
}