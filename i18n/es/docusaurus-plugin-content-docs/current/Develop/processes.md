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

Los elementos de interfaz se utilizan en [Aplicaciones de escritorio](../category/desktop-applications). Consisten en lo siguiente:

- [Barra de menús](../Menus/creating.md): cada proceso puede tener su propia barra de menús actual. La barra de menús del proceso del primer plano es la barra de menús actual de la aplicación.
- Una o más ventanas: cada proceso puede tener varias ventanas abiertas simultáneamente. Por el contrario, algunos procesos no tienen ventanas.
- Una ventana activa (primer plano): aunque un proceso puede tener varias ventanas abiertas simultáneamente, cada proceso tiene sólo una ventana activa. Para tener más de una ventana activa, debe iniciar más de un proceso.
- Formularios de entrada y salida: los formularios de entrada y salida predeterminados pueden definirse por procedimiento para cada tabla de cada proceso.

:::info

- Los procesos no incluyen barras de menú por defecto, lo que significa que los atajos de menú estándar de **Edición** (en particular, cortar/copiar/pegar) no están disponibles en las ventanas de proceso. Cuando se llama a los diálogos o a los editores 4D (editor de formularios, editor de búsquedas, Request, etc.) desde un proceso, si desea que el usuario pueda beneficiarse de atajos de teclado como copiar/pegar, debe asegurarse de que el equivalente a un menú **Edición** esté instalado en el proceso.
- [Procesos apropiativos](preemptive.md) y los procesos que se ejecutan en el servidor (procedimientos almacenados) no deben contener elementos de la interfaz.

:::

:::note

Cada proceso tiene también una selección actual y un registro actual por tabla. Para más información sobre estos conceptos, consulte [doc.4d.com](https://doc.4d.com/4Dv20/4D/20.1/Displaying-and-selecting-records.300-6602144.en.html).

:::

La aplicación 4D crea procesos para sus propias necesidades, por ejemplo el proceso Principal para gestionar las ventanas de visualización de la interfaz de usuario, el proceso de Diseño para gestionar las ventanas y editores del entorno de Diseño (note que ambos son [procesos worker](#worker-processes)), el proceso Servidor Web, el proceso Gestor de Caché, el proceso de Indexación, o el proceso On Event Manager.

## Procesos globales y locales

El alcance de los procesos puede ser local o global. Por defecto, todos los procesos son globales.

Los procesos globales pueden realizar cualquier operación, incluido el acceso y la manipulación de datos. En la mayoría de los casos, querrá utilizar procesos globales. Los procesos locales sólo deben utilizarse para operaciones que no accedan a datos. Por ejemplo, puede utilizar un proceso local para ejecutar un método de gestión de eventos o para controlar elementos de la interfaz como ventanas flotantes.

Especifica que un proceso es local en alcance a través de su nombre. El nombre del proceso local debe comenzar con un signo de dólar ($).

:::warning

Si intenta acceder a los datos desde un proceso local, accede a los datos por medio del proceso principal (proceso #1) y toma el riesgo de entrar en conflicto con las operaciones efectuadas en ese proceso.

:::

### 4D Server

El uso de procesos locales del lado del Cliente para operaciones que no requieran acceso a datos, reserva más tiempo de procesamiento para tareas que requieren el servidor intensivamente. Cuando crea un proceso local para el cliente (utilizando por ejemplo New process), solo existe del lado del cliente.

Cuando crea un proceso global, se crea un proceso "doble" en el servidor, que consume recursos del servidor, para manejar el acceso a los datos y el contexto de la base de datos. Sin embargo, por razones de optimización, el proceso doble se crea solo si es necesario, es decir, la primera vez que el proceso global necesita acceder a los datos.

## Procesos worker

Un proceso Worker es una forma sencilla y poderosa de intercambiar información entre procesos. Esta funcionalidad se basa en un sistema de mensajería asíncrono que permite a los procesos y formularios ser llamados y se les pide ejecutar métodos con parámetros en su propio contexto.

Un worker puede ser "contratado" por cualquier proceso (utilizando el comando [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/es/page1389.html)) para ejecutar métodos de proyecto con parámetros en su propio contexto, permitiendo así el acceso a información compartida.

:::info

En aplicaciones de escritorio, un método de proyecto también puede ser ejecutado con parámetros en el contexto de cualquier formulario utilizando el comando [`CALL FORM`](https://doc.4d.com/4dv20/help/command/en/page1391.html).

:::

Esta funcionalidad responde a las siguientes necesidades en materia de comunicación entre procesos en 4D:

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
