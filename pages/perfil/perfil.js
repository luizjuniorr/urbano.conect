async function getName() {
    const token = localStorage.getItem("token")

    if(!token) {
        return
    }

    const response = await fetch("http://localhost:3000/getname", {
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

const url = "../login/login.html"

verifyToken(url)
getName()