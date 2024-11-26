const botaoConteudo = document.querySelector(".assunto button")
botaoConteudo.addEventListener("click", irConteudo)

function irConteudo() {
    window.location.href = "./pages/conteudo/conteudo.html"
}

import { verifyToken } from "./utils/verifytoken.js"
import { getName  } from "./utils/getname.js"
import { homeIr } from "./utils/home.js"
import { perfilIr } from "./utils/perfil.js"

const url = "./pages/login/login.html"
const homeUrl = "./index.js"
const perfilUrl = "./pages/perfil/perfil.html"

verifyToken(url)
getName()
homeIr(homeUrl)
perfilIr(perfilUrl)

const usuario = document.querySelector("header .user")

usuario.addEventListener("click", () =>{
    window.location.href = "./pages/perfil/perfil.html"
})
