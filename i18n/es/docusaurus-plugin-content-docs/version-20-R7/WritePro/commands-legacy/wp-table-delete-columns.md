---
id: wp-table-delete-columns
title: WP TABLE DELETE COLUMNS
slug: /WritePro/commands/wp-table-delete-columns
displayed_sidebar: docs
---

<!--REF #_command_.WP TABLE DELETE COLUMNS.Syntax-->**WP TABLE DELETE COLUMNS** ( *objTarget* ) | ( *refTabla* ; *numCol* {; *numColumns*} )<!-- END REF-->
<!--REF #_command_.WP TABLE DELETE COLUMNS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objTarget | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |
| refTabla | Object | &#8594;  | Referencia de tabla |
| numCol | Integer | &#8594;  | Número de columna |
| numColumns | Integer | &#8594;  | Número de columnas a eliminar (valor por defecto = 1) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP TABLE DELETE COLUMNS.Summary-->El comando **WP TABLE DELETE COLUMNS** elimina una o varias columnas de una tabla 4D Write.<!-- END REF-->

Este comando admite dos sintaxis:

* Si pasa objTarget como primer parámetro, el comando eliminará todas las columnas en las tablas que se intersectan con el target. objTarget puede contener:  
   * un rango, o  
   * un elemento (fila / párrafo / cuerpo / encabezado / pie de página / imagen en línea / sección / subsección), o  
   * un documento 4D Write Pro.  
         
   Si objTarget varias tablas, las columnas intersectadas en todas las tablas se eliminan. Si objTarget no intersecta una tabla, el comando no hace nada (no se genera ningún error).  
   Con esta sintaxis, se ignora el parámetro *numColumns* (si se pasa).
* Si pasa los parámetros *refTabla* y *numCol*, el comando eliminará las columnas en la tabla designada, comenzando por el índice de columna especificado.  
Con esta sintaxis, el parámetro opcional *numColumns* define el número de columnas a eliminar de *refTabla*. De forma predeterminada, si se omite este parámetro, se elimina una columna.

Eliminar todas las columnas de una tabla eliminará toda la tabla.  
  
#### Ejemplo 

Desea eliminar una columna de la tabla *Invoice*. Este código:

```4d
 var $table : Object
 
 $table:=WP Get element by ID(WParea;"Invoice") //recupera la tabla "Invoice"
 
 WP TABLE DELETE COLUMNS($table;2;1) //elimina la segunda columna
```

Eliminará la columna de la ubicación correcta:

![](../../assets/en/WritePro/commands/pict4680318.en.png)

#### Ver también 

[WP TABLE DELETE ROWS](wp-table-delete-rows.md)  