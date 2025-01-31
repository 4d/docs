---
id: find-in-sorted-array
title: Find in sorted array
slug: /commands/find-in-sorted-array
displayed_sidebar: docs
---

<!--REF #_command_.Find in sorted array.Syntax-->**Find in sorted array** ( *array* ; *valor* ; > or < {; *posPrim* {; *posUlt*}} ) : Boolean<!-- END REF-->
<!--REF #_command_.Find in sorted array.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array a buscar |
| valor | Expression | &#8594;  | Valor del mismo tipo a buscar en el array |
| > or < | Operador | &#8594;  | > si el array está en orden ascendente, < si el está en orden descendente |
| posPrim | Integer | &#8592; | Posición de su primera aparición si se encuentra el valor; de lo contrario la posición donde debe insertarse el valor |
| posUlt | Integer | &#8592; | Posición de su última ocurrencia si se encuentra el valor; de lo contrario lo mismo que posPrim |
| Resultado | Boolean | &#8592; | True si al menos un elemento en el array corresponde al valor, de lo contrario False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Find in sorted array.Summary-->**Tema:** Arrays

El nuevo comando **Find in sorted array** devuelve **true** si al menos un elemento en el *array* ordenado con el *valor* y opcionalmente devuelve la posición de los elementos correspondientes.<!-- END REF--> A diferencia de [Find in array](find-in-array.md), **Find in sorted array** sólo funciona con un *array* ordenado y ofrece información sobre la posición de las ocurrencias, lo que le permite insertar elementos si es necesario.

El *array* debe estar ya ordenado y debe coincidir con el orden especificado por el parámetro *\> or <* (es decir, el símbolo "mayor que" para el orden ascendente y el símbolo "menor que" para el orden descendente). El comando **Find in sorted array** tomará ventaja de la ordenación y uso de un algoritmo de *búsqueda binaria*, que es mucho más eficiente para grandes arrays (para más información, consulte la [página algoritmo de búsqueda binaria en Wikipedia](http://en.wikipedia.org/wiki/Binary%5Fsearch%5Falgorithm)). Sin embargo, si el array no está ordenado correctamente, el resultado puede ser incorrecto.

**Nota:** cuando se utiliza este comando con un array ordenado de tipo Object, sólo se puede pasar una referencia a objeto en *valor*. 

El comando ignorará la indicación de ordenación y se comporta como un [Find in array](find-in-array.md) estándar (búsqueda secuencial, devolviendo -1 para *posPrim* y *posUlt* si no se encuentra el *valor*) en cualquiera de los siguientes casos:

* si el tipo de array no se puede ordenar (por ejemplo arrays puntero),
* si el array es de tipo booleano (no preciso),
* si la base de datos no es Unicode (modo compatibilidad) y el array es una cadena o array texto,
* cuando se busca en un array text para una cadena que incluye un comodín ('@') al principio o en el medio de la cadena (utilizando una búsqueda binaria con un carácter comodín no es posible porque los elementos correspondientes pueden no ser contiguos en el array).

En caso de que el comando devuelva **False**, el valor devuelto en *posPrim* se puede pasar a [INSERT IN ARRAY](insert-in-array.md) para insertar el *valor*en el array manteniendo el array ordenado. Esta secuencia es más rápida que la inserción de un nuevo elemento al final del array y luego llamar a [SORT ARRAY](sort-array.md) para moverlo al lugar correcto.  
  
El valor devuelto en *posUlt* se puede utilizar en conjunto con el valor devuelto en *posPrim* para iterar sobre cada elemento del array correspondiente al *valor* (vía un [ARRAY TO LIST](array-to-list.md)) o para encontrar el número total de ocurrencias (como lo encontraría [Count in array](count-in-array.md), pero más rápido).

#### Ejemplo 1 

Usted desea insertar un valor, si es necesario, manteniendo el array ordenado:

```4d
 var $pos : Integer
 If(Find in sorted array($array ;$value ;>;$pos)
    ALERT("Found at pos "+String($pos))
 Else
    INSERT IN ARRAY($array ;$pos)
    $array{$pos}:=$value
 End if
```

#### Ejemplo 2 

  
Usted quiere encontrar el número de ocurrencias de las cadenas que comienzan por "test" y crear una cadena que concatena todos estos elementos:

```4d
 var $posFirst ;$posLast : Integer
 var $output : Text
 If(Find in sorted array($array ;"test@";>;$posFirst ;$posLast))
    $output:="Found "+String($posLast-$posFirst+1)+" results :\n"
 End if
 For($i ;$posFirst ;$posLast)
    $output:=$output+$array{$i}+"\n"
 End for
```

#### Ver también 

[Count in array](count-in-array.md)  
[Find in array](find-in-array.md)  
[SORT ARRAY](sort-array.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1333 |
| Hilo seguro | &check; |


