// verbo + substantivo

let corSite = "blue"

function resetaCor(cor, tonalidade){
    //verboSubstantivo(parâmetro)
    corSite = cor + " " + tonalidade // chama o parâmetro
}

console.log(corSite)
resetaCor("vermelho", "escuro") // edita o parâmetro
console.log(corSite)

// let numero = 10

// function soma(){
//     numero += 1
// }

// console.log(numero)
// soma()
// console.log(numero)

nome = "Roberta"

function mudarNome(namorada) {
    nome = namorada
}

console.log(nome + ", não é minha namorada!")
mudarNome("Maria Eduarda")
console.log(nome + ", é minha namorada!")