---
id: listbox-set-table-source
title: LISTBOX SET TABLE SOURCE
slug: /commands/listbox-set-table-source
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET TABLE SOURCE.Syntax-->**LISTBOX SET TABLE SOURCE** ( {* ;} *objeto* ; numTabla | tempo {; *nomSel*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET TABLE SOURCE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite*) |
| numTabla &#124; tempo | Entero largo, Cadena | &#8594;  | Número de la tabla de la cual utilizarla selección actual o nombre de la selección temporal a utilizar |
| nomSel | Text | &#8594;  | Nombre del conjunto seleccionado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX SET TABLE SOURCE.Summary-->El comando **LISTBOX SET TABLE SOURCE** permite modificar la fuente de datos mostrada en el listbox diseñado por los parámetros *\** y *objeto*

**Nota:** este comando sólo puede utilizarse cuando la propiedad “Fuente de datos” del list box es **Selección actual** o **Selección temporal** (para mayor información, consulte la sección *Gestión programada de los objetos de tipo List box*).<!-- END REF--> El comando no hace nada si lo utiliza con un list box asociado a un array, colecciones o selecciones de entidades.

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, no pase una cadena sino una referencia de variable. Para mayor infomación sobre nombres de objetos, por favor consulte la sección indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*.

Si pasa un número de tabla como parámetro *numTabla*, el list box se llenará con los datos de los registros en la selección actual de la tabla.

Si pasa un nombre de selección temporal como parámetro *tempo*, el list box se llenará con los datos de los registros que pertenecen a la selección temporal.

El parámetro opcional *nomSubrayado* permite asociar un conjunto resaltado al list box. El conjunto resaltado se utiliza para la gestión de resaltar los registros por el usuario en el list box.  
  
Si el list box ya contiene las columnas, sus contenidos se actualizarán después de la ejecución del comando.

**Nota**: por razones de optimización, este comando se procesa de manera asincrónica, es decir el cambio de fuente del listbox se realiza sólo cuando se completa la ejecución del método del cual se llama el comando.

#### Ver también 

[LISTBOX GET TABLE SOURCE](listbox-get-table-source.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1013 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


