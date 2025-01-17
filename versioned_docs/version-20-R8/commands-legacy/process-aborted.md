---
id: process-aborted
title: Process aborted
slug: /commands/process-aborted
displayed_sidebar: docs
---

<!--REF #_command_.Process aborted.Syntax-->**Process aborted**  : Boolean<!-- END REF-->
<!--REF #_command_.Process aborted.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True = the process is about to be aborted, False = the process is not about to be aborted |

<!-- END REF-->

#### Description 

<!--REF #_command_.Process aborted.Summary-->The **Process aborted** command returns **True** if the process in which it is called is about to be interrupted unexpectedly, which means that the execution of the command was unable to reach its “normal” completion.<!-- END REF-->

This status will happen very rarely. Processes are usually stopped before the code can be notified the "process aborted" condition. This condition might only happen in compiled loops not executing any 4D command. For more infomation about how 4D handles the closure of processes, please refer to the [On Exit database method](on-exit-database-method.md) page.

#### See also 

[On Exit database method](on-exit-database-method.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 672 |
| Thread safe | &check; |


