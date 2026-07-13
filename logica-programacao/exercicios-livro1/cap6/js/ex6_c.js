/**
 * Uma palavra ou frase é um palíndromo quando pode ser lida nos dois sentidos, como RADAR,
 * MUSSUM, ABBA. Elaborar um programa que leia uma frase e informe se ela é ou não um
 * palíndromo (converter a frase para caixa alta).
 * 
 * autor: Fabiano O.
 */

function verificarPolidromo() {
    // referencia o elemento html d eentrada
    const inFrase = document.getElementById("inFrase");
    const frase = (inFrase.value.trim()).toString().toUpperCase();

    // verifica se a entrada é válida
    if (frase === "" || !isNaN(frase)) {
        alert("Digite uma PALAVRA ou um FRASE");
        inFrase.value = "";
        inFrase.focus();
        return;
    }

    // quebra a frase em um vetor e inverte a órdem
    const fraseQuebrada = frase.split("").reverse();
    // transforma o vetor em uma string
    const fraseReversa = fraseQuebrada.join("");

    // se remover os espaços das duas frases elas são iguais?
    if (frase.replaceAll(" ", "") === fraseReversa.replaceAll(" ", "")) {
        exibirResultado(frase, true);
    } else {
        exibirResultado(frase, false);
    }
}
document.getElementById("btVerificar").addEventListener("click", verificarPolidromo);

// função que exibe o resultado
function exibirResultado(frase, isPolid) {
    document.getElementById("outSaida").innerText = `${frase}${isPolid ? "" : " NÃO "} é um Polídromo`;
}