---
id: qr-set-area-property
title: QR SET AREA PROPERTY
slug: /commands/qr-set-area-property
displayed_sidebar: docs
---

<!--REF #_command_.QR SET AREA PROPERTY.Syntax-->**QR SET AREA PROPERTY** ( *area* : Integer ; *property* : Integer ; *value* : Integer )<!-- END REF-->
<!--REF #_command_.QR SET AREA PROPERTY.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| property | Integer | &#8594;  | Interface element designated |
| value | Integer | &#8594;  | 1 = displayed, 0 = hidden |
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

<!--REF #_command_.QR SET AREA PROPERTY.Summary-->The **QR SET AREA PROPERTY** command shows or hides the interface element whose reference is passed in *property*.<!-- END REF-->

This command can only be used with a Quick report area embedded in a form.

You can use the following constant from the *QR Area Properties* theme in *property*:

| Constant                 | Value | Comment                                                       |
| ------------------------ | ----- | ------------------------------------------------------------- |
| qr view contextual menus | 7     | Display status of the Contextual menu (Displayed=1, Hidden=0) |

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *property* parameter, the error -9852 will be generated.

## See also 

[QR Get area property](../commands/qr-get-area-property)  

## Properties

|  |  |
| --- | --- |
| Command number | 796 |
| Thread safe | no |
| Modifies variables | error |


