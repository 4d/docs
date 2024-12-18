---
id: WebSocketClass
title: WebSocket
---

The `WebSocket` class allows you to open a WebSocket client connection with a server, send and receive data, and close the connection.

As ligações cliente WebSocket são úteis, por exemplo, para receber dados financeiros em tempo real ou enviar e receber mensagens de um chat.

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R2   | Adicionado |

</details>

### Exemplo

Neste exemplo, criamos um cliente WebSocket muito básico.

1. Create the `WSConnectionHandler` user class containing callback function(s) used to handle WebSocket event callbacks:

```4d
// WSConnectionHandler class

Class constructor

Function onMessage($ws : 4D.WebSocket; $event : Object)
   ALERT($event.data)

Function onTerminate($ws : 4D.WebSocket; $event : Object)
   ALERT("Connection closed")
```

2. Conecte-se ao servidor WebSocket a partir de um formulário 4D instanciando um 4D.WebSocket:

```4d
Form.webSocket:=4D.WebSocket.new($wssUrl; cs.WSConnectionHandler.new())
```

3. Para enviar mensagens para o servidor WebSocket a partir do formulário 4D, pode escrever:

```4d
Form.webSocket.send("Hello world")

```

### Objeto WebSocket

Os objetos WebSocket fornecem as seguintes propriedades e funções:

