---
id: trigger-properties
title: TRIGGER PROPERTIES
slug: /commands/trigger-properties
displayed_sidebar: docs
---

<!--REF #_command_.TRIGGER PROPERTIES.Syntax-->**TRIGGER PROPERTIES** ( *triggerLevel* ; *dbEvent* ; *tableNum* ; *recordNum* )<!-- END REF-->
<!--REF #_command_.TRIGGER PROPERTIES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| triggerLevel | Integer | &#8594;  | Trigger execution cycle level |
| dbEvent | Integer | &#8592; | Database event |
| tableNum | Integer | &#8592; | Involved table number |
| recordNum | Integer | &#8592; | Involved record number |

<!-- END REF-->

#### Description 

<!--REF #_command_.TRIGGER PROPERTIES.Summary-->The **TRIGGER PROPERTIES** command returns information about the trigger execution level you pass in *triggerLevel*.<!-- END REF--> You use this command in conjunction with [Trigger level](trigger-level.md) to perform different actions depending on the cascading of trigger execution levels. For more information, see *Triggers*.

If you pass a non-existing trigger execution level, the command returns 0 (zero) in all parameters.

The nature of the database event for the trigger execution level is returned in *dbEvent*. The following predefined constants are provided in the *Trigger Events* theme:

| Constant                        | Type    | Value |
| ------------------------------- | ------- | ----- |
| On Deleting Record Event        | Integer | 3     |
| On Saving Existing Record Event | Integer | 2     |
| On Saving New Record Event      | Integer | 1     |

The table number and record number for the record involved by the database event for the trigger execution level are returned in *tableNum* and *recordNum*.

#### See also 

*About Record Numbers*  
[Trigger event](trigger-event.md)  
[Trigger level](trigger-level.md)  
*Triggers*  