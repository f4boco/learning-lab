# Processo do site

## Objetivo

Receber o texto de uma publicação de rede social enviada pelo usuário, analisar o texto, localizar todas as palavras que começam com o caractere # (hashtags) e exibi-las em uma lista na tela.

## Início

O botão `Extrair #` é clicado

## Entradas e Saídas

**Entradas:** Um Bloco de Texto;
**Saídas:** Hashtags extraídas do texto;

## Fluxo

1. Referenciar os elementos html de entradas e saídas de dados;
2. Criar o ouvinte de eventos do formulário;
3. Obter o `texto` da publicação (conteúdo do elemento html de entrada);

DECISÃO:
4. Verifica se `texto == "" || texto.length < 1`;

SIM:
Solicitar uma entrada válida e retornar;

NÃO:
5. Criar uma função `buscarPadrao()`, passando com parâmetro o `texto` e uma string com o `padraoRegex` buscado:
    5.1 Criar uma `regex` com o `padraoRegex`;
    5.2 Retornar as ocorrências da `regex` no `texto`;

6. Criar uma variável `hastags` com o retorno de `buscarPadrao()`;

DECISÃO:
7. Verificar se `hastags.length == 0`;

SIM:
Exibir a mensagem: "Não há hastags na publicação.";

NÃO:
8. Exibir `hastags`;