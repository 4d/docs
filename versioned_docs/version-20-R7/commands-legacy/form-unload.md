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

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.FORM UNLOAD.Summary-->The **FORM UNLOAD** command releases from memory the current form designated using the [FORM LOAD](form-load.md) command.<!-- END REF-->

Calling this command is necessary when you use the [FORM LOAD](form-load.md) command outside of the printing context (in the case of printing, the current form is automatically closed again when the [CLOSE PRINTING JOB](close-printing-job.md) command is called). 

#### See also 

[FORM LOAD](form-load.md)  