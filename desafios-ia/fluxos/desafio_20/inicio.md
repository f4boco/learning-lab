# Início do Site

## Objetivo

Criar um vetor de objetos contendo pelo menos 8 produtos. Cada produto possuindo nome, estoque e estoqueMinimo. Depois, exibir quantos produtos precisam de reposição, os nomes desses produtos e a porcentagem de produtos que estão abaixo do estoque mínimo.

## Fluxo

```text
╭──────────────╮
│   INÍCIO     │
╰──────────────╯
    │
    │
    ▼
┌─────────────────────────────────────┐
│ const produtos = gerarProdutos();   │
└─────────────────────────────────────┘
    │
    │
    ▼
┌─────────────────────────────────────────┐
│ const infosEstoque =                    │
│ verificarReposicao(produtos, gerarInfos)│
└─────────────────────────────────────────┘
    │
    │
    ▼
┌─────────────────────────────────────────┐
│ exibir Informações com delay de 3s      │
└─────────────────────────────────────────┘
```

## Regras de Negócio

* 