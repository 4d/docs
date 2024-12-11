---
id: export-text
title: EXPORT TEXT
slug: /commands/export-text
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT TEXT.Syntax-->**EXPORT TEXT** ( {*aTable* ;} *document* )<!-- END REF-->
<!--REF #_command_.EXPORT TEXT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table from which to export data, or Default table, if omitted |
| document | Text | &#8594;  | Text document to receive the data |

<!-- END REF-->

#### Description 

<!--REF #_command_.EXPORT TEXT.Summary-->The EXPORT TEXT command writes data from the records of the current selection of *aTable* in the current process.<!-- END REF--> The data is written to *document*, a Windows or Macintosh text document on the disk.

The export operation is performed through the current output form. The export operation writes fields and variables based on the entry order of the output form. For this reason, use an output form that contains only the fields or enterable objects that you wish to export. Do not place buttons or other extraneous objects on the export form.Subform objects are ignored.

An On Load event is sent to the form method for each record that is exported. Use this event to set the variables you may use in the export form.

The *document* parameter can name a new or existing document. If *document* is given the same name as an existing document, the existing document is overwritten. The *document* can include a path that contains volume and folder names. If you pass an empty string, the standard Save File dialog box is displayed. If the user cancels this dialog, the export operation is canceled, and the OK system variable is set to 0.

A progress thermometer is displayed during export. The user can cancel the operation by clicking a Stop button. If the export is successfully completed, the OK system variable is set to 1\. If the operation is canceled or an error occurs, the OK system variable is set to 0\. The thermometer can be hidden with the [MESSAGES OFF](messages-off.md) command.

By default, the command uses by default the UTF-8 character set. You can use the [USE CHARACTER SET](use-character-set.md) command to change this character set. 

Using EXPORT TEXT, the default field delimiter is the tab character (code 9). The default record delimiter is the carriage return character (code 13) under OS X and the carraige return+line feed (code 13 + code 10) under Windows. You can change these defaults by assigning values to the two delimiter *System Variables*: **FldDelimit** and **RecDelimit**. The user can change the default values in the Design environment Export Data dialog box. Note that if exported fields contain characters defined as field or record delimiters, these characters are automatically replaced with spaces in the exported file, in order to avoid disrupting the importing process.

#### Example 

This example exports data to a text document. The method first sets the output form so that the data will be exported through the correct form, changes the 4D delimiter variables, then performs the export:

```4d
 FORM SET OUTPUT([People];"Export")
 FldDelimit:=27 // Set field delimiter to Escape character
 RecDelimit:=10 // Set record delimiter to Line Feed character
 EXPORT TEXT([People];"NewPeople.txt") // Export to the "NewPeople.txt" document
```

#### System variables and sets 

OK is set to 1 if the export is successfully completed; otherwise, it is set to 0.

#### See also 

[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[IMPORT TEXT](import-text.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 167 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


