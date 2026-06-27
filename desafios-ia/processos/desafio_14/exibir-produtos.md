# Processo de Exibição dos Produtos

## Objetivo

Exibir o novo vetor de produtos formatada no HTML, contendo o preco em dolar  e Real

## Início

O site é carregado.

## Entradas e Saídas

**Saídas:** Grade com os produtos no html;

## Fluxo

1. Referenciar o elemento HTML de saída (`outProdutos`);
2. Criar uma função `exibirProdutos(lista)`;
    2.1 limpar o html `outProdutos`;

    DECISÃO:
    Verificar se a `lista === 0`:

    SIM:
    Montar parágrafo com a mensagem: "Nenhum Produto a ser Listado";

    NÃO:
    2.2 Percorre o vetor `lista` montando um elemento html (`cartaoProduto`) para cada objeto;
    2.3 Adicionar o `cartaoProduto` a `outProdutos`;
    
3. Chamar a função `exibirProdutos()` passando o vetor a ser exibido;