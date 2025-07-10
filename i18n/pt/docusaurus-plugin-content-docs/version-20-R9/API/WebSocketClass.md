---
id: WebSocketClass
title: WebSocket
---

A classe `WebSocket` permite-lhe abrir uma ligação de cliente WebSocket com um servidor, enviar e receber dados e fechar a ligação.

As ligações cliente WebSocket são úteis, por exemplo, para receber dados financeiros em tempo real ou enviar e receber mensagens de um chat.

<details><summary>História</summary>

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

|                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketClass.dataType.Syntax -->](#datatype)<br/><!-- INCLUDE #WebSocketClass.dataType.Summary -->        |
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
| [connectionHandler](#connectionhandler-parameter) | Object                       |              ->             | Objeto que declara as chamadas de retorno WebSocket |
| Resultados                                        | 4D.WebSocket | <- | Novo [objeto WebSocket](#websocket-object)          |

<!-- END REF -->

A função `4D.WebSocket.new()` <!-- REF #4D.WebSocket.new().Summary --> cria e retorna um novo [objeto `4D.WebSocket`](#websocket-object) conectado ao servidor de WebSocket no endereço que você passou em *url*<!-- END REF -->. O objeto `4D.WebSocket` fornece uma API para criar e gerir uma ligação WebSocket a um servidor, bem como para enviar e receber dados de e para o servidor.

Em *url*, passe o URL ao qual o servidor WebSocket responderá. Podem ser utilizados os seguintes padrões de URL:

- `ws://host[:port]path[?query]` para ligações padrão
- `wss://host[:port]path[?query]` para conexões TLS seguras

Se a ligação não for possível, é devolvido um objeto `null` sendo gerado um erro (que pode ser intersetado através de um método instalado com `ON ERR CALL`).

### Parâmetro *connectionHandler*

Em *connectionHandler*, você pode passar um objeto que contém funções de callback a serem chamadas de acordo com eventos de conexão, bem como o tipo de dados e os cabeçalhos a serem tratados.

- As chamadas de retorno são chamadas automaticamente no contexto do formulário ou do worker que inicia a ligação.
- O WebSocket será válido enquanto o formulário ou o worker não for fechado.

| Propriedade | Tipo                         | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| onMessage   | [Function](FunctionClass.md) | Função de retorno de chamada para dados WebSocket. Chamado sempre que o WebSocket tiver recebido dados. A chamada de retorno recebe os seguintes parâmetros<li>:`$1`: Objeto WebSocket`$2`</li><li>: Objeto</li><ul><li>`$2.type` (texto): sempre "message"</li><li>`$2.data` (texto, blob ou objeto, consulte `dataType`): Dados recebidos</li></ul>                                                                                                                                                                                                                                            |
| onError     | [Function](FunctionClass.md) | Função de retorno de chamada para erros de execução. A chamada de retorno recebe os seguintes parâmetros<li>:`$1`: Objeto WebSocket`$2`</li><li>: Objeto</li><ul><li>`$2.type` (texto): sempre "error"</li><li>`$2.errors`: coleção de pilha de erros 4D em caso de erro de execução.<ul><li>`[].errCode` (número): código de erro 4D</li><li>`[].message` (texto): descrição do erro 4D</li><li>`[].componentSignature` (texto): assinatura do componente interno que retornou o erro</li></ul></li></ul> |
| onTerminate | [Function](FunctionClass.md) | Função de retorno de chamada quando o WebSocket é terminado. A chamada de retorno recebe os seguintes parâmetros<li>:`$1`: objeto WebSocket</li><li>`$2`: objeto</li><ul><li>`$2.code` (number, read-only): short sem sinal que contém o código de fechamento enviado pelo servidor.</li><li>`$2.reason` (text, read-only): motivo pelo qual o servidor fechou a conexão. Isto é específico do servidor e do subprotocolo em causa.</li></ul>                                                                                                                    |
| onOpen      | [Function](FunctionClass.md) | Função de retorno de chamada quando o websocket está aberto. A chamada de retorno recebe os seguintes parâmetros<li>:`$1`: objeto WebSocket</li><li>`$2`: objeto</li><ul><li>`$2.type` (texto): sempre "open"</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                             |
| dataType    | Text                         | Tipo de dados recebidos ou enviados. Valores disponíveis: "text" (padrão), "blob", "object". "text" = utf-8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| headers     | Object                       | Cabeçalhos do WebSocket.<li>Sintaxe para atribuição de chave padrão: `headers.*key*:=*value*` (*value* pode ser uma coleção se a mesma chave aparecer várias vezes)</li><li>Sintaxe para atribuição de cookie (caso específico): `headers.Cookie:="*name*=*value* {; *name2*=*value2*{; ... } }"`</li>                                                                                                                                                                                                                                                                                                                                                           |

Aqui está a sequência de chamadas de retorno:

1. `onOpen` é executado uma vez
2. São executados zero ou vários `onMessage`
3. Zero ou um `onError` é executado (pára o processamento)
4. `onTerminate` é sempre executado uma vez

#### Exemplo

Você deseja definir cabeçalhos na classe usuário `WSConnectionHandler`:

```4d
// Classe WSConnectionHandler

Class constructor($myToken:Text)

// Criação dos cabeçalhos enviados ao servidor
This.headers:=New object("x-authorization";$myToken)
// Definimos dois cookies
This.headers.Cookie:="yummy_cookie=choco; tasty_cookie=strawberry"
...

```

<!-- REF #WebSocketClass.dataType.Desc -->

## .dataType

<!-- REF #WebSocketClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Descrição

A propriedade `.dataType` contém <!-- REF #WebSocketClass.dataType.Summary --> o tipo do conteúdo do corpo de resposta<!-- END REF -->. Pode ser "text", "blob" ou "object".

Esta propriedade é só de leitura.

<!-- END REF -->

<!-- REF #WebSocketClass.handler.Desc -->

## .handler

<!-- REF #WebSocketClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Descrição

A propriedade `.handler` contém <!-- REF #WebSocketClass.handler.Summary -->o acessório que obtém o objeto `connectionHandler` usado para iniciar a conexão<!-- END REF -->.

Esta propriedade é só de leitura.

<!-- END REF -->

<!-- REF #WebSocketClass.id.Desc -->

## .id

<!-- REF #WebSocketClass.id.Syntax -->**.id** : Integer<!-- END REF -->

#### Descrição

A propriedade `.id` contém <!-- REF #WebSocketClass.id.Summary --> o identificador único da conexão<!-- END REF -->.

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

A função `.send()` <!-- REF #WebSocketClass.send().Summary -->envia *mensagem* ao servidor de WebSocket no tipo de dados definido (Texto, Blob, ou Objeto)<!-- END REF -->.

Os conteúdos seguintes são enviados em função do tipo de *message*:

| Tipo   | Conteúdo                                                                                                                    |
| ------ | --------------------------------------------------------------------------------------------------------------------------- |
| Text   | Texto em UTF-8                                                                                                              |
| Blob   | Dados binários                                                                                                              |
| Object | Texto em JSON UTF-8 (o mesmo resultado que com [`JSON Stringify`](../commands-legacy/json-stringify.md)) |

<!-- END REF -->

<!-- REF #WebSocketClass.status.Desc -->

## .status

<!-- REF #WebSocketClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### Descrição

A propriedade `.status` contém <!-- REF #WebSocketClass.status.Summary -->o status atual da conexão (pode ser "Connecting", "Closing", "Closed" ou "Connected")<!-- END REF -->.

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

A função `.terminate()` <!-- REF #WebSocketClass.terminate().Summary -->fecha a conexão de WebSocket, juntamente com parâmetros opcionais *code* e *reason*<!-- END REF -->.

Em *code*, você pode passar um código de estado explicando porque a conexão está sendo fechada (consulte também [WebSocket Connection Close Code in the RFC6455](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5)):

- Se não for especificado, um código de fechamento da conexão será automaticamente definido como 1000 para um fechamento normal ou, caso contrário, como outro valor padrão no intervalo 1001-1015 que indique o motivo real pelo qual a conexão foi fechada.
- Se especificado, o valor desse parâmetro de código substitui a configuração automática. O valor deve ser um número inteiro. Ou 1000, ou um código personalizado no intervalo 3000-4999. Se você especificar um valor *code*, também deverá especificar um valor *reason*.

Em *reason*, você pode passar uma frase descrevendo porque a conexão está sendo fechada.

<!-- END REF -->

<!-- REF #WebSocketClass.url.Desc -->

## .url

<!-- REF #WebSocketClass.url.Syntax -->**.url** : Text<!-- END REF -->

#### Descrição

A propriedade `.url` contém <!-- REF #WebSocketClass.url.Summary --> a URL à qual o WebSocket se conectou<!-- END REF -->. É o URL que você passou para a função [`new()`](#4dwebsocketnew).

Esta propriedade é só de leitura.

<!-- END REF -->
