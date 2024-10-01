---
id: null-undefined
title: Null et Undefined
---

Null et Undefined sont des types de données qui gèrent les cas où la valeur d'une expression n'est pas connue.

## Null

Null est un type de données particulier avec une seule valeur possible : **null**. Cette valeur est retournée par une expression qui ne contient aucune valeur. Essayer de lire une propriété d'une valeur **null** retourne une erreur.

Dans le langage 4D et pour les attributs des champs objets, les valeurs null sont gérées via la fonction `Null`. Cette commande peut être utilisée avec les expressions suivantes pour fixer ou comparer la valeur null :

- attributs d'objets
- éléments de collections
- variables de type object, collection, pointer, picture ou variant (voir aussi [Null comme valeur par défaut](data-types.md#null-as-default-value)).

## Undefined

Undefined (Indéfinie) n'est pas véritablement un type de données. Il indique une variable n'ayant pas encore été définie. L'évaluation d'une propriété d'objet peut également produire une valeur undefined. La lecture d'une propriété dont la valeur est indéfinie renvoie **undefined**.

Une variable de type Variant a **undefined** comme [valeur par défaut](data-types.md#valeurs-par-défaut).

Un champ ne peut pas être indéfini (la commande `Undefined` retourne toujours Faux pour un champ).

En règle générale, lorsque le code tente de lire ou d'assigner des expressions indéfinies, 4D générera des erreurs, excepté dans les cas suivants :

- Affecter une valeur indéfinie aux variables (à l'exception des tableaux) a le même effet que d'appeler [`CLEAR VARIABLE`](https://doc.4d.com/4dv20/help/command/fr/page89.html) avec elles :

```4d
     var $o : Object
     var $val : Integer
     $val:=10 //$val=10
     $val:=$o.a //$o.a est undefined (pas d'erreur), assigner cette valeur efface la variable
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
     mymethod($o.a) //passage d'un paramètre undefined
     
      //Dans la méthode mymethod
     #Declare ($myText : Text) //Paramètre de type texte
      // $myText contient ""
```

- Une expression de condition est automatiquement convertie à Faux lorsqu'elle est évaluée undefined avec les mots-clés If et Case of :

```4d
     var $o : Object
     If($o.a) // false
     End if
     Case of
        :($o.a) // false
     End case
```

:::tip

Lorsque des expressions d'un type donné sont attendues dans votre code 4D, vous pouvez vous assurer qu'elles auront le type souhaité même en cas de valeur Undefined en les encadrant avec la commande de transtypage 4D appropriée : `String`, `Num`, `Date`, `Time`, `Bool`. Ces commandes retournent une valeur vide du type spécifié lorsque l'expression est évaluée à Indéfinie. Par exemple :

```4d
 $myString:=Lowercase(String($o.a.b)) //pour être sûr d'obtenir une valeur texte même si indéfinie
  //afin d'éviter des erreurs dans le code
```

:::

## Opérateurs sur les Null

| Opération | Syntaxe                    | Retourne | Expression                                                     | Valeur |
| --------- | -------------------------- | -------- | -------------------------------------------------------------- | ------ |
| Egalité   | Null `=` Null              | Boolean  | a.nullProp `=` b.nullProp      | True   |
|           | Null `=` Undefined         | Boolean  | a.nullProp `=` b.undefinedProp | True   |
|           | Null `=` *valeur scalaire* | Boolean  | a.nullProp `=` 42                              | False  |
| Inégalité | Null `#` Null              | Boolean  | a.nullProp `#` b.nullProp      | False  |
|           | Null `#` Undefined         | Boolean  | a.nullProp `#` b.undefinedProp | False  |
|           | Null `#` *valeur scalaire* | Boolean  | a.nullProp `#` 42                              | True   |

Les *valeurs scalaires* sont des valeurs de type chaîne, date, heure, booléen, numérique ou Blob. Lorsqu'elles sont déclarées, leur [valeur par défaut](data-types.md#valeurs-par-defaut) n'est ni undefined ni null. Les autres types (pointeur, image, objet, collection) ont une valeur par défaut undefined ou null. Ex :

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

| Opération           | Syntaxe                                   | Retourne | Expression                                                          | Valeur |
| ------------------- | ----------------------------------------- | -------- | ------------------------------------------------------------------- | ------ |
| Egalité             | Undefined `=` Undefined                   | Boolean  | a.undefinedProp `=` b.undefinedProp | True   |
|                     | Undefined `=` Null                        | Boolean  | a.undefinedProp `=` c.nullProp      | True   |
|                     | Undefined `=` *autres valeurs*            | Boolean  | a.undefinedProp `=` 42                              | False  |
| Inégalité           | Undefined `#` Undefined                   | Boolean  | a.undefinedProp `#` b.undefinedProp | False  |
|                     | Undefined `#` Null                        | Boolean  | a.undefinedProp `#` b.nullProp      | False  |
|                     | Undefined `#` *autres valeurs*            | Boolean  | a.undefinedProp `#` 42                              | True   |
| Supérieur à         | Undefined `>` string, Date, Time, number  | Boolean  | a.undefinedProp `>` "abc"                           | False  |
| Inférieur à         | Undefined `<` string, Date, Time, number  | Boolean  | a.undefinedProp `<` "abc"                           | False  |
| Supérieur ou égal à | Undefined `>=` string, Date, Time, number | Boolean  | a.undefinedProp `>=` "abc"                          | False  |
| Inférieur ou égal à | Undefined `<=` string, Date, Time, number | Boolean  | a.undefinedProp `<=` "abc"                          | False  |

*autres valeurs* sont des expressions de tout type dont la valeur n'est ni Undefined ni Null.

:::info

Comparisons of Undefined values with Pointer, Picture, Boolean, Blob, Object, Collection, Undefined or Null values using Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported and return an error.

:::

## Exemples

Cet exemple compare les différents résultats de la commande `Undefined` ainsi que de la commande `Null` avec les propriétés d'objet, en fonction du contexte :

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

Exemples de résultats de comparaisons avec des valeurs undefined et null :

```4d
var $result : Boolean
var $vObj : Object
var $vVar : Variant

$vObj:=New object
$vObj.null:=Null
//noter que $vVar n'est pas assignée 

$result:=($vObj.undefined=42) //False
$result:=($vObj.undefined=$vObj.null) //True
$result:=($vObj.undefined=$vVar)  //True

$result:=($vObj.undefined#$vObj.null) //False
$result:=($vObj.undefined#42) //True
$result:=($vObj.undefined#$vVar) //False

$result:=($vObj.undefined>"hello") //False
$result:=($vObj.undefined>$vVar)  //Erreur
$result:=($vObj.undefined>$vObj.null)  //Erreur
$result:=($vVar < 42) //False

```
