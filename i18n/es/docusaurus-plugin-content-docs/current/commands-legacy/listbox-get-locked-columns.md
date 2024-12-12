---
id: listbox-get-locked-columns
title: LISTBOX Get locked columns
slug: /commands/listbox-get-locked-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get locked columns.Syntax-->**LISTBOX Get locked columns** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get locked columns.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| resultado | Integer | &#8592; | Número de columnas bloqueadas |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.LISTBOX Get locked columns.Summary-->El comando **LISTBOX Get locked columns** devuelve el número de columnas bloqueadas en el list box designado por los parámetros *objeto* y *\**.<!-- END REF-->  
  
 Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.  
  
 Las columnas pueden desbloquearse vía la Lista de propiedades o con la ayuda del comando [LISTBOX SET LOCKED COLUMNS](listbox-set-locked-columns.md). Para mayor información, consulte el manual de *Diseño*.  
  
 Si una columna se inserta o se elimina por programación dentro de un área de bloqueo, el número de columnas devueltas por este comando tiene en cuenta este cambio.  
 Sin embargo, el comando no tiene en cuenta el estado visible/invisible de las columnas.  

#### Ver también 

[LISTBOX SET LOCKED COLUMNS](listbox-set-locked-columns.md)  