---
id: resource-type-list
title: RESOURCE TYPE LIST
slug: /commands/resource-type-list
displayed_sidebar: docs
---

<!--REF #_command_.RESOURCE TYPE LIST.Syntax-->**RESOURCE TYPE LIST** ( *resTypes* {; *resFile*} )<!-- END REF-->
<!--REF #_command_.RESOURCE TYPE LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resTypes | Text array | &#8592; | List of available resource types |
| resFile | Time | &#8594;  | Resource file reference number, or all open resource files, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.RESOURCE TYPE LIST.Summary-->The RESOURCE TYPE LIST command populates the array *resTypes* with the resource types of the resources present in the resource files currently open.<!-- END REF-->

If you pass a valid resource file reference number in the optional parameter *resFile*, only the resources from that file are listed. If you do not pass the parameter *resFile*, all the resources from the current open resource files are listed.

You can predeclare the array *resTypes* as a String or Text array before calling RESOURCE TYPE LIST. If you do not predeclare the array, the command creates *resTypes* as a Text array. 

After the call, you can test the number of resource types found by applying the command [Size of array](size-of-array.md) to the array *resTypes*.

#### Example 1 

The following example populates the array *atResType* with the resource types of the resources present in all the resource files currently open:

```4d
 RESOURCE TYPE LIST(atResType)
```

#### Example 2 

The following example tells you if the Macintosh 4D structure file you are using contains old 4D plug-ins that will need to be updated in order to use the database on Windows:

```4d
 $vhResFile:=Open resource file(Structure file)
 RESOURCE TYPE LIST(atResType;$vhResFile)
 If(Find in array(atResType;"4DEX")>0)
    ALERT("This database contains old model Mac OS 4D plug-ins."+(Char(13)*2)+
    "You will have to update them for using this database on Windows.")
 End if
```

**Note:** The structure file is not the only file where old version plug-ins can be stored. The database can also include a Proc.Ext file.

#### Example 3 

The following project method returns the number of resources present in a resource file:

```4d
  // Count resources project method
  // Count resources ( Time ) -> Long
  // Count resources ( DocRef ) -> Number of resources
 
 var $0 : Integer
 var $1 : Time
 
 $0:=0
 RESOURCE TYPE LIST($atResType;$1)
 For($vlElem;1;Size of array($atResType))
    RESOURCE LIST($atResType{$vlElem};$alResID;$atResName;$1)
    $0:=$0+Size of array($alResID)
 End for
```

Once this project method is implemented in a database, you can write:

```4d
 $vhResFile:=Open resource file("")
 If(OK=1)
    ALERT("The file “"+Document+"” contains "+String(Count resources($vhResFile))+" resource(s).")
    CLOSE RESOURCE FILE($vhResFile)
 End if
```

#### See also 

[RESOURCE LIST](resource-list.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 499 |
| Thread safe | &cross; |


