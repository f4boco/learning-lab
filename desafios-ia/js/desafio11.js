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
const outResultado = document.getElementById("outResultado");

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
    const contagem = contarPalavras(texto, palavraBuscada);

    // exibe a contagem
    outResultado.innerText = `"${palavraBuscada}" Aparece ${contagem} vezes no texto`;

});

// função que conta as palavras no texto (Usa RegEx para possibilitar a busca global)
function contarPalavras(texto, palavra) {
    // escapa possíveis caracteres especiais de RegEx
    const palavraEscapada = palavra.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    /** 
     * essa linha busca todos os caracteres especiais de regex, adiciona uma \ antes dele;
     * $& representa o próprio texto encontrado.
     */

    // verifica se a palavra é um " " ou um símbolo
    const isEspecial = palavra.trim() === "" || !/[a-z0-9]/i.test(palavra);

    // cria a RegEx com a palavra a ser buscada
    const regexPalavra = new RegExp(isEspecial
        ? `${palavraEscapada}`
        : `\\b${palavraEscapada}\\b`, "gi"
    );
    /**
     * Minha Lógica para decidir a regex é: Se tiver apenas um caractere (" " ou símbolos) não usa
     * a fronteira de caractere (\b), mas se for uma palavra (+ de um caractere), usa.
     */

    // busca as correspondências no texto
    const resultadoBusca = texto.match(regexPalavra);

    // retorna a contagem
    return !resultadoBusca ? 0 : resultadoBusca.length;
}