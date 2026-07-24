# Função gerarProdutos()

## Objetivo

Criar um vetor de objetos contendo pelo menos 8 produtos. Cada produto possuindo nome, estoque e estoqueMinimo.

## Fluxo

```text
╭──────────────────╮
│  gerarProdutos() │
╰──────────────────╯
        │
        │
        ▼
┌──────────────────────────┐
│criar const prdutos = []; │
│gerar nº aleatório (8-15);│
└──────────────────────────┘
            │
            │
            ▼
    ┌────────────────────┐
    │ i < nº Aleatório ? │
    └───┬──────────────┬─┘
      Sim              Não
       │                │
       ▼                ▼
┌──────────────┐    ┌──────────┐
│criar objeto  │    │ return   │
│prodTemp {}   │    │ produtos │ 
│              │    └──────────┘ 
│produtos.push(│
│prodTemp)     │        
└──────┬───────┘
       │
       │
       └──────────────► (volta para "Condição?")

```