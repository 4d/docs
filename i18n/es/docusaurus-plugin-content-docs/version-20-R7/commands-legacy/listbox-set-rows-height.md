---
id: listbox-set-rows-height
title: LISTBOX SET ROWS HEIGHT
slug: /commands/listbox-set-rows-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ROWS HEIGHT.Syntax-->**LISTBOX SET ROWS HEIGHT** ( {* ;} *objeto* ; *altura* {; *unidad*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ROWS HEIGHT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| altura | Integer | &#8594;  | Altura de la fila (en píxeles) |
| unidad | Integer | &#8594;  | Unidad de valor de altura:0 o se omite = píxeles, 1 = líneas |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.LISTBOX SET ROWS HEIGHT.Summary-->El comando **LISTBOX SET ROWS HEIGHT** le permite modificar por programación la altura de las filas del objeto list box designado por los parámetros *objeto* y *\**.<!-- END REF--> 

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*.

Por defecto, si omite el parámetro *unidad*, la altura se expresa en píxeles. Para modificar la unidad, en el parámetro *unidad* pase una de las siguientes constantes, ubicadas en el tema *Listbox*:

| Constante | Tipo         | Valor | Comentario                                                                                        |
| --------- | ------------ | ----- | ------------------------------------------------------------------------------------------------- |
| lk lines  | Entero largo | 1     | La altura designa un número de líneas. 4D calcula la altura de una línea en función de la fuente. |
| lk pixels | Entero largo | 0     | La altura es un número en píxeles (por defecto)                                                   |

**Nota:** para mayor información sobre el cálculo de las alturas de las líneas, consulte el manual de *Diseño*.

#### Ver también 

[LISTBOX Get rows height](listbox-get-rows-height.md)  
[LISTBOX SET AUTO ROW HEIGHT](listbox-set-auto-row-height.md)  
[LISTBOX SET ROW HEIGHT](listbox-set-row-height.md)  