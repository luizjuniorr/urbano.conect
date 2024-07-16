import { botaoHomeir } from "../../helpers/botaohome.js"
import { abrirMenu, fecharMenu } from "../../helpers/menu.js"

const botaoSobreNos = document.querySelector("header .menus #sobrenos")
const botaoSugestoes = document.querySelector("header .menus #sugestoes")
const botaoSair = document.querySelector(".sair")

let quiz = {}
let pergunta = 1
let pontos = 0
let resposta = ""
let idInputResposta = ""
let respostaCorretaId = ""

botaoSobreNos.addEventListener('click', botaoSobreNosir)
botaoSugestoes.addEventListener('click', botaoSugestoesir)
botaoSair.addEventListener('click', popUpAbrir)

function popUpAbrir() {
    const popUp = document.querySelector(".mensagemsair")
    const body = document.querySelector("body")
    popUp.classList.add("abrir")
    body.classList.add("escurecer")

    const botaoPopUp = document.querySelector(".mensagemsair .conteudo button")
    botaoPopUp.addEventListener("click", voltarPagina)
    
    function voltarPagina() {
        window.location.href = "../quiz/quiz.html"
    }

    const textVoltar = document.querySelector(".mensagemsair .conteudo p.voltar")
    textVoltar.addEventListener("click", textVoltarFecharPopUp)

    function textVoltarFecharPopUp() {
        popUp.classList.remove("abrir")
        body.classList.remove("escurecer")
    }
}

function botaoSobreNosir() {
    window.location.href = "../sobrenos/sobrenos.html"
}

function botaoSugestoesir() {
    window.location.href = "../sugestoes/sugestoes.html"
}

async function buscarPerguntas() {
    const urlDados = "../../data.json"

    await fetch(urlDados).then(resposta => resposta.json()).then(dados => {
        quiz = dados
    })
}

function barraProgresso() {
    const body = document.querySelector("body .barra_progresso")

    body.innerHTML = `
        <div style="width: ${pergunta * 10}%"></div>
        
    `
}

function montarPergunta() {
    const main = document.querySelector("main")

    main.innerHTML = `
    <section class="pergunta">
            <div>
    
                <h2>${alterarSinais(quiz.questions[pergunta-1].question)}</h2>
            </div>
        </section>
    
        <section class="alternativas">
            
            <p>Questão ${pergunta} de 10</p>

            <form action="">
                <label for="alternativa_a">
                    <input type="radio" id="alternativa_a" name="alternativa" value="${alterarSinais(quiz.questions[pergunta-1].options[0])}">
    
                    <div>
                        <span>A</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[0])}
                    </div>
                </label>
    
                <label for="alternativa_b">
                    <input type="radio" id="alternativa_b" name="alternativa" value="${alterarSinais(quiz.questions[pergunta-1].options[1])}">
    
                    <div>
                        <span>B</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[1])}
                    </div>
                </label>
    
                <label for="alternativa_c">
                    <input type="radio" id="alternativa_c" name="alternativa" value="${alterarSinais(quiz.questions[pergunta-1].options[2])}">
    
                    <div>
                        <span>C</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[2])}
                    </div>
                </label>
    
                <label for="alternativa_d">
                    <input type="radio" id="alternativa_d" name="alternativa" value="${alterarSinais(quiz.questions[pergunta-1].options[3])}">
    
                    <div>
                        <span>D</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[3])}
                    </div>
                </label>
            </form>
    
            <button>Responder</button>
        </section>
    `
}

function alterarSinais(texto) {
    return texto.replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

function guardarResposta(evento) {
    resposta = evento.target.value
    idInputResposta = evento.target.id

    const botaoEnviar = document.querySelector(".alternativas button")
    botaoEnviar.addEventListener("click", validarResposta)
}

function validarResposta() {
    const botaoEnviar = document.querySelector(".alternativas button")
    botaoEnviar.innerText = "Próxima"
    botaoEnviar.removeEventListener("click", validarResposta)

    if (pergunta === 10) {
        botaoEnviar.innerText = "Finalizar"
        botaoEnviar.addEventListener("click", finalizar)
    } else {
        botaoEnviar.addEventListener("click", proximaPergunta)
    }
    
    if (resposta === quiz.questions[pergunta-1].answer) {
        document.querySelector(`label[for='${idInputResposta}']`).setAttribute("id", "correta")
        pontos = pontos + 1
    } else {
        document.querySelector(`label[for='${idInputResposta}']`).setAttribute("id", "errada")
        document.querySelector(`label[for='${respostaCorretaId}']`).setAttribute("id", "correta")
    }

    pergunta = pergunta + 1
}

function finalizar() {
    localStorage.setItem("pontos", pontos)

    window.location.href = "../finalquiz/finalquiz.html"
}

function proximaPergunta() {
    barraProgresso()
    montarPergunta()
    adicionarEventoInputs()
}

function adicionarEventoInputs() {
    const inputsResposta = document.querySelectorAll(".alternativas input")
    inputsResposta.forEach(input => {
        input.addEventListener("click", guardarResposta)

        if (input.value === quiz.questions[pergunta-1].answer) {
            respostaCorretaId = input.id
        }
    })
}

async function iniciar() {
    await barraProgresso()
    await buscarPerguntas()
    montarPergunta()
    adicionarEventoInputs()
}

iniciar()