---
id: operators
title: Operadores
---

Um operador é um símbolo ou um grupo de símbolos que é utilizado para verificar, modificar ou combinar valores. Já está familiarizado com muitos operadores. For example, `1 + 2` uses the addition (or plus sign) operator to add two numbers together, and the result is 3. Comparison operators, like = or >, let you compare two or more values.

A linguagem 4D suporta os operadores que talvez já conheça de outras linguagens como C ou JavaScript. However, the assignment operator is `:=` to prevent it from being mistakenly used when the equal to operator (`=`) is intended. [Basic operators](#basic-operators) such as arithmetic operators (+, -, \*, /, %...) and comparison operators (=, >, >=...) can be used with numbers, but also with boolean, text, date, time, pointer, or picture data types. Like JavaScript, the 4D language supports the concept of [truthy and falsy values](#truthy-and-falsy), which in use in [short-cicrcuit operators](#short-circuit-operators).

## Terminologia

The 4D language supports **binary** and **ternary** operators:

- binary operators operate on two targets (such as `2 + 3`) and appear in between their two targets.
- os operadores ternários operam em três objectivos. Like C, 4D has only one ternary operator, the [ternary conditional operator](#ternary-operator) (`a ? b : c`).

Os valores que os operadores afectam são os operandos. In the expression `1 + 2`, the + symbol is a binary operator and its two operands are the values 1 and 2.

## Operador de atribuição

The **assignment operator** (`a:=b`) initializes or updates the value of `a` with the value of `b`:

```4d
$myNumber:=3 //assigns 3 to MyNumber variable  
$myDate:=!2018/01/21! //assigns a date literal
$myLength:=Length("Acme") //assigns the result of the command (4) to $myLength
$col:=New collection //$col is initialized with an empty collection
```

> Do NOT confuse the assignment operator `:=` with the equality comparison operator `=`. A different assignment operator (and not `=`) was deliberately chosen to avoid issues and confusion which often occur with == or === in other programming languages. Esses erros são geralmente difíceis de reconhecer pelo compilador e geram problemas trabalhosos.

## Operadores básicos

Operator results depend on the **data types** they are applied to. 4D supports different operators on scalar data types. São descritos com os tipos de dados, nas secções seguintes:

- [**Logical operators**](dt_boolean.md#logical-operators) (on **boolean** expressions)
- [**Date operators**](dt_date.md#date-operators)
- [**Time operators**](dt_time.md#time-operators)
- [**Number operators**](dt_number.md#number-operators)
- [**Bitwise operators**](dt_number.md#bitwise-operators) (on **long integer** expressions)
- [**Picture operators**](dt_picture.md#picture-operators)
- [**Pointer operators**](dt_pointer.md#pointer-operators)
- [**String operators**](dt_string.md#string-operators)
- [**Null operators**](dt_null_undefined.md#null-operators)
- [**Undefined operators**](dt_null_undefined.md#undefined-operators)

## Operadores de atribuição compostos

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

4D provides **compound assignment operators** that combine assignment with another operation. Um exemplo é o operador de atribuição de adição (`+=`):

```4d
$a:=1 
$a+=2 // $a=3
```

São suportados os seguintes operadores de atribuição compostos:

| Operador      | Sintaxe            | Atribuições | Exemplo                                                                    |
| ------------- | ------------------ | ----------- | -------------------------------------------------------------------------- |
| Adição        | Text += Text       | Text        | `$t+=" World"  //$t:=$t+" World"`                                          |
|               | Number += Number   | Number      | `$n+=5 //$n:=$n+5`                                                         |
|               | Date += Number     | Date        | `$d+=5 //$d:=$d+5`                                                         |
|               | Time += Time       | Hora        | `$t1+=$t2 //$t1:=$t1+$t2`                                                  |
|               | Time += Number     | Number      | `$t1+=5 //$t1:=$t1+5`                                                      |
|               | Picture += Picture | Imagem      | `$p1+=$p2 //$p1:=$p1+$p2 (add $p2 to the right of $p1)`                    |
|               | Picture += Number  | Imagem      | `$p1+=5 //$p1:=$p1+5 (move $p1 horizontally 5 pixels to the right)`        |
| Subtração     | Number -= Number   | Number      | `$n-=5 //$n:=$n-5`                                                         |
|               | Date -= Number     | Date        | `$d-=5 //$d:=$d-5`                                                         |
|               | Time -= Time       | Hora        | `$t1-=$t2 //$t1:=$t1-$t2`                                                  |
|               | Time -= Number     | Number      | `$t1-=5 //$t1:=$t1-5`                                                      |
|               | Picture -= Number  | Imagem      | `$p1-=5 //$p1:=$p1-5 (mover horizontalmente $p1 5 pixels para a esquerda)` |
| Divisão       | Number /= Number   | Number      | `$n/=5 //$n:=$n/5`                                                         |
|               | Time /= Time       | Hora        | `$t1/=$t2 //$t1:=$t1/$t2`                                                  |
|               | Time /= Number     | Number      | `$t1/=5 //$t1:=$t1/5`                                                      |
|               | Picture /= Picture | Imagem      | `$p1/=$p2 //$p1:=$p1/$p2 (adicione $p2 ao fundo de $p1)`                   |
|               | Picture /= Number  | Imagem      | `$p1/=5 //$p1:=$p1/5 (mover $p1 verticalmente 5 pixels)`                   |
| Multiplicação | Text \*= Number    | Text        | `$t*="abc"  //$t:=$t*"abc"`                                                |
|               | Number \*= Number  | Number      | `$n*=5 //$n:=$n*5`                                                         |
|               | Time \*= Time      | Hora        | `$t1*=$t2 //$t1:=$t1*$t2`                                                  |
|               | Time \*= Number    | Number      | `$t1*=5 //$t1:=$t1*5`                                                      |
|               | Picture \*= Number | Imagem      | `$p1*=5 //$p1:=$p1*5 (redimensionar $p1 por 5)`                            |

These operators apply on any [assignable expressions](quick-tour.md#assignable-vs-non-assignable-expressions) (except pictures as object properties or collection elements).

The operation "source `operator` value" is not strictly equivalent to "source := source `operator` value" because the expression designating the source (variable, field, object property, collection element) is only evaluated once. For example, in such expression as `getPointer()->+=1` the `getPointer` method is called only once.

> [Character indexing in text](dt_string.md#character-reference-symbols) and [byte indexing in blob](dt_blob.md#accessing-a-scalar-blobs-bytes) do not support these operators.

#### Exemplos

```4d
// Addition
$x:=2
$x+=5 //$x=7

$t:="Hello" 
$t+=" World" //$t="Hello World" 

$d:=!2000-11-10!
$d+=10 //$d=!2000-11-20!

// Subtraction
$x1:=10
$x1-=5 //$x1=5

$d1:=!2000-11-10!
$d1-=10 // $d1=!2000-10-31!

// Division
$x3:=10
$x3/=2 // $x3=5


// Multiplication
$x2:=10
$x2*=5 // $x2=10

$t2:="Hello" 
$t2*=2 // $t2="HelloHello"

```

## Operadores curto-circuito

The **&&** and **||** operators are **short circuit operators**. Um operador de curto-circuito é aquele que não avalia necessariamente todos os seus operandos.

The difference with the single [**&** and **|** boolean operators](dt_boolean.md#logical-operators) is that the short-circuit operators **&&** and **||** don't return a boolean value. They evaluate expressions as [truthy or falsy](#truthy-and-falsy), then return one of the expressions.

### Operador em curto-circuito AND (&&)

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

A regra é a seguinte:

Given `Expr1 && Expr2`:

The short-circuit AND operator evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are [truthy](#truthy-and-falsy), the value of the last operand is returned.

The following table summarizes the different cases for the **&&** operator:

| Expr1  | Expr2  | Valor devolvido |
| ------ | ------ | --------------- |
| truthy | truthy | Expr2           |
| truthy | falsy  | Expr2           |
| falsy  | truthy | Expr1           |
| falsy  | falsy  | Expr1           |

#### Exemplo 1

```4d
var $v : Variant

$v:= "Hello" && "World" //"World"
$v:=False && 0 // False
$v:=0 && False // False
$v:=5 && !00-00-00! // 00/00/00
$v := 5 && 10 && "hello" //"hello"
```

#### Exemplo 2

Digamos que tem uma loja online e que alguns produtos têm uma taxa de imposto aplicada e outros não.

Para calcular o imposto, multiplica-se o preço pela taxa de imposto, que pode não ter sido especificada.

Portanto, pode escrever isto:

```4d
var $tax : Variant

$tax:=$item.taxRate && ($item.price*$item.taxRate)
```

`$tax` will be NULL if taxRate is NULL (or undefined), otherwise it will store the result of the calculation.

#### Exemplo 3

Os operadores de curto-circuito são úteis em provas como:

```4d
If(($myObject#Null) && ($myObject.value>10))
	//code
End if
```

Se $myObject for nulo, o segundo argumento não é executado e, por conseguinte, não é lançado qualquer erro.

### Operador em curto-circuito OR (||)

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

O operador || devolve o valor de um dos operandos especificados. A expressão é avaliada da esquerda para a direita e testada para uma possível avaliação de "curto-circuito" utilizando a seguinte regra:

Given `Expr1 || Expr2`:

If Expr1 is [truthy](#truthy-and-falsy), Expr2 is not evaluated and the calculation returns Expr1.

If Expr1 is [falsy](#truthy-and-falsy), the calculation returns Expr2.

The following table summarizes the different cases and the value returned for the **||** operator:

| Expr1  | Expr2  | Valor devolvido |
| ------ | ------ | --------------- |
| truthy | truthy | Expr1           |
| truthy | falsy  | Expr1           |
| falsy  | truthy | Expr2           |
| falsy  | falsy  | Expr2           |

#### Exemplo 1

Digamos que tem uma tabela chamada Employee. Alguns empregados introduziram um número de telefone e outros não. This means that `$emp.phone` could be NULL, and you cannot assign NULL to a Text variable. Mas pode escrever o seguinte:

```4d
var $phone : Text

$phone:=$emp.phone || "n/a"
```

In which case `$phone` will store either a phone number or the "n/a" string.

#### Exemplo 2

Given a table called Person with a _name_ field, as well as a _maiden name_ field for married women.

O exemplo seguinte verifica se existe um nome de solteira e armazena-o numa variável; caso contrário, armazena simplesmente o nome da pessoa:

```4d
var $name: Text

$name:=$person.maidenName || $person.name
```

### Precedência

The `&&` and `||` operators have the same precedence as the logical operators `&` and `|`, and are evaluated left to right.

This means that `a || b && c` is evaluated as `(a || b) && c`.

## Operador ternário

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

O operador condicional ternário permite-lhe escrever expressões condicionais de uma linha. For example, it can replace a full sequence of [If…Else](flow-control.md#ifelseend-if) statements.

Aceita três operandos na seguinte ordem:

- uma condição seguida de um ponto de interrogação (?)
- an expression to execute if the condition is [truthy](#truthy-and-falsy), followed by a colon (:)
- an expression to execute if the condition is [falsy](#truthy-and-falsy)

### Sintaxe

A sintaxe é a seguinte:

`condition ? exprIfTruthy : exprIfFalsy`

> Since the [token syntax](https://doc.4d.com/4Dv19/4D/19.5/Using-tokens-in-formulas.300-6136716.en.html) uses colons, we recommend inserting a space after the colon `:` or enclosing tokens using parentheses to avoid any conflicts.

### Exemplos

#### Um exemplo simple

```4d
var $age : Integer
var $beverage : Text

$age:=26
$beverage:=($age>=21) ? "Beer" : "Juice"

ALERT($beverage) // "Beer"
```

#### Tratamento de dados de uma tabela

Este exemplo armazena o nome completo de uma pessoa numa variável e trata do caso em que não foi especificado o primeiro nome ou o último nome:

```4d
var $fullname : Text

// If one of the names is missing, store the one that exists, otherwise store an empty string
$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""
```

## Truthy e falsy

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

As well as a type, each value also has an inherent Boolean value, generally known as either **truthy** or **falsy**.

> **truthy** and **falsy** values are only evaluated by [short-circuit](#short-circuit-operators) and [ternary](#ternary-operator) operators.

The following values are **falsy**:

- false
- Null
- indefinido
- Null object
- Null collection
- Null pointer
- Null picture
- Null date !00-00-00!
- "" - Empty strings
- [] - Colecções vazias
- {} - Objectos vazios

All other values are considered **truthy**, including:

- 0 - zero numérico (inteiro ou não)

In 4D, **truthy** and **falsy** evaluation reflects the **usability** of a value, which means that a truthy value exists and can be processed by the code without generating errors or unexpected results. The rationale behind this is to provide a convenient way to handle _undefined_ and _null_ values in objects and collections, so that a reduced number of [If…Else](flow-control.md#ifelseend-if) statements are necessary to avoid runtime errors.

For example, when you use a [short-circuit OR operator](#short-circuit-or-operator-):

```4d
$value:=$object.value || $defaultValue
```

... you get the default value whenever _$object_ does not contain the `value` property OR when it is _null_. Assim, este operador verifica a existência ou a possibilidade de utilização do valor em vez de um valor específico. Note that because the numerical value 0 exists and is usable, it is not treated specially, thus it is **truthy**.

Regarding values representing collections, objects, or strings, "empty" values are considered **falsy**. É útil quando se pretende atribuir um valor por defeito sempre que se encontra um valor vazio.

```4d
$phone:=$emp.phone || "n/a"
```
