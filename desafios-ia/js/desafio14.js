/**
 * esse script cria um vetor de objetos representando x produtos importados, processa esse vetor,
 * gerar um novo vetor de objetos contendo as mesmas propriedades, mas adiciona uma propriedade precoReal,
 * contendo o valor convertido para Reais (considerando a taxa de câmbio de R$ 5.50 por dólar).
 * Por fim, manipula o filtro e exibe os produtos na tela.
 * 
 * autor: Fabiano O.
 */

// gera uma lista de produtos com um nº aleatório (entre 5 e 10) de produtos aleatórios
const listaProdutos = gerarProdutos(gerarNum(5, 10));
const listaProdutosReal = converterReal(listaProdutos);
console.log(listaProdutosReal);

// gera um nº aleatório com intervalo definido
function gerarNum(min, max) {
    let numGerado; // recebe o nº gerado;

    // verifica se os nº são inteiro
    if (Number.isInteger(min) && Number.isInteger(max)) {
        // gera um nº inteiro
        numGerado = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        // gera um nº float
        numGerado = ((Math.random() * (max - min)) + min).toFixed(2);
    }
    
    return numGerado;
}

// função que gera um id único
function gerarId() {
    // define as letras para usar na composição do id
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const indexAleatorio = gerarNum(0, letras.length - 1); // define um nº para um index aleatório

    // gera um nº "único" com base no tempo atual
    let nTempo = Date.now();
    // adiciona e subtrai nºs aleátorios para evitar IDs iguais em loops
    nTempo = nTempo + gerarNum(1000, 2000) - gerarNum(100, 500);

    // gera o id concatenando o nº + uma letra aleatória
    const idGerado = nTempo + letras.charAt(indexAleatorio);
    return idGerado;
}

// função que cria um vetor de produtos aleatórios
function gerarProdutos(qtdProdutos) {
    // cria o vetor local para concatenar os objetos gerados
    const listaProdutosGerados = [];

    // cria um vetor com nomes de produtos aleatórios
    const nomesAleatorios = ["Mini Ventilador USB Portátil Recarregável", "Organizador de Gaveta Dobrável Multifuncional",
        "Luminária LED Touch com Sensor de Movimento", "Suporte Ajustável para Celular de Mesa",
        "Fone Bluetooth Esportivo Sem Fio", "Escova Elétrica Facial Recarregável", "Kit Potes Herméticos para Cozinha 5 Peças",
        "Mochila Impermeável Casual Antifurto", "Massageador Cervical Portátil com Vibração",
        "Tapete Antiderrapante Absorvente para Banheiro"];

    // repete qtdVezes para gerar qtdProdutos
    for (let i = 0; i < qtdProdutos; i++) {
        // define aleatorimente um nome (index de nomesAleatórios)
        const indexAleatorio = gerarNum(0, nomesAleatorios.length - 1);

        // cria um novo objeto de produto
        const produtoObjeto = {
            id: "Prod-" + gerarId(),
            nome: nomesAleatorios[indexAleatorio],
            precoDolar: "$ " + gerarNum(1.99, 9.99)
        }

        // adiciona o produto gerado ao final da lista local
        listaProdutosGerados.push(produtoObjeto);
    }

    return listaProdutosGerados;
}

// função que converte os preços de dolar para real
function converterReal(lista) {
    const listaConvertida = []; // recebe os novos objetos com o valore R$

    // para cada elemento de lista
    lista.forEach(element => {
        // cria um novo obeto
        const produtoConvertido = {
            id: element.id,
            nome: element.nome,
            precoDolar: element.precoDolar,
            precoReal: (element.precoDolar.replace("$ ", "") * 5.5).toFixed(2)
        }
        listaConvertida.push(produtoConvertido);
    });

    return listaConvertida;
}