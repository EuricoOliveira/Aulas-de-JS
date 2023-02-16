// Exercício I
// Defina 3 variáveis com notas de 0 a 10. Calcule a média
// das três notas. Em seguida mostre no console o status do aluno:
//      Maior ou igual 7 = Aprovado
//      Entre 5 e 7 = Reforço
//      Menor que 5 = Reprovação

nota1 = 3;
nota2 = 6;
nota3 = 9;
mediaNotas = (nota1 + nota2 + nota3) / 3;
if (mediaNotas >= 7) {
    console.log("Você está aprovado.");
} else if (mediaNotas < 7 && mediaNotas >= 5) {
    console.log("Você está de reforço.");
} else {
    console.log("Você está reprovado.");
}

// Exercício II
// Simule a tabela do IMC com base no valor calculado
// no exercício anterior. Indique o status com base no valor do IMC.

let peso = 80;
let altura = 1.85;
let imc = peso / (altura * altura);
console.log(imc);
if (imc < 18.5) {
  console.log("Abaixo do peso!");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Sobrepeso");
} else if (imc >= 30 && imc < 35) {
  console.log("Grau I");
} else if (imc >= 35 && imc < 40) {
  console.log("Grau II");
} else {
  console.log("Grau III");
}

// Exercício III: Defina um número a e um número b.
// Verifica qual o maior, ou menor, ou se são iguais!

let a = 5;
let b = 10;

if (a > b) {
  console.log("a é maior do que b");
} else if (a < b) {
  console.log("b é maior do que a");
} else {
  console.log("a e b são iguais");
}
