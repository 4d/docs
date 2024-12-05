---
id: listbox-moved-column-number
title: LISTBOX MOVED COLUMN NUMBER
slug: /commands/listbox-moved-column-number
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Syntax-->**LISTBOX MOVED COLUMN NUMBER** ( {* ;} *objeto* ; *antPosicion* ; *nuevPosicion* )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| antPosicion | Integer | &#8592; | Posición anterior de la columna movida |
| nuevPosicion | Integer | &#8592; | Nueva posición de la columna movida |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Summary-->El comando LISTBOX MOVED COLUMN NUMBER devuelve dos números en *antPosicion* y *nuevPosicion* indicando respectivamente la posición anterior y la nueva posición de la columna movida en el list box designado por los parámetros *objeto* y *\**.<!-- END REF-->

Si pasa el parámetro opcional \*, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección . 

Este comando debe utilizarse con el evento de formulario On column moved (ver el comando [Form event](../commands/form-event.md "Form event")). 

**Nota:** este comando tiene en cuenta las columnas invisibles.

#### Ver también 

[Form event code](../commands/form-event-code.md)  
[LISTBOX MOVED ROW NUMBER](listbox-moved-row-number.md)  