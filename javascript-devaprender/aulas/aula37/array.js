// removendo elementos

const numeros = [1,2,3,4,5,6]
numeros.push()
numeros.unshift()
numeros.splice()

// final
const ultimo = numeros.pop()

console.log(ultimo)
console.log(numeros)

// inicio
const primeiro = numeros.shift()

console.log(primeiro)
console.log(numeros)

// meio
const meio = numeros.splice(2,1)

console.log(meio)
console.log(numeros)

const nomes = ['a','b','c','d','e','f','g','h','i','j']

const inicio = nomes.shift()

console.log(inicio)
console.log(nomes)

const fim = nomes.pop()

console.log(fim)
console.log(nomes)

const excluirMeio = nomes.splice(3,3)

console.log(excluirMeio)
console.log(nomes)