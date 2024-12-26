---
id: save-variables
title: SAVE VARIABLES
slug: /commands/save-variables
displayed_sidebar: docs
---

<!--REF #_command_.SAVE VARIABLES.Syntax-->**SAVE VARIABLES** ( *document* ; *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.SAVE VARIABLES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Text | &#8594;  | Document in which to save the variables |
| variable | Variable | &#8594;  | Variables to save |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAVE VARIABLES.Summary-->The **SAVE VARIABLES** command saves one or more variables in the document whose name you pass in *document*.<!-- END REF-->

The variables do not need to be of the same type, but must be of the String, Text, Real, Integer, Long Integer, Date, Time, Boolean, or Picture type.

If you pass an empty string for *document*, the standard Save File dialog box appears; the user can then choose the document to create. In this case, the 4D system variable Document is set to the name of the document if one is created. 

If the variables are properly saved, the OK variable is set to 1\. If not, OK is set to 0.

**Note:** When you write variables to documents with **SAVE VARIABLES**, 4D uses an internal data format. You can retrieve the variables only with the [LOAD VARIABLES](load-variables.md) command. Do not use [RECEIVE PACKET](receive-packet.md) or [RECEIVE VARIABLE](receive-variable.md) to read a document created by **SAVE VARIABLES**.

**WARNING:** This command does not support array variables. Use the new BLOB commands instead.

#### Example 

The following example saves three variables to a document named UserPrefs:

```4d
 SAVE VARIABLES("User Prefs";vsName;vlCode;vgIconPicture)
```

#### System variables and sets 

If the variables are saved properly, the **OK** system variable is set to 1; otherwise it is set to 0.

#### See also 

[BLOB TO DOCUMENT](blob-to-document.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[DOCUMENT TO BLOB](document-to-blob.md)  
[LOAD VARIABLES](load-variables.md)  
*System Variables*  
[VARIABLE TO BLOB](variable-to-blob.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 75 |
| Thread safe | &check; |
| Modifies variables | OK, Document |


