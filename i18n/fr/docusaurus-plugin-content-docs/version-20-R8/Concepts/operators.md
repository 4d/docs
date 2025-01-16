---
id: operators
title: Opérateurs
---

Un opérateur est un symbole ou un groupe de symboles que vous utilisez pour vérifier, modifier ou combiner des valeurs. Vous connaissez déjà la plupart des opérateurs. Par exemple, `1 + 2` utilise l'opérateur d'addition (ou le signe "plus") pour additionner deux nombres, et a pour résultat le chiffre 3. Les opérateurs de comparaison, comme = ou >, vous permettent de comparer deux valeurs ou plus.

Le langage 4D prend en charge les opérateurs que vous connaissez peut-être déjà dans d'autres langages tels que le C ou JavaScript. Toutefois, l'opérateur d'affectation est `:=` pour éviter qu'il ne soit utilisé par erreur lorsque l'opérateur "égal à" (`=`) est prévu. Les [opérateurs de base](#operateurs-de-base) tels que les opérateurs arithmétiques (+, -, \*, /, %...) et les opérateurs de comparaison (=, >, >=...) peut être utilisé avec des données de type numérique, mais booléen, texte, date, heure, pointeur ou image. Tout comme JavaScript, le langage 4D prend en charge le concept de valeurs [truthy et falsy](#truthy-and-falsy), qui sont utilisées dans [les opérateurs de court-curcuit](#short-circuit-operators).

## Terminologie

Le langage 4D prend en charge les opérateurs **binaires** et **ternaires** :

