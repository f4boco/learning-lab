# Processo de Filtrar Produtos Vencidos

## Objetivo

Criar um novo vetor de objetos com os produtos cuja dataValidade seja anterior à data atual

## Início

O Botão `listar Vencidos` é clicado.

## Fluxo

1. Criar uma função `filtrarVencidos(vetor)`:
    1.1 Criar um objeto `dataAtual = new Date()`
    1.2 Retornar um novo veto, contendo apenas os produtos que `dataVenc < dataAtual`;