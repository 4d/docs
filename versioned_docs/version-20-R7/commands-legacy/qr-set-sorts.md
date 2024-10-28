---
id: qr-set-sorts
title: QR SET SORTS
slug: /commands/qr-set-sorts
displayed_sidebar: docs
---

<!--REF #_command_.QR SET SORTS.Syntax-->**QR SET SORTS** ( *area* ; *aColumns* {; *aOrders*} )<!-- END REF-->
<!--REF #_command_.QR SET SORTS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| aColumns | Real array | &#8594;  | Columns |
| aOrders | Real array | &#8594;  | Sort orders |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.QR SET SORTS.Summary-->The QR SET SORTS command sets the sort orders for the columns in the report whose reference is passed in *area*.<!-- END REF-->

*aColumns*: in this array, you need to store the column numbers of columns to which you want to assign a sort order.

*aOrders*: each element of this array must contain the sort orders for the matching column in the *aColumns* array. 

* If *aOrders{$i}* is 1, the sort order is ascending.
* If *aOrders{$i}* is -1, the sort order is descending.

##### Cross-table mode 

In the case of cross-table mode, you cannot have more than two items in the array. You can only sort columns (1) and rows (2). The data (that are the intersection of columns and rows) cannot be sorted.

Here is the code to sort only the rows in the case of a cross-table report:

```4d
 ARRAY REAL($aColumns;1)
 $aColumns{1}:=2
 ARRAY REAL($aOrders;1)
 $aOrders{1}:=-1 //Alphabetic sort for rows
 QR SET SORTS(qr_area;$aColumns;$aOrders)
```

If you pass an invalid *area* number, the error -9850 will be generated.

#### See also 

[QR GET SORTS](qr-get-sorts.md)  