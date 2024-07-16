const botaoAbrir = document.querySelector(".navegacao button")
const botaoFechar = document.querySelector("header .menus button")
const botaoSobreNos = document.querySelector("header .menus #sobrenos")
const botaoSugestoes = document.querySelector("header .menus #sugestoes")

const body = document.querySelector("body")
const nav = document.querySelector("header .menus")
const header = document.querySelector("header")

botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('click', fecharMenu)
botaoSobreNos.addEventListener('click', botaoSobreNosir)
botaoSugestoes.addEventListener('click', botaoSugestoesir)

export function abrirMenu(){
    body.classList.add("escurecer")
    nav.classList.add("abrir")
    header.classList.add("abrir")
}

export function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
    header.classList.remove("abrir")
}

export function botaoSobreNosir() {
    window.location.href = "../pages/sobrenos/sobrenos.html"
}

export function botaoSugestoesir() {
    window.location.href = "../pages/sugestoes/sugestoes.html"
}