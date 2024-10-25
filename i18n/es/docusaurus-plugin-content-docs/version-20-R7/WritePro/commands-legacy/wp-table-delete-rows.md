---
id: wp-table-delete-rows
title: WP TABLE DELETE ROWS
slug: /WritePro/commands/wp-table-delete-rows
displayed_sidebar: docs
---

<!--REF #_command_.WP TABLE DELETE ROWS.Syntax-->**WP TABLE DELETE ROWS** ( *objTarget* ) | ( *refTabla* ; *numLinea* {; *nbLineas*} )<!-- END REF-->
<!--REF #_command_.WP TABLE DELETE ROWS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objTarget | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |
| refTabla | Object | &#8594;  | Referencia de tabla |
| numLinea | Integer | &#8594;  | Número de índice de la línea |
| nbLineas | Integer | &#8594;  | Número de líneas a eliminar (valor por defecto = 1) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP TABLE DELETE ROWS.Summary-->El comando **WP TABLE DELETE ROWS** elimina una o varias líneas de una tabla 4D Write Pro.<!-- END REF-->

Este comando admite dos sintaxis:

* Si pasa un objTarget como primer parámetro, el comando eliminará todas las líneas en las tablas que se intersecta con el target. objTarget puede contener:  
   * un rango, o  
   * un elemento (fila / párrafo / cuerpo / encabezado / pie de página / imagen en línea / sección / subsección), o  
   * un documento 4D Write Pro.  
         
   Si objTarget se intersecta con varias tablas, se eliminan las filas tocadas en todas las tablas. Si objTarget no se intersecta con una tabla, el comando no hace nada (no se genera ningún error).  
   Con esta sintaxis, se ignora el parámetro *nbLineas* (si se pasa).
* Si pasa los parámetros *refTabla* y *numLinea*, el comando eliminará las líneas de la tabla designada, comenzando en el número de índice de línea especificada.  
 Con esta sintaxis, el parámetro opcional *nbLineas* define el número de líneas a eliminar de *refTabla*. De forma predeterminada, si se omite este parámetro, se elimina una línea.

Eliminar todas las líneas de una tabla eliminará toda la tabla.

#### Ejemplo 

Desea eliminar dos líneas de la tabla *Invoice*. Este código:

```4d
 var $table : Object
 
 $table:=WP Get element by ID(WParea;"Invoice") //recupera la tabla "Invoice"
 
 WP TABLE DELETE ROWS($table;3;2) //elimina 2 líneas después de la 2da línea (3ra posición)
```

Eliminará las dos líneas de la ubicación inicial:

![](../../assets/en/WritePro/commands/pict4680306.en.png)

#### Ver también 

[WP TABLE DELETE COLUMNS](wp-table-delete-columns.md)  