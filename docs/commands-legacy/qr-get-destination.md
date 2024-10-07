---
id: qr-get-destination
title: QR GET DESTINATION
slug: /commands/qr-get-destination
displayed_sidebar: docs
---

<!--REF #_command_.QR GET DESTINATION.Syntax-->**QR GET DESTINATION** ( *area* ; *type* {; *specifics*} )<!-- END REF-->
<!--REF #_command_.QR GET DESTINATION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#x1F852; | Reference of the area |
| type | Integer | &#x1F858; | Type of the report |
| specifics | Text, Variable | &#x1F858; | Specifics linked to the output type |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR GET DESTINATION.Summary-->The **QR GET DESTINATION** command retrieves the output *type* of the report for the area whose reference was passed in *area*.<!-- END REF--> 

You can compare the value of the *type* parameter with the constants of the *QR Output Destination* theme.

The following table describes the values that can be retrieved in both *type* and *specifics* parameters:

| Constant     | Type    | Value | Comment                                            |
| ------------ | ------- | ----- | -------------------------------------------------- |
| qr HTML file | Longint | 5     | *specifics*: Pathname to the file.                 |
| qr printer   | Longint | 1     | *specifics*: "\*" to remove the print dialog boxes |
| qr text file | Longint | 2     | *specifics*: Pathname to the file.                 |

If you pass an invalid *area* number, the error -9850 will be generated.

#### See also 

[QR SET DESTINATION](qr-set-destination.md)  