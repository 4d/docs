---
id: on-event-call
title: ON EVENT CALL
slug: /commands/on-event-call
displayed_sidebar: docs
---

<!--REF #_command_.ON EVENT CALL.Syntax-->**ON EVENT CALL** ( *eventMethod* {; *processName*} )<!-- END REF-->
<!--REF #_command_.ON EVENT CALL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| eventMethod | Text | &#8594;  | Event method to be invoked, or Empty string to stop intercepting events |
| processName | Text | &#8594;  | Process name |

<!-- END REF-->

#### Description 

<!--REF #_command_.ON EVENT CALL.Summary-->The **ON EVENT CALL** command installs the method, whose name you pass in *eventMethod*, as the method for catching (trapping) events.<!-- END REF--> This method is called the **event-handling method** or **event-catching method**. 

**Tip:** This command requires advanced programming knowledge. Usually, you do not need to use **ON EVENT CALL** for working with events. While using forms, 4D handles the events and sends them to the appropriate forms and objects. 

**Tip:** Commands such as [MOUSE POSITION](mouse-position.md), [Shift down](shift-down.md), etc., can be used for getting information about events. These commands can be called from within object methods to get the information you need about an event involving an object. Using them spares you the writing of an algorithm based on the **ON EVENT CALL** scheme.

The scope of this command is the current working session. By default, the method is run in a separate local process. You can have only one event-handling method at a time. To stop catching events with a method, call **ON EVENT CALL** again and pass an empty string in *eventMethod*.

Since the event-handling method is run in a separate process, it is constantly active, even if no 4D method is running. After installation, 4D calls the event-handling method each time an event occurs. An event can be a mouse click or a keystroke. 

The optional *processName* parameter names the process created by the **ON EVENT CALL** command. If *processName* is prefixed with a dollar sign (*$*), a local process is started, which is usually what you want. If you omit the *processName* parameter, 4D creates, by default, a local process named *$Event Manager*.

**WARNING:** Be very careful in what you do within an event-handling method. Do NOT call commands that generate events, otherwise it will be extremely difficult to get out of the event-handling method execution. The key combination **Ctrl+Shift+Backspace** (on Windows) or **Command-Shift-Control-Backspace** (on Macintosh) allows you to kill the Event Manager process. You may want to use this technique to recover an event-handling gone wrong (i.e., one that has bugs triggering events).

In the event-handling method, you can read the following system variables—MouseDown, KeyCode, Modifiers, MouseX, MouseY and MouseProc. Note that these variables are process variables. Their scope is therefore the event-handling process. Copy them into interprocess variables if you want their values available in another process.

* The MouseDown system variable is set to 1 if the event is a mouse click, and to 0 if it is not.
* The KeyCode system variable is set to the code for a keystroke. This variable may return an character code or a function key code. These codes are listed in the sections *Unicode Codes* and [EXPORT TEXT](export-text.md) (and its subsections) as well as in the section *Function Key Codes*. 4D provides predefined constants for the major ASCII Codes and for Function Keys. In the Explorer window, look for the themes of these constants.
* The Modifiers system variable contains the modifier value. It indicates whether a modifier key was down when the event occurred. The following keys can be detected:  

| **Platform** | **Modifiers**                                                    |  
| ------------ | ---------------------------------------------------------------- |  
| Windows      | Shift key, Caps Lock, Alt key, Ctrl key                          |  
| Macintosh    | Shift key, Caps Lock, Alt (or Option) key, Command key, Ctrl key |  
    
The modifier keys do not generate an event on their own; another key or the mouse button must also be pressed. The Modifiers variable is a Long Integer variable containing a bit field. 4D provides predefined constants specifying the bit position or bit mask for each modifier key. For example, to detect if the Shift key was pressed for the event, you can write either:  
```4d  
 If(Modifiers?? Shift key bit) //If the Shift key was down  
```  
    
or:  
```4d  
 If((Modifiers&Shift key mask)#0) //If the Shift key was down  
```  
    
You can use one of the following constants, depending on the modifier key to be tested and the platform, which are found in the *Events (Modifiers)* theme:  

| **Modifier**                        | **Constant**                           |  
| ----------------------------------- | -------------------------------------- |  
| Shift                               | Shift key bit / Shift key mask         |  
| Caps Lock                           | Caps lock key bit / Caps lock key mask |  
| Alt (also called Option under OS X) | Option key bit / Option key mask       |  
| Ctrl under Windows                  | Command key bit / Command key mask     |  
| Ctrl under OS X                     | Control key bit / Control key mask     |  
| Command under OS X                  | Command key bit / Command key mask     |  
| Right click                         | Control key bit / Control key mask     |
* The system variables MouseX and MouseY contain the horizontal and vertical positions of the mouse click, expressed in the local coordinate system of the window where the click occurred. The upper left corner of the window is position 0,0\. These are meaningful only when there is a mouse click.
* The MouseProc system variable contains the process reference number of the process in which the event occurred (mouse click).

**Important:** The system variables MouseDown, KeyCode, Modifiers, MouseX, MouseY, and MouseProc contain significant values only within an event-handling method installed with **ON EVENT CALL**.

#### Example 

This example will cancel printing if the user presses **Ctrl+period**. First, the event-handling method is installed. Then a message is displayed, announcing that the user can cancel printing. If the interprocess variable *◊vbWeStop* is set to True in the event-handling method, the user is alerted to the number of records that have already been printed. Then the event-handling method is deinstalled:

```4d
 PAGE SETUP
 If(OK=1)
    ◊vbWeStop:=False
    ON EVENT CALL("EVENT HANDLER") // Installs the event-handling method
    ALL RECORDS([People])
    MESSAGE("To interrupt printing press Ctrl+Period")
    $vlNbRecords:=Records in selection([People])
    For($vlRecord;1;$vlNbRecords)
       If(◊vbWeStop)
          ALERT("Printing cancelled at record "+String($vlRecord)+" of "+String($vlNbRecords))
          $vlRecord:=$vlNbRecords+1
       Else
          Print form([People];"Special Report")
       End if
    End for
    PAGE BREAK
    ON EVENT CALL("") // Deinstalls the event-handling method
 End if
```

If **Ctrl+period** has been pressed, the event-handling method sets *◊vbWeStop* to True:

```4d
  // EVENT HANDLER project method
 If((Modifiers?? Command key bit) & (KeyCode=Period))
    CONFIRM("Are you sure?")
    If(OK=1)
       ◊vbWeStop:=True
       FILTER EVENT // Do NOT forget this call; otherwise 4D will also get this event
    End if
 End if
```

Note that this example uses **ON EVENT CALL** because it performs a special printing report using the *\_o\_PAGE SETUP*, [Print form](print-form.md) and [PAGE BREAK](page-break.md) commands with a [ARRAY TO LIST](array-to-list.md) loop. 

If you print a report using [PRINT SELECTION](print-selection.md), you do NOT need to handle events that let the user interrupt the printing; this command does that for you.

#### See also 

[FILTER EVENT](filter-event.md)  
[MOUSE POSITION](mouse-position.md)  
[Method called on event](method-called-on-event.md)  
[Shift down](shift-down.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 190 |
| Thread safe | &check; |
| Forbidden on the server ||


