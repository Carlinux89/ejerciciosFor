function listarNumeros() {
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
}


function listarNumerosReversa() {
    for (let i = 10; i > 0; i--) {
        console.log(i)
    }
}

function listarPares() {
    for (let i = 0; i < 20; i += 2) {
        console.log(i)
    }
}

function listarImpares() {
    console.log("Listar Impares");
    for (let i = 1; i < 8; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }

    }
}

function sumarNumeros() {
    let suma = 0;
    for (let i = 0; i < 10; i++) {
        suma += i;
        console.log(suma)
    }
}

function mostrarEnTxt(idTxt) {
    let componente = document.getElementById(idTxt);
    return componente.value;
}

function limpiar() {
    document.getElementById("txtEjercicio").value = "";
    console.clear();
}

//funcion Principal que ejecuta boton HTML
function ejecutar() {
    console.clear();
    let ejercicio = parseInt(mostrarEnTxt("txtEjercicio"));
    if (ejercicio == 1) {
        listarNumeros()
    } else if (ejercicio == 2) {
        listarNumerosReversa()
    } else if (ejercicio == 3) {
        listarPares()
    } else if (ejercicio == 4) {
        listarImpares()
    } else if (ejercicio == 5) {
        sumarNumeros()
    }
}


// function ejecutar(numEjercicio) {
//     if (numEjercicio == 1) {
//         listarNumeros()
//     } else if (numEjercicio == 2) {
//         listarNumerosReversa()
//     } else if (numEjercicio == 3) {
//         listarPares()
//     }
// }
