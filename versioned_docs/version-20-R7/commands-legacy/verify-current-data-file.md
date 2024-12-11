---
id: verify-current-data-file
title: VERIFY CURRENT DATA FILE
slug: /commands/verify-current-data-file
displayed_sidebar: docs
---

<!--REF #_command_.VERIFY CURRENT DATA FILE.Syntax-->**VERIFY CURRENT DATA FILE** {( *objects* ; *options* ; *method* {; *tablesArray* {; *fieldsArray*}} )}<!-- END REF-->
<!--REF #_command_.VERIFY CURRENT DATA FILE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| objects | Integer | &#8594;  | Objects to check |
| options | Integer | &#8594;  | Checking options |
| method | Text | &#8594;  | Name of 4D callback method |
| tablesArray | Array integer | &#8594;  | Numbers of tables to be checked |
| fieldsArray | 2D Integer array, 2D Integer array, 2D Real array | &#8594;  | Numbers of indexes to be checked |

<!-- END REF-->

#### Description 

<!--REF #_command_.VERIFY CURRENT DATA FILE.Summary-->The VERIFY CURRENT DATA FILE command carries out a structural check of the objects found in the data file currently opened by 4D.<!-- END REF-->

This command has the same functioning as the [VERIFY DATA FILE](verify-data-file.md) command, except that it only applies to the current data file of the open database. It therefore does not require parameters specifying the structure and data.

Refer to the [VERIFY DATA FILE](verify-data-file.md) command for a description of the parameters.

If you pass the VERIFY CURRENT DATA FILE command with no parameters, the verification is carried out with the default values of the parameters:

* *objects* \= Verify All (= value 16)
* *options* \= 0 (log file is created but not timestamped)
* *method* \= ""
* *tablesArray* and *fieldsArray* are omitted.

When this command is executed, the data cache is flushed and all operations accessing the data are blocked during the verification.

If a log file has been generated, its complete pathname is returned in the *Document* system variable. 

#### System variables and sets 

If the callback method does not exist, the verification is not carried out, an error is generated and the system variable OK is set to 0\. If a log file was generated, its complete pathname is returned in the Document system variable. 

#### See also 

[VERIFY DATA FILE](verify-data-file.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1008 |
| Thread safe | &check; |
| Modifies variables | OK, Document, error |
| Forbidden on the server ||


