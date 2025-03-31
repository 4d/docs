---
id: wp-table-append-row
title: WP Table append row
slug: /WritePro/commands/wp-table-append-row
displayed_sidebar: docs
---

<!--REF #_command_.WP Table append row.Syntax-->**WP Table append row** ( *tableRef* ; *value* {; *value2* ; ... ; *valueN*} )  : Object<!-- END REF-->
<!--REF #_command_.WP Table append row.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| tableRef | Object | &#8594;  | Table reference |
| value | Text, Number, Time, Date, Picture | &#8594;  | Value(s) to set in the row |
| Function result | Object | &#8592; | Row range object |

<!-- END REF-->

## Description 

<!--REF #_command_.WP Table append row.Summary-->The **WP Table append row** command appends one row to the *tableRef* table, fills it with *value*(s) and returns the corresponding row range object.<!-- END REF-->

The command adds as many cells in the row as there are values in the *value* parameter. You can pass any number of values of different types; the default cell alignment will depend on the value type:

* text: left aligned
* pictures: centered
* other type (numbers, date, and time): right aligned

**Note:** Array type values are not supported. 

The command returns the new row as a row range object. 

## Example 1 

You want to create an empty table and append several rows of different sizes. You can write:

```4d
 var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3 : Object
 $wpRange:=WP Text range(WParea;wk start text;wk end text)
 $wpTable:=WP Insert table($wpRange;wk append)
 $wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)
 $wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)
 $wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18;"New!")
```

![](../../assets/en/WritePro/commands/pict3306976.en.png)

## Example 2 

In a billing application, you want to create a table automatically filled with related invoice lines:

```4d
 var $wpTable;$wpRange : Object
 
 $wpRange:=WP Text range(4DWPArea;wk start text;wk end text)
 
 $wpTable:=WP Insert table($wpRange;wk append) //create the table
 
  // add the header row
 $row:=WP Table append row($wpTable;"Name";"Quantity";"Unit Price";"Discount Rate";"Total")
 WP SET ATTRIBUTES($row;wk font bold;wk true;wk text align;wk center)
 
  //simply apply to selection
 APPLY TO SELECTION([INVOICE_LINES];WP Table append row($wpTable;[INVOICE_LINES]ProductName;[INVOICE_LINES]Quantity;[INVOICE_LINES]ProductUnitPrice;[INVOICE_LINES]DiscountRate;[INVOICE_LINES]Total))
 
  //add a footer row
 $row:=WP Table append row($wpTable;"Total:";Sum([INVOICE_LINES]Quantity);"";"";Sum([INVOICE_LINES]Total))
 
  //format the table
 $range:=WP Table get columns($wpTable;1;5)
 WP SET ATTRIBUTES($range;wk width;"80pt")
 WP SET ATTRIBUTES($wpTable;wk font size;10)
```

![](../../assets/en/WritePro/commands/pict3369663.en.png)

## See also 

[WP Insert table](wp-insert-table.md)  
[WP Table get rows](wp-table-get-rows.md)  