# Processo de Conversão de Dolar para Real

## Objetivo

Processar o vetor de produtos gerado e gerar um novo vetor de objetos. Esse novo vetor deve conter o mesmo nome dos produtos a mesma propriedade precoDolar, mas deve ser adicionada uma propriedade precoReal, contendo o valor convertido para Reais (considere a taxa de câmbio de $R\$ 5.50$ por dólar).

## Início

O site é carregado.

## Fluxo

1. Criar uma função `converterReal(vetor)`:
    1.1 Criar um vetor local `listaConvertida`;
    1.2 Criar um `forEach` para o `vetor`;
        1.2.1 Para cada objeto de `vetor` criar um novo objeto `produtoConvertido` com as mesmas propriedades. Mas com uma propriedade extra: `precoReal`;
        1.2.2 Adicionar `produtoConvertido` ao final de `listaConvertida`;
    1.3 Retornar `listaConvertida`;
2. Criar um vetor global `listaProdutosReal` que recebe `converterReal()`;