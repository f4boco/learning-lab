/** 
 * esse script obtém o nome digitado pelo usuário, modifica o valor do campo de entrada,
 * e exibe uma dica, com algumas letras ocultas.
 * autor: Fabiano O.
 */

function montarDica() {
    // referencia os elementos de entrada e saída
    const inFruta = document.getElementById("inFruta");
    const outDica = document.getElementById("outDica");

    // ontém o conteúdo do inFruta
    const fruta = inFruta.value.toUpperCase(); // toUpperCase() tranforma as letras em Letras Maiúsculas

    // verifica se o texto é inválido
    if (fruta.trim() == "") { // Significa que foi digitado nada, ou espaços em branco
        alert("Informe a Fruta...");
        inFruta.value = "";
        inFruta.focus();
        return;
    }

    let resposta = fruta.charAt(0); // letra inicial da fruta
    let estrelas = "*"; // vai concatenar *
    const tam = fruta.length; // obtém o tamanho do nome da fruta

    // percorre os demais caracteres da fruta
    for (let i = 1; i < tam; i++) {
        // se a letra da posição i for igual a primeira letra...
        if (fruta.charAt(i) == fruta.charAt(0)) {
            resposta += fruta.charAt(i); // Concatena a letra (pois deve ser exibida)
        } else {
            resposta += "_"; // adiciona o sublinha (letra oculta)
        }
        estrelas += "*"; // concatena *
    }

    // exibe a resposta e exibe estrelas (*) em inFruta
    outDica.innerText = resposta;
    inFruta.value = estrelas;
}
// referencia o btMostrar
const btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarDica); // associa a function montarDica ao evento click do btMontar