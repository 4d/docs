---
id: variant
title: Variant
---

Variant es un tipo de variable que permite encapsular datos de todo tipo válido y estándar en una variable. Normalmente, este tipo de variable puede utilizarse para escribir código genérico que devuelva o reciba valores cuyo tipo no se conoce. Este es el caso, por ejemplo, del código que maneja los atributos de objeto.

Una variable de tipo variant puede contener un valor de los tipos de datos siguientes:

- BLOB
- boolean
- collection
- date
- entero largo
- object
- picture
- pointer
- real
- text
- time
- null
- indefinido

> Las matrices no pueden almacenarse en variables de tipo variant.

Tanto en modo interpretado como en compilado, a una misma variable variant se le pueden asignar contenidos de diferentes tipos. A diferencia de los tipos de variable estándar, el tipo de contenido de la variable variant es diferente del tipo de variable variant mismo. Por ejemplo:

```4d
C_VARIANT($variant)

$variant:="hello world"
$vtype:=Type($variant) // 12 (Is variant)
$vtypeVal:=Value type($variant) // 2 (Is text)

$variant:=42
$vtype:=Type($variant) // 12 (Is variant)
$vtypeVal:=Value type($variant) // 1 (Is real)
```

Se pueden utilizar variables variant en cualquier lugar donde se esperen variables, sólo hay que asegurarse de que el tipo de datos del contenido de la variable es del tipo esperado. Al acceder a las variables de las variantes, sólo se tiene en cuenta su valor actual. Por ejemplo:

```4d
C_VARIANT($v)
$v:="hello world"
$v2:=$v //asignar una variable a otra variable

$t:=Type($v) // 12 (Is variant)
$t2:=Type($v2) // 2 (Is text)
```

Variant se puede utilizar para declarar [parámetros de método](parameters.md) que pueden ser de varios tipos. En este caso, puede construir su código probando el tipo de valor del parámetro, por ejemplo:

```4d
#DECLARE ($param : Variant)
Case of
: (Value type($param)=Is longint)
...
: (Value type($param)=Is text)
...
End case
```

> Cuando las variables variant no son necesarias (es decir, cuando se conoce el tipo de datos), se recomienda utilizar variables de tipo estándar. Las variables de tipo estándar ofrecen un mejor rendimiento, hacen que el código sea más claro y son útiles para que el compilador evite los errores relacionados con el paso de tipos de datos inesperados.
