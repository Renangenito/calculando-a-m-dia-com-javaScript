const pessoas = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < pessoas.length; i++) {
    console.log(i, pessoas[i]);
}

let num = 9;
console.log(`Tabuada do ${num}`)
console.log("-------------");

for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
    console.log(`${num} X ${multiplicador} = ${num * multiplicador}`);
}