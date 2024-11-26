export async function getName() {
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
    
    nameP.innerText = `${response.name}`
}