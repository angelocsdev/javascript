// Criar função somar que retorna a soma de todos os múltiplos de 3 e 5

somar(10)
function somar(limite) {
    let multipDe3 = 0
    let multipDe5 = 0
    for(i = 0;i <= limite;i++) {
        if(i % 3 === 0) {
            multipDe3 += i
        }
        if(i % 5 === 0) {
            multipDe5 += i
        }
    }
    console.log(multipDe3 + multipDe5)
}