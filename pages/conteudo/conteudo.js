import { botaoHomeir } from "../../helpers/botaohome.js"
import { abrirMenu, fecharMenu } from "../../helpers/menu.js"

const botaoSobreNos = document.querySelector("header .menus #sobrenos")
const botaoSugestoes = document.querySelector("header .menus #sugestoes")
const botaoDefinicao = document.querySelector(".conteudos .definicao button")
const botaoExodo = document.querySelector(".conteudos .exodo button")
const botaoIndustrializacao = document.querySelector(".conteudos .industrializacao button")
const botaoBeneficioseproblemas = document.querySelector(".conteudos .beneficioseproblemas button")

botaoSobreNos.addEventListener('click', botaoSobreNosir)
botaoSugestoes.addEventListener('click', botaoSugestoesir)
botaoDefinicao.addEventListener("click", botaoDefinicaoir)
botaoExodo.addEventListener("click", botaoExodoir)
botaoIndustrializacao.addEventListener("click", botaoIndustrializacaoir)
botaoBeneficioseproblemas.addEventListener("click", botaoBeneficioseproblemasir)

function botaoSobreNosir() {
    window.location.href = "../sobrenos/sobrenos.html"
}

function botaoSugestoesir() {
    window.location.href = "../sugestoes/sugestoes.html"
}

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