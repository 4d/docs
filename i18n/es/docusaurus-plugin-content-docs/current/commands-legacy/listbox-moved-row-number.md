---
id: listbox-moved-row-number
title: LISTBOX MOVED ROW NUMBER
slug: /commands/listbox-moved-row-number
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Syntax-->**LISTBOX MOVED ROW NUMBER** ( {* ;} *objeto* ; *antPosicion* ; *nuevPosicion* )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#x1F852; | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#x1F852; | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| antPosicion | Integer | &#x1F858; | Posición anterior de la fila movida |
| nuevPosicion | Integer | &#x1F858; | Nueva posición de la fila movida |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Summary-->El comando LISTBOX MOVED ROW NUMBER devuelve dos números en *antPosicion* y *nuevPosicion* indicando respectivamente la posición anterior y la nueva posición de la fila movida en el list box, especificadas por los parámetros *objeto* y *\**.<!-- END REF-->

**Nota:** sólo puede mover las líneas en los list box de tipo array.

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*. 

Este comando debe utilizarse con el evento de formulario On row moved (ver el comando [Form event code](form-event-code.md)). 

**Nota:** este comando no tiene en cuenta el estado oculto/mostrado de las líneas del list box. 

#### Ver también 

[Form event code](form-event-code.md)  
[LISTBOX MOVED COLUMN NUMBER](listbox-moved-column-number.md)  