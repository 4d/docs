---
id: clear-variable
title: CLEAR VARIABLE
slug: /commands/clear-variable
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR VARIABLE.Syntax-->**CLEAR VARIABLE** ( *variable* )<!-- END REF-->
<!--REF #_command_.CLEAR VARIABLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | Variable to clear |

<!-- END REF-->

#### Description 

<!--REF #_command_.CLEAR VARIABLE.Summary-->CLEAR VARIABLE resets *variable* to its default type value (*i.e.*, empty string for Text variables, *0* for numeric variables, no elements for arrays, etc.).<!-- END REF--> The variable still exists in memory. 

**Note:** For more information on default type values, please refer to the *Default values* paragraph.

The variable you pass in *variable* can be a local, process or interprocess variable.

**Note:** You do not need to clear process variables when a process ends; 4D clears them automatically. Similarly, each local variable is automatically cleared when the method in which it was created completes execution.

#### Example 

In a form, you are using the drop-down list *asMyDropDown* whose sole purpose is user interface. In other words, you use that array during data entry, but once you are done with the form, you will no longer use that array. Consequently, during the On Unload event, you just get rid of the array:

```4d
  //asMyDropDown drop-drop list object method
 Case of
    :(Form event code=On Load)
  //Initialize the array one way or another
       ARRAY TEXT(asMyDropDown;...)
  // ...
    :(Form event code=On Unload)
  //No longer need the array
       CLEAR VARIABLE(asMyDropDown)
  // ...
 End case
```

#### See also 

[Undefined](undefined.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 89 |
| Thread safe | &check; |


