---
id: null-undefined
title: Null e indefinido
---

Null e Indefinido son tipos de datos que manejan los casos en los que no se conoce el valor de una expresión.

## Null

Null es un tipo de datos especial con un solo valor posible: **null**. Este valor es devuelto por una expresión que no contiene ningún valor.

En el lenguaje 4D y para los atributos de los campos de los objetos, los valores nulos se gestionan a través de la función `Null`. Esta función puede utilizarse con las siguientes expresiones para definir o comparar el valor nulo:

- atributos de objetos
- elementos de colecciones
- variables de tipo objeto, colección, puntero, imagen o variante.

## Indefinido

Indefinido no es realmente un tipo de datos. Denota una variable que aún no ha sido definida. Una función (un método proyecto que devuelve un resultado) puede devolver un valor indefinido si, dentro del método, se asigna al resultado de la función ($0) una expresión indefinida (una expresión calculada con al menos una variable indefinida). Un campo no puede ser indefinido (el comando `Undefined` siempre devuelve False para un campo). Una variable variant tiene **indefinido** como valor por defecto.


## Null operators


| Operación   | Sintaxis                 | Devuelve | Expression                     | Valor |
| ----------- | ------------------------ | -------- | ------------------------------ | ----- |
| Igual       | Null `=` Null            | Boolean  | a.nullProp `=` b.nullProp      | True  |
|             | Null `=` Undefined       | Boolean  | a.nullProp `=` b.undefinedProp | True  |
|             | Null `=` *valor escalar* | Boolean  | a.nullProp `=` 42              | False |
| Desigualdad | Null `#` Null            | Boolean  | a.nullProp `#` b.nullProp      | False |
|             | Null `#` Undefined       | Boolean  | a.nullProp `#` b.undefinedProp | False |
|             | Null `#` *scalar value*  | Boolean  | a.nullProp `#` 42              | True  |

*scalar values* are values of type string, Date, Time, Boolean, number, or Blob. When declared, their [default value](data-types.md#default-values) is neither undefined nor null. Other types (Pointer, Picture, Object, Collection) have undefined or null default value. Ej:

```4d
var $object : Object
var $text : Text

//$object = null
//$text = "" 
```

|

Comparisons with Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported with Null values and return an error.

:::

## Undefined operators


| Operación         | Sintaxis                                              | Devuelve | Expression                          | Valor |
| ----------------- | ----------------------------------------------------- | -------- | ----------------------------------- | ----- |
| Igual             | Undefined `=` Undefined                               | Boolean  | a.undefinedProp `=` b.undefinedProp | True  |
|                   | Undefined `=` Null                                    | Boolean  | a.undefinedProp `=` c.nullProp      | True  |
|                   | Undefined `=` *other values*                          | Boolean  | a.undefinedProp `=` 42              | False |
| Desigualdad       | Undefined `#` Undefined                               | Boolean  | a.undefinedProp `#` b.undefinedProp | False |
|                   | Undefined `#` Null                                    | Boolean  | a.undefinedProp `#` b.nullProp      | False |
|                   | Undefined `#` Undefined                               | Boolean  | a.undefinedProp `#` b.undefinedProp | False |
|                   | Undefined `#` *other values*                          | Boolean  | a.undefinedProp `#` 42              | True  |
| Mayor que         | Undefined `>` string, Date, Time, Boolean, number  | Boolean  | a.undefinedProp `>` "abc"        | False |
| Menor que         | Undefined `<` string, Date, Time, Boolean, number  | Boolean  | a.undefinedProp `<` "abc"        | False |
| Mayor o igual que | Undefined `>=` string, Date, Time, Boolean, number | Boolean  | a.undefinedProp `>=` "abc"       | False |
| Menor o igual que | Undefined `<=` string, Date, Time, Boolean, number | Boolean  | a.undefinedProp `<=` "abc"       | False |

*other values* are expressions of any type with a value neither Undefined nor Null.

|

Comparisons of Undefined values with Pointer, Picture, Blob, Object, Collection, Undefined or Null values using Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported and return an error.

:::

## Ejemplos

Aquí están los diferentes resultados del comando `Undefined` así como del comando `Null` con las propiedades de los objetos, dependiendo del contexto:

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

