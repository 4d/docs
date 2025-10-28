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
- Utilice el comando [`New process`](../commands-legacy/new-process.md). The method passed as a parameter to the [`New process`](../commands/new-process) command is the process method.
- Utilice el comando [`Execute on server`](../commands-legacy/execute-on-server.md) para crear un procedimiento almacenado en el servidor. El método pasado como parámetro del comando es el método proceso.
- Utilice el comando [`CALL WORKER`](../commands-legacy/call-worker.md). Si el proceso del worker no existe, se crea.

:::note

En las aplicaciones de escritorio, los procesos pueden ejecutarse seleccionando comandos de menú. En el [Editor de Barra de menú](../Menus/creating.md), seleccione el comando de menú y haga clic en la casilla de verificación **Iniciar un nuevo proceso**. El método asociado al comando de menú es el método de proceso.

:::

Un proceso puede borrarse en las siguientes condiciones (las dos primeras son automáticas):

- Cuando el método proceso termina de ejecutarse
- Cuando el usuario sale de la aplicación
- Si detienes el proceso de forma formal o utiliza el botón **Abortar** en el depurador o en el Explorador de Ejecución
- Si llama al comando [`KILL WORKER`](../commands-legacy/kill-worker.md) (sólo para borrar un proceso worker).

Un proceso puede crear otro proceso. Los procesos no están organizados jerárquicamente: todos los procesos son iguales, independientemente del proceso a partir del cual se hayan creado. Una vez que el proceso "padre" crea un proceso "hijo", el proceso hijo continuará independientemente de si el proceso padre sigue ejecutándose o no.

## Elementos de un proceso

Cada proceso contiene elementos específicos que puede manejar independientemente de otros procesos.

### Elementos del lenguaje

- Variables: cada proceso tiene sus propias [variables de proceso](../Concepts/variables#process-variables). Las variables proceso solo se reconocen dentro del dominio de su proceso nativo.
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

## Remote processes

When you create a process on a remote 4D, a "twin" process is created on the server to handle data access and database context as soon as it is necessary, i.e. the first time the process on the remote 4D needs to access data.

For optimization reason, while no server access is required, for example if the process on the remote 4D runs an event-handling method or controls floating windows, no twin process is created on the server.

## Procesos worker

Un proceso Worker es una forma sencilla y poderosa de intercambiar información entre procesos. Esta funcionalidad se basa en un sistema de mensajería asíncrono que permite a los procesos y formularios ser llamados y se les pide ejecutar métodos con parámetros en su propio contexto.

Un worker puede ser "contratado" por cualquier proceso (utilizando el comando [`CALL WORKER`](../commands-legacy/call-worker.md)) para ejecutar métodos de proyecto con parámetros en su propio contexto, permitiendo así el acceso a información compartida.

:::info

En aplicaciones de escritorio, un método de proyecto también puede ser ejecutado con parámetros en el contexto de cualquier formulario utilizando el comando [`CALL FORM`](../commands-legacy/call-form.md).

:::

Esta funcionalidad responde a las siguientes necesidades en materia de comunicación entre procesos en 4D:

- Ya que son compatibles con ambos procesos cooperativos y apropiativos, son la solución perfecta para la comunicación entre procesos en los [procesos apropiativos](preemptive.md) ([las variables interproceso son obsoletas](https://doc.4d.com/4Dv20/4D/20/Deprecated-or-Removed-Features.100-6259787.en.html#5868705) y no están permitidas en los procesos apropiativos).
- Ofrecen una alternativa sencilla a los semáforos, que puede ser engorrosos de definir y difíciles de usar

:::note

Although they have been designed mainly for interprocess communication in the context of preemptive processes, [`CALL WORKER`](../commands/call-worker) and [`CALL FORM`](../commands/call-form) can be used with cooperative processes.

:::

### Utilizar workers

Un worker se utiliza para pedir a un proceso que ejecute métodos proyecto. Un worker consiste de:

- un nombre único (*atención: el nombre es sensible a mayúsculas*), también utilizado para nombrar su proceso asociado
- un proceso asociado, que puede existir o no en un momento dado
- un buzón de mensajes
- un método de inicio (opcional)

You ask a worker to execute a project method by calling the [`CALL WORKER`](../commands/call-worker) command. El worker y su buzón de mensajes se crean en el primer uso; su proceso asociado también se ejecuta automáticamente en el primer uso. Si el proceso worker muere luego, el buzón de mensajes permanece abierto y cualquier nuevo mensaje en el buzón iniciará un nuevo proceso worker.

La siguiente animación ilustra esta secuencia:

![](../assets/en/Develop/WorkerAnimation.gif)

Unlike a process created with the [`New process`](../commands/new-process) command, a worker process **remains alive after the execution of the process method ends**. Esto significa que todas las ejecuciones del método para el mismo worker se llevarán a cabo en el mismo proceso, que mantiene toda la información de estado del proceso (variables de proceso, registro actual y selección actual...). En consecuencia, los métodos ejecutados sucesivamente tendrán acceso y de este modo compartirán la misma información, lo que permite las comunicaciones entre procesos. El buzón de mensajes del worker maneja las llamadas sucesivas de forma asíncrona.

[`CALL WORKER`](../commands/call-worker) encapsulates both the method name and command arguments in a message that is posted in the worker's message box. El proceso worker se inicia a continuación, si no existe, y se pide ejecutar el mensaje. This means that [`CALL WORKER`](../commands/call-worker) will usually return before the method is actually executed (processing is asynchronous). For this reason, [`CALL WORKER`](../commands/call-worker) does not return any value. If you need a worker to send information back to the process which called it (callback), you need to use [`CALL WORKER`](../commands/call-worker) again to pass the information needed to the caller. Por supuesto, en este caso, el propio llamante debe ser un worker.

It is not possible to use [`CALL WORKER`](../commands/call-worker) to execute a method in a process created by the [`New process`](../commands/new-process) command. Sólo los procesos worker tienen un buzón de mensajes y, por tanto, pueden ser llamados por `CALL WORKER`. Note that a process created by [`New process`](../commands/new-process) can call a worker, but cannot be called back.

Worker processes can be created on 4D Server through stored procedures: for example, you can use the `Execute on server` command to execute a method that calls the [`CALL WORKER`](../commands/call-worker) command.

Un proceso worker se cierra mediante una llamada al comando [`KILL WORKER`](../commands-legacy/kill-worker.md), que vacía el buzón de mensajes del worker y pide al proceso asociado que deje de procesar mensajes y termine su ejecución actual en cuanto termine la tarea actual.

El método de inicio de un worker es el método utilizado para crear el worker (primer uso). If [`CALL WORKER`](../commands/call-worker) is called with an empty *method* parameter, then the startup method is automatically reused as method to execute.

The main process created by 4D when opening a database for user and application modes is a worker process and can be called using [`CALL WORKER`](../commands/call-worker). Note that the name of the main process may vary depending on the 4D localization language, but it always has the process number 1; as a result, it's more convenient to designate it by process number instead of process name when calling [`CALL WORKER`](../commands/call-worker).

### Identificación de los procesos workers

Todos los procesos worker, excepto el proceso principal, tienen el tipo de proceso `Worker process` (5) devuelto por el comando [`Process info`](../commands/process-info.md).

[Iconos específicos](../ServerWindow/processes#process-type) identifican los procesos worker.

### Ver también

Para más información, consulte [este artículo de blog](https://blog.4d.com/4d-summit-2016-laurent-esnault-presents-workers-and-ui-in-preemptive-mode/) sobre cómo utilizar los workers.
