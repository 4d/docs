---
id: qr-get-report-kind
title: QR Get report kind
displayed_sidebar: docs
---

<!--REF #_command_.QR Get report kind.Syntax-->**QR Get report kind** ( *area* ) -> Function result<!-- END REF-->
<!--REF #_command_.QR Get report kind.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Longint | -> | Reference of the area |
| Function result | Longint | <- | Type of the report |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Get report kind.Summary-->The **QR Get report kind** command retrieves the report type for the area whose reference was passed in *area*.<!-- END REF-->

* If the command returns 1, the report type is list.
* If the command returns 2, the report type is cross-table.

You can also compare the function result with the constants of the [QR Report Types](/4Dv20R6/4D/20-R6/QR-Report-Types.302-6958493.en.html) theme:

| Constant        | Type    | Value |
| --------------- | ------- | ----- |
| qr cross report | Longint | 2     |
| qr list report  | Longint | 1     |

If you pass an invalid *area* number, the error -9850 will be generated.

#### See also 
[QR SET REPORT KIND](qr-set-report-kind.md)  