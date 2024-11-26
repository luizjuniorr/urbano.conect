const botaoQuiz = document.querySelector("main section button")

botaoQuiz.addEventListener('click', botaoQuizir)

function botaoQuizir() {
    window.location.href = "../perguntasquiz/perguntasquiz.html"
}

import { verifyToken } from "../../utils/verifytoken.js"
import { getName  } from "../../utils/getname.js"
import { homeIr } from "../../utils/home.js"
import { perfilIr } from "../../utils/perfil.js"

const url = "../login/login.html"
const homeUrl = "../../index.js"
const perfilUrl = "../perfil/perfil.html"

verifyToken(url)
getName()
homeIr(homeUrl)
perfilIr(perfilUrl)