---
id: WebSocketConnectionClass
title: WebSocketConnection
---

A API da classe `WebSocketConnection` permite que você gerencie conexões WebSocket, uma vez estabelecida usando a [classe `WebSocketServer`](WebSocketServerClass.md).

:::info

Para obter uma visão geral e alguns exemplos da implementação do servidor WebSocket em 4D, consulte a classe [`WebSocketServer`](WebSocketServerClass.md).

:::

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

### Objecto WebSocketConnection

Um objeto `WebSocketConnection` é criado automaticamente quando a função de retorno de chamada [`WSHandler.onConnection`](WebSocketServerClass.md#wsshandler-parameter) do objeto [WebSocketServer](WebSocketServerClass.md#4dwebsocketservernew) retorna um objeto [`connectionHandler`](WebSocketServerClass.md#connectionhandler-object).

Os objectos Httprequest fornecem as seguintes propriedades e funções:

|                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketConnectionClass.handler.Syntax -->](#handler)<br/><!-- INCLUDE #WebSocketConnectionClass.handler.Summary -->           |
| [<!-- INCLUDE #WebSocketConnectionClass.id.Syntax -->](#id)<br/><!-- INCLUDE #WebSocketConnectionClass.id.Summary -->                          |
| [<!-- INCLUDE #WebSocketConnectionClass.send().Syntax -->](#send)<br/><!-- INCLUDE #WebSocketConnectionClass.send().Summary -->                |
| [<!-- INCLUDE #WebSocketConnectionClass.status.Syntax -->](#status)<br/><!-- INCLUDE #WebSocketConnectionClass.status.Summary -->              |
| [<!-- INCLUDE #WebSocketConnectionClass.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #WebSocketConnectionClass.terminate().Summary --> |
| [<!-- INCLUDE #WebSocketConnectionClass.wss.Syntax -->](#wss)<br/><!-- INCLUDE #WebSocketConnectionClass.wss.Summary -->                       |

<!-- REF #WebSocketConnectionClass.handler.Desc -->

## .handler

<!-- REF #WebSocketConnectionClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Descrição

A propriedade `.handler` contém <!-- REF #WebSocketConnectionClass.handler.Summary -->o acessório que obtém o objeto `connectionHandler` usado para iniciar a conexão<!-- END REF -->.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.id.Desc -->

## .id

<!-- REF #WebSocketConnectionClass.id.Syntax -->**.id** : Integer<!-- END REF -->

#### Descrição

A propriedade `.id` contém <!-- REF #WebSocketConnectionClass.id.Summary --> o identificador único da conexão<!-- END REF -->.

Esta propriedade é só de leitura.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.send().Desc -->

## .send()

<!-- REF #WebSocketConnectionClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )<br/>**.send**( *message* : Object )<!-- END REF -->

<!-- REF #WebSocketConnectionClass.send().Params -->

| Parâmetro | Tipo                 |     | Descrição           |
| --------- | -------------------- | :-: | ------------------- |
| message   | Text / Blob / Object |  -> | A mensagem a enviar |

<!-- END REF -->

#### Descrição

A função `.send()` <!-- REF #WebSocketConnectionClass.send().Summary -->envia uma *message* para o cliente<!-- END REF -->.

Os conteúdos seguintes são enviados em função do tipo de *message*:

| Tipo   | Conteúdo                                                                                                                    |
| ------ | --------------------------------------------------------------------------------------------------------------------------- |
| Text   | Texto em UTF-8                                                                                                              |
| Blob   | Dados binários                                                                                                              |
| Object | Texto em JSON UTF-8 (o mesmo resultado que com [`JSON Stringify`](../commands-legacy/json-stringify.md)) |

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.status.Desc -->

## .status

<!-- REF #WebSocketConnectionClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### Descrição

A propriedade `.status` contém <!-- REF #WebSocketConnectionClass.status.Summary -->o status da conexão (pode ser "Closing", "Closed" ou "Connected")<!-- END REF -->.

Esta propriedade é só de leitura.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketConnectionClass.terminate().Syntax -->**.terminate**( { *code* : Integer ; *message* : Text } )<!-- END REF -->

<!-- REF #WebSocketConnectionClass.terminate().Params -->

| Parâmetro | Tipo    |     | Descrição                                                                                                       |
| --------- | ------- | :-: | --------------------------------------------------------------------------------------------------------------- |
| code      | Integer |  -> | Código de erro enviado ao cliente (deve ser > 3000, caso contrário a mensagem não é enviada) |
| message   | Text    |  -> | Mensagem de erro enviada ao cliente                                                                             |

<!-- END REF -->

#### Descrição

A função `.terminate()` <!-- REF #WebSocketConnectionClass.terminate().Summary -->força a conexão a fechar<!-- END REF -->.

Um *code* e uma *message* podem ser enviados ao cliente durante o encerramento para indicar o motivo da rescisão.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.wss.Desc -->

## .wss

<!-- REF #WebSocketConnectionClass.wss.Syntax -->**.wss** : 4D.WebSocketServer<!-- END REF -->

#### Descrição

A propriedade `.wss` contém <!-- REF #WebSocketConnectionClass.wss.Summary -->o objeto pai [`WebSocketServer`](WebSocketServerClass.md#4dwebsocketservernew) da conexão<!-- END REF -->.

Esta propriedade é só de leitura.

<!-- END REF -->

