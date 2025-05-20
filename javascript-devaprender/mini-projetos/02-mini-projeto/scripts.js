// Escreva uma função que usa 2 números e retorna o maior entre eles

// Minha solução

let numero1 = 10
let numero2 = 100

if(numero1 > numero2) {
    console.log(numero1)
}else {
    console.log(numero2)
}

// Solução do Curso

let valorMaior = max(10,100)
console.log(valorMaior)

function  max(num1, num2) {
    return num1 > num2 ? num1 : num2
}