## Variáveis

Na maioria das vezes, um aplicativo JavaScript precisa trabalhar com informações. Para armazenar e representar essas informações na base de código JavaScript, usamos variáveis. Uma variável é um contêiner para um valor.

### Uma analogia da vida real

Podemos facilmente entender o conceito de uma variável se a imaginarmps como uma caixa para dados, com um adesivo com um nome exclusivo.
   _____________
  /            /|
 /  "Hello!"  / |
/___________ /  |
|           |  /
|  message  | /  
|___________|/

Podemos colocar qualquer valor dentro da caixa.

   _____________
  / "World!"   /|
 /  "Hello!"  / |
/___________ /  |
|           |  /
|  message  | /  
|___________|/

Também podemos alterá-lo quantas vezes quisermos, mas quando o valor é alterado os dados antigos são removidos da variável.

Também podemos declarar duas variáveis e copiar dados de uma para a outra.

(Exemplo em app.js)

### Nomemclatura de variáveis

Há duas limitações nos nomes de variáveis em JavaScript:

1 - O nome deve conter apenas letras, dígitos ou os símbolos ("$" "_")
2 - O primeiro caractere não deve ser um dígito.

Quando o nome contém várias palavras é comum usar o camelCase.

### Constantes

Variável constante = imutável

    const myBirthday = '18.04.1982';

As variáveis declaradas usando são chamadas de "constantes". Eles não podem ser reatribuídos. Uma tentativa de fazer isso causaria um erro:

    const myBirthday = '18.04.1982';

    myBirthday = '01.01.2001'; // error, can't reassign the constant!

Quando um programador tem certeza de que uma variável nunca mudará, ele pode declará-la para garantir e comunicar esse fato a todos.

### Constantes maiores

Há uma prática generalizada de usar constantes como aliases para valores difíceis de lembrar que são conhecidos antes da execução.

Essas constantes são nomeadas usando letras maiúsculas e sublinhados.

Por exemplo, vamos fazer constantes para cores no chamado formato "web" (hexadecimal):

    const COLOR_RED = "#F00";
    const COLOR_GREEN = "#0F0";
    const COLOR_BLUE = "#00F";
    const COLOR_ORANGE = "#FF7F00";

    // ...when we need to pick a color
    let color = COLOR_ORANGE;
    alert(color); // #FF7F00

### --- Resumo ---

let -> é uma declaração de variável moderna
var -> declaração antiga, pouco usada
const -> valor da variável não pode ser alterado