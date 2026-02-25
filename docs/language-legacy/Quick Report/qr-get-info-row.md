---
id: qr-get-info-row
title: QR Get info row
slug: /commands/qr-get-info-row
displayed_sidebar: docs
---

<!--REF #_command_.QR Get info row.Syntax-->**QR Get info row** ( *area* : Integer ; *row* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get info row.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area created |
| row | Integer | &#8594;  | Row designator |
| Function result | Integer | &#8592; | 0 = displayed, 1 = hidden |
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

<!--REF #_command_.QR Get info row.Summary-->The **QR Get info row** command retrieves the display status of the row whose reference was passed in *row*.<!-- END REF-->

*row* designates which row is affected by the command. You can pass either: 

* a positive integer value to designate the corresponding subtotal (break) level,
* one of the following constants from the *QR Rows for Properties* theme:
  
| Constant       | Type    | Value | Comment               |  
| -------------- | ------- | ----- | --------------------- |  
| qr detail      | Integer | \-2   | Detail area of report |  
| qr grand total | Integer | \-3   | Grand total area      |  
| qr title       | Integer | \-1   | Title of report       |
The value returned by **QR Get info row** indicates whether the contents of the row are displayed or hidden. If it equals 1, the contents of the row are hidden; if it equals 0, the contents of the row are displayed. 

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *row* value, the error -9852 will be generated.

## See also 

[QR GET INFO COLUMN](../commands/qr-get-info-column)  
[QR SET INFO COLUMN](../commands/qr-set-info-column)  
[QR SET INFO ROW](../commands/qr-set-info-row)  

## Properties

|  |  |
| --- | --- |
| Command number | 769 |
| Thread safe | no |
| Modifies variables | error |


