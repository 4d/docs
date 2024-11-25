---
id: qr-get-report-kind
title: QR Get report kind
slug: /commands/qr-get-report-kind
displayed_sidebar: docs
---

<!--REF #_command_.QR Get report kind.Syntax-->**QR Get report kind** ( *area* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get report kind.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| Function result | Integer | &#8592; | Type of the report |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.QR Get report kind.Summary-->The **QR Get report kind** command retrieves the report type for the area whose reference was passed in *area*.<!-- END REF-->

* If the command returns 1, the report type is list.
* If the command returns 2, the report type is cross-table.

You can also compare the function result with the constants of the *QR Report Types* theme:

| Constant        | Type    | Value |
| --------------- | ------- | ----- |
| qr cross report | Integer | 2     |
| qr list report  | Integer | 1     |

If you pass an invalid *area* number, the error -9850 will be generated.

#### See also 

[QR SET REPORT KIND](qr-set-report-kind.md)  