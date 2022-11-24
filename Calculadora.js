let numero1 = parseFloat(prompt("Ingrese el primer número: "));

let operacion = prompt("Ingrese la operación a realizar: (+, -, *, /)");

let numero2 = parseFloat(prompt("Ingrese el segundo número: "));

let resultado;

switch(operacion) {
    case '-':
        resultado = (numero1 - numero2);
        alert("El resultado es " + (resultado));
        break;
    case '+':
        resultado = (numero1 + numero2);
        alert("El resultado es " + (resultado));
        break;
    case '*':
        resultado = (numero1 * numero2);
        alert("El resultado es " + (resultado));
        break;
    case '/':
        if(numero2 !=0){
        resultado = (numero1 / numero2);
        alert("El resultado es " + (resultado));
        }else{
            alert("No es posible dividir por cero")
        }
    default:
        alert("Operación invalida")
}
