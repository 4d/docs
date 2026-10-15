---
id: qr-get-sorts
title: QR GET SORTS
slug: /commands/qr-get-sorts
displayed_sidebar: docs
---

<!--REF #_command_.QR GET SORTS.Syntax-->**QR GET SORTS** ( *area* : Integer ; *aColumns* : Real array ; *aOrders* : Real array )<!-- END REF-->
<!--REF #_command_.QR GET SORTS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| aColumns | Real array | &#8592; | Sorted columns |
| aOrders | Real array | &#8592; | Sort orders |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|2003|Created|

</details>
</div>

## Description 

<!--REF #_command_.QR GET SORTS.Summary-->The QR GET SORTS command populates two arrays<!-- END REF-->:

* *aColumns*  
This array includes all the columns that have a sort order.
* *aOrders*  
Each element of this array contains the sort orders for the matching column.  
\- If *aOrders{$i}* equals 1, the sort order is ascending.  
\- If *aOrders{$i}* equals -1, the sort order is descending.

### Cross-table mode 

In the case of cross-table mode, the resulting arrays cannot have more than two elements since sorts can only be performed on columns (1) and rows (2). (Values for *aColumns*).

If you pass an invalid *area* number, the error -9850 will be generated.

## See also 

[QR SET SORTS](../commands/qr-set-sorts)  

## Properties

|  |  |
| --- | --- |
| Command number | 753 |
| Thread safe | no |
| Modifies variables | error |


