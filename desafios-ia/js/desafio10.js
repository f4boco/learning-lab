/**
 * esse script cria um vetor de objetos representando x voos em um aeroporto. processa 
 * esse vetor e gera uma lista no HTML contendo os voos e os status.
 * autor: Fabiano O.
 */

// cria o vetor global com a lista de voos
const listaVoos = gerarVoos(gerarNumeros(5, 15));
exibirVoos(); // chamada da função que exibe os voos no painel

// função que gera nºs aleatórios em um intervalo definido
function gerarNumeros(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function que gera o vetor aleatório de voos
function gerarVoos(qtdVoos) {
    // criar um vetor temporário com nomes aleatórios de destinos
    const nomesDestino = ["São Paulo", "Rio de Janeiro", "Brasília", "Recife", "Salvador",
        "Fortaleza", "Manaus", "Porto Alegre", "Belo Horizonte", "Curitiba", "Lisboa", "Madrid",
        "Paris", "Londres", "Roma", "Berlim", "Amsterdã", "Nova York", "Toronto", "Buenos Aires"];
    const listaLocalVoos = [];

    // cria um loop para repetir a quantidade definida e gerar os objetos
    for (let i = 0; i < qtdVoos; i++) {
        // define um status aleatoriamente
        const opcoesStatus = ["Confirmado", "Atrasado", "Cancelado"];
        const statusVoo = opcoesStatus[gerarNumeros(0, opcoesStatus.length - 1)];

        // gera um nº para definir o destino do voo
        const indexDestino = gerarNumeros(0, nomesDestino.length - 1);
        const destinoAleatorio = nomesDestino[indexDestino]; // pega um destino aleatorio

        // cria o objeto do voo
        const vooGerado = {
            codigoVoo: destinoAleatorio.substring(0, 2).toUpperCase() +
            (i + gerarNumeros(1000, 2000) + 
            destinoAleatorio.charAt(destinoAleatorio.length - 1).toUpperCase()), // gera o código do voo
            destino: destinoAleatorio,
            status: statusVoo
        }

        // adiciona o vooGerado ao final da listaLocalVoos
        listaLocalVoos.push(vooGerado);
    }
    // retorna o vetor de voos gerado localmente 
    return listaLocalVoos;
}

// function que exibe os voos no painel
function exibirVoos(voos = listaVoos) {
    // referencia o elemento de saída do html
    const areaVoos = document.getElementById("area-voos");

    // limpa a área de voos
    areaVoos.innerHTML = "";

    if (voos.length !== 0) {
        // percorre o vetor para montar o card de cada voo
        for (const voo of voos) {
            // cria uma nova div para o voo
            const divVoo = document.createElement("div");
    
            // adiciona a classe de estilização
            divVoo.classList.add("cartao");
    
            // monta a estrutura html da div do voo
            divVoo.innerHTML = `
                <small><strong style="color:${voo.status === "Confirmado" ? "green" : 
                    voo.status === "Cancelado" ? "red" : "orange"}">${voo.status}</strong></small>
                <p>${voo.codigoVoo} <strong>${voo.destino}</strong></p>
            `;
    
            // coloca a div do voo dentro da secao areaVoos
            areaVoos.appendChild(divVoo);
        }
    } else {
        // adiciona um texto informando que não há voos a ser exibido
        areaVoos.innerHTML = `<small>Não há Voos a ser Exibido!</small>`;
    }
}