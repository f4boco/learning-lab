/**
 * esse script é resposável pela manipulação da data
 * autor: Fabiano O.
 */


// referencia o elemento html de "data-atual"
const dataAtual = document.getElementById("data-atual");

// obter data atual e ...
const hoje = new Date();
const dataBR = hoje.toLocaleDateString('pt-BR'); // formatar data para o Brasil (DD/MM/AAAA)

// atualizar o texto do elemento html
dataAtual.innerText = dataBR;