---
id: size-of-array
title: Size of array
slug: /commands/size-of-array
displayed_sidebar: docs
---

<!--REF #_command_.Size of array.Syntax-->**Size of array** ( *array* ) : Integer<!-- END REF-->
<!--REF #_command_.Size of array.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array cuyo tamaño se devuelve |
| Resultado | Integer | &#8592; | Devuelve el número de elementos en el array |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Size of array.Summary-->El comando Size of Array devuelve el número de elementos de *array*.<!-- END REF-->

#### Ejemplo 1 

El siguiente ejemplo devuelve el tamaño del array *anArray*:

```4d
 vlTalla:=Size of array(anArray) // vlTalla recibe el tamaño de anArray
```

#### Ejemplo 2 

El siguiente ejemplo devuelve el número de filas en un array bidimensional:

```4d
 vlFilas:=Size of array(a2DArray) // vlFilas recibe el tamaño de a2DArray
```

#### Ejemplo 3 

El siguiente ejemplo devuelve el número de columnas de una fila en un array bidimensional:

```4d
 vlColumnas:=Size of array(a2DArray{10}) // vlColumnas recibe el tamaño de a2DArray{10}
```

#### Ver también 

[DELETE FROM ARRAY](delete-from-array.md)  
[INSERT IN ARRAY](insert-in-array.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 274 |
| Hilo seguro | &check; |


