// Velocidade máxima de 70km
// A cada 5km acima do limite você ganha 1 ponto na carteira
// Math.Floor()
// Caso os pontos sejam maior que 12 => "Carteira suspensa"

// Minha solução

let maxVelocidade = 70

verificarVelocidade(119.99)
function verificarVelocidade(velocidade) {
    Math.floor(velocidade)
    if(velocidade <= maxVelocidade) {
        console.log('não levou multa')
    }
    if(velocidade > maxVelocidade && velocidade <= maxVelocidade + 5) {
        console.log('levou 1 ponto na carteira')
    }
    if(velocidade > maxVelocidade + 5 && velocidade <= maxVelocidade + 10) {
        console.log('levou 2 pontos na carteira')
    }
    if(velocidade > maxVelocidade + 10 && velocidade <= maxVelocidade + 15) {
        console.log('levou 3 pontos na carteira')
    }
    if(velocidade > maxVelocidade + 15 && velocidade <= maxVelocidade + 20) {
        console.log('levou 4 pontos na carteira')
    }
    if(velocidade > maxVelocidade + 20 && velocidade <= maxVelocidade + 25) {
        console.log('levou 5 pontos na carteira')
    }
    if(velocidade > maxVelocidade + 25 && velocidade <= maxVelocidade + 30) {
        console.log('levou 6 pontos na carteira')
    }
    if(velocidade > maxVelocidade + 30 && velocidade <= maxVelocidade + 35) {
        console.log('levou 7 pontos na carteira')
    }
    if(velocidade > maxVelocidade + 35 && velocidade <= maxVelocidade + 40) {
        console.log('levou 8 pontos na carteira')
    }
    if(velocidade > maxVelocidade + 40 && velocidade <= maxVelocidade + 45) {
        console.log('levou 9 pontos na carteira')
    }
    if(velocidade > maxVelocidade + 45 && velocidade <= maxVelocidade + 50) {
        console.log('levou 10 pontos na carteira')
    }
    if(velocidade > maxVelocidade + 50 && velocidade <= maxVelocidade + 55) {
        console.log('levou 11 pontos na carteira')
    }
    if(velocidade > maxVelocidade + 55 && velocidade <= maxVelocidade + 60) {
        console.log('carteira suspensa')
    }
}

// Solução do Curso

medidorVelocidade(200)

function medidorVelocidade(vel) {
    if(vel <= 70) {
        console.log('ok')
    }
    else{
        const pontos = Math.floor(((vel - 70) / 5))
        if(pontos >= 12)
            console.log('Carteira Suspensa')
        else
            console.log('Pontos: ', pontos)
    }
} 