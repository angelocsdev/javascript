// Adicionando Elementos

const numeros = [1,2,3]

// Add no Início do array
numeros.unshift(0)
console.log(numeros)
// Add no Meio do Array
numeros.splice(1,0,'a')
console.log(numeros)
// Adiciona no Final do Array
numeros.push(5)
console.log(numeros)

// -- Exercício --

const idades = [11, 23, 35, 15]

// inicio
idades.unshift(8)
console.log(idades)
// meio
idades.splice(35,0,'3 years')
console.log(idades)
// final
idades.push(40)
console.log(idades)