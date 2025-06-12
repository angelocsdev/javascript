// Op SPREAD

const primeiro = [1,2,3]
const segundo = [4,5,6]

// const combinado = primeiro.concat(segundo)

const combinado = [...primeiro,'a',...segundo,'b']
console.log(combinado)
// const cortado = combinado.slice()
const clonado = [...combinado]
console.log(clonado)

// 1,2,3,'X',4,5,6

const numeros1 = [1,2,3]
const numeros2 = [4,5,6]
const combinar = [...numeros1,'X',...numeros2]
console.log(combinar)