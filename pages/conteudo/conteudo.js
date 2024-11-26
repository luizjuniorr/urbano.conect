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

import { verifyToken } from "../../utils/verifytoken.js"
import { getName  } from "../../utils/getname.js"
import { homeIr } from "../../utils/home.js"
import { perfilIr } from "../../utils/perfil.js"

const url = "../login/login.html"
const homeUrl = "../../index.html"
const perfilUrl = "../perfil/perfil.html"

verifyToken(url)
getName()
homeIr(homeUrl)
perfilIr(perfilUrl)