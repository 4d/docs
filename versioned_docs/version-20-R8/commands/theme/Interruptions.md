---
id: Interruptions
title: Interruptions
---
||
|---|
|[**ABORT**](../../commands-legacy/abort)<br/>The **ABORT** command is used from within an error-handling project method installed using the command [ON ERR CALL](on-err-call.md).|
|[**ASSERT** ( *boolExpression* {; *messageText*} )](../../commands-legacy/assert)<br/>The **ASSERT** command evaluates the *boolExpression* assertion passed in parameter and, if it returns false, stops the code execution with an error message.|
|[**Asserted** ( *boolExpression* {; *messageText*} ) : Boolean](../../commands-legacy/asserted)<br/>The **Asserted** command has an operation similar to that of the [ASSERT](assert.md) command, with one difference in that it returns a value which is the result of the evaluation of the *boolExpression* parameter.|
|[**FILTER EVENT**](../../commands-legacy/filter-event)<br/>You call the **FILTER EVENT** command from within an event-handling project method installed using the [ON EVENT CALL](on-event-call.md) command.|
|[**Get assert enabled** : Boolean](../../commands-legacy/get-assert-enabled)<br/>The **Get assert enabled** command returns True or False according to whether or not assertions are enabled in the current process.|
|[**Last errors**  : Collection](../../commands-legacy/last-errors)<br/>The **Last errors** command returns the current stack of errors of the 4D application as a collection of error objects, or **null** if no error occurred.|
|[**Method called on error** {( *scope* )} : Text](../../commands-legacy/method-called-on-error)<br/>The **Method called on error** command returns the name of the method installed by the [ON ERR CALL](on-err-call.md) command for the current process or the defined *scope*.|
|[**Method called on event**  : Text](../../commands-legacy/method-called-on-event)<br/>The **Method called on event** command returns the name of the method installed by the [ON EVENT CALL](on-event-call.md) command.|
|[**ON ERR CALL** ( *errorMethod* {; *scope*} )](../../commands-legacy/on-err-call)<br/>The **ON ERR CALL** command installs the project method, whose name you pass in *errorMethod*, as the method for catching (trapping) errors for the defined execution context in the current project.|
|[**ON EVENT CALL** ( *eventMethod* {; *processName*} )](../../commands-legacy/on-event-call)<br/>The **ON EVENT CALL** command installs the method, whose name you pass in *eventMethod*, as the method for catching (trapping) events.|
|[**SET ASSERT ENABLED** ( *assertions* {; *} )](../../commands-legacy/set-assert-enabled)<br/>The **SET ASSERT ENABLED** command can be used to disable or re-enable any assertions inserted into the 4D code of the application.|
|[**throw** ( *errorCode* {; *description*} ) <br/>
*throw* {( *errorObj* )}](../../commands-legacy/throw)<br/>The **throw** command creates an error that will be thrown either immediately or when the calling method returns to its caller (deferred mode).|
