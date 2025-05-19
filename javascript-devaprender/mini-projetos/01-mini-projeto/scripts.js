let a = 'vermelho'
let b = 'azul'

// Minha solução

function trocarValorA(cor) {
    a = cor
}

function trocarValorB(cor) {
    b = cor
}

console.log(a)
console.log(b)
// trocarValorA('azul')
// trocarValorB('vermelho')
// console.log(a)
// console.log(b)

// Solução do curso

let c = a
a = b 
b = c

console.log(a)
console.log(b)