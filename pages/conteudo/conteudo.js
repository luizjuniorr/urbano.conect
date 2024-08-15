const inicio = document.querySelector("header .logo")

inicio.addEventListener("click", homeIr)

function homeIr() {
    window.location.href = "../../index.html"
}

const botaoDefinicao = document.querySelector(".conteudos .definicao")
const botaoPrincipaisDesafios = document.querySelector(".conteudos .principaisdesafios")
const botaoIndustrializacao = document.querySelector(".conteudos .industrializacao ")
const botaoSustentabilidade = document.querySelector(".conteudos .sustentabilidade")

botaoDefinicao.addEventListener("click", botaoDefinicaoIr)
botaoPrincipaisDesafios.addEventListener("click", botaoPrincipaisDesafiosIr)
botaoIndustrializacao.addEventListener("click", botaoIndustrializacaoIr)
botaoSustentabilidade.addEventListener("click", botaoSustentabilidadeIr)

function botaoDefinicaoIr() {
    window.location.href = "../definicao/definicao.html"
}

function botaoPrincipaisDesafiosIr() {
    window.location.href = "../principaisdesafios/principaisdesafios.html"
}

function botaoIndustrializacaoIr() {
    window.location.href = "../industrializacao/industrializacao.html"
}

function botaoSustentabilidadeIr() {
    window.location.href = "../sustentabilidades/sustentabilidades.html"
}