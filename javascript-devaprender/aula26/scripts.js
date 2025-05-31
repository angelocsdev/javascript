// clonando objetos

const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        hotizontal : 75
    },
    ligar : function () {
        console.log("Fazendo ligação...")
    }
}

const newObject = Object.assign({
    bateria : 5000
},celular)
console.log(newObject)

const object2 = {...celular}
console.log(object2)