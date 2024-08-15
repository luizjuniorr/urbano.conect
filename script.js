const inicio = document.querySelector("header .logo")

inicio.addEventListener("click", homeIr)

function homeIr() {
    window.location.href = "./index.html"
}

const botaoConteudo = document.querySelector(".conteudo button")
botaoConteudo.addEventListener("click", irConteudo)

function irConteudo() {
    window.location.href = "./pages/conteudo/conteudo.html"
}