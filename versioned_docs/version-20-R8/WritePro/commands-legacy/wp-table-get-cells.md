---
id: wp-table-get-cells
title: WP Table get cells
slug: /WritePro/commands/wp-table-get-cells
displayed_sidebar: docs
---

<!--REF #_command_.WP Table get cells.Syntax-->**WP Table get cells** ( *targetObj* ) | ( *tableRef* ; *startCol* ; *startRow* {; *numCols*{; *numRows*}} )  : Object<!-- END REF-->
<!--REF #_command_.WP Table get cells.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| tableRef | Object | &#8594;  | Table reference |
| startCol | Integer | &#8594;  | Position of first cell column |
| startRow | Integer | &#8594;  | Position of first column row |
| numCols | Integer | &#8594;  | Number of columns to get |
| numRows | Integer | &#8594;  | Number of rows to get |
| Function result | Object | &#8592; | New range containing cells |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Table get cells.Summary-->The **WP Table get cells** command returns a new cell range object containing the selection of cells in the *targetObj* or *tableRef* (defined by *startCol*, *startRow*, *numCols*, and *numRows*).<!-- END REF-->

Pass either:

* *targetObj:*  
   * a range, or  
   * an element (row / paragraph / body / header / footer / inline picture / section / subsection), or  
   * a 4D Write Pro document

If *targetObj* does not intersect with a table or text range where a selection of cells can be retrieved, the command returns Null.

**OR**

* *startCol* and *startRow* \- define the left top coordinates of the first cell to get.
* (optional) *numCols* and *numRows* \- specify respectively the number of columns and the number of rows to get for the cell range.  
    
If *numRows* is omitted, a single row is returned. If both *numCols* and *numRows* are omitted, the returned range contains a single cell.

If *startCol* plus *numCols* or *startRow* plus *numRows* exceeds the number of columns/rows in *tableRef*, or if *startCol* or *startRow* is greater than the number of columns/rows in *tableRef*, the returned range contains the maximum possible columns/rows.

#### Example 1 

You want to modifiy the attributes of a range of cells:

```4d
 var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3;$wpRow4;$wpRow5;$cells : Object
 $wpRange:=WP Create range(WParea;wk start text;wk end text)
 
 $wpTable:=WP Insert table($wpRange;wk append)
 $wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)
 $wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)
 $wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18)
 $wpRow4:=WP Table append row($wpTable;"Christopher";"Lee";53)
 $wpRow5:=WP Table append row($wpTable;"Henry";"Cartier";42)
 
 $cells:=WP Table get cells($wpTable;2;2;2;2)
 WP SET ATTRIBUTES($cells;wk background color;0x00E0E0E0)
 WP SET ATTRIBUTES($cells;wk text color;"blue")
 WP SET ATTRIBUTES($cells;wk border color;0x00E000E0)
 WP SET ATTRIBUTES($cells;wk text align;wk center)
```

  
Result: 

![](../../assets/en/WritePro/commands/pict3307320.en.png)

#### Example 2 

To get a range of cells starting from the cell "5x7" to the end of the row:

```4d
 $cellRange:=WP Table get cells(tableRef;5;7;MAXLONG;1)
```

To get a range of cells starting from the cell "5x7" to the end of the column:

```4d
 $cellRange:=WP Table get cells(tableRef;5;7;1;MAXLONG)
```

To get a range of cells starting from the cell "5x7" to the end of the table:

```4d
 $cellRange:=WP Table get cells(tableRef;5;7;MAXLONG;MAXLONG)
```

#### Example 3 

You want to retrieve the cells a user has selected:

```4d
 var $userSelection;$cells : Object
 
 $userSelection:=WP Selection range(myWPArea)
 
 $cells:=WP Table get cells($userSelection)
```

#### See also 

[WP Table get columns](wp-table-get-columns.md)  
[WP Table get rows](wp-table-get-rows.md)  