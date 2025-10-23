# Curso de JavaScript

Curso de JavaScript do Canal CFB Cursos

## Extensões sugeridas

Code Runner
Live Server

## Anotações Importantes do curso



## Anotações das aulas

### Aula 001

É uma linguagem de roda tanto no client side quanto no server side, possibilitando a criação de API's

// comentário de 1 linha

/*

comentário
de
bloco

*/

### Aula 002

O modo estrito serve para deixar o código mais limpo e com menos coisas inutilizadas.

Por exemplo, não consigo usar uma variável que não seja declarada. Ou seja, se eu não usar (var, let, const) para declarar minha variável e apenas usar uma variável vai dar erro.

Uma série de restrições são implementadas no nosso código.

### Aula 003

Declarações de variáveis

Variável é uma posição / bloco dentro da memória RAM. Podemos criar quantas variáveis forem necessárias.

Tipos e diferenças:

var -> vai estar acessível em qualquer bloco independente do nível.

Ex:

if(true) {
    var nome = "Ângelo"
}

console.log(nome) -> não está no escopo de if, mas dá para acessar mesmo assim e para resolver esse problema o ES6 criou o let

let -> tem que estar no mesmo nível / escopo / bloco

Ex:

if(true) {
    let nome = "Ângelo"
}

console.log(nome) // não funciona porque não está no mesmo escopo

Também se estiver dentro do escopo vai poder ser acessado, ex:

function teste() {
    let nome = "Ângelo"
    if(true) {
        console.log("Dentro do if de teste: " + nome) // funciona porque está dentro do escopo do id do teste
    }
    console.log("Dentro de teste: " + nome) // funciona
}

teste()

console.log("Fora de teste: " + nome) // não funciona porque está fora do escopo em que a variável foi declarada

O conteúdo da variável pode ser alterado facilmente, ex:

let nome = "Ângelo"
nome = "CFB Cursos" // posso alterar o conteúdo da variável
nome = 10 // e pode ser alterado com tipo de valor diferente
console.log(nome)

const / constantes -> variáveis não variáveis, o valor declarada dessas constantes não podem ser alterados durante o programa.

Ex:

const curso = "JavaScript"
curso = 1 // dá o erro "Assigment to constant variable."
console.log(curso)

Constantes não podem receber um novo valor.

### Aula 004

Operadores Matemáticos

+ -> Soma
- -> Subtração
/ -> Divisão
* -> Multiplicação
% -> Resto da divisão
++ ou += -> Incremento
-- ou -= -> Decremento

Ex:

"use strict";
let num1 = 45;
let num2 = 10;
let som = 0;
let sub = 0;
let div = 0;
let divRes = 0;

som = num1 + num2 * 2; // soma + multip.
sub = num1 - num2; // sub
div = num1 / num2; // divisão
divRes = num1 % num2; // resto

// console.log(som, sub, div, divRes);
num1++ // incremento
num1+=10 // num1 + num1 = 10
console.log(num1);

### Aula 005

Operadores Relacionais


// > maior
// >= maior ou igual
// < menor
// <= menor ou igual
// == igual
// != diferente

Cuidado igual em JS é ==, somente um "=" é atribuir um valor.


Mais exemplos:
"Not" e "diferente" não são a mesma coisa
console.log(!(num3 == num1)) // not
console.log(num1 != num3) // diferente

### Aula 006

Dúvidas dos alunos

== -> valor da variável igual
=== -> valor e tipo de dados daa variável iguais

Ex:

    let num1 = 1
    let num2 = "1"

    console.log(num1 == num2) // true
    console.log(num1 === num2) // false

E sobre objetos:

let nome1 = {nome: "Ângelo"}
let nome2 = {nome: "Ângelo"}

console.log(nome1 === nome2)  // retorna false porque em objetos também se compara o endereço na memória que nesse caso não são iguais

A não ser que:

let nome1 = {nome: "Ângelo"}
let nome2 = nome1

console.log(nome1 === nome2) // true

Um pouco do DOM:

let nome = prompt("Digite seu nome: ")

alert("Olá " + nome + ". Seja bem-vindo!")

Diferença entre NOT e != (DIFERENTE) :

let n1 = 1
let n2 = 2

console.log(n1 != n2) // diferente -> true
console.log(!(n1 != n2)) // negação -> false

