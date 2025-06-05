// Natureza dinâmica de Objetos

const mouse = {
    cor: 'red',
    marca: 'redragon'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function () {
    console.log('mudando DPI')
}
delete mouse.velocidade
console.log(mouse)