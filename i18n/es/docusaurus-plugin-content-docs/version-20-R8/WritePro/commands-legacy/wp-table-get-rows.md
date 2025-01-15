---
id: wp-table-get-rows
title: WP Table get rows
slug: /WritePro/commands/wp-table-get-rows
displayed_sidebar: docs
---

<!--REF #_command_.WP Table get rows.Syntax-->**WP Table get rows** ( *objTarget* ) | ( *refTabla* ; *lineaIni* {; *numLíneas*} )  -> Resultado<!-- END REF-->
<!--REF #_command_.WP Table get rows.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objTarget | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |
| refTabla | Object | &#8594;  | Referencia de tabla |
| lineaIni | Integer, Text | &#8594;  | Posición de la primera línea |
| numLíneas | Integer | &#8594;  | Número de líneas a obtener |
| Resultado | Object | &#8592; | Nuevo rango de líneas que contiene las filas seleccionadas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Table get rows.Summary-->El comando **WP Table get rows** \[#descv\]devuelve un nuevo objeto de rango de líneas que contiene una selección de las líneas de *objTarget* o *refTabla*.<!-- END REF-->

Pase:

* *objTarget* *:*  
   * un rango, o  
   * un elemento (fila / párrafo / cuerpo / encabezado / pie de página / imagen en línea / sección / subsección), o  
   * un documento 4D Write Pro

Si *objTarget* no se cruza con una tabla o rango de texto donde se puede recuperar una selección de filas, el comando devuelve Null.

**O**

* *refTabla*: la referencia de la tabla cuya selección de filas desea obtener.
* *lineaIni*: apunta a la primera fila de la tabla a devolver y
* (opcional) *numLineas* \- especifica cuántas filas se devuelven. Si se omite *numLineas*, se devuelve la fila *lineaIni*.  
    
Si *lineaIni* más *numLineas* exceden el número de filas en *refTabla*, o si *lineaIni* es mayor que el número de filas en *refTabla*, el rango devuelto contiene el máximo número de filas posible.

**O**

* *refTabla:* la referencia de la tabla cuya(s) línea(s) de encabezado desea obtener.
* *wk header rows:* para indicar que se desea obtener las líneas de encabezado  
    
En ese caso, el comando devuelve un rango de líneas que contiene las líneas de encabezado repetidas (si se pasa, se ignora el parámetro numFilas). El comando devuelve Null si no hay filas de encabezado definidas.

#### Ejemplo 1 

Desea definir un color de fondo específico para las dos primeras líneas de una tabla y modificar el borde de la tercera línea:

```4d
 var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3;$wpRow4;$wpRow5;$rows;$rows2 : Object
 $wpRange:=WP Text range(WParea;wk start text;wk end text)
 
 $wpTable:=WP Insert table($wpRange;wk append)
 $wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)
 $wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)
 $wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18)
 $wpRow4:=WP Table append row($wpTable;"Christopher";"Lee";53)
 $wpRow5:=WP Table append row($wpTable;"Henry";"Cartier";42)
 
 $rows:=WP Table get rows($wpTable;1;2)
 WP SET ATTRIBUTES($rows;wk background color;0x00E0F0FF)
 $rows2:=WP Table get rows($wpTable;3)
 WP SET ATTRIBUTES($rows2;wk border style;wk solid)
 WP SET ATTRIBUTES($rows2;wk border width;4)
```

  
![](../../assets/en/WritePro/commands/pict3307142.en.png)

#### Ejemplo 2 

Para obtener un rango de líneas desde el 10 hasta el final:

```4d
 WP Table get rows(tableRef;10;MAXLONG)
```

#### Ejemplo 3 

Desea recuperar las líneas que un usuario ha seleccionado:

```4d
 var $userSelection;$rows : Object
 
 $userSelection:=WP Selection range(myWPArea)
 
 $rows:=WP Table get rows($userSelection)
```

#### Ejemplo 4 

El siguiente ejemplo:

1. Obtiene las dos primeras líneas de la primera tabla de WParea.
2. Las define como líneas de encabezado.
3. Define su color de texto en blanco y su color de fondo en negro.

```4d
 var $table;$range : Object
 
 $table:=WP Get elements(WParea;wk type table)[0]  // Selecciona la primera tabla en WParea
 
 WP SET ATTRIBUTES($table;wk header row count;2) // Define las dos primeras líneas como líneas de encabezado
 
 $range:=WP Table get rows($table;wk header rows) // Obtiene las líneas de encabezado definidas anteriormente
 
 WP SET ATTRIBUTES($range;wk text color;"white";wk background color;"#000") // Define el texto y el color de fondo de las líneas de encabezado
 
```

#### Ver también 

[WP Insert table](wp-insert-table.md)  
[WP Table append row](../commands/wp-table-append-row.md)  
[WP Table get cells](wp-table-get-cells.md)  
[WP Table get columns ](wp-table-get-columns.md)  