const botaoVoltar = document.querySelector("section div button")

botaoVoltar.addEventListener("click", botaoVoltarIr)

function botaoVoltarIr() {
    window.location.href = "../../index.html"
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