|                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketClass.dataType.Syntax -->](#dataType)<br/><!-- INCLUDE #WebSocketClass.dataType.Summary -->        |
| [<!-- INCLUDE #WebSocketClass.handler.Syntax -->](#handler)<br/><!-- INCLUDE #WebSocketClass.handler.Summary -->           |
| [<!-- INCLUDE #WebSocketClass.id.Syntax -->](#id)<br/><!-- INCLUDE #WebSocketClass.id.Summary -->                          |
| [<!-- INCLUDE #WebSocketClass.send().Syntax -->](#send)<br/><!-- INCLUDE #WebSocketClass.send().Summary -->                |
| [<!-- INCLUDE #WebSocketClass.status.Syntax -->](#status)<br/><!-- INCLUDE #WebSocketClass.status.Summary -->              |
| [<!-- INCLUDE #WebSocketClass.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #WebSocketClass.terminate().Summary --> |
| [<!-- INCLUDE #WebSocketClass.url.Syntax -->](#url)<br/><!-- INCLUDE #WebSocketClass.url.Summary -->                       |

## 4D.WebSocket.new()

<details><summary>História</summary>

| Release | Mudanças                                                |
| ------- | ------------------------------------------------------- |
| 20 R3   | Suporte da propriedade `headers` em *connectionHandler* |

</details>

<!-- REF #4D.WebSocket.new().Syntax -->**4D.WebSocket.new**( *url* : Text { ; *connectionHandler* : Object } ) : 4D.WebSocket<!-- END REF -->

<!-- REF #4D.WebSocket.new().Params -->

| Parâmetro                                         | Tipo                         |                             | Descrição                                           |
| ------------------------------------------------- | ---------------------------- | :-------------------------: | --------------------------------------------------- |
| url                                               | Text                         |              ->             | URL a que se deve ligar                             |
| [connectionHandler](#connectionHandler-parameter) | Object                       |              ->             | Objeto que declara as chamadas de retorno WebSocket |
| Resultados                                        | 4D.WebSocket | <- | Novo [objeto WebSocket](#websocket-object)          |

<!-- END REF -->

The `4D.WebSocket.new()` function <!-- REF #4D.WebSocket.new().Summary -->creates and returns a new [`4D.WebSocket` object](#websocket-object) connected to the WebSocket server at the address you passed in *url*<!-- END REF -->. The `4D.WebSocket` object provides an API for creating and managing a WebSocket connection to a server, as well as sending and receiving data to and from the server.

Em *url*, passe o URL ao qual o servidor WebSocket responderá. Podem ser utilizados os seguintes padrões de URL:

- `ws://host[:port]path[?query]` para ligações padrão
- `wss://host[:port]path[?query]` para conexões TLS seguras

If the connection is not possible, a `null` object is returned and an error is generated (that you can intercept using a method installed with `ON ERR CALL`).

### Parâmetro *connectionHandler*

In *connectionHandler*, you can pass an object containing callback functions to be called according to connection events, as well as data type and headers to handle.

- As chamadas de retorno são chamadas automaticamente no contexto do formulário ou do worker que inicia a ligação.
- O WebSocket será válido enquanto o formulário ou o worker não for fechado.

| Propriedade | Tipo                         | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | Função de retorno de chamada para dados WebSocket. Chamado sempre que o WebSocket tiver recebido dados. The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.type` (text): always "message"</li><li>`$2.data` (text, blob, or object, see `dataType`): Received data</li></ul>                                                                                                                                                                                                                                                            |
| onError     | [Function](FunctionClass.md) | Função de retorno de chamada para erros de execução. The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.type` (text): always "error"</li><li>`$2.errors`: collection of 4D errors stack in case of execution error.<ul><li>`[].errCode` (number): 4D error code</li><li>`[].message` (text): Description of the 4D error</li><li>`[].componentSignature` (text): Signature of the internal component which returned the error</li></ul></li></ul> |
| onTerminate | [Function](FunctionClass.md) | Função de retorno de chamada quando o WebSocket é terminado. The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.code` (number, read-only): unsigned short containing the close code sent by the server.</li><li>`$2.reason` (text, read-only): Reason why the server closed the connection. Isto é específico do servidor e do subprotocolo em causa.</li></ul>                                                                                                                                         |
| onOpen      | [Function](FunctionClass.md) | Função de retorno de chamada quando o websocket está aberto. The callback receives the following parameters:<li>`$1`: WebSocket object</li><li>`$2`: Object</li><ul><li>`$2.type` (text): always "open"</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| dataType    | Text                         | Tipo de dados recebidos ou enviados. Valores disponíveis: "text" (padrão), "blob", "object". "text" = utf-8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| headers     | Object                       | Headers of the WebSocket.<li>Syntax for standard key assignment: `headers.*key*:=*value*` (*value* can be a Collection if the same key appears multiple times)</li><li>Syntax for Cookie assignment (particular case): `headers.Cookie:="*name*=*value* {; *name2*=*value2*{; ... } }"`</li>                                                                                                                                                                                                                                                                                                                                                                        |

Aqui está a sequência de chamadas de retorno:

1. `onOpen` é executado uma vez
2. São executados zero ou vários `onMessage`
3. Zero ou um `onError` é executado (pára o processamento)
4. `onTerminate` é sempre executado uma vez

#### Exemplo

You want to set headers in the `WSConnectionHandler` user class:

```4d
// WSConnectionHandler class

Class constructor($myToken:Text)

// Creation of the headers sent to the server
This.headers:=New object("x-authorization";$myToken)
// We define two cookies
This.headers.Cookie:="yummy_cookie=choco; tasty_cookie=strawberry"
...

```

<!-- REF #WebSocketClass.dataType.Desc -->

## .dataType

<!-- REF #WebSocketClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Descrição

The `.dataType` property contains <!-- REF #WebSocketClass.dataType.Summary -->the type of the response body content<!-- END REF -->. Pode ser "text", "blob" ou "object".

Esta propriedade é só de leitura.

<!-- END REF -->

<!-- REF #WebSocketClass.handler.Desc -->

## .handler

<!-- REF #WebSocketClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Descrição

The `.handler` property contains <!-- REF #WebSocketClass.handler.Summary -->the accessor that gets the `connectionHandler` object used to initiate the connection<!-- END REF -->.

Esta propriedade é só de leitura.

<!-- END REF -->

<!-- REF #WebSocketClass.id.Desc -->

## .id

<!-- REF #WebSocketClass.id.Syntax -->**.id** : Integer<!-- END REF -->

#### Descrição

The `.id` property contains <!-- REF #WebSocketClass.id.Summary -->the unique identifier of the connection<!-- END REF -->.

Esta propriedade é só de leitura.

<!-- END REF -->

<!-- REF #WebSocketClass.send().Desc -->

## .send()

<!-- REF #WebSocketClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )<br/>**.send**( *message* : Object )<!-- END REF -->

<!-- REF #WebSocketClass.send().Params -->

| Parâmetro | Tipo               |     | Descrição         |
| --------- | ------------------ | :-: | ----------------- |
| message   | Text, Blob, Object |  -> | Mensagem a enviar |

<!-- END REF -->

#### Descrição

The `.send()` function <!-- REF #WebSocketClass.send().Summary -->sends *message* to the WebSocket server in the defined data type (Text, Blob, or Object)<!-- END REF -->.

Os conteúdos seguintes são enviados em função do tipo de *message*:

| Tipo   | Conteúdo                                                                                                                                      |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Text   | Texto em UTF-8                                                                                                                                |
| Blob   | Dados binários                                                                                                                                |
| Object | Texto em JSON UTF-8 (o mesmo resultado que com [`JSON Stringify`](https://doc.4d.com/4dv20/help/command/en/page1217.html)) |

<!-- END REF -->

<!-- REF #WebSocketClass.status.Desc -->

## .status

<!-- REF #WebSocketClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### Descrição

The `.status` property contains <!-- REF #WebSocketClass.status.Summary -->the current connection status (can be "Connecting", "Closing", "Closed", or "Connected")<!-- END REF -->.

Esta propriedade é só de leitura.

<!-- END REF -->

<!-- REF #WebSocketClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketClass.terminate().Syntax -->**.terminate**( { *code* : Integer { ; *reason* : Text } } )<!-- END REF -->

<!-- REF #WebSocketClass.terminate().Params -->

| Parâmetro | Tipo    |     | Descrição                                                                |
| --------- | ------- | :-: | ------------------------------------------------------------------------ |
| code      | Integer |  -> | Código de estado que explica porque é que a ligação está a ser encerrada |
| reason    | Text    |  -> | O motivo pelo qual a ligação está a fechar                               |

<!-- END REF -->

#### Descrição

The `.terminate()` function <!-- REF #WebSocketClass.terminate().Summary -->closes the WebSocket connection, along with optional *code* and *reason* parameters<!-- END REF -->.

In *code*, you can pass a status code explaining why the connection is being closed (see also [WebSocket Connection Close Code in the RFC6455](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5)):

- If unspecified, a close code for the connection is automatically set to 1000 for a normal closure, or otherwise to another standard value in the range 1001-1015 that indicates the actual reason the connection was closed.
- Se especificado, o valor desse parâmetro de código substitui a configuração automática. O valor deve ser um número inteiro. Ou 1000, ou um código personalizado no intervalo 3000-4999. Se você especificar um valor *code*, também deverá especificar um valor *reason*.

In *reason*, you can pass a string describing why the connection is being closed.

<!-- END REF -->

<!-- REF #WebSocketClass.url.Desc -->

## .url

<!-- REF #WebSocketClass.url.Syntax -->**.url** : Text<!-- END REF -->

#### Descrição

The `.url` property contains <!-- REF #WebSocketClass.url.Summary -->the URL to which the WebSocket has connected<!-- END REF -->. É o URL que você passou para a função [`new()`](#4dwebsocketnew).

Esta propriedade é só de leitura.

<!-- END REF -->
