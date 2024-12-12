---
id: listbox-get-rows-height
title: LISTBOX Get rows height
slug: /commands/listbox-get-rows-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get rows height.Syntax-->**LISTBOX Get rows height** ( {* ;} *objeto* {; *unidad*} ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get rows height.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| unidad | Integer | &#8594;  | Unida del valor de altura: 0 o si se omite = píxeles, 1 = líneas |
| resultado | Integer | &#8592; | Altura de la línea |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX Get rows height.Summary-->El comando **LISTBOX Get rows height** devuelve la altura actual (en píxeles o en líneas) de las líneas del objeto list box designado utilizando los parámetros *objeto* y *\**.<!-- END REF-->El valor devuelto corresponde a la altura de una sola línea.

Si pasa el parámetro opcional \*, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*.

Por defecto, si omite el parámetro *unidad*, la altura de línea devuelta se expresa en píxeles. Para definir otra unidad, en el parámetro *unidad* puede pasar una de las siguientes constantes, del tema *Listbox*:

| Constante | Tipo         | Valor | Comentario                                                                                        |
| --------- | ------------ | ----- | ------------------------------------------------------------------------------------------------- |
| lk lines  | Entero largo | 1     | La altura designa un número de líneas. 4D calcula la altura de una línea en función de la fuente. |
| lk pixels | Entero largo | 0     | La altura es un número en píxeles (por defecto)                                                   |

**Nota:** Para mayor información sobre el cálculo de alturas de líneas, consulte el manual de *Diseño*.

#### Ver también 

[LISTBOX Get auto row height ](listbox-get-auto-row-height.md)  
[LISTBOX Get row height ](listbox-get-row-height.md)  
[LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 836 |
| Hilo seguro | &cross; |


