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

Un worker puede ser "contratado" por cualquier proceso (utilizando el comando [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1389.html)) para ejecutar métodos de proyecto con parámetros en su propio contexto, permitiendo así el acceso a información compartida.

:::info

En aplicaciones de escritorio, un método de proyecto también puede ser ejecutado con parámetros en el contexto de cualquier formulario utilizando el comando [`CALL FORM`](https://doc.4d.com/4dv20/help/command/en/page1391.html).

:::

Esta funcionalidad responde a las siguientes necesidades en materia de comunicación entre procesos en 4D:

- Ya que son compatibles con ambos procesos cooperativos y apropiativos, son la solución perfecta para la comunicación entre procesos en los [procesos apropiativos](preemptive.md) ([las variables interproceso son obsoletas](https://doc.4d.com/4Dv20/4D/20/Deprecated-or-Removed-Features.100-6259787.en.html#5868705) y no están permitidas en los procesos apropiativos).
- Ofrecen una alternativa sencilla a los semáforos, que puede ser engorrosos de definir y difíciles de usar

:::note

Aunque se han diseñado principalmente para la comunicación entre procesos en el contexto de los procesos apropiativos, `CALL WORKER` y`CALL FORM` se pueden utilizar con los procesos cooperativos.

:::

### Utilizar workers

Un worker se utiliza para pedir a un proceso que ejecute métodos proyecto. Un worker consiste de:

- un nombre único (_atención: el nombre es sensible a mayúsculas_), también utilizado para nombrar su proceso asociado
- un proceso asociado, que puede existir o no en un momento dado
- un buzón de mensajes
- un método de inicio (opcional)

Se le pide a un worker ejecutar un método proyecto mediante una llamada al comando `CALL WORKER`. El worker y su buzón de mensajes se crean en el primer uso; su proceso asociado también se ejecuta automáticamente en el primer uso. Si el proceso worker muere luego, el buzón de mensajes permanece abierto y cualquier nuevo mensaje en el buzón iniciará un nuevo proceso worker.

La siguiente animación ilustra esta secuencia:

![](../assets/en/Develop/WorkerAnimation.gif)

A diferencia de un proceso creado con el comando `New process`, un proceso worker **permanece vivo después de que termine la ejecución del método proceso**. Esto significa que todas las ejecuciones del método para el mismo worker se llevarán a cabo en el mismo proceso, que mantiene toda la información de estado del proceso (variables de proceso, registro actual y selección actual...). En consecuencia, los métodos ejecutados sucesivamente tendrán acceso y de este modo compartirán la misma información, lo que permite las comunicaciones entre procesos. El buzón de mensajes del worker maneja las llamadas sucesivas de forma asíncrona.

`CALL WORKER` encapsula tanto el nombre del método como los argumentos del comando en un mensaje que se publica en el buzón de mensajes del worker. El proceso worker se inicia a continuación, si no existe, y se pide ejecutar el mensaje. Esto significa que `CALL WORKER` normalmente volverá antes de que el método se ejecute realmente (el procesamiento es asíncrono). Por esta razón, `CALL WORKER` no devuelve ningún valor. Si necesita un worker para enviar información al proceso que lo llamó (retrollamada), es necesario utilizar `CALL WORKER` nuevamente para pasar al llamante la información necesaria. Por supuesto, en este caso, el propio llamante debe ser un worker.

No es posible utilizar `CALL WORKER` para ejecutar un método en un proceso creado por el comando `New process`. Sólo los procesos worker tienen un buzón de mensajes y, por tanto, pueden ser llamados por `CALL WORKER`. Tenga en cuenta que un proceso creado por `New process` puede llamar a un worker, pero no puede llamarse de nuevo.

Los procesos worker se pueden crear en 4D Server a través de procedimientos almacenados: por ejemplo, puede utilizar el comando `Execute on server` para ejecutar un método que llama al comando `CALL WORKER`.

Un proceso worker se cierra mediante una llamada al comando [`KILL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1390.html), que vacía el buzón de mensajes del worker y pide al proceso asociado que deje de procesar mensajes y termine su ejecución actual en cuanto termine la tarea actual.

El método de inicio de un worker es el método utilizado para crear el worker (primer uso). Si `CALL WORKER` es llamado con un parámetro _method_ vacío, entonces el método de inicio se reutiliza automáticamente como método para ejecutar.

El proceso principal creado por 4D al abrir una base de datos para los modos usuario y aplicación es un proceso worker y puede ser llamado utilizando `CALL WORKER`. Tenga en cuenta que el nombre del proceso principal puede variar dependiendo del idioma de localización de 4D, pero siempre tiene el número de proceso 1; como resultado, es más conveniente designarlo por el número de proceso en lugar del nombre de proceso cuando se llama a `CALL WORKER`.

### Identificación de los procesos workers

Todos los procesos worker, excepto el proceso principal, tienen el tipo de proceso `Worker process` (5) devuelto por el comando [`PROCESS PROPERTIES`](https://doc.4d.com/4dv20/help/command/en/page336.html).

[Iconos específicos](../ServerWindow/processes#process-type) identifican los procesos worker.

### Ver también

Para más información, consulte [este artículo de blog](https://blog.4d.com/4d-summit-2016-laurent-esnault-presents-workers-and-ui-in-preemptive-mode/) sobre cómo utilizar los workers.
