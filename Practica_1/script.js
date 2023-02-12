//Creo las variables del chat-web idenficandolas por su id
const mensajes = document.getElementById("mensajes");
const mensajeInput = document.getElementById("mensaje-input");
const botonEnviar = document.getElementById("boton-enviar");
const botonAddContacto = document.getElementById("boton-add-contacto");

/*
    Funcion para enviar un mensaje.
    Al enviar un mensaje, se crea un elemento "div" con la clase "message right" y un elemento "p" con el texto del mensaje.
    El elemento "div" se añade al contenedor de mensajes.
    El campo de texto se limpia y automaticamente se crea un elemento "div" con la clase "message left" y un elemento "p"
    con un mensaje aleatorio (del contacto) gracias a la función setTimeout.
 */
const enviarMensaje = () => {
    //Mensaje del usuario
    const mensajeUsuario = mensajeInput.value;
    if (!mensajeUsuario) return; //Si el campo de texto está vacío, no se envia el mensaje
    const mensajeUsuarioDiv = document.createElement("div");
    mensajeUsuarioDiv.classList.add("mensaje", "der"); //Añado una clase "mensaje" y otra "right" al elemento "div"

    //Creo un elemento "p" para el texto del mensaje
    const mensajeUsuarioP = document.createElement("p");
    mensajeUsuarioP.textContent = mensajeUsuario;

    mensajeUsuarioDiv.appendChild(mensajeUsuarioP); //Añado el texto del mensaje al elemento "div"
    mensajes.appendChild(mensajeUsuarioDiv); //Añado el elemento "div" al contenedor de mensajes
    mensajeInput.value = ""; //Limpio el campo de texto

    //Mensaje del contacto
    setTimeout(() => {
        //Creo un elemento "div" para el mensaje del contacto
        const mensajeContactoDiv = document.createElement("div");
        mensajeContactoDiv.classList.add("mensaje", "izq");
        const mensajeContactoP = document.createElement("p"); //Creo un elemento "p" para el texto del mensaje
        //Array con mensajes aleatorios
        const mensajeContacto = [
            "¿Cómo estás?",
            "¿Qué tal el día?",
            "¿Qué tal el fin de semana?",
            "¿Qué tal el trabajo?",
            "¿Tus compañeros te caen bien?",
            "¿Tienes pareja?",
            "¿Qué has comido hoy?",
            "¿Has ido al gym?",
        ];
        const mensajeAleatorio = Math.floor(Math.random() * mensajeContacto.length);
        mensajeContactoP.textContent = mensajeContacto[mensajeAleatorio];
        mensajeContactoDiv.appendChild(mensajeContactoP); //Añado el texto del mensaje al elemento "div"
        mensajes.appendChild(mensajeContactoDiv); //Añado el elemento "div" al contenedor de mensajes
    }, 1000);
};

//Formas de enviar un mensaje
botonEnviar.addEventListener("cliclck", enviarMensaje); //Envio un mensaje al hacer clic en el botón "Enviar"
mensajeInput.addEventListener("keyup", (event) => { //Envio un mensaje al pulsar "Enter" en el campo de texto
    if (event.key === "Enter") {
        enviarMensaje();
    }
});

//Funcion para mostrar los mensajes del contacto seleccionado. NOTA: Se borran los mensajes del contacto anterior
function mostrarMensajes() {
    const mensajes = document.getElementById("mensajes");
    mensajes.innerHTML = "";
}

//Funcion para añadir un contacto a la lista de la siguiente manera: "Contacto 1", "Contacto 2", etc.
let contacto = 1;
function addContacto() {
    const listaContactos = document.getElementById("lista-contactos");
    const nuevoContacto = document.createElement("li"); //Creo un elemento para el nuevo contacto
    nuevoContacto.innerText = `Contacto ${contacto}`; //Añado el texto al elemento
    nuevoContacto.addEventListener("click", () => {
        let contactoSeleccionado = nuevoContacto.innerText;
        document.getElementById("nombre-contacto").innerText = contactoSeleccionado;
        mostrarMensajes();
    });
    listaContactos.appendChild(nuevoContacto);
    contacto++;
}
botonAddContacto.addEventListener("click", addContacto);