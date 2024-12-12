---
id: insert-in-array
title: INSERT IN ARRAY
slug: /commands/insert-in-array
displayed_sidebar: docs
---

<!--REF #_command_.INSERT IN ARRAY.Syntax-->**INSERT IN ARRAY** ( *array* ; *posicion* {; *reemplazos*} )<!-- END REF-->
<!--REF #_command_.INSERT IN ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Nombre del array |
| posicion | Integer | &#8594;  | Donde insertar los elementos |
| reemplazos | Integer | &#8594;  | Número de elementos a insertar, o 1 elemento si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.INSERT IN ARRAY.Summary-->El comando INSERT IN ARRAY inserta uno o más elementos en el *array*.<!-- END REF--> Los nuevos elementos se insertan antes del elemento especificado por *donde*, y se inicializan en el valor vacío del tipo de array. Todos los elementos más allá de *donde* se mueven consecuentemente en el array por un valor de uno o por el valor especificado en *cuantos*.

Si *donde* es mayor que el tamaño del array, los elementos se añaden al final del array.

El parámetro *cuantos* es el número de elementos a insertar. Si no se especifica *cuantos*, entonces se inserta sólo un elemento. El tamaño del array aumenta en *cuantos*.

#### Ejemplo 1 

El siguiente ejemplo inserta cinco nuevos elementos, comenzando en el elemento 10:

```4d
 INSERT IN ARRAY(anArray;10;5)
```

#### Ejemplo 2 

El siguiente ejemplo añade un elemento a un array:

```4d
 $vlElem:=Size of array(anArray)+1
 INSERT IN ARRAY(anArray;$vlElem)
 anArray{$vlElem}:=...
```

#### Ver también 

[DELETE FROM ARRAY](delete-from-array.md)  
[Size of array](size-of-array.md)  