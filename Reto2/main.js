
function ModalAM() {
    let modal = document.getElementById("formAM");
    let btn = document.getElementById("btnAM");
    let span = document.getElementsByClassName("close1")[0];
    let cancelar = document.getElementById("btncanAM");

    return ModalINI(modal,btn,span,cancelar)

}

function ModalED() {
    let modal = document.getElementById("formED");
    let btn = document.getElementById("btnED");
    let span = document.getElementsByClassName("close0")[0];
    let cancelar = document.getElementById("btncanED");

    return ModalINI(modal,btn,span,cancelar)

}

function ModalINI(modal,btn,span,cancelar) {
    btn.onclick = function() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    cancelar.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}






// para eliminar
function Modal2() {

    let modal = document.getElementById("verModal2");
    let btn = document.getElementById("boton2");
    let span = document.getElementsByClassName("close2")[0];
    let body = document.getElementsByTagName("body")[0];
    let cancelar = document.getElementById("btncancelar");

    return Eliminar(modal,btn,span,body,cancelar)
}

function Modal3() {

    let modal = document.getElementById("verModal3");
    let btn = document.getElementById("boton3");
    let span = document.getElementsByClassName("close3")[0];
    let body = document.getElementsByTagName("body")[0];
    let cancelar = document.getElementById("btncancelar2");

    return Eliminar(modal,btn,span,body,cancelar)
}

function Eliminar (modal, btn ,span, body,cancelar){
    btn.onclick = function() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    cancelar.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}