---
id: listbox-delete-column
title: LISTBOX DELETE COLUMN
slug: /commands/listbox-delete-column
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX DELETE COLUMN.Syntax-->**LISTBOX DELETE COLUMN** ( {* ;} *objeto* ; *posicionCol* {; *numero*} )<!-- END REF-->
<!--REF #_command_.LISTBOX DELETE COLUMN.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| posicionCol | Integer | &#8594;  | Número de la columna a eliminar |
| numero | Integer | &#8594;  | Número de columnas a eliminar |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.LISTBOX DELETE COLUMN.Summary-->El comando LISTBOX DELETE COLUMN borra una o más columnas (visibles o no) en el list box designado por los parámetros *objeto* y *\**.<!-- END REF-->

**Nota:** este comando no hace nada si se aplica a la primera columna de un list box mostrado en modo jerárquico.

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección . 

Si no pasa el parámetro opcional *numero*, el comando simplemente elimina la columna definida en el parámetro *posicionCol*.   
De lo contrario, el parámetro *numero* indica el número de columnas a eliminar a la derecha comenzando desde la columna *posicionCol* (esta incluida). 

Si el parámetro *posicionCol* es mayor al número de columnas en el list box, el comando no hace nada.

#### Ver también 

[LISTBOX Get number of columns](listbox-get-number-of-columns.md)  
[LISTBOX INSERT COLUMN](listbox-insert-column.md)  