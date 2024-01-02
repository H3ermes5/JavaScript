// Metodo para ver y no ver la contraseña 🫣

const pass = document.getElementById("contraseña")
const icon = document.querySelector(".bx")
icon.addEventListener("click", e => {
    if (pass.type === "password"){
        pass.type = "text";

        icon.classList.remove("bx-show-alt")
        icon.classList.add("bx-hide")

    }
    else {
        pass.type = "password"
    
        icon.classList.add("bx-show-alt")
        icon.classList.remove("bx-hide")

    }
}
)

// Login + Bucle 🕵️‍♂️ 🔄️



let mensaje = "USUARIO NO REGISTRADO⚠️";
let numeroIntento = 3;
let intentos = 0;
let bloqueado = false;

function login() {
    if (bloqueado) {
        alert("Acceso bloqueado. Contacte al soporte.");
        return;
    }

    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("contraseña").value;

    if (user === "Jeremias" && pass === "1234") {
        window.location.href = "pagina.html";
        return;
    } else {
        intentos++;

        if (intentos < numeroIntento) {
            alert(`${mensaje}\n Intentos restantes: ${numeroIntento - intentos}`);
        } else {
            alert(`${mensaje}\n Acceso bloqueado. Contacte al soporte.`);
            bloqueado = true;
        }
    }
}