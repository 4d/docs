---
id: display-record
title: DISPLAY RECORD
slug: /commands/display-record
displayed_sidebar: docs
---

<!--REF #_command_.DISPLAY RECORD.Syntax-->**DISPLAY RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.DISPLAY RECORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table from which to display the current record, or Default table, if omitted |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.DISPLAY RECORD.Summary-->The **DISPLAY RECORD** command displays the current record of *aTable*, using the current input form.<!-- END REF--> The record is displayed only until an event redraws the window. Such an event might be the execution of an [ADD RECORD](add-record.md) command, returning to an input form, or returning to the menu bar. **DISPLAY RECORD** does nothing if there is no current record.

**DISPLAY RECORD** is often used to display custom progress messages. It can also be used to generate a free-running slide show.

If a form method exists, an On Load event will be generated.

**WARNING:** Do not call **DISPLAY RECORD** from within a Web connection process, because the command will be executed on the 4D Web server machine and not on the Web browser client machine.

#### Example 

The following example displays a series of records as a slide show:

```4d
 ALL RECORDS([Demo]) // Select all of the records
 FORM SET INPUT([Demo];"Display") // Set the form to use for display
 For($vlRecord;1;Records in selection([Demo])) // Loop through all of the records
    DISPLAY RECORD([Demo]) // Display a record
    DELAY PROCESS(Current process;180) // Pause for 3 seconds
    NEXT RECORD([Demo]) // Move to the next record
 End for
```

#### See also 

[MESSAGE](message.md)  