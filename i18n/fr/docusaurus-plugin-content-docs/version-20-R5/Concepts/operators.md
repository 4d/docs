---
id: operators
title: Opérateurs
---

Un opérateur est un symbole ou un groupe de symboles que vous utilisez pour vérifier, modifier ou combiner des valeurs. Vous connaissez déjà la plupart des opérateurs. For example, `1 + 2` uses the addition (or plus sign) operator to add two numbers together, and the result is 3. Comparison operators, like = or >, let you compare two or more values.

Le langage 4D prend en charge les opérateurs que vous connaissez peut-être déjà dans d'autres langages tels que le C ou JavaScript. However, the assignment operator is `:=` to prevent it from being mistakenly used when the equal to operator (`=`) is intended. [Basic operators](#basic-operators) such as arithmetic operators (+, -, \*, /, %...) and comparison operators (=, >, >=...) can be used with numbers, but also with boolean, text, date, time, pointer, or picture data types. Like JavaScript, the 4D language supports the concept of [truthy and falsy values](#truthy-and-falsy), which in use in [short-cicrcuit operators](#short-circuit-operators).

## Terminologie

The 4D language supports **binary** and **ternary** operators:

- binary operators operate on two targets (such as `2 + 3`) and appear in between their two targets.
- les opérateurs ternaires opèrent sur trois cibles. Like C, 4D has only one ternary operator, the [ternary conditional operator](#ternary-operator) (`a ? b : c`).

Les valeurs que les opérateurs affectent sont des opérandes. In the expression `1 + 2`, the + symbol is a binary operator and its two operands are the values 1 and 2.

## Opérateur d'assignation

The **assignment operator** (`a:=b`) initializes or updates the value of `a` with the value of `b`:

```4d
$myNumber:=3 //assigns 3 to MyNumber variable  
$myDate:=!2018/01/21! //assigns a date literal
$myLength:=Length("Acme") //assigns the result of the command (4) to $myLength
$col:=New collection //$col is initialized with an empty collection
```

> Do NOT confuse the assignment operator `:=` with the equality comparison operator `=`. A different assignment operator (and not `=`) was deliberately chosen to avoid issues and confusion which often occur with == or === in other programming languages. De telles erreurs sont souvent difficiles à reconnaître pour le compilateur et conduisent à un dépannage fastidieux.

## Opérateurs basiques

Operator results depend on the **data types** they are applied to. 4D supports different operators on scalar data types. Ils sont décrits avec les types de données, dans les sections suivantes :

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

## Opérateurs d'affectation composés

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

4D provides **compound assignment operators** that combine assignment with another operation. One example is the addition assignment operator (`+=`):

```4d
$a:=1 
$a+=2 // $a=3
```

Les opérateurs d'affectation composés suivants sont pris en charge :

| Opérateur      | Syntaxe            | Assigne | Exemple                                                                         |
| -------------- | ------------------ | ------- | ------------------------------------------------------------------------------- |
| Addition       | Text += Text       | Text    | `$t+=" World"  //$t:=$t+" World"`                                               |
|                | Number += Number   | Number  | `$n+=5 //$n:=$n+5`                                                              |
|                | Date += Number     | Date    | `$d+=5 //$d:=$d+5`                                                              |
|                | Time += Time       | Time    | `$t1+=$t2 //$t1:=$t1+$t2`                                                       |
|                | Time += Number     | Number  | `$t1+=5 //$t1:=$t1+5`                                                           |
|                | Picture += Picture | Picture | `$p1+=$p2 //$p1:=$p1+$p2 (add $p2 to the right of $p1)`                         |
|                | Picture += Number  | Picture | `$p1+=5 //$p1:=$p1+5 (move $p1 horizontally 5 pixels to the right)`             |
| Soustraction   | Number -= Number   | Number  | `$n-=5 //$n:=$n-5`                                                              |
|                | Date -= Number     | Date    | `$d-=5 //$d:=$d-5`                                                              |
|                | Time -= Time       | Time    | `$t1-=$t2 //$t1:=$t1-$t2`                                                       |
|                | Time -= Number     | Number  | `$t1-=5 //$t1:=$t1-5`                                                           |
|                | Picture -= Number  | Picture | `$p1-=5 //$p1:=$p1-5 (déplacer horizontalement $p1 de 5 pixels vers la gauche)` |
| Division       | Number /= Number   | Number  | `$n/=5 //$n:=$n/5`                                                              |
|                | Time /= Time       | Time    | `$t1/=$t2 //$t1:=$t1/$t2`                                                       |
|                | Time /= Number     | Number  | `$t1/=5 //$t1:=$t1/5`                                                           |
|                | Picture /= Picture | Picture | `$p1/=$p2 //$p1:=$p1/$p2 (ajouter $p2 vers le bas de $p1)`                      |
|                | Picture /= Number  | Picture | `$p1/=5 //$p1:=$p1/5 (déplacer verticalement $p1 de 5 pixels)`                  |
| Multiplication | Text \*= Number    | Text    | `$t*="abc"  //$t:=$t*"abc"`                                                     |
|                | Number \*= Number  | Number  | `$n*=5 //$n:=$n*5`                                                              |
|                | Time \*= Time      | Time    | `$t1*=$t2 //$t1:=$t1*$t2`                                                       |
|                | Time \*= Number    | Number  | `$t1*=5 //$t1:=$t1*5`                                                           |
|                | Picture \*= Number | Picture | `$p1*=5 //$p1:=$p1*5 (redimensionner $p1 de 5)`                                 |

These operators apply on any [assignable expressions](quick-tour.md#assignable-vs-non-assignable-expressions) (except pictures as object properties or collection elements).

The operation "source `operator` value" is not strictly equivalent to "source := source `operator` value" because the expression designating the source (variable, field, object property, collection element) is only evaluated once. For example, in such expression as `getPointer()->+=1` the `getPointer` method is called only once.

> [Character indexing in text](dt_string.md#character-reference-symbols) and [byte indexing in blob](dt_blob.md#accessing-a-scalar-blobs-bytes) do not support these operators.

#### Exemples

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

## Opérateurs en court-circuit

The **&&** and **||** operators are **short circuit operators**. Un opérateur en court-circuit est un opérateur qui n'évalue pas nécessairement toutes ses opérandes.

The difference with the single [**&** and **|** boolean operators](dt_boolean.md#logical-operators) is that the short-circuit operators **&&** and **||** don't return a boolean value. They evaluate expressions as [truthy or falsy](#truthy-and-falsy), then return one of the expressions.

### Opérateur en court-circuit AND (&&)

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

La règle est la suivante :

Given `Expr1 && Expr2`:

The short-circuit AND operator evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are [truthy](#truthy-and-falsy), the value of the last operand is returned.

The following table summarizes the different cases for the **&&** operator:

| Expr1  | Expr2  | Valeur retournée |
| ------ | ------ | ---------------- |
| truthy | truthy | Expr2            |
| truthy | falsy  | Expr2            |
| falsy  | truthy | Expr1            |
| falsy  | falsy  | Expr1            |

#### Exemple 1

```4d
var $v : Variant

$v:= "Hello" && "World" //"World"
$v:=False && 0 // False
$v:=0 && False // False
$v:=5 && !00-00-00! // 00/00/00
$v := 5 && 10 && "hello" //"hello"
```

#### Exemple 2

Supposons que vous ayez une boutique en ligne et que certains produits soient soumis à une taxe, alors que d'autres ne le sont pas.

Pour calculer la taxe, vous multipliez le prix par le taux de taxe, qui peut ne pas avoir été spécifié.

Vous pouvez donc écrire ceci :

```4d
var $tax : Variant

$tax:=$item.taxRate && ($item.price*$item.taxRate)
```

`$tax` will be NULL if taxRate is NULL (or undefined), otherwise it will store the result of the calculation.

#### Exemple 3

Les opérateurs en court-circuit sont utiles dans les tests tels que :

```4d
If(($myObject#Null) && ($myObject.value>10))
	//code
End if
```

Si $myObject est Null, le second argument n'est pas exécuté, donc aucune erreur n'est levée.

### Opérateur en court-circuit OR (||)

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

L'opérateur || retourne la valeur d'une des opérandes spécifiées. L'expression est évaluée de gauche à droite et testée pour une éventuelle évaluation en "court-circuit" en utilisant la règle suivante :

Given `Expr1 || Expr2`:

If Expr1 is [truthy](#truthy-and-falsy), Expr2 is not evaluated and the calculation returns Expr1.

If Expr1 is [falsy](#truthy-and-falsy), the calculation returns Expr2.

The following table summarizes the different cases and the value returned for the **||** operator:

| Expr1  | Expr2  | Valeur retournée |
| ------ | ------ | ---------------- |
| truthy | truthy | Expr1            |
| truthy | falsy  | Expr1            |
| falsy  | truthy | Expr2            |
| falsy  | falsy  | Expr2            |

#### Exemple 1

Supposons que vous avez une table appelée Employee. Certains employés ont saisi un numéro de téléphone, d'autres non. This means that `$emp.phone` could be NULL, and you cannot assign NULL to a Text variable. Mais vous pouvez écrire :

```4d
var $phone : Text

$phone:=$emp.phone || "n/a"
```

In which case `$phone` will store either a phone number or the "n/a" string.

#### Exemple 2

Given a table called Person with a _name_ field, as well as a _maiden name_ field for married women.

L'exemple suivant vérifie s'il y a un nom de jeune fille et le stocke dans une variable, sinon il stocke simplement le nom de la personne :

```4d
var $name: Text

$name:=$person.maidenName || $person.name
```

### Priorité

The `&&` and `||` operators have the same precedence as the logical operators `&` and `|`, and are evaluated left to right.

This means that `a || b && c` is evaluated as `(a || b) && c`.

## Opérateur ternaire

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

L'opérateur conditionnel ternaire vous permet d'écrire des expressions conditionnelles sur une seule ligne. For example, it can replace a full sequence of [If…Else](flow-control.md#ifelseend-if) statements.

Il prend trois opérandes dans l'ordre suivant :

- une condition suivie d'un point d'interrogation (?)
- an expression to execute if the condition is [truthy](#truthy-and-falsy), followed by a colon (:)
- an expression to execute if the condition is [falsy](#truthy-and-falsy)

### Syntaxe

La syntaxe est la suivante :

`condition ? exprIfTruthy : exprIfFalsy`

> Since the [token syntax](https://doc.4d.com/4Dv19/4D/19.5/Using-tokens-in-formulas.300-6136716.en.html) uses colons, we recommend inserting a space after the colon `:` or enclosing tokens using parentheses to avoid any conflicts.

### Exemples

#### Exemple simple

```4d
var $age : Integer
var $beverage : Text

$age:=26
$beverage:=($age>=21) ? "Beer" : "Juice"

ALERT($beverage) // "Beer"
```

#### Traitement des données depuis une table

Cet exemple stocke le nom complet d'une personne dans une variable, et gère le cas où aucun prénom ou nom de famille n'a été spécifié :

```4d
var $fullname : Text

// If one of the names is missing, store the one that exists, otherwise store an empty string
$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""
```

## Truthy et falsy

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

As well as a type, each value also has an inherent Boolean value, generally known as either **truthy** or **falsy**.

> **truthy** and **falsy** values are only evaluated by [short-circuit](#short-circuit-operators) and [ternary](#ternary-operator) operators.

The following values are **falsy**:

- false
- Null
- undefined
- Null object
- Null collection
- Null pointer
- Null picture
- Null date !00-00-00!
- "" - Chaînes vides
- [] - Collections vides
- {} - Objets vides

All other values are considered **truthy**, including:

- 0 - zéro numérique (Entier ou autre)

In 4D, **truthy** and **falsy** evaluation reflects the **usability** of a value, which means that a truthy value exists and can be processed by the code without generating errors or unexpected results. The rationale behind this is to provide a convenient way to handle _undefined_ and _null_ values in objects and collections, so that a reduced number of [If…Else](flow-control.md#ifelseend-if) statements are necessary to avoid runtime errors.

For example, when you use a [short-circuit OR operator](#short-circuit-or-operator-):

```4d
$value:=$object.value || $defaultValue
```

... you get the default value whenever _$object_ does not contain the `value` property OR when it is _null_. Cet opérateur vérifie donc l'existence ou la possibilité d'utilisation de la valeur et non une valeur spécifique. Note that because the numerical value 0 exists and is usable, it is not treated specially, thus it is **truthy**.

Regarding values representing collections, objects, or strings, "empty" values are considered **falsy**. C'est pratique lorsque vous voulez assigner une valeur par défaut chaque fois qu'une valeur vide est rencontrée.

```4d
$phone:=$emp.phone || "n/a"
```
