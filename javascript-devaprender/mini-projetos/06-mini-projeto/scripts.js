// Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesses objetos

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor' 
}



exibirPropriedades(filme)
function exibirPropriedades(objeto) {
    for(prop in objeto) {
        if(typeof objeto[prop] === 'string')
            console.log(prop, objeto[prop])
    }
}

const pessoa = {
    nome: 'Júlia',
    idade: 22,
    escolaridade: "Superior",
    hobbie: 'Escrever'
}

exibirNum(pessoa)
function exibirNum(obj) {
    for(num in obj) {
        if(typeof obj[num] === 'number')
            console.log(num, obj[num])
    }
}