import { botaoHomeir } from "./helpers/botaohome.js"

const botaoConteudo = document.querySelector(".assunto button")

botaoConteudo.addEventListener("click", botaoConteudoir)

function botaoConteudoir() {
    window.location.href = "./pages/conteudo/conteudo.html"
}