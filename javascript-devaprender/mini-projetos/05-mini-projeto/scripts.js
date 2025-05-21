// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou impar

// Minha solução está igual a solução do curso

exibirTipo(5)

function exibirTipo(limite) {
    
    for(let i = 1; i <= limite; i++) {
        if(i % 2 === 0) {
            console.log(i + " " + "PAR")
        }else {
            console.log(i + " " + "ÍMPAR")
        }
        // console.log(i) // testando o loop
    }
    
}

