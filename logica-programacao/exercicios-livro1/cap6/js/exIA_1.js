/**
 * esse script sensura as palavras "bobo", "feio" e "chato"
 * em um Chat
 * autor: Fabiano O.
 */

function exibirChat() {
    // referencia os elementos de entrada e saída
    const inMensagem = document.getElementById("inMensagem");
    const outChat = document.getElementById("outChat");

    // obter o conteúdo do campo de mensagem
    let mensagem = inMensagem.value.trim();

    // verifica se a entrada é válida
    if (mensagem == "") {
        alert("Digite uma mensagem...");
        inMensagem.focus();
        return;
    }

    // obtém as palavras que devem sensurar
    const palavrasSensuradas = mensagem.match(/bobo|feio|chato/gi);

    // percorre o vetor de palavras sensuradas
    for (let sensurada of palavrasSensuradas) {
        // gera a qtd estrelas considerando que vai exibir a 1ª e última letra
        const asteriscos = "*".repeat(sensurada.length - 2);
        // extrai(slice) as letras do meio e substirui(replace) por *
        mensagem = mensagem.replace(sensurada.slice(1, sensurada.length -1), asteriscos);
    }
    console.log(mensagem);
}
// referencia o btEnviar e vincula function exibitChat ao evento click
document.getElementById("btEnviar").addEventListener("click", exibirChat);