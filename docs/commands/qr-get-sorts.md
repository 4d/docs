---
id: qr-get-sorts
title: QR GET SORTS
displayed_sidebar: docs
---

<!--REF #_command_.QR GET SORTS.Syntax-->**QR GET SORTS** ( *area* ; *aColumns* ; *aOrders* )<!-- END REF-->
<!--REF #_command_.QR GET SORTS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Longint | -> | Reference of the area |
| aColumns | Real array | <-> | Sorted columns |
| aOrders | Real array | <-> | Sort orders |

<!-- END REF-->

#### Description 



The QR GET SORTS command populates two arrays:

* *aColumns*  
This array includes all the columns that have a sort order.
* *aOrders*  
Each element of this array contains the sort orders for the matching column.  
\- If *aOrders{$i}* equals 1, the sort order is ascending.  
\- If *aOrders{$i}* equals -1, the sort order is descending.

##### Cross-table mode 

In the case of cross-table mode, the resulting arrays cannot have more than two elements since sorts can only be performed on columns (1) and rows (2). (Values for *aColumns*).

If you pass an invalid *area* number, the error -9850 will be generated.

#### See also 

[QR SET SORTS](qr-set-sorts.md)  