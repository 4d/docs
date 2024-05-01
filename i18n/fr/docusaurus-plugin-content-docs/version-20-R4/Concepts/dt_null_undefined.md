---
id: null-undefined
title: Null et Indefinie
---

Null et Undefined sont des types de données qui gèrent les cas où la valeur d'une expression n'est pas connue.

## Null

Null is a special data type with only one possible value: **null**. Cette valeur est retournée par une expression qui ne contient aucune valeur. Trying to read a property of a **null** value returns an error.

In the 4D language and for object field attributes, null values are managed through the `Null` function. Cette commande peut être utilisée avec les expressions suivantes pour fixer ou comparer la valeur null :

- attributs d'objets
- éléments de collections
- variables of the object, collection, pointer, picture, or variant type (see also [Null as default value](data-types.md#null-as-default-value).

## Undefined

Undefined (Indéfinie) n'est pas véritablement un type de données. Une variable dite "indéfinie" est une variable n'ayant pas encore été définie. Evaluating an object property can also produce an undefined value. Reading a property of an undefined value returns **undefined**.

A variant variable has **undefined** as [default value](data-types.md#default-values).

A field cannot be undefined (the `Undefined` command always returns False for a field).

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

When expressions of a given type are expected in your 4D code, you can make sure they have the correct type even when evaluated to undefined by surrounding them with the appropriate 4D cast command: `String`, `Num`, `Date`, `Time`, `Bool`. Ces commandes retournent une valeur vide du type spécifié lorsque l'expression est évaluée à Indéfinie. Par exemple :

```4d
 $myString:=Lowercase(String($o.a.b)) //pour être sûr d'obtenir une valeur texte même si indéfinie
  //afin d'éviter des erreurs dans le code
```

:::

## Opérateurs sur les Null

| Opération | Syntaxe                 | Retourne | Expression                                                     | Valeur |
| --------- | ----------------------- | -------- | -------------------------------------------------------------- | ------ |
| Egalité   | Null `=` Null           | Boolean  | a.nullProp `=` b.nullProp      | True   |
|           | Null `=` Undefined      | Boolean  | a.nullProp `=` b.undefinedProp | True   |
|           | Null `=` _scalar value_ | Boolean  | a.nullProp `=` 42                              | False  |
| Inégalité | Null `#` Null           | Boolean  | a.nullProp `#` b.nullProp      | False  |
|           | Null `#` Undefined      | Boolean  | a.nullProp `#` b.undefinedProp | False  |
|           | Null `#` _scalar value_ | Boolean  | a.nullProp `#` 42                              | True   |

_scalar values_ are values of type string, Date, Time, Boolean, number, or Blob. When declared, their [default value](data-types.md#default-values) is neither undefined nor null. Les autres types (Pointeur, Image, Objet, Collection) ont une valeur par défaut undefined ou null. Ex :

```4d
var $object : Object
var $text : Text

//$object = null
//$text = "" 
```

:::info

Comparisons with Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported with Null values and return an error.

:::

## Opérateurs sur les Undefined

| Opération           | Syntaxe                                            | Retourne | Expression                                                          | Valeur |
| ------------------- | -------------------------------------------------- | -------- | ------------------------------------------------------------------- | ------ |
| Egalité             | Undefined `=` Undefined                            | Boolean  | a.undefinedProp `=` b.undefinedProp | True   |
|                     | Undefined `=` Null                                 | Boolean  | a.undefinedProp `=` c.nullProp      | True   |
|                     | Undefined `=` _other values_                       | Boolean  | a.undefinedProp `=` 42                              | False  |
| Inégalité           | Undefined `#` Undefined                            | Boolean  | a.undefinedProp `#` b.undefinedProp | False  |
|                     | Undefined `#` Null                                 | Boolean  | a.undefinedProp `#` b.nullProp      | False  |
|                     | Undefined `#` _other values_                       | Boolean  | a.undefinedProp `#` 42                              | True   |
| Supérieur à         | Undefined `>` string, Date, Time, Boolean, number  | Boolean  | a.undefinedProp `>` "abc"                           | False  |
| Inférieur à         | Undefined `<` string, Date, Time, Boolean, number  | Boolean  | a.undefinedProp `<` "abc"                           | False  |
| Supérieur ou égal à | Undefined `>=` string, Date, Time, Boolean, number | Boolean  | a.undefinedProp `>=` "abc"                          | False  |
| Inférieur ou égal à | Undefined `<=` string, Date, Time, Boolean, number | Boolean  | a.undefinedProp `<=` "abc"                          | False  |

_other values_ are expressions of any type with a value neither Undefined nor Null.

:::info

Comparisons of Undefined values with Pointer, Picture, Blob, Object, Collection, Undefined or Null values using Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported and return an error.

:::

## Exemples

Here are the different results of the `Undefined` command as well as the `Null` command with object properties, depending on the context:

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
