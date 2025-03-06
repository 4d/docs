---
id: Data_Entry
title: Data Entry
---
||
|---|
|[**ACCEPT**](../../commands-legacy/accept)<br/>The **ACCEPT** command is used in form or object methods (or in subroutines) to:

* accept a new or modified record, for which data entry has been initiated using [ADD RECORD](add-record.md) or [MODIFY RECORD](modify-record.md).|
|[**ADD RECORD** ( {*aTable*}{;}{*} )](../../commands-legacy/add-record)<br/>*This command was implemented in 4D's early releases and is still useful for prototyping or basic developments.|
|[**CANCEL**](../../commands-legacy/cancel)<br/>The **CANCEL** command is used in form or object methods (or in a subroutine) to:

* cancel a new or modified record, for which data entry has been initiated using [ADD RECORD](add-record.md) or [MODIFY RECORD](modify-record.md).|
|[**DIALOG** ( {*aTable* ;} *form* {; *formData*}{; *} )](../../commands-legacy/dialog)<br/>The **DIALOG** command presents the *form* to the user, along with *formData* parameter(s) (optional).|
|[**Modified** ( *aField* ) : Boolean](../../commands-legacy/modified)<br/>**Modified** returns [True](true.md "True") if *field* has been programmatically assigned a value or has been edited during data entry.|
|[**MODIFY RECORD** ( {*aTable*}{;}{*} )](../../commands-legacy/modify-record)<br/>The **MODIFY RECORD** command modifies the current record for the table *aTable* or for the default table if you omit the *aTable* parameter.|
|[**Old** ( *aField* ) : Expression](../../commands-legacy/old)<br/>The **Old** command returns the value held in *aField* before the field was programmatically assigned a value or modified in data entry.|
|[**REJECT** {( *aField* )}](../../commands-legacy/reject)<br/>**REJECT** has two forms.|
