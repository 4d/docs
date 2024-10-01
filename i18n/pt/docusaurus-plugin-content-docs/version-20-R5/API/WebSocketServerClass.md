---
id: WebSocketServerClass
title: WebSocketServer
---

A classe `WebSocketServer` permite-lhe criar e configurar um servidor WebSocket em 4D. Quando o servidor 4D WebSocket estiver ativo, você poderá abrir e usar conexões WebSocket entre o 4D e os clientes usando a classe [`WebSocketConnection`] (WebSocketConnectionClass.md).

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

:::note Sobre os servidores WebSocket

O protocolo WebSocket proporciona um canal de comunicação full-duplex entre um servidor WebSocket e um cliente (por exemplo, um navegador Web). Para obter mais informações sobre servidores WebSocket, leia [esta página na Wikipedia] (https://en.wikipedia.org/wiki/WebSocket).

:::

:::info Veja também

Consulte também [esta postagem no blog] (https://blog.4d.com/new-built-in-websocket-server/) sobre o servidor 4D WebSocket.

:::

### Requisitos

Para criar e manipular seu servidor WebSocket em 4D, é preciso usar duas classes embutidas em 4D:

- essa classe (`4D.WebSocketServer`) para gerenciar o próprio servidor,
- a classe [`4D.WebSocketConnection`](WebSocketConnectionClass.md) para gerir as ligações e as mensagens.

Além disso, terá de criar duas classes de utilizador que conterão funções de retorno de chamada:

- uma classe de usuário para tratar as ligações ao servidor,
- uma classe de usuário para tratar as mensagens.

Você deve [criar o servidor WebSocket] (#4dwebsocketservernew) em um [worker](https://doc.4d.com/4dv19R/help/command/en/page1389.html) para manter a conexão ativa.

O [4D Web Server] (WebServerClass.md) deve ser iniciado.

### Exemplo

Neste exemplo básico, o nosso servidor WebSocket devolverá mensagens em maiúsculas.

1. Crie o servidor WebSocket utilizando um trabalhador (obrigatório) e passe a sua classe de ligação ao servidor como parâmetro:

```4d
	//criar uma instância da classe de usuário
	//que manipulará as conexões com o servidor
var $handler:cs.myServerHandler
$handler:=cs.myServerHandler.new()

CALL WORKER("WebSocketServer"; Formula(wss:=4D.WebSocketServer.new($handler)))  
	//atribuir uma variável (wss) ao WebSocket permite que você  
	//chame wss.terminate() posteriormente
```

2. Defina a classe de usuário `myServerHandler` que contém a(s) função(ões) de retorno de chamada usada(s) para tratar as conexões com o servidor:

```4d
//myServerHandler class

Function onConnection($wss : Object; $event : Object) : Object
	//returns an instance of the user class
	//that will handle the messages
	return cs.myConnectionHandler.new()
```

3. Defina a classe de usuário `myConnectionHandler` que contém a(s) função(ões) de retorno de chamada usada(s) para tratar mensagens:

```4d
// myConnectionHandler class

Function onMessage($ws : 4D.WebSocketConnection; $message : Object)
	//resends the message in uppercase
	$ws.send(Uppercase($message.data))

```

:::tip JS do lado do cliente

Consulte [esta publicação no blog] (https://blog.4d.com/websocket-server/) para ver um exemplo de código Javascript do lado do cliente que manipula uma conexão WebSocket.

:::

### Objecto WebSocketServer

Os objectos de servidor WebSocket fornecem as seguintes propriedades e funções:

|                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketServerClass.connections.Syntax -->](#connections)<br/><!-- INCLUDE #WebSocketServerClass.connections.Summary --> |
| [<!-- INCLUDE #WebSocketServerClass.dataType.Syntax -->](#dataType)<br/><!-- INCLUDE #WebSocketServerClass.dataType.Summary -->          |
| [<!-- INCLUDE #WebSocketServerClass.handler.Syntax -->](#handler)<br/><!-- INCLUDE #WebSocketServerClass.handler.Summary -->             |
| [<!-- INCLUDE #WebSocketServerClass.path.Syntax -->](#path)<br/><!-- INCLUDE #WebSocketServerClass.path.Summary -->                      |
| [<!-- INCLUDE #WebSocketServerClass.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #WebSocketServerClass.terminate().Summary -->   |
| [<!-- INCLUDE #WebSocketServerClass.terminated.Syntax -->](#terminated)<br/><!-- INCLUDE #WebSocketServerClass.terminated.Summary -->    |

## 4D.WebSocketServer.new()

<!-- REF #4D.WebSocketServer.new().Syntax -->**4D.WebSocketServer.new**( *WSSHandler* : Object { ; *options* : Object } ) : 4D.WebSocketServer<!-- END REF -->

<!-- REF #4D.WebSocketServer.new().Params -->

| Parâmetro                           | Tipo                               |                             | Descrição                                                                                |
| ----------------------------------- | ---------------------------------- | :-------------------------: | ---------------------------------------------------------------------------------------- |
| [WSSHandler](#wsshandler-parameter) | Object                             |              ->             | Objecto da classe de utilizador que declara as chamadas de retorno do servidor WebSocket |
| [options](#options-parameter)       | Object                             |              ->             | Parâmetros de configuração do WebSocket                                                  |
| Resultados                          | 4D.WebSocketServer | <- | Novo objeto WebSocketServer                                                              |

<!-- END REF -->

A função `4D.WebSocketServer.new()` <!-- REF #4D.WebSocketServer.new().Summary -->cria e inicia um servidor WebSocket que usará os retornos de chamada especificados *WSSHandler* e (opcionalmente) *opções*  e retorna um objeto `4D.WebSocketServer`<!-- END REF -->.

A chamada dessa função requer que o [4D Web Server] (WebServerClass.md) seja iniciado. O **host** e a **port** do servidor WebSocket são os mesmos que o host e a porta do 4D Web Server.

### Parâmetro *WSSHandler*

No parâmetro *WSSHandler*, passe uma instância de uma classe de usuário que será chamada sempre que ocorrer um evento no servidor WebSocket - essencialmente, eventos de conexão. A classe deve definir as seguintes funções de retorno de chamada (somente `onConnection` é obrigatório):

| Propriedade  | Tipo                         | Descrição                                                                                                                         | Por padrão |
| ------------ | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| onConnection | [Function](FunctionClass.md) | (obrigatório) Chamada de retorno quando é iniciada uma nova ligação de cliente (ver abaixo) | indefinido |
| onOpen       | [Function](FunctionClass.md) | Callback quando o servidor WebSocket é iniciado (ver abaixo)                                                   | indefinido |
| onTerminate  | [Function](FunctionClass.md) | Callback quando o servidor WebSocket é terminado (ver abaixo)                                                  | indefinido |
| onError      | [Function](FunctionClass.md) | Callback quando ocorre um erro (ver abaixo)                                                                    | indefinido |

**WSHandler.onConnection**(*WSServer* : Object ; *event* : Object) : Object | null

| Parâmetro |         | Tipo                               |                             | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------- | ------- | ---------------------------------- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer  |         | 4D.WebSocketServer | <- | Objecto actual do servidor WebSocket                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| "event"   |         | Object                             | <- | Parâmetros                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|           | type    | Text                               |                             | "connection"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|           | request | Object                             |                             | objeto `request`. Contém informações sobre o pedido de ligação (ver abaixo)                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Resultado |         | Object                             |              ->             | [`connectionHandler` object](#connectionhandler-object) (veja abaixo). Se essa função retornar um objeto `connectionHandler`, um objeto [`4D.WebSocketConnection`](WebSocketConnectionClass.md#websocketconnection-object) é criado automaticamente e adicionado à [coleção de conexões](#connections). Esse objeto é então recebido como parâmetro em cada função do objeto `connectionHandler`. Se o valor devolvido for nulo ou indefinido, a ligação é cancelada. |

Esta chamada de retorno é feita quando o handshake estiver concluído. Ele deve ser chamado com um objeto [`connectionHandler`] válido (#connectionhandler-object) para criar a conexão WebSocket; caso contrário, a conexão será cancelada.

**WSHandler.onOpen**(*WSServer* : Object ; *event* : Object)

| Parâmetro |      | Tipo                               |                             | Descrição                            |
| --------- | ---- | ---------------------------------- | :-------------------------: | ------------------------------------ |
| WSServer  |      | 4D.WebSocketServer | <- | Objecto actual do servidor WebSocket |
| "event"   |      | Object                             | <- | Parâmetros                           |
|           | type | Text                               |                             | "open"                               |

Evento emitido quando o servidor websocket é iniciado.

**WSHandler.onTerminate**(*WSServer* : Object ; *event* : Object)

| Parâmetro |      | Tipo                               |                             | Descrição                            |
| --------- | ---- | ---------------------------------- | :-------------------------: | ------------------------------------ |
| WSServer  |      | 4D.WebSocketServer | <- | Objecto actual do servidor WebSocket |
| "event"   |      | Object                             | <- | Parâmetros                           |
|           | type | Text                               |                             | "terminate"                          |

Evento emitido quando o servidor HTTP ou o servidor WebSocket é encerrado.

**WSHandler.onError**(*WSServer* : Object ; *event* : Object)

| Parâmetro |        | Tipo                               |                             | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------- | ------ | ---------------------------------- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer  |        | 4D.WebSocketServer | <- | Objecto actual do servidor WebSocket                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| "event"   |        | Object                             | <- | Parâmetros                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|           | type   | Text                               |                             | "error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|           | errors | Collection                         |                             | Coleção da pilha de erros 4D em caso de erro de execução<li>\[].errCode (number) - Código de erro 4D</li><li>\[].message (text) - Descrição do erro 4D</li><li>\[].componentSignature (text) - Assinatura do componente interno que retornou o erro</li> |

Evento emitido quando ocorre um erro no servidor WebSocket.

### Exemplo de classe `WSSHandler`

Este exemplo de um recurso básico de bate-papo ilustra como lidar com conexões de servidor WebSocket em uma classe *WSSHandler*.

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

| Parâmetro     | Tipo   | Descrição                                                                                                                                                                       |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headers       | Object | O pedido HTTP GET do cliente. `headers.key=value` (o valor pode ser uma coleção se a mesma chave aparecer várias vezes)                      |
| query         | Object | Objecto que contém os parâmetros URL. Por exemplo, se os parâmetros são: `?key1=value1&key2=value2` -> `query.key1=value1`, `query.key2=value2` |
| url           | Text   | contém apenas o URL que está presente no pedido HTTP efectivo. Ex: `GET /status?name=ryan HTTP/1.1` -> url="/status?name=ryan"                  |
| remoteAddress | Text   | Endereço IP do cliente                                                                                                                                                          |

### objeto `connectionHandler`

Como resultado do `WSHandler. callback nConnection`, passe um objeto `connectionHandler`, que é uma instância de uma classe de usuário que será chamada toda vez que um evento ocorrer na conexão de WebSocket --essencialmente, mensagens recebidas. A classe deve definir as seguintes funções de retorno de chamada (somente `onConnection` é obrigatório):

| Parâmetro   | Tipo                         | Descrição                                                                                         |
| ----------- | ---------------------------- | ------------------------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | (obrigatório) Função chamada quando é recebida uma nova mensagem desta ligação |
| onOpen      | [Function](FunctionClass.md) | Função chamada quando o `4D.WebSocketConnection` é criado                                         |
| onTerminate | [Function](FunctionClass.md) | Função chamada quando esta ligação é terminada                                                    |
| onError     | [Function](FunctionClass.md) | Função chamada quando ocorre um erro                                                              |

**connectionHandler.onMessage**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| Parâmetro |      | Tipo                                                    |                             | Descrição                           |
| --------- | ---- | ------------------------------------------------------- | :-------------------------: | ----------------------------------- |
| ws        |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Objecto de ligação WebSocket actual |
| "event"   |      | Object                                                  | <- | Parâmetros                          |
|           | type | Text                                                    |                             | "message"                           |
|           | data | Text / Blob / Object                                    |                             | dados enviados pelo cliente         |

Este Callback para dados WebSocket. Chamado sempre que o WebSocket recebe dados.

**connectionHandler.onOpen**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| Parâmetro |      | Tipo                                                    |                             | Descrição                           |
| --------- | ---- | ------------------------------------------------------- | :-------------------------: | ----------------------------------- |
| ws        |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Objecto de ligação WebSocket actual |
| "event"   |      | Object                                                  | <- | Parâmetros                          |
|           | type | Text                                                    |                             | "open"                              |

Chamado quando o objeto `connectionHandler` for criado (após o evento `WSS.onConnection`).

**connectionHandler.onTerminate**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| Parâmetro |        | Tipo                                                    |                             | Descrição                                                                                                                                                                                                                                  |
| --------- | ------ | ------------------------------------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ws        |        | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | Objecto de ligação WebSocket actual                                                                                                                                                                                                        |
| "event"   |        | Object                                                  | <- | Parâmetros                                                                                                                                                                                                                                 |
|           | type   | Text                                                    |                             | "terminate"                                                                                                                                                                                                                                |
|           | code   | Number                                                  |                             | Código de estado que indica o motivo pelo qual a ligação foi encerrada. Se o WebSocket não retorna um código de erro, `code` está definido para 1005 se nenhum erro ocorreu ou para 1006 se houve um erro. |
|           | reason | Text                                                    |                             | Cadeia de caracteres que explica porque é que a ligação foi encerrada. Se o websocket não devolver um motivo, o código é indefinido                                                                                        |

Função chamada quando o WebSocket é fechado.

**connectionHandler.onError**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| Parâmetro |        |            | Tipo                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Descrição                           |
| --------- | ------ | ---------- | ------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ----------------------------------- |
| ws        |        |            | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |                                                                                                                                                                                                                                                    <-                                                                                                                                                                                                                                                   | Objecto de ligação WebSocket actual |
| "event"   |        |            | Object                                                  |                                                                                                                                                                                                                                                    <-                                                                                                                                                                                                                                                   | Parâmetros                          |
|           | type   |            | Text                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | "error"                             |
|           | errors | Collection |                                                         | Coleção de erros 4D stack em caso de erro de execução<li>\[].errCode (number) - código de erro 4D</li><li>\[]. essagem (texto) - Descrição do erro 4D</li><li>\[].componentSignature (texto) - Assinatura do componente interno que retornou o erro</li> |                                     |

Função chamada quando ocorre um erro.

### Exemplo de classe `connectionHandler`

Este exemplo de um recurso básico de bate-papo ilustra como tratar mensagens em uma classe *connectionHandler*.

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

### Parâmetro *options*

No parâmetro opcional *options*, passe um objeto que contenha as seguintes propriedades:

| Propriedade | Tipo | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Por padrão |
| ----------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| path        | Text | Representa o caminho para aceder ao servidor WebSocket. Se não for definido um caminho, o servidor WebSocket gere todas as ligações                                                                                                                                                                                                                                                                                                           | indefinido |
| dataType    | Text | Tipo dos dados recebidos através da função `connectionHandler.onMessage` e os dados enviados por [`WebSocketConnection.send()`](WebSocketConnectionClass.md#send). Values: "text", "blob","object"). Se "object": (enviar) transforma o objecto num formato json e envia-o; (recepção): recebe o formato json e transforma-o em objecto | text       |

<!-- REF #WebSocketServerClass.connections.Desc -->

## .connections

<!-- REF #WebSocketServerClass.connections.Syntax -->**.connections** : Collection<!-- END REF -->

#### Descrição

A propriedade `.connections` contém <!-- REF #WebSocketServerClass.connections.Summary -->todas as conexões atuais tratadas pelo servidor WebSocket<!-- END REF -->. Cada elemento da coleção é um objeto [`WebSocketConnection`] (WebSocketConnectionClass.md).

Quando uma conexão é encerrada, seu [`status`](WebSocketConnectionClass.md#status) muda para "Fechado" e ele é removido desta coleção.

<!-- END REF -->

<!-- REF #WebSocketServerClass.dataType.Desc -->

## .dataType

<!-- REF #WebSocketServerClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Descrição

A propriedade `.dataType` contém <!-- REF #WebSocketServerClass.dataType.Summary -->o tipo de dados recebidos ou enviados<!-- END REF -->.

Esta propriedade é só de leitura.

<!-- END REF -->

<!-- REF #WebSocketServerClass.handler.Desc -->

## .handler

<!-- REF #WebSocketServerClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Descrição

A propriedade `.handler` contém <!-- REF #WebSocketServerClass.handler.Summary -->o acessório que obtém o objeto `WSSHandler` usado para iniciar o servidor WebSocket<!-- END REF -->.

<!-- END REF -->

<!-- REF #WebSocketServerClass.path.Desc -->

## .path

<!-- REF #WebSocketServerClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descrição

A propriedade `.path` contém <!-- REF #WebSocketServerClass.path.Summary --> o padrão do caminho para acessar o servidor de WebSocket <!-- END REF -->. Se não for definido um caminho, o servidor WebSocket gere todas as ligações.

Esta propriedade é só de leitura.

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketServerClass.terminate().Syntax -->**.terminate**()<br/>**.terminate**( *timeout* : Integer )<!-- END REF -->

<!-- REF #WebSocketServerClass.terminate().Params -->

| Parâmetro | Tipo    |     | Descrição                                                       |
| --------- | ------- | :-: | --------------------------------------------------------------- |
| timeout   | Integer |  -> | Waiting time in seconds before terminating the WebSocket server |

<!-- END REF -->

#### Descrição

A função `.terminate()` <!-- REF #WebSocketServerClass.terminate().Summary -->fecha o servidor de WebSocket<!-- END REF -->.

By default, if no *timeout* value is set, the function initializes close handshake and waits to receive close frame from the peer, after that sending FIN packet in attempt to perform a clean socket close. When answer received, the socket is destroyed.

If a *timeout* value is set:

- when the waiting time is reached, forcibly destroys the socket.
- if *timeout* = 0, forcibly destroys the socket without closing frames or fin packets exchange, and does it instantly without waiting time.

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminated.Desc -->

## .terminated

<!-- REF #WebSocketServerClass.terminated.Syntax -->**.terminated** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.terminated` contém <!-- REF #WebSocketServerClass.terminated.Summary -->True se o servidor de WebSocket estiver fechado<!-- END REF -->.

Esta propriedade é só de leitura.

<!-- END REF -->
