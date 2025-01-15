---
id: listbox-set-column-width
title: LISTBOX SET COLUMN WIDTH
slug: /commands/listbox-set-column-width
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET COLUMN WIDTH.Syntax-->**LISTBOX SET COLUMN WIDTH** ( {* ;} *objeto* ; *ancho* {; *anchoMin* {; *anchoMax*}} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET COLUMN WIDTH.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| ancho | Integer | &#8594;  | Ancho de la columna (en píxeles) |
| anchoMin | Integer | &#8594;  | Ancho mínimo de columna (en píxeles) |
| anchoMax | Integer | &#8594;  | Ancho máximo de columna (en píxeles) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX SET COLUMN WIDTH.Summary-->El comando LISTBOX SET COLUMN WIDTH le permite modificar por programación el ancho de una o todas las columnas del objeto (list box, columna o título) designado utilizando los parámetros *objeto* y *\**.<!-- END REF-->

Si pasa el parámetro opcional \*, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección . 

Pase en el parámetro *ancho* el nuevo ancho (en píxeles) del objeto.   
• Si *objeto* designa el objeto list box, todas las columnas del list box son redimensionadas.  
• Si *objeto* designa una columna o un título de columna, sólo la columna designada es redimensionada. 

Los parámetros opcionales *anchoMin* y *anchoMax* permiten definir los límites para el redimensionamiento manual de la columna. Puede pasar en anchoMin y anchoMax respectivamente los valores del ancho mínimo y máximo, expresado en píxeles. Si quiere que el usuario no pueda redimensionar la columna, debe pasar el mismo valor en *ancho*, *anchoMin* y *anchoMax*. 

#### Ver también 

[LISTBOX Get column width](listbox-get-column-width.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 833 |
| Hilo seguro | &cross; |


