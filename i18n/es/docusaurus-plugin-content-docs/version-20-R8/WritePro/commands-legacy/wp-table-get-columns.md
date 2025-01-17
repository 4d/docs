---
id: wp-table-get-columns
title: WP Table get columns
slug: /WritePro/commands/wp-table-get-columns
displayed_sidebar: docs
---

<!--REF #_command_.WP Table get columns.Syntax-->**WP Table get columns**  ( *objTarget* ) | ( *refTabla* ; *colIni* {; *numCol*} )  -> Resultado<!-- END REF-->
<!--REF #_command_.WP Table get columns.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objTarget | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |
| refTabla | Object | &#8594;  | Referencia de tabla |
| colIni | Integer | &#8594;  | Posición de la primera columna |
| numCol | Integer | &#8594;  | Número de columnas a obtener |
| Resultado | Object | &#8592; | Nuevo rango de tabla que contiene columnas seleccionadas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Table get columns.Summary-->El comando **WP Table get columns**  devuelve un nuevo objeto de rango de celdas que contiene la selección de columnas *objTarget* o *refTabla* (definida por *colIni* y *numCol*).<!-- END REF--> 

Pase:

* *objTarget* *:*  
   * a rango, o  
   * un elemento (fila / párrafo / cuerpo / encabezado / pie de página / imagen en línea / sección / subsección), o  
   * un documento 4D Write Pro

Si *objTarget* no se cruza con una tabla o rango de texto donde se puede recuperar una selección de columnas, el comando devuelve Null.

**O**

* *refTabla*\- la referencia de la tabla cuya selección de columnas desea obtener.
* *colIni* \- apunta a la primera columna de la tabla a devolver, y
* (opcional) *numCol* \- especifica cuántas columnas devolver. Si se omiten *numCol*, se devuelve la única columna *colIni*.  
    
Si *colIni* más *numCol* excede el número de columnas en *refTabla*, o si *colIni* es mayor que el número de columnas en *refTabla*, el rango devuelto contiene el máximo posible de columnas.

#### Ejemplo 1 

Usted desea modificar algunos atributos de las dos últimas columnas de una tabla:

```4d
 var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3;$wpRow4;$wpRow5;$cols : Object
 $wpRange:=WP Create range(WParea;wk start text;wk end text)
 $wpTable:=WP Insert table($wpRange;wk append)
 $wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)
 $wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)
 $wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18)
 $wpRow4:=WP Table append row($wpTable;"Christopher";"Lee";53)
 $wpRow5:=WP Table append row($wpTable;"Henry";"Cartier";42)
 
 $cols:=WP Table get columns($wpTable;2;2)
 WP SET ATTRIBUTES($cols;wk background color;0x00E0E0E0;wk text color;"red";wk height;"36pt";wk text align;wk center)
```

Resultado:

![](../../assets/en/WritePro/commands/pict3307213.en.png)

#### Ejemplo 2 

Para obtener un rango de columnas desde el 10 hasta el final:

```4d
 WP Table get columns(tableRef;10;MAXLONG)
```

#### Ejemplo 3 

Desea recuperar las columnas que un usuario ha seleccionado:

```4d
 var $userSelection;$columns : Object
 
 $userSelection:=WP Selection range(myWPArea)
 
 $columns:=WP Table get columns($userSelection)
```

#### Ver también 

[WP Table get cells](wp-table-get-cells.md)  
[WP Table get rows](wp-table-get-rows.md)  