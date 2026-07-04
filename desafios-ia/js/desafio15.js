/**
 * esse script gera um vetor com produtos aleatórios (preços aleatórios, datas, nomes, etc),
 * exibe esse vetor na tela e realiza o filtro de produtos vencidos;
 * autor: Fabiano O.
 */

// referencia os elementos html de saída
const outTitulo = document.getElementById("outTitulo");
const outProdutos = document.getElementById("outProdutos");

const listaProdutos = gerarProdutos(gerNum(10, 20)); // recebe o vetor de produtos aleatórios
// chama a função de exibir produtos
exibirProdutos("Produtos em Estoque", listaProdutos);

// função que gera numeros aleatórios em um intervalo definido
function gerNum(min, max) {
    let numGerado; // receberá o nº gerado

    // se for gerar número aleatório
    if (Number.isInteger(min) && Number.isInteger(max)) {
        numGerado = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        numGerado = Math.random() * (max - min) + min;
    }

    return Number(numGerado.toFixed(2));
}

// função que gera um id único
function gerarId() {
    // captura o número de milissegundos do tempo atual
    const tempoAtual = Date.now();
    // gera uma letra aleatória (A-Z)
    const letraAleatoria = String.fromCharCode(gerNum(0, 25) + 65);

    // retorna um id no padrão num + letra + TempoAtual
    return gerNum(1000, 2000) + letraAleatoria + tempoAtual;
}

// função que gera um vetor de produtos aleatoriamente
function gerarProdutos(qtdProdutos) {
    // lista com nomes de produtos aleattórios
    const produtosAleatorios = ["Arroz Integral 1kg", "Feijão Carioca 1kg", "Macarrão Espaguete 500g",
        "Leite Integral 1L", "Café Solúvel 200g", "Açúcar Refinado 1kg", "Óleo de Soja 900ml",
        "Farinha de Trigo 1kg", "Biscoito Recheado 140g", "Sabão em Pó 800g", "Detergente Líquido 500ml",
        "Papel Higiênico 12 rolos", "Margarina 500g", "Molho de Tomate 340g", "Achocolatado em Pó 400g"];
    const produtosGerados = []; // armazena os produtos gerados

    // descobre o ano atual
    const anoAtual = new Date().getFullYear();

    // cria um loop para repetit qtdProdutos e gerar qtdProdutos produtos
    for (let i = 0; i < qtdProdutos; i++) {
        // pega um index aleatório do vetor produtos aleatórios para ser o nome do Produto
        const nomeProduto = produtosAleatorios[gerNum(0, produtosAleatorios.length - 1)];
        const precoProduto = gerNum(0.90, 10); // define um preço aleatório

        // gera nºs aleatórios para defini o dia, mes e ano
        const dia = gerNum(1, 31);
        const mes = gerNum(0, 11);
        const ano = gerNum(anoAtual, anoAtual + 1);

        // cria uma data de vencimento para o produto
        const dataVenc = new Date(ano, mes, dia);
        /**
         * O objeto é criado com a data definida e a hora 00:00:00
         */

        // cria um novo objeto com produtos
        const produto = {
            id: gerarId(),
            nome: nomeProduto,
            preco: precoProduto,
            dataVenc: dataVenc
        }

        // adiciona o objeto do produto ao final do vetor produtosGerados
        produtosGerados.push(produto);
    }

    return produtosGerados;
}

// função que filtra os produtos vencidos
function filtrarVencidos(lista) {
    // cria um objeto com a data atual para comparação
    const dataHoje = new Date();
    // zera a hora para comparar a data
    dataHoje.setHours(0, 0, 0, 0);

    // filtra os produtos com a data anterior a hoje e retona um vetor com eles
    return lista.filter(produto =>
        produto.dataVenc < dataHoje
    );
}

// função que exibe os produtos na tela
function exibirProdutos(textoConteiner, lista) {
    // modifica o título do conteiner de saída
    outTitulo.innerText = textoConteiner;

    // limpa o html de saída
    outProdutos.innerHTML = "";

    // verifica se a lista está vazia
    if (lista.length === 0) {
        const pVazio = document.createElement("p");
        pVazio.innerHTML = `
            <p>Nenhum produto para ser Exibido</p>
            `;
        outProdutos.appendChild(pVazio);
    } else {
        // para cada elemento da lista
        lista.forEach(element => {
            // cria um elemento html div
            const produtoHtml = document.createElement("div");

            // adiciona as classes de estilização
            produtoHtml.className = "cartao";

            // cria o html que exibe na tela
            produtoHtml.innerHTML = `
                <p>${element.nome}</p>
                <smal><strong>Validade:</strong> ${element.dataVenc.toLocaleDateString("pt-BR")}</small>
                `;

            // adiciona o elemento criado ao elemento de saída
            outProdutos.appendChild(produtoHtml);
        });
    }
}

// referencia o btFiltrar
const btFiltrar = document.getElementById("btFiltrar");
btFiltrar.addEventListener("click", () =>
    exibirProdutos("Produtos Vencidos", filtrarVencidos(listaProdutos))
); // associa a função exibirProdutos ao elemento click do botão

// referencia o btLimpar e associa a função exibirProdutos com a lista geral como parâmetro
document.getElementById("btLimpar").addEventListener("click", () =>
    exibirProdutos("Produtos em Estoque", listaProdutos)
);