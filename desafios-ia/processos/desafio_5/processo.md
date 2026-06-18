# Processo do site

## Objetivo

Receber um bloco de texto contendo vários endereços de e-mail misturados e extrair apenas os e-mails que pertencem ao domínio corporativo da empresa (@empresa.com.br). Por fim, exibir a lista de e-mails corporativos encontrados na tela

## Início

O botão Filtrar é clicado

## Entradas e Saídas

**Entradas:** Um Bloco de Texto, contendo um lista de E-Mails;
**Saídas:** Lista contendo apenas os e-mails corporativos;

## Fluxo

1. Obter o conteúdo da entrada;
2. Verificar se a entrada é válida;
    * Texto separado por "," e != de vazio;
3. Criar a function `buscarEmails()`;
    3.1 Separar o bloco de texto em um vetor `emails` usando o separador ",";
    3.2 Criar um vetor `emailsFiltrados`para receber o conteúdo dos índices de `emails` que possuem o padrão @empresa.com.br;
    3.3 Retornar `emailsFiltrados`;

4. Receber o retorno de `buscarEmails()` em uma variável;
DECISÃO:
Verificar se o retorno de `buscarEmails()` é false/null;

SIM:
Exibir a mensagem: "Não há e-mails corporativos na lista;

NÃO:
Exibir a lista de E-Mails corporativos;

## Regras de negócio
* O bloco e-mails deve seguir o padrão CSV (separado por "," ou ", ");