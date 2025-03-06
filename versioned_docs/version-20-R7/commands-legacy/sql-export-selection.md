---
id: sql-export-selection
title: SQL EXPORT SELECTION
slug: /commands/sql-export-selection
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXPORT SELECTION.Syntax-->**SQL EXPORT SELECTION** ( *aTable* ; *folderPath* {; *numFiles* {; *fileLimitSize* {; *fieldLimitSize*}}} )<!-- END REF-->
<!--REF #_command_.SQL EXPORT SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table from which to export selection |
| folderPath | Text | &#8594;  | Pathname of export folder or "" to display folder selection dialog box |
| numFiles | Integer | &#8594;  | Maximum number of files per folder |
| fileLimitSize | Integer | &#8594;  | Maximum size of Export.sql file (in KB) |
| fieldLimitSize | Integer | &#8594;  | Size limit (in bytes) below which the contents of a Text, BLOB or Picture field are embedded into the main file |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL EXPORT SELECTION.Summary-->The **SQL EXPORT SELECTION** command exports in SQL format the records of the current selection of the 4D table designated by the *aTable* parameter.<!-- END REF--> 

This command is nearly identical to the [SQL EXPORT DATABASE](sql-export-database.md) command. The file generated can be used directly by the [SQL EXECUTE SCRIPT](sql-execute-script.md) command in order to import data into another 4D database. The main difference between these two commands is that **SQL EXPORT SELECTION** only exports the current selection of *aTable* whereas [SQL EXPORT DATABASE](sql-export-database.md) exports the entire database. Also, unlike the [SQL EXPORT DATABASE](sql-export-database.md) command, this command does not work with external SQL databases. It can only be used with the main database.

Refer to the description of the [SQL EXPORT DATABASE](sql-export-database.md) command for a detailed description of the functioning and parameters of these commands.

If the current selection is empty, the command does nothing. Note that in this case, the destination folder is not emptied. 

If the export is carried out correctly, the *OK* variable is set to 1\. Otherwise, it is set to 0\. 

##### 

**Note:** This command does not support Object type fields.

#### See also 

[SQL EXPORT DATABASE](sql-export-database.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1064 |
| Thread safe | &cross; |
| Modifies variables | OK |


