let array = [1,2,3]
const mostrar = document.getElementById('mostra')

function Clicar() {
    array.forEach(i => {
        const p = document.createElement('p')
        p.textContent = i
        mostrar.appendChild(p)
    })
}