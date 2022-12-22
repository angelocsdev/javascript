var agora = new Date()
var diaSem = agora.getDay()// Usado para os dias da semana

/*
0 - Domingo
1 - Segunda
2 - Terça
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sábado
*/

switch(diaSem) {// O switch só funciona com números inteiros e strings -> caracteres
    case 0:
        console.log('Domingo')
        break//Break é o que checa se a condição é verdadeira ou não e é ele que faz com que a condição pare na parte certa, tomar cuidado para não esquecer de colocá-lo.
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
}