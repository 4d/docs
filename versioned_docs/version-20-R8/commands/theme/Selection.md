---
id: Selection
title: Selection
---
||
|---|
|[**ALL RECORDS** {( *aTable* )}](../../commands-legacy/all-records)<br/>ALL RECORDS selects all the records of *aTable* for the current process.|
|[**APPLY TO SELECTION** ( *aTable* ; *statement* )](../../commands-legacy/apply-to-selection)<br/>**APPLY TO SELECTION** applies *statement* to each record in the current selection of *aTable*.|
|[**Before selection** {( *aTable* )} : Boolean](../../commands-legacy/before-selection)<br/>**Before selection** returns TRUE when the current record pointer is before the first record of the current selection of *table*.|
|[**CREATE SELECTION FROM ARRAY** ( *aTable* ; *recordArray* {; *selectionName*} )](../../commands-legacy/create-selection-from-array)<br/>The **CREATE SELECTION FROM ARRAY** command creates the named selection *selectionName* from:

* either an array of absolute record numbers *recordArray* from *aTable*,
* or an array of Booleans.|
|[**DELETE SELECTION** {( *aTable* )}](../../commands-legacy/delete-selection)<br/>**DELETE SELECTION** deletes the current selection of records from *aTable*.|
|[**DISPLAY SELECTION** ( {*aTable*}{; *selectMode*}{; *enterList*}{; *}{; *} )](../../commands-legacy/display-selection)<br/>**DISPLAY SELECTION** displays the selection of *aTable*, using the output form.|
|[**Displayed line number**  : Integer](../../commands-legacy/displayed-line-number)<br/>The **Displayed line number** command only works with the On Display Detail form event.|
|[**End selection** {( *aTable* )} : Boolean](../../commands-legacy/end-selection)<br/>**End selection** returns TRUE when the current record pointer is beyond the last record of the current selection of *aTable*.|
|[**FIRST RECORD** {( *aTable* )}](../../commands-legacy/first-record)<br/>**FIRST RECORD** makes the first record of the current selection of *aTable* the current record, and loads the record from disk.|
|[**GET HIGHLIGHTED RECORDS** ( {*aTable* ;} *setName* )](../../commands-legacy/get-highlighted-records)<br/>The **GET HIGHLIGHTED RECORDS** command stores in the set designated by the *setName* parameter the highlighted records (i.e., the records highlighted by the user in the list form) in the *aTable* passed as parameter.|
|[**GOTO SELECTED RECORD** ( {*aTable* ;} *record* )](../../commands-legacy/goto-selected-record)<br/>**GOTO SELECTED RECORD** moves to the specified record in the current selection of *aTable* and makes that record the current record.|
|[**HIGHLIGHT RECORDS** ( {*aTable* }{;}{ *setName* {; *}} )](../../commands-legacy/highlight-records)<br/>The **HIGHLIGHT RECORDS** command highlights records in a list form.|
|[**LAST RECORD** {( *aTable* )}](../../commands-legacy/last-record)<br/>**LAST RECORD** makes the last record of the current selection of *aTable* the current record and loads the record from disk.|
|[**MODIFY SELECTION** ( {*aTable*}{; *selectMode*}{; *enterList*}{; *}{; *} )](../../commands-legacy/modify-selection)<br/>**MODIFY SELECTION** does almost the same thing as [DISPLAY SELECTION](display-selection.md).|
|[**NEXT RECORD** {( *aTable* )}](../../commands-legacy/next-record)<br/>**NEXT RECORD** moves the current record pointer to the next record in the current selection of *aTable* for the current process.|
|[**ONE RECORD SELECT** {( *aTable* )}](../../commands-legacy/one-record-select)<br/>**ONE RECORD SELECT** reduces the current selection of *aTable* to the current record.|
|[**PREVIOUS RECORD** {( *aTable* )}](../../commands-legacy/previous-record)<br/>**PREVIOUS RECORD** moves the current record pointer to the previous record in the current selection of *aTable* for the current process.|
|[**Records in selection** {( *aTable* )} : Integer](../../commands-legacy/records-in-selection)<br/>**Records in selection** returns the number of records in the current selection of *aTable*.|
|[**REDUCE SELECTION** ( {*aTable* ;} *number* )](../../commands-legacy/reduce-selection)<br/>**REDUCE SELECTION** creates a new selection of records for *aTable*.|
|[**SCAN INDEX** ( *aField* ; *number* {; > or <} )](../../commands-legacy/scan-index)<br/>**SCAN INDEX** returns a selection of *number* records from the table containing the *aField* field.|
|[**Selected record number** {( *aTable* )} : Integer](../../commands-legacy/selected-record-number)<br/>**Selected record number** returns the position of the current record within the current selection of *aTable*.|
|[**TRUNCATE TABLE** {( *aTable* )}](../../commands-legacy/truncate-table)<br/>The **TRUNCATE TABLE** command quickly deletes all the records of *aTable*.|
