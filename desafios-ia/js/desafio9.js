/**
 * esse script recebe um link e identifica se começa com http:// ou https:// e remover essa parte do texto,
 * mantendo apenas o restante do endereço e exibir a URL limpa na tela (ex: www.google.com).
 * autor: Fabiano O.
 */

// referencia o elementos html
const formulario = document.getElementById("formulario-link");
const inLink = document.getElementById("inLink");

formulario.addEventListener("submit", function (e) {
    // impede que a página recarregue e renicie o código js
    e.preventDefault();

    // obtém o conteúdo de inLink e remove possíveis espaços a esquerda e direita
    const link = inLink.value.trim();

    // verifica se o usuário digitou apenas espaços em branco
    if (link === "") {
        alert("Cole/Copie um Link completo...");
        inLink.value = "";
        inLink.focus();
        return;
    }

    // verifica se o link não tem padrão de link
    if (!verificarLink(link)) {
        alert("O texto digitado não é um Link Válido");
        inLink.focus();
        return;
    }

    // recebe o link após a remoção do protocolo
    const linkLimpo = removerProtocolo(link);

    // exibe o link limpo;
    document.getElementById("outResultado").innerText = linkLimpo;

    // reseta o formulário para próxima entrada
    formulario.reset();
});

// função que verifica se o texto tem padrão de link
function verificarLink(link) {
    // cria a RegEx que define o padrão de link
    const regexLink = /^https?:\/\/[a-z0-9-]+(\.[a-z0-9\/-]+)+$/i;

    // retorna true of false, se o padrão existir ou não
    return regexLink.test(link);
}

// função que remove o protocolo do link
function removerProtocolo(link) {
    // cria a regex com o padrão do protocolo
    const regexProtocolo = /(http)s?:\/\//gi;

    // retorna o link com o protocolo removido
    return link.replace(regexProtocolo, "");
}