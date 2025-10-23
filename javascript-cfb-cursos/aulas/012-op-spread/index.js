let n1 = [ 10, 20, 30 ]
let n2 = [ 11, 22, 33, 44, 55 ]
let n3 = [ ...n1, ...n2 ] // copiou o array, até agora nada novo porque dá pra fazer isso sem esses três pontinhos (spread)

console.log("N1: " + n1) // N1: 10,20,30
console.log("N2: " + n2) // N2: 11,22,33,44,55
console.log("N3: " + n3) // N3: 10,20,30,11,22,33,44,55

const jogador1 = { nome: "Ângelo", energia: 100, vidas: 3, magia: 150 }
const jogador2 = { nome: "Bruce Wayne", energia: 100, vidas: 5, inteligencia: 320 }
const jogador3 = { ...jogador1, ...jogador2 }

console.log(jogador3) // { nome: 'Bruce Wayne', energia: 100, vidas: 5, magia: 150, inteligencia: 320 }

const soma = ( v1, v2, v3 ) => {
    return v1 + v2 + v3
}

let valores = [1,5,4]

console.log(soma(...valores)) // Resp: 10, espalha os valores desse array para cada parâmetro da função.

const objs1 = document.getElementsByTagName("div") // PEGA AS DIVS DO MEU HTML
const objs2 = [ ...document.getElementsByTagName("div") ]

objs2.forEach( element => {
    element.innerHTML = "seu pai de calsinha"
}) // forEach mostra o conteúdo dos elementos

console.log(objs1) // mostra o html colection pelo browser, tem poucas opções de funções para usar
console.log(objs2) // diferente desse outro que usou o spread que tem várias funções que podem ser utilizadas, por exemplo o forEach que foi usado lá em cima