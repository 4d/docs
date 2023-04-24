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


## Operadores Null


| Operación   | Sintaxis                 | Devuelve | Expression                     | Valor |
| ----------- | ------------------------ | -------- | ------------------------------ | ----- |
| Igual       | Null `=` Null            | Boolean  | a.nullProp `=` b.nullProp      | True  |
|             | Null `=` Undefined       | Boolean  | a.nullProp `=` b.undefinedProp | True  |
|             | Null `=` *valor escalar* | Boolean  | a.nullProp `=` 42              | False |
| Desigualdad | Null `#` Null            | Boolean  | a.nullProp `#` b.nullProp      | False |
|             | Null `#` Undefined       | Boolean  | a.nullProp `#` b.undefinedProp | False |
|             | Null `#` *valor escalar* | Boolean  | a.nullProp `#` 42              | True  |

*valores escalares* son valores de tipo Cadena, Fecha, Hora, Booleano, Número o Blob. Cuando se declaran, su [valor por defecto](data-types.md#default-values) no es ni indefinido ni null. Otros tipos (Puntero, Imagen, Objeto, Colección) tienen un valor por defecto indefinido o null. Ej:

```4d
var $object : Object
var $text : Text

//$object = null
//$text = "" 
```

|

Las comparaciones con los operadores Mayor que (`>`), Menor que (`<`), Mayor o igual que (`>=`) y Menor o igual que (`<=`) no se admiten con valores Null y devuelven un error.

:::

## Operadores indefinidos


| Operación         | Sintaxis                                              | Devuelve | Expression                          | Valor |
| ----------------- | ----------------------------------------------------- | -------- | ----------------------------------- | ----- |
| Igual             | Indefinido `=` Indefinido                             | Boolean  | a.undefinedProp `=` b.undefinedProp | True  |
|                   | Undefined `=` Null                                    | Boolean  | a.undefinedProp `=` c.nullProp      | True  |
|                   | Undefined `=` *otros valores*                         | Boolean  | a.undefinedProp `=` 42              | False |
| Desigualdad       | Undefined `#` Undefined                               | Boolean  | a.undefinedProp `#` b.undefinedProp | False |
|                   | Undefined `#` Null                                    | Boolean  | a.undefinedProp `#` b.nullProp      | False |
|                   | Undefined `#` *otros valores*                         | Boolean  | a.undefinedProp `#` 42              | True  |
| Mayor que         | Undefined `>` string, Date, Time, Boolean, number  | Boolean  | a.undefinedProp `>` "abc"        | False |
| Menor que         | Undefined `<` string, Date, Time, Boolean, number  | Boolean  | a.undefinedProp `<` "abc"        | False |
| Mayor o igual que | Undefined `>=` string, Date, Time, Boolean, number | Boolean  | a.undefinedProp `>=` "abc"       | False |
| Menor o igual que | Undefined `<=` string, Date, Time, Boolean, number | Boolean  | a.undefinedProp `<=` "abc"       | False |

*otros valores* son expresiones de todo tipo con un valor ni Undefined ni Null.

|

Las comparaciones de valores Undefined con valores Pointer, Picture, Blob, Object, Collection, Undefined o Null mediante los operadores Mayor que (`>`), Menor que (`<`), Mayor o igual que (`>=`) y Menor o igual que (`<=`) no son compatibles y devuelven un error.

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

Ejemplos de resultados de comparación con valores indefinidos y null:

```4d
var $result : Boolean
var $vObj : Object
var $vVar : Variant

$vObj:=New object
$vObj.null:=Null
//note que $vVar no está asignado

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

