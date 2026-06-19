/**
 * esse script recebe um texto com um documento (cpf ou cnpj, remover todos os espaços em branco,
 * pontos, hífens e barras, deixando apenas os números e exibe a string puramente numérica resultante na tela.
 * autor: Fabiano O.
 */

function limparDocumento() {
    // referencia os elementos html de entrada e saída
    const inDocumento = document.getElementById("inDocumento");
    const outResultado = document.getElementById("outResultado");

    // obtém o conteúdo do elemento de entrada
    const documento = inDocumento.value.trim();

    // verifica se a entrada foi apenas espaços em branco
    if (documento == "") {
        alert("Digite um nº de Documento...");
        inDocumento.value = "";
        inDocumento.focus();
        return;
    }

    // limpa todos os caracteres ".", "/", "-", " ";
    const documentoLimpo = documento.replace(/[\.\/\- ]/g, "");

    // verifica se é um cpf ou um cpnj
    if (/^\d{11}$/.test(documentoLimpo) || /^\d{14}$/.test(documentoLimpo)) {
        outResultado.innerText = documentoLimpo;
    } else {
        outResultado.innerText = "O valor digitado não corresonde a um documento.";
    }
    
}
// referencia o btLimpar
const btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDocumento); // associa a function limparDocumento ao evento click