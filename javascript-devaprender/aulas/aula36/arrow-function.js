// Arrow Functions

const marcas = [
    { id:1, nome:'a' },
    { id:2, nome:'b' }
]

console.log(marcas.find((marca) =>  marca.nome === 'a'))

let login = [
    { usuario:"John", e_mail:"john@mail.com" },
    { usuario:"Lui", e_mail:"lui@mail.com" }
]

console.log(login.find((usuario => usuario.usuario === "John")))