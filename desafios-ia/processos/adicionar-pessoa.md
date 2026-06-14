# Adicionar Pessoa na Fila

## Objetivo

Receber os dados digitados pelo usuário e colocar o paciente na lista de espera, caso já não esteja

## Início

O site é carregado

## Entradas

* Nome Completo*
* CPF*
* Telefone
* isPreferencial

## Fluxo

1. O usuário preenche o formulário
2. O usuário clica em "Adicionar"
3. O sistema valida os campos

DECISÃO:
* O Nome está completo?
* O CPF é Válido?
* Algum telefone foi digitado?

SIM:
    DECISÃO:
    O sistema verifica se existem pessoas na lista de espera
    
    SIM:
        DECISÃO:
        O Sistema verifica se o CPF já está no vetor

        SIM:
        Exibe a mensagem: "Esta pessoa já está na fila de espera"
        FIM.
            
        NÃO:
        4. EXECUTAR: Adicionar Pessoa
        FIM.
    
    NÃO:
    4. EXECUTAR: Adicionar Pessoa
    FIM.
   
NÃO:
Exibe a Mensagem de "Entrada Inválida"
FIM.  

## SUBPROCESSOS
* Adicionar Pessoa
    1. O sistema cria o objeto pessoa com:
    - ID
    - Nome completo
    - CPF
    - Telefone
    - isPreferencial
    - Senha

    DECISÃO:
    O sistema verifica se a pessoa é preferencial

    SIM:
        2. O sistema adiciona a pessoa no início do vetor.
    
    NÃO:
        2. O sistema adiciona a pessoa no final do Vetor.
    
    3. Exibe a Senha.
    4. Retorna ao fluxo principal. 

## Saídas

* Senha da Pessoa

## Regras de Negócio

* O nome completo e o CPF é obrigatório.
* CPF deve ser único.
* O telefone é obrigatório