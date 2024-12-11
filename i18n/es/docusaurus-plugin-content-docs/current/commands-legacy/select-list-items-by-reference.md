---
id: select-list-items-by-reference
title: SELECT LIST ITEMS BY REFERENCE
slug: /commands/select-list-items-by-reference
displayed_sidebar: docs
---

<!--REF #_command_.SELECT LIST ITEMS BY REFERENCE.Syntax-->**SELECT LIST ITEMS BY REFERENCE** ( *lista* ; *refElem* {; *refArray*} )<!-- END REF-->
<!--REF #_command_.SELECT LIST ITEMS BY REFERENCE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| lista | Integer | &#8594;  | Número de referencia de lista |
| refElem | Integer | &#8594;  | Número de referencia del elemento o 0 para el último elemento  añadido a la lista |
| refArray | Integer array | &#8594;  | Array de números de referencia de elementos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SELECT LIST ITEMS BY REFERENCE.Summary-->El comando SELECT LIST ITEMS BY REFERENCE selecciona el o los elementos cuyo número de referencia se pasa en *refElem* y opcionalmente en *refArray*, en la lista cuyo número de referencia se pasa en *lista*.<!-- END REF-->

Si ningún elemento tiene el número de referencia que pasó, el comando no hace nada. 

Si un elemento no es visible actualmente (por ejemplo, si está ubicado en una lista contraída), el comando despliega la(s) sublista(s) correspondiente(s) de manera que quede(n) visible(s).

Si no pasa el parámetro *refArray*, el parámetro *refElem* representa la referencia del elemento a seleccionar. Si el número de elemento no corresponde a ningún elemento de la lista, el comando no hace nada. Igualmente puede pasar el valor 0 en este parámetro para designar el último elemento añadido a la lista.

El parámetro opcional *refArray* le permite seleccionar varios elementos simultáneamente en la lista. En *refArray*, debe pasar un array donde cada línea indique la referencia fija de un elemento a seleccionar.   
En este caso, el elemento designado por el parámetro *refElemf* determina el nuevo elemento actual de la lista en la selección resultante, el cual puede pertenecer o no al conjunto de elementos definido por el array. El elemento actual es, más particularmente, el que es editado por el comando [EDIT ITEM](edit-item.md "EDIT ITEM"). 

**Nota:** para seleccionar varios elementos simultáneamente en una lista jerárquica (manualmente o por programación), la propiedad *multi-seleccionable* debe haber sido seleccionada para la lista. Esta propiedad se define utilizando el comando [SET LIST PROPERTIES](set-list-properties.md "SET LIST PROPERTIES").

Si trabaja con los números de referencia de los elementos, asegúrese de construir un alista en la cual los elementos tengan números de referencia únicos; de lo contrario no podrá diferenciarlos. Para mayor información, consulte la descripción del comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST").

#### Ejemplo 

*hList* es una lista cuyos elementos tienen números de referencia únicos. El siguiente método de objeto para un botón selecciona el elemento padre (si lo hay) del elemento seleccionado actualmente:

```4d
 $vlItemPos:=Selected list items(hList) // Obtener la posición del elemento seleccionado
 GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText) // Obtener el número de referencia del elemento seleccionado
 $vlParentItemRef:=List item parent(hList;$vlItemRef) // Obtener número de referencia del elemento padre (si lo hay)
 If($vlParentItemRef>0)
    SELECT LIST ITEM BY REFERENCE(hList;List item parent(hList;$vlItemRef)) // Selección del elemento padre End if
```

#### Ver también 

[EDIT ITEM](edit-item.md)  
[SELECT LIST ITEMS BY POSITION](select-list-items-by-position.md)  
[Selected list items](selected-list-items.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 630 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


