---
id: export-data
title: EXPORT DATA
slug: /commands/export-data
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT DATA.Syntax-->**EXPORT DATA** ( *fileName* {; *project* {; *}} )<!-- END REF-->
<!--REF #_command_.EXPORT DATA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| fileName | Text | &#8594;  | Full path name of the export file |
| project | Text, Blob | &#8594;  | Contents of the export project |
| &#8592; | New contents of the export project (if the * parameter has been passed) |
| * | Operator | &#8594;  | Displays the export dialog box and updates the project |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.EXPORT DATA.Summary-->The **EXPORT DATA** command exports data in the *fileName* file.<!-- END REF-->4D can export data in the following formats: Text, Fixed length text, XML, SYLK, DIF, DBF (dBase), and 4D. 

If you pass an empty string in *fileName*, **EXPORT DATA** displays the standard save file dialog box, allowing the user to define the name, type, and location of the export file. Once the dialog box has been accepted, the **Document** system variable contains the access path and the name of the file. If the user clicks **Cancel**, the execution of the command is stopped and the **OK** system variable is equal to 0.

The optional *project* parameter lets you use a project to export data. When you pass this parameter, the export is carried out directly, without any user intervention (unless you use the *\** option, see below). If you don’t pass this parameter, the export dialog box is displayed. The user can define the export parameters or load an existing export project.

An export project contains all the export parameters such as the tables and fields to export, delimiters, etc. In the *project* parameter, you can pass either a Text variable containing XML or a Text variable containing a reference to a pre-existing DOM element, or a BLOB. Projects may have been created by programming (XML format projects only) or by loading parameters that were previously defined in the export dialog box.In the latter case, you have two solutions available:

* Use the **EXPORT DATA** command with an empty *project* parameter and the optional *\** parameter, then store the resulting *project* parameter in a Text or BLOB type field (see below). This solution allows you to save the project with the data file.
* Save the project to disk, then load it for example by using the [DOM Parse XML source](dom-parse-xml-source.md) command, and pass its reference in the *project* parameter

**Compatibility note:** Beginning with version 12 of 4D, export projects are encoded in XML. 4D can open export projects generated with previous 4D versions (BLOB format) but any projects created starting with v12 can no longer be opened with v11 or earlier versions. We now recommend that you use Text variables for handling export files. 

The optional parameter *\**, if it is specified, forces the display of the export dialog box with the parameters defined in *project*. This feature allows you to use a predefined project, while still having the possibility to modify one or more of the parameters. Furthermore, the project parameter contains, after closing the export dialog box, the parameters of the “new” project. You can then store the new project in a Text field, on disk, etc. 

If the export was successful, the **OK** system variable is set to 1.

#### Example 1 

This example illustrates the use of the EXPORT DATA command to export data in binary format.

* This method makes a loop on all the database tables and calls the ExportBinary method:

```4d
 var $ExportPath : Text
 var $i : Integer
 $ExportPath:=Select folder("Please select the export folder:")
 If(Ok=1)
    For($i;1;Last table number
       If(Is table number valid($i))
          ExportBinary(Table($i);$ExportPath+Table name($i);True)
       End if
    End for
 End if
```

* Here is the code for the ExportBinary method:

```4d
 var $1 : Pointer //table
 var $2 : Text //path of destination file
 var $3 : Boolean //export all records
 var $i : Integer
 var $ref : Text
 $ref:=DOM Create XML Ref("settings-import-export")
  // Export the table "$1" in '4D' binary format, all the records or only the current selection
 DOM SET XML ATTRIBUTE($ref;"table_no";Table($1);"format";"4D";"all_records";$3)
  // Definition of fields to export
 For($i;1;Last field number($1))
    If(Is field number valid($1;$i))
       $elt:=DOM Create XML element($ref;"field";"table_no";Table($1);"field_no";$i)
    End if
 End for
 EXPORT DATA($2;$ref)
 If(Ok=0)
    ALERT("Error during export of table "+Table name($1))
 End if
 DOM CLOSE XML($ref)
```

#### Example 2 

This example creates an empty project and stores the parameters set by the user in the export dialog box there: 

```4d
 var $exportParams : Text
 EXPORT DATA("DocExport.txt";$exportParams;*) //Display of the export dialog box
```

#### System variables and sets 

If the user clicks **Cancel** in the standard open file dialog box or in the export dialog box, the OK system variable is equal to 0\. If the export was successful, the OK system variable is equal to 1.

#### See also 

[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[IMPORT DATA](import-data.md)  