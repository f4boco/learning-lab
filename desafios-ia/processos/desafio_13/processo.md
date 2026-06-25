# Processo do site

## Objetivo

Analisar uma mensagem de texto informal descrevendo o orçamento de um serviço (ex: "O motor custa R$ 450 e a mão de obra ficou por R$ 120") e extrair todos os valores numéricos que vêm logo após o símbolo R$ .
Resultado: Exiba os valores financeiros encontrados na tela.

## Início

O botão `Exibir Valores Monetários` é clicado

## Entradas e Saídas

**Entradas:** Um texto;
**Saídas:** Valores financeiros existentes na mensagem;

## Fluxo

1. Referenciar os elementos html de entradas e saídas de dados;
2. Criar o ouvinte de eventos do formulário;
3. Obter o `texto` do elemento de entrada do html;
4. Validar a entrada:
    * O texto não é composto apenas com espaços em branco;

5. Criar uma função `buscarMonetario(texto)`;
    5.1 Criar uma regex para localizar padrões que estão, obrigatoriamente, seguidos de "R$" ou "R$ ";
    5.2 Criar um vetor com as ocorrências de `valoresMonetarios`, usando a função de busca na string;
    DECISÃO:
    Verificar se `valoresMonetarios === null`;

    SIM:
    return um vetor vazio;

    NÃO:
    5.3 Retornar o `valoresMonetários`;

6. receber em `valoresMonetarios` o retorno de `buscarMonetario()`;
7. Criar uma função `exibirBusca(vetorBusca)`
    DECISÃO:
    Verificar se `valoresMonetarios` é um vetor vazio;

    SIM:
    Exibir no HTML: "Não há valores Monetários no texto;

    NÃO:
    7.1 Adicionar R$ antes de cada `valorMonetario`;
    7.2 Exibir os valores de`valoresMonetarios`;

8. Chamar a função `exibirBusca()` passando o `valoresMonetarios` como parâmetro;