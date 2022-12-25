let num = [5, 8, 4, 2, 9, 5, 4, 5, 43, 56, 542, 75, 9845, 849, 548, 9384, 837, 857, 95, 958, 6352, 578, 9430, 1523, 7385, 8374, 49586, 95843, 65261, 056, 735, 48356, 857, 8257]
num.push(1)
num.sort()
num.reverse()
for(let pos = 0;pos < num.length; pos++) {
    console.log(num)
}
let pos = num.indexOf(0)
    if (pos == -1) {
        console.log('O valor não foi encontrado!')
    } else {
        console.log(`O valor está na posicão ${pos}`)
    }
    