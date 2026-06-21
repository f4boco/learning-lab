/**
 * esse script cria um vetor de objetos representando x voos em um aeroporto. processa 
 * esse vetor e gera uma lista no HTML contendo os voos e os status.
 * 
 * E para fins de pratica, cria vetores separando por por status e exibe no console.
 * 
 * autor: Fabiano O.
 */

// cria o vetor global com a lista de voos
const listaVoos = gerarVoos(gerarNumeros(5, 15));

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
    let vControle = 0;
    while (vControle < qtdVoos) {
        // variável que define o status do voo e armazena um nº aleatório nela
        let statusVoo = gerarNumeros(0, 2);

        // define o status de acordo com o nº gerado
        if (statusVoo === 0) {
            statusVoo = "Confirmado";
        } else if (statusVoo === 1) {
            statusVoo = "Atrasado";
        } else {
            statusVoo = "Cancelado";
        }

        // cria o objeto do voo
        const vooGerado = {
            codigoVoo: Date.now(), // gera um código único, com base no tempo atual
            destino: nomesDestino[gerarNumeros(0, nomesDestino.length - 1)], // pega um destino aleatório
            status: statusVoo
        }

        // adiciona o vooGerado ao final da listaLocalVoos
        listaLocalVoos.push(vooGerado);

        // incrementa a variável de controle
        vControle++;
    }
    // retorna o vetor de voos gerado localmente 
    return listaLocalVoos;
}

