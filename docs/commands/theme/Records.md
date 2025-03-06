---
id: Records
title: Records
---
||
|---|
|[**CREATE RECORD** {( *aTable* )}](../../commands-legacy/create-record)<br/>**CREATE RECORD** creates a new empty record for *aTable*, but does not display the new record.|
|[**DELETE RECORD** {( *aTable* )}](../../commands-legacy/delete-record)<br/>**DELETE RECORD** deletes the current record of *aTable* in the process.|
|[**DISPLAY RECORD** {( *aTable* )}](../../commands-legacy/display-record)<br/>The **DISPLAY RECORD** command displays the current record of *aTable*, using the current input form.|
|[**DUPLICATE RECORD** {( *aTable* )}](../../commands-legacy/duplicate-record)<br/>**DUPLICATE RECORD** creates a new record for *aTable* that is a duplicate of the current record.|
|[**GOTO RECORD** ( {*aTable* ;} *record* )](../../commands-legacy/goto-record)<br/>**GOTO RECORD** selects the specified record of *aTable* as the current record.|
|[**Is new record** {( *aTable* )} : Boolean](../../commands-legacy/is-new-record)<br/>The **Is new record** command returns True when *aTable*’s current record is being created and has not yet been saved in the current process.|
|[**Is record loaded** {( *aTable* )} : Boolean](../../commands-legacy/is-record-loaded)<br/>The Is record loaded command returns True if *aTable*’s current record is loaded in the current process.|
|[**Modified record** {( *aTable* )} : Boolean](../../commands-legacy/modified-record)<br/>**Modified record** returns True if the current record of *aTable* has been modified but not saved; otherwise it returns False.|
|[**POP RECORD** {( *aTable* )}](../../commands-legacy/pop-record)<br/>**POP RECORD** pops a record belonging to *aTable* from the table’s record stack, and makes the record the current record.|
|[**PUSH RECORD** {( *aTable* )}](../../commands-legacy/push-record)<br/>**PUSH RECORD** pushes the current record of *aTable* (and its subrecords, if any) onto the table’s record stack.|
|[**Record number** {( *aTable* )} : Integer](../../commands-legacy/record-number)<br/>**Record number** returns the physical record number for the current record of *aTable*.|
|[**Records in table** {( *aTable* )} : Integer](../../commands-legacy/records-in-table)<br/>**Records in table** returns the total number of records in aTable.|
|[**SAVE RECORD** {( *aTable* )}](../../commands-legacy/save-record)<br/>**SAVE RECORD** saves the current record of *aTable* in the current process.|
|[**Sequence number** {( *aTable* )} : Integer](../../commands-legacy/sequence-number)<br/>**Sequence number** returns the next sequence number for *aTable*.|
