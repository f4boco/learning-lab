# Criar Vetor com os Produtos

## Objetivo

Cria um vetor com um nº aleatório de produtos

## Início

O site é carregado

## Fluxo

1. Criar um vetor global `listaProdutos`, que recebe o vetor retornado da função `gerarProdutos()`;
2. Criar uma função `gerarProdutos()`;
3. Criar um vetor `listaProdutosTemp`, que será uma lista temporária para adicionar os produtos gerados;
4. Criar um vetor `categorias` com nome de 5 categorias;
5. Criar um vetor `baseProdutos` que possui 15 nomes de produtos;
6. Criar um loop, que repetirá um nº aleatório (máximo 100) de vezes, para definir a quantidade de produtos:
    ```JavaScript
    while (vControle < numAleatorio)
    ```
7. A cada repetição: 
    * Gerar um nº aleatório (`indexCategoria`) entre 0 e `categorias.length`, que definirá a categoria de acordo com o index do vetor `categorias`;
    * Gerar um nº aleatório (`indexProdutos`) entre 0 e `baseProdutos.length`, que definirá o nome do produto de acordo com o index do vetor `baseProdutos`;
8. Criar um objeto `produtoGerado` com:
    * id;
    * nome: `baseProdutos[indexProdutos]`;
    * categoria: `categorias[indexCategorias]`;
    * preco: nº aleatório entre 100 e 5000;

10. Adicionar o `produtoGerado`ao final do vetor `listaProdutosTemp`;
11. Retornar o vetor `listaProdutosTemp`;

## Regras de Negócio

* Os preços dos produtos devem ser superiores a R$ 50,00
* Os Produtos devem ser de três categorias de tecnologia.