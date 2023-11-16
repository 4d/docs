---
id: processes
title: Processes
---

Multi-tasking in 4D is the ability to have multiple operations that are executed simultaneously. These operations are called processes. Multiple processes are like multiple users on the same computer, each working on his or her own task. This essentially means that each method can be executed as a distinct database task.

If you write thread-safe code, you can create **preemptive processes** that will be able to take advantage of multi-core computers in your compiled applications, for faster execution.


## Basics

The 4D application creates processes for its own needs, for example the Main process to manage the display windows of the user interface, the Design process to manages the windows and editors of the Design environment (note that both are [worker processes](#worker-processes)), the Web Server process, the Cache Manager process, the Indexing process, or the On Event Manager process.

### Creating and clearing processes

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


### Elements of a process 

Each process contains specific elements that it can handle independently from other processes. 

#### Language elements

- Variables: Every process has its own [process variables](../Concepts/variables#process-variables). Process variables are recognized only within the domain of their native process.
- Process sets: Each process has its own process sets. `LockedSet` is a process set. Process sets are cleared as soon as the process method ends.
- [Error-handling method](../Concepts/error-handling#installing-an-error-handling-method): Each process can have its own error-handling method.
- [Debugger window](../Debugging/debugger#calling-the-debugger): Each process can have its own Debugger window.


#### Interface elements 

Interface elements are used in [Desktop applications](../category/desktop-applications). They consist of the following:

- [Menu bar](../Menus/creating.md): Each process can have its own current menu bar. The menu bar of the frontmost process is the current menu bar for the application.
- One or more windows: Each process can have more than one window open simultaneously. On the other hand, some processes have no windows at all.
- One active (frontmost) window: Even though a process can have several windows open simultaneously, each process has only one active window. To have more than one active window, you must start more than one process.

:::info

- Processes do not include menu bars by default which means that the standard **Edit** menu shortcuts (in particular, cut/copy/paste) are not availalbe in process windows. When you call dialog boxes or 4D editors (form editor, query editor, Request, etc.) from a process, if you want for the user to be able to benefit from keyboard shortcuts like copy/paste, you need to make sure that the equivalent of an **Edit** menu is installed in the process.
- [Preemptive processes](#preemptive-processes) and processes that are executed on the server (stored procedures) must not contain elements of the interface.
- Input and Output forms: Default input and output forms can be set procedurally for each table in each process.

:::

:::note 

Each process also has a separate current selection and current record per table. For more information about these concepts, please refer to [doc.4d.com](https://doc.4d.com/4Dv20/4D/20.1/Displaying-and-selecting-records.300-6602144.en.html). 

:::

The 4D application creates processes for its own needs, for example the Main process to manage the display windows of the user interface, the Design process to manages the windows and editors of the Design environment (note that both are [worker processes](#worker-processes)), the Web Server process, the Cache Manager process, the Indexing process, or the On Event Manager process.

### Global and local processes

Processes can be either global or local in scope. By default, all processes are global.

Global processes can perform any operation, including accessing and manipulating data. In most cases, you will want to use global processes. Local processes should be used only for operations that do not access data. For example, you can use a local process to run an event-handling method or to control interface elements such as floating windows.

You specify that a process is local in scope through its name. The name of local process must start with a dollar sign ($).

:::warning

If you attempt to access data from a local process, you access it though the Main process (process #1), risking conflicts with operations performed within that process.

:::

#### 4D Server

Using local processes on the remote side for operations that do not require data access reserves more processing time for server-intensive tasks. When you create a process local to client (using `New process` for example), it only exists on the remote side.

When you create a global process on the client, a "twin" process is created on the server, thus consuming server resources, to handle data access and database context. However, for optimization reason, the twin process is created only if necessary, i.e. the first time the global process needs to access data.


## Worker processes

Using a Worker process is a simple and powerful way to exchange information between processes. This feature is based upon an asynchronous messaging system that allows processes and forms to be called and asked to execute methods with parameters in their own context.

A worker can be "hired" by any process (using the [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1389.html) command) to execute project methods with parameters in their own context, thus allowing access to shared information.

:::info

In Desktop applications, a project method can also be executed with parameters in the context of any form using the [`CALL FORM`](https://doc.4d.com/4dv20/help/command/en/page1391.html) command.

:::

This functionality addresses the following needs regarding 4D interprocess communication:

- Since they are supported by both cooperative and preemptive processes, they are the perfect solution for interprocess communication in [preemptive processes](#preemptive-processes) ([interprocess variables are deprecated](https://doc.4d.com/4Dv20/4D/20/Deprecated-or-Removed-Features.100-6259787.en.html#5868705) and not allowed in preemptive processes).
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

#### Identifying Worker processes

All worker processes, except the main process, have the process type `Worker process` (5) returned by the [`PROCESS PROPERTIES`](https://doc.4d.com/4dv20/help/command/en/page336.html) command.

[Specific icons](../ServerWindow/processes#process-type) identify worker processes.

#### See also

For more information, please see [this blog post](https://blog.4d.com/4d-summit-2016-laurent-esnault-presents-workers-and-ui-in-preemptive-mode/) about how to use workers.



## Preemptive processes

The compiled 4D code can be executed in **preemptive processes**. Thanks to this feature, your 4D compiled applications can take full advantage of multi-core computers so that their execution is faster and they can support more connected users. 

### What is a preemptive process? 

When run in *preemptive* mode, a process is dedicated to a CPU. Process management is then delegated to the system, which can allocate each CPU separately on a multi-core machine.

When run in *cooperative* mode, all processes are managed by the parent application thread and share the same CPU, even on a multi-core machine. 

As a result, in preemptive mode, overall performance of the application is improved, especially on multi-core machines, since multiple processes (threads) can truly run simultaneously. However, actual gains depend on the operations being executed. In return, since each thread is independent from the others in preemptive mode, and not managed directly by the application, there are specific constraints applied to code that you want to be compliant with preemptive use. Additionally, preemptive execution is only available in certain specific contexts.

### Availability of preemptive mode   

The use of preemptive mode is supported in the following execution contexts:

|Context|Preemptive execution|
|---|----|
|4D Server|yes|
|4D remote|yes, with [ServerNet or QUIC](../settings/client-server#network-layer)|
|4D single-user|yes|
|Compiled mode|yes|
|Interpreted mode|no|

If the execution context supports preemptive mode and if the method is "thread-safe", a new 4D process launched using the `New process` or `CALL WORKER` commands, or the "Run method" menu item, will be executed in a preemptive thread.

Otherwise, if you call `New process` or `CALL WORKER` from an execution context that is not supported (i.e. from interpreted mode), the process is always cooperative.


### Thread-safe vs thread-unsafe code

4D code can only be run in a preemptive thread when certain specific conditions are met. Each part of the code being executed (commands, methods, variables, functions, etc.) must be compliant with preemptive use. Elements that can be run in preemptive threads are called thread-safe and those that cannot be run in preemptive threads are called thread-unsafe.

:::note

Since a thread is handled independently starting from the parent process method, the entire call chain must not include any thread-unsafe code; otherwise, preemptive execution will not be possible. This point is discussed [in this paragraph].

:::

The "thread safety" property of each element depends on the element itself:

- 4D commands: thread safety is an internal property. In the [4D Language Reference manual](https://doc.4d.com/4Dv20/4D/20.1/4D-Language-Reference.100-6479538.en.html), thread-safe commands are identified by the ![](../assets/en/Develop/thread-safe.png) icon. You can also use the [`Command name`](https://doc.4d.com/4dv20/help/command/en/page538.html) command to know if a command is thread-safe. A large part of 4D commands can run in preemptive mode.
- Project methods: conditions for being thread-safe are listed in [this paragraph].

Basically, code to be run in preemptive threads cannot call parts with external interactions, such as plug-in code or interprocess variables. Accessing data, however, is allowed since the 4D data server and ORDA support preemptive execution.


### Declaring a preemptive method

By default, 4D executes all the project methods of your application in cooperative mode. If you want to benefit from the preemptive mode feature, the first step consists of explicitly declaring all methods that you want to be started in preemptive mode whenever possible -- that is, methods that you consider capable of being run in a preemptive process. The compiler will [check that these methods are actually thread-safe] at compile time. You can also disallow preemptive mode for some methods, if necessary.

Keep in mind that declaring a method "capable" of preemptive use makes it eligible for preemptive execution but does not guarantee that it will actually be executed in preemptive mode at runtime. Starting a process in preemptive mode results from an [evaluation performed by 4D] regarding the properties of all the methods in the call chain of the process.

To declare your method eligible for use in preemptive mode, you need to use the "Execution mode" declaration option in the Method Properties dialog box:

![](../assets/en/Develop/preemptif.png)

The following options are provided:

- **Can be run in preemptive processes**: By checking this option, you declare that the method is able of being run in a preemptive process and therefore should be run in preemptive mode whenever possible. The "preemptive" property of the method is set to "capable".

	When this option is checked, the 4D compiler will verify that the method is actually capable and will return errors if this is not the case -- for example, if it directly or indirectly calls commands or methods that cannot be run in preemptive mode (the entire call chain is parsed but errors are only reported to the first sublevel). You can then edit the method so that it becomes thread-safe, or select another option.

	If the method's preemptive capability is approved, it is tagged "thread-safe" internally and will be executed in preemptive mode whenever the required conditions are met. This property defines its eligibility for preemptive mode but does not guarantee that the method will actually be run in preemptive mode, since this execution mode requires a [specific context](#when-is-a-process-started-preemptively).

- **Cannot be run in preemptive processes**: By checking this option, you declare that the method must never be run in preemptive mode, and therefore must always be run in cooperative mode, as in previous 4D versions. The "preemptive" property of the method is set to "incapable".

	When this option is checked, the 4D compiler will not verify the ability of the method to run preemptively; it is automatically tagged "thread-unsafe" internally (even if it is theoretically capable). When called at runtime, this method will "contaminate" any other methods in the same thread, thus forcing this thread to be executed in cooperative mode, even if the other methods are thread-safe.

- **Indifferent**(default): By checking this option, you declare that you do not want to handle the preemptive property for the method. The "preemptive" property of the method is set to "indifferent".

	When this option is checked, the 4D compiler will evaluate the preemptive capability of the method and will tag it internally as "thread-safe" or "thread-unsafe". No error related to preemptive execution is returned. If the method is evaluated as thread-safe, at runtime it will not prevent preemptive thread execution when called in a preemptive context. Conversely, if the method is evaluated "thread-unsafe", at runtime it will prevent any preemptive thread execution when called.

Note that with this option, whatever the internal thread safety evaluation, the method will always be executed in cooperative mode when called directly by 4D as the first parent method (for example through the `New process` command). If tagged "thread-safe" internally, it is only taken into account when called from other methods inside a call chain.

:::note Particular case

If the method has also the [**Shared by components and host database**](../Project/code-overview.md#shared-by-components-and-host-database) property, setting the **Indifferent** option will automatically tag the method as thread-unsafe. If you want a shared component method to be thread-safe, you must explicitely set it to **Can be run in preemptive processes**.

::: 

### When is a process started preemptively?

:::info Reminder

Preemptive execution is only available in compiled mode.

:::

In compiled mode, when starting a process created by either `New process` or `CALL WORKER` commands, 4D reads the preemptive property of the process method (also named *parent* method) and executes the process in preemptive or cooperative mode, depending on this property:

- If the process method is thread-safe (validated during compilation), the process is executed in a preemptive thread.
- If the process method is thread-unsafe, the process is run in a cooperative thread.
- If the preemptive property of the process method was set to "indifferent", by compatibility the process is run in a cooperative thread (even if the method is actually capable of preemptive use). Note however that this compatibility feature is only applied when the method is used as a process method: a method declared "indifferent" but internally tagged "thread-safe" by the compiler can be called preemptively by another method (see below).

The actual thread-safe property depends on the call chain. If a method with the property declared as "capable" calls a thread-unsafe method at either of its sublevels, a compilation error will be returned: if a single method in the entire call chain is thread-unsafe, it will "contaminate" all other methods and preemptive execution will be rejected by the compiler. A preemptive thread can be created only when the entire chain is thread-safe and the process method has been declared "Can be run in preemptive process".
On the other hand, the same thread-safe method may be executed in a preemptive thread when it is in one call chain, and in a cooperative thread when it is in another call chain.

For example, consider the following project methods:

```4d
  //MyDialog project method
  //contains interface calls: will be internally thread unsafe
 $win:=Open form window("tools";Palette form window)
 DIALOG("tools")
```

```4d  
  //MyComp project method
  //contains simple computing: will be internally thread safe
 #DECLARE($value : Integer) -> $result : Integer
 $result:=$value*2
```

```4d
  //CallDial project method
 var $vName : Text
 MyDialog
```

```4d
  //CallComp project method
 var $vAge : Integer
 MyComp($vAge)
```

Executing a method in preemptive mode will depend on its "execution" property and the call chain. The following table illustrates these various situations:

![](../assets/en/Develop/legend.png)


|Declaration and call chain|Compilation|Resulting thread safety|Execution	|Comment|
|---|----|----|---|---|
|![](../assets/en/Develop/scenar1.png)|	OK|![](../assets/en/Develop/scenar2.png)|Preemptive|CallComp is the parent method, declared "capable" of preemptive use; since MyComp is thread-safe internally, CallComp is thread-safe and the process is preemptive
|![](../assets/en/Develop/scenar3.png)|Error|![](../assets/en/Develop/scenar4.png)|Execution is impossible|CallDial is the parent method, declared "capable"; MyDialog is "indifferent". However, since MyDialog is thread-unsafe internally, it contaminates the call chain. The compilation fails because of a conflict between the declaration of CallDial and its actual capability. The solution is either to modify MyDialog so that it becomes thread-safe so that execution is preemptive, or to change the declaration of CallDial 's property in order to run as cooperative
|![](../assets/en/Develop/scenar5.png)|OK|![](../assets/en/Develop/scenar6.png)|Cooperative|Since CallDial is declared "incapable" of preemptive use, compilation is thread-unsafe internally; thus execution will always be cooperative, regardless of the status of MyDialog
|![](../assets/en/Develop/scenar7.png)|OK|![](../assets/en/Develop/scenar8.png)|Cooperative|Since CallComp is the parent method with property "Indifferent", then the process is cooperative even if the entire chain is thread-safe.
|![](../assets/en/Develop/scenar9.png)|OK|![](../assets/en/Develop/scenar10.png)|Cooperative|Since CallDial is the parent method (property was "Indifferent"), then the process is cooperative and compilation is successful|


#### How to find out the actual execution mode 

4D allows you to identify the execution mode of processes in compiled mode:

- The [`PROCESS PROPERTIES`](https://doc.4d.com/4dv20/help/command/en/page336.html) command allows you to find out whether a process is run in preemptive or cooperative mode.
- Both the Runtime Explorer and the [4D Server administration window](../ServerWindow/processes.md#process-type) display specific icons for preemptive processes.