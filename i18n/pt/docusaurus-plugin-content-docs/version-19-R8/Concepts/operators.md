---
id: operators
title: Operadores
---

Um operador é um símbolo ou um grupo de símbolos que é utilizado para verificar, modificar ou combinar valores. Já está familiarizado com muitos operadores. Por exemplo, `1 + 2` utiliza o operador de adição (ou sinal de mais) para adicionar dois números e o resultado é 3. Os operadores de comparação, como = ou >, permitem-lhe comparar dois ou mais valores.

A linguagem 4D suporta os operadores que talvez já conheça de outras linguagens como C ou JavaScript. No entanto, o operador de atribuição é `:=` para evitar que seja utilizado por engano quando se pretende utilizar o operador igual a (`=`). [Operadores básicos](#basic-operators) tais como operadores aritméticos (+, -, *, /, %...) e operadores de comparação (=, >, >=...) podem ser utilizados com números, mas também com tipos de dados booleanos, texto, data, hora, ponteiro ou imagem. Tal como JavaScript, a linguagem 4D suporta o conceito de [valores truthy e falsy](#truthy-and-falsy), que são usados em [operadores de curto-circuito](#short-circuit-operators).


## Terminologia

A linguagem 4D suporta os operadores **binários** e **ternários**:

- os operadores binários operam sobre dois objectivos (como `2 + 3`) e aparecem entre os seus dois objectivos.
- os operadores ternários operam em três objectivos. Tal como C, 4D tem apenas um operador ternário, o operador condicional ternário [](#ternary-operator) (`a ? b : c`).

Os valores que os operadores afectam são os operandos. Na expressão `1 + 2`, o símbolo + é um operador binário e os seus dois operandos são os valores 1 e 2.



## Operador de atribuição

O **operador de atribuição** (`a:=b`) inicializa ou actualiza o valor de `a` com o valor de `b`:

```4d
$myNumber:=3 //atribui 3 à variável MyNumber  
$myDate:=!2018/01/21! //atribui uma data literal
$myLength:=Length("Acme") //atribui o resultado do comando (4) a $myLength
$col:=New collection //$col é inicializado com uma colecção vazia
```

> NÃO confundir o operador de atribuição `:=` com o operador de comparação de igualdade `=`. Foi deliberadamente escolhido um operador de atribuição diferente (e não `=`) para evitar problemas e confusões que ocorrem frequentemente com == ou === noutras linguagens de programação. Esses erros são geralmente difíceis de reconhecer pelo compilador e geram problemas trabalhosos.


## Operadores básicos

Os resultados dos operadores dependem dos **tipos de dados** aos quais são aplicados. 4D suporta diferentes operadores em tipos de dados escalares. São descritos com os tipos de dados, nas secções seguintes:

- [**Operadores lógicos**](dt_boolean.md#logical-operators) (em expressões **booleanas**)
- [**Operadores de data**](dt_date.md#date-operators)
- [**Operadores de horas**](dt_time.md#time-operators)
- [**Operadores de números**](dt_number.md#number-operators)
- [**Operadores Bitwise**](dt_number.md#bitwise-operators) (em **expressões de números inteiros longos**)
- [**Operadores de imagem**](dt_picture.md#picture-operators)
- [**Operadores de Ponteiros**](dt_pointer.md#pointer-operators)
- [**Operadores de string**](dt_string.md#string-operators)


## Operadores de atribuição compostos

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R4 | Adicionado |
</details>

4D fornece **operadores de atribuição compostos** que combinam a atribuição com outra operação. Um exemplo é o operador de atribuição de adição (`+=`):

```4d
$a:=1 
$a+=2 // $a=3
```


São suportados os seguintes operadores de atribuição compostos:

| Operador      | Sintaxe            | Assigns | Exemplo                                                                    |
| ------------- | ------------------ | ------- | -------------------------------------------------------------------------- |
| Adição        | Text += Text       | Text    | `$t+=" World"  //$t:=$t+" World"`                                          |
|               | Number += Number   | Number  | `$n+=5 //$n:=$n+5`                                                         |
|               | Date += Number     | Date    | `$d+=5 //$d:=$d+5`                                                         |
|               | Time += Time       | Hora    | `$t1+=$t2 //$t1:=$t1+$t2`                                                  |
|               | Time += Number     | Number  | `$t1+=5 //$t1:=$t1+5`                                                      |
|               | Picture += Picture | Imagem  | `$p1+=$p2 //$p1:=$p1+$p2 (add $p2 to the right of $p1)`                    |
|               | Picture += Number  | Imagem  | `$p1+=5 //$p1:=$p1+5 (move $p1 horizontally 5 pixels to the right)`        |
| Subtração     | Number -= Number   | Number  | `$n-=5 //$n:=$n-5`                                                         |
|               | Date -= Number     | Date    | `$d-=5 //$d:=$d-5`                                                         |
|               | Time -= Time       | Hora    | `$t1-=$t2 //$t1:=$t1-$t2`                                                  |
|               | Time -= Number     | Number  | `$t1-=5 //$t1:=$t1-5`                                                      |
|               | Picture -= Number  | Imagem  | `$p1-=5 //$p1:=$p1-5 (mover horizontalmente $p1 5 pixels para a esquerda)` |
| Divisão       | Number /= Number   | Number  | `$n/=5 //$n:=$n/5`                                                         |
|               | Time /= Time       | Hora    | `$t1/=$t2 //$t1:=$t1/$t2`                                                  |
|               | Time /= Number     | Number  | `$t1/=5 //$t1:=$t1/5`                                                      |
|               | Picture /= Picture | Imagem  | `$p1/=$p2 //$p1:=$p1/$p2 (adicione $p2 ao fundo de $p1)`                   |
|               | Picture /= Number  | Imagem  | `$p1/=5 //$p1:=$p1/5 (mover $p1 verticalmente 5 pixels)`                   |
| Multiplicação | Text *= Number     | Text    | `$t*="abc"  //$t:=$t*"abc"`                                                |
|               | Number *= Number   | Number  | `$n*=5 //$n:=$n*5`                                                         |
|               | Time *= Time       | Hora    | `$t1*=$t2 //$t1:=$t1*$t2`                                                  |
|               | Time *= Number     | Number  | `$t1*=5 //$t1:=$t1*5`                                                      |
|               | Picture *= Number  | Imagem  | `$p1*=5 //$p1:=$p1*5 (redimensionar $p1 por 5)`                            |

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

// Subtracção
$x1:=10
$x1-=5 //$x1=5

$d1:=!2000-11-10!
$d1-=10 // $d1=!2000-10-31!

// Divisão
$x3:=10
$x3/=2 // $x3=5


// Multiplicação
$x2:=10
$x2*=5 // $x2=10

$t2:="Hello" 
$t2*=2 // $t2="HelloHello"

```




## Operadores curto-circuito

The **&&** and **||** operators are **short circuit operators**. A short circuit operator is one that doesn't necessarily evaluate all of its operands.

The difference with the single [**&** and **|** boolean operators](dt_boolean.md#logical-operators) is that the short-circuit operators **&&** and **||** don't return a boolean value. They evaluate expressions as [truthy or falsy](#truthy-and-falsy), then return one of the expressions.

### Operador em curto-circuito AND (&&)

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R4 | Adicionado |
</details>

A regra é a seguinte:

Dado `Expr1 && Expr2`:

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

To calculate the tax, you multiply the price by the tax rate, which may not have been specified.

Portanto, pode escrever isto:

```4d
var $tax : Variant

$tax:=$item.taxRate && ($item.price*$item.taxRate)
```

`$tax` will be NULL if taxRate is NULL (or undefined), otherwise it will store the result of the calculation.

#### Exemplo 3

Short-circuit operators are useful in tests such as:

```4d
If(($myObject#Null) && ($myObject.value>10))
    //code End if
```

Se $myObject for nulo, o segundo argumento não é executado e, por conseguinte, não é lançado qualquer erro.

### Operador em curto-circuito OR (||)

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R4 | Adicionado |
</details>

O operador || devolve o valor de um dos operandos especificados. A expressão é avaliada da esquerda para a direita e testada para uma possível avaliação de "curto-circuito" utilizando a seguinte regra:

Dado `Expr1 || Expr2`:

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

Digamos que tem uma tabela chamada Employee. Some employees have entered a phone number, and others haven't. Some employees have entered a phone number, and others haven't. Some employees have entered a phone number, and others haven't. This means that `$emp.phone` could be NULL, and you cannot assign NULL to a Text variable. But you can write the following:

```4d
var $phone : Text

$phone:=$emp.phone || "n/a"
```

In which case `$phone` will store either a phone number or the "n/a" string.

#### Exemplo 2

Given a table called Person with a *name* field, as well as a *maiden name* field for married women.

The following example checks if there is a maiden name and stores it in a variable, otherwise it simply stores the person's name:

```4d
var $name: Text

$name:=$person.maidenName || $person.name
```

### Precedência

The `&&` and `||` operators have the same precedence as the logical operators `&` and `|`, and are evaluated left to right.

This means that `a || b && c` is evaluated as `(a || b) && c`.


## Operador ternário

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R4 | Adicionado |
</details>

The ternary conditional operator allows you to write one-line conditional expressions. For example, it can replace a full sequence of [If…Else](./cf_branching.md#ifelseend-if) statements.

It takes three operands in the following order:

* uma condição seguida de um ponto de interrogação (?)
* an expression to execute if the condition is [truthy](#truthy-and-falsy), followed by a colon (:)
* an expression to execute if the condition is [falsy](#truthy-and-falsy)

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
$beverage:=($age>=21) ? "Beer" : "Juice" ALERT($beverage) // "Beer"
```

#### Handling data from a table

This example stores a person's full name in a variable, and handles the case when no first name or last name has been specified:

```4d
var $fullname : Text

// If one of the names is missing, store the one that exists, otherwise store an empty string
$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""
```

## Truthy e falsy

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R4 | Adicionado |
</details>

As well as a type, each value also has an inherent Boolean value, generally known as either **truthy** or **falsy**.

> **truthy** and **falsy** values are only evaluated by [short-circuit](#short-circuit-operators) and [ternary](#ternary-operator) operators.

The following values are **falsy**:

* false
* Null
* indefinido
* Null object
* Null collection
* Null pointer
* Null picture
* Null date !00-00-00!
* "" - Empty strings
* [] - Colecções vazias
* {} - Objectos vazios

Todos os outros valores são considerados **truthy**, incluindo:

* 0 - zero numérico (inteiro ou não)

In 4D, **truthy** and **falsy** evaluation reflects the **usability** of a value, which means that a truthy value exists and can be processed by the code without generating errors or unexpected results. The rationale behind this is to provide a convenient way to handle *undefined* and *null* values in objects and collections, so that a reduced number of [If…Else](./cf_branching.md#ifelseend-if) statements are necessary to avoid runtime errors.

For example, when you use a [short-circuit OR operator](#short-circuit-or-operator-):

```4d
$value:=$object.value || $defaultValue
```

... you get the default value whenever *$object* does not contain the `value` property OR when it is *null*. So this operator checks the existence or usability of the value instead of a specific value. Note that because the numerical value 0 exists and is usable, it is not treated specially, thus it is **truthy**.

Regarding values representing collections, objects, or strings, "empty" values are considered **falsy**. It is handy when you want to assign a default value whenever an empty one is encountered.

```4d
$phone:=$emp.phone || "n/a"
```



