---
id: wp-table-delete-rows
title: WP TABLE DELETE ROWS
slug: /WritePro/commands/wp-table-delete-rows
displayed_sidebar: docs
---

<!--REF #_command_.WP TABLE DELETE ROWS.Syntax-->**WP TABLE DELETE ROWS** ( *targetObj* ) | ( *tableRef* ; *rowNumber* {; *numRows*} )<!-- END REF-->
<!--REF #_command_.WP TABLE DELETE ROWS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| tableRef | Object | &#8594;  | Table reference |
| rowNumber | Integer | &#8594;  | Row index number |
| numRows | Integer | &#8594;  | Number of rows to delete (default value = 1) |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP TABLE DELETE ROWS.Summary-->The **WP TABLE DELETE ROWS** command removes one or several row(s) from a 4D Write Pro table.<!-- END REF-->

This command supports two syntaxes:

* If you pass a targetObj as the first parameter, the command will remove all the rows in table(s) intersecting the target. *targetObj* can contain:  
   * a range, or  
   * an element (row / paragraph / body / header / footer / inline picture / section / subsection), or  
   * a 4D Write Pro document.  
         
   If *targetObj* intersects with several tables, touched rows in all tables are removed. If *targetObj* does not intersect with a table, the command does nothing (no error is generated).  
   With this syntax, the *numRows* parameter (if passed) is ignored.
* If you pass both a *tableRef* and a *rowNumber*, the command will remove the row(s) in the designated table, starting at the specified row index number.  
With this syntax, the optional *numRows* parameter defines the number of rows to remove from *tableRef*. By default, if this parameter is omitted, one row is removed.

Removing all rows of a table will remove the entire table.

#### Example 

You want to delete two rows from the *Invoice* table. This code:

```4d
 var $table : Object
 
 $table:=WP Get element by ID(WParea;"Invoice") //retrieve "Invoice" table
 
 WP TABLE DELETE ROWS($table;3;2) //remove 2 rows after 2nd row (3rd position)
```

Will remove the two rows from the correct location:

![](../../assets/en/WritePro/commands/pict4680306.en.png)

#### See also 

[WP TABLE DELETE COLUMNS](wp-table-delete-columns.md)  