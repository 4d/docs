---
id: import-sylk
title: IMPORT SYLK
slug: /commands/import-sylk
displayed_sidebar: docs
---

<!--REF #_command_.IMPORT SYLK.Syntax-->**IMPORT SYLK** ( {*aTable* ;} *document* )<!-- END REF-->
<!--REF #_command_.IMPORT SYLK.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table into which to import data, or Default table, if omitted |
| document | Text | &#8594;  | SYLK document from which to import data |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.IMPORT SYLK.Summary-->The **IMPORT SYLK** command reads data from *document*, a Windows or Macintosh SYLK document, into the table *aTable* by creating new records for that table.<!-- END REF-->

The import operation is performed through the current input form. The import operation reads fields and variables based on the layering of objects in the input form. For this reason, you should be very careful about the front-to-back order of text objects (fields and variables) in the form. The first object into which data will be imported should be in the back of the form, and so on. If the number of fields or variables in the form does not match the number of fields being imported, the extra ones are ignored. An input form used for importing cannot contain any buttons. Subform objects are ignored.

**Note:** One way to ensure that the data is imported into the correct objects is to select the object into which the first field should be imported and move it to the front. Continue to move the fields and variables to the front, in order, making sure that you have one field or variable for each field being imported.

An On Validate event is sent to the form method for each record that is imported. If you use variables in the import form, use this event to copy data from variables to fields.

The *document* parameter can include a path that contains volume and folder names. If you pass an empty string, the standard Open File dialog box is displayed. If the user cancels this dialog, the import operation is canceled, and the OK system variable is set to 0.

A progress thermometer is displayed during the import. The user can cancel the operation by clicking a Stop button. Records that have already been imported will not be removed if the user presses the Stop button. If the import is successfully completed, the OK system variable is set to 1\. If an error occurs or the operation was interrupted, the OK variable is set to 0\. The thermometer can be hidden with the [MESSAGES OFF](messages-off.md) command.

By default, the command uses the UTF-8 character set. Since SYLK format documents generally use the ISO-8859-1 character set, you may need to use the [USE CHARACTER SET](use-character-set.md) command to specify the appropriate character set. 

When using **IMPORT SYLK**, the default field delimiter is the tab character (code 9). The default record delimiter is the carriage return (code 13). You can modify these values by assigning new values to the two *System Variables* *FldDelimit* and *RecDelimit*. The user can change these default values in the export dialog box of the Design mode. Since Text fields can contain carriage returns, be careful if you use the carriage return as the field delimiter for fields to be exported.

#### Example 

The following example imports data from a SYLK document. The method first sets the input form so the data will be imported through the correct form, then performs the import:

```4d
 FORM SET INPUT([People];"Import")
 IMPORT SYLK([People];"NewPeople.slk") // Import from “NewPeople.slk” document
```

#### System variables and sets 

OK is set to 1 if the import is successfully complete; otherwise, it is set to 0.

#### See also 

[EXPORT SYLK](export-sylk.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT TEXT](import-text.md)  
[USE CHARACTER SET](use-character-set.md)  