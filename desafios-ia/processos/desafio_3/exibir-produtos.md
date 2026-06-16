# CExibir Produtos

## Objetivo

CExibir os objetos do vetor listaProdutos na tela

## Início

A função `exibirProdutos()` é chamada

## Fluxo

1. Criar uma function `exibirLista(vetor)`, que recebe um vetor com os produtos a serem exibidos;
2. Limpar o HTML de saída;
3. Criar um loop para percorrer o `vetor`;
    ```JavaScript
    for (produto of vetor)
    ```

4. A cada repetição, mMontar um Elemento HTML com as informações do produto;
5. Adicionar (`.appendChild()`) esse elemento ao elemento HTML;

## Regras de Negócio

* Se nenhum vetor for passado para a função `exibirLista()`, deve ser, por padrão o vetor `listaProdutos`: `exibirProdutos(vetor = listaProdutos)`;