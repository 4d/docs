---
id: processes
title: Processes
---

Multi-tasking in 4D is the ability to have multiple operations that are executed simultaneously. These operations are called processes.

Multiple processes are like multiple users on the same computer, each working on his or her own task. This essentially means that each method can be executed as a distinct database task.

The 4D application creates processes for its own needs, for example the Main process to manage the display windows of the user interface, the Design process to manages the windows and editors of the Design environment (note that both are [worker processes](#worker-processes)), the Web Server process, the Cache Manager process, the Indexing process, or the On Event Manager process.

## Basics

### Creating and Clearing Processes

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


### Elements of a Process 

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


### Global and Local Processes

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


4D allows you to create **preemptive user processes** in compiled mode.

When run in preemptive mode, a process is dedicated to a CPU. Process management is then delegated to the system, which can allocate each CPU separately on a multi-core machine. When run in cooperative mode, all processes are managed by the parent application thread and share the same CPU, even on a multi-core machine.

As a result, in preemptive mode, overall performance of the application is improved, especially on multi-core machines, since multiple processes (threads) can truly run simultaneously. However, actual gains depend on the operations being executed. In return, since each thread is independent from the others in preemptive mode, and not managed directly by the application, there are specific constraints applied to methods that you want to be compliant with preemptive use. Additionally, preemptive execution is only available in certain specific contexts.

Management of preemptive processes is covered in the Preemptive 4D processes section. 


Record Locking Between Processes  OutlineEditDeleteOrganizeSee the differencesAnchor
A record is locked when another process has successfully loaded the record for modification. A locked record can be loaded by another process, but cannot be modified. The record is unlocked only in the process in which the record is being modified. A table must be in read/write mode for a record to be loaded unlocked. For more information, refer to the Record Locking section.







## Enabling User settings

To enable user settings, you need to check the **Settings** > **Security** > **Enable User Settings** option:

![](../assets/en/settings/user-settings-enable.png)

When you check this option, the settings are separated into three dialog boxes: 

* **Structure Settings**
* **User Settings**
* **User Settings for Data file**

You can access these dialog boxes using the **Design > Settings...** menu or the **Settings** button in the toolbar:

![](../assets/en/settings/user-settings-dialog.png)

You can also access these dialog boxes using the [OPEN SETTINGS WINDOW](https://doc.4d.com/4dv19R/help/command/en/page903.html) command with the appropriate *settingsType* selector.

The Structure Settings dialog box is identical to the standard Settings, and provides access to all its properties (which can be overriden by user settings). 

## User Settings and User Settings for Data file

The **User Settings** and **User Settings for Data File** dialog boxes contain a selection of relevant properties that can be defined for all data files or a single data file:

![](../assets/en/settings/user-settings-2.png)

The following table lists the pages of settings found in the **User Settings** and **User Settings for Data File** dialog boxes and describes their main differences with respect to standard settings:

| **Page of Structure Settings** | **Page of User Settings** | **Page of User Settings for Data File**|
| --- | --- | --- |
| [General page](../settings/general.md) | N/a | N/a |
| [Interface page](../settings/interface.md) | Identical to standard settings | Identical to standard settings |
| [Compiler page](../settings/compiler.md) | N/a | N/a |
| [Database/Data storage page](../settings/database.md#data-storage) | N/a | N/a |
| [Database/Memory page](../settings/database.md#memory) | Identical to standard settings | Identical to standard settings |
| [Backup/Scheduler page](../settings/backup.md#scheduler) | N/a | Identical to standard settings |
| [Backup/Configuration page](../settings/backup.md#configuration) | N/a | Identical to standard settings |
| [Backup/Backup & Restore page](../settings/backup.md#backup-restore) | N/a | Identical to standard settings |
| [Client-server/Network options page](../settings/client-server.md#network-options) | Identical to standard settings | Identical to standard settings |
| [Client-server/IP configuration page](../settings/client-server.md#ip-configuration) | Identical to standard settings | Identical to standard settings |
| [Web/Configuration page](../settings/web.md#configuration) | Identical to standard settings | Identical to standard settings |
| [Web/Options (I) page](../settings/web.md#options) | Identical to standard settings | Identical to standard settings |
| [Web/Options (II) page](../settings/web.md#options-ii) | Identical to standard settings | Identical to standard settings |
| [Web/Log (type) page](../settings/web.md#log) | Identical to standard settings | Identical to standard settings |
| [Web/Log (backup) page](../settings/web.md#log) | Identical to standard settings | Identical to standard settings |
| [Web/Web Services page](../settings/web.md#web-services) | Method prefixing option not available | Method prefixing option not available |
| [SQL page](../settings/sql.md) | Identical to standard settings | Identical to standard settings |
| [PHP page](../settings/php.md) | Identical to standard settings | Identical to standard settings |
| [Security page](../settings/security.md) | N/a | N/a |
| [Compatibility page](../settings/compatibility.md) | N/a | N/a |

When you edit settings in this dialog box, they are automatically stored in the corresponding *settings.4DSettings* file (see below) or the *Backup.4DSettings* file (check the [Backup settings](../Backup/settings.md) page for more information).

## `SET DATABASE PARAMETER` and user settings  

Some of the user settings are also available through the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command. User settings are parameters with the **Kept between two sessions** property set to **Yes**.

When the **User Settings** feature is enabled, user settings edited by the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command are automatically saved in the user settings for the data file.

> `Table sequence number` is an exception; this setting value is always saved in the data file itself.

## settings.4DSettings files  

When you [check the **Enable User Settings** option](#enabling-user-settings), user settings files are automatically created. Their location depends on the type of user settings defined.

### User Settings  

The standard user settings file is automatically created and placed in a settings folder at the following location:

[`ProjectFolder/Settings/settings.4DSettings`](../Project/architecture.md#settings-user)

... where *ProjectFolder* is the name of the folder containing the project structure file.

In merged applications, the user settings file is placed at the following location:

* In single-user versions: ProjectFolder/Database/Settings/settings.4DSettings
* In client/server versions: ProjectFolder/Server Database/Settings/settings.4DSettings

### User Settings for Data File 

The user settings file linked to the data file is automatically created and placed in a settings folder at the following location:

[`Data/Settings/settings.4DSettings`](../Project/architecture.md#settings-user-data)

... where *Data* is the name of the folder containing the current data file of the application.

> When the data file is located at the same level as the project structure file, structure-based and data-based user settings files share the same location and file. The **User Settings for Data File...** menu command is not proposed.

:::note

Settings files are XML files; they can be read and modified using integrated 4D XML commands or using an XML editor. This means that you can manage settings by programming, particularly in the context of applications compiled and merged with 4D Volume Desktop. When you modify this file by programming, the changes are only taken into account the next time the database is opened. 

:::


## Priority of settings 

Settings can be stored at three levels. Each setting defined at one level overrides the same setting defined at a previous level, if any:

| **Priority level** | **Name** | **Location** | **Comments** |
|---|---|---|---|
| 3 (lowest) | Structure settings (or Settings when "User settings" feature not enabled) | ***settings.4DSettings*** file in the Sources folder (project databases) or in the Settings folder as the same level as the structure file (binary databases) | Unique location when user settings are not enabled. Applied to all copies of the application.  |
| 2 | User settings (all data files) | ***settings.4DSettings*** file in the Settings folder at the same level as the Project folder | Overrides Structure settings. Stored within the application package. |
| 1 (highest) | User settings (current data file) | ***settings.4DSettings*** file in the Settings folder at the same level as the data file | Overrides Structure settings and User settings. Applied only when the linked data file is used with the application. |

Keep in mind that user settings files only contain a subset of relevant settings, while the structure file contains all custom settings, including core settings.
