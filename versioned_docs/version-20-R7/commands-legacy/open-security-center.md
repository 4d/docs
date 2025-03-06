---
id: open-security-center
title: OPEN SECURITY CENTER
slug: /commands/open-security-center
displayed_sidebar: docs
---

<!--REF #_command_.OPEN SECURITY CENTER.Syntax-->**OPEN SECURITY CENTER**<!-- END REF-->
<!--REF #_command_.OPEN SECURITY CENTER.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.OPEN SECURITY CENTER.Summary-->The OPEN SECURITY CENTER command displays the Maintenance and Security Center (MSC) window.<!-- END REF--> For more information, please refer to the *Maintenance and security center* page. 

**Notes:** 

* This command works on the same principle as a call to [DIALOG](dialog.md) with the *\** parameter: the MSC is displayed in a window and the command immediately returns control to the 4D code. If the current process finishes, the window is automatically closed by simulating a [CANCEL](cancel.md). So you need to manage its display through the code of the process being executed.
* This command cannot be executed on a remote 4D application.

#### See also 

[VERIFY CURRENT DATA FILE](verify-current-data-file.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1018 |
| Thread safe | &cross; |


