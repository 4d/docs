---
id: qr-get-totals-spacing
title: QR GET TOTALS SPACING
slug: /commands/qr-get-totals-spacing
displayed_sidebar: docs
---

<!--REF #_command_.QR GET TOTALS SPACING.Syntax-->**QR GET TOTALS SPACING** ( *area* ; *subtotal* ; *value* )<!-- END REF-->
<!--REF #_command_.QR GET TOTALS SPACING.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| subtotal | Integer | &#8594;  | Subtotal number |
| value | Integer | &#8592; | 0=no space, 32000=inserts a page break, >0=spacing added below the break level, <0=proportional increase |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR GET TOTALS SPACING.Summary-->The QR GET TOTALS SPACING command retrieves a space below a subtotal row.<!-- END REF--> It applies only to the list mode.

*area* is the reference of the Quick Report area.

*subtotal* is the subtotal level (or break level) that will be affected. *subtotal* is a value between 1 and the number of the subtotal/sort.

*value* defines the value of the spacing:

* If *value* is 0, no space is added.
* If *value* is 32000, a page break is inserted.
* If *value* is a positive value, it expresses the spacing value in pixels.
* If *value* is a negative value, it expresses the spacing as a percentage of the subtotal row. For example, -100 will set a space of 100% below the subtotal row.

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *subtotal*, the error -9852 will be generated.

#### See also 

[QR SET TOTALS SPACING](qr-set-totals-spacing.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 762 |
| Thread safe | &cross; |
| Modifies variables | error |


