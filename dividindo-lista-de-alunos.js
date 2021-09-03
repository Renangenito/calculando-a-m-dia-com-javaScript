const alunos = ["Renan", "Fernanda", "Thiago", "Allan", "Douglas", "Leandro", "Juliana", 
"Abgail", "Antônio", "Julia", "Lorenna", "Eliseu", "Silvia", 
"Marley", "Bob", "Elvis", "Nina", "Bella", "Mel", "Fredynho"];

const sala1 = alunos.slice(0, alunos.length/2);
const sala2 = alunos.slice(alunos.length/2);

console.log(`Alunos da sala 1:  ${sala1}`);
console.log(`Alunos da sala 2:  ${sala2}`);