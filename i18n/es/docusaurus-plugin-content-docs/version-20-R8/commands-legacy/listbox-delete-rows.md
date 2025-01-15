---
id: listbox-delete-rows
title: LISTBOX DELETE ROWS
slug: /commands/listbox-delete-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX DELETE ROWS.Syntax-->**LISTBOX DELETE ROWS** ( {* ;} *objeto* ; *posicionL* {; *numLineas*} )<!-- END REF-->
<!--REF #_command_.LISTBOX DELETE ROWS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| posicionL | Integer | &#8594;  | Posición de la fila a eliminar |
| numLineas | Integer | &#8594;  | Número de líneas a borrar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX DELETE ROWS.Summary-->El comando LISTBOX DELETE ROWS borra una o varias líneas a partir de *posicion* (visible o no) del list box definido por los parámetros *objeto* y \*.<!-- END REF-->

**Nota**: este comando funciona únicamente con los list box basados en arrays. Cuando este comando se utiliza con un list box basado en una selección, no hace nada y la variable sistema OK devuelve 0

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*. 

Recuerde que después de la ejecución del comando, no habrá ningún elemento seleccionado en el list box.

La fila *posicion* se elimina automáticamente de todos los arrays utilizados por las columnas del list box.   
Si el parámetro *posicion* es superior al número de líneas del array del list box o si es inferior a 1, el comando no hace nada. 

**Nota**: este comando no tiene en cuenta los posibles estados ocultos/visibles de las líneas del list box.

#### Ver también 

[LISTBOX Get number of rows](listbox-get-number-of-rows.md)  
[LISTBOX INSERT ROWS](listbox-insert-rows.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 914 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


