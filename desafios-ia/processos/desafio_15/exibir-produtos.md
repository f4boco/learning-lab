# Processo de Exibição dos Produtos

## Objetivo

Exibir a lista de produtos na tela, contendo o nome, preco e data de validade.

## Início

O site é carregado

## Fluxo

1. Referenciar os elementos HTML de saída;
2. Criar uma função `listarProdutos(lista)`:
    2.1 Limpar o HTML de Saída

    DECISÃO:
    2.2. Verificar se `lista === 0`;
    
    SIM:
    Exibir uma mensagem: "Nenhum produto para ser listado";

    NÃO:
    2.3. Limpar o elemento HTML de saída;
    2.4. Para cada objeto da lista (`forEach`):
        2.4.1 Criar um novo elemento html para ele;
        2.4.2 Montar o HTML e CSS do objeto
        2.4.3 Colocar o elemento criado dentro do elemento de saída;