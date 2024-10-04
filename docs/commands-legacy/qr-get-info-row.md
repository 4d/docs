---
id: qr-get-info-row
title: QR Get info row
slug: /commands/qr-get-info-row
displayed_sidebar: docs
---

<!--REF #_command_.QR Get info row.Syntax-->**QR Get info row** ( *area* ; *row* ) -> Function result<!-- END REF-->
<!--REF #_command_.QR Get info row.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Longint | &#x1F852; | Reference of the area created |
| row | Longint | &#x1F852; | Row designator |
| Function result | Longint | &#x1F850; | 0 = displayed, 1 = hidden |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Get info row.Summary-->The **QR Get info row** command retrieves the display status of the row whose reference was passed in *row*.<!-- END REF-->

*row* designates which row is affected by the command. You can pass either: 

* a positive integer value to designate the corresponding subtotal (break) level,
* one of the following constants from the *QR Rows for Properties* theme:  
| Constant       | Type    | Value | Comment               |  
| -------------- | ------- | ----- | --------------------- |  
| qr detail      | Longint | \-2   | Detail area of report |  
| qr grand total | Longint | \-3   | Grand total area      |  
| qr title       | Longint | \-1   | Title of report       |
The value returned by **QR Get info row** indicates whether the contents of the row are displayed or hidden. If it equals 1, the contents of the row are hidden; if it equals 0, the contents of the row are displayed. 

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *row* value, the error -9852 will be generated.

#### See also 

[QR GET INFO COLUMN](qr-get-info-column.md)  
[QR SET INFO COLUMN](qr-set-info-column.md)  
[QR SET INFO ROW](qr-set-info-row.md)  