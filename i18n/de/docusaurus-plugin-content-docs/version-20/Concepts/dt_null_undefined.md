---
id: null-undefined
title: Null und Undefiniert
---

Null und Undefiniert werden verwendet, wenn der Wert eines Ausdrucks unbekannt ist.

## Null

Null ist ein spezieller Datentyp mit nur einem möglichen Wert: **Null**. Dieser Wert wird von einem Ausdruck zurückgegeben, der gar keinen Wert enthält.

In der 4D Programmiersprache und für Objekt Feldattribute werden Nullwerte über die Funktion `Null` verwaltet. Sie lässt sich mit folgenden Ausdrücken zum Setzen oder Vergleichen des Nullwerts verwenden:

- Objekt Attribute
- Collection Elemente
- Variablen vom Typ Objekt, Collection, Zeiger, Bild oder Variant.

## Undefiniert

Undefiniert ist kein Datentyp. Er bezeichnet eine Variable, die noch nicht definiert ist. Eine Funktion (eine Projektmethode, die ein Ergebnis zurückgibt) kann einen undefinierten Wert zurückgeben, wenn in der Methode dem Ergebnis der Funktion ($0) ein undefinierter Ausdruck zugewiesen wurde (Ausdruck mit mindestens einer undefinierten Variablen). Ein Datenfeld kann nicht undefiniert sein (die Funktion `Undefined` gibt für ein Datenfeld immer Falsch zurück). Eine Variable vom Typ Variant hat **undefiniert** als Standardwert.


## Null operators


| Operation    | Syntax                  | Ergibt  | Ausdruck                       | Wert   |
| ------------ | ----------------------- | ------- | ------------------------------ | ------ |
| Gleichheit   | Null `=` Null           | Boolean | a.nullProp `=` b.nullProp      | Wahr   |
|              | Null `=` Undefined      | Boolean | a.nullProp `=` b.undefinedProp | Wahr   |
|              | Null `=` *scalar value* | Boolean | a.nullProp `=` 42              | Falsch |
| Ungleichheit | Null `#` Null           | Boolean | a.nullProp `#` b.nullProp      | Falsch |
|              | Null `#` Undefined      | Boolean | a.nullProp `#` b.undefinedProp | Falsch |
|              | Null `#` *scalar value* | Boolean | a.nullProp `#` 42              | Wahr   |

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


| Operation               | Syntax                                                | Ergibt  | Ausdruck                            | Wert   |
| ----------------------- | ----------------------------------------------------- | ------- | ----------------------------------- | ------ |
| Gleichheit              | Undefined `=` Undefined                               | Boolean | a.undefinedProp `=` b.undefinedProp | Wahr   |
|                         | Undefined `=` Null                                    | Boolean | a.undefinedProp `=` c.nullProp      | Wahr   |
|                         | Undefined `=` *other values*                          | Boolean | a.undefinedProp `=` 42              | Falsch |
| Ungleichheit            | Undefined `#` Undefined                               | Boolean | a.undefinedProp `#` b.undefinedProp | Falsch |
|                         | Undefined `#` Null                                    | Boolean | a.undefinedProp `#` b.nullProp      | Falsch |
|                         | Undefined `#` *other values*                          | Boolean | a.undefinedProp `#` 42              | Wahr   |
| Größer als              | Undefined `>` string, Date, Time, Boolean, number  | Boolean | a.undefinedProp `>` "abc"        | Falsch |
| Kleiner als             | Undefined `<` string, Date, Time, Boolean, number  | Boolean | a.undefinedProp `<` "abc"        | Falsch |
| Größer als oder gleich  | Undefined `>=` string, Date, Time, Boolean, number | Boolean | a.undefinedProp `>=` "abc"       | Falsch |
| Kleiner als oder gleich | Undefined `<=` string, Date, Time, Boolean, number | Boolean | a.undefinedProp `<=` "abc"       | Falsch |

*other values* are expressions of any type with a value neither Undefined nor Null.

:::info

Comparisons of Undefined values with Pointer, Picture, Blob, Object, Collection, Undefined or Null values using Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported and return an error.

:::

## Beispiele

Hier sehen Sie je nach Kontext unterschiedliche Ergebnisse mit `Undefined` sowie dem Befehl `Null` mit Objekteigenschaften:

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

