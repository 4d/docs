---
id: operators
title: Opérateurs
---

Un opérateur est un symbole ou un groupe de symboles que vous utilisez pour vérifier, modifier ou combiner des valeurs. Vous connaissez déjà la plupart des opérateurs. Par exemple, `1 + 2` utilise l'opérateur d'addition (ou le signe "plus") pour additionner deux nombres, et a pour résultat le chiffre 3. Les opérateurs de comparaison, comme = ou >, vous permettent de comparer deux valeurs ou plus.

Le langage 4D prend en charge les opérateurs que vous connaissez peut-être déjà dans d'autres langages tels que le C ou JavaScript. Toutefois, l'opérateur d'affectation est `:=` pour éviter qu'il ne soit utilisé par erreur lorsque l'opérateur "égal à" (`=`) est prévu. [Les opérateurs de base](#basic-operators) tels que les opérateurs arithmétiques (+, -, *, /, %...) et les opérateurs de comparaison (=, >, >=...) peuvent être utilisés avec des nombres, mais aussi avec des types de données au format booléen, texte, date, heure, pointeur ou image. Tout comme JavaScript, le langage 4D prend en charge le concept de valeurs [truthy et falsy](#truthy-and-falsy), qui sont utilisées dans [les opérateurs de court-curcuit](#short-circuit-operators).


## Terminologie

Le langage 4D prend en charge les opérateurs **binaires** et **ternaires** :

