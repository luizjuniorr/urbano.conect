const botaoEsquerda = document.querySelector(".esquerda")
botaoEsquerda.addEventListener("click", esquerda)

function esquerda(){
    window.location.href = "../definição/definicao.html"
}

const botaoDireita = document.querySelector(".direita")
botaoDireita.addEventListener("click", direita)

function direita(){
    window.location.href = "../industrializacao/industrializacao.html"
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