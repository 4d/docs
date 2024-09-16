---
id: qr-set-report-kind
title: QR SET REPORT KIND
displayed_sidebar: docs
---

<!--REF #_command_.QR SET REPORT KIND.Syntax-->**QR SET REPORT KIND** ( *area* ; *type* )<!-- END REF-->
<!--REF #_command_.QR SET REPORT KIND.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Longint | -> | Reference of the area |
| type | Longint | -> | Type of the report |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR SET REPORT KIND.Summary-->The **QR SET REPORT KIND** command sets the report *type* for the area whose reference was passed in *area*.<!-- END REF-->

* If *type* equals 1, the report type is list.
* If *type* equals 2, the report type is cross-table.

You can also use the constants of the [QR Report Types](/4Dv20R6/4D/20-R6/QR-Report-Types.302-6958493.en.html) theme:

| Constant        | Type    | Value |
| --------------- | ------- | ----- |
| qr cross report | Longint | 2     |
| qr list report  | Longint | 1     |

  
If you set a new type for an existing current report, it removes the previous settings and creates a new empty report, ready to be set. 

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *type* value, the error -9852 will be generated.

#### See also 
[QR Get report kind](qr-get-report-kind.md)  