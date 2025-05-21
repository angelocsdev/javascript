// Exercício Nota Escolar
// Obter a média a partir de um array

// 0 - 59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

let soma = 0

const array = [68,60,30]

console.log(mediaDoAluno(array))

function mediaDoAluno(notas) {
    for(let i = 0; i < notas.length; i++) {
        soma += array[i] / 3
    }

    let nota = soma
    if(nota >= 0 && nota < 60) {
        nota = "F"
    }
    if(nota >= 60 && nota < 70) {
        nota = "D"
    }
    if(nota >= 70 && nota < 80) {
        nota = "C"
    }
    if(nota >= 80 && nota < 90) {
        nota = "B"
    }
    if(nota >= 90 && nota <= 100) {
        nota = "A"
    }
    
    console.log("Sua média é: " + Math.floor(soma), ". Nota: " + nota)
}