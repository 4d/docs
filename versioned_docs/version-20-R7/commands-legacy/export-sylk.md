---
id: export-sylk
title: EXPORT SYLK
slug: /commands/export-sylk
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT SYLK.Syntax-->**EXPORT SYLK** ( {*aTable* ;} *document* )<!-- END REF-->
<!--REF #_command_.EXPORT SYLK.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table from which to export data, or Default table, if omitted |
| document | Text | &#8594;  | SYLK document to receive the data |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.EXPORT SYLK.Summary-->The EXPORT SYLK command writes data from the records of the current selection of *aTable* in the current process.<!-- END REF--> The data is written to *document*, a Windows or Macintosh Sylk document on the disk.

The export operation is performed through the current output form. The export operation writes fields and variables based on the entry order of the output form. For this reason, you should use an output form that contains only the fields or enterable objects that you wish to export. Do not place buttons or other extraneous objects on the export form.Subform objects are ignored.

An On Load event is sent to the form method for each record that is exported. Use this event to set the variables you may use in the export form.

The *document* parameter can name a new or existing document. If *document* is given the same name as an existing document, the existing document is overwritten. The *document* can include a path that contains volume and folder names. If you pass an empty string, the standard Save File dialog box is displayed. If the user cancels this dialog, the export operation is canceled, and the OK system variable is set to 0.

A progress thermometer is displayed during export. The user can cancel the operation by clicking a Stop button. If the export is successfully completed, the OK system variable is set to 1\. If the operation is canceled or an error occurs, the OK system variable is set to 0\. The thermometer can be hidden with the [MESSAGES OFF](messages-off.md "MESSAGES OFF") command.

By default, the command uses the UTF-8 character set. Since SYLK format documents generally use the ISO-8859-1 character set, you may need to use the [USE CHARACTER SET](use-character-set.md "USE CHARACTER SET") command to specify the appropriate character set. 

When using **EXPORT SYLK**, the default field delimiter is the tab character (code 9). The default record delimiter is the carriage return (code 13) under OS X and the carriage return+line feed (code 13 + code 10) under Windows. You can modify these values by assigning new values to the two *System Variables* *FldDelimit* and *RecDelimit*. The user can change these default values in the export dialog box of the Design mode. Note that if exported fields contain characters defined as field or record delimiters, these characters are automatically replaced with spaces in the exported file, in order to avoid disrupting the importing process.

#### Example 

The following example exports data to a SYLK document. The method first sets the output form so that the data will be exported through the correct form, then performs the export:

```4d
 FORM SET OUTPUT([People];"Export")
 EXPORT SYLK([People];"NewPeople.slk") // Export to the "NewPeople.slk" document
```

#### System variables and sets 

OK is set to 1 if the export is successfully completed; otherwise, it is set to 0.

#### See also 

[EXPORT DIF](export-dif.md)  
[EXPORT TEXT](export-text.md)  
[IMPORT SYLK](import-sylk.md)  
[USE CHARACTER SET](use-character-set.md)  