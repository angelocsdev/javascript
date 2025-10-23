let num = 5;
let clima = "chuva"
let energia = 100

if ( num > 10 ) {
    console.log("Maior que 10")
    if ( num > 50 ) {
        console.log("Maior que 50")
    } // uma condição if dentro de outra para testar outra possibilidade antes de partir para o próximo
} else if ( num > 5 ){
    console.log("Está entre 6 e 10")
} else {
    console.log("Menor ou igual à 5")
}

console.log("Fim do programa")

if ( energia > 70 && clima == "sol" ) {
    console.log("Vou à praia")
} else {
    console.log("Vou para a casa da minha namorada")
}