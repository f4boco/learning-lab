# Processo do Site

## Objetivo

Calcular a diferença em dias entre a `dataPagamento` e a `dataVencimento`. Em seguida, multiplicar esses dias pelo valor da multa e exibir o valor total final que o cliente deve pagar (Valor original + Multa).

## Início

O site é carregado

## Fluxo

1. Criar o objeto global `boleto` global:  
    ```JavaScript
    const boleto = {
    valorOriginal: 150.00,
    dataVencimento: new Date("2026-06-25"),
    dataPagamento: new Date("2026-06-30")
    };
    ```

2. Criar uma função `calcularDias()`:  
    2.1 Obter a `qtdMilissegVenc` de milissegundos de `boleto.dataVencimento`;  
    2.2 Obter a `qtdMilissegPag` de milissegundos de `boleto.dataPagamento`;  
    2.3 Obter a `diasAtraso` realizando (`qtdMilissegPag` - `qtdMilissegVenc`) / 86400000;  
    2.4 Retornar `diasAtraso`;  

3. Criar uma função `calcularValor(diasAtraso)`:  
    DECISÃO:  
    3.1 Verificar se `diasAtraso > 0`;  

    SIM:  
    3.2 Calcular o `valorMulta` com `diasAtraso * 2`;  
    3.3 Retnornar `boleto.valorOriginal + valorMulta`;  

    NÃO:  
    3.4 Retornar `valorMulta`;  

4. Criar um bloco de exibição:  
    4.1 Referenciar o elemento html de saída;  
    4.2 Exibir no elemento html `calcularValor(calcularDias())`;  