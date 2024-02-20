---
id: null-undefined
title: Null e indefinido
---

Null e Indefinido son tipos de datos que manejan los casos en los que no se conoce el valor de una expresión.

## Null

Null is a special data type with only one possible value: **null**. Este valor es devuelto por una expresión que no contiene ningún valor. Trying to read a property of a **null** value returns an error.

In the 4D language and for object field attributes, null values are managed through the `Null` function. Esta función puede utilizarse con las siguientes expresiones para definir o comparar el valor nulo:

- atributos de objetos
- elementos de colecciones
- variables of the object, collection, pointer, picture, or variant type (see also [Null as default value](data-types.md#null-as-default-value).

## Indefinido

Indefinido no es realmente un tipo de datos. Denota una variable que aún no ha sido definida. La evaluación de una propiedad de objeto también puede producir un valor indefinido. Reading a property of an undefined value returns **undefined**.

A variant variable has **undefined** as [default value](data-types.md#default-values).

A field cannot be undefined (the `Undefined` command always returns False for a field).

Normalmente, al intentar leer o asignar expresiones indefinidas, 4D generará errores, excepto en los siguientes casos:

- Assigning an undefined value to variables (except arrays) has the same effect as calling [`CLEAR VARIABLE`](https://doc.4d.com/4dv20/help/command/en/page89.html) with them:

```4d
     var $o : Object
     var $val : Integer
     $val:=10 //$val=10
     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable
      //$val=0
```

- La asignación de un valor indefinido a una propiedad de objeto existente reinicializa o borra su valor, dependiendo de su tipo:
  - Objeto, colección, puntero: Null
  - Imagen: imagen vacía
  - Booleano: False
  - Cadena: ""
  - Número: 0
  - Fecha: !00-00-00! Date: !00-00-00! if "Use date type instead of ISO date format in objects" setting is enabled, otherwise ""
  - Hora: 0 (número de ms)
  - Indefinido, Null: sin cambios

```4d
     var $o : Object
     $o:=New object("a";2)
     $o.a:=$o.b //$o.a=0
```

- La asignación de un valor indefinido a una propiedad de objeto no existente no hace nada.

- Un valor indefinido pasado como parámetro a un método proyecto se convierte automáticamente en 0 o "" según el tipo de parámetro declarado.

```4d
     var $o : Object
     mymethod($o.a) //pass an undefined parameter
     
      //In mymethod method
     #Declare ($myText : Text) //parameter type is text
      // $myText contains ""
```

- Una expresión de condición se convierte automáticamente en falsa cuando se evalúa a indefinido con las palabras clave If y Case of:

```4d
     var $o : Object
     If($o.a) // false
     End if
     Case of
        :($o.a) // false
     End case
```

:::tip

When expressions of a given type are expected in your 4D code, you can make sure they have the correct type even when evaluated to undefined by surrounding them with the appropriate 4D cast command: `String`, `Num`, `Date`, `Time`, `Bool`. Estos comandos devuelven un valor vacío del tipo especificado cuando la expresión se evalúa como indefinida. Por ejemplo:

```4d
 $myString:=Lowercase(String($o.a.b)) //make sure you get a string value even if undefined
  //to avoid errors in the code
```

:::

## Operadores Null

| Operación   | Sintaxis                | Devuelve | Expression                     | Valor |
| ----------- | ----------------------- | -------- | ------------------------------ | ----- |
| Igual       | Null `=` Null           | Boolean  | a.nullProp `=` b.nullProp      | True  |
|             | Null `=` Undefined      | Boolean  | a.nullProp `=` b.undefinedProp | True  |
|             | Null `=` _scalar value_ | Boolean  | a.nullProp `=` 42              | False |
| Desigualdad | Null `#` Null           | Boolean  | a.nullProp `#` b.nullProp      | False |
|             | Null `#` Undefined      | Boolean  | a.nullProp `#` b.undefinedProp | False |
|             | Null `#` _scalar value_ | Boolean  | a.nullProp `#` 42              | True  |

_scalar values_ are values of type string, Date, Time, Boolean, number, or Blob. When declared, their [default value](data-types.md#default-values) is neither undefined nor null. Otros tipos (Puntero, Imagen, Objeto, Colección) tienen un valor por defecto indefinido o null. Ej:

```4d
var $object : Object
var $text : Text

//$object = null
//$text = "" 
```

:::info

Comparisons with Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported with Null values and return an error.

:::

## Operadores indefinidos

| Operación         | Sintaxis                                           | Devuelve | Expression                          | Valor |
| ----------------- | -------------------------------------------------- | -------- | ----------------------------------- | ----- |
| Igual             | Undefined `=` Undefined                            | Boolean  | a.undefinedProp `=` b.undefinedProp | True  |
|                   | Undefined `=` Null                                 | Boolean  | a.undefinedProp `=` c.nullProp      | True  |
|                   | Undefined `=` _otros valores_                      | Boolean  | a.undefinedProp `=` 42              | False |
| Desigualdad       | Undefined `#` Undefined                            | Boolean  | a.undefinedProp `#` b.undefinedProp | False |
|                   | Undefined `#` Null                                 | Boolean  | a.undefinedProp `#` b.nullProp      | False |
|                   | Undefined `#` _otros valores_                      | Boolean  | a.undefinedProp `#` 42              | True  |
| Mayor que         | Undefined `>` string, Date, Time, Boolean, number  | Boolean  | a.undefinedProp `>` "abc"           | False |
| Menor que         | Undefined `<` string, Date, Time, Boolean, number  | Boolean  | a.undefinedProp `<` "abc"           | False |
| Mayor o igual que | Undefined `>=` string, Date, Time, Boolean, number | Boolean  | a.undefinedProp `>=` "abc"          | False |
| Menor o igual que | Undefined `<=` string, Date, Time, Boolean, number | Boolean  | a.undefinedProp `<=` "abc"          | False |

_other values_ are expressions of any type with a value neither Undefined nor Null.

:::info

Comparisons of Undefined values with Pointer, Picture, Blob, Object, Collection, Undefined or Null values using Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported and return an error.

:::

## Ejemplos

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

Ejemplos de resultados de comparación con valores indefinidos y null:

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
