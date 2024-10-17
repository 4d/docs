---
id: get-document-icon
title: GET DOCUMENT ICON
slug: /commands/get-document-icon
displayed_sidebar: docs
---

<!--REF #_command_.GET DOCUMENT ICON.Syntax-->**GET DOCUMENT ICON** ( *docPath* ; *icon* {; *size*} )<!-- END REF-->
<!--REF #_command_.GET DOCUMENT ICON.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| docPath | Text | &#8594;  | Name or path of document to get icon, or Empty string for standard Open File dialog box |
| icon | Picture, Picture | &#8592; | Document icon |
| size | Integer | &#8594;  | Size of the returned picture (in pixels) |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET DOCUMENT ICON.Summary-->The GET DOCUMENT ICON command returns, in the 4D picture variable or field *icon*, the icon of the document whose name or complete pathname is passed in *docPath*.<!-- END REF--> *docPath* can specify a file of any type (executable, document, shortcut or alias, etc.) or a folder. 

*docPath* contains the full pathname of the document. You can also pass the document name only or a relative pathname, in this case the document must be placed in the database current working directory (usually, the folder containing the database structure file).  
If you pass an empty string in *docPath*, the standard Open File dialog box appears. The user can then select the file to read. Once the dialog box is validated, the Document system variable contains the full pathname to the selected file. 

Pass a 4D picture field or variable in *icon*. After the command is executed, this parameter contains the icon of the file (PICT format).

The optional *size* parameter sets the dimensions in pixels of the returned icon. This value actually represents the side length of the square including the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the largest available icon is returned.
