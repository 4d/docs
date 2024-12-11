---
id: delete-from-array
title: DELETE FROM ARRAY
slug: /commands/delete-from-array
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FROM ARRAY.Syntax-->**DELETE FROM ARRAY** ( *array* ; *posicion* {; *reemplazos*} )<!-- END REF-->
<!--REF #_command_.DELETE FROM ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array del cual borrar elementos |
| posicion | Integer | &#8594;  | Elemento donde comienza la supresión |
| reemplazos | Integer | &#8594;  | Número de elementos a borrar, o 1 elemento si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DELETE FROM ARRAY.Summary-->El comando DELETE FROM ARRAY borra uno o más elementos del *array*.<!-- END REF--> Los elementos se borran a partir del elemento especificado por *donde*.

El parámetro *cuantos* es el número de elementos a borrar. Si no se especifica *cuantos*, entonces se borra un elemento. El tamaño del array se reduce en *cuantos*.

#### Ejemplo 1 

El siguiente ejemplo borra tres elementos, comenzando en el elemento 5:

```4d
 DELETE FROM ARRAY(anArray;5;3)
```

#### Ejemplo 2 

El siguiente ejemplo borra el último elemento de un array, si existe:

```4d
 $vlElem:=Size of array(anArray)
 If($vlElem>0)
    DELETE FROM ARRAY(anArray;$vlElem)
 End if
```

#### Ver también 

[INSERT IN ARRAY](insert-in-array.md)  
[Size of array](size-of-array.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 228 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


