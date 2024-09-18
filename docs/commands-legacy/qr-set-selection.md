---
id: qr-set-selection
title: QR SET SELECTION
slug: /commands-legacy/qr-set-selection
displayed_sidebar: docs
---

<!--REF #_command_.QR SET SELECTION.Syntax-->**QR SET SELECTION** ( *area* ; *left* ; *top* {; *right* {; *bottom*}} )<!-- END REF-->
<!--REF #_command_.QR SET SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Longint | &rarr; | Reference of the area |
| left | Longint | &rarr; | Left boundary |
| top | Longint | &rarr; | Top boundary |
| right | Longint | &rarr; | Right boundary |
| bottom | Longint | &rarr; | Bottom boundary |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR SET SELECTION.Summary-->The QR SET SELECTION command highlights a cell, a row, a column or the entire *area* as you would with a mouse click.<!-- END REF--> It also lets you deselect the current selection.

*left* is the number of the left boundary. If *left* is 0, the entire row is selected.  

*top* is the number of the top boundary. If *top* is 0, the entire column is selected.  

*right* is the number of the right boundary.  

*bottom* is the number of the bottom boundary.

**Notes:**

* If both *left* and *top* are 0, the entire area is highlighted.
* If you want no selection, pass -1 to *left*, *right*, *top* and *bottom*.

If you pass an invalid *area* number, the error -9850 will be generated.

#### See also 

[QR GET SELECTION](qr-get-selection.md)  