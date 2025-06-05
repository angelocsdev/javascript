// Comparações não boleanos

// Falsy -> undefined, null, 0, false, '', NaN - Not a Number
// Truthy -> o contrário dos valores acima

let corPersonalizada = null
let corPadrao = 'azul'
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil)