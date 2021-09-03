//Deletando nota da lista e calculando a média das notas...

const notas = [10, 7, 8, 5, 10];
console.log(notas);
notas.pop(); //deletando a ultima nota da array
// notas.shift(); deleta o primeiro item da lista

console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

console.log(`A média é:  ${media}`);