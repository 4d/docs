---
id: wp-table-append-row
title: WP Table append row
slug: /WritePro/commands/wp-table-append-row
displayed_sidebar: docs
---

<!--REF #_command_.WP Table append row.Syntax-->**WP Table append row** ( *refTabla* ; *valor* {; *valor2* ; ... ; *valorN*} )  -> Resultado<!-- END REF-->
<!--REF #_command_.WP Table append row.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refTabla | Object | &#8594;  | Referencia de tabla |
| valor | Text, Number, Time, Date, Picture | &#8594;  | Valor(es) a definir en la fila |
| Resultado | Object | &#8592; | Objeto de rango de fila |

<!-- END REF-->

## Descripción 

<!--REF #_command_.WP Table append row.Summary-->El comando **WP Table append row** agrega una fila a la tabla *refTabla*, la llena con *valor*(es) y devuelve el objeto de rango de fila correspondiente.<!-- END REF-->

El comando agrega tantas celdas en la fila como hay valores en el parámetro *valor*. Puede pasar cualquier número de valores de diferentes tipos; La alineación de celda predeterminada dependerá del tipo de valor:

* texto: alineado a la izquierda
* imágenes: centrado
* otro tipo (números, fecha y hora): alineado a la derecha

**Nota:** los valores de tipo de array no son soportados.

El comando devuelve la nueva fila como un objeto de rango de fila.

## Ejemplo 1 

Desea crear una tabla vacía y agregar varias filas de diferentes tamaños. Puedes escribir:

```4d
 var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3 : Object
 $wpRange:=WP Text range(WParea;wk start text;wk end text)
 $wpTable:=WP Insert table($wpRange;wk append)
 $wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)
 $wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)
 $wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18;"New!")
```

![](../../assets/en/WritePro/commands/pict3306976.en.png)

## Ejemplo 2 

En una aplicación de factura, usted desea crear una tabla llenada automáticamente con las líneas de factura relacionadas:

```4d
 var $wpTable;$wpRange : Object

$wpRange:=WP Text range(4DWPArea;wk start text;wk end text)
 
 $wpTable:=WP Insert table($wpRange;wk append) //create the table
 
  // añadir la fila de encabezado
 $row:=WP Table append row($wpTable;"Name";"Quantity";"Unit Price";"Discount Rate";"Total")
 WP SET ATTRIBUTES($row;wk font bold;wk true;wk text align;wk center)
 
  //simplemente aplicar a la selección
 APPLY TO SELECTION([INVOICE_LINES];WP Table append row($wpTable;[INVOICE_LINES]ProductName;[INVOICE_LINES]Quantity;[INVOICE_LINES]ProductUnitPrice;[INVOICE_LINES]DiscountRate;[INVOICE_LINES]Total))
 
  //añadir una fila de pie
 $row:=WP Table append row($wpTable;"Total:";Sum([INVOICE_LINES]Quantity);"";"";Sum([INVOICE_LINES]Total))
 
  //formatear la tabla
 $range:=WP Table get columns($wpTable;1;5)
 WP SET ATTRIBUTES($range;wk width;"80pt")
 WP SET ATTRIBUTES($wpTable;wk font size;10)


```

![](../../assets/en/WritePro/commands/pict3369663.en.png)

## Ver también 

[WP Insert table](wp-insert-table.md)  
[WP Table get rows](wp-table-get-rows.md)  