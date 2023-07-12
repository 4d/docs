---
id: WebSocketClass
title: WebSocket
---

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v20 R2 | Adicionado |

</details>


The `WebSocket` class allows you to open a WebSocket client connection with a server, send and receive data, and close the connection.

WebSocket client connections are useful, for example, to receive financial data in real time or send and receive messages from a chat.

### Exemplo

In this example, we create a very basic WebSocket client.

1. Create the `WSConnectionHandler` user class containing callback function(s) used to handle WebSocket event callbacks:

```4d
// WSConnectionHandler class

Class constructor

Function onMessage($ws : 4D.WebSocket; $event : Object)
   ALERT($event.data)

Function onTerminate($ws : 4D.WebSocket; $event : Object)
   ALERT("Connection closed")
```

2. Connect to the WebSocket server from a 4D form by instantiating a 4D.WebSocket:

```4d
Form.webSocket:=4D.WebSocket.new($wssUrl; cs.WSConnectionHandler.new())
```

3. To send messages to the WebSocket server from the 4D form, you can write:

```4d
Form.webSocket.send("Hello world")

```




### Objeto WebSocket

WebSocket objects provide the following properties and functions:

|                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketClass.dataType.Syntax -->](#dataType)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.dataType.Summary -->|
| [<!-- INCLUDE #WebSocketClass.handler.Syntax -->](#handler)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.handler.Summary -->|
| [<!-- INCLUDE #WebSocketClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.id.Summary -->|
| [<!-- INCLUDE #WebSocketClass.send().Syntax -->](#send)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.send().Summary -->|
| [<!-- INCLUDE #WebSocketClass.status.Syntax -->](#status)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.status.Summary -->|
| [<!-- INCLUDE #WebSocketClass.terminate().Syntax -->](#terminate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.terminate().Summary -->|
| [<!-- INCLUDE #WebSocketClass.url.Syntax -->](#url)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketClass.url.Summary -->|



## 4D.WebSocket.new()


<!-- REF #4D.WebSocket.new().Syntax -->**4D.WebSocket.new**( *url* : Text { ; *connectionHandler* : Object } ) : 4D.WebSocket<!-- END REF -->


<!-- REF #4D.WebSocket.new().Params -->
| Parâmetro                                         | Tipo         |    | Descrição                                                            |
| ------------------------------------------------- | ------------ |:--:| -------------------------------------------------------------------- |
| url                                               | Text         | -> | URL to which to connect                                              |
| [connectionHandler](#connectionHandler-parameter) | Object       | -> | Object declaring WebSocket callbacks                                 |
| Resultados                                        | 4D.WebSocket | <- | New [WebSocket object](#websocket-object)|<!-- END REF -->


|


A função `4D.WebSocket.new()` <!-- REF #4D.WebSocket.new().Summary -->creates and returns a new [`4D.WebSocket` object](#websocket-object) connected to the WebSocket server at the address you passed in *url*<!-- END REF -->. The `4D.WebSocket` object provides an API for creating and managing a WebSocket connection to a server, as well as sending and receiving data to and from the server.

In *url*, pass the URL to which the WebSocket server will respond. Podem ser utilizados os seguintes padrões de URL:

- `ws://host[:port]path[?query]` para ligações padrão
- `wss://host[:port]path[?query]` para ligações protegidas por TLS

If the connection is not possible, a `null` object is returned and an error is generated (that you can intercept using a method installed with `ON ERR CALL`).


### Parâmetro *connectionHandler*

In *connectionHandler*, you can pass an object containing callback functions to be called according to connection events, and data type to handle.

- Callbacks are automatically called in the context of the form or worker that initiates the connection.
- The lifetime of the WebSocket must be at least the same as the lifetime of the form or worker.

| Propriedade | Tipo                         | Descrição                                                                                                                                                                                                               |
| ----------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | Callback function for WebSocket data. Called each time the WebSocket has received data. A chamada de retorno recebe os seguintes parâmetros:<li>`$1`: Objeto WebSocket</li><li>`$2`: Object</li><ul><li>`$2.type` (text): sempre "message"</li><li>`$2.data` (text, blob, or object, see `dataType`): Received data</li></ul> |
| onError     | [Function](FunctionClass.md) | Função de retorno de chamada para erros de execução. A chamada de retorno recebe os seguintes parâmetros:<li>`$1`: Objeto WebSocket</li><li>`$2`: Object</li><ul><li>`$2.type` (text): sempre "error"</li><li>`$2.errors`: collection of 4D errors stack in case of execution error.<ul><li>`[].errCode` (number): 4D error code</li><li>`[].message` (text): Descrição do erro 4D</li><li>`[].componentSignature` (text): Signature of the internal component which returned the error</li></ul></li></ul>                                    |
| onTerminate | [Function](FunctionClass.md) | Callback function when the WebSocket is terminated. A chamada de retorno recebe os seguintes parâmetros:<li>`$1`: Objeto WebSocket</li><li>`$2`: Object</li><ul><li>`$2.code` (number, read-only): unsigned short containing the close code sent by the server.</li><li>`$2.reason` (text, read-only): Reason why the server closed the connection. This is specific to the particular server and sub-protocol.</li><li>`$2.wasClean` (boolean, read-only): Indicates whether or not the connection was cleanly closed.</li></ul>                                     |
| onOpen      | [Function](FunctionClass.md) | Função de retorno de chamada quando o websocket está aberto. A chamada de retorno recebe os seguintes parâmetros:<li>`$1`: Objeto WebSocket</li><li>`$2`: Object</li><ul><li>`$2.type` (texto): sempre "open"</li></ul>                         |
| dataType    | Text                         | Type of the data received or sent. Available values: "text" (default), "blob", "object". "text" = utf-8                                                                                                                 |

Aqui está a sequência de chamadas de retorno:

1. `onOpen` is executed once
2. Zero or several `onMessage` are executed
3. Zero or one `onError` is executed (stops the processing)
4. `onTerminate` é sempre executado


#### Exemplo


<!-- REF #WebSocketClass.dataType.Desc -->
## .dataType

<!-- REF #WebSocketClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Descrição

A propriedade `.dataType` contém <!-- REF #WebSocketClass.dataType.Summary -->the type of the response body content<!-- END REF -->. It can be "text", "blob", or "object".

Esta propriedade é só de leitura.
<!-- END REF -->

<!-- REF #WebSocketClass.handler.Desc -->
## .handler

<!-- REF #WebSocketClass.handler.Syntax -->**.handler** : Objecto<!-- END REF -->

#### Descrição

The `.handler` property contains <!-- REF #WebSocketClass.handler.Summary -->o acessor que obtém o objecto `connectionHandler` utilizado para iniciar a ligação<!-- END REF -->.

Esta propriedade é só de leitura.

<!-- END REF -->

<!-- REF #WebSocketClass.id.Desc -->
## .id

<!-- REF #WebSocketClass.id.Syntax -->**.id** : Longint<!-- END REF -->

#### Descrição

A propriedade `.id` contém <!-- REF #WebSocketClass.id.Summary -->o identificador único da ligação<!-- END REF -->.

Esta propriedade é só de leitura.
<!-- END REF -->




<!-- REF #WebSocketClass.send().Desc -->
## .send()

<!-- REF #WebSocketClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )<br/>**.send**( *message* : Object )<!-- END REF -->


<!-- REF #WebSocketClass.send().Params -->
| Parâmetro | Tipo               |    | Descrição         |
| --------- | ------------------ |:--:| ----------------- |
| message   | Text, Blob, Object | -> | Mensagem a enviar |
<!-- END REF -->


#### Descrição

A função `.send()` <!-- REF #WebSocketClass.send().Summary -->envia *message* para o servidor WebSocket no tipo de dados definido (Text, Blob ou Object)<!-- END REF -->.

Os conteúdos seguintes são enviados em função do tipo de *mensagem*:

| Tipo   | Conteúdo                                                                                                                    |
| ------ | --------------------------------------------------------------------------------------------------------------------------- |
| Text   | Texto em UTF-8                                                                                                              |
| Blob   | Dados binários                                                                                                              |
| Object | Texto em JSON UTF-8 (o mesmo resultado que com [`JSON Stringify`](https://doc.4d.com/4dv19R/help/command/en/page1217.html)) |


<!-- END REF -->



<!-- REF #WebSocketClass.status.Desc -->
## .status

<!-- REF #WebSocketClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### Descrição

A propriedade `.status` contém <!-- REF #WebSocketClass.status.Summary -->o estado atual da ligação (pode ser "Connecting", "Closing", "Closed" ou "Connected")<!-- END REF -->.

Esta propriedade é só de leitura.

<!-- END REF -->


<!-- REF #WebSocketClass.terminate().Desc -->
## .terminate()

<!-- REF #WebSocketClass.terminate().Syntax -->**.terminate**( { *code* : Integer { ; *reason* : Text } } )<!-- END REF -->


<!-- REF #WebSocketClass.terminate().Params -->
| Parâmetro | Tipo    |    | Descrição                                                                |
| --------- | ------- |:--:| ------------------------------------------------------------------------ |
| code      | Integer | -> | Código de estado que explica porque é que a ligação está a ser encerrada |
| reason    | Text    | -> | O motivo pelo qual a ligação está a fechar|<!-- END REF -->



|



#### Descrição

A função `.terminate()` <!-- REF #WebSocketClass.terminate().Summary -->closes the WebSocket connection, along with optional *code* and *reason* parameters<!-- END REF -->.

In *code*, you can pass a status code explaining why the connection is being closed (see also [WebSocket Connection Close Code in the RFC6455](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5)):

- If unspecified, a close code for the connection is automatically set to 1000 for a normal closure, or otherwise to another standard value in the range 1001-1015 that indicates the actual reason the connection was closed.
- If specified, the value of this code parameter overrides the automatic setting. The value must be an integer. Either 1000, or a custom code in the range 3000-4999. If you specify a *code* value, you should also specify a *reason* value.

In *reason*, you can pass a string describing why the connection is being closed. 


<!-- END REF -->


<!-- REF #WebSocketClass.url.Desc -->
## .url

<!-- REF #WebSocketClass.url.Syntax -->**.url** : Text<!-- END REF -->

#### Descrição

A propriedade `.url` contém <!-- REF #WebSocketClass.connections.Summary -->o URL ao qual o WebSocket se ligou<!-- END REF -->. É o URL que passou para a função [`new()`](#4dwebsocketnew).

Esta propriedade é só de leitura.

<!-- END REF -->






