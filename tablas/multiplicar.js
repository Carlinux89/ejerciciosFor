function validarNumero(valor) {
    // validar vacío
    if (valor === "" || valor === null) {
        return "⚠️ Ingrese un número";
    }

    // convertir a número
    const numero = Number(valor);

    // validar si no es número
    if (isNaN(numero)) {
        return "⚠️ Solo se permiten números";
    }

    // validar menor o igual a 0
    if (numero <= 0) {
        return "⚠️ Debe ingresar un número mayor a 0";
    }

    // todo correcto
    return "";
}



function generarTablas() {

    const input = document.getElementById("txtTabla");
    const mensaje = document.getElementById("mensajeError");
    const error = validarNumero(input.value);
    if (error !== "") {
        mensaje.innerText = error;
        input.classList.add("input-error");
        return;
    }
    // limpiar error
    mensaje.innerText = "";
    input.classList.remove("input-error");

    let contenidoTabla = "";
    let numero = document.getElementById("txtTabla").value;
    let contenedor = document.getElementById("contenedorTabla")
    for (let i = 1; i <= 10; i++) {
        contenidoTabla = contenidoTabla + "<div class='fila'>" + numero + " x " + i + " = " + (numero * i) + "</div>"
    }
    contenedor.innerHTML = contenidoTabla;
    //document.getElementById("txtTabla").value = "";
    //let error = document.getElementById("mensajeError");
    // if (numero <= 0 || numero === "") {
    //     error.innerText = "⚠️ Debe ingresar un número mayor a 0";
    //     document.getElementById("txtTabla").value = "";
    // } else {

    //     error.innerText = "";

    // }
}