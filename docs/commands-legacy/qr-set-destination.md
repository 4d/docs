---
id: qr-set-destination
title: QR SET DESTINATION
slug: /commands/qr-set-destination
displayed_sidebar: docs
---

<!--REF #_command_.QR SET DESTINATION.Syntax-->**QR SET DESTINATION** ( *area* ; *type* {; *specifics*} )<!-- END REF-->
<!--REF #_command_.QR SET DESTINATION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| type | Integer | &#8594;  | Type of the report |
| specifics | Text, Variable | &#8594;  | Specifics linked to the output type |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.QR SET DESTINATION.Summary-->The **QR SET DESTINATION** command sets the output *type* of the report for the area whose reference was passed in *area*.<!-- END REF-->

In the *type* parameter, you can pass one of the constants of the *QR Output Destination* theme. The contents of the *specifics* parameter depends on the value of *type*. The following table describes the values that can be passed in both *type* and *specifics* parameters:

| Constant     | Type    | Value | Comment                                            |
| ------------ | ------- | ----- | -------------------------------------------------- |
| qr HTML file | Integer | 5     | *specifics*: Pathname to the file.                 |
| qr printer   | Integer | 1     | *specifics*: "\*" to remove the print dialog boxes |
| qr text file | Integer | 2     | *specifics*: Pathname to the file.                 |

*qr printer* (1): If you pass a string containing a star ("\*") in the *specifics* parameter, no dialog box will be displayed during printing and the current print settings will be used automatically. This setting is necessary when you want to print the report on the server.

*qr text file* (2): If you pass an empty string in the *specifics* parameter, a Save file dialog is displayed; otherwise the file is saved at the location indicated by the path.  
The default field delimiter is the tab character (code 9). The default record delimiter is the carriage return character (code 13). You can change these defaults by assigning values to the two delimiter system variables: FldDelimit and RecDelimit. If under Windows, FldDelimit equals 13, a char 10 (line feed) will be appended after the carriage return. Be aware that these variables are used by other commands such as [IMPORT TEXT](import-text.md) for example. Changing them for the Quick Report editor, changes them everywhere in the application.

*qr HTML file* (5): An HTML file is created using the template set by [QR SET HTML TEMPLATE](qr-set-html-template.md). For detailed information on how the translation is performed, please refer to the Design Reference manual.

If you pass an invalid *area* number, the error -9850 will be generated.  
If the value of the destination *type* is incorrect, the error -9852 will be generated.

#### Example 

The following code sets the destination as being the text file "Mydoc.txt" and executes the Quick Report: 

```4d
 QR SET DESTINATION(MyArea;qr text file;"MyDoc.txt")
 QR RUN(MyArea)
```

#### See also 

[QR GET DESTINATION](qr-get-destination.md)  