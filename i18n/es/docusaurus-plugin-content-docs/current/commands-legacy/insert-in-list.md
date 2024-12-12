---
id: insert-in-list
title: INSERT IN LIST
slug: /commands/insert-in-list
displayed_sidebar: docs
---

<!--REF #_command_.INSERT IN LIST.Syntax-->**INSERT IN LIST** ( {* ;} *lista* ; antesElem | * ; *textoElem* ; *refElem* {; *sublista* ; *desplegada*} )<!-- END REF-->
<!--REF #_command_.INSERT IN LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es un número de referencia de lista |
| lista | Integer, Text | &#8594;  | Número de referencia de lista (si se omite *) o Nombre del objeto de tipo lista (si se pasa *) |
| antesElem &#124; * | Entero largo, Operador | &#8594;  | Número de referencia del elemento o 0 para el último elemento añadido a la lista o * para el elemento de la lista actualmente seleccionado |
| textoElem | Text | &#8594;  | Texto para el nuevo elemento (max. 255 caracteres) |
| refElem | Integer | &#8594;  | Número de referencia único del nuevo elemento |
| sublista | Integer | &#8594;  | Sublista opcional para asociar al nuevo elemento |
| desplegada | Boolean | &#8594;  | Indica si la sublista será desplegada o contraída |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.INSERT IN LIST.Summary-->El comando INSERT IN LIST inserta el elemento designado por el parámetro *refElem* en la lista cuyo número de referencia se pasa en *lista*.<!-- END REF-->

Si pasa el primer parámetro opcional *\**, indica que el parámetro *lista* es un nombre de objeto (cadena) correspondiente a una representación de la lista en el formulario. Si no pasa este parámetro, indica que el parámetro *lista* es una referencia de lista jerárquica  (RefLista). Si utiliza una sola representación de lista o trabaja con los elementos estructurales (se omite el segundo *\** ), puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si utiliza varias representaciones de la misma lista y trabaja con el elemento actual (se pasa el segundo *\**), la sintaxis basada en el nombre del objeto es requerida ya que cada representación tiene su propio elemento actual.

El parámetro *antesElem* puede utilizarse para designar el elemento delante del cual usted quiere insertar el nuevo elemento:

* Puede pasar el valor 0 con el fin de designar el último elemento añadido a la lista. El nuevo elemento insertado se convertirá entonces en el elemento seleccionado.
* Puede pasar *\** para que el nuevo elemento sea insertado antes del elemento seleccionado actualmente en la lista. En este caso, el nuevo elemento insertado se convierte en el elemento seleccionado.
* Por otra parte, si quiere insertar un elemento antes de un elemento específico, pase el número de referencia de ese elemento. En este caso, el nuevo elemento insertado no es seleccionado automáticamente. Si no hay un elemento con el número de referencia correspondiente, el comando no hace nada.

Pase el número de referencia del nuevo elemento en *refElem*. Aunque calificamos este número de referencia de elemento como único, realmente puede pasar el valor que desea. Consulte la sección *Gestión de listas jerárquicas* para obtener más información sobre el parámetro *refElem*.

Si quiere que el elemento incluya subelementos, pase un número de referencia de lista válido en el parámetro *sublista*. En este caso, también debe pasar el parámetro *desplegada*. Pase **True** o **False** en este parámetro de manera que esta sublista se muestre desplegada o contraída respectivamente.

#### Ejemplo 

El siguiente código inserta un elemento (sin sublista asociada) justo antes del elemento seleccionado actualmente en la lista *hList*:

```4d
 vlUniqueRef:=vlUniqueRef+1
 INSERT IN LIST(hList;*;"Nuevo elemento";vlUniqueRef)
```

#### Ver también 

[APPEND TO LIST](append-to-list.md)  
[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  