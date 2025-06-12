// esvaziando um array

let numeros = [1,2,3,4,5,6]
let outros = numeros
// Solução 1
numeros = []

console.log(outros) // se tiver + de 1 referência não vai apagar todas

// Solução 2
numeros.length = 0

console.log(numeros)
console.log(outros)

// Solução 3
numeros.splice(0,numeros.lenght)
console.log(numeros)
console.log(outros)

// Solução 4
while(numeros.length > 0)
    numeros.pop()
