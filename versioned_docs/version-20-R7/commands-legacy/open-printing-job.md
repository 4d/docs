---
id: open-printing-job
title: OPEN PRINTING JOB
slug: /commands/open-printing-job
displayed_sidebar: docs
---

<!--REF #_command_.OPEN PRINTING JOB.Syntax-->**OPEN PRINTING JOB**<!-- END REF-->
<!--REF #_command_.OPEN PRINTING JOB.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.OPEN PRINTING JOB.Summary-->The **OPEN PRINTING JOB** command opens a print job and stacks all the subsequent printing orders there until the [CLOSE PRINTING JOB](close-printing-job.md) command is called.<!-- END REF--> This command lets you control the print jobs and, more particularly, ensure that no other unexpected print job can be inserted into a printing sequence.

The **OPEN PRINTING JOB** command can be used with all the 4D printing commands, the quick report commands, and the printing commands of 4D Write Pro and 4D View Pro. 

The print job is local to the process, each process has its own printing settings (print options,current printer,etc.). Several print jobs can be open at the same time in 4D.

You must call the [CLOSE PRINTING JOB](close-printing-job.md) command to terminate the print job and send the print document to the printer. If you omit this command, the print document will remain in the stack.

**OPEN PRINTING JOB** uses the current print settings (default settings or set using the [SET PRINT OPTION](set-print-option.md) command). The commands that modify the print settings must be called before **OPEN PRINTING JOB**, otherwise an error is generated (exception: the Orientation option can be called by the [SET PRINT OPTION](set-print-option.md) command within a print job).

**Compatibility Note:** Starting with 4D v20 R4, printing jobs are non-blocking in new projects. For more information, please refer to the [Non-blocking printing option](https://developer.4d.com/docs/settings/compatibility/) documentation in the Compatibility settings.

#### System variables and sets 

The OK system variable is set to 1 if the print job has been successfully open. Otherwise, it is set to 0, for example in the followiing cases:

* the print job has been canceled by the user
* on Windows, the selected print preview format is not available

#### See also 

[CLOSE PRINTING JOB](close-printing-job.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 995 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


