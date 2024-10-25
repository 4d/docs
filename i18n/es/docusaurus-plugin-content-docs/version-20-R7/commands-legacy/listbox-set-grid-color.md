---
id: listbox-set-grid-color
title: LISTBOX SET GRID COLOR
slug: /commands/listbox-set-grid-color
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET GRID COLOR.Syntax-->**LISTBOX SET GRID COLOR** ( {* ;} *objeto* ; *color* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET GRID COLOR.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| color | Text, Integer | &#8594;  | Valor de color RGB |
| horizontal | Boolean | &#8594;  | Utilice el color para las líneas horizontales |
| vertical | Boolean | &#8594;  | Utilice el color para las líneas verticales |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.LISTBOX SET GRID COLOR.Summary-->El comando **LISTBOX SET GRID COLOR** le permite modificar el color de la rejilla del objeto list box designado por los parámetros *objeto* y *\**.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*.

Pase en el parámetro *color* un valor de color RGB. Para mayor información sobre los colores RGB, consulte la descripción del comando [OBJECT SET RGB COLORS](object-set-rgb-colors.md).

Los parámetros *horizontal* y *vertical* le permiten especificar las líneas a las cuales quiere darle color:

* Si pasa [True](true.md "True") en *horizontal*, el color se aplicará a las líneas horizontales. Si pasa **False**, el color de las líneas horizontales no cambiará.
* Si pasa [True](true.md "True") en *vertical*, el color se aplicará a las líneas verticales. Si pasa **False**, el color de las líneas verticales no cambiará.

#### Ver también 

[LISTBOX GET GRID COLORS](listbox-get-grid-colors.md)  
[LISTBOX SET GRID](listbox-set-grid.md)  
[OBJECT SET RGB COLORS](object-set-rgb-colors.md)  