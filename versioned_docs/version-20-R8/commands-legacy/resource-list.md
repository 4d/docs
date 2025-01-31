---
id: resource-list
title: RESOURCE LIST
slug: /commands/resource-list
displayed_sidebar: docs
---

<!--REF #_command_.RESOURCE LIST.Syntax-->**RESOURCE LIST** ( *resType* ; *resIDs* ; *resNames* {; *resFile*} )<!-- END REF-->
<!--REF #_command_.RESOURCE LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resType | Text | &#8594;  | 4-character resource type |
| resIDs | Array integer | &#8592; | Resource ID numbers for resources of this type |
| resNames | Text array | &#8592; | Resource names for resources of this type |
| resFile | Time | &#8594;  | Resource file reference number, or all open resource files, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.RESOURCE LIST.Summary-->The **RESOURCE LIST** command populates the arrays *resIDs* and *resNames* with the resource IDs and names of the resources whose type is passed in *resType*.<!-- END REF-->

**Important:** You must pass a 4-character string in *resType*.

If you pass a valid resource file reference number in the optional parameter *resFile*, only the resources from that file are listed. If you do not pass the parameter *resFile*, all resources from the current open resource files are listed.

If you predeclare the arrays before calling **RESOURCE LIST**, you must predeclare *resIDs* as a Longint array and *resNames* as a String or Text array. If you do not predeclare the arrays, the command creates *resIDs* as a Longint array and *resNames* as a Text array.

After the call, you can test the number of resources found by applying the [Size of array](size-of-array.md) command to the array *resIDs* or *resNames*.

#### Example 1 

The following example populates the arrays *$alResID* and *$atResName* with the IDs and names of the string list resources present in the structure file of the database:

```4d
 If(On Windows)
    $vhStructureResFile:=Open resource file(Replace string(Structure file;".4DB";".RSR"))
 Else
    $vhStructureResFile:=Open resource file(Structure file)
 End if
 If(OK=1)
    RESOURCE LIST("STR#";$alResID;$atResName;$vhStructureResFile)
 End if
```

#### Example 2 

The following example copies the picture resources present in all currently open resource files into the Picture Library of the database:

```4d
 RESOURCE LIST("PICT";$alResID;$atResName)
 Open window(50;50;550;120;5;"Copying PICT resources...")
 For($vlElem;1;Size of array($alResID))
    GET PICTURE RESOURCE($alResID{$vlElem};$vgPicture)
    If(OK=1)
       $vsName:=$atResName{$vlElem}
       If($vsName="")
          $vsName:="PICT resID="+String($alResID{$vlElem})
       End if
       ERASE WINDOW
       GOTO XY(2;1)
       MESSAGE("Adding picture “"+$vsName+"” to the DB Picture library.")
       SET PICTURE TO LIBRARY($vgPicture;$alResID{$vlElem};$vsName)
    End if
 End for
 CLOSE WINDOW
```

#### See also 

[RESOURCE TYPE LIST](resource-type-list.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 500 |
| Thread safe | &cross; |


