---
id: listbox-get-footers-height
title: LISTBOX Get footers height
slug: /commands/listbox-get-footers-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get footers height.Syntax-->**LISTBOX Get footers height** ( {* ;} *objeto* {; *unidad*} ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get footers height.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| unidad | Integer | &#8594;  | Unidad de valor de altura: 0 o si se omite = píxeles, 1 = líneas |
| resultado | Integer | &#8592; | Alto de la línea |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX Get footers height.Summary-->El comando **LISTBOX Get footers height** devuelve la altura de la línea de pie del list box designado por los parámetros *objeto* y *\**.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena. Puede designar indiferentemente el list box o todo pie del list box.  
  
Por defecto, si omite el parámetro *unidad*, la altura de línea devuelta se expresa en píxeles. Para definir una unidad diferente, puede pasar una de las siguientes constantes (del tema *Listbox*), en el parámetro *unidad*:  
  
| Constante | Tipo         | Valor | Comentario                                                                                        |
| --------- | ------------ | ----- | ------------------------------------------------------------------------------------------------- |
| lk lines  | Entero largo | 1     | La altura designa un número de líneas. 4D calcula la altura de una línea en función de la fuente. |
| lk pixels | Entero largo | 0     | La altura es un número en píxeles (por defecto)                                                   |
  
  
**Nota**: para mayor información sobre el cálculo de la altura de líneas, consulte el manual de *Diseño*.

#### Ver también 

[LISTBOX SET FOOTERS HEIGHT](listbox-set-footers-height.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1146 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


