/**
 * esse script recebe um bloco de texto e busca por padrões BR123456789X.
 * autor: Fabiano O.
 */

function rastrearPacotes() {
    // referencia os elementos de entrada e saída
    const inRelato = document.getElementById("inRelato");
    const outResposta = document.getElementById("outResposta");

    // obtém o conteúdo do elemento de entrada e remove expaços a esquerda e a direita
    const relato = inRelato.value.trim();

    // verifica se o relato é válido
    if (relato == "") {
        alert("Nos informe, em texto, o ocorrido e o código de rastreio");
        inRelato.value = "";
        inRelato.focus();
        return;
    }
    if (relato.length < 12 || relato.length > 200) {
        alert("O seu texto contém " + relato.length + " caracteres. " + 
            "Ajuste para ficar entre 12 e 200 caracteres.");
        inRelato.focus();
        return;
    }

    // obtém o retorno da busca pelo código de rastreio
    const codRastreio = extrairCodigos(relato);

    // verifica o retorno
    if (!codRastreio) { // se false (retorno null)
        outResposta.innerText = "Analisamos o seu relato e não identificamos código de rastreio válido. " +
            "Aguardando o Código de Rastreio...";
            inRelato.focus();
    } else { // se econtrar correspondência
        outResposta.innerText = "Já identificamos seu(s) pacote(s): {" + codRastreio.join(", ") +
            "}. Em Breve te enviaremos um E-Mail com o Status.";
    }

    // prepara a entrada para os próximos relatos
    inRelato.value = "";
    inRelato.focus();
}
// referencia o btEnviar
const btEnviar = document.getElementById("btEnviar");
btEnviar.addEventListener("click", rastrearPacotes); // associa a function rastrearPacotes ao evento click do btEnviar

function extrairCodigos(texto) {
    // busca os padrões BR123456789X globalmente e ignorando o case sensitive
    const rastreio = texto.match(/BR\d{9}X/gi);
    return rastreio;
}