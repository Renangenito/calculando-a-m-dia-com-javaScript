// Média total das notas de um aluno: 10, 6.5, 8, 7.5

let nota1 = 10;
let nota2 = 6.5;
let nota3 = 8;
let nota4 = 7.5;

let media = (10 + 6.5 + 8 + 7.5) / 4;

console.log(`A sua média é:  ${media}`);

//Agora com o uso das arrays...

let nota = [10, 6.5, 8, 7.5];

let mediaTotal = (nota[0] + nota[1] + nota[2] + nota[3]) / nota.length;
console.log(`A média total é :  ${mediaTotal}`); 
