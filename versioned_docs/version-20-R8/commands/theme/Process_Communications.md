---
id: Process_Communications
title: Process (Communications)
---
||
|---|
|[**CALL WORKER** ( *process* ; *formula* {; *param*}{; *param2* ; ... ; *paramN*} )](../../commands-legacy/call-worker)<br/>The **CALL WORKER** command creates or calls the worker process whose name or ID you passed in *process*, and requests the execution of the code designated by *formula* in its context with the optional *param* parameter(s).|
|[**CLEAR SEMAPHORE** ( *semaphore* )](../../commands-legacy/clear-semaphore)<br/>**CLEAR SEMAPHORE** erases *semaphore* previously set by the [Semaphore](semaphore.md) function.|
|[**GET PROCESS VARIABLE** ( *process* ; *srcVar* ; *dstVar* {; *srcVar2* ; *dstVar2* ; ... ; *srcVarN* ; *dstVarN*} )](../../commands-legacy/get-process-variable)<br/>The **GET PROCESS VARIABLE** command reads the *srcVar* process variables (*srvVar2*, etc.) from the source process whose number is passed in *process*, and returns their current values in the *dstVar* variables ( *dstVar2*, etc.) of the current process.|
|[**KILL WORKER** {( *process* )}](../../commands-legacy/kill-worker)<br/>The **KILL WORKER** command posts a message to the worker process whose name or number you passed in *process*, asking it to ignore any pending messages and to terminate its execution as soon as the current task ends.|
|[**New signal** { ( *description* : Text ) } : 4D.Signal](../../commands/new-signal)<br/>creates a `4D.Signal` object|
|[**Semaphore** ( *semaphore* {; *tickCount*} ) : Boolean](../../commands-legacy/semaphore)<br/>A semaphore is a flag shared among workstations or among processes on the same workstation.|
|[**SET PROCESS VARIABLE** ( *process* ; *dstVar* ; *expr* {; *dstVar2* ; *expr2* ; ... ; *dstVarN* ; *exprN*} )](../../commands-legacy/set-process-variable)<br/>The **SET PROCESS VARIABLE** command writes the *dstVar* process variables (*dstVar2*, etc.) of the destination process whose number is passed in *process* using the values passed in *expr1* (*expr2*, etc.).|
|[**Test semaphore** ( *semaphore* ) : Boolean](../../commands-legacy/test-semaphore)<br/>The **Test semaphore** command tests for the existence of a semaphore.|
|[**VARIABLE TO VARIABLE** ( *process* ; *dstVar* ; *srcVar* {; *dstVar2* ; *srcVar2* ; ... ; *dstVarN* ; *srcVarN*} )](../../commands-legacy/variable-to-variable)<br/>The **VARIABLE TO VARIABLE** command writes the *dstVar* process variables (*dstVar2*, etc.) of the destination process whose number is passed in *process* using the values of the variables *srcVar1* *srcVar2*, etc.|
