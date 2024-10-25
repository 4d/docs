---
id: on-exit-database-method
title: On Exit database method
slug: /commands/on-exit-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Exit database method.Syntax-->**On Exit database method**<!-- END REF-->
<!--REF #_command_.On Exit database method.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### 

<!--REF #_command_.On Exit database method.Summary-->The **On Exit database method** is called once when you quit a database.<!-- END REF-->

This method is used in the following 4D environments:

* 4D in local mode
* 4D in remote mode
* 4D application compiled and merged with 4D VolumeDesktop

**Note**: The **On Exit database method** is NOT invoked by 4D Server. You should use [On Server Shutdown database method](on-server-shutdown-database-method.md) in this context. 

The **On Exit database method** is automatically invoked by 4D; unlike project methods, you cannot call this database method yourself by programming. You can however execute it from the Method editor. You can also use subroutines.

A database can be exited if any of the following occur:

* The user selects the menu command **Quit** from the Design Environment **File** menu or from the Application environment (Quit standard action)
* A call to the [QUIT 4D](quit-4d.md) command is issued
* A 4D Plug-in issues a call to the [QUIT 4D](quit-4d.md) entry point

No matter how the exit from the database was initiated, 4D performs the following actions:

* If there is no **On Exit database method**, 4D aborts each running process one by one, without distinction. If the user is performing data entry, the records will be cancelled and not saved.
* If there is an **On Exit database method**, 4D starts executing this method within a newly created local process. Note that 4D will eventually quit—the **On Exit database method** can perform all the cleanup or closing operations you want, but it cannot refuse the quit, and will at some point end.

When 4D is about to quit, the program:

* asks running processes to abort their execution as soon as possible (taken into account only in processes executing 4D code)
* sets their ‘process aborted’ flag
* awakes processes that have been delayed by [DELAY PROCESS](delay-process.md) or other means.

4D continues iterating processes while any process is still alive, for a maximum duration of 13 seconds. To respond to a quit action, we recommend to set a flag (such as an entry in the [Storage](storage.md) object) in the On Exit database method or in your custom quit method. It could make sense to loop in that method (max 10 seconds) to give time to your running processes to respond and quit themselves properly. It is not recommended to wait longer than 10 seconds, to avoid that 4D kills the process or the operating system kills the whole application.

The **On Exit database method** is the perfect place to:

* Save (locally, on disk) Preferences or Settings to be reused at the beginning of the next session in the
* Perform any other actions that you want to be done automatically each time a database is exited

**Note:** Don’t forget that the **On Exit database method** is a local/client process, so it cannot access the data file. Thus, if the **On Exit database method** performs a query or a sort, a 4D Client that is about to quit will "freeze" and actually will not quit. If you need to access data when a client quits the application, create a new global process from within the **On Exit database method**, which will be able to access the data file. In this case, be sure that the new process will terminate correctly before the end of the **On Exit database method** execution (by using [Storage](storage.md) or a shared object, for example).

**Note:** In a client/server environment, the **On Exit database method** behaves differently depending on whether the user quits manually (through the **Quit** menu command or a call to the [QUIT 4D](quit-4d.md) command) or 4D Server is shutdown, which forces all clients to quit.   
When 4D Server shuts down and provides a cutoff time (*e.g.* 10 minutes), each connected client displays a warning message and if the user quits during the given time frame, the **On Exit database method** is executed normally. However, in other cases (*e.g.* the user does not respond in time, the server requests to quit immediately, or the client is manually disconnected by the Administrator), the **On Exit database method** is executed at the same time that the connection to the server is closed. As a result, the code in the **On Exit database method** can't launch another local or server process, and can't wait for other processes to be cancelled (nor can these processes continue to access the server). If it tries to do so, a network error is generated (such as 10001 or 10002) since the connection to the server is already closed.

#### Note 

The following example shows a typical case where you launch one or more background processes doing regular jobs, running endless, in the [On Startup database method](on-startup-database-method.md) (or in the [On Server Startup database method](on-server-startup-database-method.md)). A flag in the application's [Storage](storage.md) object is used to tell them to finish – and to check if they have finished.

* In the [On Startup database method](on-startup-database-method.md)

```4d
 Use(Storage)
    Storage.global:=New shared object("ExitNow";False)
 End use
 $p:=New process("Serverjob";0;"Background job#1")
 $p1:=New process("Check_Invoices";0;"Background job#2")
```

* Here is an example of such a background method:

```4d
  // do regular background jobs on the server
 While(Not(Bool(Storage.global.ExitNow)))
  // run accounting jobs, calculate data, etc
  // ...
    DELAY PROCESS(Current process;60*60) //sleep for one minute, then repeat loop
 End while
```

* In the **On Exit database method**:

```4d
 Use(Storage.global)
    Storage.global.ExitNow:=True //ask all background workers to quit
 End use
 
 $time:=Current time
 $finished:=False
 While((($time+10)>(Current time+0))&(Not($finished)))&NBSP; // max 10 seconds
    $list:=Get process activity(Processes only) // get list of all processes
    $sublist:=$list.processes.query("name='Background job@' and state >=0") //is there still a background job running?
    $finished:=($sublist.length=0)
    If($sublist.length>0)
       For each($job;$sublist)
          RESUME PROCESS($job.number) //make sure all processes are awake
       End for each
    End if
 End while
```

#### See also 

[On Startup database method](on-startup-database-method.md)  
[QUIT 4D](quit-4d.md)  