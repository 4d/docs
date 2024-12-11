---
id: import-text
title: IMPORT TEXT
slug: /commands/import-text
displayed_sidebar: docs
---

<!--REF #_command_.IMPORT TEXT.Syntax-->**IMPORT TEXT** ( {*aTable* ;} *document* )<!-- END REF-->
<!--REF #_command_.IMPORT TEXT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table into which to import data, or Default table, if omitted |
| document | Text | &#8594;  | Text document from which to import data |

<!-- END REF-->

#### Description 

<!--REF #_command_.IMPORT TEXT.Summary-->The **IMPORT TEXT** command reads data from *document*, a Windows or Macintosh text document, into the table *aTable* by creating new records for that table.<!-- END REF-->

The import operation is performed through the current input form. The import operation reads fields and variables based on the layering of objects in the input form. For this reason, you should be very careful about the front-to-back order of text objects (fields and variables) in the form. The first object into which data will be imported should be in the back of the form, and so on. If the number of fields or variables in the form does not match the number of fields being imported, the extra ones are ignored. An input form used for importing cannot contain any buttons. Subform objects are ignored.

**Note:** One way to ensure that the data is imported into the correct objects is to select the object into which the first field should be imported and move it to the front. Continue to move fields and variables to the front in order, making sure that you have one field or variable for each field being imported.

An On Validate event is sent to the form method for each record that is imported. If you use variables in the import form, use this event to copy data from variables to fields.

The *document* parameter can include a path that contains volume and folder names. If you pass an empty string, the standard Open File dialog box is displayed. If the user cancels this dialog, the import operation is canceled, and the OK system variable is set to 0.

A progress thermometer is displayed during import. The user can cancel the operation by clicking a button labeled Stop. Records that have already been imported will not be removed if the user presses the Stop button. If the import is successfully completed, the OK system variable is set to 1\. If an error occurs or the operation was interrupted, the OK variable is set to 0\. The thermometer can be hidden with the [MESSAGES OFF](messages-off.md) command.

By default, the command uses the UTF-8 character set. You can use the [USE CHARACTER SET](use-character-set.md) command to change this character set. 

Using **IMPORT TEXT**, the default field delimiter is the tab character (code 9). The default record delimiter is the carriage return character (code 13). You can change these defaults by assigning values to the two delimiter *System Variables*: *FldDelimit* and *RecDelimit*. The user can change the defaults in the Design environment’s Import Data dialog box. Text fields may contain carriage returns, therefore, be careful when using a carriage return as a delimiter if you are importing text fields.

#### Example 

The following example imports data from a text document. The method first sets the input form so that the data will be imported through the correct form, changes the 4D delimiter variables, then performs the import:

```4d
 FORM SET INPUT([People];"Import")
 FldDelimit:=27 // Set field delimiter to Escape character
 RecDelimit:=10 // Set record delimiter to Line Feed character
 IMPORT TEXT([People];"NewPeople.txt") // Import from “NewPeople.txt” document
```

#### System variables and sets 

OK is set to 1 if the import is successfully completed; otherwise, it is set to 0.

#### See also 

[EXPORT TEXT](export-text.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 168 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


