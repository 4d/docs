---
id: create-alias
title: CREATE ALIAS
slug: /commands/create-alias
displayed_sidebar: docs
---

<!--REF #_command_.CREATE ALIAS.Syntax-->**CREATE ALIAS** ( *targetPath* ; *aliasPath* )<!-- END REF-->
<!--REF #_command_.CREATE ALIAS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetPath | Text | &#8594;  | Name or access path of the alias/shortcut target |
| aliasPath | Text | &#8594;  | Name or full pathname for the alias or shortcut |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE ALIAS.Summary-->The CREATE ALIAS command creates an alias (named “shortcut” under Windows) for the target file or folder passed in *targetPath*.<!-- END REF--> The name and location are defined by the *targetPath* parameter.

An alias can be made for any kind of document or folder. The alias icon will be the same as the target item. The icon contains a small arrow at the bottom left side. Under Mac OS, the icon name is also displayed in italics characters.

This command does not assign a name by default, the name has to be passed in the *aliasPath* parameter. If just a name is passed in this parameter, the alias is created in the current working folder (usually the folder containing the structure file).

**Note:** Under Windows, the shortcuts are designated by a “.LNK” extension (invisible). If this extension is not passed, it is automatically added by the command.

If an empty string is passed in the *targetPath*, the command does nothing.

#### Example 

Your database generates text files called “Report Number” sorted in the database folder. The user would like to create shortcuts to these reports and to store them at a convenient location:

```4d
  //Method CREATE_REPORT
 var $vtRport : Text
 C_STRING(250;$vtpath)
 C_STRING(80;$vaname)
 var vDoc : Time
 C_INTEGER($ReportNber)
 
 $vTReport:=... //Create report
 $ReportNber:=... //Compute the report number
 $vaName:="Report"+String($ReportNber)+".txt" //File name
 vDoc:=Create document($vaName)
 If(OK=1)
    SEND PACKET(vDoc;$vTReport)
    CLOSE DOCUMENT(vDoc)
  //Add the alias
    CONFIRM("Create an alias for this report?")
    If(OK=1)
       $vtPath:=Select folder("Where do you want the alias to be created?")
       If(OK=1)
          CREATE ALIAS($vaName;$vtPath+$vaName)
          If(OK=1)
             SHOW ON DISK($vtPath+$vaName)
  //Show the alias location
          End if
       End if
    End if
 End if
```

#### System variables and sets 

The OK system variable is set to 1 if the command execution was successful; otherwise it is set to 0.

#### See also 

[RESOLVE ALIAS](resolve-alias.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 694 |
| Thread safe | &check; |
| Modifies variables | OK |


