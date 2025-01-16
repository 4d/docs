---
id: listbox-get-number-of-rows
title: LISTBOX Get number of rows
slug: /commands/listbox-get-number-of-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get number of rows.Syntax-->**LISTBOX Get number of rows** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get number of rows.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| Resultado | Integer | &#8592; | Número de filas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX Get number of rows.Summary-->El comando LISTBOX Get number of rows devuelve el número de filas del list box designado por los parámetros objeto y \*.<!-- END REF-->

**Nota:**LISTBOX Get number of rows no tiene en cuenta el estado oculto/mostrado de las líneas. Por ejemplo en un list box de 10 líneas, donde las 9 primeras están ocultas, LISTBOX Get number of rows devuelve 10.

Si pasa el parámetro opcional \*, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección . 

**Nota:** si los arrays asociados con las columnas de un list box no tienen todos el mismo tamaño, sólo el número de elementos correspondiente al array más pequeño aparecerá en el list box y de esta manera es devuelto por este comando. 

#### Ver también 

[LISTBOX DELETE ROWS](listbox-delete-rows.md)  
[LISTBOX INSERT ROWS](listbox-insert-rows.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 915 |
| Hilo seguro | &cross; |