DOM -> árvore de elementos dentro do HTML

Mais dúvidas:

Como registrar em que dispositivo meu site está sendo usado pelo JS:

    if(navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone|iPad|iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    || navigator.userAgent.match(/Opera Mini/i)
    || navigator.userAgent.match(/IEMobile/i)
    ) {
    console.log("Celular")
    }else{
        console.log("PC")
    }

Funções e escopo:

let nome = "Ângelo"


{
    let siglacurso = "JS"
    console.log(siglacurso)
} // escopo

const curso = () => {
    let curso = "JavaScript"
    console.log(curso)
} // função

curso() // não esquecer de chamar a função


O parâmetro defer dentro do script carrega o javascript em paralelo com o html e só executa o js quando o html é completamente carregado.

Ex:

    <script src="index.js" defer></script>

Porém, é praticamente a mesma coisa que colocar o script no final do body, o que é mais recomendado.

### Aula 007

Operadores Lógicos

&& -> AND
|| -> OR
! -> NOT

TABELA VERDADE

AND --> &&

V + V = V
V + F = F
F + V = F
F + F = F

também pode ser:

1 1 = 1
1 0 = 0
0 1 = 0
0 0 = 0

OR --> ||

V + V = V
V + F = V
F + V = V
F + F = F

também pode ser:

1 1 = 1
1 0 = 1
0 1 = 1
0 0 = 0

Ex:
    let n1, n2, n3, n4
    n1 = 10
    n2 = 5
    n3 = 15
    n4 = 2

    console.log((n1 > n2) || (n1 > n3)) // true
    console.log((n1 > n2) && (n1 > n3)) // false
    console.log(!((n1 > n2) && (n1 > n3))) // true

Brincando um pouco com if e else + op logicos:

const verdadeiro = () => {
    let n1, n2, n3, n4
    n1 = 10
    n2 = 5
    n3 = 15
    n4 = 2
    

    if((n1 > n2) && (n1 > n3) == true) {
        console.log("Verdadeiro")
    }else {
        console.log("Falso")
    }
}

verdadeiro()

### Aula 008

Bitwise -> Operações de deslocamento

00000000 = 0
00000001 = 1
00000010 = 2
00000011 = 3
00000100 = 4
00000101 = 5
00000110 = 6
00000111 = 7
00001000 = 8
00001001 = 9
00001010 = 10
00001011 = 11
00001100 = 12
00001101 = 13
00001110 = 14
00001111 = 15

...

AND (E)

11 & 14 = 10

PQ?

11 -> 00001011
14 -> 00001110
Resp: 00001010 -> 10

11 & 15

11 -> 00001011
15 -> 00001111
Resp: 00001011 -> 11

11 & 12

11 -> 00001011
12 -> 00001100
Resp: 00001000 -> 8

As respostas são o resultado da soma e estão na tabela acima.

OR (OU)

10 | 11

10 -> 00001010
11 -> 00001011
Resp: 00001011 -> 11

11 | 12

11 -> 00001011
12 -> 00001100
Resp: 00001111 -> 15

Exclusivo ^ -> só retorna onde tem comparações diferentes

10 ^ 11

10 -> 00001010
11 -> 00001011
Resp: 00000001 -> 1

12 ^ 14

12 -> 00001100
14 -> 00001110
Resp: 00000010 -> 2

13 ^ 14

13 -> 00001101
14 -> 00001110
Resp: 00000011 -> 3

Deslocamento de bits

10 << 1

10 -> 00001010
<< 1  00010100 = 20

10 << 2

10 -> 00001010
<< 2  00101000 = 40

10 >> 1
10 -> 00001010
>> 1  00000101 -> 5

10 >> 2
10 -> 00001010
>> 2  00000010 -> 2

10 >> 3
10 -> 00001010
>> 3  00000001 -> 1

25 >> 3
25 -> 00011001
>> 3  00000011 - > 3

25 >> 1
25 -> 00011001
>> 1  00001100 -> 12

Quando deslocamos um bit >> 1 cortamos metade do valor
||          ||     || || << 1 dobramos o valor

ex:

let n1=30

let res = n1 << 1

console.log(res) -> 60

let n1=30

let res = n1 >> 1

console.log(res) -> 15

### Aula 009

Pré incremento e pós incremento

