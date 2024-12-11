---
id: qr-set-totals-spacing
title: QR SET TOTALS SPACING
slug: /commands/qr-set-totals-spacing
displayed_sidebar: docs
---

<!--REF #_command_.QR SET TOTALS SPACING.Syntax-->**QR SET TOTALS SPACING** ( *area* ; *subtotal* ; *value* )<!-- END REF-->
<!--REF #_command_.QR SET TOTALS SPACING.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| subtotal | Integer | &#8594;  | Subtotal number |
| value | Integer | &#8594;  | 0=no space, 32000=inserts a page break, >0=spacing added below the break level, <0=proportional increase |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR SET TOTALS SPACING.Summary-->The QR SET TOTALS SPACING command sets a space below a subtotal row.<!-- END REF--> It applies only to the list mode.

*area* is the reference of the Quick Report area.  
*subtotal* is the subtotal level (or break level) that will be affected.

*value* defines the value of the spacing:

* If *value* is 0, no space is added.
* If *value* is 32000, a page break is inserted.
* If *value* is a positive value, it expresses the spacing value in pixels.
* If *value* is a negative value, it expresses the spacing as a percentage of the subtotal row. For example, -100 will set a space of 100% below the subtotal row.

**Note:** If the space below a subtotal row “pushes” the next row onto the following page, there will be no space inserted above the row on that page.

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *subtotal*, the error -9852 will be generated.

#### See also 

[QR GET TOTALS SPACING](qr-get-totals-spacing.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 761 |
| Thread safe | &check; |
| Modifies variables | error |
| Forbidden on the server ||