- les opérateurs binaires opèrent sur deux cibles (comme 2 + 3) et apparaissent entre leurs deux cibles.
- les opérateurs ternaires opèrent sur trois cibles. Comme le C, 4D ne possède qu'un seul opérateur ternaire, [l'opérateur conditionnel ternaire](#ternary-operator) (`a ? b : c`).

Les valeurs que les opérateurs affectent sont des opérandes. Dans l'expression 1 + 2, le symbole + est un opérateur binaire et ses deux opérandes sont les valeurs 1 et 2.



## Assignation

**L'opérateur d'affectation** (`a:=b`) initialise ou met à jour la valeur de `a` avec la valeur de `b` :

```4d
$myNumber:=3 //assigne 3 à la variable MyNumber
$myDate:=!2018/01/21! //assigne une date littérale
$myLength:=Length("Acme") //assigne le résultat de la commande (4) à $myLength
$col:=New collection //$col est initialisé avec une collection vide
```

> Attention à ne PAS confondre l'opérateur d'affectation `:=` avec l'opérateur de comparaison d'égalité `=`. Un opérateur d'affectation différent (et non pas `=`) a été choisi délibérément pour éviter les problèmes et la confusion qui surviennent souvent avec == ou === dans d'autres langages de programmation. De telles erreurs sont souvent difficiles à reconnaître pour le compilateur et conduisent à un dépannage fastidieux.


## Opérateurs basiques

Les résultats des opérateurs dépendent des **types de données** auxquels ils sont appliqués. Ils sont décrits avec les types de données, dans les sections suivantes :

- [**Opérateurs logiques**](dt_boolean.md#logical-operators) (sur les expressions **booléennes**)
- [**Opérateurs sur les dates**](dt_date.md#date-operators)
- [**Opérateurs sur les heures**](dt_time.md#time-operators)
- [**Opérateurs sur les nombres**](dt_number.md#number-operators)
- [**Opérateurs binaires**](dt_number.md#bitwise-operators) (sur les expressions **d'entiers longs**)
- [**Opérateurs sur les images**](dt_picture.md#picture-operators)
- [**Opérateurs sur les pointeurs**](dt_pointer.md#pointer-operators)
- [**Opérateurs sur les chaînes**](dt_string.md#string-operators)


## Opérateurs d'affectation composés

4D fournit des **opérateurs d'affectation composés** qui combinent l'affectation avec une autre opération. L'opérateur d'affectation d'addition (`+=`) en est un exemple :

```4d
$a:=1 
$a+=2 // $a=3
```


Les opérateurs d'affectation composés suivants sont pris en charge :

| Opérateur      | Syntaxe            | Assigne | Exemple                                                                         |
| -------------- | ------------------ | ------- | ------------------------------------------------------------------------------- |
| Addition       | Text += Text       | Text    | `$t+=" World"  //$t:=$t+" World"`                                               |
|                | Number += Number   | Nombre  | `$n+=5 //$n:=$n+5`                                                              |
|                | Date += Number     | Date    | `$d+=5 //$d:=$d+5`                                                              |
|                | Time += Time       | Heure   | `$t1+=$t2 //$t1:=$t1+$t2`                                                       |
|                | Time += Number     | Nombre  | `$t1+=5 //$t1:=$t1+5`                                                           |
|                | Picture += Picture | Image   | `$p1+=$p2 //$p1:=$p1+$p2 (add $p2 to the right of $p1)`                         |
|                | Picture += Number  | Image   | `$p1+=5 //$p1:=$p1+5 (move $p1 horizontally 5 pixels to the right)`             |
| Soustraction   | Number -= Number   | Nombre  | `$n-=5 //$n:=$n-5`                                                              |
|                | Date -= Number     | Date    | `$d-=5 //$d:=$d-5`                                                              |
|                | Time -= Time       | Heure   | `$t1-=$t2 //$t1:=$t1-$t2`                                                       |
|                | Time -= Number     | Nombre  | `$t1-=5 //$t1:=$t1-5`                                                           |
|                | Picture -= Number  | Image   | `$p1-=5 //$p1:=$p1-5 (déplacer horizontalement $p1 de 5 pixels vers la gauche)` |
| Division       | Number /= Number   | Nombre  | `$n/=5 //$n:=$n/5`                                                              |
|                | Time /= Time       | Heure   | `$t1/=$t2 //$t1:=$t1/$t2`                                                       |
|                | Time /= Number     | Nombre  | `$t1/=5 //$t1:=$t1/5`                                                           |
|                | Picture /= Picture | Image   | `$p1/=$p2 //$p1:=$p1/$p2 (ajouter $p2 vers le bas de $p1)`                      |
|                | Picture /= Number  | Image   | `$p1/=5 //$p1:=$p1/5 (déplacer verticalement $p1 de 5 pixels)`                  |
| Multiplication | Text *= Number     | Text    | `$t*="abc"  //$t:=$t*"abc"`                                                     |
|                | Number *= Number   | Nombre  | `$n*=5 //$n:=$n*5`                                                              |
|                | Time *= Time       | Heure   | `$t1*=$t2 //$t1:=$t1*$t2`                                                       |
|                | Time *= Number     | Nombre  | `$t1*=5 //$t1:=$t1*5`                                                           |
|                | Picture *= Number  | Image   | `$p1*=5 //$p1:=$p1*5 (redimensionner $p1 de 5)`                                 |

Ces opérateurs s'appliquent à toutes les [expressions assignables](quick-tour.md#assignable-vs-non-assignable-expressions) (à l'exception des images en tant que propriétés d'objet ou éléments de collection).

L'opération "source `operator` value" n'est pas strictement équivalente à "source := source `operator` valeur" car l'expression désignant la source (variable, champ, propriété d'objet, élément de collection) n'est évaluée qu'une seule fois. Par exemple, dans une expression telle que `getPointer()->+=1`, la méthode `getPointer` n'est appelée qu'une seule fois.

> [L'indexation des caractères dans le texte](dt_string.md#character-reference-symbols) et [l'indexation des octets dans le blob](dt_blob.md#accessing-a-scalar-blobs-bytes) ne prennent pas en charge ces opérateurs.
#### Exemples

```4d
// Addition
$x:=2
$x+=5 //$x=7

$t:="Hello" 
$t+=" World" //$t="Hello World" 

$d:=!2000-11-10!
$d+=10 //$d=!2000-11-20!

// Soustraction
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




## Short-circuit operators

The **&&** and **||** operators are **short circuit operators**. A short circuit operator is one that doesn't necessarily evaluate all of its operands.

The difference with the single [**&** and **|** boolean operators](dt_boolean.md#logical-operators) is that the short-circuit operators **&&** and **||** don't return a boolean value. They evaluate expressions as [truthy or falsy](#truthy-and-falsy), then return one of the expressions.

### Short-circuit AND operator (&&)

The rule is as follows:

Given `Expr1 && Expr2`:

The short-circuit AND operator evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are [truthy](#truthy-and-falsy), the value of the last operand is returned.

The following table summarizes the different cases for the **&&** operator:

| Expr1  | Expr2  | Value returned |
| ------ | ------ | -------------- |
| truthy | truthy | Expr2          |
| truthy | falsy  | Expr2          |
| falsy  | truthy | Expr1          |
| falsy  | falsy  | Expr1          |

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

Say you have an online store, and some products have a tax rate applied, and others don't.

To calculate the tax, you multiply the price by the tax rate, which may not have been specified.

So you can write this:

```4d
var $tax : Variant

$tax:=$item.taxRate && ($item.price*$item.taxRate)
```

`$tax` will be NULL if taxRate is NULL (or undefined), otherwise it will store the result of the calculation.

#### Exemple 3

Short-circuit operators are useful in tests such as:

```4d
If(($myObject#Null) && ($myObject.value>10))
    //code
End if
```

If $myObject is Null, the second argument is not executed, thus no error is thrown.

### Short-circuit OR operator (||)

The || operator returns the value of one of the specified operands. The expression is evaluated left to right and tested for possible "short-circuit" evaluation using the following rule:

Given `Expr1 || Expr2`:

If Expr1 is [truthy](#truthy-and-falsy), Expr2 is not evaluated and the calculation returns Expr1.

If Expr1 is [falsy](#truthy-and-falsy), the calculation returns Expr2.

The following table summarizes the different cases and the value returned for the **||** operator:

| Expr1  | Expr2  | Value returned |
| ------ | ------ | -------------- |
| truthy | truthy | Expr1          |
| truthy | falsy  | Expr1          |
| falsy  | truthy | Expr2          |
| falsy  | falsy  | Expr2          |

#### Exemple 1

Say you have a table called Employee. Some employees have entered a phone number, and others haven't. This means that `$emp.phone` could be NULL, and you cannot assign NULL to a Text variable. But you can write the following:

```4d
var $phone : Text

$phone:=$emp.phone || "n/a"
```

In which case `$phone` will store either a phone number or the "n/a" string.

#### Exemple 2

Given a table called Person with a *name* field, as well as a *maiden name* field for married women.

The following example checks if there is a maiden name and stores it in a variable, otherwise it simply stores the person's name:

```4d
var $name: Text

$name:=$person.maidenName || $person.name
```

### Priorité

The `&&` and `||` operators have the same precedence as the logical operators `&` and `|`, and are evaluated left to right.

This means that `a || b && c` is evaluated as `(a || b) && c`.


## Opérateur ternaire

L'opérateur conditionnel ternaire vous permet d'écrire des expressions conditionnelles sur une seule ligne. Par exemple, il peut remplacer une séquence complète d'instructions [If...Else](./cf_branching.md#ifelseend-if).

Il prend trois opérandes dans l'ordre suivant :

* une condition suivie d'un point d'interrogation (?)
* une expression à exécuter si la condition est [truthy](#truthy-and-falsy), suivie de deux points (:)
* une expression à exécuter si la condition est [falsy](#truthy-and-falsy)

### Syntaxe

La syntaxe est la suivante :

`condition ? exprIfTruthy : exprIfFalsy`

> Since the [token syntax](https://doc.4d.com/4Dv19R3/4D/19-R3/Using-tokens-in-formulas.300-5583062.en.html) uses colons, we recommend inserting a space after the colon `:` or enclosing tokens using parentheses to avoid any conflicts.

### Exemples

#### A simple example

```4d
var $age : Integer
var $beverage : Text

$age:=26
$beverage:=($age>=21) ? "Beer" : "Juice"

ALERT($beverage) // "Beer"
```

#### Handling data from a table

This example stores a person's full name in a variable, and handles the case when no first name or last name has been specified:

```4d
var $fullname : Text

// Si l'un des noms est manquant, enregistrez celui qui existe, sinon enregistrez une chaîne vide.
$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""
```

## Truthy et falsy

En plus d'un type, chaque valeur possède également une valeur booléenne inhérente, généralement connue sous le nom de **truthy** ou **falsy**.

Les valeurs suivantes sont **falsy**:

* false
* Null
* indéfini
* Null object
* Null collection
* Null pointer
* Null picture
* Null date !00-00-00!
* "" - Chaînes vides
* [] - Collections vides
* {} - Objets vides

Toutes les autres valeurs sont considérées comme **truthy**, y compris :

* 0 - zéro numérique (Entier ou autre)
