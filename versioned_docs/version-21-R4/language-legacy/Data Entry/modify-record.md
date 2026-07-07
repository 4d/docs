---
id: modify-record
title: MODIFY RECORD
slug: /commands/modify-record
displayed_sidebar: docs
---

<!--REF #_command_.MODIFY RECORD.Syntax-->**MODIFY RECORD** ( *aTable* : Table {; *} )<br/>**MODIFY RECORD** ( * )<!-- END REF-->
<!--REF #_command_.MODIFY RECORD.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table to use for data entry, or Default table, if omitted |
| * | Operator |  &#8594;  | Hide scroll bars |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.MODIFY RECORD.Summary-->The **MODIFY RECORD** command modifies the current record for the table *aTable* or for the default table if you omit the *aTable* parameter.<!-- END REF--> **MODIFY RECORD** loads the record, if it is not already loaded for the current process, and displays the current input form. If there is no current record, then **MODIFY RECORD** does nothing. **MODIFY RECORD** does not affect the current selection.

The form is displayed in the frontmost window of the process. The window has scroll bars and a size box. Specifying the optional *\** parameter causes the window to be drawn without scroll bars or a size box.

To use **MODIFY RECORD**, the current record must have read-write access and should not be locked.  
If the form contains buttons for moving within the selection of records, **MODIFY RECORD** lets the user click the buttons to modify records and move to other records.

The record is saved (accepted) if the user clicks an Accept button or presses the Enter key (numeric key pad), or if the [ACCEPT](../commands/accept) command is executed. 

The record is not saved (canceled) if the user clicks a Cancel button or presses the cancel key combination (Ctrl-Period on Windows, Command-Period on Macintosh), or if the [CANCEL](../commands/cancel) command is executed. Even when canceled, the record remains in memory and can be saved if [SAVE RECORD](../commands/save-record) is executed before the current record pointer is changed. 

After a call to **MODIFY RECORD**, OK is set to 1 if the record is accepted, to 0 if canceled.

**Note:** Even when canceled, the record remains in memory and can be saved if [SAVE RECORD](../commands/save-record) is executed before the current record pointer is changed. 

If you are using **MODIFY RECORD** and the user does not change any of the data in the record, the record is not considered to be modified, and accepting the record does not cause it to be saved again. Actions such as changing variables, checking check boxes, and selecting radio buttons do not qualify as modifications. Only changing data in a field, either through data entry or through a method, causes the record to be saved.

## Example 

See example for the [ADD RECORD](../commands/add-record) command.

## System variables and sets 

Accepting the record sets the OK system variable to 1; canceling it sets the OK system variable to 0\. The OK system variable is set only after the record is accepted or canceled.

## See also 

[ADD RECORD](../commands/add-record)  
[Locked](../commands/locked)  
[Modified record](../commands/modified-record)  
[READ WRITE](../commands/read-write)  
[UNLOAD RECORD](../commands/unload-record)  

## Properties

|  |  |
| --- | --- |
| Command number | 57 |
| Thread safe | no |
| Modifies variables | OK |
| Forbidden on the server ||


