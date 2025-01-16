---
id: null-undefined
title: Null e indefinido
---

Null e Indefinido son tipos de datos que manejan los casos en los que no se conoce el valor de una expresión.

## Null

Null es un tipo de datos especial con un solo valor posible: **null**. Este valor es devuelto por una expresión que no contiene ningún valor. Al intentar leer una propiedad de un valor **null** se produce un error.

En el lenguaje 4D y para los atributos de los campos de los objetos, los valores nulos se gestionan a través de la función `Null`. Esta función puede utilizarse con las siguientes expresiones para definir o comparar el valor nulo:

- atributos de objetos
- elementos de colecciones
- variables de tipo objeto, colección, puntero, imagen o variante (ver también [Null como valor por defecto](data-types.md#null-as-default-value).

## Indefinido

Indefinido no es realmente un tipo de datos. Denota una variable que aún no ha sido definida. La evaluación de una propiedad de objeto también puede producir un valor indefinido. La lectura de una propiedad de valor indefinido devuelve **undefined**.

Una variable variante tiene **undefined** como [valor por defecto](data-types.md#default-values).

Un campo no puede ser indefinido (el comando `Undefined` siempre devuelve False para un campo).

Normalmente, al intentar leer o asignar expresiones indefinidas, 4D generará errores, excepto en los siguientes casos:

- Asignar un valor indefinido a variables (excepto arrays) tiene el mismo efecto que llamar a [`CLEAR VARIABLE`](https://doc.4d.com/4dv20/help/command/en/page89.html) con ellas:

```4d
     var $o : Object
     var $val : Integer
     $val:=10 //$val=10
     $val:=$o.a //$o. es indefinido (no hay error) y la asignación de este valor borra la variable
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
     mymethod($o.a) //Pasar un parámetro indefinido
     
      //En el método mymethod
     #Declare ($myText : Text) //El tipo de parámetro es texto
      // $myText contiene ""
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

Cuando se esperan expresiones de un tipo dado en su código 4D, puede asegurarse de que tienen el tipo correcto incluso cuando se evalúan como indefinido rodeándolas con el comando cast 4D apropiado: `String`, `Num`, `Date`, `Time`, `Bool`. Estos comandos devuelven un valor vacío del tipo especificado cuando la expresión se evalúa como indefinida. Por ejemplo:

```4d
 $myString:=Lowercase(String($o.a.b)) //asegurarse de obtener un valor de cadena aunque sea indefinido
  //para evitar errores en el código
```

:::

## Operadores Null

| Operación   | Sintaxis                | Devuelve | Expression                                                     | Valor |
| ----------- | ----------------------- | -------- | -------------------------------------------------------------- | ----- |
| Igual       | Null `=` Null           | Boolean  | a.nullProp `=` b.nullProp      | True  |
|             | Null `=` Undefined      | Boolean  | a.nullProp `=` b.undefinedProp | True  |
|             | Null `=` *scalar value* | Boolean  | a.nullProp `=` 42                              | False |
| Desigualdad | Null `#` Null           | Boolean  | a.nullProp `#` b.nullProp      | False |
|             | Null `#` Undefined      | Boolean  | a.nullProp `#` b.undefinedProp | False |
|             | Null `#` *scalar value* | Boolean  | a.nullProp `#` 42                              | True  |

Los *valores escalares* son valores de tipo cadena, Fecha, Hora, Booleano, número o Blob. Cuando se declaran, su [valor por defecto](data-types.md#default-values) no es ni indefinido ni null. Otros tipos (Puntero, Imagen, Objeto, Colección) tienen un valor por defecto indefinido o null. Ej:

```4d
var $object : Object
var $text : Text

//$object = null
//$text = "" 
```

:::info

Las comparaciones con los operadores Mayor que (`>`), Menor que (`<`), Greater than or equal to (`>=`) y Menor o igual que (`<=`) no son soportadas con valores Null y devuelven un error.

:::

## Operadores indefinidos

| Operación         | Sintaxis                                  | Devuelve | Expression                                                          | Valor |
| ----------------- | ----------------------------------------- | -------- | ------------------------------------------------------------------- | ----- |
| Igual             | Undefined `=` Undefined                   | Boolean  | a.undefinedProp `=` b.undefinedProp | True  |
|                   | Undefined `=` Null                        | Boolean  | a.undefinedProp `=` c.nullProp      | True  |
|                   | Undefined `=` *otros valores*             | Boolean  | a.undefinedProp `=` 42                              | False |
| Desigualdad       | Undefined `#` Undefined                   | Boolean  | a.undefinedProp `#` b.undefinedProp | False |
|                   | Undefined `#` Null                        | Boolean  | a.undefinedProp `#` b.nullProp      | False |
|                   | Undefined `#` *otros valores*             | Boolean  | a.undefinedProp `#` 42                              | True  |
| Mayor que         | Undefined `>` string, Date, Time, number  | Boolean  | a.undefinedProp `>` "abc"                           | False |
| Menor que         | Undefined `<` string, Date, Time, number  | Boolean  | a.undefinedProp `<` "abc"                           | False |
| Mayor o igual que | Undefined `>=` string, Date, Time, number | Boolean  | a.undefinedProp `>=` "abc"                          | False |
| Menor o igual que | Undefined `<=` string, Date, Time, number | Boolean  | a.undefinedProp `<=` "abc"                          | False |

*otros valores* son expresiones de todo tipo con un valor ni Undefined ni Null.

:::info

Las comparaciones de valores Undefined con valores Pointer, Picture, Boolean, Blob, Object, Collection, Undefined o Null mediante los operadores Mayor que (`>`), Menor que (`<`), Mayor o igual que (`>=`) y Menor o igual que (`<=`) no se admiten y devuelven un error.

:::

## Ejemplos

A continuación se muestran los diferentes resultados del comando `Undefined` así como del comando `Null` con propiedades de objetos, dependiendo del contexto:

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
