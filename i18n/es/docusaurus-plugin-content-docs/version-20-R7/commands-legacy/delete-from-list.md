---
id: delete-from-list
title: DELETE FROM LIST
slug: /commands/delete-from-list
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FROM LIST.Syntax-->**DELETE FROM LIST** ( {* ;} *lista* ; refElem | * {; *} )<!-- END REF-->
<!--REF #_command_.DELETE FROM LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es un número de referencia de lista |
| lista | Integer, Text | &#8594;  | Número de referencia de lista (si se omite *) o Nombre del objeto de tipo lista (si se pasa *) |
| refElem &#124; * | Entero largo, Operador | &#8594;  | Número de referencia del elemento, o 0 para el último elemento añadido a la lista o * para el elemento de la lista actualmente seleccionada |
| * | Operator |  &#8594;  | Si se especifica, borra las sublistas (si la hay) de la memoria Si se omite, las sublistas (si las hay) no son borradas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DELETE FROM LIST.Summary-->El comando DELETE FROM LIST borra el elemento designado por el parámetro *refElem* de la lista cuyo número de referencia se pasa en *lista*.<!-- END REF-->

Si pasa el primer parámetro opcional \*, indica que el parámetro *lista* es un nombre de objeto (cadena) correspondiente a una representación de lista en el formulario. Si no pasa este parámetro, usted indica que el parámetro *lista* es una referencia de lista jerárquica (*refLista*). Si utiliza una sola representación de lista o trabaja con todos los elementos (pasa el segundo \*), puede utilizar cualquiera de las dos sintaxis. Por el contrario, si utiliza varias representaciones de la misma lista y trabaja con los elementos visibles (el segundo \* se omite), la sintaxis basada en el nombre del objeto es necesaria ya que cada representación puede tener su propia configuración desplegada/contraída. 

Si pasa *\** en *refElem*, borra el elemento actualmente seleccionado en la lista. Igualmente puede pasar 0 en este parámetro para borrar el último elemento añadido a la lista.

De lo contrario, especifique el número de referencia del elemento que quiere borrar. Si el número no corresponde a ningún elemento de la *lista*, el comando no hace nada.

Si trabaja con los números de referencia de los elementos, construya una lista en la cual los elementos tengan números de referencia únicos, de lo contrario no podrá distinguir los elementos. Para mayor información, consulte la descripción del comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST").

Sin importar que elemento borre, debe especificar el parámetro opcional *\** para permitir a 4D borrar automáticamente la sublista asociada al elemento, si la hay. Si no especifica el parámetro *\**, es una buena idea obtener previamente el número de referencia de la sublista (si la hay) asociada al elemento, de manera que puede borrarla, si es necesario, utilizando el comando [CLEAR LIST](clear-list.md "CLEAR LIST").

#### Ejemplo 

El siguiente código borra el elemento seleccionado de la lista *hList*. Si el elemento tiene una sublista asociada se borra (como también toda sub-sublista):

```4d
 DELETE FROM LIST(hList;*;*)
```

#### Ver también 

[CLEAR LIST](clear-list.md)  
[GET LIST ITEM](get-list-item.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 624 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


