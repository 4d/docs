---
id: boolean
title: Booliano
---

Um campo booleano, variável ou expressão pode ser VERDADEIRO ou FALSO.

## Funções booleanas

4D fornece as funções booleanas `True`, `False`, e `Not` no tema dedicado **Boolean** . Para obter mais informações, consulte as descrições desses comandos

### Exemplo

Esse exemplo define uma variável booleana com base no valor de um botão. Retorna verdadeiro em myBoolean se o botão myButton foi clicado e falso se o botão não foi clicado. Quando um botão é clicado, a variável do botão é definida como 1.

```4d
 If(myButton=1) //Se apertou o botão
    myBoolean:=True //myBoolean toma o valor True
 Else //Se o botão não for apertado
    myBoolean:=False //myBoolean toma o valor False
 End if
```

O exemplo anterior pode ser simplificado numa só linha.

```4d
myBoolean:=(myButton=1)
```

## Operação lógica

4D suporta dois operadores lógicos que trabalham com expressões booleanas: conjunção (AND) e disjunção inclusiva (OR). Uma lógica E retorna VERDADEIRA se ambas as expressões forem VERDADEIRAS. Uma lógica OU retorna VERDADEIRA se pelo menos uma das expressões for VERDADEIRA. O quadro seguinte mostra os operadores lógicos:

| Operação | Sintaxe                 | Retorna    | Expression                   | Valor |
| -------- | ----------------------- | ---------- | ---------------------------- | ----- |
| AND      | Boolean & Boolean       | Parâmetros | ("A" = "A") & (15 # 3)       | True  |
|          |                         |            | ("A" = "B") & (15 # 3)       | False |
|          |                         |            | ("A" = "B") & (15 = 3)       | False |
| OU       | Boolean  &#124; Boolean | Parâmetros | ("A" = "A") &#124; (15 # 3)  | True  |
|          |                         |            | ("A" = "B") &#124;  (15 # 3) | True  |
|          |                         |            | ("A" = "B") &#124;  (15 = 3) | False |

A tabela seguinte é a tabela da verdade para o operador lógico AND:

| Expr1 | Expr2 | Expr1 & Expr2 |
| ----- | ----- | ------------- |
| True  | True  | True          |
| True  | False | False         |
| False | True  | False         |
| False | False | False         |

A tabela seguinte é a tabela da verdade para o operador lógico OR:

| Expr1 | Expr2 | Expr1 &#124; Expr2 |
| ----- | ----- | ------------------ |
| True  | True  | True               |
| True  | False | True               |
| False | True  | True               |
| False | False | False              |

**Dica:** Se você precisa calcular a disjunção exclusiva entre Expr1 e Expr2, avalie:

```4d
 (Expr1|Expr2) & Not(Expr1 & Expr2)  
```

> Em contextos booleanos, a linguagem 4D também é compatível [operadores de curto-circuito](operators.md#short-circuit-operators) (`&&` e `||`) e o conceito [truthy and falsy](operators.md#truthy-and-falsy) . 