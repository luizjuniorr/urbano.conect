import { botaoHomeir } from "./helpers/botaohome.js"
import { abrirMenu, fecharMenu, botaoSobreNosir, botaoSugestoesir } from "./helpers/menu.js"

const botaoConteudo = document.querySelector(".assunto button")
const botaoSobre = document.querySelector(".boasvindas .textos")

botaoConteudo.addEventListener("click", botaoConteudoir)
botaoSobre.addEventListener("click", botaoSobreir)

function botaoConteudoir() {
    window.location.href = "./pages/conteudo/conteudo.html"
}

function botaoSobreir() {
    window.location.href = "./pages/sobrenos/sobrenos.html"
}