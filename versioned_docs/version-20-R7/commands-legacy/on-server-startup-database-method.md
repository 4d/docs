---
id: on-server-startup-database-method
title: On Server Startup database method
slug: /commands/on-server-startup-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Server Startup database method.Syntax-->**On Server Startup database method**<!-- END REF-->
<!--REF #_command_.On Server Startup database method.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### 

<!--REF #_command_.On Server Startup database method.Summary-->The **On Server Startup database method** is called once on the server machine when you open a database with 4D Server.<!-- END REF--> The **On Server Startup database method** is NOT invoked by any 4D environment other than 4D Server.

The **On Server Startup database method** is the perfect place to:

* Initialize interprocess variables that you will use during the whole 4D Server session.
* Start *Stored Procedures* automatically when a database is opened.
* Load Preferences or Settings saved during the previous 4D Server session.
* Prevent the opening of the database if a condition is not met (i.e., missing system resources) by explicitly calling [QUIT 4D](quit-4d.md).
* Perform any other actions that you want performed automatically each time a database is opened.

To automatically execute code on a client machine when a remote 4D connects to the server, use the [On Startup database method](on-startup-database-method.md).

**Note:** The **On Server Startup database method** is executed automatically, which means that no remote 4D can connect until the method has finished executing.
