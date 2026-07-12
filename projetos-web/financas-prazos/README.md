# Finanças & Prazos

Site de controle de movimentações financeiras e cálculo de prazos críticos.

## 📋 Sobre

Este site permite que os usuários registrem suas transações financeiras e acompanhem seus dados por meio de um dashboard interativo, oferecendo uma visão consolidada das informações e de alertas sobre prazos e eventos críticos.

## 🚀 Tecnologias Utilizadas

* HTML
* CSS
* JavaScript

## ✨ Funcionalidades

* Registro de movimentações financeiras;
* Alerta de prazos;
* Dashboard Informativo;

## 📂 Estrutura do Projeto

```text
controle-financeiro/
│
├── index.html
│
├── css/
│   └── estilo.css
│
├── js/
│   └── script.js
│
└── README.md
```

## 📝 Feedback da IA

> O projeto apresenta boa organização, com responsabilidades separadas em funções específicas e uso consistente de recursos modernos do JavaScript, como filter(), reduce(), findIndex() e forEach(). A modelagem dos dados e a estrutura geral favorecem a legibilidade e a manutenção. Como melhorias, recomenda-se substituir manipuladores onclick inline por addEventListener(), reduzir o uso de innerHTML com dados fornecidos pelo usuário para evitar riscos de XSS, eliminar buscas desnecessárias dentro de laços (findIndex() em cada iteração) e dividir funções que concentram múltiplas responsabilidades. Essas mudanças aumentam a escalabilidade, a segurança e a aderência às práticas utilizadas em projetos profissionais.
> 

## 🔮 Melhorias Futuras

* [ ] Habilitar os botões de filtro da `tabela-transacoes`;
* [ ] Substituir manipuladores onclick inline por addEventListener() e eliminar buscas desnecessárias dentro de laços (findIndex() em cada iteração).  
    Foco principal nas linhas 127 e 128:  
    ```JavaScript
    <button class="botao-transacao deletar" onclick="deletarTransacao(${identificarIndex(transacao.id, vetorTransacoes)})">Excluir</button>
    <button class="botao-transacao ok" onclick="atualizarStatus(${identificarIndex(transacao.id, vetorTransacoes)})" title="Marcar como ${transacao.status ? 'Não' : ''} ${transacao.tipo === 'entrada'
    ```

## 🖥️ Como Executar

Abra o arquivo principal no navegador ou execute o comando correspondente ao projeto.

## 👨‍💻 Autor

Desenvolvido por **Fabiano O.**

GitHub: https://github.com/Fabiano-Olivr

## 📄 Licença

Este projeto **Está em Desenvolvimento** para fins de estudo e prática.