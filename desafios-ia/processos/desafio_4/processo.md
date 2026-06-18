# Processo do site

## Objetivo

Receber uma um bloco de texto e extair os códigos de ratreamento com o padrão BR123456789X.

## Início

O botão Reclamar é clicado

## Entradas e Saídas

**Entradas:** Um Bloco de Texto, contendo o(s) código(s) de rastreamento;
**Saídas:** Mensagem: "A analisar o Ststus do(s) pacote(s): + Códigos de rastreamento extraídos do texto;

## Fluxo

1. Obter o texto digitado pelo usuário;
2. Verificar se o texto é válido
3. Criar uma função `extrairCódigos()` para extraír o(s) código(s) de rastreamento;
4. Receber o retorno da `extrairCódigos()`;
DECISÃO:
Verificar se o retorno é false;

SIM:
Mostrar uma mensagem informando que não foram encontrados códigos de rastreamento no relato;

NÃO:
Mostrar uma mensagem: Estamos analisando o status dos pacotes: + códigos retornados;

## Regras de negócio
* O texto digitado pelo usuário deve ter entre 12 e 200 caracteres;