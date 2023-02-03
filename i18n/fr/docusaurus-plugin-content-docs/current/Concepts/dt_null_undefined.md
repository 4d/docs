---
id: null-undefined
title: Null et Indefinie
---

Null et Undefined sont des types de données qui gèrent les cas où la valeur d'une expression n'est pas connue.

## Null

Null est un type de données particulier avec une seule valeur possible : **null**. Cette valeur est retournée par une expression qui ne contient aucune valeur.

Dans le langage de 4D et pour les attributs des champs objets, les valeurs null sont gérées via la commande `Null`. Cette commande peut être utilisée avec les expressions suivantes pour fixer ou comparer la valeur null :

- attributs d'objets
- éléments de collections
- variables de type objet, collection, pointeur, image ou variant.

## Undefined

Indéfinie n'est pas véritablement un type de données. Une variable dite "indéfinie" est une variable n'ayant pas encore été définie. Une fonction utilisateur (c'est-à-dire une méthode projet qui retourne une valeur) peut retourner une valeur indéfinie si, à l'intérieur de la méthode, le résultat de la fonction ($0) est assigné à une expression indéfinie (une expression issue d'un calcul effectué avec au moins une variable indéfinie). Un champ ne peut pas être indéfini (la commande `Indefinie` retourne toujours Faux pour un champ). Une variable variant porte la valeur par défaut **indéfini**.


## Null operators


| Opération | Syntaxe                 | Retourne | Expression                     | Value |
| --------- | ----------------------- | -------- | ------------------------------ | ----- |
| Egalité   | Null `=` Null           | Boolean  | a.nullProp `=` b.nullProp      | Vrai  |
|           | Null `=` Undefined      | Boolean  | a.nullProp `=` b.undefinedProp | Vrai  |
|           | Null `=` *scalar value* | Boolean  | a.nullProp `=` 42              | False |
| Inégalité | Null `#` Null           | Boolean  | a.nullProp `#` b.nullProp      | False |
|           | Null `#` Undefined      | Boolean  | a.nullProp `#` b.undefinedProp | False |
|           | Null `#` *scalar value* | Boolean  | a.nullProp `#` 42              | Vrai  |

*scalar values* are values of type string, Date, Time, Boolean, number, or Blob. When declared, their [default value](data-types.md#default-values) is neither undefined nor null. Other types (Pointer, Picture, Object, Collection) have undefined or null default value. Ex:

```4d
var $object : Object
var $text : Text

//$object = null
//$text = "" 
```

:::info

Comparisons with Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported with Null values and return an error.

:::

## Undefined operators


| Opération           | Syntaxe                                               | Retourne | Expression                          | Value |
| ------------------- | ----------------------------------------------------- | -------- | ----------------------------------- | ----- |
| Egalité             | Undefined `=` Undefined                               | Boolean  | a.undefinedProp `=` b.undefinedProp | Vrai  |
|                     | Undefined `=` Null                                    | Boolean  | a.undefinedProp `=` c.nullProp      | Vrai  |
|                     | Undefined `=` *other values*                          | Boolean  | a.undefinedProp `=` 42              | False |
| Inégalité           | Undefined `#` Undefined                               | Boolean  | a.undefinedProp `#` b.undefinedProp | False |
|                     | Undefined `#` Null                                    | Boolean  | a.undefinedProp `#` b.nullProp      | False |
|                     | Undefined `#` Undefined                               | Boolean  | a.undefinedProp `#` b.undefinedProp | False |
|                     | Undefined `#` *other values*                          | Boolean  | a.undefinedProp `#` 42              | Vrai  |
| Supérieur à         | Undefined `>` string, Date, Time, Boolean, number  | Boolean  | a.undefinedProp `>` "abc"        | False |
| Inférieur à         | Undefined `<` string, Date, Time, Boolean, number  | Boolean  | a.undefinedProp `<` "abc"        | False |
| Supérieur ou égal à | Undefined `>=` string, Date, Time, Boolean, number | Boolean  | a.undefinedProp `>=` "abc"       | False |
| Inférieur ou égal à | Undefined `<=` string, Date, Time, Boolean, number | Boolean  | a.undefinedProp `<=` "abc"       | False |

*other values* are expressions of any type with a value neither Undefined nor Null.

:::info

Comparisons of Undefined values with Pointer, Picture, Blob, Object, Collection, Undefined or Null values using Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported and return an error.

:::

## Exemples

Cet exemple compare les différents résultats de la commande `Indefinie` et de la commande `Null` appliquées aux propriétés d'objets, en fonction du contexte :

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

Examples of comparison results with undefined and null values:

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

