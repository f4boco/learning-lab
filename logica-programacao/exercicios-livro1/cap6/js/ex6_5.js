/**
 * esse script gera e-mails institucionais. O e-mail é formado
 * pelas letras iniciais do nome e pelo sobrenome, mais o @empresa.com.br
 * autor: Fabiano O.
 */

function gerarEmail() {
    // referencia os elementos da página
    const inNome = document.getElementById("inNome");
    const outEmail = document.getElementById("outEmail");

    // obtém o conteúdo do campo inNome e...
    const nome = inNome.value.trim(); // remove possíveis espaços no começo e final

    // verifica se vazio, ou se não há espaços no nome
    if (nome == "" || nome.indexOf(" ") == -1) {
        alert("Informe o Nome Completo do funcionário...");
        inNome.focus();
        return;
    }

    // divide o nome em itens de vetor, criados a cada ocorrência de espaço
    const partes = nome.split(" ");
    let email = ""; // vai concatenar o resultado
    const tam = partes.length; // obtém o nº de itens do vetor

    // percorre os itens do vetor (exceto o último) ...
    for (let i = 0; i < tam - 1; i++) {
        email += partes[i].charAt(0); // e obtém a letra inicial de cada item
    }

    // concatena as letras iniciais com a última parte (sobrenome) e empresa
    email += partes[tam - 1] + "@empresa.com.br";

    // exibe o e-mail em letras minúsculas
    outEmail.innerText = email.toLowerCase();
}
// referencia o btGerar e associa a function gerarEmail() ao evento click
document.getElementById("btGerar").addEventListener("click", gerarEmail);