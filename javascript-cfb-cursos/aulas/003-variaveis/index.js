// variáveis
"use strict"

/*
if(true) {
    var nome = "Ângelo"
}

console.log(nome) // var permite que seja acessada mesmo não estando no mesmo nível
*/

/*
if(true) {
    let nome = "Ângelo"
}

console.log(nome) // não funciona porque não está no mesmo escopo
*/

/*
function teste() {
    let nome = "Ângelo"
    if(true) {
        console.log("Dentro do if de teste: " + nome) // funciona
    }
    console.log("Dentro de teste: " + nome) // funciona
}

teste()

console.log("Fora de teste: " + nome) // não funciona
*/


/*
let nome = "Ângelo"
nome = "CFB Cursos" // posso alterar o conteúdo da variável
nome = 10 // e pode ser alterado com tipo de valor diferente
console.log(nome)

*/

const curso = "JavaScript"
curso = 1 // dá o erro "Assigment to constant variable."
console.log(curso)