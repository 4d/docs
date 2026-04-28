---
id: async
title: Ejecución asíncrona
---

4D supports both **synchronous** and **asynchronous** execution modes, allowing developers to choose the best approach based on performance, responsiveness, and workload distribution.

## Básicos

#### Ejecución sincrónica

Synchronous execution follows a **sequential** flow, a step-by-step where each instruction must complete before the next one starts. Esto significa que el hilo de ejecución se bloquea hasta que finaliza la operación.

Synchronous execution is used when:

- La ejecución de las tareas debe seguir un orden estricto.
- El impacto en el rendimiento es mínimo (por ejemplo, operaciones rápidas).
- Se ejecuta en un contexto de un solo hilo donde el bloqueo es aceptable.

La ejecución síncrona bloquea la interfaz de usuario y es más adecuada para tareas rápidas y ordenadas en las que el bloqueo es aceptable.

#### Ejecución asíncrona

Asynchronous execution is **event-driven** and allows other operations to complete. Se basa en **callbacks**, **workers** y **event handlers** para gestionar el flujo de ejecución.

La ejecución asíncrona se utiliza cuando:

- Una operación tarda mucho tiempo (por ejemplo, esperando una respuesta del servidor).
- La capacidad de respuesta es fundamental (por ejemplo, las interacciones de la interfaz de usuario).
- Background tasks, network communication, or parallel processing are performed.

Elegir entre ejecución síncrona y asíncrona:

| Escenario                                              | Mejor enfoque |
| ------------------------------------------------------ | ------------- |
| Operaciones rápidas con un procesamiento mínimo        | **Síncrono**  |
| Tareas que requieren un orden de ejecución estricto    | **Síncrono**  |
| Tareas en segundo plano de larga duración              | **Asíncrono** |
| Interacciones de interfaz de usuario de larga duración | **Asíncrono** |
| Interacciones de interfaz de usuario de corta duración | **Síncrono**  |
| Cargas de trabajo multihilo de alto rendimiento        | **Asíncrono** |

## Principios básicos

4D ofrece capacidades integradas de **ejecución asíncrona** a través de varias clases y comandos. Permiten la ejecución de tareas en segundo plano, la comunicación en red y el procesamiento de grandes volúmenes de datos, mientras se espera a que se completen otras operaciones sin bloquear el proceso actual.

El concepto general de gestión de eventos asíncronos en 4D se basa en un modelo de mensajería asíncrona que utiliza **workers** (procesos que escuchan eventos) y **callbacks** (funciones o fórmulas invocadas automáticamente cuando se produce un evento). En lugar de esperar un resultado (modo sincrónico), proporciona una función que será llamada automáticamente cuando ocurra el evento deseado. Las retrollamadas se pueden pasar como funciones clase (recomendado) o como objetos Formula.

