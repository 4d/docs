---
id: import-data
title: IMPORT DATA
slug: /commands/import-data
displayed_sidebar: docs
---

<!--REF #_command_.IMPORT DATA.Syntax-->**IMPORT DATA** ( *fileName* {; *project* {; *}} )<!-- END REF-->
<!--REF #_command_.IMPORT DATA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| fileName | Text | &#8594;  | Access path and name of the import file |
| project | Text, Blob | &#8594;  | Contents of the import project |
| &#8592; | New contents of the import project (if the * parameter has been passed) |
| * | Operator | &#8594;  | Displays the import dialog box and updates the project |

<!-- END REF-->

#### Description 

<!--REF #_command_.IMPORT DATA.Summary-->The **IMPORT DATA** command imports the data located in the *fileName* file.<!-- END REF--> 4D can import the data in the following formats: Text, Fixed length text, XML, SYLK, DIF, DBF (dBase), and 4D. 

If you pass an empty string to *fileName*, **IMPORT DATA** displays the standard save file dialog box, allowing the user to define the name, type, and location of the import file. Once the dialog box has been accepted, the Document system variable contains the access path and the name of the file. If the user clicks **Cancel**, the execution of the command is stopped and the OK system variable is set to 0.

The optional *project* parameter lets you use a project to import data. When you pass this parameter, the import is carried out directly, without any user intervention (unless you use the *\** option, see below). If you don’t pass this parameter, the import dialog box is displayed. The user can define the import parameters or load an existing import project.

An import project contains all the import parameters such as the tables and fields in which to import, the delimiters to use, and so on. In the *project* parameter, you can pass either a Text variable containing XML or a Text variable containing a reference to a pre-existing DOM element, or a BLOB. Projects may have been created by programming (XML format projects only) or by loading parameters that were previously defined in the import dialog box.In the latter case, you have two solutions available:

* Use the **IMPORT DATA** command with an empty project parameter and the optional parameter *\**, then store the resulting *project* parameter in a Text or BLOB field (see below). This solution allows you to save the project with the data file.
* Save the project to disk, then load it for example using the [DOM Parse XML source](dom-parse-xml-source.md) command, and pass its reference in the *project* parameter.

**Compatibility note:** Beginning with version 12 of 4D, import projects are encoded in XML. 4D can open import projects generated with previous 4D versions (BLOB format) but any projects created starting with v12 can no longer be opened with v11 or earlier versions. We now recommend that you use Text variables for handling import files.

The optional *\** parameter, if it is specified, forces the display of the import dialog box with the import parameters set as they were defined in *project*. This feature allows you to use a predefined project, while still having the possibility to modify one or more of the parameters. Furthermore, the *project* parameter contains, after closing the import dialog box, the parameters of the “new” project. You can then store the new project in a BLOB field, on disk, and so on. 

If the import was successful, the OK system variable is set to 1.

**Note:** Refer to the [EXPORT DATA](export-data.md) command for an example concerning the definition of an empty project. 

#### System variables and sets 

If the user clicks **Cancel** in the standard save file dialog box or in the import dialog box, the OK system variable is set to 0\. If the import was successful, the OK system variable is set to 1.

#### See also 

[EXPORT DATA](export-data.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[IMPORT TEXT](import-text.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 665 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


