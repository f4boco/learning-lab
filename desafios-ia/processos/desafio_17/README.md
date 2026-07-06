# 🤖 Desafio: Cálculo de Juros por Atraso

Contexto: Uma fintech precisa calcular o valor final de um boleto pago com atraso. A regra é: cada dia de atraso gera uma multa fixa de R$ 2,00.
O que fazer: Você recebeu os dados do boleto abaixo. Calcule a diferença em dias entre a `dataPagamento` e a `dataVencimento`. Em seguida, multiplique esses dias pelo valor da multa e exiba o valor total final que o cliente deve pagar (Valor original + Multa).
```JavaScript
const boleto = {
  valorOriginal: 150.00,
  dataVencimento: new Date("2026-06-25"),
  dataPagamento: new Date("2026-06-30")
};
```

---

## 🎯 Aprendizados Praticados
- Objetos;
- Date e Métodos Date;
- Funções;
- Condicional if;
- Math;

---

## 📝 Feedback da IA

> O algoritmo realiza com precisão o cálculo de dias de atraso e aplicação de multas financeiras através da manipulação de milissegundos com o objeto `Date`. Uma análise sênior do código identificou oportunidades de refatoração focadas em imutabilidade — evitando que funções secundárias alterem as propriedades do objeto global original através de efeitos colaterais. O projeto demonstra bom domínio de lógica modular, precisão matemática no tratamento de tempo e boas práticas de validação de dados.
> 


## 🔮 Melhorias Futuras

* [ ] Remover a alteração do objeto global com a função. Trabalhar com uma cópia do objeto e evitar:
    ```JavaScript
    // zera as horas (evita erros na comparação)
    boleto.dataVencimento.setHours(0, 0, 0);
    boleto.dataPagamento.setHours(0, 0, 0);
    ```

---

## 👨‍💻 Autor

Desenvolvido por **Fabiano O.**