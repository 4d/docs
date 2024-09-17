---
id: qr-set-area-property
title: QR SET AREA PROPERTY
displayed_sidebar: docs
---

<!--REF #_command_.QR SET AREA PROPERTY.Syntax-->**QR SET AREA PROPERTY** ( *area* ; *property* ; *value* )<!-- END REF-->
<!--REF #_command_.QR SET AREA PROPERTY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Longint | -> | Reference of the area |
| property | Longint | -> | Interface element designated |
| value | Longint | -> | 1 = displayed, 0 = hidden |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR SET AREA PROPERTY.Summary-->The **QR SET AREA PROPERTY** command shows or hides the interface element whose reference is passed in *property*.<!-- END REF-->

This command can only be used with a Quick report area embedded in a form.

You can use the following constant from the [QR Area Properties](/4Dv20R6/4D/20-R6/QR-Area-Properties.302-6958491.en.html) theme in *property*:

| Constant                 | Value | Comment                                                       |
| ------------------------ | ----- | ------------------------------------------------------------- |
| qr view contextual menus | 7     | Display status of the Contextual menu (Displayed=1, Hidden=0) |

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *property* parameter, the error -9852 will be generated.

#### See also 

[QR Get area property](qr-get-area-property.md)  