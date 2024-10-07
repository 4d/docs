---
id: qr-get-report-table
title: QR Get report table
slug: /commands/qr-get-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR Get report table.Syntax-->**QR Get report table** ( *area* ) -> Function result<!-- END REF-->
<!--REF #_command_.QR Get report table.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#x1F852; | Reference of the area |
| Function result | Longint | &#x1F850; | Table number |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Get report table.Summary-->The QR Get report table command returns the current table number for the report area whose reference was passed in *area*.<!-- END REF-->

If you pass an invalid *area* number, the error -9850 will be generated.

#### See also 

[QR SET REPORT TABLE](qr-set-report-table.md)  