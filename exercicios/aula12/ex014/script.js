function carregar() {
    var msg = document.querySelector('div.msg')
    var foto = document.querySelector('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        foto.src = 'imagens/manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        foto.src = 'imagens/tarde.jpg'
        document.body.style.background = 'linear-gradient(red, yellow)'
    } else {
        // BOA NOITE!
        foto.src = 'imagens/noite.jpg'
        document.body.style.background = 'linear-gradient(darkblue, violet)'
    }
}