++n -> pré-incremento, é adicionado antes de mostrar o resultado
n++ -> está adicionando 1 ao valor da variável, mas é incrementado depois de mostrar o resultado (pós incremento)

Ex:

console.log(++n) // pré incremento
console.log(n++) // pós incremento

--n -> pré decremento
n-- -> pós decremento

Inversão / Negação

let n = -10
let x = -n

console.log(x)

Concatenação

let n1 = 10
let n2 = 20

let soma = n1 + "" + n2 // concatenação

console.log(soma) // 1020, em vez de somar, por causa da string no meio ele junta os valores

### Aula 010

Operador Ternário

? -> IF
: -> ELSE

Ex:

let num = 18

tem duas formas de fazer pelos meus testes pessoais:

let res = (num % 2 == 0 ? "PAR" : "ÍMPAR")

ou

let res = (!(num % 2) ? "PAR" : "ÍMPAR")

console.log(res)

Mais exemplos:

let num1 = 19
let num2 = 15

let result = (num1 > num2 ? "Verdadeiro" : "Falso")

console.log(result)

### Aula 011

Operador TypeOf -> mostra o tipo de dado que está sendo tratado

Ex:

let v1 = 10
let v2 = "10"
let v3 = v1 === v2
let v4 = {nome: "Ângelo"}

console.log(typeof(v1)) // number
console.log(typeof(v2)) // string
console.log(typeof(v3)) // boolean
console.log(typeof(v4)) // object

### Aula 012

Operador Spread "...", spread é espalhar. O op spread quebra um conjunto de elementos e devolve elemento por elemento em um array, html colections e etc.

Podemos copiar arrays com o spread

Ex:

let n1 = [ 10, 20, 30 ]
let n2 = [ 11, 22, 33, 44, 55 ]
let n3 = [ ...n1, ...n2 ] // copiou o array, até agora nada novo porque dá pra fazer isso sem esses três pontinhos (spread)

console.log("N1: " + n1) // N1: 10,20,30
console.log("N2: " + n2) // N2: 11,22,33,44,55
console.log("N3: " + n3) // N3: 10,20,30,11,22,33,44,55

O spread une os dados de um objeto + outro em um terceiro obj:

const jogador1 = { nome: "Ângelo", energia: 100, vidas: 3, magia: 150 }
const jogador2 = { nome: "Bruce Wayne", energia: 100, vidas: 5, inteligencia: 320 }
const jogador3 = { ...jogador1, ...jogador2 }

console.log(jogador3) // { nome: 'Bruce Wayne', energia: 100, vidas: 5, magia: 150, inteligencia: 320 }

O spread espalha os valores para que dê certo na hora de entregar os valores:

const soma = ( v1, v2, v3 ) => {
    return v1 + v2 + v3
}

let valores = [1,5,4]

console.log(soma(...valores)) // Resp: 10, espalha os valores desse array para cada parâmetro da função.

Se fosse assim:

console.log(soma(valores))

Não iria fazer o retorno desejado porque sem spread o array criado com os valores ia apenas enviar todos de uma vez:

1,5,4undefinedundefined // Esse seria o resultado

Sobre HTML Collection vs spread:

const objs1 = document.getElementsByTagName("div") // PEGA AS DIVS DO MEU HTML
const objs2 = [ ...document.getElementsByTagName("div") ]

objs2.forEach( element => {
    console.log(element)
}) // forEach mostra o conteúdo dos elementos

console.log(objs1) // mostra o html colection pelo browser, tem poucas opções de funções para usar
console.log(objs2) // diferente desse outro que usou o spread que tem várias funções que podem ser utilizadas, por exemplo o forEach que foi usado lá em cima

### Aula 013

if e else

Sintaxe

if ( expressão / teste lógico ) {
    se for verdadeiro este bloco vai ser executado
} se for falso ele pula esse bloco e vai para o próximo -> {

}

ex:

if ( num > 10 )
    console.log("Maior que 10") // não executou pq a condição deu false

console.log("Fim do programa")

Curiosidade: quando o if possui apenas 1 comando não precisa colocar chaves {}, só quando tiver mais de um:

if ( num > 10 ) {
    console.log("Maior que 10")
    console.log("Segundo comando")
}

O escopo / bloco do comando é delimitado pelas chaves {}

else -> se não

