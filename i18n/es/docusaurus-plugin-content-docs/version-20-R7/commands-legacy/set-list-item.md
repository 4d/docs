---
id: set-list-item
title: SET LIST ITEM
slug: /commands/set-list-item
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM.Syntax-->**SET LIST ITEM** ( {* ;} *lista* ; refElem | * ; *textElem* ; *nuevaRef* {; *sublista* ; *desplegada*} )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es una referencia de lista |
| lista | Integer, Text | &#8594;  | Número de referencia de lista (si se omite *) o Nombre de objeto de tipo lista (si se pasa*) |
| refElem &#124; * | Operador, Entero largo | &#8594;  | Número de referencia de elemento, o 0 para el último elemento añadido a la lista, o * para el elemento actual de la lista |
| textElem | Text | &#8594;  | Nuevo texto del elemento |
| nuevaRef | Integer | &#8594;  | Nuevo número de referencia del elemento |
| sublista | Integer | &#8594;  | Nueva sublista asociada al elemento, o 0 = ninguna sublista (separar actual, si la hay), o -1 = ningún cambio |
| desplegada | Boolean | &#8594;  | Indica si la sublista debe ser desplegada o contraída |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET LIST ITEM.Summary-->El comando SET LIST ITEM modifica el elemento designado por el parámetro *refElem* en la lista cuyo número de referencia o nombre de objeto se pasa en *lista*.<!-- END REF--> 

Si pasa el primer parámetro opcional \*, indica que el parámetro *lista* es un nombre de objeto (cadena) correspondiente a una representación de lista en el formulario. Si no pasa este parámetro, indica que el parámetro *lista* es una referencia de lista jerárquica (RefLista). Si utiliza sólo una representación de la lista o trabaja con elementos estructurales (se omite el segundo \*), puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si utiliza varias representaciones de una misma lista y trabaja con el elemento actual (el segundo \* se pasa), la sintaxis basada en el nombre del objeto es necesaria ya que cada representación puede tener su propio elemento actual. 

Puede pasar un número de referencia en *refElem*. Si no hay un elemento de la lista con el número de referencia que pasó, el comando no hace nada. Opcionalmente puede pasar *0* en *refElem* para designar el último elemento añadido a la lista utilizando [APPEND TO LIST](append-to-list.md "APPEND TO LIST").

Finalmente, puede pasar *\** en *refElem*: en este caso, el comando se aplicará al elemento actual de la lista. Si varios elementos son seleccionados manualmente, el elemento actual es aquel que fue seleccionado de último. Si ningún elemento está seleccionado, el comando no hace nada.

Si trabaja con los números de referencia de los elementos, construya una lista en la cual los elementos tengan números de referencia únicos, de lo contrario no podrá diferenciar los elementos. Para mayor información, consulte la sección *Gestión de listas jerárquicas*.

Pase el nuevo texto del elemento en *textElem*. Para cambiar el número de referencia del elemento, pase el nuevo valor en *nuevaRef*; de lo contrario, pase el mismo valor que en *refElem*.

Para asociar una lista a un elemento, pase el número de referencia de la sublista en *subLista*. En este caso, puede igualmente especificar si quiere que la nueva sublista aparezca desplegada pasando TRUE en *desplegada*; de lo contrario, pase FALSE.

Para desasociar una sublista que se encuentre asociada al elemento, pase *0* (cero) en *sublista*. En este caso, es una buena idea haber obtenido previamente el número de referencia de esa lista utilizando [GET LIST ITEM](get-list-item.md "GET LIST ITEM"), de manera que pueda borrar la sublista más adelante utilizando [CLEAR LIST](clear-list.md "CLEAR LIST"), si ya no la necesita más.

Si no quiere cambiar las propiedades de la sublista del elemento, pase *\-1* en *sublista*.

**Nota:** incluso si son opcionales, los parámetros *sublista* y *desplegada* deben pasarse de manera conjunta.

#### Ejemplo 1 

*hList* es una lista cuyos elementos tienen números de referencia únicos. El siguiente método de objeto de un botón añade un elemento hijo al elemento actualmente seleccionado en la lista.

```4d
 $vlItemPos:=Selected list items(hList)
 If($vlItemPos>0)
    GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText;$hSublist;$vbDesplegada)
    $vbNuevaSubList:=Not(Is a list($hSublist))
    If($vbNuevaSubList)
       $hSublist:=New list
    End if
    vlUniqueRef:=vlUniqueRef+1
    APPEND TO LIST($hSubList;"New Item";vlUniqueRef)
    If($vbNuevaSubList)
       SET LIST ITEM(hList;$vlItemRef;$vsItemText;$vlItemRef;$hSublist;True)
    End if
    SELECT LIST ITEMS BY REFERENCE(hList;vlUniqueRef)
 End if
```

#### Ejemplo 2 

Ver ejemplo del comando [GET LIST ITEM](get-list-item.md "GET LIST ITEM").

#### Ejemplo 3 

Ver ejemplo del comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST").

#### Ver también 

[GET LIST ITEM](get-list-item.md)  
[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[SET LIST ITEM FONT](set-list-item-font.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 385 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


