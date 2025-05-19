// Operadores Lógicos

// Operador AND "&&" -> retorna TRUE se os dois operandos forem true

// console.log(true && true)
// console.log(false && true)

// let maiorDeIdade = true
// let possuiCarteiraDeTrabalho = false
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho

// console.log(podeAplicar)

// Operador OU "||" -> retorna true se um dos operandos forem true

let maiorDeIdade = false
let possuiCarteiraDeTrabalho = false
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho

console.log(podeAplicar)

// Operador NOT "!"

let candidatoRecusado = !podeAplicar

console.log(candidatoRecusado)

let passouNoTeste = true
let passouNaProva = true
let alunoAprovado = passouNaProva && passouNoTeste

let alunoReprovado = !alunoAprovado

console.log('Aluno aprovado: ', alunoAprovado)
console.log('Aluno Reprovado: ', alunoReprovado)