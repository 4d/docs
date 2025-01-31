---
id: wp-table-merge-cells
title: WP TABLE MERGE CELLS
slug: /WritePro/commands/wp-table-merge-cells
displayed_sidebar: docs
---

<!--REF #_command_.WP TABLE MERGE CELLS.Syntax-->**WP TABLE MERGE CELLS** ( *targetObj* ) | ( *tableRef* ; *startColumn* ; *startRow* {; *columnCount*{; *rowCount*}} )<!-- END REF-->
<!--REF #_command_.WP TABLE MERGE CELLS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| tableRef | Object | &#8594;  | Table reference |
| startColumn | Integer | &#8594;  | Position of first cell column |
| startRow | Integer | &#8594;  | Position of first column row |
| columnCount | Integer | &#8594;  | Number of columns to merge |
| rowCount | Integer | &#8594;  | Number of rows to merge |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.WP TABLE MERGE CELLS.Summary-->The **WP TABLE MERGE CELLS** command merges the selection of cells in the *targetObj* or *tableRef* (defined by *startColumn*, *startRow*, *columnCount*, and *rowCount*).<!-- END REF-->

Pass either:

* *targetObj:*  
   * a range, or  
   * an element (table / row / body / paragraph / anchored image / header / footer / section / subsection), or  
   * a 4D Write Pro document

If *targetObj* does not intersect with a table or text range where a selection of cells can be retrieved, the command doesn't do anything.

If *targetObj* intersects only one cell, the **WP TABLE MERGE CELLS** command does nothing.

**OR**

* startColumn and *startRow* \- define the left top coordinates of the first cell to merge.
* columnCount and rowCount (optional) - specify respectively the number of columns and the number of rows to be merged.  
    
If rowCount is omitted, it is the equivalent of passing 1 (default value). If both columnCount and rowCount are omitted, it is the equivalent of intersecting a single cell so nothing happens.

If startColumn plus ColumnCount or *startRow* plus rowCount exceeds the number of columns/rows in *tableRef*, or if startColumn or *startRow* is greater than the number of columns/rows in *tableRef*, the returned range contains the maximum possible columns/rows which means the whole table is merged into one big cell.

#### Example 

You want to designate a range of cells and merge it together:

```4d
 WP TABLE MERGE CELLS($table;3;2;2;4)
  //or
 $cells:=WP Table get cells($table;3;2;2;4)
 WP TABLE MERGE CELLS($cells)
```

Result:

![](../../assets/en/WritePro/commands/pict6398108.en.png)

Existing data from the original cells is concatenated in the resulting merged cell. 

For more details, please refer to *Merging and splitting cells*.

#### See also 

*Handling tables*  
[WP TABLE SPLIT CELLS](wp-table-split-cells.md)  