const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroAleatorio = Math.floor(Math.random() * 99999) + 1;
let acertou = false;

function perguntar() {
  rl.question("Chute um número entre 1 e 99999: ", (resposta) => {
    const chute = parseInt(resposta);

    if (isNaN(chute) || chute < 1 || chute > 99999) {
      console.log("Digite um número válido entre 1 e 99999.");
      perguntar();
      return;
    }

    if (chute > numeroAleatorio) {
      console.log("Chute foi maior que o valor gerado!");
      perguntar();
    } else if (chute < numeroAleatorio) {
      console.log("Chute foi menor que o valor gerado!");
      perguntar();
    } else {
      console.log("Você acertou!");
      acertou = true;
      rl.close();
    }
  });
}

perguntar();
