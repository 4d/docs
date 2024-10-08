---
id: process-number
title: Process number
slug: /commands/process-number
displayed_sidebar: docs
---

<!--REF #_command_.Process number.Syntax-->**Process number** ( *name* {; *} ) -> Function result<!-- END REF-->
<!--REF #_command_.Process number.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| name | Text | &srarr; | Name of process for which to retrieve the process number |
| * |  | &srarr; | Return the process number from the server |
| Function result | Longint | &larr; | Process number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Process number.Summary-->Process number returns the number of the process whose name you pass in *name*.<!-- END REF--> If no process is found, Process number returns 0.

The optional parameter \* allows you to retrieve, from 4D Client, the process ID of a process that is executed on the server (a stored procedure). In this case, the returned value is negative. This option is especially useful when using the [GET PROCESS VARIABLE](get-process-variable.md), [SET PROCESS VARIABLE](set-process-variable.md) and [VARIABLE TO VARIABLE](variable-to-variable.md) commands. Please refer to the descriptions of these commands for details.

If the command is executed with the \* parameter from a process on the server machine, the returned value is positive.

#### Example 

You create a custom floating window, run in a separate process, in which you implement your own tools to interact with the Design environment. For example, when selecting an item in a hierarchical list of keywords, you want to paste some text into the frontmost window of the Design environment. To do so, you can use the pasteboard, but the pasting event must occur within the Design process. The following small function returns the process number of the Design process (if running):

```4d
  // Design process number Project Method
  // Design process number -> LongInt
  // Design process number -> Design process number
 
 $0:=Process number("Design Process")
  // Note: This can break in the future if the process name changes
```

Using this function, the following project method pastes the text received as parameter to the frontmost window of the Design environment (if applicable):

```4d
  // PASTE TEXT TO DESIGN Project Method
  // PASTE TEXT TO DESIGN ( Text )
  // PASTE TEXT TO DESIGN ( Text to Paste in frontmost Design window )
 
 var $1 : Text
 var $vlDesignPID;$vlCount : Integer
 
 $vlDesignPID:=Design process number
 If($vlDesignPID #0)
  // Put the text into the pasteboard
    SET TEXT TO PASTEBOARD($1)
  // Post a Ctrl-V / Command-V event
    POST KEY(Character code("v");Command key mask;$vlDesignPID)
  // Call repeatedly DELAY PROCESS so the scheduler gets a chance
  // to pass over the event to the Design process
    For($vlCount;1;5)
       DELAY PROCESS(Current process;1)
    End for
 End if
```

#### See also 

[GET PROCESS VARIABLE](get-process-variable.md)  
[PROCESS PROPERTIES](process-properties.md)  
[Process state](process-state.md)  
[SET PROCESS VARIABLE](set-process-variable.md)  