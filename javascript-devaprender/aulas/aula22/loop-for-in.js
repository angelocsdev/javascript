// For in

const pessoa = {
    nome: 'Gabriel', // key-value
    idade: 22
}

for(let chave in pessoa) {
    console.log(chave, pessoa['nome'])
}

const cores = ['vermelho', 'azul', 'verde']

for(let indice in cores) {
    console.log(indice, cores[indice])
}