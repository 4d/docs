---
id: process-state
title: Process state
slug: /commands/process-state
displayed_sidebar: docs
---

<!--REF #_command_.Process state.Syntax-->**Process state** ( *process* ) : Integer<!-- END REF-->
<!--REF #_command_.Process state.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Process number |
| Function result | Integer | &#8592; | State of the process |

<!-- END REF-->

#### Description 

<!--REF #_command_.Process state.Summary-->The **Process state** command returns the state of the process whose number you pass in *process*.<!-- END REF--> 

The function result can be one of the values provided by the following predefined constants:

| Constant                  | Type    | Value | Comment                                                                                                                                                                                                                                   |
| ------------------------- | ------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Does not exist            | Integer | \-100 |                                                                                                                                                                                                                                           |
| Aborted                   | Integer | \-1   |                                                                                                                                                                                                                                           |
| Executing                 | Integer | 0     |                                                                                                                                                                                                                                           |
| Delayed                   | Integer | 1     |                                                                                                                                                                                                                                           |
| Waiting for user event    | Integer | 2     |                                                                                                                                                                                                                                           |
| Waiting for input output  | Integer | 3     |                                                                                                                                                                                                                                           |
| Waiting for internal flag | Integer | 4     |                                                                                                                                                                                                                                           |
| Paused                    | Integer | 5     |                                                                                                                                                                                                                                           |
| \_o\_Hidden modal dialog  | Integer | 6     | **Compatibility:** This process state no longer exists starting with 4D v16\. An equivalent status is returned by the [Process info](../commands/process-info.md) command when *procState*\=Waiting for user event and *procMode*\=False. |

If the process does not exist (which means you did not pass a number in the range 1 to [Count tasks](count-tasks.md)), **Process state** returns Does not exist (-100).

#### Example 

The following example puts the name and process reference number for each process into the *asProcName* and *aiProcNum* arrays. The method checks to see if the process has been aborted. In this case, the process name and number are not added to the arrays: 

```4d
 $vlNbTasks:=Count tasks
 ARRAY TEXT(asProcName;$vlNbTasks)
 ARRAY INTEGER(aiProcNum;$vlNbTasks)
 $vlActualCount:=0
 For($vlProcess;1;$vlNbTasks)
    If(Process state($vlProcess)>=Executing)
       $vlActualCount:=$vlActualCount+1
       PROCESS PROPERTIES($vlProcess;asProcName{$vlActualCount};$vlState;$vlTime)
       aiProcNum{$vlActualCount}:=$vlProcess
    End if
 End for
  // Eliminate unused extra elements
 ARRAY TEXT(asProcName;$vlNbTasks)
 ARRAY INTEGER(aiProcNum;$vlActualCount)
```

#### See also 

[Count tasks](count-tasks.md)  
[Process info](../commands/process-info.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 330 |
| Thread safe | &check; |
| Forbidden on the server ||


