---
id: qr-get-area-property
title: QR Get area property
displayed_sidebar: docs
---

<!--REF #_command_.QR Get area property.Syntax-->**QR Get area property** ( *area* ; *property* ) -> Function result<!-- END REF-->
<!--REF #_command_.QR Get area property.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Longint | -> | Reference of the area |
| property | Longint | -> | Interface element designated |
| Function result | Longint | <- | 1 = displayed, 0 = hidden |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Get area property.Summary-->The **QR Get area property** command returns 0 if the interface element passed in *property* is not displayed; otherwise, it returns 1.<!-- END REF-->

This command can only be used with a Quick report area embedded in a form.

You can use the following constant from the [QR Area Properties](/4Dv20R6/4D/20-R6/QR-Area-Properties.302-6958491.en.html) theme in *property*:

| Constant                 | Value | Comment                                                       |
| ------------------------ | ----- | ------------------------------------------------------------- |
| qr view contextual menus | 7     | Display status of the Contextual menu (Displayed=1, Hidden=0) |

If you pass an invalid *area* number, the error -9850 will be generated.

If you pass an invalid *property* parameter, the error -9852 will be generated.

#### See also 
[QR SET AREA PROPERTY](qr-set-area-property.md)  