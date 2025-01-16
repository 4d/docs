---
id: wp-insert-table
title: WP Insert table
slug: /WritePro/commands/wp-insert-table
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert table.Syntax-->**WP Insert table** ( *targetObj* ; *mode* {; *rangeUpdate* {; *nbCols* {; *nbRows*}}} ) : Object<!-- END REF-->
<!--REF #_command_.WP Insert table.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| mode | Integer | &#8594;  | Insertion mode |
| rangeUpdate | Integer | &#8594;  | Range update mode |
| nbCols | Integer | &#8594;  | Number of columns to set in the table |
| nbRows | Integer | &#8594;  | Number of rows to set in the table |
| Function result | Object | &#8592; | Table object |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Insert table.Summary-->The **WP Insert table** command inserts a new table in the *targetObj* according to the specified insertion *mode* and returns the corresponding new table object.<!-- END REF--> Optionally, you can pass a *rangeUpdate* parameter as well as a predefined number of columns and rows in *nbCols* and *nbRows*.

In *targetObj*, pass:

* a range, or
* an element (table / paragraph / body / header / footer / inline picture / section / subsection), or
* a 4D Write Pro document.

**Note:** If *targetObj* is a table, the newly inserted table will replace or be inserted before or after it, depending on the *mode* used. Inserting a table within another table is not possible.

In the *mode* parameter, pass one of the following constants to indicate the insertion mode to be used for the table in the document:

| Constant   | Type    | Value | Comment                                |
| ---------- | ------- | ----- | -------------------------------------- |
| wk append  | Integer | 2     | Insert contents at end of target       |
| wk prepend | Integer | 1     | Insert contents at beginning of target |
| wk replace | Integer | 0     | Replace target contents                |

* If *targetObj* is a range, you can use the optional *rangeUpdate* parameter to pass one of the following constants to specify whether or not the inserted table is included in the resulting range:  
    
| Constant              | Type    | Value | Comment                                               |  
| --------------------- | ------- | ----- | ----------------------------------------------------- |  
| wk exclude from range | Integer | 1     | Inserted contents not included in updated range       |  
| wk include in range   | Integer | 0     | Inserted contents included in updated range (default) |  
    
If you do not pass a *rangeUpdate* parameter, by default the inserted table is included in the resulting range.
* If *targetObj* is not a range, *rangeUpdate* is ignored.

You can pass in *nbCols* and *nbRows* the number of columns and rows to define in the table. By default, if *nbCols* and *nbRows* are omitted, a new table with 0 column and 0 row is created. You will then be able to add these elements using the [WP Table append row](../commands/wp-table-append-row.md) command.

The command returns the new table as a table object, that you can pass thereafter to the other WP table commands. The table is created with default font, border, and color attributes that you can customize using the [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) command.

#### Example 

In a blank document, you want to add a new table with 3 columns and 2 rows:

```4d
 var $WPRange;$WPTable : Object
 $WPRange:=WP Text range(WParea;wk start text;wk end text)
 $WPTable:=WP Insert table($WPRange;wk append;wk exclude from range;3;2)
```

Result:

![](../../assets/en/WritePro/commands/pict3306926.en.png)

#### See also 

[WP Table append row](../commands/wp-table-append-row.md)  
[WP Table get rows](wp-table-get-rows.md)  