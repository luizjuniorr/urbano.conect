export function perfilIr(perfilUrl) {
    const inicio = document.querySelector("header .navegacao .user")
    inicio.addEventListener("click", () => {
        window.location.href = perfilUrl
    })
}