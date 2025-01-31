---
id: wp-table-range
title: WP Table range
slug: /WritePro/commands/wp-table-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Table range.Syntax-->**WP Table range** ( *targetObj* ) : Object<!-- END REF-->
<!--REF #_command_.WP Table range.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| Function result | Object | &#8592; | Range object containing tables only |

<!-- END REF-->

#### Compatibility 

<!--REF #_command_.WP Table range.Summary-->**WP Table range** was named **WP Create table range** in previous versions of 4D Write Pro.<!-- END REF--> It has been renamed for clarity. 

#### Description 

The **WP Table range** command returns a range object that addresses only the tables that intersect with the *targetObj* you passed as parameter. It will return a range of the wk type table, even if the *targetObj* you passed as parameter does not contain a table. The table range object returned can be used by [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) and [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) to handle attributes that apply to tables and table contents. 

In the *targetObj* parameter, you can pass:

* a range, or
* an element (body / header / footer / paragraph / section / subsection), or
* a 4D Write Pro document

#### Example 

You want to modify the look of the tables contained in the table range: 

```4d
 tableRange:=WP Table range(myDoc)
  //table attributes
 WP SET ATTRIBUTES(tableRange;wk border style;wk solid;wk border color;"Blue";wk border width;"3px")
 WP SET ATTRIBUTES(tableRange;wk table align;wk center)
  //text attributes   
 WP SET ATTRIBUTES(tableRange;wk font size;12)
 WP SET ATTRIBUTES(tableRange;wk text transform;wk capitalize)
 WP SET ATTRIBUTES(tableRange;wk font bold;wk true)
```

#### See also 

[WP Get elements](wp-get-elements.md)  
[WP Text range](wp-text-range.md)  