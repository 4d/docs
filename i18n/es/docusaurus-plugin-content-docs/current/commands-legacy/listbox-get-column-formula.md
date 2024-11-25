---
id: listbox-get-column-formula
title: LISTBOX Get column formula
slug: /commands/listbox-get-column-formula
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get column formula.Syntax-->**LISTBOX Get column formula** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.LISTBOX Get column formula.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| Resultado | Text | &#8592; | Fórmula asociada a la columna |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.LISTBOX Get column formula.Summary-->El comando **LISTBOX Get column formula** devuelve la fórmula asociada a la columna de list box designada por los parámetros *objeto* y *\**.<!-- END REF--> Las fórmulas no pueden utilizarse cuando la propiedad “Fuente de datos” del list box es **Selección actual**, **Selección temporal** o **Colección o Selección** **de entidades**. Si ninguna fórmula está asociada a la columna, el comando devuelve una cadena vacía. 

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, pase una referencia de variable en lugar de una cadena. Este parámetro debe designar una columna del list box.

#### Ver también 

[LISTBOX SET COLUMN FORMULA](listbox-set-column-formula.md)  