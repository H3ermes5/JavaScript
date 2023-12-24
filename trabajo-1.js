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

// Login 🕵️‍♂️

let mensaje = "USUARIO NO REGISTRADO⚠️"

function login(){
    let user, pass;
    
    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if(user == "Jeremias" && pass == "1234"){

        window.location = "pagina.html";

    }
    else{
        alert(mensaje)
    }
}