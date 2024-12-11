---
id: trace
title: TRACE
slug: /commands/trace
displayed_sidebar: docs
---

<!--REF #_command_.TRACE.Syntax-->**TRACE**<!-- END REF-->
<!--REF #_command_.TRACE.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.TRACE.Summary-->You use **TRACE** to trace methods during the development of a database.<!-- END REF-->

The **TRACE** command turns on the 4D debugger for the current process. The *Debugger* window is displayed before the next line of code is executed, and continues to be displayed for each line of code that is executed. You can also turn on the debugger by pressing **Alt+Shift+right-click** (Windows) or **Control+Option+Command+click** (Macintosh) while code is executing.

The **TRACE** command is ignored when the executing code is compiled. 

**4D Server:** If you call **TRACE** from a project method executed within the context of a Stored Procedure, the debugger window appears on the Server machine.

**Tip:** Do not place **TRACE** calls when using a form whose On Activate and On Deactivate events have been enabled. Each time the debugger window appears, these events will be invoked; you will then loop infinitely between these events and the debugger window. If you end up in this situation, **Shift+click** on the **No Trace**  button of the debugger in order to get out of it. Any subsequent calls to **TRACE** within the process will be ignored.

#### Example 

The following code expects the process variable BUILD\_LANG to be equal to “US” or “FR”. If this is not the case, it calls the project method DEBUG:

```4d
  // ...
 Case of
    :(BUILD_LANG="US")
       vsBHCmdName:=[Commands]CM US Name
    :(BUILD_LANG="FR")
       vsBHCmdName:=[Commands]CM FR Name
    Else
       DEBUG("Unexpected BUILD_LANG value")
 End case
```

The DEBUG project method is listed here:

```4d
  // DEBUG Project Method
  // DEBUG (Text)
  // DEBUG (Optional Debug Information)
 
 var $1 : Text
 
 If(◊vbDebugOn) // Interprocess variable set in the On Startup Method
    If(Is compiled mode)
       If(Count parameters>=1)
          ALERT($1+Char(13)+"Call Designer at x911")
       End if
    Else
       TRACE
    End if
 End if
```


#### Properties
|  |  |
| --- | --- |
| Command number | 157 |
| Thread safe | &check; |


