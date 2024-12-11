---
id: current-form-name
title: Current form name
slug: /commands/current-form-name
displayed_sidebar: docs
---

<!--REF #_command_.Current form name.Syntax-->**Current form name**  : Text<!-- END REF-->
<!--REF #_command_.Current form name.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Name of current project form or current table form in the process |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current form name.Summary-->The **Current form name** command returns the name of the current form defined for the process.<!-- END REF--> The current form can be a project form or a table form. 

By default, if you have not called the [FORM LOAD](../commands/form-load.md) command in the current process, the current form is the one being displayed or printed. If you have called the [FORM LOAD](../commands/form-load.md) command in the process, the current form is the one set by this command and it remains so until you call [FORM UNLOAD](form-unload.md) (or [CLOSE PRINTING JOB](close-printing-job.md)).

The command returns:

* the form name, or
* the filename without the extension if the current form is created by a .json file, or
* the "name" attribute if the current form is created by an object, or
* an empty string if there is no current form defined for the process.

#### Example 1 

In an input form, place the following code in a button:

```4d
 var $FormName : Text
 $win:=Open form window([Members];"Input";Plain form window)
 DIALOG([Members];"Input")
 $FormName:=Current form name
  // $FormName = "Input"
 FORM LOAD([Members];"Drag")
 $FormName:=Current form name
  // $FormName = "Drag"
  //...
```

#### Example 2 

You want to get the current form if it is a project form:

```4d
 $PointerTable:=Current form table
 If(Nil($PointerTable)) // this is a project form
    $FormName:=Current form name
    ... // processing
 End if
```

#### See also 

[FORM LOAD](../commands/form-load.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1298 |
| Thread safe | &check; |
| Forbidden on the server ||


