---
id: listbox-get-number-of-columns
title: LISTBOX Get number of columns
slug: /commands/listbox-get-number-of-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get number of columns.Syntax-->**LISTBOX Get number of columns** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get number of columns.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| Resultado | Integer | &#8592; | Número de columnas |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.LISTBOX Get number of columns.Summary-->El comando LISTBOX Get number of columns devuelve el número total de columnas (visibles o invisibles) presentes en el list box designado por los parámetros *objeto* y *\**.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*. 

#### Ver también 

[LISTBOX DELETE COLUMN](listbox-delete-column.md)  