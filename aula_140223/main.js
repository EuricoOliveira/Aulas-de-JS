// Dia 14.02
// Variáveis e operadores

// let = palavra reservada
// let [NOME DA VARIAVEL]
let nomeCompleto; // camel case

nomeCompleto = "José Almir"; // atribuição

// console.log("batata");
// console.log(nomeCompleto);
nomeCompleto = "Pedro Tavares"; // re-atribuição (redefinir)
// console.log(nomeCompleto);

let idade = 19;
idade = 20;

// concatenação
// console.log("Meu nome é " + nomeCompleto + " e tenho " + idade + " anos!");

// const = define uma constante = impede a re-atribuição
const cpf = "000.000.000-00";
// cpf = "batata";

// Tipos
let golsSofridos = 3; // numero = number
let chanceDerrota = 0.55; // numero decimal
let posseBola = 33.57; // 33,57
let nomeTime = "Valência"; // string
let patrocinio; // undefined = não tem valor definido
patrocinio = "Soulcode";
// boolean = 2 valores possiveis (true ou false)
let timeGanhou = true; // "Lê: É verdade que o timeGanhou"
let timePerdeu = false; // "Lê: É falso que o timePerdeu"

// Operadores aritméticos
let soma = 200 + 100;
let sub = 100 - 55;
let mult = 5 * 7;
let div = 400 / 25;
let resto = 8 % 3;
let expressao = (soma + sub) * div;
let expressao2 = mult - div / resto;

// console.log("A soma é " + soma + "!");
// console.log(`A subtração é ${sub}!`); // Template strings = interpolação de strings
// console.log(`A multiplicação é ${mult}!`);
// console.log(div);
// console.log(resto);
// console.log(expressao);
// console.log(expressao2); 


// Incremento (incrementando os valor da váriavel)
let i = 0;
//i = i + 1; // o novo valor de i é 0 + 1 = 1
//i = i + 1; // o novo valor de i é 1 + 1 = 2
//i = i + 1; // o novo valor de i é 2 + 1 = 3
//i = i + 1; // o novo valor de i é 3 + 1 = 4
i++; // 1 = 1 + 1   
//console.log(i);
i++; // altera o valor de 1 somando 1+1 = incremento
//console.log(i);
i--; //i = i - 1 = decremento
//console.log(i);

//Operadores Relacionais (>, <, >=, <=, ==, !=)
let a = 3;
let b = 5;

console.log(a > b); //A é MAIOR que B?
console.log(a < b); // A é MENOR que B?
console.log(b >= a); // B é MAIOR ou igual ao A?
console.log(a <= b); // A é MENOR ou igual ao B?
console.log(a == b); // A é IGUAL a B?
console.log(a != b); // A é DIFERENTE de B?

console.log(a == "3"); // A é IGUAL a "3"?
console.log(a === "3"); // A é estritamente IGUAL a "3"?
console.log(a !== "3"); // A é estritamente DIFERENTE a "3"?
// O operador === compara VALOR e TIPO