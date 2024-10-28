---
id: is-record-loaded
title: Is record loaded
slug: /commands/is-record-loaded
displayed_sidebar: docs
---

<!--REF #_command_.Is record loaded.Syntax-->**Is record loaded** {( *aTable* )} -> Function result<!-- END REF-->
<!--REF #_command_.Is record loaded.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table of the record to examine or Default table if this parameter is omitted |
| Function result | Boolean | &#8592; | True if the record is loaded Otherwise False |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is record loaded.Summary-->The Is record loaded command returns True if *aTable*’s current record is loaded in the current process.<!-- END REF-->

**4D Server**: In principle, when tables are linked by automatic relations, the current records of related tables are loaded automatically (see *About Relations*). However, for optimization reasons, 4D Server only loads these records when necessary, for example when reading or assigning a field of the related record. As a result, in this context the **Is record loaded** command will return False in remote mode (it returns True in local mode). 

#### Example 

Instead of using the “Next record” or “Previous record” automatic actions, you can write object methods for these buttons to improve their operation. The “Next” button will display the beginning of the selection if the user is at the end of the selection and the “Previous” button will show the end of the selection when the user is at the beginning of the selection.

```4d
  // Object method of the “Previous” button (without an automatic action)
 If(FORM Event=On Clicked)
    PREVIOUS RECORD([Group])
    If(Not(Is record loaded([Group])))
       GOTO SELECTED RECORD([Group];Records in selection([Group]))
  //Go to the last record in the selection
    End if
 End if
 
  // Object method of the “Next” button (without an automatic action)
 If(FORM Event=On Clicked)
    NEXT RECORD([Group])
    If(Not(Is record loaded([Group])))
       GOTO SELECTED RECORD([Groups];1)
  //Go to the first record in the selection
    End if
 End if
```
