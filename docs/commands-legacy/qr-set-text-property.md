---
id: qr-set-text-property
title: QR SET TEXT PROPERTY
slug: /commands/qr-set-text-property
displayed_sidebar: docs
---

<!--REF #_command_.QR SET TEXT PROPERTY.Syntax-->**QR SET TEXT PROPERTY** ( *area* ; *colNum* ; *rowNum* ; *property* ; *value* )<!-- END REF-->
<!--REF #_command_.QR SET TEXT PROPERTY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| colNum | Integer | &#8594;  | Column number |
| rowNum | Integer | &#8594;  | Row number |
| property | Integer | &#8594;  | Property number |
| value | Integer, Text | &#8594;  | Value for the selected property |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR SET TEXT PROPERTY.Summary-->The **QR SET TEXT PROPERTY** command sets the text attributes for the cell determined by *colNum* and *rowNum*.<!-- END REF-->

*area* is the reference of the Quick Report area. 

*colNum* is the number of the cell column.

*rowNum* is the reference of the cell row. You can pass either:

* a positive value designating the corresponding subtotal (break) level,
* one of the constants from the *QR Rows for Properties* theme:
  
| Constant       | Type    | Value | Comment               |  
| -------------- | ------- | ----- | --------------------- |  
| qr detail      | Integer | \-2   | Detail area of report |  
| qr footer      | Integer | \-5   | Page footer           |  
| qr grand total | Integer | \-3   | Grand total area      |  
| qr header      | Integer | \-4   | Page header           |  
| qr title       | Integer | \-1   | Title of report       |

**Note:** When passing -4 or -5 as *rowNum*, you still need to pass a column number in *colNum*, even if it is not used.

**Note:** In cross-table mode, the principle is similar except for the row values, which are always positive.

*property* is the value of the text attribute to assign. You can use the constants of the *QR Text Properties* theme, and the following values can be set:

| Constant                      | Type    | Value | Comment                                                                          |
| ----------------------------- | ------- | ----- | -------------------------------------------------------------------------------- |
| \_o\_qr font                  | Integer | 1     | Obsolete since 4D v14R3 (use qr font name)                                       |
| qr alternate background color | Integer | 9     | Alternate background color number                                                |
| qr background color           | Integer | 8     | Background color number                                                          |
| qr bold                       | Integer | 3     | Bold style attribute (0 or 1)                                                    |
| qr font name                  | Integer | 10    | Name of font as returned for example by the [FONT LIST](font-list.md) command    |
| qr font size                  | Integer | 2     | Font size expressed in points (9 to 255)                                         |
| qr italic                     | Integer | 4     | Italic style attribute (0 or 1)                                                  |
| qr justification              | Integer | 7     | Justification attribute (0 for default, 1 for left, 2 for center or 3 for right) |
| qr text color                 | Integer | 6     | Color number attribute (Longint)                                                 |
| qr underline                  | Integer | 5     | Underline style attribute (0 or 1)                                               |

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *colNum* number, the error -9852 will be generated.  
If you pass an invalid *rowNum* number, the error -9853 will be generated.  
If you pass an invalid *property* number, the error -9854 will be generated.

#### Example 

This method defines several attributes of the first column’s title:

```4d
  //Assigns the Times font:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr font name;"Times")
  //Assigns 10-point font size:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr font size;10)
  //Assigns the bold attribute:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr bold;1)
  //Assigns the italic attribute:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr italic;1)
  //Assigns the underline attribute:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr underline;1)
  //Assigns the light green color:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr text color;0x0000FF00)
```

#### See also 

[QR Get text property](qr-get-text-property.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 759 |
| Thread safe | &check; |
| Modifies variables | error |
| Forbidden on the server ||


