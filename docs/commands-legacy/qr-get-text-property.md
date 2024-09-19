---
id: qr-get-text-property
title: QR Get text property
slug: /commands-legacy/qr-get-text-property
displayed_sidebar: docs
---

<!--REF #_command_.QR Get text property.Syntax-->**QR Get text property** ( *area* ; *colNum* ; *rowNum* ; *property* ) -> Function result<!-- END REF-->
<!--REF #_command_.QR Get text property.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Longint | &#x1F852; | Reference of the area |
| colNum | Longint | &#x1F852; | Column number |
| rowNum | Longint | &#x1F852; | Row number |
| property | Longint | &#x1F852; | Property number |
| Function result | Longint, String | &#x1F850; | Value for the selected property |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Get text property.Summary-->The **QR Get text property** command returns the property value of the text attributes for the cell determined by *colNum* and *RowNum*.<!-- END REF-->

*area* is the reference of the Quick Report area.

*colNum* is the number of the cell column.

*rowNum* is the reference of the cell row. You can either pass:

* a positive value designating the corresponding subtotal (break) level,
* one of the constants of the *QR Rows for Properties* theme:  
| Constant       | Type    | Value | Comment               |  
| -------------- | ------- | ----- | --------------------- |  
| qr detail      | Longint | \-2   | Detail area of report |  
| qr footer      | Longint | \-5   | Page footer           |  
| qr grand total | Longint | \-3   | Grand total area      |  
| qr header      | Longint | \-4   | Page header           |  
| qr title       | Longint | \-1   | Title of report       |

**Note:** When passing -4 or -5 as *rowNum*, you still need to pass a column number in *colNum*, even if it is not used.

**Note:** In cross-table mode, the principle is similar except for the row values, which are always positive.

*property* is the value of the text attribute to get. You can use the constants of the *QR Text Properties* theme, and the following values can be returned:

| Constant                      | Type    | Value | Comment                                                                          |
| ----------------------------- | ------- | ----- | -------------------------------------------------------------------------------- |
| \_o\_qr font                  | Longint | 1     | Obsolete since 4D v14R3 (use qr font name)                                       |
| qr alternate background color | Longint | 9     | Alternate background color number                                                |
| qr background color           | Longint | 8     | Background color number                                                          |
| qr bold                       | Longint | 3     | Bold style attribute (0 or 1)                                                    |
| qr font name                  | Longint | 10    | Name of font as returned for example by the [FONT LIST](font-list.md) command    |
| qr font size                  | Longint | 2     | Font size expressed in points (9 to 255)                                         |
| qr italic                     | Longint | 4     | Italic style attribute (0 or 1)                                                  |
| qr justification              | Longint | 7     | Justification attribute (0 for default, 1 for left, 2 for center or 3 for right) |
| qr text color                 | Longint | 6     | Color number attribute (Longint)                                                 |
| qr underline                  | Longint | 5     | Underline style attribute (0 or 1)                                               |

If you pass an invalid *area* number, the error -9850 will be generated.

If you pass an invalid *colNum* number, the error -9852 will be generated.

If you pass an invalid *rowNum* number, the error -9853 will be generated.

If you pass an invalid *property* number, the error -9854 will be generated.

#### See also 

[QR SET TEXT PROPERTY](qr-set-text-property.md)  