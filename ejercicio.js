//ejercicio 1
function listarNumeros() {
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
}

//ejercicio 2
function listarNumerosReversa() {
    for (let i = 10; i > 0; i--) {
        console.log(i)
    }
}

//ejericicio 3
function listarPares() {
    for (let i = 0; i < 20; i += 2) {
        console.log(i)
    }
}

//ejercicio 4
function listarImpares() {
    console.log("Listar Impares");
    for (let i = 1; i < 8; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }

    }
}

//ejercicio 5
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
    switch(ejercicio){
        case 1:
        listarNumeros();
            break;
        case 2:
        listarNumerosReversa();
            break;
        case 3:
        listarPares();
            break;
        case 4:
        listarImpares();
            break;
        case 5:
        sumarNumeros();
            break;
        default:
            break;
    }
}


// function ejecutar(numEjercicio) {
//     switch(numEjercicio){
//         case 1:
//         listarNumeros();
//             break;
//         case 2:
//         listarNumerosReversa();
//             break;
//         case 3:
//         listarPares
//             break;
//         case 4:
//         listarImpares
//             break;
//         case 5:
//         sumarNumeros();
//             break;
//         default:
//         break;
//     }
// }
