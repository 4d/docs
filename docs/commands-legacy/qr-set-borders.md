---
id: qr-set-borders
title: QR SET BORDERS
slug: /commands/qr-set-borders
displayed_sidebar: docs
---

<!--REF #_command_.QR SET BORDERS.Syntax-->**QR SET BORDERS** ( *area* ; *column* ; *row* ; *border* ; *line* {; *color*} )<!-- END REF-->
<!--REF #_command_.QR SET BORDERS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| column | Integer | &#8594;  | Column number |
| row | Integer | &#8594;  | Row number |
| border | Integer | &#8594;  | Border composite value |
| line | Integer | &#8594;  | Line thickness |
| color | Integer | &#8594;  | Border color |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR SET BORDERS.Summary-->The **QR SET BORDERS** command sets the border style for a given cell.<!-- END REF-->

*area* is the reference of the Quick Report area.

*column* is the column number of the cell.

*row* is the row number of the cell. You can pass either:

* a positive integer value to designate the corresponding subtotal (break) level,
* one of the following constants located in the *QR Rows for Properties* theme:
  
| Constant       | Type    | Value | Comment               |  
| -------------- | ------- | ----- | --------------------- |  
| qr detail      | Integer | \-2   | Detail area of report |  
| qr grand total | Integer | \-3   | Grand total area      |  
| qr title       | Integer | \-1   | Title of report       |

*border* is a composite value that indicates which borders of the cell are to be affected. Pass one of the constants from the *QR Borders* theme:  

| Constant                    | Type    | Value | Comment                  |
| --------------------------- | ------- | ----- | ------------------------ |
| qr bottom border            | Integer | 8     | Bottom border            |
| qr inside horizontal border | Integer | 32    | Inside horizontal border |
| qr inside vertical border   | Integer | 16    | Inside vertical border   |
| qr left border              | Integer | 1     | Left border              |
| qr right border             | Integer | 4     | Right border             |
| qr top border               | Integer | 2     | Top border               |

*border* can contain an accumulation of several values in order to designate several borders simultaneously. For example, a value of 5 passed in *border* would affect the right and left borders.

*line* is the thickness of the line: 
* 0 indicates no line
* 1 indicates a thickness of 1/4 point
* 2 indicates a thickness of 1/2 point
* 3 indicates a thickness of 1 point
* 4 indicates a thickness of 2 points

*color* is the color of the line:

* If *color* is a positive value, it indicates a specific color.
* If *color* equals 0, the color is black.
* If *color* equals -1, no changes are to be made.

**Note:** The default color is black.

If you pass an invalid area number, the error -9850 will be generated.  
If you pass an invalid column number, the error -9852 will be generated.  
If you pass an invalid row number, the error -9853 will be generated.  
If you pass an invalid border parameter, the error -9854 will be generated.  
If you pass an invalid line parameter, the error -9855 will be generated.

#### See also 

[QR GET BORDERS](qr-get-borders.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 797 |
| Thread safe | &cross; |
| Modifies variables | error |


