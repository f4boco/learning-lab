# Criar Filtro de Produtos

## Objetivo

Cria filtro onde o usuário pode definir a categoria de Produtos a ser listado e o valor mínimo

## Início

O botão Filtrar é clicado

## Fluxo

1. Criar uma função `filtarProdutos(valorMinino = 0, categoria: todas)`;
2. Criar um vetor `produtosFiltrados` para receber os elementos do vetor `listaProdutos` que atendem ao filtro.
DECISÃO:
3. Verificar se `categoria == "todas"`;
SIM:
4. Criar um laço para percorrer o vetor `listaProdutos` e verificar quais elementos o `preco >= valorMinimo`:
    ```JavaScript
    for (const produto of listaProdutos) {
        if (produto.preco >= valorMinimo) 
    }
    ```
5. Adiciona os elementos que atendem a verificação ao vetor `produtosFiltrados`;
NÃO:


## Regras de Negócio

* 