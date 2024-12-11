---
id: idle
title: IDLE
slug: /commands/idle
displayed_sidebar: docs
---

<!--REF #_command_.IDLE.Syntax-->**IDLE**<!-- END REF-->
<!--REF #_command_.IDLE.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.IDLE.Summary-->The IDLE command is designed only for use with the compiler.<!-- END REF--> This command is only used in compiled databases in which user-defined methods are written so that no calls are made back to the 4D engine. For example, if a method has a For loop in which no 4D commands are executed, the loop could not be interrupted by a process installed with [ON EVENT CALL](on-event-call.md), nor could a user switch to another application. In this case, you should insert IDLE to allow 4D to trap events. If you do not want any interruptions, omit IDLE.

#### Example 

In the following example, the loop would never terminate in a compiled database without the call to IDLE:

```4d
  // Do Something Project Method
 ON EVENT CALL("EVENT METHOD")
 ◊vbWeStop:=False
 MESSAGE("Processing..."+Char(13)+"Type any key to interrupt...")
 Repeat
  // Do some processing that doesn’t involve a 4D command
    IDLE
 Until(◊vbWeStop)
 ON EVENT CALL("")
```

with:

```4d
  // EVENT METHOD Project Method
 If(Undefined(KeyCode))
    KeyCode:=0
 End if
 If(KeyCode#0)
    CONFIRM("Do you really want to stop this operation?")
    If(OK=1)
       ◊vbWeStop:=True
    End if
 End if
```

#### See also 

*Compiler Commands*  
[ON EVENT CALL](on-event-call.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 311 |
| Thread safe | &check; |
| Forbidden on the server ||


