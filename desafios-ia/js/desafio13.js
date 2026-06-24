/**
 * esse script analisa uma string com um texto e extrai todos os valores numéricos que vêm logo após
 * o símbolo R$ .
 * autor: Fabiano O.
 */

// referencia os elementos html
const formulario = document.getElementById("formulario-texto");
const inTexto = document.getElementById("inTexto");
const outResultado = document.getElementById("outResultado");

formulario.addEventListener("submit", function (e) {
    // impede que o site recarregue e reinicie o código js;
    e.preventDefault();

    // obtém o conteúdo de entrada do texto
    const texto = inTexto.value;

    // verifica se a entrada é != de apenas espaços em branco
    if (texto.trim() === "") {
        alert("Entrada Inválida...");
        inTexto.value = "";
        inTexto.focus();
        return;
    }

    // busca valores monetarios no texto
    const valoresMonetarios = buscarMonetarios(texto);

    // verifica se existe ocorrências de valores monetários no texto e exibe o resultado no html
    if (valoresMonetarios.length == 0) {
        outResultado.innerText = "Não há valores Monetários no Texto";
    } else {
        outResultado.innerText = "No texto, há o(s) seguinte(s) valor(es) monetário(s):\n" + 
            valoresMonetarios.join(", ");
    }
});

// function que busca valores monetários
function buscarMonetarios(texto) {
    // cria a regex que busca os padrões monetários
    const regexMonetario = /(?<=R\$|R\$ )(\p{Decimal_Number}+)/gu;

    // busca as ocorrências da regex na string texto
    const valoresMonetarios = texto.match(regexMonetario);

    /**
     * Retorna um vetor com:
     * se (valoresMonetarios === null (false)): Vetor vazio
     * se não: vetor valoresMonetarios
     */
    return !valoresMonetarios ? [] : valoresMonetarios;
}