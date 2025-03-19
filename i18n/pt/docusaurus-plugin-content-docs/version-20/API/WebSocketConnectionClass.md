---
id: WebSocketConnectionClass
title: WebSocketConnection
---

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

A API da classe `WebSocketConnection` permite-lhe tratar as ligações WebSocket, uma vez estabelecidas utilizando a classe [`WebSocketServer`](WebSocketServerClass.md).

:::info

Para uma visão geral e alguns exemplos da implementação do servidor WebSocket em 4D, consulte a classe [`WebSocketServer`](WebSocketServerClass.md).

:::


### Objecto WebSocketConnection

Um objeto `WebSocketConnection` é automaticamente criado quando a função de retorno de chamada [`WSHandler.onConnection`](WebSocketServerClass.md#wsshandler-parameter) do objecto [WebSocketServer](WebSocketServerClass.md#4dwebsocketservernew) devolve um objecto [`connectionHandler`](WebSocketServerClass.md#connectionhandler-object).

Os objectos Httprequest fornecem as seguintes propriedades e funções:

|                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketConnectionClass.handler.Syntax -->](#handler)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.handler.Summary -->|
| [<!-- INCLUDE #WebSocketConnectionClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.id.Summary -->|
| [<!-- INCLUDE #WebSocketConnectionClass.send().Syntax -->](#send)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.send().Summary -->|
| [<!-- INCLUDE #WebSocketConnectionClass.status.Syntax -->](#status)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.status.Summary -->|
| [<!-- INCLUDE #WebSocketConnectionClass.terminate().Syntax -->](#terminate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.terminate().Summary -->|
| [<!-- INCLUDE #WebSocketConnectionClass.wss.Syntax -->](#wss)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebSocketConnectionClass.wss.Summary -->|



<!-- REF #WebSocketConnectionClass.handler.Desc -->
## .handler

<!-- REF #WebSocketConnectionClass.handler.Syntax -->**.handler** : Objecto<!-- END REF -->

#### Descrição

The `.handler` property contains <!-- REF #WebSocketConnectionClass.handler.Summary -->o acessor que obtém o objecto `connectionHandler` utilizado para iniciar a ligação<!-- END REF -->.

<!-- END REF -->




<!-- REF #WebSocketConnectionClass.id.Desc -->
## .id

<!-- REF #WebSocketConnectionClass.id.Syntax -->**.id** : Integer<!-- END REF -->

#### Descrição

A propriedade `.id` contém <!-- REF #WebSocketConnectionClass.id.Summary -->o identificador único da ligação<!-- END REF -->.

Esta propriedade é só de leitura.
<!-- END REF -->


<!-- REF #WebSocketConnectionClass.send().Desc -->
## .send()

<!-- REF #WebSocketConnectionClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )<br/>**.send**( *message* : Object )<!-- END REF -->


<!-- REF #WebSocketConnectionClass.send().Params -->
| Parâmetro | Tipo                 |    | Descrição                                      |
| --------- | -------------------- |:--:| ---------------------------------------------- |
| message   | Text / Blob / Object | -> | A mensagem a enviar|<!-- END REF -->

|

#### Descrição

A função `.send()` <!-- REF #WebSocketConnectionClass.send().Summary -->envia uma *mensagem* ao cliente<!-- END REF -->.

Os conteúdos seguintes são enviados em função do tipo de *mensagem*:

| Tipo   | Conteúdo                                                                                                                    |
| ------ | --------------------------------------------------------------------------------------------------------------------------- |
| Text   | Texto em UTF-8                                                                                                              |
| Blob   | Dados binários                                                                                                              |
| Object | Texto em JSON UTF-8 (o mesmo resultado que com [`JSON Stringify`](https://doc.4d.com/4dv19R/help/command/en/page1217.html)) |

<!-- END REF -->




<!-- REF #WebSocketConnectionClass.status.Desc -->
## .status

<!-- REF #WebSocketConnectionClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### Descrição

A propriedade `.status` contém <!-- REF #WebSocketConnectionClass.status.Summary -->o estado da ligação (pode ser "Closing", "Closed" ou "Connected")<!-- END REF -->.

Esta propriedade é só de leitura.
<!-- END REF -->



<!-- REF #WebSocketConnectionClass.terminate().Desc -->
## .terminate()

<!-- REF #WebSocketConnectionClass.terminate().Syntax -->**.terminate**( { *code* : Integer ; *message* : Text } )<!-- END REF -->


<!-- REF #WebSocketConnectionClass.terminate().Params -->
| Parâmetro | Tipo    |    | Descrição                                                                                    |
| --------- | ------- |:--:| -------------------------------------------------------------------------------------------- |
| code      | Integer | -> | Código de erro enviado ao cliente (deve ser > 3000, caso contrário a mensagem não é enviada) |
| message   | Text    | -> | Mensagem de erro enviada ao cliente|<!-- END REF -->


|


#### Descrição

A função `.terminate()` <!-- REF #WebSocketConnectionClass.terminate().Summary -->força o encerramento da ligação<!-- END REF -->.

Um *code* e uma *message* podem ser enviados ao cliente durante o encerramento para indicar o motivo da rescisão.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.wss.Desc -->
## .wss

<!-- REF #WebSocketConnectionClass.wss.Syntax -->**.wss** : 4D.WebSocketServer<!-- END REF -->

#### Descrição

A propriedade `.wss` contém <!-- REF #WebSocketConnectionClass.wss.Summary -->o [`WebSocketServer`](WebSocketServerClass.md#4dwebsocketservernew) objecto pai da ligação<!-- END REF -->.

Esta propriedade é só de leitura.
<!-- END REF -->

