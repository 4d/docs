---
id: WebSocketServerClass
title: WebSocketServer
---

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v20    | Adicionado |

</details>


A classe `WebSocketServer` permite-lhe criar e configurar um servidor WebSocket em 4D. Uma vez que o servidor 4D WebSocket está ativo, você pode abrir e usar conexões WebSocket entre 4D e clientes usando a classe [`WebSocketConnection`](WebSocketConnectionClass.md).

:::nota Sobre os servidores WebSocket

O protocolo WebSocket proporciona um canal de comunicação full-duplex entre um servidor WebSocket e um cliente (por exemplo, um navegador Web). Para mais informações sobre servidores WebSocket, leia [esta página na Wikipédia](https://en.wikipedia.org/wiki/WebSocket).

:::

:::info Ver também

See also [this blog post](https://blog.4d.com/new-built-in-websocket-server/) about the 4D WebSocket server.

:::

### Requisitos

Para criar e manipular seu servidor WebSocket em 4D, é preciso usar duas classes embutidas em 4D:

- esta classe (`4D.WebSocketServer`) para gerir o próprio servidor,
- a classe [`4D.WebSocketConnection`](WebSocketConnectionClass.md) para gerir as ligações e as mensagens.

Além disso, terá de criar duas classes de utilizador que conterão funções de retorno de chamada:

- uma classe de usuário para tratar as ligações ao servidor,
- uma classe de usuário para tratar as mensagens.

É necessário [criar o servidor WebSocket](#4dwebsocketservernew) dentro de um [worker](https://doc.4d.com/4dv19R/help/command/en/page1389.html) para manter a ligação activa.

O servidor Web [4D](WebServerClass.md) deve ser iniciado.


### Exemplo

Neste exemplo básico, o nosso servidor WebSocket devolverá mensagens em maiúsculas.

1. Crie o servidor WebSocket utilizando um trabalhador (obrigatório) e passe a sua classe de ligação ao servidor como parâmetro:

```4d
    //criar uma instância da classe de utilizador
    //que tratará das ligações ao servidor
var $handler:cs.myServerHandler
$handler:=cs.myServerHandler.new()

CALL WORKER("WebSocketServer"; Formula(wss:=4D.WebSocketServer.new($handler)))  
    //atribuir uma variável (wss) ao WebSocket permite-lhe  
    //chamar posteriormente wss.terminate()
```

2. Definir a classe de utilizador `myServerHandler` que contém as funções de retorno de chamada utilizadas para tratar as ligações ao servidor:

```4d
//classe myServerHandler

Function onConnection($wss : Object; $param : Object) : Object
    //retorna uma instância da classe de utilizador
    //que tratará as mensagens
    return cs.myConnectionHandler.new() 
```

3. Definir a classe de utilizador `myConnectionHandler` que contém funções de retorno de chamada utilizadas para tratar mensagens:

```4d
// classe myConnectionHandler

Function onMessage($ws : 4D.WebSocketConnection; $message : Object)
    //envia a mensagem em maiúsculas  
    $ws.send(Uppercase($message.data))

```

:::tip JS do lado do cliente

Consulte [esta publicação do blogue](https://blog.4d.com/websocket-server/) para obter um exemplo de código Javascript do lado do cliente que trata de uma ligação WebSocket.

:::

### Objecto WebSocketServer

Os objectos HTTPRequest fornecem as seguintes propriedades e funções:

|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketServerClass.connections.Syntax -->](#connections)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.connections.Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.dataType.Syntax -->](#dataType)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.dataType.Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.handler.Syntax -->](#handler)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.handler.Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.path.Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.terminate().Syntax -->](#terminate())&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.terminate().Summary -->|
| [<!-- INCLUDE #WebSocketServerClass.terminated.Syntax -->](#terminated)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.terminated.Summary -->|



## 4D.WebSocketServer.new()


<!-- REF #4D.WebSocketServer.new().Syntax -->**4D.WebSocketServer.new**( *WSSHandler* : Object { ; *options* : Object } ) : 4D.WebSocketServer<!-- END REF -->


<!-- REF #4D.HTTPRequest.new().Params -->
| Parâmetros                          | Tipo               |    | Descrição                                                                                |
| ----------------------------------- | ------------------ |:--:| ---------------------------------------------------------------------------------------- |
| [WSSHandler](#wsshandler-parameter) | Objeto             | -> | Objecto da classe de utilizador que declara as chamadas de retorno do servidor WebSocket |
| [options](#options-parameter)       | Objeto             | -> | Parâmetros de configuração do WebSocket                                                  |
| Resultados                          | 4D.WebSocketServer | <- | Novo objecto WebSocketServer|<!-- END REF -->


|


A função `4D.WebSocketServer.new()` <!-- REF #4D.WebSocketServer.new().Summary -->cria e inicia um servidor WebSocket que utilizará as chamadas de retorno *WSSHandler* e (opcionalmente) as opções *especificadas*, e devolve um objecto `4D.WebSocketServer`<!-- END REF -->.

Para chamar esta função é necessário que o servidor Web [4D](WebServerClass.md) seja iniciado. O host **** e a porta **** do servidor WebSocket são os mesmos que o host e a porta do Servidor Web 4D.




### parâmetro*WSSHandler*

No parâmetro *WSSHandler* , passe uma instância de uma classe de usuário que será chamada sempre que ocorrer um evento no servidor WebSocket - essencialmente, eventos de conexão. A classe deve definir as seguintes funções de retorno de chamada (apenas `onConnection` é obrigatório):

| Propriedade  | Tipo                         | Descrição                                                                                   | Predefinição |
| ------------ | ---------------------------- | ------------------------------------------------------------------------------------------- | ------------ |
| onConnection | [Function](FunctionClass.md) | (obrigatório) Chamada de retorno quando é iniciada uma nova ligação de cliente (ver abaixo) | indefinido   |
| onOpen       | [Function](FunctionClass.md) | Callback quando o servidor WebSocket é iniciado (ver abaixo)                                | indefinido   |
| onTerminate  | [Function](FunctionClass.md) | Callback quando o servidor WebSocket é terminado (ver abaixo)                               | indefinido   |
| onError      | [Function](FunctionClass.md) | Callback quando ocorre um erro (ver abaixo)                                                 | indefinido   |


**WSHandler.onConnection**(*WSServer* : Object ; *param* : Object) : Object | null

| Parâmetros      |         | Tipo               |    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | ------- | ------------------ |:--:| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer        |         | 4D.WebSocketServer | <- | Objecto actual do servidor WebSocket                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| param           |         | Objeto             | <- | Parâmetros                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                 | type    | Text               |    | "connection"                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                 | request | Objeto             |    | `request` object. Contains information on the connection request (see below)                                                                                                                                                                                                                                                                                                                                                                                                        |
| Function result |         | Objeto             | -> | [`connectionHandler` object](#connectionhandler-object) (see below). If this function returns a `connectionHandler` object, a [`4D.WebSocketConnection` object](WebSocketConnectionClass.md#websocketconnection-object) is automatically created and added to the [collection of connections](#connections). This object is then received as parameter in each function of the `connectionHandler` object. If the returned value is null or undefined, the connection is cancelled. |

This callback is called when the handshake is complete. It must be called with a valid [`connectionHandler` object](#connectionhandler-object) to create the WebSocket connection, otherwise the connection is cancelled.


**WSHandler.onOpen**(*WSServer* : Object ; *param* : Object)

| Parâmetros |      | Tipo               |    | Descrição                            |
| ---------- | ---- | ------------------ |:--:| ------------------------------------ |
| WSServer   |      | 4D.WebSocketServer | <- | Objecto actual do servidor WebSocket |
| param      |      | Objeto             | <- | Parâmetros                           |
|            | type | Text               |    | "open"                               |

Event emitted when the websocket server is started.


**WSHandler.onTerminate**(*WSServer* : Object ; *param* : Object)

| Parâmetros |      | Tipo               |    | Descrição                            |
| ---------- | ---- | ------------------ |:--:| ------------------------------------ |
| WSServer   |      | 4D.WebSocketServer | <- | Objecto actual do servidor WebSocket |
| param      |      | Objeto             | <- | Parâmetros                           |
|            | type | Text               |    | "terminate"                          |

Event emitted when the HTTP server or the WebSocket server is closed.


**WSHandler.onError**(*WSServer* : Object ; *param* : Object)

| Parâmetros |            | Tipo               |    | Descrição                                                                                                                          |
| ---------- | ---------- | ------------------ |:--:| ---------------------------------------------------------------------------------------------------------------------------------- |
| WSServer   |            | 4D.WebSocketServer | <- | Objecto actual do servidor WebSocket                                                                                               |
| param      |            | Objeto             | <- | Parâmetros                                                                                                                         |
|            | type       | Text               |    | "erro"                                                                                                                             |
|            | statusText | Text               |    | Last error returned in the 4D error stack                                                                                          |
|            | errors     | Collection         |    | Collection of 4D error stack in case of execution error<li>\[].errCode (number) -  4D error code</li><li>\[].message (text) - Description of the 4D error</li><li>\[].componentSignature (text) - Signature of the internal component which returned the error</li> |


Event emitted when an error occurs on the WebSocket server.

### Example of `WSSHandler` class

This example of a basic chat feature illustrates how to handle WebSocket server connections in a *WSSHandler* class.

```4d
//myWSServerHandler class 

Function onConnection($wss : Object; $param : Object) : Object

    If (VerifyAddress($param.request.remoteAddress))
        // The VerifyAddress method validates the client address
        // The returned WSConnectionHandler object will be used 
        // by 4D to instantiate the 4D.WebSocketConnection object
        // related to this connection
        return cs.myConnectionHandler.new()   
        // See connectionHandler object
    Else 
        // The connection is cancelled      
        return Null 
    End if 

Function onOpen($wss : Object; $param : Object)
LogFile("*** Server started")

Function onTerminate($wss : Object; $param : Object)
LogFile("*** Server closed")

Function onError($wss : Object; $param : Object)
LogFile("!!! Server error: "+$param.statusText)

```

### `request` object

A `request` object contains the following properties:

| Parâmetros    | Tipo   | Descrição                                                                                                                                           |
| ------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| headers       | Objeto | The client HTTP GET request. `headers.key=value` (value can be a collection if the same key appears multiple times)                                 |
| query         | Objeto | Object that contains the URL parameters. For example, if parameters are: `?key1=value1&key2=value2` -> `query.key1=value1`, `query.key2=value2` |
| url           | Text   | contains only the URL that is present in the actual HTTP request. Ex: `GET /status?name=ryan HTTP/1.1` -> url="/status?name=ryan"                   |
| remoteAddress | Text   | IP Address of the client                                                                                                                            |


### `connectionHandler` object

As a result of the `WSHandler.onConnection` callback, pass a `connectionHandler` object, which is an instance of a user class that will be called every time an event occurs in the WebSocket connection --essentially, messages received. The class should define the following callback functions (only `onMessage` is mandatory):

| Parâmetros  | Tipo                         | Descrição                                                                       |
| ----------- | ---------------------------- | ------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | (mandatory) Function called when a new message is received from this connection |
| onOpen      | [Function](FunctionClass.md) | Function called when the `4D.WebSocketConnection` is created                    |
| onTerminate | [Function](FunctionClass.md) | Function called when this connection is terminated                              |
| onError     | [Function](FunctionClass.md) | Function called when an error occured                                           |


**connectionHandler.onMessage**(*ws* : 4D.WebSocketConnection ; *param* : Object)

| Parâmetros |      | Tipo                                                    |    | Descrição                           |
| ---------- | ---- | ------------------------------------------------------- |:--:| ----------------------------------- |
| ws         |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Current WebSocket connection object |
| param      |      | Objeto                                                  | <- | Parâmetros                          |
|            | type | Text                                                    |    | "message"                           |
|            | data | Text / Blob / Object                                    |    | data sent by the client             |

This Callback for WebSocket data. Called each time the WebSocket receives data.


**connectionHandler.onOpen**(*ws* : 4D.WebSocketConnection ; *param* : Object)

| Parâmetros |      | Tipo                                                    |    | Descrição                           |
| ---------- | ---- | ------------------------------------------------------- |:--:| ----------------------------------- |
| ws         |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Current WebSocket connection object |
| param      |      | Objeto                                                  | <- | Parâmetros                          |
|            | type | Text                                                    |    | "open"                              |

Called when the `connectionHandler` object is created (after `WSS.onConnection` event).


**connectionHandler.onTerminate**(*ws* : 4D.WebSocketConnection ; *param* : Object)

| Parâmetros |        | Tipo                                                    |    | Descrição                                                                                                                                                                               |
| ---------- | ------ | ------------------------------------------------------- |:--:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ws         |        | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Current WebSocket connection object                                                                                                                                                     |
| param      |        | Objeto                                                  | <- | Parâmetros                                                                                                                                                                              |
|            | type   | Text                                                    |    | "terminate"                                                                                                                                                                             |
|            | code   | Número                                                  |    | Status code indicating why the connection has been closed. If the WebSocket does not return an error code, `code` is set to 1005 if no error occurred or to 1006 if there was an error. |
|            | reason | Text                                                    |    | String explaining why the connection has been closed. If the websocket doesn't return an reason, code is undefined                                                                      |

Function called when the WebSocket is closed.

**connectionHandler.onError**(*ws* : 4D.WebSocketConnection ; *param* : Object)

| Parâmetros |        |        | Tipo                                                    |    | Descrição                                                                                                                           |
| ---------- | ------ | ------ | ------------------------------------------------------- |:--:| ----------------------------------------------------------------------------------------------------------------------------------- |
| ws         |        |        | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Current WebSocket connection object                                                                                                 |
| param      |        |        | Objeto                                                  | <- | Parâmetros                                                                                                                          |
|            | type   |        | Text                                                    |    | "erro"                                                                                                                              |
|            | status |        | Objeto                                                  |    |                                                                                                                                     |
|            |        | errors | Collection                                              |    | Collection of 4D errors stack in case of execution error<li>\[].errCode (number) -  4D error code</li><li>\[].message (text) - Description of the 4D error</li><li>\[].componentSignature (text) - Signature of the internal component which returned the error</li> |

Function called when an error has occurred.

### Example of `connectionHandler` class

This example of a basic chat feature illustrates how to handle messages in a *connectionHandler* class.

```4d
// myConnectionHandler Class

Function onMessage($ws : 4D.WebSocketConnection; $message : Object)
    // Resend the message to all chat clients   
    This.broadcast($ws;$message.data)

Function onOpen($ws : 4D.WebSocketConnection; $message : Object)
    // Send a message to new connected users
    $ws.send("Welcome on the chat!")    
    // Send "New client connected" message to all other chat clients
    This.broadcast($ws;"New client connected")

Function onTerminate($ws : 4D.WebSocketConnection; $message : Object)
    // Send "Client disconnected" message to all other chat clients
    This.broadcast($ws;"Client disconnected")

Function broadcast($ws : 4D.WebSocketConnection; $message:text)
    var $client:4D.WebSocketConnection
    // Resend the message to all chat clients
    For each ($client; $ws.wss.connections)
        // Check that the id is not the current connection
        If ($client.id#$ws.id)
            $client.send($message)
        End if 
    End for each 

```


### *options* parameter

In the optional *options* parameter, pass an object that contains the following properties:

| Propriedade | Tipo | Descrição                                                                                                                                                                                                                                                                                                                                    | Predefinição |
| ----------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| path        | Text | Represents the path to access the WebSocket server. If no path is defined, the WebSocket server manages all the connections                                                                                                                                                                                                                  | indefinido   |
| dataType    | Text | Type of the data received through the `connectionHandler.onMessage` and the data send by [`WebSocketConnection.send()`](WebSocketConnectionClass.md#send) function. Values: "text", "blob","object"). If "object": (send) transforms object into a json format and sends it; (reception): receives json format and transforms it into object | text         |


<!-- REF #WebSocketServerClass.connections.Desc -->
## .connections

<!-- REF #WebSocketServerClass.connections.Syntax -->**connections** : Collection<!-- END REF -->

#### Descrição

The `.connections` property contains <!-- REF #WebSocketServerClass.connections.Summary -->all current connections handled by the WebSocket server<!-- END REF -->. Each element of the collection is a [`WebSocketConnection` object](WebSocketConnectionClass.md).

When a connection is terminated, its [`status`](WebSocketConnectionClass.md#status) changes to "Closed" and it is removed from this collection.

<!-- END REF -->



<!-- REF #WebSocketServerClass.dataType.Desc -->
## .dataType

<!-- REF #WebSocketServerClass.dataType.Syntax -->**dataType** : Text<!-- END REF -->

#### Descrição

A propriedade `.dataType` contém <!-- REF #WebSocketServerClass.dataType.Summary -->the type of the data received or sent<!-- END REF -->.

Esta propriedade é só de leitura.
<!-- END REF -->


<!-- REF #WebSocketServerClass.handler.Desc -->
## .handler

<!-- REF #WebSocketServerClass.handler.Syntax -->**handler** : Object<!-- END REF -->

#### Descrição

A propriedade `.handler` contém <!-- REF #WebSocketServerClass.handler.Summary -->the accessor that gets the `WSSHandler` object used to initiate the WebSocket server<!-- END REF -->.

<!-- END REF -->


<!-- REF #WebSocketServerClass.path.Desc -->
## .path

<!-- REF #WebSocketServerClass.path.Syntax -->**path** : Text<!-- END REF -->

#### Descrição

A propriedade `.path` contém <!-- REF #WebSocketServerClass.path.Summary -->the pattern of the path to access the WebSocket server<!-- END REF -->. If no path was defined, the WebSocket server manages all connections.

Esta propriedade é só de leitura.
<!-- END REF -->


<!-- REF #WebSocketServerClass.terminate().Desc -->
## .terminate()

<!-- REF #WebSocketServerClass.terminate().Syntax -->**.terminate()**<!-- END REF -->


<!-- REF #WebSocketServerClass.terminate().Params -->
| Parâmetros | Tipo |  | Descrição                                             |
| ---------- | ---- |::| ----------------------------------------------------- |
|            |      |  | Não exige nenhum parâmetro|<!-- END REF -->


|


#### Descrição

A função `.terminate()` <!-- REF #WebSocketServerClass.terminate().Summary -->closes the WebSocket server<!-- END REF -->. 

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminated.Desc -->
## .terminated

<!-- REF #WebSocketServerClass.terminated.Syntax -->**terminated** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.terminated` contém <!-- REF #WebSocketServerClass.terminated.Summary -->True if the WebSocket server is closed<!-- END REF -->.

Esta propriedade é só de leitura.
<!-- END REF -->

