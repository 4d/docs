---
id: qr-set-report-table
title: QR SET REPORT TABLE
slug: /commands/qr-set-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR SET REPORT TABLE.Syntax-->**QR SET REPORT TABLE** ( *area* : Integer ; *aTable* : Integer )<!-- END REF-->
<!--REF #_command_.QR SET REPORT TABLE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| aTable | Integer | &#8594;  | Table number |
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

<!--REF #_command_.QR SET REPORT TABLE.Summary-->The QR SET REPORT TABLE command sets the current table for the report area whose reference was passed in *area* to the table whose number was passed in *aTable*.<!-- END REF-->

It is necessary for a table to be assigned to the report since the report editor will be using the current selection for that table to display the data, perform computations and propagate relations, if needed.

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *table* value, the error -9852 will be generated.

## See also 

[QR Get report table](../commands/qr-get-report-table)  

## Properties

|  |  |
| --- | --- |
| Command number | 757 |
| Thread safe | no |
| Modifies variables | error |


