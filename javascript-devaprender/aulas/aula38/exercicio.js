let idade = [10,12,15,17,21,44]

// Formas de esvaziar um array

idade = []

idade.length = 0

idade.splice(0,idade.length)

while(idade.length > 0)
    idade.pop()