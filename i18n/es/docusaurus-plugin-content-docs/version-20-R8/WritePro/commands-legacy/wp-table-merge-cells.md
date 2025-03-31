---
id: wp-table-merge-cells
title: WP TABLE MERGE CELLS
slug: /WritePro/commands/wp-table-merge-cells
displayed_sidebar: docs
---

<!--REF #_command_.WP TABLE MERGE CELLS.Syntax-->**WP TABLE MERGE CELLS** ( *targetObj* ) | ( *tableRef* ; *startColumn* ; *startRow* {; *columnCount*{; *rowCount*}} )<!-- END REF-->
<!--REF #_command_.WP TABLE MERGE CELLS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |
| tableRef | Object | &#8594;  | Referencia de la tabla |
| startColumn | Integer | &#8594;  | Posición de la primera columna de celdas |
| startRow | Integer | &#8594;  | Posición de la primera línea de columna |
| columnCount | Integer | &#8594;  | Número de columnas a fusionar |
| rowCount | Integer | &#8594;  | Número de líneas a fusionar |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.WP TABLE MERGE CELLS.Summary-->El comando **WP TABLE MERGE CELLS** fusiona la selección de celdas en el *targetObj* o *tableRef* (definido por *startColumn*, *startRow*, *columnCount* y *rowCount*).<!-- END REF-->

Pase cualquiera de los dos:

* *targetObj:*  
   * un rango, o  
   * un elemento (tabla / línea / cuerpo / párrafo / imagen anclada / encabezado / pie / sección / subsección), o bien  
   * un documento 4D Write Pro

Si *targetObj* no se intersecta con una tabla o rango de texto donde se pueda recuperar una selección de celdas, el comando no hace nada.

Si *targetObj* intersecta sólo una celda, el comando **WP TABLE MERGE CELLS** no hace nada.

**O**

* startColumn y *startRow* \- definen las coordenadas superior izquierda de la primera celda a combinar.
* columnCount y rowCount - (opcionales) - especifican respectivamente el número de columnas y el número de líneas a fusionar.  
    
Si se omite rowCount, equivale a pasar 1 (valor por defecto). Si se omiten tanto columnCount como rowCount, equivale a interseptar una única celda, por lo que no ocurre nada.

Si startColumn más ColumnCount o *startRow* más rowCount excede el número de columnas/líneas en *tableRef*, o si startColumn o *startRow* es mayor que el número de columnas/líneas en *tableRef*, el rango devuelto contiene el máximo posible de columnas/líneas lo que significa que toda la tabla se fusiona en una gran celda.

#### Ejemplo 

Desea designar un rango de celdas y fusionarlo:

```4d
 WP TABLE MERGE CELLS($table;3;2;2;4)
  //o
 $cells:=WP Table get cells($table;3;2;2;4)
 WP TABLE MERGE CELLS($cells)
```

Resultado:

![](../../assets/en/WritePro/commands/pict6398108.en.png)

  
Los datos existentes de las celdas originales se concatenan en la celda fusionada resultante.

Para más detalles, consulte *Fusión y división de celdas*.

#### Ver también 

*Manejo de tablas*  
[WP TABLE SPLIT CELLS](wp-table-split-cells.md)  