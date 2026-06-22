/**
 * esse script recebe um texto longo e uma palavra a ser contada, conta exatamente quantas vezes
 * a palavra (independentemente de estar escrita em maiúsculas, minúsculas ou misturada) aparece
 * ao longo de todo o texto e exibe a contagem.
 * autor: Fabiano O.
 */

// referencia os elementos html
const formulario = document.getElementById("formulario-entradas");
const inTexto = document.getElementById("inTexto");
const inPalavra = document.getElementById("inPalavra");

formulario.addEventListener("submit", function (e) {
    // impede que a página recarregue e o código js reinicie
    e.preventDefault();

    // obtém o conteúdo dos elementos de entrada
    const texto = inTexto.value;
    const palavraBuscada = inPalavra.value;

    // verificar se a entrada de texto é apenas espaços
    if (texto.trim() === "") {
        alert("Texto Inválido...");
        inTexto.value = "";
        inTexto.focus();
        return;
        /**
         * Não verifica a palavra buscada para permitir contar espaços em branco;
         */
    }

    // chama a função que conta a palavra no texto
    contarPalavras(texto, palavraBuscada);

});

// função que conta as palavras no texto (Usa RegEx para possibilitar a busca global)
function contarPalavras(texto, palavra) {
    // referencia o elemento html de saída
    const outResultado = document.getElementById("outResultado");

    // cria a RegEx com a palavra a ser buscada
    const regexPalavra = new RegExp(`\\b${palavra}\\b`, "gi");

    // busca as correspondências no texto
    const resultadoBusca = texto.match(regexPalavra);

    // retorna no elemento html a contagem
    outResultado.innerText = `"${palavra}" Aparece ${!resultadoBusca ? 0 : resultadoBusca.length} vezes no texto`;
}