---
id: listbox-get-table-source
title: LISTBOX GET TABLE SOURCE
slug: /commands/listbox-get-table-source
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET TABLE SOURCE.Syntax-->**LISTBOX GET TABLE SOURCE** ( {* ;} *objeto* ; *numTabla* {; *nombre* {; *nomSel*}} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET TABLE SOURCE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o Variable (si se omite *) |
| numTabla | Integer | &#8592; | Número de la tabla de la selección |
| nombre | Text | &#8592; | Nombre de la selección temporal o "" para la selección actual |
| nomSel | Text | &#8592; | Nombre del conjunto seleccionado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX GET TABLE SOURCE.Summary-->El comando LISTBOX GET TABLE SOURCE permite conocer la fuente actual de datos mostrados en el list box designado por los parámetros *\** y *objeto*.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, no pase una cadena sino una referencia de variable. Para mayor información sobre nombres de objeto, por favor consulte la sección *Propiedades de los objetos*.

El comando devuelve en el parámetro *numTabla* el número de la tabla principal asociada al list box y en el parámetro opcional *tempo* el nombre de la selección temporal eventualmente utilizada.

Si las líneas del list box están vinculadas con la selección actual de la tabla, el parámetro *nombre*, si se pasa, devuelve una cadena vacía. Si las líneas del list box están vinculadas con una selección temporal, el parámetro *nombre* devuelve el nombre de esta selección temporal.

Si el list box está asociado con arrays, *numTabla* devuelve -1 y *tempo*, si se pasa, devuelve una cadena vacía.

#### Ver también 

[LISTBOX SET TABLE SOURCE](listbox-set-table-source.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1014 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


