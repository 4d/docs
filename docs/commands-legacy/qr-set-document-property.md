---
id: qr-set-document-property
title: QR SET DOCUMENT PROPERTY
slug: /commands-legacy/qr-set-document-property
displayed_sidebar: docs
---

<!--REF #_command_.QR SET DOCUMENT PROPERTY.Syntax-->**QR SET DOCUMENT PROPERTY** ( *area* ; *property* ; *value* )<!-- END REF-->
<!--REF #_command_.QR SET DOCUMENT PROPERTY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Longint | &#x1F852; | Reference of the area |
| property | Longint | &#x1F852; | 1 = Printing dialog, 2 = Document unit |
| value | Longint | &#x1F852; | Value for the property |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR SET DOCUMENT PROPERTY.Summary-->The QR SET DOCUMENT PROPERTY command displays the printing dialog or sets the unit used for the document.<!-- END REF-->

In *property*, you can pass the following constants, located in the *QR Document Properties* constant theme:

| Constant            | Type    | Value | Comment                                                                                                                                                                                       |
| ------------------- | ------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| qr field separator  | Longint | 3     | Character code of the field separator. Default value is the system variable FldDelimit (Tab by default).                                                                                      |
| qr printing dialog  | Longint | 1     | Display of the print dialog box:<br/>If value = 0, the print dialog is not displayed prior to printing.If value = 1, the print dialog is displayed prior to printing (default value). |
| qr record separator | Longint | 4     | Character code of the record separator. Default value is the system variable RecDelimit (Carriage Return by default).                                                                         |
| qr unit             | Longint | 2     | Document unit: <br/>If value = 0, the document unit is points.If value = 1, the document unit is centimeters.If value = 2, the document unit is inches.                               |

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid value in the *property* or *value* parameter, the corresponding error (-9852 or -9853) is generated.

#### See also 

[QR Get document property](qr-get-document-property.md)  