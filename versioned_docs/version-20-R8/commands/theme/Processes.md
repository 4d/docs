---
id: Processes
title: Processes
---
||
|---|
|[**ABORT PROCESS BY ID** ( *uniqueID* )](../../commands-legacy/abort-process-by-id)<br/>The **ABORT PROCESS BY ID** command stops a specific process on the 4D Server.|
|[**Count tasks**  : Integer](../../commands-legacy/count-tasks)<br/>**Count tasks** returns the highest alive process number in the 4D single-user, 4D remote, or 4D Server (stored procedures) version.|
|[**Count user processes**  : Integer](../../commands-legacy/count-user-processes)<br/>Count user processes returns the current number of "live" processes in the 4D application whose type is different from -25 (Internal Timer Process), -31 (Client Manager Process) and -15 (Server Interface Process).|
|[**Count users**  : Integer](../../commands-legacy/count-users)<br/>The **Count users** command returns the number of users connected to the server.|
|[**Current process**  : Integer](../../commands-legacy/current-process)<br/>**Current process** returns the process reference number of the process within which this command is called.|
|[**Current process name**  : Text](../../commands-legacy/current-process-name)<br/>The **Current process name** command returns the name of the process within which this command is called.|
|[**DELAY PROCESS** ( *process* ; *duration* )](../../commands-legacy/delay-process)<br/>DELAY PROCESS delays the execution of a *process* for a number of ticks (1 tick = 1/60th of a second).|
|[**EXECUTE ON CLIENT** ( *clientName* ; *methodName* {; *param*}{; *param2* ; ... ; *paramN*} )](../../commands-legacy/execute-on-client)<br/>The **EXECUTE ON CLIENT** command forces the execution of the *methodName* method, with the parameters *param1.|
|[**Execute on server** ( *procedure* ; *stack* {; *name* {; *param* {; *param2* ; ... ; *paramN*}}}{; *} ) : Integer](../../commands-legacy/execute-on-server)<br/>The **Execute on server** command starts a new process on the Server machine (if it is called in Client/Server) or on the same machine (if it is called in single-user) and returns the process number for that process.|
|[**GET REGISTERED CLIENTS** ( *clientList* ; *methods* )](../../commands-legacy/get-registered-clients)<br/>The **GET REGISTERED CLIENTS** command fills two arrays:

* *clientLists* contains the list of clients who were “registered” by using the [REGISTER CLIENT](register-client.md) command.|
|[**New process** ( *method* ; *stack* {; *name* {; *param* {; *param2* ; ... ; *paramN*}}}{; *} ) : Integer](../../commands-legacy/new-process)<br/>The **New process** command starts a new process (on the same machine) and returns the process number for that process.|
|[**PAUSE PROCESS** ( *process* )](../../commands-legacy/pause-process)<br/>**PAUSE PROCESS** suspends the execution of *process* until it is reactivated by the [RESUME PROCESS](resume-process.md) command.|
|[**Process aborted**  : Boolean](../../commands-legacy/process-aborted)<br/>The **Process aborted** command returns **True** if the process in which it is called is about to be interrupted unexpectedly, which means that the execution of the command was unable to reach its “normal” completion.|
|[**Process activity** () : Object<br/>**Process activity** ( *options* ) : Object<br/>**Process activity** ( *sessionID* ) : Object<br/>**Process activity** ( *sessionID* ; *options* ) : Object](../../commands/process-activity)<br/>The **Process activity** command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.|
|[**Process info** ( *processNumber* : Integer ) : Object](../../commands/process-info)<br/>returns an object providing detailed information about process whose number you pass in *processNumber*|
|[**Process number** ( *name* {; *} ) : Integer<br/>**Process number** ( *id* {; *} ) : Integer](../../commands/process-number)<br/>`Process number` returns the number of the process whose *name* or *id* you pass in the first parameter|
|[**Process state** ( *process* ) : Integer](../../commands-legacy/process-state)<br/>The **Process state** command returns the state of the process whose number you pass in *process*.|
|[**REGISTER CLIENT** ( *clientName* {; *period*}{; *} )](../../commands-legacy/register-client)<br/>The **REGISTER CLIENT** command “registers” a 4D client station with the name specified in *clientName* on 4D Server, so as to allow other clients or eventually 4D Server (by using stored methods) to execute methods on it by using the [EXECUTE ON CLIENT](execute-on-client.md) command.|
|[**RESUME PROCESS** ( *process* )](../../commands-legacy/resume-process)<br/>**RESUME PROCESS** resumes a *process* whose execution has been paused or delayed.|
|[**Session** : 4D.Session](../../commands/session)<br/>returns the `Session` object corresponding to the current user session|
|[**Session info** ( *sessionId* : Integer ) : Object](../../commands/session-info)<br/>returns an object describing the session whose ID you pass in the *sessionID* parameter.|
|[**Session storage** ( *id* ) : Object](../../commands/session-storage)<br/>The **Session storage** command returns the storage object of the session whose unique identifier you passed in the *id* parameter.|
|[**UNREGISTER CLIENT**](../../commands-legacy/unregister-client)<br/>The **UNREGISTER CLIENT** command “unregisters” a 4D client station.|
