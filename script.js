let minimo = Number(prompt('Qual o valor mínimo?'));
let maximo = Number(prompt('Qual o valor máximo?'));
let numeroAleatorio = gerarAleatorio(minimo, maximo);

let numeroDeVidas = 5;

//function avaliarPalpite(palpite) {
//
//}
//
//function pedirPalpite() {
//    const novoPalpite = Number(prompt('Tente adivinhar o número!'));
//
//    avaliarPalpite(novoPalpite);
//}


while (numeroDeVidas > 0) {
    let numeroEscolhido = Number(prompt('Escolha um número aleatório!'));

    if(numeroAleatorio == numeroEscolhido) {
        alert('Você ganhou o jogo!');
        break;
        }

    else {
    alert('Você errou o número :(')

        if(numeroEscolhido < numeroAleatorio) {
        alert('Seu palpite é menor que o número aleatório.');
        }
        else {
        alert('Seu palpite é maior que o número aleatório.');
            }
        numeroDeVidas = numeroDeVidas -1;
    }
    if (numeroDeVidas == 0) {
        alert('Acabaram suas vidas!');
    }
}