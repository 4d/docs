---
id: listbox-set-static-columns
title: LISTBOX SET STATIC COLUMNS
slug: /commands/listbox-set-static-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Syntax-->**LISTBOX SET STATIC COLUMNS** ( {* ;} *objeto* ; *numColumnas* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| numColumnas | Integer | &#8594;  | Número de columnas a convertir estáticas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Summary-->El comando **LISTBOX SET STATIC COLUMNS** define las primeras *numColumnas* columnas (empezando por la izquierda) en el list box designado por los parámetros *objeto* y *\**.<!-- END REF-->

Las columnas estáticas no pueden moverse en el list box.

**Nota:** las columnas estáticas y las columnas bloqueadas son dos funcionalidades independientes. Para mayor información, consulte el manual de *Diseño*.

#### Ver también 

[LISTBOX Get static columns](listbox-get-static-columns.md)  
[LISTBOX SET LOCKED COLUMNS](listbox-set-locked-columns.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1153 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


