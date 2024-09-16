---
id: qr-delete-offscreen-area
title: QR DELETE OFFSCREEN AREA
displayed_sidebar: docs
---

<!--REF #_command_.QR DELETE OFFSCREEN AREA.Syntax-->**QR DELETE OFFSCREEN AREA** ( *area* )<!-- END REF-->
<!--REF #_command_.QR DELETE OFFSCREEN AREA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Longint | -> | Reference of the area to delete |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR DELETE OFFSCREEN AREA.Summary-->The QR DELETE OFFSCREEN AREA command deletes in memory the Quick Report offscreen *area* whose reference was passed as parameter.<!-- END REF-->

If you pass an invalid *area* number, the error -9850 will be generated.

#### See also 
[QR New offscreen area](qr-new-offscreen-area.md)  