---
id: qr-get-borders
title: QR GET BORDERS
displayed_sidebar: docs
---

<!--REF #_command_.QR GET BORDERS.Syntax-->**QR GET BORDERS** ( *area* ; *column* ; *row* ; *border* ; *line* {; *color*} )<!-- END REF-->
<!--REF #_command_.QR GET BORDERS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Longint | -> | Reference of the area |
| column | Longint | -> | Column number |
| row | Longint | -> | Row number |
| border | Longint | -> | Border value |
| line | Longint | <-> | Line thickness |
| color | Longint | <-> | Border color |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR GET BORDERS.Summary-->The **QR GET BORDERS** command allows you to retrieve the border style for a border of a given cell.<!-- END REF-->

*area* is the reference of the Quick Report area.  

*column* is the column number of the cell.

*row* designates the row number of the cell. You can either:

* pass a positive integer value to designate the corresponding subtotal (break) level that is affected.
* pass one of the following constants of the [QR Rows for Properties](/4Dv20R6/4D/20-R6/QR-Rows-for-Properties.302-6958428.en.html) theme:  
| Constant       | Type    | Value | Comment               |  
| -------------- | ------- | ----- | --------------------- |  
| qr detail      | Longint | \-2   | Detail area of report |  
| qr grand total | Longint | \-3   | Grand total area      |  
| qr title       | Longint | \-1   | Title of report       |

*border* is the value that indicates which cell border is affected. Pass one of the constants from the [QR Borders](/4Dv20R6/4D/20-R6/QR-Borders.302-6958503.en.html) theme:  

| Constant                    | Type    | Value | Comment                  |
| --------------------------- | ------- | ----- | ------------------------ |
| qr bottom border            | Longint | 8     | Bottom border            |
| qr inside horizontal border | Longint | 32    | Inside horizontal border |
| qr inside vertical border   | Longint | 16    | Inside vertical border   |
| qr left border              | Longint | 1     | Left border              |
| qr right border             | Longint | 4     | Right border             |
| qr top border               | Longint | 2     | Top border               |

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