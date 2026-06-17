/**
 * esse script gera produtos aleatórios e manipula o filtro definido pelo usuário.
 * autor: Fabiano O.
 */

// cria um vetor de produtos gerado aleatoriamente e chama a função de exibição
const listaProdutos = gerarProdutos();
exibirProdutos();

// referencia os elementos de entrada
const formulario = document.getElementById("formulario-filtro");
const inCategoria = document.getElementById("inCategoria");
const inValorMinimo = document.getElementById("inValorMinimo");

// adiciona o "ouvinte" de eventos ao formulario
formulario.addEventListener("submit", function (e) {
    // impeder que a página recarregue e o código js seja perdido
    e.preventDefault();

    // obtém os valoeres dos elementos de entrada
    const categoria = inCategoria.value;
    const valorMinimo = Number(inValorMinimo.value);

    // chama a função exibirProdutos
    exibirProdutos(filtrarProdutos(valorMinimo, categoria));
})

// function de limpar filtro
function limparFiltros() {
    // reseta o formulário 
    formulario.reset();

    // chama a funcção exibir produtos (sem parâmetros)
    exibirProdutos();
}
// referencia o btLimpar e associa a função limparFiltros() ao evento click
document.getElementById("btLimpar").addEventListener("click", limparFiltros);

// function geradora de produtos
function gerarProdutos() {
    const listaProdutosTemp = []; // receberá os objetos aleatórios
    const categoriasProdutos = ["Consumer Electronics", "Smart Home", "Periféricos e Hardware de Computação",
        "Networking e Infraestrutura", "Componentes e Armazenamento de Dados"];

    // defin, 6 produtos para cada categoria, em órdem
    const baseProdutos = ["Smartphone", "Tablet", "Smartwatch", "Lâmpada Inteligente", "Fechadura Inteligente",
        "Câmera de Segurança Wi-Fi", "Teclado Mecânico", "Mouse Gamer", "Monitor Ultrawide", "Roteador Wi-Fi 6",
        "Switch Gigabit", "Access Point Corporativo", "SSD NVMe", "Memória RAM DDR5", "HD Externo"];

    // gera um nº aleatório entre 1 e 100 para definir a quantidade de produtos a ser gerado
    const qtdProdutos = gerarNumeros(1, 100);

    let vControle = 0; // controle do loop
    while (vControle < qtdProdutos) {
        // gera um nºs aleatórios para pegar uma categoria e um produto aleatoriamente
        const indexCategoria = gerarNumeros(0, categoriasProdutos.length - 1);
        const indexProduto = gerarNumeros(0, baseProdutos.length - 1);

        // cria o objeto com o produto
        const produtoGerado = {
            id: "Produto-" + Date.now(), // gera um ID único, com base no tempo atual
            nome: baseProdutos[indexProduto],
            categoria: categoriasProdutos[indexCategoria],
            preco: "R$: " + (gerarNumeros(100, 5000)).toFixed(2)
        }

        // adiciona o produto gerado ao final da listaProdutos
        listaProdutosTemp.push(produtoGerado);

        // incrementa a variável de controle
        vControle++;
    }

    // retorna o vetor temporário
    return listaProdutosTemp;
}

// function para gerar nº aleatório em um intervalo definido
function gerarNumeros(min, max) {
    const numeroGerado = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroGerado;
}

// function para exibir o vetor de produtos na tela
function exibirProdutos(vetor = listaProdutos) {
    // referencia o elemento htmlde saída
    const outProdutos = document.getElementById("outProdutos");

    // limpa o conteúdo do elemento
    outProdutos.innerHTML = "";

    // verifica se o vetor está vazio
    if (vetor.length == 0) {
        outProdutos.innerHTML = `<p>Hummm, não há produtos</p>`;
    } else {
        // percorre o vetor
        for (produto of vetor) {
            // cria um elemento html para o produto
            const cartaoProduto = document.createElement("div");

            // adiciona a classe de estilização ao cartão
            cartaoProduto.classList.add("cartao");

            // adiciona o html que monta a estrutura de exibição do produto
            cartaoProduto.innerHTML = `
                <p>${produto.nome} - ${produto.preco}</p>
                <small>${produto.categoria}</small>
            `;

            // coloca o elemento criado dentro do elemento de saída
            outProdutos.appendChild(cartaoProduto);
        }
    }
}

// função que filtra produtos
function filtrarProdutos(valorMinimo, categoria) {
    // cria um vetor para receber os produtos filtrados
    let produtosFiltrados = listaProdutos.filter(produto => {
        // remove as strings do preco e tranforma em número
        const precoProduto = Number(produto.preco.replace("R$: ", ""));

        // verifica se o preco >= valorMinimo (true || false)
        const passaPreco = precoProduto >= valorMinimo;

        // verifica a categoria
        const passaCategoria = categoria === "todas" || produto.categoria === categoria;
        /**
         * se o parâmetro categoria for "todas", todos os produtos verificados
         * var ter essa varialvel como true. Logo todas as categorias entram.
         */

        // retorna true or false (true o produto passa no filtro, false não entra)
        return passaPreco && passaCategoria;
    });

    // retorna o vetor com o filtro
    return produtosFiltrados;
}