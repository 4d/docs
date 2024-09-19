---
id: process-state
title: Process state
slug: /commands-legacy/process-state
displayed_sidebar: docs
---

<!--REF #_command_.Process state.Syntax-->**Process state** ( *process* ) -> Function result<!-- END REF-->
<!--REF #_command_.Process state.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Longint | &#x1F852; | Process number |
| Function result | Longint | &#x1F850; | State of the process |

<!-- END REF-->

#### Description 

<!--REF #_command_.Process state.Summary-->The **Process state** command returns the state of the process whose number you pass in *process*.<!-- END REF--> 

The function result can be one of the values provided by the following predefined constants:

| Constant                  | Type    | Value | Comment                                                                                                                                                                                                                                   |
| ------------------------- | ------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Does not exist            | Longint | \-100 |                                                                                                                                                                                                                                           |
| Aborted                   | Longint | \-1   |                                                                                                                                                                                                                                           |
| Executing                 | Longint | 0     |                                                                                                                                                                                                                                           |
| Delayed                   | Longint | 1     |                                                                                                                                                                                                                                           |
| Waiting for user event    | Longint | 2     |                                                                                                                                                                                                                                           |
| Waiting for input output  | Longint | 3     |                                                                                                                                                                                                                                           |
| Waiting for internal flag | Longint | 4     |                                                                                                                                                                                                                                           |
| Paused                    | Longint | 5     |                                                                                                                                                                                                                                           |
| \_o\_Hidden modal dialog  | Longint | 6     | **Compatibility:** This process state no longer exists starting with 4D v16\. An equivalent status is returned by the [PROCESS PROPERTIES](process-properties.md) command when *procState*\=Waiting for user event and *procMode*\=False. |

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
[PROCESS PROPERTIES](process-properties.md)  