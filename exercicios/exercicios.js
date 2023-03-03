//1.1.3 Crie cinco variáveis que representam cinco notas de um estudante. Cal-
//cule a média ponderada, sabendo que o peso das notas são respectiva-
//mente: 3, 2, 1, 4 e 5.

let nota1 = 8;
let nota2 = 5;
let nota3 = 6;
let nota4 = 9;
let nota5 = 7;
let media = ((nota1 * 3) + (nota2 * 2) + (nota3 * 1) + (nota4 * 4) + (nota5 * 5)) / ( 3 + 2 + 1 + 4 + 5);

console.log(media);


// 1.1.4 Crie duas variáveis que representam as dimensões (em km) de um ter-
// reno: comprimento e largura. Calcule a área deste terreno, em seguida
//converta para hectares. Nota: 1 km2 equivale a 100 hectares.

let comprimento = 60;
let largura = 2;
let area = comprimento * largura;
console.log(area);
//hectar: area(km)*area(km)
//area recebe novo valor em km2
area = area**2; 
console.log(area);

let hectar = area * 100;
console.log(hectar);

// 1.2.4 Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte
// regra para aplicar ajustes salariais: Caso não possua dependentes não
// realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o
// salário. Caso seja acima de 5 aumentar em 40% o salário.

let salario = 50000;
let quantidadeDependentes = 6;

if( quantidadeDependentes > 5 ){
    salario = salario + (salario * 0.4);
} else if (quantidadeDependentes >0 && quantidadeDependentes <=5){
    salario = salario + (salario * 0.3);
};
console.log(salario);



//1.2.6 Crie uma variável ano e verifique se este ano é bissexto. Um ano é bis-
//sexto quando: Caso 1) É um número divisível por 4, mas não é divisível
//por 100. Caso 2) É um número divisível por 4, por 100 e por 400.

let ano = 100;

if(ano % 4 === 0 && ano % 100 !== 0){
    console.log(`O ano ${ano} é um ano bissexto.`);
} else if (ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0) {
    console.log (`O ano ${ano} é um ano bissexto.`);
} else {
    console.log (`O ano ${ano} não é um ano bissexto.`);
};

// 1.3.1 Defina uma variável para armazenar um caractere e determine se é uma
// vogal ou uma consoante. Use um switch-case para implementar a lógica.

let caractere = "p";

switch (caractere){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":    
        console.log(`o caracter ${caractere} é uma vogal.`);
        break;
    default:
        console.log(`o caracter ${caractere} é uma consoante.`);
        break;
};



// 1.3.3 Defina uma variável para armazenar um número de 1 a 12 e imprima
// o número de dias correspondente ao mês. Use um switch-case para
// implementar a lógica. Considere que fevereiro tem 28 dias em anos não
// bissextos.

let mes = 5;

switch (mes){
    case 1:
        console.log("Jan: 31 dias");
        break;
    case 2:
        console.log("Fev: 28 dias em anos não bissextos");
        break;
    case 3:
        console.log("Mar: 31 dias");
        break;
    case 4:
        console.log("Abr: 30 dias");
        break;
    case 5:
        console.log("Mai: 31 dias");
        break;
    case 6:
        console.log("Jun: 30 dias");
        break;
    case 7:
        console.log("Jul: 31 dias");
        break;
    case 8:
        console.log("Ago: 31 dias");
        break;
    case 9:
        console.log("Set: 30 dias");
        break;
    case 10:
        console.log("Out: 31 dias");
        break;
    case 11:
        console.log("Nov: 30 dias");
        break;
    case 12:
        console.log("Dez: 31 dias");
        break;
};

// 1.4.4 Mostre a seguinte figura com utilização de laços:
// *
// **
// ***
// ****
// *****
let asterisco = "*";

for (let i = 0; i < 5; i++) {
    console.log(asterisco);
    asterisco += "*";
};


// 1.4.5 Escreva um programa que use um laço for para imprimir na tela os nú-
// meros de 10 a 1 (em ordem decrescente).

for (let i = 10; i > 0; i--) {
    console.log(i);  
};

// 1.5.6 Escreva uma função que receba uma palavra e um número. Retorne a
// palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. 
//Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.

function repetir (palavra, num) {
    let repetida = "";
    for (let i = 0; i < num; i++) {
        repetida += palavra;
    } 
    return repetida;
};
console.log(repetir("batata", 3));

// 1.5.2.Escreva uma arrow function que receba um número e retorne seu quadrado.

const numQuadrado = (num) => {
    return num**2                   // or return num*num
};
console.log(numQuadrado(4));

// 1.6.6 Escreva uma função que recebe uma frase e uma palavra. Retorne a frase
// com as ocorrências da palavra censuradas/trocadas por ***. Exemplo:
// censura("Eu jogo lol e valorant, mas lol é melhor", "lol") -> "Eu jogo ***
// e valorant, mas *** é melhor". Dica: use a função replaceAll.

const censura = (frase, palavra) => {
    let censurada = frase.replaceAll(palavra, "***");
    return censurada
};
console.log(censura("Eu jogo lol e valorant, mas lol é melhor", "lol"));

// 1.7.6/9 Crie uma função que recebe um array de números e retorna um array
// com todos os valores elevados ao quadrado. Utilize as funções map, filter e forEach.

let arrQuadrado = [];

const aoQuadrado = (numeros) => {
    numeros.forEach(numero => {
        arrQuadrado.push(numero*numero); 
    }); 
    return arrQuadrado
}
console.log(aoQuadrado([3,5,4,2]));

// 1.8.1 Crie um objeto que representa uma pessoa. Propriedades: nome, idade,
// peso, altura. Métodos: calcular o IMC com base no peso e altura.

let pessoa = {
    nome: "Maria",
    idade: 55,
    peso: 70.5,
    altura: 1.70,
    imc () {
        
    }
   
}