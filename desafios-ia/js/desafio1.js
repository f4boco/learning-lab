/**
 * esse script recebe uma mensagem digitada pelo usuário e sensura as palavras ofensivas;
 * autor: Fabiano O.
 */

let chat = ""; // concatena o chat a cada mensagem enviada

function sensurarChat() {
    // referencia os elementos de entrada e saída
    const inMensagem = document.getElementById("inMensagem");
    const outChat = document.getElementById("outChat");

    // obtém o conteúdo da entrada
    const mensagem = inMensagem.value;

    // verifica se o usuáriodigitou alguma mensagem
    if (mensagem.trim() == "") {
        alert("Nenhuma mensagem digitada");
        inMensagem.value = "";
        inMensagem.focus();
        return;
    }

    // chama a function de sensura
    sensurarChat(mensagem, ["bobo", "feio", "chato"]);

    // exibe o conteúdo da variável chat no elemento de saída
    outChat.innerText = chat;
}

// function para verificar a mensagem e sensurar
function sensurarChat(mensagem, sensura) {
    // prepara as palavras para expressão regular
    const expressReg = sensura.join("|");
}