let num = 0;

if ( num > 10 ) {
    console.log("Maior que 10")
    console.log("Segundo comando")
} else if ( num > 5 ){
    console.log("Está entre 6 e 10")
} else {
    console.log("menor ou igual à 5") // cai aqui
}

console.log("Fim do programa")

Aninhamento de ifs:

let num = 55;

if ( num > 10 ) {
    console.log("Maior que 10")
    if ( num > 50 ) {
        console.log("Maior que 50")
    } // uma condição if dentro de outra para testar outra possibilidade antes de partir para o próximo
} else if ( num > 5 ){
    console.log("Está entre 6 e 10")
} else {
    console.log("menor ou igual à 5")
}

console.log("Fim do programa")


Usando operadores relacionais com if e else:

let clima = "chuva"
let energia = 100

if ( energia > 70 && clima == "sol" ) {
    console.log("Vou à praia")
} else {
    console.log("Vou para a casa da minha namorada")
}

### Aula 014

Comando Switch Case

- Todo case tem que terminar com um break

- pode ter quantas cases forem necessários

- se não for nenhum dos cases, use default + break

let n = 10

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
    default:
        console.log("Você ganhou só cansaço ;D")
        break
}

Tem como colocar vários cases em uma única avaliação:

case 4: case 5: case 6:
    console.log("Você ganhou um galo de briga e uma coca cola")
    break
case 7: case 8: case 9:
    console.log("Você ganhou 2 reais ou um presente misterioso. Se eu fosse você escolheria os 2 reais")
    break

### Aula 015

Loop For

loops:
    - definidos -> for
    - indefinidos -> while, do while

diferença do for para while: utilizamos for quando sabemos a quantidade de vezes que o comando vai ser executado (loop definido), quando não sabemos usamos while, do while (loops indefinidos).

For ( inicialização; condição; controle ) {
    comandos iterados por esse loop
} se tiver apenas 1 comando a chave n é obrigatória, segue o mesmo padrão do if.

n++ é a mesma coisa que:
n = n + 1 -> n recebe n + 1
 ou
n += 1

Exemplo de loop for:

for ( let i = 0; i <= 10; i++ ) {
    console.log(i)
}

loop for + if:

console.log("Início do programa")

for ( let i = -30; i <= 10; i++ ) {
    if ( i % 2 == 0 ) {
        console.log("PAR: " + i)
    } else {
        console.log("ÍMPAR: " + i)
    }
}

console.log("Fim do Programa")

### Aula 016

Loop for in e Loop for of

For in -> imprime a posição dos elementos ao menos que especifique, ex:

for(n in num) {
    console.log(n)
} // 0 1 2 3 4

for(n in num) {
    console.log(num[n])
} // 10 20 30 40 50


For of -> imprime os elementos direto

for(n of num) {
    console.log(n)
} // 10 20 30 40 50

Eles são utilizados para percorrer coleções / arrays

### Aula 017

Loop While

Loop usado quando não sabe a quantidade de vezes que o loop vai repetir.

É um bom loop para fazer fatorial.

Ex:

let n = 5
let fatorial = 1

while(n >= 1) {
    fatorial *= n
    n--
    console.log(fatorial)
}

### Aula 018

Loop While e Do While

while não dá a chance do loop funcionar se  dar false

let n = 10
while (n < 10) {
    console.log('CFB Cursos')
    n++
}
console.log('Fim do Programa')


executa pelo menos uma vez, mesmo dando false porque o while vem dps da 1 execução

do {
    console.log('CFB Cursos')
    n++
} while (n < 10)

### 019

Break e Continue

break -> para o loop e continua a execução do programa
continue -> para somente aquela iteração do loop e parte para a próxima iteração e continua a execução do loop

Ex:

Break

let n = 0
let max = 1000

while(n < max) {
    console.log('CFB Cursos - ' + n)
    if(n > 10) {
        break
    }
    n++
}

console.log('Fim do Programa')

O programa para no 11

EX:

Continue

let n = 0
let max = 1000
let pares = 0

for(let i = n; i < max; i++) {
    if(i % 2 != 0) {
        continue // parou a iteração e foi para a próxima
    }
    pares++
    console.log(i) // mostrou só os números pares
}
console.log(pares)
console.log('Fim do Programa')

### Aula 020

Funções

