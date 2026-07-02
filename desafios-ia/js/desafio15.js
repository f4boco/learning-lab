/**
 * esse script gera um vetor com produtos aleatórios (preços aleatórios, datas, nomes, etc),
 * exibe esse vetor na tela e realiza o filtro de produtos vencidos;
 * autor: Fabiano O.
 */

const listaProdutos; // recebe o vetor de produtos aleatórios

// função que gera numeros aleatórios em um intervalo definido
function gerNum(min, max) {
    let numGerado; // receberá o nº gerado

    // se for gerar número aleatório
    if (Number.isInteger(min) && Number.isInteger(max)) {
        numGerado = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        numGerado = Math.random() * (max - min + 1) + min;
    }
    
    return Number(numGerado.tofixed(2));
}

// função que gera um vetor de produtos aleatoriamente
function gerarProdutos(qtdProdutos) {
    // lista com nomes de produtos aleattórios
    const produtosAleatorios = ["Arroz Integral 1kg", "Feijão Carioca 1kg", "Macarrão Espaguete 500g",
        "Leite Integral 1L", "Café Solúvel 200g", "Açúcar Refinado 1kg", "Óleo de Soja 900ml",
        "Farinha de Trigo 1kg", "Biscoito Recheado 140g", "Sabão em Pó 800g", "Detergente Líquido 500ml",
        "Papel Higiênico 12 rolos", "Margarina 500g", "Molho de Tomate 340g", "Achocolatado em Pó 400g"];
    
    const produtosGerados = []; // armazena os produtos gerados
    const datasProd = new Date(); // para manipular as datas de vencimento
    const anoAtual = datasProd.getFullYear(); // descobre o ano atual

    // cria um loop para repetit qtdProdutos e gerar qtdProdutos produtos
    for (let i = 0; i < qtdProdutos; i++) {
        // pega um index aleatório do vetor produtos aleatórios para ser o nome do Produto
        const nomeProduto = produtosAleatorios[gerNum(0, produtosAleatorios.length - 1)];
        const preco = gerNum(0.90, 10); // define um preço aleatório

        // manipula a data de validade
        datasProd.setDate(gerNum(1, 31)); // deifine um dia aleatorio
        datasProd.setMonth(0, 11); // define um mês aleatório
        datasProd.setFullYear(gerNum(anoAtual, anoAtual + 1)); // define o ano de validade

        
    }
}