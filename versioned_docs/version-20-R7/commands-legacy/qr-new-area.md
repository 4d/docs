---
id: qr-new-area
title: QR NEW AREA
slug: /commands/qr-new-area
displayed_sidebar: docs
---

<!--REF #_command_.QR NEW AREA.Syntax-->**QR NEW AREA** ( *ptr* )<!-- END REF-->
<!--REF #_command_.QR NEW AREA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| ptr | Pointer | &#8594;  | Pointer to a variable |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.QR NEW AREA.Summary-->The **QR NEW AREA** command creates a new Quick Report area and stores its reference number in the longint variable referenced by the *ptr* pointer.<!-- END REF-->

#### See also 

[QR New offscreen area](qr-new-offscreen-area.md)  