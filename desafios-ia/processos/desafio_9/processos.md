# Processo do site

## Objetivo

Identificar se o link começa com http:// ou https:// e remover essa parte do texto, mantendo apenas o restante do endereço e exibir a URL limpa na tela (ex: www.google.com).

## Início

O botão `Remover Protocolo` é clicado

## Entradas e Saídas

**Entradas:** Um link contendo um Protocolo http:// ou https://
**Saídas:** Link sem o Protocolo

## Fluxo

1. Referenciar os elementos html de entradas e saídas de dados;
2. Criar o ouvinte de eventos do formulário;
3. Obter o `link` (conteúdo do elemento html de entrada) e remover possíveis espaços dos estremos `.trim()`;

DECISÃO:
4. Verificar se `link === ""`;

SIM:
Exibir a Mensagem: "Cole/Copie um Link completo";

5. Criar uma função `verificarLink(link)` para verificar se o texto tem formato de link;
    5.1 Criar uma `regEx` com o padrão de link web;
    5.2 Retornar o `true or false` de acordo com o resultado de `regEx.test(link)`;

DECISÃO:
6. Verificar o retorno de `verificarLink(link)`

false:
Exibir a mensagem: "O texto dogitado não é um Link Válido";

true:
7. Cria a função `removerProtocolo(link)` para remover o http;
    7.1 Criar uma `regEx` com o padrão dos protocolos;
    7.2 Retornar a string contendo o `link` com protocolo removido;

8. Receber em uma variável `linkLimpo` o retorno de `removerProtocolo(link)`;
9. Mostrar `linkLimpo.toLowerCase()`;

