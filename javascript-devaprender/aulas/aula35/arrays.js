// Encontrando Elementos( tipos de referência )

const marcas = [
    { id:1, nome:'a'},
    { id:1, nome:'a'}
]

const found = marcas.find(function(e) {
    return e.nome === 'a'
})

console.log(found)

const celulares = [
    { id: 1,nome:'Motorola'},
    { id: 2,nome:'Samsung'}
]

const celular = celulares.find(function(marca) {
    return marca.nome === 'Samsung'
})

console.log(celular)