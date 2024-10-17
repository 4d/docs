---
id: quit-4d
title: QUIT 4D
slug: /commands/quit-4d
displayed_sidebar: docs
---

<!--REF #_command_.QUIT 4D.Syntax-->**QUIT 4D** {( *time* )}<!-- END REF-->
<!--REF #_command_.QUIT 4D.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| time | Integer | &#8594;  | Time (sec) before quitting the server |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUIT 4D.Summary-->The QUIT 4D command exits the current 4D application and returns to the Desktop.<!-- END REF--> 

The command processing is different whether it is executed on 4D (local or remote mode) or on 4D Server. 

##### With 4D local mode and remote mode 

After you call QUIT 4D, the current process stops its execution, then 4D acts as follows:

* If there is an [On Exit database method](on-exit-database-method.md), 4D starts executing this method within a newly created local process. For example, you can use this database method to inform other processes, via interprocess communication, that they must close (data entry) or stop the execution of operations started by the [On Startup database method](on-startup-database-method.md) (connection from 4D to another database server). Note that 4D will eventually quit; the [On Exit database method](on-exit-database-method.md) can perform all the cleanup or closing operations you wish, but cannot refuse the quit and will at some point end.
* If there is no [On Exit database method](on-exit-database-method.md), 4D aborts each running process one by one, without distinction.

If the user is performing data entry, the records will be cancelled and not saved.

If you want to let the user save data entry modifications made in the current open windows, you can use interprocess communication to signal all the other user processes that the database is going to be exited. To do so, you can adopt two strategies:

* Perform these operations from within the current process before calling QUIT 4D
* Handle these operations from within the [On Exit database method](on-exit-database-method.md).

A third strategy is also possible. Before calling QUIT 4D, you check whether a window will need validation; if that is the case, you ask the user to validate or cancel these windows and then to choose Quit again. However, from a user interface standpoint, the first two strategies are preferable.

**Note:** The *time* parameter cannot be used with 4D in local or remote mode.

##### With 4D Server (Stored procedure) 

The QUIT 4D command can be executed on the server machine, in a stored procedure. In this case, it accepts the *time* optional parameter.  
  
The *time* parameter allows setting a timeout to the 4D Server before the application actually quits, allowing client machines the time to disconnect. You must pass a value in seconds in *time*. This parameter is only taken into consideration during an execution on the server machine. With 4D in local or remote mode, it is ignored.  
  
If you do not pass a parameter for *time*, 4D Server will wait until all client machines are disconnected before quitting. 

Unlike 4D, the processing of QUIT 4D by 4D Server is asynchronous: the method where the command is called is not interrupted after is has been executed.

If there is an *On Server Shutdown Database Method*, it is executed after the delay set by the *time* parameter, or after all clients have disconnected, depending on your parameters.

The action of the QUIT 4D command used in a stored procedure is the same as the one for the Quit command of the 4D Server File menu: it causes a dialog box to appear on each client machine indicating that the server is about to quit.

#### Example 

The project method listed here is associated with the Quit or Exit menu item in the File menu.

```4d
  // M_FILE_QUIT Project Method
 
 CONFIRM("Are you sure that you want to quit?")
 If(OK=1)
    QUIT 4D
 End if
```

#### See also 

[On Exit database method](on-exit-database-method.md)  