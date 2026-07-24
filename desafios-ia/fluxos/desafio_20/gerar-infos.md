# Função gerarInfos()

## Objetivo

Gerar um objeto contendo contendo as informações de reposição.

## Fluxo

```text
╭─────────────────────────────────────────╮
│ gerarInfos(vetorProdutos, vetorOriginal)│
╰─────────────────────────────────────────╯
                │
                │
                ▼
┌──────────────────────────┐
│criar const infos = {     │
│ quantidadeProdutosRepo,  │
│ nomesProdutosRepo: [],   │
│ porcentagemProdutosRepo  │
│}                         │
└──────────────────────────┘
            │
            │
            ▼
┌──────────────────────┐
│return infos          │
└──────────────────────┘
```