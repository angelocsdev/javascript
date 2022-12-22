var agora = new Date()// Usado para pegar a hora exata do servidor ou sistema.
var hora = agora.getHours // Junto com '.getHours'
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}