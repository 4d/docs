---
id: listbox-get-static-columns
title: LISTBOX Get static columns
slug: /commands/listbox-get-static-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get static columns.Syntax-->**LISTBOX Get static columns** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get static columns.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| resultado | Integer | &#8592; | Número de columnas estáticas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX Get static columns.Summary-->El comando **LISTBOX Get static columns** devuelve el número de columnas estáticas en el list box designado por los parámetros *objeto* y *\**.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.  
  
Las columnas estáticas pueden definirse vía la Lista de propiedades o con la ayuda del comando [LISTBOX SET STATIC COLUMNS](listbox-set-static-columns.md).  
  
Si una columna se inserta o se elimina por programación dentro de un conjunto de columnas estáticas, el número de columnas que devuelve este comando tiene en cuenta este cambio.  
Sin embargo, el comando no tiene en cuenta el estado visible/invisible de las columnas.  
  
**Nota:** las columnas estáticas y las columnas bloqueadas son dos funciones independientes. Para mayor información, consulte el Manual de *Diseño*.

#### Ver también 

[LISTBOX SET STATIC COLUMNS](listbox-set-static-columns.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1154 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


