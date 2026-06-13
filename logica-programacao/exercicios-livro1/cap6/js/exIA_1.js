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
        const asteriscos = "*".repeat(sensurada.length);
        mensagem = mensagem.replace(sensurada, asteriscos);
    }
    console.log(mensagem);
}
// referencia o btEnviar e vincula function exibitChat ao evento click
document.getElementById("btEnviar").addEventListener("click", exibirChat);