---
id: null-undefined
title: Null e indefinido
---

## Null

Null es un tipo de datos especial con un solo valor posible: **null**. Este valor es devuelto por una expresión que no contiene ningún valor.

En el lenguaje 4D y para los atributos de los campos de los objetos, los valores nulos se gestionan a través de la función `Null`. Esta función puede utilizarse con las siguientes expresiones para definir o comparar el valor nulo:

- atributos de objetos
- elementos de colecciones
- variables de tipo objeto, colección, puntero, imagen o variante.

## Indefinido

Indefinido no es realmente un tipo de datos. Denota una variable que aún no ha sido definida. Una función (un método proyecto que devuelve un resultado) puede devolver un valor indefinido si, dentro del método, se asigna al resultado de la función ($0) una expresión indefinida (una expresión calculada con al menos una variable indefinida). Un campo no puede ser indefinido (el comando `Undefined` siempre devuelve False para un campo). Una variable variant tiene **indefinido** como valor por defecto.

## Ejemplos

Aquí están los diferentes resultados del comando `Undefined` así como del comando `Null` con las propiedades de los objetos, dependiendo del contexto:

```4d
C_OBJECT($vEmp)
$vEmp:=New object
$vEmp.name:="Smith"
$vEmp.children:=Null

$undefined:=Undefined($vEmp.name) // False
$null:=($vEmp.name=Null) //False

$undefined:=Undefined($vEmp.children) // False
$null:=($vEmp.children=Null) //True

$undefined:=Undefined($vEmp.parent) // True
$null:=($vEmp.parent=Null) //True
```
