function contar() {
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = `Contando: `
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            //contagem crescrente
            for(let c = i;c <= f;c += p) {
                res.innerHTML += `${c} \u{1F631}`//Use isso para colocar emojis no JS.
            }
            //contagem decrescente
        } else {
            for(let c = 1;c >= f;c -= p) {
                res.innerHTML += `${c} \u{1F631}`
            }
        }
        res.innerHTML += `\u{1F92A}`
    }
}