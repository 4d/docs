---
id: qr-get-document-property
title: QR Get document property
slug: /commands/qr-get-document-property
displayed_sidebar: docs
---

<!--REF #_command_.QR Get document property.Syntax-->**QR Get document property** ( *area* ; *property* ) -> Function result<!-- END REF-->
<!--REF #_command_.QR Get document property.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| property | Integer | &#8594;  | 1 = Print Dialog, 2 = Document unit |
| Function result | Longint | &#8592; | Value for the property |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.QR Get document property.Summary-->The **QR Get document property** command retrieves the display status for the print dialog box or the unit used for the document that are present in *area*.<!-- END REF-->

In *property*, you can use the following constants, located in the *QR Document Properties* constant theme:

| Constant            | Type    | Value | Comment                                                                                                                                                                                       |
| ------------------- | ------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| qr field separator  | Longint | 3     | Character code of the field separator. Default value is the system variable FldDelimit (Tab by default).                                                                                      |
| qr printing dialog  | Longint | 1     | Display of the print dialog box:<br/>If value = 0, the print dialog is not displayed prior to printing.If value = 1, the print dialog is displayed prior to printing (default value). |
| qr record separator | Longint | 4     | Character code of the record separator. Default value is the system variable RecDelimit (Carriage Return by default).                                                                         |
| qr unit             | Longint | 2     | Document unit: <br/>If value = 0, the document unit is points.If value = 1, the document unit is centimeters.If value = 2, the document unit is inches.                               |

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *property* value, the error -9852 will be generated.

#### See also 

[QR SET DOCUMENT PROPERTY](qr-set-document-property.md)  