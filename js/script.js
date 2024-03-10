let indice1 = 0, indice2 = 1, indice3 = 2, indice4 = 3;
let s1 = 1, s2 = 1, s3 = 1, s4 = 1;
let valor = 1;
let bucle;

function iniciar() {
    c1 = document.querySelector(".c1");
    c2 = document.querySelector(".c2");
    c3 = document.querySelector(".c3");
    c4 = document.querySelector(".c4");

    document.addEventListener("mousemove", movercursor);

    bucle = setInterval(() => {
        c1.style.scale = 0; c2.style.scale = 0;
        c3.style.scale = 0; c4.style.scale = 0;
    }, 100)
}
let arrayColores = [
    "greenyellow",
    "magenta",
    "cyan",
    "orangered"
];
function movercursor(evento) {
    let posicx = evento.pageX;
    let posicy = evento.pageY;

    c1.style.boxShadow = "0px 0px 10px 10px " + arrayColores[indice4];
    c2.style.boxShadow = "0px 0px 10px 10px " + arrayColores[indice3];
    c3.style.boxShadow = "0px 0px 10px 10px " + arrayColores[indice2];
    c4.style.boxShadow = "0px 0px 10px 10px " + arrayColores[indice1];

    c1.style.scale = s1; c2.style.scale = s2;
    c3.style.scale = s3; c4.style.scale = s4;

    c1.style.top = posicy - 10 + "px"; c1.style.left = posicx - 10 + "px";
    c2.style.top = posicy - 20 + "px"; c2.style.left = posicx - 20 + "px";
    c3.style.top = posicy - 31.5 + "px"; c3.style.left = posicx - 31 + "px";
    c4.style.top = posicy - 42 + "px"; c4.style.left = posicx - 42 + "px";

    if (valor == 4) {
        if (indice1 == 3) { indice1 = 0; } else { indice1++; }
        if (indice2 == 3) { indice2 = 0; } else { indice2++; }
        if (indice3 == 3) { indice3 = 0; } else { indice3++; }
        if (indice4 == 3) { indice4 = 0; } else { indice4++; }
    } else if (valor > 4) { valor = 1; }

    valor++;

    if (s1 > .99) { s1 = 0; } else { s1 += .05; }
    if (s2 > .99) { s2 = 0; } else { s2 += .05; }
    if (s3 > .99) { s3 = 0; } else { s3 += .05; }
    if (s4 > .99) { s4 = 0; } else { s4 += .05; }
}
window.addEventListener("load", iniciar, false);