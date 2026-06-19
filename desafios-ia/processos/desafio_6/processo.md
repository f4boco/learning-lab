# Processo do site

## Objetivo

Receber um documento (cpf ou cnpj) de forma totalmente instável (ex: " 000.111.222-33 " ou "00.111.222/0001-33"), remover todos os espaços em branco, pontos, hífens e barras, deixando apenas os números e exibir a string puramente numérica resultante na tela.

## Início

O botão Formatar é clicado

## Entradas e Saídas

**Entradas:** Um Bloco de Texto, contendo um documento;
**Saídas:** Nº do documento, removido os caracteres não numéricos;

## Fluxo

1. Obter o conteúdo da entrada em uma variável `documento`;
2. Verificar se a `documento` não é vazio `""`;
3. Criar uma variável `documentoLimpo` e aramazenar o conteúdo de `documento` removendo todos os caracteres `".", "/", "-" e " "`;

DECISÃO:
4. Verificar se o `documentoLimpo` possui a quantidade de nºs de um cpf ou de um conj;

SIM:
Exibe o `documentoLimpo`;

NÃO:
Exibe a mensagem: "O valor digitado não corresonde a um documento."