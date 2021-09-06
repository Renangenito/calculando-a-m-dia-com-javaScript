const nomes = ["Fernanda", "Renan", "João", "Marcos", "Lucas", "Felipe"];
const notas = [10, 6, 8, 4.5, 3.5, 4];

const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5)

console.log(`Alunos reprovados: ${reprovados}`);


