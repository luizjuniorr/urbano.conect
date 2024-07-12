import { botaoHomeir } from "../../helpers/botaohome.js"
import { abrirMenu, fecharMenu, botaoSobreNosir, botaoSugestoesir } from "../../helpers/menu.js"

const botaoDefinicao = document.querySelector(".conteudos .definicao button")
const botaoExodo = document.querySelector(".conteudos .exodo button")
const botaoIndustrializacao = document.querySelector(".conteudos .industrializacao button")
const botaoBeneficioseproblemas = document.querySelector(".conteudos .beneficioseproblemas button")

botaoDefinicao.addEventListener("click", botaoDefinicaoir)
botaoExodo.addEventListener("click", botaoExodoir)
botaoIndustrializacao.addEventListener("click", botaoIndustrializacaoir)
botaoBeneficioseproblemas.addEventListener("click", botaoBeneficioseproblemasir)

function botaoDefinicaoir() {
    window.location.href = "../definição/definicao.html"
}

function botaoExodoir() {
    window.location.href = "../exodorural/exodorural.html"
}

function botaoIndustrializacaoir() {
    window.location.href = "../industrializacao/industrializacao.html"
}

function botaoBeneficioseproblemasir() {
    window.location.href = "../beneficioseproblemas/beneficioseproblemas.html"
}