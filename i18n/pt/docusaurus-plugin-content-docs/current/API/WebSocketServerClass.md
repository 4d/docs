---
id: WebSocketServerClass
title: WebSocketServer
---

<details><summary>History</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v20    | Adicionado |

</details>

The `WebSocketServer` class allows you to create and configure a WebSocket server in 4D. Once the 4D WebSocket server is active, you can open and use WebSocket connections between 4D and clients using the [`WebSocketConnection` class](WebSocketConnectionClass.md).

:::note Sobre os servidores WebSocket

O protocolo WebSocket proporciona um canal de comunicação full-duplex entre um servidor WebSocket e um cliente (por exemplo, um navegador Web). For more information on WebSocket servers, read [this page on Wikipedia](https://en.wikipedia.org/wiki/WebSocket).

:::

:::info Veja também

See also [this blog post](https://blog.4d.com/new-built-in-websocket-server/) about the 4D WebSocket server.

:::

### Requisitos

Para criar e manipular seu servidor WebSocket em 4D, é preciso usar duas classes embutidas em 4D:

- this class (`4D.WebSocketServer`) to manage the server itself,
- the [`4D.WebSocketConnection`](WebSocketConnectionClass.md) class to manage connections and messages.

Além disso, terá de criar duas classes de utilizador que conterão funções de retorno de chamada:

- uma classe de usuário para tratar as ligações ao servidor,
- uma classe de usuário para tratar as mensagens.

You must [create the WebSocket server](#4dwebsocketservernew) within a [worker](https://doc.4d.com/4dv19R/help/command/en/page1389.html) to keep the connection alive.

The [4D Web Server](WebServerClass.md) must be started.

### Exemplo

Neste exemplo básico, o nosso servidor WebSocket devolverá mensagens em maiúsculas.

1. Crie o servidor WebSocket utilizando um trabalhador (obrigatório) e passe a sua classe de ligação ao servidor como parâmetro:

```4d
	//create an instance of the user class
	//that will handle the connections to the server
var $handler:cs.myServerHandler
$handler:=cs.myServerHandler.new()

CALL WORKER("WebSocketServer"; Formula(wss:=4D.WebSocketServer.new($handler)))  
	//assign a variable (wss) to the WebSocket allows you  
	//to call wss.terminate() afterwards
```

2. Define the `myServerHandler` user class containing callback function(s) used to handle connections to the server:

```4d
//myServerHandler class

Function onConnection($wss : Object; $event : Object) : Object
	//returns an instance of the user class
	//that will handle the messages
	return cs.myConnectionHandler.new() 
```

3. Define the `myConnectionHandler` user class containing callback function(s) used to handle messages:

```4d
// myConnectionHandler class

Function onMessage($ws : 4D.WebSocketConnection; $message : Object)
	//resends the message in uppercase	
	$ws.send(Uppercase($message.data))

```

:::tip JS do lado do cliente

See [this blog post](https://blog.4d.com/websocket-server/) for an example of client-side Javascript code handling a WebSocket connection.

:::

### Objecto WebSocketServer

Os objectos de servidor WebSocket fornecem as seguintes propriedades e funções:

|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketServerClass.connections.Syntax -->](#connections)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.connections.Summary --> |
| [<!-- INCLUDE #WebSocketServerClass.dataType.Syntax -->](#dataType)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.dataType.Summary -->          |
| [<!-- INCLUDE #WebSocketServerClass.handler.Syntax -->](#handler)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.handler.Summary -->             |
| [<!-- INCLUDE #WebSocketServerClass.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.path.Summary -->                      |
| [<!-- INCLUDE #WebSocketServerClass.terminate().Syntax -->](#terminate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.terminate().Summary -->   |
| [<!-- INCLUDE #WebSocketServerClass.terminated.Syntax -->](#terminated)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketServerClass.terminated.Summary -->    |

## 4D.WebSocketServer.new()

<!-- REF #4D.WebSocketServer.new().Syntax -->**4D.WebSocketServer.new**( *WSSHandler* : Object { ; *options* : Object } ) : 4D.WebSocketServer<!-- END REF -->

<!-- REF #4D.WebSocketServer.new().Params -->

| Parâmetro                           | Tipo               |     | Descrição                                                                                |                  |
| ----------------------------------- | ------------------ | :-: | ---------------------------------------------------------------------------------------- | ---------------- |
| [WSSHandler](#wsshandler-parameter) | Object             |  -> | Objecto da classe de utilizador que declara as chamadas de retorno do servidor WebSocket |                  |
| [options](#options-parameter)       | Object             |  -> | Parâmetros de configuração do WebSocket                                                  |                  |
| Resultados                          | 4D.WebSocketServer |  <- | Novo objeto WebSocketServer                                                              | <!-- END REF --> |

The `4D.WebSocketServer.new()` function <!-- REF #4D.WebSocketServer.new().Summary -->creates and starts a WebSocket server that will use the specified _WSSHandler_ callbacks and (optionally) _options_, and returns a `4D.WebSocketServer` object<!-- END REF -->.

Calling this function requires that the [4D Web Server](WebServerClass.md) is started. The **host** and **port** of the WebSocket server are the same as the host and port of the 4D Web Server.

### Parâmetro _WSSHandler_

In the _WSSHandler_ parameter, pass an instance of a user class that will be called every time an event occurs on the WebSocket server --essentially, connection events. The class should define the following callback functions (only `onConnection` is mandatory):

| Propriedade  | Tipo                         | Descrição                                                                                   | Por padrão |
| ------------ | ---------------------------- | ------------------------------------------------------------------------------------------- | ---------- |
| onConnection | [Function](FunctionClass.md) | (obrigatório) Chamada de retorno quando é iniciada uma nova ligação de cliente (ver abaixo) | indefinido |
| onOpen       | [Function](FunctionClass.md) | Callback quando o servidor WebSocket é iniciado (ver abaixo)                                | indefinido |
| onTerminate  | [Function](FunctionClass.md) | Callback quando o servidor WebSocket é terminado (ver abaixo)                               | indefinido |
| onError      | [Function](FunctionClass.md) | Callback quando ocorre um erro (ver abaixo)                                                 | indefinido |

**WSHandler.onConnection**(_WSServer_ : Object ; _event_ : Object) : Object | null

| Parâmetro |         | Tipo               |     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------- | ------- | ------------------ | :-: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| WSServer  |         | 4D.WebSocketServer |  <- | Objecto actual do servidor WebSocket                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| "event"   |         | Object             |  <- | Parâmetros                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|           | type    | Text               |     | "connection"                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|           | request | Object             |     | objeto `request`. Contém informações sobre o pedido de ligação (ver abaixo)                                                                                                                                                                                                                                                                                                                                                                                                    |
| Resultado |         | Object             |  -> | [`connectionHandler` object](#connectionhandler-object) (see below). If this function returns a `connectionHandler` object, a [`4D.WebSocketConnection` object](WebSocketConnectionClass.md#websocketconnection-object) is automatically created and added to the [collection of connections](#connections). This object is then received as parameter in each function of the `connectionHandler` object. Se o valor devolvido for nulo ou indefinido, a ligação é cancelada. |

Esta chamada de retorno é feita quando o handshake estiver concluído. It must be called with a valid [`connectionHandler` object](#connectionhandler-object) to create the WebSocket connection, otherwise the connection is cancelled.

**WSHandler.onOpen**(_WSServer_ : Object ; _event_ : Object)

| Parâmetro |      | Tipo               |     | Descrição                            |
| --------- | ---- | ------------------ | :-: | ------------------------------------ |
| WSServer  |      | 4D.WebSocketServer |  <- | Objecto actual do servidor WebSocket |
| "event"   |      | Object             |  <- | Parâmetros                           |
|           | type | Text               |     | "open"                               |

Evento emitido quando o servidor websocket é iniciado.

**WSHandler.onTerminate**(_WSServer_ : Object ; _event_ : Object)

| Parâmetro |      | Tipo               |     | Descrição                            |
| --------- | ---- | ------------------ | :-: | ------------------------------------ |
| WSServer  |      | 4D.WebSocketServer |  <- | Objecto actual do servidor WebSocket |
| "event"   |      | Object             |  <- | Parâmetros                           |
|           | type | Text               |     | "terminate"                          |

Evento emitido quando o servidor HTTP ou o servidor WebSocket é encerrado.

**WSHandler.onError**(_WSServer_ : Object ; _event_ : Object)

| Parâmetro |        | Tipo               |     | Descrição                                                                                                                                                                                                                                                           |
| --------- | ------ | ------------------ | :-: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer  |        | 4D.WebSocketServer |  <- | Objecto actual do servidor WebSocket                                                                                                                                                                                                                                |
| "event"   |        | Object             |  <- | Parâmetros                                                                                                                                                                                                                                                          |
|           | type   | Text               |     | "error"                                                                                                                                                                                                                                                             |
|           | errors | Collection         |     | Collection of 4D error stack in case of execution error<li>\[].errCode (number) -  4D error code</li><li>\[].message (text) - Description of the 4D error</li><li>\[].componentSignature (text) - Signature of the internal component which returned the error</li> |

Evento emitido quando ocorre um erro no servidor WebSocket.

### Exemplo de classe `WSSHandler`

This example of a basic chat feature illustrates how to handle WebSocket server connections in a _WSSHandler_ class.

```4d
//myWSServerHandler class 

Function onConnection($wss : Object; $event : Object) : Object

	If (VerifyAddress($event.request.remoteAddress))
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

Function onOpen($wss : Object; $event : Object)
LogFile("*** Server started")

Function onTerminate($wss : Object; $event : Object)
LogFile("*** Server closed")

Function onError($wss : Object; $event : Object)
LogFile("!!! Server error: "+$event.errors.first().message)

```

### objeto `request`

Um objeto `request` contém as seguintes propriedades:

| Parâmetro     | Tipo   | Descrição                                                                                                                                    |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| headers       | Object | O pedido HTTP GET do cliente. `headers.key=value` (value can be a collection if the same key appears multiple times)                         |
| query         | Object | Objecto que contém os parâmetros URL. For example, if parameters are: `?key1=value1&key2=value2` -> `query.key1=value1`, `query.key2=value2` |
| url           | Text   | contém apenas o URL que está presente no pedido HTTP efectivo. Ex: `GET /status?name=ryan HTTP/1.1` -> url="/status?name=ryan"               |
| remoteAddress | Text   | Endereço IP do cliente                                                                                                                       |

### objeto `connectionHandler`

As a result of the `WSHandler.onConnection` callback, pass a `connectionHandler` object, which is an instance of a user class that will be called every time an event occurs in the WebSocket connection --essentially, messages received. The class should define the following callback functions (only `onMessage` is mandatory):

| Parâmetro   | Tipo                         | Descrição                                                                      |
| ----------- | ---------------------------- | ------------------------------------------------------------------------------ |
| onMessage   | [Function](FunctionClass.md) | (obrigatório) Função chamada quando é recebida uma nova mensagem desta ligação |
| onOpen      | [Function](FunctionClass.md) | Function called when the `4D.WebSocketConnection` is created                   |
| onTerminate | [Function](FunctionClass.md) | Função chamada quando esta ligação é terminada                                 |
| onError     | [Function](FunctionClass.md) | Função chamada quando ocorre um erro                                           |

**connectionHandler.onMessage**(_ws_ : 4D.WebSocketConnection ; _event_ : Object)

| Parâmetro |      | Tipo                                                    |     | Descrição                           |
| --------- | ---- | ------------------------------------------------------- | :-: | ----------------------------------- |
| ws        |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |  <- | Objecto de ligação WebSocket actual |
| "event"   |      | Object                                                  |  <- | Parâmetros                          |
|           | type | Text                                                    |     | "message"                           |
|           | data | Text / Blob / Object                                    |     | dados enviados pelo cliente         |

Este Callback para dados WebSocket. Chamado sempre que o WebSocket recebe dados.

**connectionHandler.onOpen**(_ws_ : 4D.WebSocketConnection ; _event_ : Object)

| Parâmetro |      | Tipo                                                    |     | Descrição                           |
| --------- | ---- | ------------------------------------------------------- | :-: | ----------------------------------- |
| ws        |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |  <- | Objecto de ligação WebSocket actual |
| "event"   |      | Object                                                  |  <- | Parâmetros                          |
|           | type | Text                                                    |     | "open"                              |

Called when the `connectionHandler` object is created (after `WSS.onConnection` event).

**connectionHandler.onTerminate**(_ws_ : 4D.WebSocketConnection ; _event_ : Object)

| Parâmetro |        | Tipo                                                    |     | Descrição                                                                                                                                                                                            |
| --------- | ------ | ------------------------------------------------------- | :-: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ws        |        | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |  <- | Objecto de ligação WebSocket actual                                                                                                                                                                  |
| "event"   |        | Object                                                  |  <- | Parâmetros                                                                                                                                                                                           |
|           | type   | Text                                                    |     | "terminate"                                                                                                                                                                                          |
|           | code   | Number                                                  |     | Código de estado que indica o motivo pelo qual a ligação foi encerrada. If the WebSocket does not return an error code, `code` is set to 1005 if no error occurred or to 1006 if there was an error. |
|           | reason | Text                                                    |     | Cadeia de caracteres que explica porque é que a ligação foi encerrada. Se o websocket não devolver um motivo, o código é indefinido                                                                  |

Função chamada quando o WebSocket é fechado.

**connectionHandler.onError**(_ws_ : 4D.WebSocketConnection ; _event_ : Object)

| Parâmetro |        |            | Tipo                                                    |                                                                                                                                                                                                                                                                      | Descrição                           |
| --------- | ------ | ---------- | ------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ----------------------------------- |
| ws        |        |            | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |                                                                                                                                  <-                                                                                                                                  | Objecto de ligação WebSocket actual |
| "event"   |        |            | Object                                                  |                                                                                                                                  <-                                                                                                                                  | Parâmetros                          |
|           | type   |            | Text                                                    |                                                                                                                                                                                                                                                                      | "error"                             |
|           | errors | Collection |                                                         | Collection of 4D errors stack in case of execution error<li>\[].errCode (number) -  4D error code</li><li>\[].message (text) - Description of the 4D error</li><li>\[].componentSignature (text) - Signature of the internal component which returned the error</li> |                                     |

Função chamada quando ocorre um erro.

### Exemplo de classe `connectionHandler`

This example of a basic chat feature illustrates how to handle messages in a _connectionHandler_ class.

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

### Parâmetro _options_

In the optional _options_ parameter, pass an object that contains the following properties:

| Propriedade | Tipo | Descrição                                                                                                                                                                                                                                                                                                                                | Por padrão |
| ----------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| path        | Text | Representa o caminho para aceder ao servidor WebSocket. Se não for definido um caminho, o servidor WebSocket gere todas as ligações                                                                                                                                                                                                      | indefinido |
| dataType    | Text | Type of the data received through the `connectionHandler.onMessage` and the data send by [`WebSocketConnection.send()`](WebSocketConnectionClass.md#send) function. Values: "text", "blob","object"). Se "object": (enviar) transforma o objecto num formato json e envia-o; (recepção): recebe o formato json e transforma-o em objecto | text       |

<!-- REF #WebSocketServerClass.connections.Desc -->

## .connections

<!-- REF #WebSocketServerClass.connections.Syntax -->**.connections** : Collection<!-- END REF -->

#### Descrição

The `.connections` property contains <!-- REF #WebSocketServerClass.connections.Summary -->all current connections handled by the WebSocket server<!-- END REF -->. Each element of the collection is a [`WebSocketConnection` object](WebSocketConnectionClass.md).

When a connection is terminated, its [`status`](WebSocketConnectionClass.md#status) changes to "Closed" and it is removed from this collection.

<!-- END REF -->

<!-- REF #WebSocketServerClass.dataType.Desc -->

## .dataType

<!-- REF #WebSocketServerClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Descrição

The `.dataType` property contains <!-- REF #WebSocketServerClass.dataType.Summary -->the type of the data received or sent<!-- END REF -->.

Esta propriedade é só de leitura.

<!-- END REF -->

<!-- REF #WebSocketServerClass.handler.Desc -->

## .handler

<!-- REF #WebSocketServerClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Descrição

The `.handler` property contains <!-- REF #WebSocketServerClass.handler.Summary -->the accessor that gets the `WSSHandler` object used to initiate the WebSocket server<!-- END REF -->.

<!-- END REF -->

<!-- REF #WebSocketServerClass.path.Desc -->

## .path

<!-- REF #WebSocketServerClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descrição

The `.path` property contains <!-- REF #WebSocketServerClass.path.Summary -->the pattern of the path to access the WebSocket server<!-- END REF -->. Se não for definido um caminho, o servidor WebSocket gere todas as ligações.

Esta propriedade é só de leitura.

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketServerClass.terminate().Syntax -->**.terminate()**<!-- END REF -->

<!-- REF #WebSocketServerClass.terminate().Params -->

| Parâmetro | Tipo |     | Descrição                  |                  |
| --------- | ---- | :-: | -------------------------- | ---------------- |
|           |      |     | Não exige nenhum parâmetro | <!-- END REF --> |

#### Descrição

The `.terminate()` function <!-- REF #WebSocketServerClass.terminate().Summary -->closes the WebSocket server<!-- END REF -->.

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminated.Desc -->

## .terminated

<!-- REF #WebSocketServerClass.terminated.Syntax -->**.terminated** : Boolean<!-- END REF -->

#### Descrição

The `.terminated` property contains <!-- REF #WebSocketServerClass.terminated.Summary -->True if the WebSocket server is closed<!-- END REF -->.

Esta propriedade é só de leitura.

<!-- END REF -->
