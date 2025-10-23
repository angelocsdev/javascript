let n = 0
let max = 1000
let pares = 0

for(let i = n; i < max; i++) {
    if(i % 2 != 0) {
        continue // parou a iteração e foi para a próxima
    }
    pares++
    console.log(i) // mostrou só os números pares
}
console.log(pares)
console.log('Fim do Programa')