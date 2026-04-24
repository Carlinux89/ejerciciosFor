function generarTablas() {
    let contenidoTabla = "";
    let contenedor = document.getElementById("contenedorTabla")
    for (let i = 1; i <= 10; i++) {
        contenidoTabla = contenidoTabla + "<div class='fila'>" + "3 x " + i + " = " + (3 * i) + "</div>"
    }
    contenedor.innerHTML = contenidoTabla;
}