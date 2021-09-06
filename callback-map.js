//Usando o método .map para percorrer a array
//Transformar as letras todas em maiusculas

const nomes = ["ReNan", "FeRnanDa", "thiago", "VictOr"];

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

function mostrarLista(param){
    console.log(param)
}

nomesAtualizados.forEach(mostrarLista)

