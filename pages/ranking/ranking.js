async function ranking() {
    const token = localStorage.getItem("token");

    // Obtém o ranking do servidor
    const response = await fetch("http://localhost:3000/ranking", {
        headers: {
            "Authorization": token,
        },
    });

    const data = await response.json();

    const ranking = document.querySelector(".ranking");

    data.ranking.forEach((data, pos) => {
        const colocacao = pos + 1; // A posição começa em 1
        ranking.innerHTML += `
            <div class="tabela n${colocacao}">
                <p class="pos">${colocacao}</p> 
                <div class="name">
                    <p>${data.name}</p>
                </div>
                <p class="pontos">${data.score}</p>
            </div>
        `;
    });
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
ranking()