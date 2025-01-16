---
id: processes
title: Processes and Workers
---

Multi-tasking in 4D is the ability to have multiple operations that are executed simultaneously. These operations are called **processes**. Multiple processes are like multiple users on the same computer, each working on his or her own task. This essentially means that each method can be executed as a distinct database task.

If you write thread-safe code, you can create [**preemptive processes**](preemptive.md) that will be able to take advantage of multi-core computers in your compiled applications, for faster execution.


:::note

The 4D application creates processes for its own needs, for example the Main process to manage the display windows of the user interface, the Design process to manages the windows and editors of the Design environment (note that both are [worker processes](#worker-processes)), the Web Server process, the Cache Manager process, the Indexing process, or the On Event Manager process.

:::


## Creating and clearing processes

There are several ways to create a new process:

- Execute a method in the Design environment after checking the **New Process** check box in the "Execute Method" dialog box. The method chosen in the Execute Method dialog box is the process method.
- Use the [`New process`](https://doc.4d.com/4dv20/help/command/en/page317.html) command. The method passed as a parameter to the `New process` command is the process method.
- Use the [`Execute on server`](https://doc.4d.com/4dv20/help/command/en/page373.html) command in order to create a stored procedure on the server. The method passed as a parameter of the command is the process method.
- Use the [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1389.html) command. If the worker process does not already exist, it is created.

:::note

In Desktop applications, processes can be run by choosing menu commands. In the [Menu Bar editor](../Menus/creating.md), select the menu command and click the **Start a New Process** check box. The method associated with the menu command is the process method.

:::

A process can be cleared under the following conditions (the first two conditions are automatic):

- When the process method finishes executing
- When the user quits from the application
- If you stop the process procedurally or use the **Abort** button in the Debugger or in the Runtime Explorer
- If you call the [`KILL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1390.html) command (to delete a worker process only).

A process can create another process. Processes are not organized hierarchically—all processes are equal, regardless of the process from which they have been created. Once the “parent” process creates a “child” process, the child process will continue regardless of whether or not the parent process is still executing.


## Elements of a process 

Each process contains specific elements that it can handle independently from other processes. 

### Language elements

- Variables: Every process has its own [process variables](../Concepts/variables#process-variables). Process variables are recognized only within the domain of their native process.
- Process sets: Each process has its own process sets. `LockedSet` is a process set. Process sets are cleared as soon as the process method ends.
- [Error-handling method](../Concepts/error-handling#installing-an-error-handling-method): Each process can have its own error-handling method.
- [Debugger window](../Debugging/debugger#calling-the-debugger): Each process can have its own Debugger window.


### Interface elements 

Interface elements are used in [Desktop applications](../category/desktop-applications). They consist of the following:

- [Menu bar](../Menus/creating.md): Each process can have its own current menu bar. The menu bar of the frontmost process is the current menu bar for the application.
- One or more windows: Each process can have more than one window open simultaneously. On the other hand, some processes have no windows at all.
- One active (frontmost) window: Even though a process can have several windows open simultaneously, each process has only one active window. To have more than one active window, you must start more than one process.
- Input and Output forms: Default input and output forms can be set procedurally for each table in each process.

:::info

- Processes do not include menu bars by default which means that the standard **Edit** menu shortcuts (in particular, cut/copy/paste) are not available in process windows. When you call dialog boxes or 4D editors (form editor, query editor, Request, etc.) from a process, if you want for the user to be able to benefit from keyboard shortcuts like copy/paste, you need to make sure that the equivalent of an **Edit** menu is installed in the process.
- [Preemptive processes](preemptive.md) and processes that are executed on the server (stored procedures) must not contain elements of the interface.

:::

:::note 

Each process also has a separate current selection and current record per table. For more information about these concepts, please refer to [doc.4d.com](https://doc.4d.com/4Dv20/4D/20.1/Displaying-and-selecting-records.300-6602144.en.html). 

:::


## Global and local processes

Processes can be either global or local in scope. By default, all processes are global.

Global processes can perform any operation, including accessing and manipulating data. In most cases, you will want to use global processes. Local processes should be used only for operations that do not access data. For example, you can use a local process to run an event-handling method or to control interface elements such as floating windows.

You specify that a process is local in scope through its name. The name of local process must start with a dollar sign ($).

:::warning

If you attempt to access data from a local process, you access it though the Main process (process #1), risking conflicts with operations performed within that process.

:::

### 4D Server

Using local processes on the remote side for operations that do not require data access reserves more processing time for server-intensive tasks. When you create a process local to client (using `New process` for example), it only exists on the remote side.

When you create a global process on the client, a "twin" process is created on the server, thus consuming server resources, to handle data access and database context. However, for optimization reason, the twin process is created only if necessary, i.e. the first time the global process needs to access data.


## Worker processes

Using a Worker process is a simple and powerful way to exchange information between processes. This feature is based upon an asynchronous messaging system that allows processes and forms to be called and asked to execute methods with parameters in their own context.

A worker can be "hired" by any process (using the [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1389.html) command) to execute project methods with parameters in their own context, thus allowing access to shared information.

:::info

In Desktop applications, a project method can also be executed with parameters in the context of any form using the [`CALL FORM`](https://doc.4d.com/4dv20/help/command/en/page1391.html) command.

:::

This functionality addresses the following needs regarding 4D interprocess communication:

- Since they are supported by both cooperative and preemptive processes, they are the perfect solution for interprocess communication in [preemptive processes](preemptive.md) ([interprocess variables are deprecated](https://doc.4d.com/4Dv20/4D/20/Deprecated-or-Removed-Features.100-6259787.en.html#5868705) and not allowed in preemptive processes).
- They provide a simple alternative to semaphores, which can be cumbersome to set and complex to use 

:::note

Although they have been designed mainly for interprocess communication in the context of preemptive processes, `CALL WORKER` and `CALL FORM` can be used with cooperative processes. 

:::

### Using workers

A worker is used to ask a process to execute project methods. A worker consists of:

- a unique name (*warning: the name is case sensitive*), also used to name its associated process
- an associated process, that may or may not exist at a given moment
- a message box
- a startup method (optional)

You ask a worker to execute a project method by calling the `CALL WORKER` command. The worker and its message box are created at first use; its associated process is also automatically launched at first use. If the worker process dies thereafter, the message box remains open and any new message in the box will start a new worker process.

The following animation illustrates this sequence:

![](../assets/en/Develop/WorkerAnimation.gif)

Unlike a process created with the `New process` command, a worker process **remains alive after the execution of the process method ends**. This means that all method executions for the same worker will be run in the same process, which maintains all process state information (process variables, current record and current selection, etc.). Consequently, methods executed successively will access and thus share the same information, allowing communication between processes. The worker's message box handles successive calls asynchronously.

`CALL WORKER` encapsulates both the method name and command arguments in a message that is posted in the worker's message box. The worker process is then started, if it does not already exist, and asked to execute the message. This means that `CALL WORKER` will usually return before the method is actually executed (processing is asynchronous). For this reason, `CALL WORKER` does not return any value. If you need a worker to send information back to the process which called it (callback), you need to use `CALL WORKER` again to pass the information needed to the caller. Of course, in this case, the caller itself must be a worker.

It is not possible to use `CALL WORKER` to execute a method in a process created by the `New process` command. Only worker processes have a message box and can thus be called by `CALL WORKER`. Note that a process created by `New process` can call a worker, but cannot be called back.

Worker processes can be created on 4D Server through stored procedures: for example, you can use the `Execute on server` command to execute a method that calls the `CALL WORKER` command.

A worker process is closed by a call to the [`KILL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1390.html) command, which empties the worker's message box and asks the associated process to stop processing messages and to terminate its current execution as soon as the current task is finished.

The startup method of a worker is the method used to create the worker (at first use). If `CALL WORKER` is called with an empty *method* parameter, then the startup method is automatically reused as method to execute.

The main process created by 4D when opening a database for user and application modes is a worker process and can be called using `CALL WORKER`. Note that the name of the main process may vary depending on the 4D localization language, but it always has the process number 1; as a result, it's more convenient to designate it by process number instead of process name when calling `CALL WORKER`.

### Identifying Worker processes

All worker processes, except the main process, have the process type `Worker process` (5) returned by the [`PROCESS PROPERTIES`](https://doc.4d.com/4dv20/help/command/en/page336.html) command.

[Specific icons](../ServerWindow/processes#process-type) identify worker processes.

### See also

For more information, please see [this blog post](https://blog.4d.com/4d-summit-2016-laurent-esnault-presents-workers-and-ui-in-preemptive-mode/) about how to use workers.
