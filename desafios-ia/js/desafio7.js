/**
 * esse cript recebe o texto de uma publicação de rede social enviada pelo usuário, analisa o texto,
 * localiza todas as palavras que começam com o caractere # (hashtags) e exibe elas em uma lista na tela.
 * autor: Fabiano O.
 */

// referencia os elementos html
const formulario = document.getElementById("formulario-publicacao");
const inPublicacao = document.getElementById("inPublicacao");
const outResultado = document.getElementById("outResultado");

formulario.addEventListener("submit", function (e) {
    // impede que a página atualize e recarregue o código js
    e.preventDefault();

    // obtém o conteúdo do elemento de entrada
    const texto = inPublicacao.value;

    // Verifica se o usuário fez uma publicação em branco
    if (texto.trim() === "" || texto.length < 1) {
        alert("Digite a Descrição da Publicação");
        inPublicacao.value = "";
        inPublicacao.focus();
        return;
    }

    // recebe o retorna da buscarPadrao
    const hashtags = buscarPadrao(texto, "#[^\\s]+");

    // verifica se alguma hashtag foi localizada na publicação
    if (hashtags.length == 0) {
        outResultado.innerText = "Não há Hashtags na Publicação.";
    } else {
        outResultado.innerText = hashtags.join(", ");
    }
});

// função match
function buscarPadrao(texto, padraoRegex) {
    // cria uma regex com o padrão a ser buscado no texto (deve ser case sensitive)
    const regEx = new RegExp(padraoRegex, "g");

    // retorna um vetor com as ocorrências do padrão 'regEx' na publicação
    return texto.match(regEx);
}