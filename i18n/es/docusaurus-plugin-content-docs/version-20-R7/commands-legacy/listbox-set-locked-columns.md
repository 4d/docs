---
id: listbox-set-locked-columns
title: LISTBOX SET LOCKED COLUMNS
slug: /commands/listbox-set-locked-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET LOCKED COLUMNS.Syntax-->**LISTBOX SET LOCKED COLUMNS** ( {* ;} *objeto* ;  *numColumnas* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET LOCKED COLUMNS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| numColumnas | Integer | &#8594;  | Número de columnas a bloquear |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.LISTBOX SET LOCKED COLUMNS.Summary-->El comando **LISTBOX SET LOCKED COLUMNS** bloquea las primeras *numColumnas* columnas izquierdas del list box designado por los parámetros *objeto* y *\**.<!-- END REF-->  
  
Las columnas bloqueadas se muestran en la parte izquierda del list box y no se desplazan con el resto de las columnas del list box. Para mayor información, consulte el Manual de *Diseño*.  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.  
  
En *numColumnas*, puede pasar cualquier valor entre 1 y el número total de columnas del list box -1\. Para un list box con X columnas, si pasa un valor > X-1 en *numColumnas*, se reducirá automáticamente al valor X-1.

Para eliminar el bloqueo de columnas, pase 0 o un valor negativo en *numColumnas*.

#### Ver también 

[LISTBOX Get locked columns](listbox-get-locked-columns.md)  
[LISTBOX SET STATIC COLUMNS](listbox-set-static-columns.md)  