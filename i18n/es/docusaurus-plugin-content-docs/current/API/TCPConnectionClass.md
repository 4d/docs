---
id: TCPConnectionClass
title: TCPConnection
---

The `TCPConnection` class allows you to manage Transmission Control Protocol (TCP) client connections to a [server](./TCPListenerClass.md), enabling you to send and receive data, and handle connection lifecycle events using callbacks.

The `TCPConnection` class is available from the `4D` class store. Puede crear una conexión TCP utilizando la función [4D.TCPConnection.new()](#4dtcpconnectionnew) que devuelve un [TCPConnection object](#tcpconnection-object).

All `TCPConnection` class functions are thread-safe.

Thanks to the standard 4D object *refcounting*, a TCPConnection is automatically released when it is no longer referenced. Consequently, the associated resources, are properly cleaned up without requiring explicit closure.

TCPConnection objects are released when no more references to them exist in memory. This typically occurs, for example, at the end of a method execution for local variables. If you want to "force" the closure of a connection at any moment, [**nullify** its references by setting them to **Null**](../Concepts/dt_object.md#resources).

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                   |
| ----------- | ------------------------------------------------ |
| 20 R9       | New `listener`, `address`, and `port` attributes |
| 20 R8       | Clase añadida                                    |

</details>

### Ejemplos

The following examples demonstrate how to use the 4D.TCPConnection and 4D.TCPEvent classes to manage a TCP client connection, handle events, send data, and properly close the connection. Both synchronous and asynchronous examples are provided.

#### Ejemplo sincrónico

This example shows how to establish a connection, send data, and shut it down using a simple object for configuration:

```4d
var $domain : Text := "127.0.0.1"
var $port : Integer := 10000
var $options : Object := New object() // Configuration object
var $tcpClient : 4D.TCPConnection
var $message : Text := "test message"

// Open a connection
$tcpClient := 4D.TCPConnection.new($domain; $port; $options)

// Send data
var $blobData : Blob
TEXT TO BLOB($message; $blobData; UTF8 text without length)
$tcpClient.send($blobData)

// Shutdown
$tcpClient.shutdown()
$tcpClient.wait(0)

```

#### Ejemplo asincrónico

This example defines a class that handles the connection lifecycle and events, showcasing how to work asynchronously:

```4d
// Class definition: cs.MyAsyncTCPConnection

Class constructor($url : Text; $port : Integer)
    This.connection := Null
    This.url := $url
    This.port := $port

// Connect to one of the servers launched inside workers
Function connect()
    This.connection := 4D.TCPConnection.new(This.url; This.port; This)

// Disconnect from the server
Function disconnect()
    This.connection.shutdown()
    This.connection := Null

// Send data to the server
Function getInfo()
    var $blob : Blob
    TEXT TO BLOB("Information"; $blob)
    This.connection.send($blob)

// Callback called when the connection is successfully established
Function onConnection($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
    ALERT("Connection established")

// Callback called when the connection is properly closed
Function onShutdown($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
    ALERT("Connection closed")

// Callback called when receiving data from the server
Function onData($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
    ALERT(BLOB to text($event.data; UTF8 text without length))

	//Warning: There's no guarantee you'll receive all the data you need in a single network packet.
	
// Callback called when the connection is closed unexpectedly
Function onError($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
    ALERT("Connection error")

// Callback called after onShutdown/onError just before the TCPConnection object is released
Function onTerminate($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
	ALERT("Connection terminated")


```

##### Ejemplo de uso

Create a new method named AsyncTCP, to initialize and manage the TCP connection:

```4d
var $myObject : cs.MyAsyncTCPConnection
$myObject := cs.MyAsyncTCPConnection.new("myURL"; 10000)
$myObject.connect()
$myObject.getInfo()
$myObject.disconnect()

```

Call the AsyncTCP method in a worker:

```4d
CALL WORKER("new process"; "Async_TCP")

```

### Objeto TCPConnection

A TCPConnection object is a non-sharable object.

TCPConnection objects provide the following properties and functions:

|                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #TCPConnection.address.Syntax -->](#address)<br/><!-- INCLUDE #TCPConnection.address.Summary -->        |
| [<!-- INCLUDE #TCPConnection.closed.Syntax -->](#closed)<br/><!-- INCLUDE #TCPConnection.closed.Summary -->           |
| [<!-- INCLUDE #TCPConnection.errors.Syntax -->](#errors)<br/><!-- INCLUDE #TCPConnection.errors.Summary -->           |
| [<!-- INCLUDE #TCPConnection.listener.Syntax -->](#listener)<br/><!-- INCLUDE #TCPConnection.listener.Summary -->     |
| [<!-- INCLUDE #TCPConnection.noDelay.Syntax -->](#nodelay)<br/><!-- INCLUDE #TCPConnection.noDelay.Summary -->        |
| [<!-- INCLUDE #TCPConnection.port.Syntax -->](#port)<br/><!-- INCLUDE #TCPConnection.port.Summary -->                 |
| [<!-- INCLUDE #TCPConnection.send().Syntax -->](#send)<br/><!-- INCLUDE #TCPConnection.send().Summary -->             |
| [<!-- INCLUDE #TCPConnection.shutdown().Syntax -->](#shutdown)<br/><!-- INCLUDE #TCPConnection.shutdown().Summary --> |
| [<!-- INCLUDE #TCPConnection.wait().Syntax -->](#wait)<br/><!-- INCLUDE #TCPConnection.wait().Summary -->             |

<!-- REF #4D.TCPConnection.new().Desc -->

## 4D.TCPConnection.new()

<!-- REF #4D.TCPConnection.new().Syntax -->**4D.TCPConnection.new**( *serverAddress* : Text ; *serverPort* : Number ; *options* : Object  ) : 4D.TCPConnection<!-- END REF -->

<!-- REF #4D.TCPConnection.new().params -->

| Parámetros    | Tipo          |                             | Descripción                                                    |
| ------------- | ------------- | --------------------------- | -------------------------------------------------------------- |
| serverAddress | Text          | ->                          | Domain name or IP address of the server                        |
| serverPort    | Integer       | ->                          | Port number of the server                                      |
| options       | Object        | ->                          | Configuration [options](#options-parameter) for the connection |
| Resultado     | TCPConnection | <- | New TCPConnection object                                       |

<!-- END REF -->

#### Descripción

La función `4D.TCPConnection.new()` <!-- REF #4D.TCPConnection.new().Summary -->crea una nueva conexión TCP a la *serverAddress* y *serverPort* especificados, usando las *opciones* definidas, y devuelve un objeto `4D.HTTPRequest`<!-- END REF -->.

#### Parámetro *options*

En el parámetro *options*, pase un objeto que puede contener las siguientes propiedades:

| Propiedad    | Tipo    | Descripción                                                            | Por defecto |
| ------------ | ------- | ---------------------------------------------------------------------- | ----------- |
| onConnection | Formula | Callback triggered when the connection is established. | Indefinido  |
| onData       | Formula | Callback triggered when data is received                               | Indefinido  |
| onShutdown   | Formula | Callback triggered when the connection is properly closed              | Indefinido  |
| onError      | Formula | Callback triggered in case of an error                                 | Indefinido  |
| onTerminate  | Formula | Callback triggered just before the TCPConnection is released           | Indefinido  |
| noDelay      | Boolean | **Read-only** Disables Nagle's algorithm if `true`                     | False       |

#### Función callback (retrollamada)

All callback functions receive two parameters:

| Parámetros  | Tipo                                            | Descripción                                           |
| ----------- | ----------------------------------------------- | ----------------------------------------------------- |
| $connection | [objeto `TCPConnection`](#tcpconnection-object) | The current TCP connection instance.  |
| $event      | [objeto `TCPEvent`](#tcpevent-object)           | Contains information about the event. |

**Sequence of Callback Calls:**

1. `onConnection` is triggered when the connection is established.
2. `onData` is triggered each time data is received.
3. Either `onShutdown` or `onError` is triggered:
   - `onShutdown` is triggered when the connection is properly closed.
   - `onError` is triggered if an error occurs.
4. `onTerminate` is always triggered just before the TCPConnection is released (connection is closed or an error occured).

#### Objeto TCPEvent

Un objeto [`TCPEvent`](TCPEventClass.md) es devuelto cuando se llama una [función de retrollamada](#callback-functions).

<!-- END REF -->

<!-- REF #TCPConnection.address.Desc -->

## .dirección

<!-- REF #TCPConnection.address.Syntax -->**address** : Text<!-- END REF -->

#### Descripción

The `.address` property contains <!-- REF #TCPConnection.address.Summary -->the IP addess or domain name of the remote machine<!-- END REF -->.

<!-- END REF -->

<!-- REF #TCPConnection.closed.Desc -->

## .closed

<!-- REF #TCPConnection.closed.Syntax -->**closed** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.closed` contiene <!-- REF #TCPConnection.closed.Summary -->si la conexión está cerrada<!-- END REF -->. Returns `true` if the connection is closed, either due to an error, a call to `shutdown()`, or closure by the server.

<!-- END REF -->

<!-- REF #TCPConnection.errors.Desc -->

## .errors

<!-- REF #TCPConnection.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Descripción

La propiedad `.errors` contiene <!-- REF #TCPConnection.errors.Summary -->una colección de objetos de error asociados a la conexión<!-- END REF -->. Each error object includes the error code, a description, and the signature of the component that caused the error.

| Propiedad |                                                                                           | Tipo       | Descripción                                           |
| --------- | ----------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------- |
| errors    |                                                                                           | Collection | Pila de error 4D en caso de error                     |
|           | [].errCode            | Number     | Código de error 4D                                    |
|           | [].message            | Text       | Descripción del error 4D                              |
|           | [].componentSignature | Text       | Firma del componente interno que ha devuelto el error |

<!-- END REF -->

<!-- REF #TCPConnection.listener.Desc -->

## .listener

<!-- REF #TCPConnection.listener.Syntax -->**listener** : Object<!-- END REF -->

#### Descripción

The `.listener` property contains <!-- REF #TCPConnection.listener.Summary -->the [`TCPListener`](./TCPListenerClass.md) object that created the `TCPConnection`, if any<!-- END REF -->. Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF #TCPConnection.noDelay.Desc -->

## .noDelay

<!-- REF #TCPConnection.noDelay.Syntax -->**noDelay** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.noDelay` contiene <!-- REF #TCPConnection.noDelay.Summary -->si el algoritmo de Nagle está desactivado (`true`) o activado (`false`)<!-- END REF -->. Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF #TCPConnection.port.Desc -->

## .port

<!-- REF #TCPConnection.port.Syntax -->**port** : Number<!-- END REF -->

#### Descripción

The `.port` property contains <!-- REF #TCPConnection.port.Summary -->the port number of the remote machine<!-- END REF -->. Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF #TCPConnection.send().Desc -->

## .send()

<!-- REF #TCPConnection.send().Syntax -->**.send**( *data* : Blob )<!-- END REF -->

<!-- REF #TCPConnection.send().params -->

| Parámetros | Tipo |    | Descripción    |
| ---------- | ---- | -- | -------------- |
| data       | Blob | -> | Datos a enviar |

<!-- END REF -->

#### Descripción

La función `send()` <!-- REF #TCPConnection.send().Summary -->envía datos al servidor<!-- END REF -->. If the connection is not established yet, the data is sent once the connection is established.

<!-- END REF -->

<!-- REF #TCPConnection.shutdown().Desc -->

## .shutdown()

<!-- REF #TCPConnection.shutdown().Syntax -->**.shutdown**()<!-- END REF -->

<!-- REF #TCPConnection.shutdown().params -->

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

La función `shutdown()`<!-- REF #TCPConnection.shutdown().Summary -->cierra el canal *write* de la conexión (cliente a servidor)<!-- END REF --> mientras se mantiene abierto el canal *read* (servidor al flujo del cliente) permitiéndole continuar recibiendo datos hasta que la conexión sea completamente cerrada por el servidor o se produzca un error.

<!-- END REF -->

<!-- REF #TCPConnection.wait().Desc -->

## .wait()

<!-- REF #TCPConnection.wait().Syntax -->**.wait**( { *timeout* : Real } )<!-- END REF -->

<!-- REF #TCPConnection.wait().params -->

| Parámetros | Tipo |     | Descripción                         |
| ---------- | ---- | :-: | ----------------------------------- |
| timeout    | Real |  -> | Tiempo máximo de espera en segundos |

<!-- END REF -->

#### Descripción

La función `wait()` <!-- REF #TCPConnection.wait().Summary -->espera hasta que se cierre la conexión TCP o se alcance el `timeout` especificado<!-- END REF -->

:::note

During the `.wait()` execution, callback functions are executed, whether they originate from other `SystemWorker` instances. Puede salir de un `.wait()` llamando a [`shutdown()`](#shutdown) desde una retrollamada.

:::

<!-- END REF -->

