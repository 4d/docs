---
id: boolean
title: Boolean
---

A boolean field, variable or expression can be either TRUE or FALSE.

## Boolean functions

4D provides the Boolean functions `True`, `False`, and `Not` in the dedicated **Boolean** theme. For more information, see the descriptions of these commands.

### Example

This example sets a Boolean variable based on the value of a button. It returns True in myBoolean if the myButton button was clicked and False if the button was not clicked. When a button is clicked, the button variable is set to 1.

```4d
 If(myButton=1) //If the button was clicked
    myBoolean:=True //myBoolean is set to True
 Else //If the button was not clicked,
    myBoolean:=False //myBoolean is set to False
 End if
```

The previous example can be simplified into one line.

```4d
myBoolean:=(myButton=1)
```

## Logical operators

4D supports two logical operators that work on Boolean expressions: conjunction (AND) and inclusive disjunction (OR). A logical AND returns TRUE if both expressions are TRUE. A logical OR returns TRUE if at least one of the expressions is TRUE. The following table shows the logical operators:

|Operation	|Syntax	|Returns	|Expression	|Value|
|---|---|---|---|---|
|AND|Boolean & Boolean	|Boolean	|("A" = "A") & (15 # 3)	|True|
||||("A" = "B") & (15 # 3)	|False|
||||("A" = "B") & (15 = 3)	|False|
|OR	|Boolean  &#124; Boolean	|Boolean	|("A" = "A") &#124; (15 # 3)	|True|
||||("A" = "B") &#124;  (15 # 3)	|True|
||||("A" = "B") &#124;  (15 = 3)	|False|

The following is the truth table for the AND logical operator:

|Expr1	|Expr2	|Expr1 & Expr2|  
|---|---|---|
|True	|True	|True|
|True	|False	|False|
|False	|True	|False|
|False	|False	|False|

The following is the truth table for the OR logical operator:

|Expr1	|Expr2	|Expr1 &#124; Expr2|
|---|---|---|
|True	|True	|True|
|True	|False	|True|
|False	|True	|True|
|False	|False	|False|

**Tip:** If you need to calculate the exclusive disjunction between Expr1 and Expr2, evaluate:

```4d
 (Expr1|Expr2) & Not(Expr1 & Expr2)  
```

> In boolean contexts, the 4D language also supports [short-circuit operators](operators.md#short-circuit-operators) (`&&` and `||`) and the [truthy and falsy](operators.md#truthy-and-falsy) concept. 