- les opérateurs binaires opèrent sur deux cibles (comme `2 + 3`) et apparaissent entre leurs deux cibles.
- les opérateurs ternaires opèrent sur trois cibles. Comme le C, 4D ne possède qu'un seul opérateur ternaire, [l'opérateur conditionnel ternaire](#ternary-operator) (`a ? b : c`).

Les valeurs que les opérateurs affectent sont des opérandes. Dans l'expression `1 + 2`, le symbole + est un opérateur binaire et ses deux opérandes sont les valeurs 1 et 2.

## Opérateur d'affectation

**L'opérateur d'affectation** (`a:=b`) initialise ou met à jour la valeur de `a` avec la valeur de `b` :

```4d
$myNumber:=3 //assigne 3 à la variable $myNumber
$myDate:=!2018/01/21! //assigne une date littérale
$myLength:=Length("Acme") //assigne le résultat de la commande (4) à $myLength
$col:=New collection //$col est initialisé avec une collection vide
```

> Attention à ne PAS confondre l'opérateur d'affectation `:=` avec l'opérateur de comparaison d'égalité `=`. Un opérateur d'affectation différent (et non pas `=`) a été choisi délibérément pour éviter les problèmes et la confusion qui surviennent souvent avec == ou === dans d'autres langages de programmation. De telles erreurs sont souvent difficiles à reconnaître pour le compilateur et conduisent à un dépannage fastidieux.

## Opérateurs basiques

Les résultats des opérateurs dépendent des **types de données** auxquels ils sont appliqués. Ils sont décrits avec les types de données, dans les sections suivantes :

- [**Opérateurs logiques**](dt_boolean.md#operateurs-logiques) (sur les expressions de type **booléen**)
- [**Opérateurs sur les dates**](dt_date.md#operateurs-sur-les-dates)
- [**Opérateurs sur les heures**](dt_time.md#operateurs-sur-les-heures)
- [**Opérateurs sur les nombres**](dt_number.md#operateurs-sur-les-nombres)
- [**Opérateurs sur les bits**](dt_number.md#operateurs-sur-les-bits) (sur les expressions de type **entier long**)
- [**Opérateurs sur les images**](dt_picture.md#operateurs-sur-les-images)
- [**Opérateurs sur les pointeurs**](dt_pointer.md#operateurs-sur-les-pointeurs)
- [**Opérateurs sur les chaînes**](dt_string.md#operateurs-sur-les-chaines)
- [**Opérateurs sur les références d'objets**](dt_object.md#operateurs-sur-les-objets)
- [**Opérateurs sur les références de collections**](dt_collection.md#operateurs-sur-les-collections)
- [**Opérateurs sur les Null**](dt_null_undefined.md#operateurs-sur-les-null)
- [**Opérateurs sur les Undefined**](dt_null_undefined.md#operateurs-sur-les-undefined)

## Opérateurs d'affectation composés

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

4D fournit des **opérateurs d'affectation composés** qui combinent l'affectation avec une autre opération. L'opérateur d'affectation d'addition (`+=`) en est un exemple :

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
$x2*=5 // $x2=50

$t2:="Hello" 
$t2*=2 // $t2="HelloHello"

```

## Opérateurs en court-circuit

Les opérateurs **&&** et **||** sont des **opérateurs en court-circuit**. Un opérateur en court-circuit est un opérateur qui n'évalue pas nécessairement toutes ses opérandes.

La différence avec les opérateurs booléens simples [**&** et **|**](dt_boolean.md#operateurs-logiques) est que les opérateurs en court-circuit **&&** et **||** ne renvoient pas de valeur booléenne. Ils évaluent les expressions comme étant [truthy ou falsy](#truthy-and-falsy), puis retournent l'une des expressions.

### Opérateur en court-circuit AND (&&)

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

La règle est la suivante :

Soit `Expr1 && Expr2` :

L'opérateur en court-circuit AND évalue les opérandes de gauche à droite, retournant immédiatement avec la valeur du premier opérande "falsy" qu'il rencontre ; si toutes les valeurs sont [truthy](#truthy-and-falsy), la valeur du dernier opérande est retou

Le tableau suivant résume les différents cas de figure pour l'opérateur **&&** :

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

`$tax` sera NULL si le taxRate est NULL (ou undefined), sinon il stockera le résultat du calcul.

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

Soit `Expr1 || Expr2` :

Si Expr1 est [truthy](#truthy-and-falsy), Expr2 n'est pas évalué et le calcul renvoie Expr1.

Si Expr1 est [falsy](#truthy-and-falsy), le calcul renvoie Expr2.

Le tableau suivant résume les différents cas de figure et la valeur retournée pour l'opérateur **||**:

| Expr1  | Expr2  | Valeur retournée |
| ------ | ------ | ---------------- |
| truthy | truthy | Expr1            |
| truthy | falsy  | Expr1            |
| falsy  | truthy | Expr2            |
| falsy  | falsy  | Expr2            |

#### Exemple 1

Supposons que vous avez une table appelée Employee. Certains employés ont saisi un numéro de téléphone, d'autres non. Cela signifie que `$emp.phone` pourrait être NULL, et vous ne pouvez pas assigner NULL à une variable texte. Mais vous pouvez écrire :

```4d
var $phone : Text

$phone:=$emp.phone || "n/a"
```

Dans ce cas, `$phone` stockera soit un numéro de téléphone, soit la chaîne "n/a".

#### Exemple 2

On dispose d'une table appelée Person avec un champ _name_ , ainsi qu'un champ _maiden name_ pour les femmes mariées.

L'exemple suivant vérifie s'il y a un nom de jeune fille et le stocke dans une variable, sinon il stocke simplement le nom de la personne :

```4d
var $name: Text

$name:=$person.maidenName || $person.name
```

### Priorité

Les opérateurs `&&` et `||` ont la même priorité que les opérateurs logiques `&` et `|`, et sont évalués de gauche à droite.

Cela signifie que `a || b && c` est évalué comme `(a || b) && c`.

## Opérateur ternaire

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

L'opérateur conditionnel ternaire vous permet d'écrire des expressions conditionnelles sur une seule ligne. Par exemple, il peut remplacer une séquence complète d'instructions [If…Else](flow-control.md#ifelseend-if) .

Il prend trois opérandes dans l'ordre suivant :

- une condition suivie d'un point d'interrogation (?)
- une expression à exécuter si la condition est [truthy](#truthy-and-falsy), suivie de deux points (:)
- une expression à exécuter si la condition est [falsy](#truthy-and-falsy)

### Syntaxe

La syntaxe est la suivante :

`condition ? exprIfTruthy : exprIfFalsy`

> Étant donné que la [syntaxe avec tokens](https://doc.4d.com/4Dv19/4D/19.5/Using-tokens-in-formulas.300-6136716.en.html) utilise des deux-points, nous recommandons d'insérer un espace après les deux-points `:` ou d'entourer les tokens à l'aide de parenthès

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

// Si l'un des noms est manquant, stocker celui qui existe, sinon stocker une chaîne vide
$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""
```

## Truthy et falsy

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

En plus d'un type, chaque valeur possède également une valeur booléenne inhérente, généralement connue sous le nom de **truthy** ou **falsy**.

> Les valeurs **truthy** et \*\*falsy \*\* ne sont évaluées que par les opérateurs [en court-circuit](#operateurs-en-court-circuit) et [ternaires](#operateurs-ternaires).

Les valeurs suivantes sont **falsy**:

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

Toutes les autres valeurs sont considérées comme **truthy**, notamment :

- 0 - zéro numérique (Entier ou autre)

Dans 4D, l'évaluation à **truthy** et **falsy** reflète la **possibilité d'utilisation** d'une valeur, ce qui signifie qu'une valeur truthy existe et peut être traitée par le code sans générer d'erreurs ou de résultats inattendus. L'objectif est de fournir un moyen pratique de gérer les valeurs _undefined_ et _null_ dans les objets et les collections, de sorte qu'un nombre réduit d'instructions [If…Else](flow-control.md#ifelseend-if) soit nécessaire pour éviter les erreurs d'exécut

Par exemple, lorsque vous utilisez un opérateur en [court-circuit OR](#short-circuit-or-operator-) :

```4d
$value:=$object.value || $defaultValue
```

... vous obtenez la valeur par défaut chaque fois que _$object_ ne contient pas la propriété `value` OU quand elle est _null_. Cet opérateur vérifie donc l'existence ou la possibilité d'utilisation de la valeur et non une valeur spécifique. Notez que puisque la valeur numérique 0 existe et est utilisable, elle n'est pas traitée spécialement, donc elle est **truthy**.

En ce qui concerne les valeurs représentant des collections, des objets ou des chaînes, les valeurs "vides" sont considérées comme **falsy**. C'est pratique lorsque vous voulez assigner une valeur par défaut chaque fois qu'une valeur vide est rencontrée.

```4d
$phone:=$emp.phone || "n/a"
```
