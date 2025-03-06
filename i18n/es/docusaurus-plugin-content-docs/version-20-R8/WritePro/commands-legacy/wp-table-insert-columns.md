---
id: wp-table-insert-columns
title: WP Table insert columns
slug: /WritePro/commands/wp-table-insert-columns
displayed_sidebar: docs
---

<!--REF #_command_.WP Table insert columns.Syntax-->**WP Table insert columns** ( objRango | {*refTabla* ; *numCol*} {; *numColumns*} )  -> Resultado<!-- END REF-->
<!--REF #_command_.WP Table insert columns.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRango | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |
| refTabla | Object | &#8594;  | Referencia de tabla |
| numCol | Integer | &#8594;  | Número de columna |
| numColumns | Integer | &#8594;  | Número de columnas a insertar (valor predeterminado = 1) |
| Resultado | Object | &#8592; | Rango de columnas de la tabla |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Table insert columns.Summary-->El comando **WP Table insert columns** inserta una o varias columnas en una tabla 4D Write Pro.<!-- END REF-->.

Este comando admite dos sintaxis:

* Si pasa objTarget como primer parámetro, el comando insertará la(s) columna(s) en la primera tabla que intersecta el target. objTarget puede contener:  
   * un rango, o  
   * un elemento (línea / párrafo / cuerpo / encabezado / pie de página / imagen en línea / sección / subsección), o  
   * un documento 4D Write Pro.  
         
   Si objTarget no intersecta una tabla o rango de texto donde se pueden insertar columnas, el comando no hace nada y devuelve Null (no se genera ningún error).
* Si pasa los parámetros *refTabla* y *numCol*, el comando insertará las columnas en la tabla designada y en el índice de columna especificado. Si *numCol* es mayor que el número de columnas en *refTabla*, las columnas se agregan a la tabla en lugar de insertarse.

El parámetro opcional *numColumns* define el número de columnas a insertar en objTarget o *refTabla*. Por defecto, si se omite este parámetro, se inserta una columna.  
  
**Resultado** 
  
  
El comando devuelve un rango de columnas que representa las columnas insertadas, o Null si no se insertó nada.  
  
#### Ejemplo 

Desea insertar tres columnas después de la primera columna en la tabla *Invoice*. Este código:

```4d
 var $column : Object
 var $table : Object
 
 $table:=WP Get element by ID(WParea;"Invoice") //recuperar la tabla "Invoice"
 
 $column:=WP Table insert columns($table;2;3) //posición 2, agregue 3 columnas
```

Insertará las nuevas columnas en la ubicación correcta:

![](../../assets/en/WritePro/commands/pict4680283.en.png)  
  
  

#### Ver también 

[WP Table insert rows](wp-table-insert-rows.md)  