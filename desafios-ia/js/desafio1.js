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
    modificarMensagem(mensagem, ["bobo", "feio", "chato"]);

    // exibe o conteúdo da variável chat no elemento de saída
    outChat.innerText = chat;

    // limpa a entrada para próximas mensagens
    inMensagem.value = "";
    inMensagem.focus();
}
// referencia o btEnviar
const btEnviar = document.getElementById("btEnviar");
btEnviar.addEventListener("click", sensurarChat); // associa a function sensurarChat ao evento click do btEnviar

// function para verificar a mensagem e sensurar
function modificarMensagem(mensagem, sensura) {
    // monta o padrão buscado pela expressão regular
    const padrao = sensura.join("|");

    // cria a expressão regular com o padrão buscado
    const expressReg = new RegExp(padrao, "gi");

    // concatena a o texto sensurado a variável chat
    chat += mensagem.replace(expressReg, "****") + "\n";
}