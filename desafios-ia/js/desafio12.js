/**
 * esse script começa com um array simples contendo 6 palavras no plural (strings que terminam
 * com a letra "s") e gera uma nova lista contendo essas palavras no singular, sem a letra "s" no final.
 * autor: Fabiano O.
 */

// cria o vetor global com as palavras no plural
const palavrasPlural = ["Casas", "Livros", "Carros", "Árvores", "Cidades", "Flores"];

// cria a fução que remove o plural
function removerPlural() {
    // cria o vetor que receberá as palavras no singular
    const palavrasSingular = [];

    // remove o "s" de cada palavraPlural e adiciona ao vetor palavrasSingular
    for (palavra of palavrasPlural) {
        palavrasSingular.push(palavra.replace(/s$/iu, ""));
    }
    
    return palavrasSingular.join(", ");
}

// referencia os elementos html de saída e atualiza os elementos de saída
document.getElementById("outPalavrasPlural").innerText = palavrasPlural.join(", ");
document.getElementById("outPalavrasSingular").innerText = removerPlural();
