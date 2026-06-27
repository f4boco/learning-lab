/**
 * esse script cria um vetor de objetos representando x produtos importados, processa esse vetor,
 * gerar um novo vetor de objetos contendo as mesmas propriedades, mas adiciona uma propriedade precoReal,
 * contendo o valor convertido para Reais (considerando a taxa de câmbio de R$ 5.50 por dólar).
 * Por fim, manipula o filtro e exibe os produtos na tela.
 * 
 * autor: Fabiano O.
 */

// gera um nº aleatório com intervalo definido
function gerarNum(min, max) {
    let numGerado; // recebe o nº gerado;

    // verifica se os nº são inteiro
    if (Number.isInteger(min) && Number.isInteger(max)) {
        // gera um nº inteiro
        numGerado = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        // gera um nº float
        numGerado = (Math.random() * (max - min)) + min;
    }
    
    return numGerado;
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

    }
}