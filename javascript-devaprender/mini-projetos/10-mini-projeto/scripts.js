// Criar função para mostrar os números primos

// Primos
// Compostos

// Ex: 10, 11

exibirNumerosPrimos(15)

function exibirNumerosPrimos(limite) {
    for(let num = 2; num <= limite; num++) {
        
        if(numeroPrimo(num)) console.log(num)
    }
}

function numeroPrimo(num) {
        for(let divisor = 2; divisor < num; divisor++) {
            if(num % divisor === 0) {
                return false
            }
        }
        return true
}