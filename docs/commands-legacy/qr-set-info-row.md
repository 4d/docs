---
id: qr-set-info-row
title: QR SET INFO ROW
slug: /commands/qr-set-info-row
displayed_sidebar: docs
---

<!--REF #_command_.QR SET INFO ROW.Syntax-->**QR SET INFO ROW** ( *area* ; *row* ; *hide* )<!-- END REF-->
<!--REF #_command_.QR SET INFO ROW.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area created |
| row | Integer | &#8594;  | Row designator |
| hide | Integer | &#8594;  | 0 = displayed, 1 = hidden |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR SET INFO ROW.Summary-->The **QR SET INFO ROW** command shows/hides the row whose reference was passed in *row*.<!-- END REF-->

*row* designates which row is affected. You can pass either: 

* a positive integer value to designate the corresponding subtotal (break) level,
* one of the following constants from the *QR Rows for Properties* theme:
  
| Constant       | Type    | Value | Comment               |  
| -------------- | ------- | ----- | --------------------- |  
| qr detail      | Integer | \-2   | Detail area of report |  
| qr grand total | Integer | \-3   | Grand total area      |  
| qr title       | Integer | \-1   | Title of report       |

*hide* specifies whether the line is shown or hidden:

* If *hide* is 1, the row is hidden;
* If *hide* is 0, the row is shown.

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *row* value, the error -9852 will be generated.

#### Example 

The following statement hides the detail row:

```4d
 QR SET INFO ROW(area;qr detail;1)
```

#### See also 

[QR GET INFO COLUMN](qr-get-info-column.md)  
[QR Get info row](qr-get-info-row.md)  
[QR SET INFO COLUMN](qr-set-info-column.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 763 |
| Thread safe | &check; |
| Modifies variables | error |
| Forbidden on the server ||


