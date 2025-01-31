---
id: wp-table-get-columns
title: WP Table get columns
slug: /WritePro/commands/wp-table-get-columns
displayed_sidebar: docs
---

<!--REF #_command_.WP Table get columns.Syntax-->**WP Table get columns** ( *targetObj* ) | ( *tableRef* ; *startCol* {; *numCols*} )  : Object<!-- END REF-->
<!--REF #_command_.WP Table get columns.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| tableRef | Object | &#8594;  | Table reference |
| startCol | Integer | &#8594;  | Position of first column |
| numCols | Integer | &#8594;  | Number of columns to get |
| Function result | Object | &#8592; | New table range containing selected columns |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Table get columns.Summary-->The **WP Table get columns** command returns a new cell range object containing the selection of columns from *targetObj* or *tableRef* (defined by *startCol* and *numCols*).<!-- END REF--> 

Pass either:

* *targetObj:*  
   * a range, or  
   * an element (row / paragraph / body / header / footer / inline picture / section / subsection), or  
   * a 4D Write Pro document

If *targetObj* does not intersect with a table or text range where a selection of columns can be retrieved, the command returns Null.

**OR**

* *tableRef* \- the reference of the table whose selection of columns you want to get.
* *startCol* \- points to the first table column to return, and
* (optional) *numCols* \- specifies how many columns to return. If *numCols* is omitted, the single *startCol* column is returned.  
    
If *startCol* plus *numCols* exceed the number of columns in *tableRef*, or if *startCol* is greater than the number of columns in *tableRef*, the returned range contains the maximum possible columns.

#### Example 1 

You want to modify the attributes of the last two columns of a table:

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

  
Result:

![](../../assets/en/WritePro/commands/pict3307213.en.png)

#### Example 2 

To get a range of columns starting from the 10th to the end:

```4d
 WP Table get columns(tableRef;10;MAXLONG)
```

#### Example 3 

You want to retrieve the columns a user has selected:

```4d
 var $userSelection;$columns : Object
 
 $userSelection:=WP Selection range(myWPArea)
 
 $columns:=WP Table get columns($userSelection)
```

#### See also 

[WP Table get cells](wp-table-get-cells.md)  
[WP Table get rows](wp-table-get-rows.md)  