---
id: trigger-properties
title: TRIGGER PROPERTIES
displayed_sidebar: docs
---

<!--REF #_command_.TRIGGER PROPERTIES.Syntax-->**TRIGGER PROPERTIES** ( *triggerLevel* ; *dbEvent* ; *tableNum* ; *recordNum* )<!-- END REF-->
<!--REF #_command_.TRIGGER PROPERTIES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| triggerLevel | Longint | -> | Trigger execution cycle level |
| dbEvent | Longint | <-> | Database event |
| tableNum | Longint | <-> | Involved table number |
| recordNum | Longint | <-> | Involved record number |

<!-- END REF-->

#### Description 

<!--REF #_command_.TRIGGER PROPERTIES.Summary-->The **TRIGGER PROPERTIES** command returns information about the trigger execution level you pass in *triggerLevel*.<!-- END REF--> You use this command in conjunction with [Trigger level](trigger-level.md) to perform different actions depending on the cascading of trigger execution levels. For more information, see [Triggers](/4Dv20R6/4D/20-R6/Triggers.300-6958353.en.html).

If you pass a non-existing trigger execution level, the command returns 0 (zero) in all parameters.

The nature of the database event for the trigger execution level is returned in *dbEvent*. The following predefined constants are provided in the [Trigger Events](/4Dv20R6/4D/20-R6/Trigger-Events.302-6958517.en.html) theme:

| Constant                        | Type    | Value |
| ------------------------------- | ------- | ----- |
| On Deleting Record Event        | Longint | 3     |
| On Saving Existing Record Event | Longint | 2     |
| On Saving New Record Event      | Longint | 1     |

The table number and record number for the record involved by the database event for the trigger execution level are returned in *tableNum* and *recordNum*.

#### See also 

[About Record Numbers](../../4D/20-R6/About-Record-Numbers.300-6958029.en.html)  
[Trigger event](trigger-event.md)  
[Trigger level](trigger-level.md)  
[Triggers](../../4D/20-R6/Triggers.300-6958353.en.html)  