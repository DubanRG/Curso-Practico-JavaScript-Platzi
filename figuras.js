// CODIGO DEL AREA DE CUADRADO

console.group("cuadrados");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: "+ ladoCuadrado+" Cm");

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado*4;
}
//console.log("El perímetro del cuadrado mide: "+ perimetroCuadrado+" Cm");

function areaCuadrado (ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
}
//console.log( "El área del cuadrado mide: " +areaCuadrado+" Cm^2");
console.groupEnd();

//CODIGO AREA DEL TRIANGULO

console.group("triangulos");
// const ladotriangulo1 = 6;
// const ladotriangulo2 = 6;
// const basetriangulo = 4;
// console.log(
//     "los lados del triángulo miden: "
//     + ladotriangulo1
//     + " Cm, " 
//     + ladotriangulo2
//     + " Cm, y "
//     + basetriangulo
//     +" Cm" 
// );
// const alturaTriangulo = 5.5;
// console.log("la altura del triangulo es de: "
// + alturaTriangulo+ " Cm.")

function perimetroTriangulo(lado1,lado2,base) {
  return lado1 + lado2 + base;  
} 
//console.log("El perimetro del triangulo es de: " + perimetroTriangulo+ " Cm")

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 

// console.log("El area del Triangulo es de: " 
// + areaTriangulo + " Cm^2");
console.groupEnd();

//CODIGO DEL AREA DEL CIRCULO

console.group("circulos");

// const radio = 4;
function diametroCirculo (radio) {
    return radio * 2;
}

const PI = Math.PI;

// console.log("el radio del circulo mide: "+ radio+" Cm");

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro* PI;
}
// console.log("El perímetro del circulo mide: "+ perimeCirculo+" Cm");

function areaCirculo (radio){
    return (radio * radio) * PI;
}
// console.log( "El área del circulo mide: " +areaCirculo+" Cm^2");
console.groupEnd();

//INTERACTUAMOS CON HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}