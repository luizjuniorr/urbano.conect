async function register() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const serie = document.getElementById("serie").value
    const password = document.getElementById("password").value
    const passwordConfirmation = document.getElementById("passwordConfirmation").value

    if(name === "" || email === "" || serie === "" || password === "" || passwordConfirmation === ""){
        alert("Preencha todas as informações!")
        return
    }

    if(password !== passwordConfirmation) {
        alert("As senhas não conferem. Digite as senhas novamente!")
        document.getElementById("password").value = ""
        document.getElementById("passwordConfirmation").value = ""
        return
    }

    const user = {
        name,
        email,
        serie,
        password
    }

    const response = await fetch("https://urbanoconectbackend.vercel.app/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())

    alert(response.message)

    if(response.userExists) {
        window.location.reload()
        return
    }

    window.location.href = "../login/login.html"
}

const button = document.querySelector("form button")
button.addEventListener("click", (event) => {
    event.preventDefault()
    register()
})