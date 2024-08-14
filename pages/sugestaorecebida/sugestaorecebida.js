const inicio = document.querySelector("header .logo")

inicio.addEventListener("click", homeIr)

function homeIr() {
    window.location.href = "../../index.html"
}

const botaoVoltar = document.querySelector("section div button")

botaoVoltar.addEventListener("click", botaoVoltarIr)

function botaoVoltarIr() {
    window.location.href = "../../index.html"
}