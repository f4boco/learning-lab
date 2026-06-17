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
    const categoriasProdutos = ["Consumer Electronics", "Smart Home", "Periféricos e Hardware de Computação"];

    // defin, 6 produtos para cada categoria, em órdem
    const baseProdutos = ["iPhone 15 Pro", "MacBook Air M3", "Samsung Galaxy Tab S9", "Apple Watch Series 9",
        "Sony WH-1000XM5", "iPad Pro M4", "Amazon Echo Dot 5ª Geração", "Philips Hue Smart Bulb", "iRobot Roomba j7",
        "Fechadura Digital Yale YRD 256", "Smart TV LG OLED Evo", "Google Nest Cam", "NVIDIA GeForce RTX 4070",
        "Monitor Alienware 34 Curved", "Teclado Mecânico Logitech G915", "Roteador ASUS ROG Rapture GT6", "SSD Kingston Fury Renegade",
        "Mouse Logitech G Pro X Superlight 2"];

    // percorre o vetor de categorias
    for (let i = 0; i < categoriasProdutos.length; i++) {
        // gera um nº aleatório entre 5 e 20 para definir a quantidade de produtos da categoria i
        const qtdProdutos = gerarNumeros(5, 20);

        let vControle = 0;
        while (vControle < qtdProdutos) {
            const posicaoProduto = gerarNumeros(i * 6, (i + 1) * 6);
            // cria o objeto com o produto
            const produtoGerado = {
                id: "Produto-" + Date.now(), // gera um ID único, com base no tempo atual
                nome: baseProdutos[posicaoProduto],
                categoria: categoriasProdutos[i],
                preco: "R$: " + (Math.floor(Math.random() * 5000) + 1).toFixed(2)
            }

            // adiciona o produto gerado ao final da listaProdutos
            listaProdutosTemp.push(produtoGerado);

            // incrementa a variável de controle
            vControle++;
        }
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