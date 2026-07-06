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
    2.1 Zerar as horas das Datas;  
    2.2 Obter a `qtdMilissegVenc` de milissegundos de `boleto.dataVencimento`;  
    2.3 Obter a `qtdMilissegPag` de milissegundos de `boleto.dataPagamento`;  
    2.4 Obter a `diasAtraso` realizando (`qtdMilissegPag` - `qtdMilissegVenc`) / 86400000;  
    2.5 Retornar `diasAtraso`;  

3. Criar uma função `calcularValor(multa)`:   
    3.2 Retnornar `boleto.valorOriginal + multa`;   

4. Criar uma função `calcularMulta(qtdDias)`:  
    DECISÃO:  
    4.1 Verificar se `diasAtraso > 0`;  

    SIM:  
    4.2 Retornar o `valorMulta` com `diasAtraso * 2`;  

    NÃO:  
    4.3 Retornar 0.00;

5. Criar um bloco de exibição:  
    5.1 Referenciar o elemento html de saída;  
    2.2 Obter `diasAtraso = calcularDias()`;  
    2.3 Obter `multa = calcularMulta(diasAtraso)`;  
    5.4 Exibir no elemento html:  
        5.4.1 "Valor Original: R$ " + `boleto.valorOriginal`;  
        DECISÃO:  
        5.4.2 Verificar se `diasAtraso > 0`;  
            SIM:  
            5.4.3 "Multa P/Atraso: R$ " + `multa`;  
        5.4.4 "Valor Final: R$ " + `calcularValor(multa)`;  