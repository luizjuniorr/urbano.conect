async function getName() {
    const token = localStorage.getItem("token")

    if(!token) {
        return
    }

    const response = await fetch("https://urbanoconectbackend.vercel.app/getname", {
        headers: {
            "Authorization": token
        }
    }).then(response => response.json())

    const nameP = document.querySelector("header .navegacao .user p")
    const nome = document.querySelector("main .all .usuario p strong")
    
    nameP.innerText = `${response.name}`
    nome.innerText = `${response.name}`
}

const button = document.querySelector(".all .sair button")
    button.addEventListener("click", () => {
        localStorage.removeItem("token")
        window.location.reload()
    })

import { verifyToken } from "../../utils/verifytoken.js"
import { homeIr } from "../../utils/home.js"
import { perfilIr } from "../../utils/perfil.js"

const url = "../login/login.html"
const homeUrl = "../../index.html"
const perfilUrl = "../perfil/perfil.html"

verifyToken(url)
getName()
homeIr(homeUrl)
perfilIr(perfilUrl)