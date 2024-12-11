---
id: post-outside-call
title: POST OUTSIDE CALL
slug: /commands/post-outside-call
displayed_sidebar: docs
---

<!--REF #_command_.POST OUTSIDE CALL.Syntax-->**POST OUTSIDE CALL** ( *process* )<!-- END REF-->
<!--REF #_command_.POST OUTSIDE CALL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Process number |

<!-- END REF-->

#### Compatibility Note 

<!--REF #_command_.POST OUTSIDE CALL.Summary-->This command was named **CALL PROCESS** in previous 4D releases.<!-- END REF--> 

#### Description 

**POST OUTSIDE CALL** calls the form displayed in the frontmost window of *process*. 

**Important:** **POST OUTSIDE CALL** only works between processes running on the same machine.

If you call a process that does not exist, nothing happens.

If *process* (the target process) is not currently displaying a form, nothing happens. The form displayed in the target process receives an On Outside Call event. This event must be enabled for that form in the Design environment **Form Properties** window, and you must manage the event in the form method. If the event is not enabled or if it is not managed in the form method, nothing happens. 

**Note:** The On Outside Call event modifies the entry context of the receiving input form. In particular, if a field was being edited, the On Data Change event is generated.

The caller process (the process from which **POST OUTSIDE CALL** is executed) does not “wait”— **POST OUTSIDE CALL** has an immediate effect. If necessary, you must write a waiting loop for a reply from the called process, using interprocess variables or using process variables (reserved for this purpose) that you can read and write between the two processes (using [GET PROCESS VARIABLE](get-process-variable.md) and [SET PROCESS VARIABLE](set-process-variable.md)).

To communicate between processes that do not display forms, use the [GET PROCESS VARIABLE](get-process-variable.md) and [SET PROCESS VARIABLE](set-process-variable.md) commands.

**Tip:** **POST OUTSIDE CALL** accepts the alternate syntax **POST OUTSIDE CALL**(-1). In order not to slow down the execution of methods, 4D does not redraw interprocess variables each time they are modified. If you pass -1 instead of a process reference number in the *process* parameter, 4D does not post any outside call. Instead, it redraws all the interprocess variables currently displayed in all windows of any process running on the same machine.

#### Example 

See example for [Semaphore](semaphore.md).

#### See also 

[Form event code](../commands/form-event-code.md)  
[GET PROCESS VARIABLE](get-process-variable.md)  
[SET PROCESS VARIABLE](set-process-variable.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 329 |
| Thread safe | &check; |
| Forbidden on the server ||


