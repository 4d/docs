---
id: qr-get-borders
title: QR GET BORDERS
slug: /commands/qr-get-borders
displayed_sidebar: docs
---

<!--REF #_command_.QR GET BORDERS.Syntax-->**QR GET BORDERS** ( *area* ; *column* ; *row* ; *border* ; *line* {; *color*} )<!-- END REF-->
<!--REF #_command_.QR GET BORDERS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| column | Integer | &#8594;  | Column number |
| row | Integer | &#8594;  | Row number |
| border | Integer | &#8594;  | Border value |
| line | Integer | &#8592; | Line thickness |
| color | Integer | &#8592; | Border color |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR GET BORDERS.Summary-->The **QR GET BORDERS** command allows you to retrieve the border style for a border of a given cell.<!-- END REF-->

*area* is the reference of the Quick Report area.  

*column* is the column number of the cell.

*row* designates the row number of the cell. You can either:

* pass a positive integer value to designate the corresponding subtotal (break) level that is affected.
* pass one of the following constants of the *QR Rows for Properties* theme:  

| Constant       | Type    | Value | Comment               |  
| -------------- | ------- | ----- | --------------------- |  
| qr detail      | Integer | \-2   | Detail area of report |  
| qr grand total | Integer | \-3   | Grand total area      |  
| qr title       | Integer | \-1   | Title of report       |

*border* is the value that indicates which cell border is affected. Pass one of the constants from the *QR Borders* theme:  

| Constant                    | Type    | Value | Comment                  |
| --------------------------- | ------- | ----- | ------------------------ |
| qr bottom border            | Integer | 8     | Bottom border            |
| qr inside horizontal border | Integer | 32    | Inside horizontal border |
| qr inside vertical border   | Integer | 16    | Inside vertical border   |
| qr left border              | Integer | 1     | Left border              |
| qr right border             | Integer | 4     | Right border             |
| qr top border               | Integer | 2     | Top border               |

**Note:** Unlike the command [QR SET BORDERS](qr-set-borders.md), **QR GET BORDERS** does not accept a cumulative value. You must test all the parameters separately to have an overall view of the cell border.

*line* is the thickness of the line:

* 0 indicates no line
* 1 indicates a thickness of 1/4 point
* 2 indicates a thickness of 1/2 point
* 3 indicates a thickness of 1 point
* 4 indicates a thickness of 2 points.

*color* is the color of the line; it returns the value of the color applied to the line segment.

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *column* number, the error -9852 will be generated.  
If you pass an invalid *row* number, the error -9853 will be generated.  
If you pass an invalid *border* parameter, the error -9854 will be generated.

#### See also 

[QR SET BORDERS](qr-set-borders.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 798 |
| Thread safe | &cross; |
| Modifies variables | error |


