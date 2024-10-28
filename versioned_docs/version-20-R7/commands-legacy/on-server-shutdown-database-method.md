---
id: on-server-shutdown-database-method
title: On Server Shutdown database method
slug: /commands/on-server-shutdown-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Server Shutdown database method.Syntax-->**On Server Shutdown database method**<!-- END REF-->
<!--REF #_command_.On Server Shutdown database method.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### 

<!--REF #_command_.On Server Shutdown database method.Summary-->The On Server Shutdown database method is called once on the server machine when the current database is closed on 4D Server.<!-- END REF--> The On Server Shutdown database method is NOT invoked by any 4D environment other than 4D Server.

To close the current database on the server, you can select the **Close Database...**  menu command on the server. You can also choose the **Quit** command or call the [QUIT 4D](quit-4d.md) command within a stored procedure executed on the server.

When the exit from the database is initiated, 4D performs the following actions:

* If there is no On Server Shutdown database method, 4D Server aborts each running process one by one, without distinction.
* If there is an On Server Shutdown database method, 4D Server starts executing this method within a newly created local process. You can therefore use this database method to inform other processes, via interprocess communication, that they must stop executing. Note that 4D Server will eventually quit — the On Server Shutdown database method can perform all the cleanup or closing operations you want, but it cannot refuse the quit, and will at some point end.

The On Server Shutdown database method is the perfect place to:

* Stop store procedures automatically started when the database was opened.
* Save (locally, on disk) Preferences or Settings to be reused at the beginning of the next session in the *On Server Startup Database Method*.
* Perform any other actions that you want to be done automatically each time a database is exited.

**Warning:** If you use the On Server Shutdown database method to close stored procedures, keep in mind that the server quits once the On Server Shutdown database method (and not the stored procedures) is executed. If some stored procedures are still running at this point, they will be killed.  
Consequently, if you want to make sure that the stored procedures are fully executed before being killed by the server, the On Server Shutdown database method should indicate to the stored procedures that they must end their execution (for example, using an interprocess variable) and should allow them to close (through a x seconds loop or another interprocess variable).

If you want code to be executed automatically on a client machine when a remote 4D stops connecting to the server, use the [Semaphore](semaphore.md).
