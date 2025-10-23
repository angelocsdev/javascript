let n = 8

switch ( n ) {
    case 1:
        console.log("Primeiro lugar")
        console.log("Parabéns você é o vencedor")
        break
    case 2:
        console.log("Segundo lugar")
        console.log("Está quase puxando a perna dele ;D")
        break
    case 3:
        console.log("Terceiro lugar")
        console.log("Você chegou perto... de perder!")
        break
    case 4: case 5: case 6:
        console.log("Você ganhou um galo de briga e uma coca cola")
        break
    case 7: case 8: case 9:
        console.log("Você ganhou 2 reais ou um presente misterioso. Se eu fosse você escolheria os 2 reais")
        break
    default:
        console.log("Você ganhou só cansaço ;D")
        break
}