Este modelo es común a [`CALL WORKER`](../commands-legacy/call-worker.md), [`CALL FORM`](../commands-legacy/call-form.md), y [clases que soportan la ejecución ayncrónica](#asynchronous-programming-with-4d-classes). Todos estos comandos/clases inician una operación que se ejecuta en segundo plano. La sentencia que lanza la operación retorna inmediatamente, sin esperar a que la operación finalice.

### Workers

La programación asíncrona se basa en un sistema de [**workers**](../Develop/processes.md#worker-processes) (procesos workers), que permite ejecutar código en paralelo sin bloquear el proceso principal. Esto resulta especialmente útil para tareas largas (como llamadas HTTP, ejecución de procesos externos, procesamiento en segundo plano), al tiempo que se mantiene la capacidad de respuesta de la interfaz de usuario.

Utilizar procesos worker en programación asíncrona **es obligatorio** ya que los procesos "clásicos" terminan automáticamente su ejecución cuando el método del proceso finaliza, por lo que utilizar retrollamadas no es posible. Un proceso worker permanece vivo y puede **escuchar eventos**.

### Cola de eventos (buzón)

Cada worker (o ventana de formulario para [`CALL FORM`](../commands-legacy/call-form.md)) tiene su propia cola de mensajes. [`CALL WORKER`](../commands-legacy/call-worker.md) o [`CALL FORM`](../commands-legacy/call-form.md) simplemente envía un mensaje a esta cola. El worker trata los mensajes uno a uno, en el orden en que llegan, dentro de su propio contexto. Se conservan las variables de proceso, las selecciones actuales, etc.

### Comunicación bidireccional mediante mensajes

El proceso llamante envía un mensaje y el worker lo ejecuta. El worker puede publicar a su vez un mensaje (a través de [`CALL WORKER`](../commands-legacy/call-worker.md) o [`CALL FORM`](../commands-legacy/call-form.md)) de vuelta a la persona que llama u otro worker para notificar un evento (finalización de tarea, datos recibidos, error, progreso, etc.). Este mecanismo sustituye al retorno clásico de las llamadas síncronas.

### Escucha de eventos

En el desarrollo dirigido por eventos, es obvio que parte del código debe ser capaz de escuchar los eventos entrantes. Los eventos pueden ser generados por la interfaz de usuario (como un clic del ratón sobre un objeto o la pulsación de una tecla del teclado) o por cualquier otra interacción, como una petición http o el final de otra acción. Por ejemplo, cuando se muestra un formulario utilizando el comando `DIALOG`, las acciones del usuario pueden desencadenar eventos que su código puede procesar. Al hacer clic en un botón se activará el código asociado al botón.

En el contexto de la ejecución asíncrona, las siguientes funcionalidades colocan su código en modo de escucha:

- [`CALL WORKER`](../commands-legacy/call-worker.md) ejecuta el código para el que ha sido llamado, luego vuelve a un estado de escucha desde donde puede ser llamado posteriormente.
- [`CALL FORM`](../commands-legacy/call-form.md) abre un formulario y lo hace escuchar los mensajes entrantes de la cola de eventos.
- una llamada a `wait()` espera `terminate()` o `shutdown()` en una retrollamada de cualquier otra instancia.

### Activación de eventos

Los eventos se activan automáticamente durante el flujo de ejecución y se pasan a sus retrollamadas correspondientes. Se puede forzar la activación de eventos llamando a `terminate()` o `shutdown()` durante una `wait()`.

### Contexto de ejecución de retrollamada

Cuando 4D ejecuta una de sus retrollamdas, lo hace en el contexto del proceso actual (worker), es decir, si su objeto está instanciado dentro de un formulario, la función callback se ejecutará en el contexto de ese mismo formulario.

Para que las retrollamadas funcionen correctamente en modo totalmente asíncrono, la operación debe lanzarse generalmente desde un worker (mediante `CALL WORKER`). Si se lanza desde un proceso que maneja la interfaz de usuario, algunas retrollamadas pueden no ser invocadas hasta que la interfaz de usuario esté escuchando eventos.

### Liberar un objeto asíncrono

En 4D, todos los objetos son liberados [cuando no existen más referencias](../Concepts/dt_object.md#resources) a ellos en memoria. Esto suele ocurrir al final de la ejecución de un método para variables locales.

Para las clases asíncronas, 4D mantiene siempre una **referencia adicional** en el proceso que instanciaba el objeto. Esta referencia sólo se libera cuando finaliza la operación, es decir, después de que se active el evento `onTerminate`. Esta referencia automática permite a su objeto sobrevivir aunque no lo haya mencionado específicamente en una variable.

Si desea "forzar" la liberación de un objeto en cualquier momento, utilice un `. hutdown()` o función `terminate()`; desencadena el evento 'onTerminate\\` así libera el objeto.

### Ejemplos que ilustran el concepto común

| Funcionalidad                   | Lanzamiento asíncrono                                                                 | Retrollamada / Gestión de eventos                                       |
| ------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| CALL WORKER                     | CALL WORKER("wk"; "MyMethod"; $params)                             | MyMethod se llama con $params                                           |
| CALL FORM                       | CALL FORM($win; "MyMethod"; $params)                               | MyMethod se llama con $params                                           |
| 4D.SystemWorker | 4D.SystemWorker.new(cmd; $options) | Retrollamadas: onData, onResponse, onError, onTerminate |

## Programación asíncrona con clases 4D

Varias clases 4D soportan el procesamiento asíncrono:

- [`HTTPRequest`](../API/HTTPRequestClass.md) - Gestiona peticiones y respuestas HTTP asíncronas.
- [`SystemWorker`](../API/SystemWorkerClass.md) - Ejecuta procesos externos de forma asíncrona.
- [`TCPConnection`](../API/TCPConnectionClass.md) - Gestiona conexiones de cliente TCP con retrollamadas basadas en eventos.
- [`TCPListener`](../API/TCPListenerClass.md) - Gestiona las conexiones del servidor TCP.
- [`UDPSocket`](../API/UDPSocketClass.md) - Envía y recibe paquetes UDP.
- [`WebSocket`](../API/WebSocketClass.md) – Manages WebSocket client connections.
- [`WebSocketServer`](../API/WebSocketServerClass.md) - Gestiona las conexiones del servidor WebSocket.

Todas estas clases siguen las mismas reglas de ejecución asíncrona. Su constructor acepta un parámetro *options* que se usa para configurar su objeto asíncrono. Se recomienda que el objeto *options* sea una instancia de [user class](../Concepts/classes.md) que tenga funciones de retrollamada. For example, you can create an `onResponse()` function in the class, it will be automatically called asynchronously when a *response* event is fired.

Recomendamos la siguiente secuencia:

1. Se crea la clase usuario donde se declaran las funciones de retrollamada, por ejemplo un `cs.Params` con las funciones `onError()` y `onResponse()`.
2. Instanciará la clase usuario (en nuestro ejemplo utilizando `cs.Params.new()`) que configurará su objeto asíncrono.
3. Se llama al constructor de la clase 4D (por ejemplo `4D.SystemWorker.new()`) y se pasa el objeto *options* como parámetro. Inicia las operaciones pasadas inmediatamente sin demora.

He aquí un ejemplo completo de implementación de un objeto *options* basado en una clase usuario:

```4d
//creación asíncrona de código
var $options:=cs.Params.new(10) //ver código clase cs.Params abajo
var $systemworker:=4D.SystemWorker.new("/bin/ls -l /Users ";$options) 


// Clase "Params"

Class constructor ($timeout : Real)
 This.dataType:="text"
    This.data:=""
    This.dataError:=""
    This.timeout:=$timeout

Function onResponse($systemWorker : Object)
     This._createFile("onResponse"; $systemWorker.response)

Function onData($systemWorker : Object; $info : Object)
     This.data+=$info.data
     This._createFile("onData";this.data)

Function onDataError($systemWorker : Object; $info : Object)
     This.dataError+=$info.data
     This._createFile("onDataError";this.dataError)

Function onTerminate($systemWorker : Object)
     var $textBody : Text
     $textBody:="Response: "+$systemWorker.response
     $textBody+="ResponseError: "+$systemWorker.responseError
     This._createFile("onTerminate"; $textBody)

Function _createFile($title : Text; $textBody : Text)
     TEXT TO DOCUMENT(Get 4D folder(Current resources folder)+$title+".txt"; $textBody)

```

Tenga en cuenta que `onResponse`, `onData`, `onDataError` y `onTerminate` son funciones soportadas por [`4D.SystemWorker`](../API/SystemWorkerClass.md).

Una vez instanciada la clase usuario; 4D se pone en modo [escucha de eventos](#event-listening), en cuyo caso 4D puede [disparar un evento](#event-triggering) que llame a la función correspondiente en la clase usuario.

:::tip

En algunos casos, es posible que desee utilizar fórmulas como valores de propiedad en lugar de funciones de clase. Aunque no es la mejor práctica, se admite una sintaxis como la siguiente:

```4d
var $options.onResponse:=Formula(myMethod) 
```

:::

## Ejecución síncrona en código asíncrono

Incluso cuando se utiliza código moderno y asíncrono, puede ser necesario introducir cierto grado de ejecución síncrona. Por ejemplo, puede querer que una función espere un cierto tiempo para obtener un resultado. Podría ser el caso de conexiones de red rápidas garantizadas o workers del sistema. A continuación, puede forzar la ejecución sincrónica utilizando la función `wait()`.

La función **`.wait()`** pausa la ejecución del proceso actual y pone a 4D en modo [escucha de eventos](#event-listening). Tenga en cuenta que activará eventos recibidos de cualquier fuente, no sólo del objeto sobre el que se llamó a la función `wait()`.

La función `wait()` retorna cuando el evento `onTerminate` ha sido disparado en el objeto, o cuando el tiempo de espera suministrado (si existe) ha expirado. Por consiguiente, puede salir explícitamente de un `.wait()` llamando a `shutdown()` o `terminate()` desde dentro de una retrollamda. En caso contrario, se sale de `.wait()` cuando finaliza la operación en curso.

Ejemplo:

```4d
var $options:=cs.Params.new() 
var $systemworker:=4D.SystemWorker.new("/bin/ls -l /Users ";$options) 
$systemworker.wait(0.5) // Espera hasta 0.5 segundos para obtener información del archivo
```

## Ver también

[Blog: Lanzar un proceso externo de forma asíncrona](https://blog.4d.com/launch-an-external-process-asynchronously/)<br/>
[Llamada asíncrona](../aikit/asynchronous-call.md)
