---
id: process-properties
title: PROCESS PROPERTIES
slug: /commands/process-properties
displayed_sidebar: docs
---

<!--REF #_command_.PROCESS PROPERTIES.Syntax-->**PROCESS PROPERTIES** ( *process* ; *procName* ; *procState* ; *procTime* {; *procMode* {; *uniqueID* {; *origin*}}} )<!-- END REF-->
<!--REF #_command_.PROCESS PROPERTIES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Longint | &#x1F852; | Process number |
| procName | String | &#x1F858; | Process name |
| procState | Longint | &#x1F858; | Process state |
| procTime | Longint | &#x1F858; | Cumulative time taken by process in ticks |
| procMode | Boolean, Longint | &#x1F858; | If Boolean: Visible (True) or Hidden (False)<br/>If Longint (bit field): bit 0 = Visibility, bit 1 = Preemptive execution |
| uniqueID | Longint | &#x1F858; | Unique process ID |
| origin | Longint | &#x1F858; | Origin of the process |

<!-- END REF-->

#### Description 

<!--REF #_command_.PROCESS PROPERTIES.Summary-->The **PROCESS PROPERTIES** command returns various information about the process whose process number you pass in *process*.<!-- END REF-->

**Note:** If the process does not exist, which means you did not pass in *process* a number in the range 1 to [Count tasks](count-tasks.md), **PROCESS PROPERTIES** leaves the variable parameters unchanged.

After the call:

* *procName* returns the name of the process. Some things to note about the process name:  
   * If the process was started from the **Execute Method** dialog box (with the **New Process** option selected), its name is “P\_” followed by a number.  
   * If the process was started from a custom menu item whose **Start a New Process** property is checked, the name of the process is “M\_” or “ML\_” followed by a number.  
   * If the process was started by the Web server, its name is "Web Process#" followed by an UUID.  
   * If the process has been aborted (and its “slot” not reused yet), the name of the process is still returned. To detect if a process is aborted, test *procState=-1* (see below).
* *procState* returns the state of the process at the moment of the call. This parameter can return one of the values provided by the following predefined constants:  
| Constant                  | Type    | Value |  
| ------------------------- | ------- | ----- |  
| Does not exist            | Longint | \-100 |  
| Aborted                   | Longint | \-1   |  
| Executing                 | Longint | 0     |  
| Delayed                   | Longint | 1     |  
| Waiting for user event    | Longint | 2     |  
| Waiting for input output  | Longint | 3     |  
| Waiting for internal flag | Longint | 4     |  
| Paused                    | Longint | 5     |

* *procTime* returns the cumulative time that the process has used since it started, in ticks (1/60th of a second) .
* The optional *procMode* parameter can be a Boolean or longint type variable:  
   * If it is a Boolean type, it returns True if the process is visible and False if it is hidden.  
   * If it is a longint type, after the method is executed, it contains a bit field where the two first bits are set:  
         * bit 0 returns the visibility property: set to 1 if process is visible, and 0 if it is hidden  
         * bit 1 returns the preemptive mode property: set to 1 if process runs in preemptive mode, and 0 if it runs in cooperative mode. For more information, please refer to the *Preemptive 4D processes* section.
* *uniqueID*, if specified, returns the unique process number. Actually, each process has attributed a process number to it as well as a unique process number per session. The unique number allows you to differentiate between two processes or two process sessions. It corresponds to the process number having been started during 4D’s session.

##### 

* *origin*, if specified, returns a value that describes the origin of the process. 4D offers the following predefined constants (in the "*Process Type*" theme):  
    
| Constant                      | Type    | Value | Comment                         |  
| ----------------------------- | ------- | ----- | ------------------------------- |  
| Apple event manager           | Longint | \-7   |                                 |  
| Backup process                | Longint | \-19  |                                 |  
| Cache manager                 | Longint | \-4   |                                 |  
| Client manager process        | Longint | \-31  |                                 |  
| Compiler process              | Longint | \-29  |                                 |  
| Created from execution dialog | Longint | 3     |                                 |  
| Created from menu command     | Longint | 2     |                                 |  
| Design process                | Longint | \-2   |                                 |  
| Event manager                 | Longint | \-8   |                                 |  
| Execute on client process     | Longint | \-14  |                                 |  
| Execute on server process     | Longint | 1     |                                 |  
| External task                 | Longint | \-9   |                                 |  
| HTTP Log flusher              | Longint | \-58  |                                 |  
| Indexing process              | Longint | \-5   |                                 |  
| Internal 4D server process    | Longint | \-18  |                                 |  
| Internal timer process        | Longint | \-25  |                                 |  
| Log file process              | Longint | \-20  |                                 |  
| Main 4D process               | Longint | \-39  |                                 |  
| Main process                  | Longint | \-1   |                                 |  
| Method editor macro process   | Longint | \-17  |                                 |  
| Monitor process               | Longint | \-26  |                                 |  
| MSC process                   | Longint | \-22  |                                 |  
| None                          | Longint | 0     |                                 |  
| On exit process               | Longint | \-16  |                                 |  
| Other 4D process              | Longint | \-10  |                                 |  
| Other user process            | Longint | 4     |                                 |  
| Restore Process               | Longint | \-21  |                                 |  
| Serial Port Manager           | Longint | \-6   |                                 |  
| Server interface process      | Longint | \-15  |                                 |  
| SOAP process                  | Longint | \-33  |                                 |  
| SQL Method execution process  | Longint | \-24  |                                 |  
| Web process on 4D remote      | Longint | \-12  |                                 |  
| Web process with no context   | Longint | \-3   |                                 |  
| Web server process            | Longint | \-13  |                                 |  
| Web server spare process      | Longint | \-32  |                                 |  
| Worker process                | Longint | 5     | Worker process launched by user |  
    
    
**Note:** 4D’s internal processes return a negative value and the processes generated by the user return a positive value.

#### Example 1 

The following example returns the name, state, and time taken in the variables *vName*, *vState,* and *vTimeSpent* for the current process:

```4d
 var vName : Text //Initialize the variables
 var vState : Integer
 var vTimeSpent : Integer
 PROCESS PROPERTIES(Current process;vName;vState;vTimeSpent)
```

#### Example 2 

See example for [Semaphore](semaphore.md).

#### Example 3 

You want to find out the visibility and execution mode of the current process. You can write:

```4d
 var vName : Text
 var vState : Integer
 var vTime : Integer
 var vFlags : Integer
 var isVisible : Boolean
 var isPreemptive : Boolean
 PROCESS PROPERTIES(Current process;vName;vState;vTime;vFlags)
 isVisible:=vFlags?? 0 //true if visible
 isPreemptive:=vFlags?? 1 //true if preemptive
```

#### See also 

[Count tasks](count-tasks.md)  
[Get process activity](get-process-activity.md)  
*Preemptive 4D processes*  
[Process state](process-state.md)  