let cuadro1 = document.querySelector('#cuadro1');
let cuadro2 = document.querySelector('#cuadro2');
let cuadro3 = document.querySelector('#cuadro3');
let cuadro4 = document.querySelector('#cuadro4');
let colorSeleccionado = document.querySelector("#colorSeleccionado");
const refrescar = document.getElementById("refrescar");

document.addEventListener("keydown", function (event) {
    if (event.code === "KeyA") {
        cambiarColor = "red";
    } if (event.code === "KeyS") {
        cambiarColor = "chocolate";
    } if (event.code === "KeyD") {
        cambiarColor = "blue";
    }
    color();
});

function color() {
    colorSeleccionado.style.backgroundColor = cambiarColor;
}

cuadro1.addEventListener('click', () => {
    cuadro1.style.backgroundColor = cambiarColor;
})
cuadro2.addEventListener('click', () => {
    cuadro2.style.backgroundColor = cambiarColor;
})
cuadro3.addEventListener('click', () => {
    cuadro3.style.backgroundColor = cambiarColor;
})
cuadro4.addEventListener('click', () => {
    cuadro4.style.backgroundColor = cambiarColor;
})

refrescar.addEventListener('click', () => {
    location.reload()
})