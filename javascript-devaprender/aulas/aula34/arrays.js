// encontrando elementos (primitivos)

const numeros = [1,2,3,4]
numeros.indexOf(2)
console.log(numeros.indexOf(2) !== -1)

console.log(numeros.includes(2)) // outra forma de fazer isso!

const mercado = ['arroz','feijão','macarrão','suco','batata doce']
mercado.push('ovos')
console.log(mercado)
mercado.indexOf(4)
console.log(mercado.indexOf(1) !== -1)
console.log(mercado.includes(1))

console.log(mercado.lastIndexOf(1))