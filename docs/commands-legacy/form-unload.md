---
id: form-unload
title: FORM UNLOAD
slug: /commands/form-unload
displayed_sidebar: docs
---

<!--REF #_command_.FORM UNLOAD.Syntax-->**FORM UNLOAD**<!-- END REF-->
<!--REF #_command_.FORM UNLOAD.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM UNLOAD.Summary-->The **FORM UNLOAD** command releases from memory the current form designated using the [FORM LOAD](../commands/form-load.md) command.<!-- END REF-->

Calling this command is necessary when you use the [FORM LOAD](../commands/form-load.md) command outside of the printing context (in the case of printing, the current form is automatically closed again when the [CLOSE PRINTING JOB](close-printing-job.md) command is called). 

#### See also 

[FORM LOAD](../commands/form-load.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1299 |
| Thread safe | &check; |
| Forbidden on the server ||


