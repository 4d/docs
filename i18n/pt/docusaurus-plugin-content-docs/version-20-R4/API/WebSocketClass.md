---
id: WebSocketClass
title: WebSocket
---




A classe `WebSocket` permite-lhe abrir uma ligação de cliente WebSocket com um servidor, enviar e receber dados e fechar a ligação.

As ligações cliente WebSocket são úteis, por exemplo, para receber dados financeiros em tempo real ou enviar e receber mensagens de um chat.


<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R2   | Adicionado |

</details>


### Exemplo

Neste exemplo, criamos um cliente WebSocket muito básico.

1. Criar a classe usuário `WSConnectionHandler` que contém as funções de retorno de chamada utilizadas para tratar os retornos de chamada de eventos WebSocket:

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

<details><summary>Histórico</summary>

| Release | Mudanças                                                |
| ------- | ------------------------------------------------------- |
| 20 R3   | Suporte da propriedade `headers` em *connectionHandler* |

</details>


<!-- REF #4D.WebSocket.new().Syntax -->**4D.WebSocket.new**( *url* : Text { ; *connectionHandler* : Object } ) : 4D.WebSocket<!-- END REF -->


<!-- REF #4D.WebSocket.new().Params -->
| Parâmetro                                         | Tipo         |    | Descrição                                           |
| ------------------------------------------------- | ------------ |:--:| --------------------------------------------------- |
| url                                               | Text         | -> | URL a que se deve ligar                             |
| [connectionHandler](#connectionHandler-parameter) | Object       | -> | Objeto que declara as chamadas de retorno WebSocket |
| Resultados                                        | 4D.WebSocket | <- | New [WebSocket object](#websocket-object)           |
<!-- END REF -->


A função `4D.WebSocket.new()` <!-- REF #4D.WebSocket.new().Summary -->cria e devolve um novo objeto [`4D.WebSocket`](#websocket-object) ligado ao servidor WebSocket no endereço que passou em *url*<!-- END REF -->. O objeto `4D.WebSocket` fornece uma API para criar e gerir uma ligação WebSocket a um servidor, bem como para enviar e receber dados de e para o servidor.

Em *url*, passe o URL ao qual o servidor WebSocket responderá. Podem ser utilizados os seguintes padrões de URL:

- `ws://host[:port]path[?query]` para ligações padrão
- `wss://host[:port]path[?query]` para ligações protegidas por TLS

Se a ligação não for possível, é devolvido um objeto `null` sendo gerado um erro (que pode ser intersetado através de um método instalado com `ON ERR CALL`).


### Parâmetro *connectionHandler*

In *connectionHandler*, you can pass an object containing callback functions to be called according to connection events, as well as data type and headers to handle.

- As chamadas de retorno são chamadas automaticamente no contexto do formulário ou do worker que inicia a ligação.
- The WebSocket will be valid as long as the form or worker is not closed.

| Propriedade | Tipo                         | Descrição                                                                                                                                                                                                                               |
| ----------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | Função de retorno de chamada para dados WebSocket. Chamado sempre que o WebSocket tiver recebido dados. A chamada de retorno recebe os seguintes parâmetros:<li>`$1`: Objeto WebSocket</li><li>`$2`: Object</li><ul><li>`$2.type` (text): sempre "message"</li><li>`$2.data` (texto, blob, ou objeto, ver `dataType`): Dados recebidos</li></ul> |
| onError     | [Function](FunctionClass.md) | Função de retorno de chamada para erros de execução. A chamada de retorno recebe os seguintes parâmetros:<li>`$1`: Objeto WebSocket</li><li>`$2`: Object</li><ul><li>`$2.type` (text): sempre "error"</li><li>`$2.errors`: coleção de pilha de erros 4D em caso de erro de execução.<ul><li>`[].errCode` (number): Código de erro 4D</li><li>`[].message` (text): Descrição do erro 4D</li><li>`[].componentSignature` (text): Assinatura do componente interno que retornou o erro</li></ul></li></ul>                                                    |
| onTerminate | [Function](FunctionClass.md) | Função de retorno de chamada quando o WebSocket é terminado. A chamada de retorno recebe os seguintes parâmetros:<li>`$1`: Objeto WebSocket</li><li>`$2`: Object</li><ul><li>`$2.code` (number, só de leitura): curto sem sinal que contém o código de fecho enviado pelo servidor.</li><li>`$2.reason` (text, só de leitura): Motivo pelo qual o servidor fechou a conexão. Isto é específico do servidor e do subprotocolo em causa.</li></ul>                                           |
| onOpen      | [Function](FunctionClass.md) | Função de retorno de chamada quando o websocket está aberto. A chamada de retorno recebe os seguintes parâmetros:<li>`$1`: Objeto WebSocket</li><li>`$2`: Object</li><ul><li>`$2.type` (texto): sempre "open"</li></ul>                                         |
| dataType    | Text                         | Tipo de dados recebidos ou enviados. Valores disponíveis: "text" (padrão), "blob", "object". "text" = utf-8                                                                                                                             |
| headers     | Object                       | Cabeçalhos do WebSocket.<li>Syntax for standard key assignment: `headers.*key*:=*value*` (*value* can be a Collection if the same key appears multiple times)</li><li>Syntax for Cookie assignment (particular case): `headers.Cookie:="*name*=*value* {; *name2*=*value2*{; ... } }"`</li>                                                                                                                                                            |


Aqui está a sequência de chamadas de retorno:

1. `onOpen` é executado uma vez
2. São executados zero ou vários `onMessage`
3. Zero ou um `onError` é executado (pára o processamento)
4. `onTerminate` é sempre executado


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

A propriedade `.dataType` contém <!-- REF #WebSocketClass.dataType.Summary -->o tipo de conteúdo do corpo da resposta<!-- END REF -->. Pode ser "text", "blob" ou "object".

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

| Tipo   | Conteúdo                                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------------------- |
| Text   | Texto em UTF-8                                                                                                      |
| Blob   | Dados binários                                                                                                      |
| Object | Texto em JSON UTF-8 (mesmo resultado de [`JSON Stringify`](https://doc.4d.com/4dv20/help/command/en/page1217.html)) |


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
| reason    | Text    | -> | O motivo pelo qual a ligação está a fechar                               |
<!-- END REF -->



#### Descrição

A função `.terminate()` <!-- REF #WebSocketClass.terminate().Summary -->fecha a ligação WebSocket, juntamente com os parâmetros opcionais *code* e *reason*<!-- END REF -->.

In *code*, you can pass a status code explaining why the connection is being closed (see also [WebSocket Connection Close Code in the RFC6455](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5)):

- If unspecified, a close code for the connection is automatically set to 1000 for a normal closure, or otherwise to another standard value in the range 1001-1015 that indicates the actual reason the connection was closed.
- Se especificado, o valor desse parâmetro de código substitui a configuração automática. O valor deve ser um número inteiro. Ou 1000, ou um código personalizado no intervalo 3000-4999. If you specify a *code* value, you should also specify a *reason* value.

In *reason*, you can pass a string describing why the connection is being closed.


<!-- END REF -->


<!-- REF #WebSocketClass.url.Desc -->
## .url

<!-- REF #WebSocketClass.url.Syntax -->**.url** : Text<!-- END REF -->

#### Descrição

A propriedade `.url` contém <!-- REF #WebSocketClass.url.Summary -->o URL ao qual o WebSocket se ligou<!-- END REF -->. É o URL que passou para a função [`new()`](#4dwebsocketnew).

Esta propriedade é só de leitura.

<!-- END REF -->
