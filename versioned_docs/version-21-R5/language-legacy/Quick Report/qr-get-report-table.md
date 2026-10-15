---
id: qr-get-report-table
title: QR Get report table
slug: /commands/qr-get-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR Get report table.Syntax-->**QR Get report table** ( *area* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get report table.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| Function result | Integer | &#8592; | Table number |
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

<!--REF #_command_.QR Get report table.Summary-->The QR Get report table command returns the current table number for the report area whose reference was passed in *area*.<!-- END REF-->

If you pass an invalid *area* number, the error -9850 will be generated.

## See also 

[QR SET REPORT TABLE](../commands/qr-set-report-table)  

## Properties

|  |  |
| --- | --- |
| Command number | 758 |
| Thread safe | no |
| Modifies variables | error |


