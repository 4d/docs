---
id: listbox-set-grid
title: LISTBOX SET GRID
slug: /commands/listbox-set-grid
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET GRID.Syntax-->**LISTBOX SET GRID** ( {* ;} *objeto* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET GRID.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| horizontal | Boolean | &#8594;  | True = mostrar, False = ocultar |
| vertical | Boolean | &#8594;  | True = mostrar, False = ocultar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX SET GRID.Summary-->El comando LISTBOX SET GRID permite mostrar u ocultar las líneas horizontales y/o verticales que componen la matriz del objeto list box designado por los parámetros *objeto* y *\**.<!-- END REF-->

Si pasa el parámetro opcional \*, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*. 

Pase en los parámetros *horizontal* y *vertical* los valores booleanos que indican si la líneas de la matriz deben mostrarse ([True](true.md "True")) u ocultarse ([False](false.md "False")). La matriz se muestra por defecto. 

#### Ver también 

[LISTBOX GET GRID](listbox-get-grid.md)  
[LISTBOX Get property](listbox-get-property.md)  
[LISTBOX SET GRID COLOR](listbox-set-grid-color.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 841 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


