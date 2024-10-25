---
id: boolean
title: Boolean
---

Un campo, variable o expresión booleana puede ser TRUE o FALSE.

## Funciones booleanas

4D ofrece las funciones booleanas `True`, `False` y `Not` en el tema dedicado **Booleanos**. Para más información, consulte las descripciones de estos comandos.

### Ejemplo

Este ejemplo define una variable booleana basada en el valor de un botón. Devuelve True en myBoolean si el botón myButton fue presionado y False si el botón no fue presionado. Cuando se hace clic en un botón, la variable del botón toma el valor 1.

```4d
 If(myButton=1) //Si se ha presionado el botón
    myBoolean:=True //myBoolean toma el valor True
 Else //Si el botón no fue pulsado
    myBoolean:=False //myBoolean toma el valor False
 End if
```

El ejemplo anterior puede simplificarse en una línea.

```4d
myBoolean:=(myButton=1)
```

## Operadores lógicos

4D soporta dos operadores lógicos que trabajan sobre expresiones booleanas: la conjunción (AND) y la disyunción inclusiva (OR). Un AND lógico devuelve TRUE si ambas expresiones son TRUE. Un OR lógico devuelve TRUE si al menos una de las expresiones es TRUE. La siguiente tabla muestra los operadores lógicos:

| Operación | Sintaxis                                | Devuelve | Expression                                                                       | Valor |
| --------- | --------------------------------------- | -------- | -------------------------------------------------------------------------------- | ----- |
| AND       | Booleano & Booleano | Boolean  | ("A" = "A") & (15 # 3) | True  |
|           |                                         |          | ("A" = "B") & (15 # 3) | False |
|           |                                         |          | ("A" = "B") & (15 = 3) | False |
| O         | Booleano  \| Booleano                   | Boolean  | ("A" = "A") \| (15 # 3)                    | True  |
|           |                                         |          | ("A" = "B") \|  (15 # 3)                   | True  |
|           |                                         |          | ("A" = "B") \|  (15 = 3)                   | False |

La siguiente es la tabla de verdad del operador lógico AND:

| Expr1 | Expr2 | Expr1 & Expr2 |
| ----- | ----- | --------------------------------- |
| True  | True  | True                              |
| True  | False | False                             |
| False | True  | False                             |
| False | False | False                             |

La siguiente es la tabla de verdad del operador lógico OR:

| Expr1 | Expr2 | Expr1 \| Expr2 |
| ----- | ----- | -------------- |
| True  | True  | True           |
| True  | False | True           |
| False | True  | True           |
| False | False | False          |

**Consejo:** si necesita calcular la conjunción exclusiva entre Expr1 y Expr2, escriba:

```4d
 (Expr1|Expr2) & Not(Expr1 & Expr2)  
```

> En contextos booleanos, el lenguaje 4D también soporta los operadores [cortocircuitos](operators.md#short-circuit-operators) (`&&` y `||`) y el concepto [truthy y falsy](operators.md#truthy-and-falsy).
