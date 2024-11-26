export function homeIr(homeUrl) {
    const inicio = document.querySelector("header .logo")
    inicio.addEventListener("click", () => {
        window.location.href = homeUrl
    })
}