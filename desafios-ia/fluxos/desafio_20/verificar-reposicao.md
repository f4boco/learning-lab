# Função verificarReposicao()

## Objetivo

Verifcar quantos produtos precisam de reposição e os nomes

## Fluxo

```text
╭──────────────────────────────────────╮
│verificarReposicao(vetorProdutos, fn) │
╰──────────────────────────────────────╯
                │
                │
                ▼
┌──────────────────────────┐
│criar const produtosRep = │
│vetorProdutos.estoque <=  │
│vetorProdutos.estoqueMin  │
└──────────────────────────┘
            │
            │
            ▼
┌──────────────────────┐
│return fn(produtosRep)│
└──────────────────────┘
```