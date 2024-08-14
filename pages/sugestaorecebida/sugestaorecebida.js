import { botaoHomeir } from "../../helpers/botaohome.js"

const botaoVoltar = document.querySelector("section div button")

botaoVoltar.addEventListener("click", botaoVoltarIr)

function botaoVoltarIr() {
    window.location.href = "../../index.html"
}