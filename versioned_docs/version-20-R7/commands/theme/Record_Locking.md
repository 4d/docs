---
id: Record_Locking
title: Record Locking
---
||
|---|
|[**LOAD RECORD** {( *aTable* )}](../../commands-legacy/load-record)<br/>**LOAD RECORD** loads the current record of *aTable*.|
|[**Locked** {( *aTable* )} : Boolean](../../commands-legacy/locked)<br/>**Locked** tests whether or not the current record of *aTable* is locked.|
|[**LOCKED BY** ( {*aTable* ;} *process* ; *4Duser* ; *sessionUser* ; *processName* )](../../commands-legacy/locked-by)<br/>LOCKED BY returns information about the user and process that have locked a record.|
|[**Locked records info** ( *aTable* ) : Object](../../commands-legacy/locked-records-info)<br/>The **Locked records info** command returns an [object](# "Data structured as a native 4D object") containing different information about the currently locked record(s) in *aTable*.|
|[**READ ONLY** {( aTable | * )}](../../commands-legacy/read-only)<br/>READ ONLY changes the state of *aTable* to read-only for the process in which it is called.|
|[**Read only state** {( *aTable* )} : Boolean](../../commands-legacy/read-only-state)<br/>This function tests whether or not the state of *aTable* is read-only for the process in which it is called.|
|[**READ WRITE** {( aTable | * )}](../../commands-legacy/read-write)<br/>READ WRITE changes the state of *aTable* to read/write for the process in which it is called.|
|[**UNLOAD RECORD** {( *aTable* )}](../../commands-legacy/unload-record)<br/>**UNLOAD RECORD** unloads the current record of *table*.|
