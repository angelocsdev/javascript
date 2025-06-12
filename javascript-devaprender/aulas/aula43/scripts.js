function Mostrar() {
    const nome = prompt('Qual é seu nome?')
    if(nome) {
        alert(`Olá, ${nome}!`)
    } else {
        alert('Você não digitou um nome.')
    }
}