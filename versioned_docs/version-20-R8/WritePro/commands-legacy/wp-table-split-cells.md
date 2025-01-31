---
id: wp-table-split-cells
title: WP TABLE SPLIT CELLS
slug: /WritePro/commands/wp-table-split-cells
displayed_sidebar: docs
---

<!--REF #_command_.WP TABLE SPLIT CELLS.Syntax-->**WP TABLE SPLIT CELLS** ( *targetObj* ) | ( *tableRef* ; *startColumn* ; *startRow* {; *columnCount*{; *rowCount*}} )<!-- END REF-->
<!--REF #_command_.WP TABLE SPLIT CELLS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| tableRef | Object | &#8594;  | Table reference |
| startColumn | Integer | &#8594;  | Position of first cell column |
| startRow | Integer | &#8594;  | Position of first column row |
| columnCount | Integer | &#8594;  | Number of columns to split |
| rowCount | Integer | &#8594;  | Number of rows to split |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.WP TABLE SPLIT CELLS.Summary-->The **WP TABLE SPLIT CELLS** command splits the intersecting selection of cells in the *targetObj* or *tableRef* (defined by *startColumn*, *startRow*, *columnCount*, and *rowCount*).<!-- END REF--> A cell will be split only if it has already been merged horizontally, vertically, or both; otherwise, the cell will not be modified.

Pass either:

* *targetObj:*  
   * a range, or  
   * an element (table / row / body / paragraph / anchored image / header / footer / section / subsection), or  
   * a 4D Write Pro document

If *targetObj* does not intersect with a table or text range where a selection of cells can be retrieved, the command doesn't do anything.

If *targetObj* intersects one or many cells that haven’t been merged before, the **WP TABLE SPLIT CELLS** command does nothing.

**OR**

* startColumn and *startRow* \- define the left top coordinates of the first cell to split.
* columnCount and rowCount (optional) - specify respectively the number of columns and the number of rows to be splitted.  
    
If rowCount is omitted, it is the equivalent of passing 1 (default value). If both columnCount and rowCount are omitted, it is the equivalent of splitting a single cell, and if it hasn’t been merged before nothing happens.

If startColumn plus ColumnCount or *startRow* plus rowCount exceeds the number of columns/rows in *tableRef*, or if startColumn or *startRow* is greater than the number of columns/rows in *tableRef*, the returned range contains the maximum possible columns/rows which means every cell in the table (if it has been merged before) is splitted.

#### Example 

You want to designate a range of cells (that contain some already merged cells) and split it:

```4d
 WP TABLE SPLIT CELLS($table;3;2;1;1)
  //or
 $cells:=WP Table get cells($table;3;2;1;1)
 WP TABLE SPLIT CELLS($cells)
```

Result:

![](../../assets/en/WritePro/commands/pict6398103.en.png)

Data from the already merged cell is kept all in the first (top left) cell after the split, the other resulting cells from the split remain empty.

For more details, please refer to *Merging and splitting cells*.

#### See also 

*Handling tables*  
[WP TABLE MERGE CELLS](wp-table-merge-cells.md)  