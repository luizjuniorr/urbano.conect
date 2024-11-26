const botaoRecomecar = document.querySelector("main section button")

botaoRecomecar.addEventListener('click', botaoRecomecarIr)

function botaoRecomecarIr() {
    window.location.href = "../quiz/quiz.html"
}

function inserirResultado() {
    const divPontuacao = document.querySelector("main section .pontuacao")
    const pontos = localStorage.getItem("pontos")

    divPontuacao.innerHTML = `
                <h2>Você acertou...</h2>

                <strong>${pontos}</strong>
                <p>de 15 questões</p>
    `
}

inserirResultado()

async function saveRanking() {
    const pontos = localStorage.getItem("pontos")
    const token = localStorage.getItem("token")

    const info = {
        pontos,
        token 
    }

    const response = await fetch("https://urbanoconectbackend.vercel.app/save-score", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify ({ info })
    }).then(response => response.json())
}


saveRanking()

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