---
id: wp-table-insert-columns
title: WP Table insert columns
slug: /WritePro/commands/wp-table-insert-columns
displayed_sidebar: docs
---

<!--REF #_command_.WP Table insert columns.Syntax-->**WP Table insert columns** ( targetObj | {*tableRef* ; *colNumber*} {; *numColumns*} )  : Object<!-- END REF-->
<!--REF #_command_.WP Table insert columns.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| tableRef | Object | &#8594;  | Table reference |
| colNumber | Integer | &#8594;  | Column number |
| numColumns | Integer | &#8594;  | Number of columns to insert (default value = 1) |
| Function result | Object | &#8592; | Range of table columns |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Table insert columns.Summary-->The **WP Table insert columns** command inserts one or several column(s) into a 4D Write Pro table.<!-- END REF-->

This command supports two syntaxes:

* If you pass a targetObj as the first parameter, the command will insert the column(s) in the first table intersecting the target. *targetObj* can contain:  
   * a range, or  
   * an element (row / paragraph / body / header / footer / inline picture / section / subsection), or  
   * a 4D Write Pro document.  
         
   If *targetObj* does not intersect with a table or text range where columns can be inserted, the command does nothing and returns Null (no error is generated).
* If you pass both a *tableRef* and a *colNumber* as parameters, the command will insert the column(s) in the designated table and at the specified column index. If the *col* *Number* is higher than the number of columns in *tableRef*, the columns are appended to the table rather than inserted.

The optional *numColumns* parameter defines the number of columns to insert into *targetObj* or *tableRef*. By default, if this parameter is omitted, one column is inserted.

**Result**  
  
The command returns a column range representing inserted column(s), or Null if nothing was inserted. 

#### Example 

You want to insert three columns after first column in the *Invoice* table. This code:

```4d
 var $column : Object
 var $table : Object
 
 $table:=WP Get element by ID(WParea;"Invoice") //retrieve "Invoice" table
 
 $column:=WP Table insert columns($table;2;3) //position 2, add 3 columns
```

Will insert the new columns at the correct location:

![](../../assets/en/WritePro/commands/pict4680283.en.png)

#### See also 

[WP Table insert rows](wp-table-insert-rows.md)  