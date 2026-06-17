# Criar Filtro de Produtos

## Objetivo

Cria filtro onde o usuário pode definir a categoria de Produtos a ser listado e o valor mínimo

## Início

O botão Filtrar é clicado

## Fluxo

1. Obeter os valores dos campos de entrada;
2. Criar uma função `filtarProdutos()`;
3. Criar um vetor `produtosFiltrados` para receber os elementos do vetor `listaProdutos` que atendem ao filtro, com o uso de *filter()*:
5. Chamar a função `exibirProdutos` passando o vetor `produtosFiltrados` como parâmetro.

## Regras de Negócio

* O valor mínimo deve ser >= 0 e deve ser um number