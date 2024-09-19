---
id: qr-get-selection
title: QR GET SELECTION
slug: /commands-legacy/qr-get-selection
displayed_sidebar: docs
---

<!--REF #_command_.QR GET SELECTION.Syntax-->**QR GET SELECTION** ( *area* ; *left* ; *top* {; *right* {; *bottom*}} )<!-- END REF-->
<!--REF #_command_.QR GET SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Longint | &#x1F852; | Reference of the area |
| left | Longint | &#x1F858; | Left boundary |
| top | Longint | &#x1F858; | Top boundary |
| right | Longint | &#x1F858; | Right boundary |
| bottom | Longint | &#x1F858; | Bottom boundary |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR GET SELECTION.Summary-->The QR GET SELECTION command returns the coordinates of the cell that is selected.<!-- END REF-->

*left* returns the number of the column that is the left boundary of the selection. If *left* equals 0, the entire row is selected.

*top* returns the number of the row that is the top boundary of the selection. If *top* equals 0, the entire column is selected.

**Note:** If both *left* and *top* equal 0, the entire area is highlighted.

*right* is the number of the column that is the right boundary of the selection.

*bottom* is the number of the row that is the top boundary of the selection.

**Note:** If there is no selection, *left*, *top*, *right* and *bottom* are set to -1.

If you pass an invalid *area* number, the error -9850 will be generated.

#### See also 

[QR SET SELECTION](qr-set-selection.md)  