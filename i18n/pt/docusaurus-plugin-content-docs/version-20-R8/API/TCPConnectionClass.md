---
id: TCPConnectionClass
title: TCPConnection
---

The `TCPConnection` class allows you to manage Transmission Control Protocol (TCP) client connections to a server, enabling you to send and receive data, and handle connection lifecycle events using callbacks.

The `TCPConnection` class is available from the `4D` class store. You can create a TCP connection using the [4D.TCPConnection.new()](#4dtcpconnectionnew) function, which returns a [TCPConnection object](#tcpconnection-object).

All `TCPConnection` class functions are thread-safe.

Thanks to the standard 4D object *refcounting*, a TCPConnection is automatically released when it is no longer referenced. Consequently, the associated resources, are properly cleaned up without requiring explicit closure.

TCPConnection objects are released when no more references to them exist in memory. This typically occurs, for example, at the end of a method execution for local variables. If you want to "force" the closure of a connection at any moment, [**nullify** its references by setting them to **Null**](../Concepts/dt_object.md#resources).

<details><summary>História</summary>

| Release | Mudanças          |
| ------- | ----------------- |
| 20 R8   | Classe adicionada |

</details>

### Exemplos

The following examples demonstrate how to use the 4D.TCPConnection and 4D.TCPEvent classes to manage a TCP client connection, handle events, send data, and properly close the connection. Both synchronous and asynchronous examples are provided.

#### Synchronous Example

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

#### Asynchronous Example

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

##### Usage example

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

### TCPConnection Object

A TCPConnection object is a non-sharable object.

TCPConnection objects provide the following properties and functions:

|                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.TCPConnection.closed.Syntax -->](#closed)<br/><!-- INCLUDE #4D.TCPConnection.closed.Summary -->           |
| [<!-- INCLUDE #4D.TCPConnection.errors.Syntax -->](#errors)<br/><!-- INCLUDE #4D.TCPConnection.errors.Summary -->           |
| [<!-- INCLUDE #4D.TCPConnection.noDelay.Syntax -->](#noDelay)<br/><!-- INCLUDE #4D.TCPConnection.noDelay.Summary -->        |
| [<!-- INCLUDE #4D.TCPConnection.send().Syntax -->](#send)<br/><!-- INCLUDE #4D.TCPConnection.send().Summary -->             |
| [<!-- INCLUDE #4D.TCPConnection.shutdown().Syntax -->](#shutdown)<br/><!-- INCLUDE #4D.TCPConnection.shutdown().Summary --> |
| [<!-- INCLUDE #4D.TCPConnection.wait().Syntax -->](#wait)<br/><!-- INCLUDE #4D.TCPConnection.wait().Summary -->             |

<!-- REF #4D.TCPConnection.new().Desc -->

## 4D.TCPConnection.new()

<!-- REF #4D.TCPConnection.new().Syntax -->**4D.TCPConnection.new**( *serverAddress* : Text ; *serverPort* : Number ; *options* : Object  ) : 4D.TCPConnection<!-- END REF -->

<!-- REF #4D.TCPConnection.new().options -->

| Parâmetro     | Tipo          |                             | Descrição                                                |
| ------------- | ------------- | --------------------------- | -------------------------------------------------------- |
| serverAddress | Text          | ->                          | Domain name or IP address of the server                  |
| serverPort    | Integer       | ->                          | Port number of the server                                |
| options       | Object        | ->                          | Configuração [opções](#options-parameter) para a conexão |
| Resultados    | TCPConnection | <- | New TCPConnection object                                 |

<!-- END REF -->

#### Descrição

The `4D.TCPConnection.new()` function <!-- REF #4D.TCPConnection.new().Summary -->creates a new TCP connection to the specified *serverAddress* and *serverPort*, using the defined *options*, and returns a `4D.HTTPRequest` object<!-- END REF -->.

#### `options` parameter

In the *options* parameter, pass an object that can contain the following properties:

| Propriedade  | Tipo       | Descrição                                                              | Por padrão |
| ------------ | ---------- | ---------------------------------------------------------------------- | ---------- |
| onConnection | Formula    | Callback triggered when the connection is established. | Indefinido |
| onData       | Formula    | Callback triggered when data is received                               | Indefinido |
| onShutdown   | Formula    | Callback triggered when the connection is properly closed              | Indefinido |
| onError      | Formula    | Callback triggered in case of an error                                 | Indefinido |
| onTerminate  | Formula    | Callback triggered just before the TCPConnection is released           | Indefinido |
| noDelay      | Parâmetros | **Read-only** Disables Nagle's algorithm if `true`                     | False      |

#### Funções Callback

All callback functions receive two parameters:

| Parâmetro   | Tipo                                            | Descrição                                             |
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

#### TCPEvent object

Um objeto [`TCPEvent`](TCPEventClass.md) é retornado quando uma [função de callback](#callback-functions) é chamada.

<!-- END REF -->

<!-- REF #4D.TCPConnection.closed.Desc -->

## .closed

<!-- REF #4D.TCPConnection.closed.Syntax -->**closed** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.closed` contém <!-- REF #4D.TCPConnection.closed.Summary -->se a conexão está fechada<!-- END REF -->. Returns `true` if the connection is closed, either due to an error, a call to `shutdown()`, or closure by the server.

<!-- END REF -->

<!-- REF #4D.TCPConnection.errors.Desc -->

## .errors

<!-- REF #4D.TCPConnection.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Descrição

The `.errors` property contains <!-- REF #4D.TCPConnection.errors.Summary -->a collection of error objects associated with the connection<!-- END REF -->. Each error object includes the error code, a description, and the signature of the component that caused the error.

| Propriedade |                                                                                           | Tipo       | Descrição                                            |
| ----------- | ----------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------- |
| errors      |                                                                                           | Collection | pilha de erros 4D em caso de erro                    |
|             | [].errCode            | Number     | Código de erro 4D                                    |
|             | [].message            | Text       | Descrição do erro 4D                                 |
|             | [].componentSignature | Text       | Assinatura da componente interna que devolveu o erro |

<!-- END REF -->

<!-- REF #4D.TCPConnection.noDelay.Desc -->

## .noDelay

<!-- REF #4D.TCPConnection.noDelay.Syntax -->**noDelay** : Boolean<!-- END REF -->

#### Descrição

The `.noDelay` property contains <!-- REF #4D.TCPConnection.noDelay.Summary -->whether Nagle's algorithm is disabled (`true`) or enabled (`false`)<!-- END REF -->. Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF #4D.TCPConnection.send().Desc -->

## .send()

<!-- REF #4D.TCPConnection.send().Syntax -->**.send**( *data* : Blob )<!-- END REF -->

<!-- REF #4D.TCPConnection.send().options -->

| Parâmetro | Tipo |    | Descrição       |
| --------- | ---- | -- | --------------- |
| data      | Blob | -> | Data to be sent |

<!-- END REF -->

#### Descrição

A função `send()` <!-- REF #4D.TCPConnection.send().Summary -->envia dados para o servidor<!-- END REF -->. If the connection is not established yet, the data is sent once the connection is established.

<!-- END REF -->

<!-- REF #4D.TCPConnection.shutdown().Desc -->

## .shutdown()

<!-- REF #4D.TCPConnection.shutdown().Syntax -->**.shutdown**()<!-- END REF -->

<!-- REF #4D.TCPConnection.shutdown().options -->

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

The `shutdown()` function <!-- REF #4D.TCPConnection.shutdown().Summary -->closes the *write* channel of the connection (client to server stream)<!-- END REF --> while keeping the *read* channel (server to client stream) open, allowing you to continue receiving data until the connection is fully closed by the server or an error occurs.

<!-- END REF -->

<!-- REF #4D.TCPConnection.wait().Desc -->

## .wait()

<!-- REF #4D.TCPConnection.wait().Syntax -->**.wait**( { *timeout* : Real } )<!-- END REF -->

<!-- REF #4D.TCPConnection..wait().options -->

| Parâmetro | Tipo |     | Descrição                    |
| --------- | ---- | :-: | ---------------------------- |
| timeout   | Real |  -> | Maximum wait time in seconds |

<!-- END REF -->

#### Descrição

The `wait()` function <!-- REF #4D.TCPConnection.wait().Summary -->waits until  the TCP connection is closed or the specified `timeout` is reached<!-- END REF -->

:::note

During the `.wait()` execution, callback functions are executed, whether they originate from other `SystemWorker` instances. Você pode sair de um `.wait()` chamando [`shutdown()`](#shutdown) de um retorno de chamada.

:::

<!-- END REF -->
