---
id: get-list-item
title: GET LIST ITEM
slug: /commands/get-list-item
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM.Syntax-->**GET LIST ITEM** ( {* ;} *lista* ; posicionElem | * ; *refElem* ; *textoElem* {; *sublista* ; *desplegada*} )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica lista es un nombre de objeto (cadena) Si se omite, lista es un número de referencia de lista |
| lista | Integer, Text | &#8594;  | Número de referencia de lista (si se omite *) o Nombre del objeto de tipo lista (si se pasa *) |
| posicionElem &#124; * | Operador, Entero largo | &#8594;  | Posición del elemento en lista(s) desplegada(s) o contraída(s) * para el elemento actual de la lista. |
| refElem | Integer | &#8592; | Número de referencia del elemento |
| textoElem | Text | &#8592; | Texto del elemento de la lista |
| sublista | Integer | &#8592; | Número de referencia de la sublista (si la hay) |
| desplegada | Boolean | &#8592; | Si una sublista está asociada: TRUE = la sublista está desplegada FALSE = la sublista está contraída |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET LIST ITEM.Summary-->El comando GET LIST ITEM devuelve la información sobre el elemento especificado por *posicionElem* de la lista cuyo número de referencia o nombre de objeto se pasa en *lista*.<!-- END REF--> 

Si pasa el primer parámetro opcional \*, indica que el parámetro *lista* es un nombre de objeto (cadena) correspondiente a una representación de lista en el formulario. Si no pasa este parámetro, indica que el parámetro *lista* es una referencia de lista jerárquica (RefLista). Si utiliza sólo una representación de lista, puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si usted utiliza varias representaciones de una misma lista, la lista basada en el nombre del objeto es necesaria ya que cada representación puede tener su propia configuración desplegada/contraída y su propio elemento actual. 

**Nota:** si utiliza el carácter @ en el nombre de la lista y el formulario contiene varias listas que responden a este nombre, el comando GET LIST ITEM sólo aplicará al primer objeto cuyo nombre corresponda. 

La posición debe expresarse respecto al estado actual desplegado/contraído de la lista y de su sublista. Debe pasar un valor de posición entre 1 y el valor devuelto por [Count list items](count-list-items.md "Count list items"). Si pasa un valor que no está en este rango, GET LIST ITEM devuelve valores vacíos (0, "", etc.).

Después de la llamada, recupera:

* El número de referencia del elemento en *refElem*.
* El texto del elemento en *textElem*.

Si pasa los parámetros opcionales *sublista* y *desplegada*:

* *subLista* devuelve el número de referencia de la sublista asociada al elemento. Si el elemento no tiene sublista, *subLista* devuelve cero (0).
* Si el elemento tiene una sublista, *desplegada* devuelve TRUE si la sublista está desplegada, y FALSE si está contraída.

#### Ejemplo 1 

*hList* es una lista cuyos elementos tienen números de referencia únicos. El siguiente código pasa por programación al estado desplegado/contraído de la sublista, si hay, asociada al elemento seleccionado:

```4d
 $vlItemPos:=Selected list items(hList)
 If($vlItemPos>0)
    GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText;$hSublist;$vbDesplegada)
    If(Is a list($hSublist))
       SET LIST ITEM(hList;$vlItemRef;$vsItemText;$vlItemRef;$hSublist;Not($vbDesplegada))
    End if
 End if
```

#### Ejemplo 2 

Consulte el ejemplo del comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST").

#### Ver también 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[List item parent](list-item-parent.md)  
[List item position](list-item-position.md)  
[Selected list items](selected-list-items.md)  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 378 |
| Hilo seguro | &cross; |


