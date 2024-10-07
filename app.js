//Funções com parâmetros
function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
        {rate:1.2});
}

function exibirMensagemInicial (){
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

//Função com retorno
let listaDosNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDosNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDosNumerosSorteados = [];
    }
    if (listaDosNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio;
    } else {
        listaDosNumerosSorteados.push(numeroEscolhido);
        console.log (listaDosNumerosSorteados);
        return numeroEscolhido;
    }
}
console.log (`O valor do número secreto é ${numeroSecreto}`)

//Função sem parâmetro
let tentativas = 1;

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let textoDoParabens = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ('h1', 'Parabéns!');
        exibirTextoNaTela ('p', textoDoParabens);
        document.getElementById ('reiniciar').removeAttribute ('disabled');
    } else if (chute > numeroSecreto){
        exibirTextoNaTela('p','O número secreto é menor');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
        //tentativas = tentativas + 1
        tentativas ++;
        limparCampo ();
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disable', true)
}