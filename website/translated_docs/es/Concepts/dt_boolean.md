---
id: booleano
title: Booleano
---

Un campo, variable o expresión booleana puede ser TRUE o FALSE.

## Funciones booleanas

4D ofrece las funciones booleanas `True`, `False` y `Not` en el tema dedicado **Booleanos**. Para más información, consulte las descripciones de estos comandos

### Ejemplo

Este ejemplo define una variable booleana basada en el valor de un botón. Devuelve True en myBoolean si el botón myButton fue presionado y False si el botón no fue presionado. Cuando se hace clic en un botón, la variable del botón toma el valor 1.

```4d
 If(myButton=1) //Si se ha presionado el botón
    myBoolean:=True //myBoolean toma el valor True
 Else //Si el botón no fue pulsado
    myBoolean:=False //myBoolean toma el valor False
 End if
```

The previous example can be simplified into one line.

```4d
myBoolean:=(myButton=1)
```

## Logical operators

4D supports two logical operators that work on Boolean expressions: conjunction (AND) and inclusive disjunction (OR). A logical AND returns TRUE if both expressions are TRUE. A logical OR returns TRUE if at least one of the expressions is TRUE. The following table shows the logical operators:

| Operation | Syntax                    | Returns  | Expression                   | Value |
| --------- | ------------------------- | -------- | ---------------------------- | ----- |
| AND       | Boolean & Boolean         | Booleano | ("A" = "A") & (15 # 3)       | True  |
|           |                           |          | ("A" = "B") & (15 # 3)       | False |
|           |                           |          | ("A" = "B") & (15 = 3)       | False |
| OR        | Booleano  &#124; Booleano | Booleano | ("A" = "A") &#124; (15 # 3)  | True  |
|           |                           |          | ("A" = "B") &#124;  (15 # 3) | True  |
|           |                           |          | ("A" = "B") &#124;  (15 = 3) | False |

The following is the truth table for the AND logical operator:

| Expr1 | Expr2 | Expr1 & Expr2 |
| ----- | ----- | ------------- |
| True  | True  | True          |
| True  | False | False         |
| False | True  | False         |
| False | False | False         |

The following is the truth table for the OR logical operator:

| Expr1 | Expr2 | Expr1 &#124; Expr2 |
| ----- | ----- | ------------------ |
| True  | True  | True               |
| True  | False | True               |
| False | True  | True               |
| False | False | False              |

**Tip:** If you need to calculate the exclusive disjunction between Expr1 and Expr2, evaluate:

```4d
 (Expr1|Expr2) & Not(Expr1 & Expr2)  
```
