

const operador = prompt('Ingrese el simbolo de la operación: ');


const numero1 = parseFloat(prompt('Primer número: '));
const numero2 = parseFloat(prompt('Segundo número: '));

let resultado;


if (operador == '+') {
    resultado = numero1 + numero2;
}
else if (operador == '-') {
    resultado = numero1 - numero2;
}
else if (operador == '*') {
    resultado = numero1 * numero2;
}
else {
    resultado = numero1 / numero2;
}


console.log(`${numero1} ${operador} ${numero2} = ${resultado}`);