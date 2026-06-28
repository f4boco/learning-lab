/**
 * esse script cria um vetor de objetos representando x produtos importados, processa esse vetor,
 * gerar um novo vetor de objetos contendo as mesmas propriedades, mas adiciona uma propriedade precoReal,
 * contendo o valor convertido para Reais (considerando a taxa de câmbio de R$ 5.50 por dólar).
 * Por fim, manipula o filtro e exibe os produtos na tela.
 * 
 * autor: Fabiano O.
 */

// referencia os elementos html
const formulario = document.getElementById("formulario-filtro");
const inValorMin = document.getElementById("inValorMin");
const inValorMax = document.getElementById("inValorMax");
const outProdutos = document.getElementById("outProdutos");

// gera uma lista de produtos com um nº aleatório (entre 5 e 10) de produtos aleatórios
const listaProdutos = gerarProdutos(gerarNum(5, 10));
const listaProdutosReal = converterReal(listaProdutos);
exibirProdutos(listaProdutosReal); // chamada a função que exibe os produtos

formulario.addEventListener("submit", function (e) {
    // impede que a página recarrege e reinicie o código js
    e.preventDefault();

    // obtém os valores das entradas do filtro
    const valorMin = Number(inValorMin.value);
    let valorMax = Number(inValorMax.value);

    // verifica se as entradas são válidas para o filtro
    if (isNaN(valorMin) || isNaN(valorMax)) {
        alert("Valores de Filtro Inválidos");
        inValorMin.focus();
        return;
    } else if (valorMax < valorMin) {
        // verifica se cada elemento da lista é >= valorMax
        listaProdutosReal.forEach(element => {
           const preco = removerMoeda(element.precoDolar, "$");
           if (preco >= valorMax) {
            valorMax = preco; // O maior preco define o valorMax
           }
        });
    }
    // chama a função de filtrar produtos passando o intervalo como parâmetros
    filtrarProdutos(valorMin, valorMax);
});

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
            precoReal: "R$ " + (element.precoDolar.replace("$ ", "") * 5.5).toFixed(2)
        }
        listaConvertida.push(produtoConvertido);
    });

    return listaConvertida;
}

// função que exibe os produtos na tela
function exibirProdutos(lista) {
    // limpa o html de outProdutos
    outProdutos.innerHTML = "";

    // verifica a lista está vazia
    if (lista.length === 0) {
        outProdutos.innerHTML = `<p>Nenhum produto para ser Exibido</p>`;
    } else {
        // para cada elemento da lista...
        lista.forEach(element => {
            // cria um novo elemento html objeto para o elemento
            const cartaoProduto = document.createElement("div");

            // adiciona a classe de estilização ao elemento html
            cartaoProduto.className = "cartao";

            // cria o elemento que monta a estrutura do elemento
            cartaoProduto.innerHTML = `
            <p>${element.nome}</p>
            <small><strong>${element.precoDolar}</strong> (${element.precoReal})</small>
            `;

            // adiciona o elemento criado dentro de outResultado
            outProdutos.appendChild(cartaoProduto);
        });
    }
}

// função que filtra o vetor
function filtrarProdutos(min, max) {
    // cria um novo vetor com os produtos filtrados
    const listaFiltrada = listaProdutosReal.filter(produto => {
        // tranforma o valor do produto em number
        const preco = removerMoeda(produto.precoDolar, "$");

        // verifica se o preco esta no limite do filtro
        const isMin = preco >= min;
        const isMax = preco <= max;

        // retorna true para o produto que é >= min E <= max
        return isMin && isMax;
    });
    // chama a função de exibir passando o vetor filtrado como parâmetro
    exibirProdutos(listaFiltrada);
}

// função que remove o marcador de moeda
function removerMoeda(valor, moeda) {
    // retorna o numero removido o símbolo da moeda
    return Number(valor.replace(`${moeda} `, ""));
}

// função que limpa o filtro
function limparFiltro() {
    // chama a função de exibir passando o vetor completo como parâmtro;
    exibirProdutos(listaProdutosReal);

    // recarrega o formulário
    formulario.reset();
}
// associa a função limparFiltro ao evento click do btLimpar
document.getElementById("btLimpar").addEventListener("click", limparFiltro);