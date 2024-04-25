---
id: null-undefined
title: Null et Indefinie
---

Null et Undefined sont des types de données qui gèrent les cas où la valeur d'une expression n'est pas connue.

## Null

Null est un type de données particulier avec une seule valeur possible : **null**. Cette valeur est retournée par une expression qui ne contient aucune valeur. Trying to read a property of a **null** value returns an error.

Dans le langage de 4D et pour les attributs des champs objets, les valeurs null sont gérées via la commande `Null`. Cette commande peut être utilisée avec les expressions suivantes pour fixer ou comparer la valeur null :

- attributs d'objets
- éléments de collections
- variables of the object, collection, pointer, picture, or variant type (see also [Null as default value](data-types.md#null-as-default-value).

## Undefined

Undefined (Indéfinie) n'est pas véritablement un type de données. Une variable dite "indéfinie" est une variable n'ayant pas encore été définie. Evaluating an object property can also produce an undefined value. Reading a property of an undefined value returns **undefined**.

A variant variable has **undefined** as [default value](data-types.md#default-values).

Un champ ne peut pas être indéfini (la commande `Indefinie` retourne toujours Faux pour un champ).

Typically when trying to read or assign undefined expressions, 4D will generate errors, except in the following cases:

- Assigning an undefined value to variables (except arrays) has the same effect as calling [`CLEAR VARIABLE`](https://doc.4d.com/4dv20/help/command/en/page89.html) with them:

```4d
     var $o : Object
     var $val : Integer
     $val:=10 //$val=10
     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable
      //$val=0
```

- L'affectation d'une valeur indéfinie à une propriété d'objet existante réinitialise ou efface sa valeur, selon son type :
    - Objet, collection, pointeur : Null
    - Image : image vide
    - Booléen : False
    - Chaîne : ""
    - Numérique : 0
    - Date : !00-00-00! si la base utilise le type date pour les objets, sinon ""
    - Heure : 0 (nombre de ms)
    - Indéfini, Null : pas de changement

```4d
     var $o : Object
     $o:=New object("a";2)
     $o.a:=$o.b //$o.a=0
```

- L'affectation d'une valeur indéfinie à une propriété d'objet inexistante ne fait rien.

- Une valeur indéfinie passée en paramètre à une méthode projet est automatiquement convertie en 0 ou en "" en fonction de la déclaration du type du paramètre.

```4d
     var $o : Object
     mymethod($o.a) //pass an undefined parameter

      //In mymethod method
     #Declare ($myText : Text) //parameter type is text
      // $myText contains ""
```

- Une expression de condition est automatiquement convertie à Faux lorsque son évaluation donne Indéfinie avec les mots-clés Si et Au cas ou :

```4d
     var $o : Object
     If($o.a) // false
     End if
     Case of
        :($o.a) // false
     End case
```


:::tip

Lorsque des expressions d'un type donné sont attendues dans votre code 4D, vous pouvez vous assurer qu'elles auront le type souhaité même en cas de valeur Indéfinie en les encadrant avec la commande de transtypage 4D appropriée : `String`, `Num`, `Time`, `Date`, `Bool`. Ces commandes retournent une valeur vide du type spécifié lorsque l'expression est évaluée à Indéfinie. Par exemple :

```4d
 $myString:=Lowercase(String($o.a.b)) //pour être sûr d'obtenir une valeur texte même si indéfinie
  //afin d'éviter des erreurs dans le code
```

:::


## Opérateurs sur les Null


| Opération | Syntaxe                    | Retourne | Expression                     | Valeur |
| --------- | -------------------------- | -------- | ------------------------------ | ------ |
| Egalité   | Null `=` Null              | Boolean  | a.nullProp `=` b.nullProp      | True   |
|           | Null `=` Undefined         | Boolean  | a.nullProp `=` b.undefinedProp | True   |
|           | Null `=` *valeur scalaire* | Boolean  | a.nullProp `=` 42              | False  |
| Inégalité | Null `#` Null              | Boolean  | a.nullProp `#` b.nullProp      | False  |
|           | Null `#` Undefined         | Boolean  | a.nullProp `#` b.undefinedProp | False  |
|           | Null `#` *scalar value*    | Boolean  | a.nullProp `#` 42              | True   |

Les *valeurs scalaires* sont des valeurs de type chaîne, date, heure, booléen, nombre ou Blob. Lorsqu'elles sont déclarées, leur [valeur par défaut](data-types.md#valeurs-par-defaut) n'est ni undefined ni null. Les autres types (Pointeur, Image, Objet, Collection) ont une valeur par défaut undefined ou null. Ex :

```4d
var $object : Object
var $text : Text

//$object = null
//$text = "" 
```

:::info

Les comparaisons avec les opérateurs Supérieur à (`>`), Inférieur à (`<`), Supérieur ou égal à (`>=`), et Inférieur ou égal à (`<=`) ne sont pas prises en charge avec des valeurs Null et renvoient une erreur.

:::

## Opérateurs sur les Undefined


| Opération           | Syntaxe                                               | Retourne | Expression                          | Valeur |
| ------------------- | ----------------------------------------------------- | -------- | ----------------------------------- | ------ |
| Egalité             | Undefined `=` Undefined                               | Boolean  | a.undefinedProp `=` b.undefinedProp | True   |
|                     | Undefined `=` Null                                    | Boolean  | a.undefinedProp `=` c.nullProp      | True   |
|                     | Undefined `=` *autres valeurs*                        | Boolean  | a.undefinedProp `=` 42              | False  |
| Inégalité           | Undefined `#` Undefined                               | Boolean  | a.undefinedProp `#` b.undefinedProp | False  |
|                     | Undefined `#` Null                                    | Boolean  | a.undefinedProp `#` b.nullProp      | False  |
|                     | Undefined `#` *autres valeurs*                        | Boolean  | a.undefinedProp `#` 42              | True   |
| Supérieur à         | Undefined `>` string, Date, Time, Boolean, number  | Boolean  | a.undefinedProp `>` "abc"        | False  |
| Inférieur à         | Undefined `<` string, Date, Time, Boolean, number  | Boolean  | a.undefinedProp `<` "abc"        | False  |
| Supérieur ou égal à | Undefined `>=` string, Date, Time, Boolean, number | Boolean  | a.undefinedProp `>=` "abc"       | False  |
| Inférieur ou égal à | Undefined `<=` string, Date, Time, Boolean, number | Boolean  | a.undefinedProp `<=` "abc"       | False  |

*autres valeurs* sont des expressions de tout type dont la valeur n'est ni Undefined ni Null.

:::info

Les comparaisons de valeurs Undefined avec des pointeurs, des images, des Blobs, des objets, des collections, d'autres valeurs Undefined ou Null à l'aide des opérateurs Supérieur à (`>`), Inférieur à (`<`), Supérieur ou égal à (`>=`) et Inférieur ou égal à (`<=`) ne sont pas prises en charge et renvoient une erreur.

:::

## Exemples

Cet exemple compare les différents résultats de la commande `Undefined` et de la commande `Null` appliquées aux propriétés d'objets, en fonction du contexte :

```4d
var $vEmp : Object
var $result : Boolean
$vEmp:=New object
$vEmp.name:="Smith"

$vEmp.children:=Null

$result:=Undefined($vEmp.name) //False
$result:=($vEmp.name=Null) //False

$result:=Undefined($vEmp.children) //False
$result:=($vEmp.children=Null) //True

$result:=Undefined($vEmp.parent) //True
$result:=($vEmp.parent=Null) //True
```

Exemples de résultats de comparaisons avec des valeurs indéfinies et nulles :

```4d
var $result : Boolean
var $vObj : Object
var $vVar : Variant

$vObj:=New object
$vObj.null:=Null
//note that $vVar is not assigned 

$result:=($vObj.undefined=42) //False
$result:=($vObj.undefined=$vObj.null) //True
$result:=($vObj.undefined=$vVar)  //True

$result:=($vObj.undefined#$vObj.null) //False
$result:=($vObj.undefined#42) //True
$result:=($vObj.undefined#$vVar) //False

$result:=($vObj.undefined>"hello") //False
$result:=($vObj.undefined>$vVar)  //Error
$result:=($vObj.undefined>$vObj.null)  //Error
$result:=($vVar < 42) //False

```

