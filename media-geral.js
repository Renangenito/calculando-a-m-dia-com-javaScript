const salaJs = [7, 8, 9, 6];
const salaJava = [10, 5, 8, 9];
const salaPython = [5, 9, 10, 10];

function calculaMediaGeral(Notasala){
    const somaNotas = Notasala.reduce((acum, atual)=> acum + atual) / Notasala.length;
    return somaNotas;
}

console.log(calculaMediaGeral(salaJs));
console.log(calculaMediaGeral(salaJava));
console.log(calculaMediaGeral(salaPython));