---
id: load-variables
title: LOAD VARIABLES
slug: /commands/load-variables
displayed_sidebar: docs
---

<!--REF #_command_.LOAD VARIABLES.Syntax-->**LOAD VARIABLES** ( *document* ; *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.LOAD VARIABLES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Text | &#8594;  | Document containing 4D variables |
| variable | Variable | &#8592; | Variable(s) to receive the value(s) |

<!-- END REF-->

#### Description 

<!--REF #_command_.LOAD VARIABLES.Summary-->The **LOAD VARIABLES**  command loads one or more variables from the document specified by *document*.<!-- END REF--> The document must have been created using the [SAVE VARIABLES](save-variables.md) command.

The variables *variable*, *variable2*...*variableN* are created; if they already exist, they are overwritten.

If you supply an empty string for *document*, the standard Open File dialog box appears, so the user can choose the document to open. If a document is chosen, the 4D system variable Document is set to the name of the document.

In compiled databases, each variable must be of the same type as those loaded from disk.

**WARNING:** This command does not support array variables. Use the new BLOB commands instead.

#### Example 

The following example loads three variables from a document named UserPrefs:

```4d
 LOAD VARIABLES("User Prefs";vsName;vlCode;vgIconPicture)
```

#### System variables and sets 

If the variables are loaded properly, the OK system variable is set to 1; otherwise it is set to 0.

#### See also 

[BLOB TO DOCUMENT](blob-to-document.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[DOCUMENT TO BLOB](document-to-blob.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[VARIABLE TO BLOB](variable-to-blob.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 74 |
| Thread safe | &check; |
| Modifies variables | OK, Document |


