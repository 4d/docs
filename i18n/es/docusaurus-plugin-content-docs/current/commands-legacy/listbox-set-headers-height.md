---
id: listbox-set-headers-height
title: LISTBOX SET HEADERS HEIGHT
slug: /commands/listbox-set-headers-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET HEADERS HEIGHT.Syntax-->**LISTBOX SET HEADERS HEIGHT** ( {* ;} *objeto* ; *altura* {; *unidad*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET HEADERS HEIGHT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| altura | Integer | &#8594;  | Alto de la línea |
| unidad | Integer | &#8594;  | Unidad de valor de altura: 0 o si se omite = píxeles, 1 = líneas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX SET HEADERS HEIGHT.Summary-->El comando **LISTBOX SET HEADERS HEIGHT** modifica por programación la altura de la línea de encabezado del list box designado por los parámetros *objeto* y *\**.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.   
  
Puede designar indiferentemente el list box o todo encabezado del list box.  
  
Pase en el parámetro *altura* la altura a definir. Por defecto, si omite el parámetro unidad, esta altura se expresa en píxeles. Para definir una unidad diferente, puede pasar una de las siguientes constantes (del tema *Listbox*), en el parámetro *unidad*:  
  
| Constante | Tipo         | Valor | Comentario                                                                                        |
| --------- | ------------ | ----- | ------------------------------------------------------------------------------------------------- |
| lk lines  | Entero largo | 1     | La altura designa un número de líneas. 4D calcula la altura de una línea en función de la fuente. |
| lk pixels | Entero largo | 0     | La altura es un número en píxeles (por defecto)                                                   |
  
  
Los encabezados deben respetar la altura mínima establecida por el sistema. Esta altura es de 24 píxeles en Windows y 17 píxeles en Mac OS. Si pasa un valor más bajo en el parámetro de la altura, se aplica la altura mínima.  
  
**Nota**: para obtener más información sobre el cálculo de las alturas de líneas, consulte el manual de *Diseño*.

#### Ver también 

[LISTBOX Get headers height](listbox-get-headers-height.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1143 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


