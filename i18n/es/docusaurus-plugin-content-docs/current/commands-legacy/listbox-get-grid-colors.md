---
id: listbox-get-grid-colors
title: LISTBOX GET GRID COLORS
slug: /commands/listbox-get-grid-colors
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET GRID COLORS.Syntax-->**LISTBOX GET GRID COLORS** ( {* ;} *objeto* ; *colorH* ; *colorV* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET GRID COLORS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| colorH | Text, Integer | &#8592; | Valor de color RGB para las líneas horizontales |
| colorV | Text, Integer | &#8592; | Valor de color RGB para las líneas verticales |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX GET GRID COLORS.Summary-->El comando **LISTBOX GET GRID COLORS** devuelve el color de las líneas horizontales y verticales que componen la rejilla del objeto list box object designado por los parámetros *objeto* y *\**.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, pase una referencia de variable en lugar de una cadena. 

En *colorH* y *colorV*, el comando devuelve los valores de los colores RGB. El formato de color depende del tipo de parámetro que pasó en *hColor* y *vColor*:

* Si pasa un texto, el color se expresará como un texto CSS (formato "#rrggbb")
* Si pasa un entero largo, el color se expresará como un entero largo de 4 bytes (formato 0x00rrggbb).

#### Ver también 

[LISTBOX SET GRID COLOR](listbox-set-grid-color.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1200 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


