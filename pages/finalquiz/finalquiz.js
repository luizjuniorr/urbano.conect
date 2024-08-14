const inicio = document.querySelector("header .logo")

inicio.addEventListener("click", homeIr)

function homeIr() {
    window.location.href = "../../index.html"
}

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
                <p>de 14 questões</p>
    `
}

inserirResultado()