---
id: count-in-array
title: Count in array
slug: /commands/count-in-array
displayed_sidebar: docs
---

<!--REF #_command_.Count in array.Syntax-->**Count in array** ( *array* ; *valor* ) : Integer<!-- END REF-->
<!--REF #_command_.Count in array.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array donde efectuar el conteo |
| valor | Expression | &#8594;  | Valor a contar |
| Resultado | Integer | &#8592; | Número de ocurrencias encontradas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Count in array.Summary-->El comando Count in array devuelve el número de ocurrencias de *valor* en el *array*.<!-- END REF-->

Este comando puede utilizarse con los siguientes tipos de array: Texto, Numérico, Fecha, Puntero y Booleano. Los parámetros *a* *rray* y *valor* deben ser del mismo tipo o de un tipo compatible.

**Nota:** con arrays Objeto, sólo puede utilizar referencias a objetos en el parámetro *valor*.

Si ningún elemento del *array* corresponde al *valor*, el comando devuelve 0.

#### Ejemplo 1 

El siguiente ejemplo permite visualizar el número de líneas seleccionadas en un list box: 

```4d
  //tBList es el nombre de un array de una columna de un List box
 ALERT(String(Count in array(tBList;True))+" línea(s) seleccionada(s) en el list box")
```

#### Ejemplo 2 

Desea contar las referencias a objetos en un array objeto:

```4d
 ARRAY OBJECT($objects;100)
 $o1:={a10;b"xyz"}
 $o2:={a10;b"xyz"}
 
 $objects{20}:=$o1
 $objects{21}:=$o1
 $objects{22}:=$o1
 
 var $n : Integer
 
 $n:=Count in array($objects;$o1) // n = 3 
 $n:=Count in array($objects;$o2) // n = 0
```

#### Ver también 

[Find in array](find-in-array.md)  
[Find in sorted array](find-in-sorted-array.md)  