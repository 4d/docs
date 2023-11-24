---
id: processes
title: Procesos y Workers
---

Multitarea en 4D es la posibilidad de ejecutar simultáneamente varias operaciones de bases de datos distintas. Estas operaciones son llamadas **procesos**. Múltiples procesos equivalen a tener múltiples usuarios trabajando en el mismo ordenador, cada uno trabajando en su propia tarea. Esto significa principalmente que un método puede ser ejecutado como una tarea distinta de base de datos.

Si escribe código hilo seguro, puede crear [**procesos apropiativos**](preemptive.md) que podrán aprovechar los ordenadores multi núcleo en sus aplicaciones compiladas, para una ejecución más rápida.

:::note

La aplicación 4D crea procesos para sus propias necesidades, por ejemplo el proceso Principal para gestionar las ventanas de visualización de la interfaz de usuario, el proceso de Diseño para gestionar las ventanas y editores del entorno de Diseño (note que ambos son [procesos worker](#worker-processes)), el proceso Servidor Web, el proceso Gestor de Caché, el proceso de Indexación, o el proceso On Event Manager.

:::

## Crear y borrar procesos

Hay varias formas de crear un nuevo proceso:

- Ejecute un método en el entorno Diseño después de seleccionar la casilla \*\*Nuevo proceso \*\* en la caja de diálogo "Ejecutar Método". El método elegido en la caja de diálogo Ejecutar método es el método proceso.
- Utilice el comando [`New process`](https://doc.4d.com/4dv20/help/command/en/page317.html). El método pasado como un parámetro al comando `New process` es el método proceso.
- Utilice el comando [`Execute on server`](https://doc.4d.com/4dv20/help/command/en/page373.html) para crear un procedimiento almacenado en el servidor. El método pasado como parámetro del comando es el método proceso.
- Utilice el comando [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1389.html). Si el proceso del worker no existe, se crea.

:::note

En las aplicaciones de escritorio, los procesos pueden ejecutarse seleccionando comandos de menú. En el [Editor de Barra de menú](../Menus/creating.md), seleccione el comando de menú y haga clic en la casilla de verificación **Iniciar un nuevo proceso**. El método asociado al comando de menú es el método de proceso.

:::

Un proceso puede borrarse en las siguientes condiciones (las dos primeras son automáticas):

- Cuando el método proceso termina de ejecutarse
- Cuando el usuario sale de la aplicación
- Si detienes el proceso de forma formal o utiliza el botón **Abortar** en el depurador o en el Explorador de Ejecución
- Si llama al comando [`KILL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1390.html) (sólo para borrar un proceso worker).

Un proceso puede crear otro proceso. Los procesos no están organizados jerárquicamente: todos los procesos son iguales, independientemente del proceso a partir del cual se hayan creado. Una vez que el proceso "padre" crea un proceso "hijo", el proceso hijo continuará independientemente de si el proceso padre sigue ejecutándose o no.

## Elementos de un proceso

Cada proceso contiene elementos específicos que puede manejar independientemente de otros procesos.

### Elementos del lenguaje

- Variables: cada proceso tiene sus propias [variables de proceso](../Concepts/variables#variables-de-proceso). Las variables proceso solo se reconocen dentro del dominio de su proceso nativo.
- Conjuntos de proceso: cada proceso tiene sus propios conjuntos de proceso. `LockedSet` es un conjunto de procesos. Los conjuntos proceso se borran en cuanto termina el método proceso.
- [Método de gestión de errores](../Concepts/error-handling#installing-an-error-handling-method): cada proceso puede tener su propio método de gestión de errores.
- [Ventana del depurador](../Debugging/debugger#calling-the-debugger): cada proceso puede tener su propia ventana Depurador.

### Elementos de la interfaz

Interface elements are used in [Desktop applications](../category/desktop-applications). Consisten en lo siguiente:

- [Menu bar](../Menus/creating.md): Each process can have its own current menu bar. The menu bar of the frontmost process is the current menu bar for the application.
- One or more windows: Each process can have more than one window open simultaneously. On the other hand, some processes have no windows at all.
- One active (frontmost) window: Even though a process can have several windows open simultaneously, each process has only one active window. To have more than one active window, you must start more than one process.
- Input and Output forms: Default input and output forms can be set procedurally for each table in each process.

:::info

- Processes do not include menu bars by default which means that the standard **Edit** menu shortcuts (in particular, cut/copy/paste) are not availalbe in process windows. When you call dialog boxes or 4D editors (form editor, query editor, Request, etc.) from a process, if you want for the user to be able to benefit from keyboard shortcuts like copy/paste, you need to make sure that the equivalent of an **Edit** menu is installed in the process.
- [Preemptive processes](preemptive.md) and processes that are executed on the server (stored procedures) must not contain elements of the interface.

:::

:::note

Each process also has a separate current selection and current record per table. For more information about these concepts, please refer to [doc.4d.com](https://doc.4d.com/4Dv20/4D/20.1/Displaying-and-selecting-records.300-6602144.en.html).

:::

La aplicación 4D crea procesos para sus propias necesidades, por ejemplo el proceso Principal para gestionar las ventanas de visualización de la interfaz de usuario, el proceso de Diseño para gestionar las ventanas y editores del entorno de Diseño (note que ambos son [procesos worker](#worker-processes)), el proceso Servidor Web, el proceso Gestor de Caché, el proceso de Indexación, o el proceso On Event Manager.

## Procesos globales y locales

Processes can be either global or local in scope. Por defecto, todos los procesos son globales.

Global processes can perform any operation, including accessing and manipulating data. In most cases, you will want to use global processes. Local processes should be used only for operations that do not access data. For example, you can use a local process to run an event-handling method or to control interface elements such as floating windows.

You specify that a process is local in scope through its name. The name of local process must start with a dollar sign ($).

:::warning

If you attempt to access data from a local process, you access it though the Main process (process #1), risking conflicts with operations performed within that process.

:::

### 4D Server

Using local processes on the remote side for operations that do not require data access reserves more processing time for server-intensive tasks. When you create a process local to client (using `New process` for example), it only exists on the remote side.

When you create a global process on the client, a "twin" process is created on the server, thus consuming server resources, to handle data access and database context. However, for optimization reason, the twin process is created only if necessary, i.e. the first time the global process needs to access data.

## Procesos worker

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

### Utilizar workers

A worker is used to ask a process to execute project methods. Un worker consiste de:

- a unique name (_warning: the name is case sensitive_), also used to name its associated process
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

The startup method of a worker is the method used to create the worker (at first use). If `CALL WORKER` is called with an empty _method_ parameter, then the startup method is automatically reused as method to execute.

The main process created by 4D when opening a database for user and application modes is a worker process and can be called using `CALL WORKER`. Note that the name of the main process may vary depending on the 4D localization language, but it always has the process number 1; as a result, it's more convenient to designate it by process number instead of process name when calling `CALL WORKER`.

### Identifying Worker processes

All worker processes, except the main process, have the process type `Worker process` (5) returned by the [`PROCESS PROPERTIES`](https://doc.4d.com/4dv20/help/command/en/page336.html) command.

[Specific icons](../ServerWindow/processes#process-type) identify worker processes.

### Ver también

For more information, please see [this blog post](https://blog.4d.com/4d-summit-2016-laurent-esnault-presents-workers-and-ui-in-preemptive-mode/) about how to use workers.
