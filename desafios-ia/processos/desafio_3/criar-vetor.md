# Criar Vetor com os Produtos

## Objetivo

Cria um vetor com um nº aleatório de produtos

## Início

O site é carregado

## Fluxo

1. Criar um vetor global `listaProdutos`, que recebe a função `gerarProdutos()`;

2. Criar uma função `gerarProdutos()`;
    3. Criar um vetor `listaProdutosTemp`, que será uma lista temporária para adicionar os produtos gerados;
    4. Criar um vetor `categorias` com três categorias;
    5. Criar um vetor `produtosAleatorios` que possui 18 nomes de produtos, sendo que, em órdem, cada 6 produtos pertence a uma cateoria do vetor de `categorias`;
    6. Criar um loop externo para percorrer o vetor de `categorias`:
        ```JavaScript
        for (let i = 0; i < categorias.length; i++);

    7. Gerar um nº aleatório entre 5 e 20, que representa a `qtdProdutos` a ser gerado para a categoria `i`;
    8. Criar um loop interno para repetir `qtdProdutos`:
        ```JavaScript
        while (vControle < qtdProdutos);

    9. Gerar um nº aleatório entre (`i` * 6) e (`i` + 1) * 6, pegar um nome em uma `posicaoAleatoria` de `produtosAleatorios`;
    10. Criar um objeto `produtoGerado` com:
        * id;
        * nome: `produtosAleatorios[posicaoAleatoria]`;
        * categoria: `categorias[i]`;
        * preco: nº aleatório entre 500 e 5000;

    11. Adicionar o `produtoGerado`ao final do vetor `listaProdutosTemp
    12. Retornar o vetor `listaProdutosTemp`;

## Regras de Negócio

* Os preços dos produtos devem ser superiores a R$ 50,00
* Os Produtos devem ser de três categorias de tecnologia.