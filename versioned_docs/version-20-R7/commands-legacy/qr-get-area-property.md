---
id: qr-get-area-property
title: QR Get area property
slug: /commands/qr-get-area-property
displayed_sidebar: docs
---

<!--REF #_command_.QR Get area property.Syntax-->**QR Get area property** ( *area* ; *property* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get area property.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| property | Integer | &#8594;  | Interface element designated |
| Function result | Integer | &#8592; | 1 = displayed, 0 = hidden |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Get area property.Summary-->The **QR Get area property** command returns 0 if the interface element passed in *property* is not displayed; otherwise, it returns 1.<!-- END REF-->

This command can only be used with a Quick report area embedded in a form.

You can use the following constant from the *QR Area Properties* theme in *property*:

| Constant                 | Value | Comment                                                       |
| ------------------------ | ----- | ------------------------------------------------------------- |
| qr view contextual menus | 7     | Display status of the Contextual menu (Displayed=1, Hidden=0) |

If you pass an invalid *area* number, the error -9850 will be generated.

If you pass an invalid *property* parameter, the error -9852 will be generated.

#### See also 

[QR SET AREA PROPERTY](qr-set-area-property.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 795 |
| Thread safe | &check; |
| Modifies variables | error |
| Forbidden on the server ||


