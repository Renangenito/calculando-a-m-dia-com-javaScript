//Viagem para París pacote completo para uma semana no valor de: R$ 2500 

const nomes = ["Renan", "Fernanda", "Antônio", "Abgail", "Thiago", "Allan"];
const dinheiro = [3000, 4500, 1500, 2300 , 4000, 1500,];

const vaiViajar = nomes.filter((pessoas, indice) => dinheiro[indice] >= 2500);

console.log(`Vai viajar para París ${vaiViajar}`);

