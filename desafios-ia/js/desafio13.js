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

    // chama a função para exibir o resultado
    exibirBusca(valoresMonetarios);
});

// função que busca valores monetários
function buscarMonetarios(texto) {
    // cria a regex que busca os padrões monetários
    const regexMonetario = /(?<=R\$\s{0,1})\d+([.,]\d{2})?/g;

    // busca as ocorrências da regex na string texto
    const valoresMonetarios = texto.match(regexMonetario);

    /**
     * Retorna um vetor com:
     * se (valoresMonetarios === null (false)): Vetor vazio
     * se não: vetor valoresMonetarios
     */
    return !valoresMonetarios ? [] : valoresMonetarios;
}

// função para exibir resultado da busca
function exibirBusca(vetorBuscado) {
    // verifica se existem valores no vetor
    if (vetorBuscado.length == 0) {
        outResultado.innerText = "Não há valores Monetários no Texto";
    } else {
        // transforma os valores do vetorBuscado em Valores R$
        const vetorTransformadoMoney = vetorBuscado.map(valor => "R$ " + valor);

        // exibe os valores transformados
        outResultado.innerText = "No texto, há o(s) seguinte(s) valor(es) monetário(s):\n" + 
            vetorTransformadoMoney.join(";\n");
    }
}