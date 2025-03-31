---
id: wp-table-delete-columns
title: WP TABLE DELETE COLUMNS
slug: /WritePro/commands/wp-table-delete-columns
displayed_sidebar: docs
---

<!--REF #_command_.WP TABLE DELETE COLUMNS.Syntax-->**WP TABLE DELETE COLUMNS** ( *targetObj* ) | ( *tableRef* ; *colNumber* {; *numColumns*} )<!-- END REF-->
<!--REF #_command_.WP TABLE DELETE COLUMNS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| tableRef | Object | &#8594;  | Table reference |
| colNumber | Integer | &#8594;  | Column number |
| numColumns | Integer | &#8594;  | Number of columns to delete (default value = 1) |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP TABLE DELETE COLUMNS.Summary-->The **WP TABLE DELETE COLUMNS** command removes one or several column(s) from a 4D Write table.<!-- END REF-->

This command supports two syntaxes:

* If you pass a targetObj as the first parameter, the command will remove all of the columns in table(s) intersecting the target. *targetObj* can contain:  
   * a range, or  
   * an element (row / paragraph / body / header / footer / inline picture / section / subsection), or  
   * a 4D Write Pro document.  
         
   If *targetObj* intersects with several tables, touched columns in all tables are removed. If *targetObj* does not intersect with a table, the command does nothing (no error is generated).  
   With this syntax, the *numColumns* parameter (if passed) is ignored.
* If you pass both a *tableRef* and a *colNumber*, the command will remove the column(s) in the designated table, starting at the specified column index.  
With this syntax, the optional *numColumns* parameter defines the number of columns to remove from *tableRef*. By default, if this parameter is omitted, one column is removed.

Removing all columns of a table will remove the entire table.

#### Example 

You want to delete one column from the *Invoice* table. This code:

```4d
 var $table : Object
 
 $table:=WP Get element by ID(WParea;"Invoice") //retrieve "Invoice" table
 
 WP TABLE DELETE COLUMNS($table;2;1) //remove the second column
```

Will remove the column from the correct location:

![](../../assets/en/WritePro/commands/pict4680318.en.png)

#### See also 

[WP TABLE DELETE ROWS](wp-table-delete-rows.md)  