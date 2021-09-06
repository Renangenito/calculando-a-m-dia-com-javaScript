//João vai ganhar 1 ponto a mais em cada nota por bom comportamento

//Notas atuais
const notas = [10, 9, 8, 7, 6];

//Notas somando mais um
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota);

    for(let i = 0; i < notasAtualizadas.length; i++){
        console.log(notasAtualizadas[i]);
    }

