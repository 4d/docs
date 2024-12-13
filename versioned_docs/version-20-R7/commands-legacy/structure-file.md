---
id: structure-file
title: Structure file
slug: /commands/structure-file
displayed_sidebar: docs
---

<!--REF #_command_.Structure file.Syntax-->**Structure file** {( * )} : Text<!-- END REF-->
<!--REF #_command_.Structure file.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | Returns structure file of host database |
| Function result | Text | &#8592; | Long name of the database structure file |

<!-- END REF-->

#### Description 

<!--REF #_command_.Structure file.Summary-->The **Structure file** command returns the pathname of the structure file for the database with which you are currently working.<!-- END REF-->

* With binary databases, the command returns the pathname of the **.4db** file.
* With project databases, the command returns the pathname of the **.4dproject** file.

**Note:** In the particular case of a database that has been compiled and merged with 4D Volume Desktop, this command returns the pathname of the application file (executable application) under Windows and macOS. Under macOS, this file is located inside the software package, in the \[Contents:Mac OS\] folder. This stems from a former mechanism and is kept for compatibility reasons. If you want to get the full name of the software package itself, it is preferable to use the [Application file](application-file.md) command. The technique consists of testing the application using the [Application type](application-type.md) command, then executing **Structure file** or [Application file](application-file.md) depending on the context.

**WARNING:** If you call this command when using 4D in remote mode, only the name of the structure/project file is returned; the pathname is not returned.

The optional *\** parameter is useful in the case of an architecture using components: it can be used to determine the structure (host or component) for which you want to get the pathname depending on the context in which the command is called:

* When the command is called from a component:  
   * If the *\** parameter is passed, the command returns the pathname of the structure file of the host database,  
   * If the *\** parameter is not passed, the command returns the pathname of the structure file of the component.  
   The structure file of the component corresponds to the structure file (.4db, .4dc, .4dproject, .4dz) of the component found in the “Components” folder of the database. However, a component can also be installed as an alias/shortcut or a .4dbase folder/package:  
         * In the case of a component installed as an alias/shortcut, the command returns the pathname of the original file (the alias or shortcut is resolved).  
         * In the case of a component installed as a .4dbase folder/package, the command returns the pathname of the file located within this folder/package.
* When the command is called from a method of the host database, it always returns the pathname of the structure/project file of the host database, regardless of whether or not the *\** parameter is passed.

#### Example 1 

This example displays the name and the location of the structure file currently in use:

```4d
 var $fullpath : Object
 var $name;$path : Text
 If(Application type#4D Remote mode)
    $fullpath:=Path to object(Structure file)
    $name:=$fullpath.name
    $path:=$fullpath.parentFolder
    ALERT("You are currently using the database "+Char(34)+$name+Char(34)+" located at "+Char(34)+$path+Char(34)+".")
 Else
    ALERT("You are connected to the database "+Char(34)+Structure file+Char(34))
 End if
```

#### Example 2 

The following example can be used to find out whether the method is called from a component:

```4d
 var $0 : Boolean
 $0:=(Structure file#Structure file(*))
  // $0=True if method is called from a component
```

#### See also 

[Application file](application-file.md)  
[COMPONENT LIST](component-list.md)  
[Data file](data-file.md)  