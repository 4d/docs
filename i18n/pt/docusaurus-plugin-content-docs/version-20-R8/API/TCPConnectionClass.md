---
id: TCPConnectionClass
title: TCPConnection
---

A classe `TCPConnection` permite gerenciar conexões de cliente TCP (Transmission Control Protocol) com um servidor, possibilitando o envio e o recebimento de dados e a manipulação de eventos do ciclo de vida da conexão usando retornos de chamada.

A classe `TCPConnection` está disponível no repositório de classes `4D`. Você pode criar uma conexão TCP usando a função [4D.TCPConnection.new()](#4dtcpconnectionnew), que retorna um objeto [TCPConnection](#tcpconnection-object).

Todas as funções da classe `TCPConnection` são thread-seguras.

Graças ao objeto 4D padrão *refcounting*, um TCPConnection é automaticamente liberado quando não for mais referenciado. Consequentemente, os recursos associados são devidamente limpos sem a necessidade de fechamento explícito.

Os objetos TCPConnection são liberados quando não houver mais referências a eles na memória. Isso geralmente ocorre, por exemplo, no final da execução de um método para variáveis locais. Se quiser "forçar" o fechamento de uma conexão a qualquer momento, [**nullify** suas referências, definindo-as como **Null**](../Concepts/dt_object.md#resources).

<details><summary>História</summary>

| Release | Mudanças          |
| ------- | ----------------- |
| 20 R8   | Classe adicionada |

</details>

### Exemplos

Os exemplos a seguir demonstram como usar as classes 4D.TCPConnection e 4D.TCPEvent para gerenciar uma conexão de cliente TCP, manipular eventos, enviar dados e fechar adequadamente a conexão. São fornecidos exemplos síncronos e assíncronos.

#### Exemplo síncrono

Este exemplo mostra como estabelecer uma conexão, enviar dados e encerrá-la usando um objeto simples para configuração:

```4d
var $domain : Text := "127.0.0.1"
var $port : Integer := 10000
var $options : Object := New object() // Objeto de configuração
var $tcpClient : 4D.TCPConnection
var $message : Text := "test message"

// Abra uma conexão
$tcpClient := 4D.TCPConnection.new($domain; $port; $options)

// Enviar dados
var $blobData : Blob
TEXT TO BLOB($message; $blobData; UTF8 text without length)
$tcpClient.send($blobData)

// Shutdown
$tcpClient.shutdown()
$tcpClient.wait(0)

```

#### Exemplo assíncrono

Este exemplo define uma classe que lida com o ciclo de vida e os eventos da conexão, demonstrando como trabalhar de forma assíncrona:

```4d
// Definição de classe: cs.MyAsyncTCPConnection

Class constructor($url : Text; $port : Integer)
    This.connection := Null
    This.url := $url
    This.port := $port

// Conectar-se a um dos servidores lançados dentro dos workers
Function connect()
    This.connection := 4D.TCPConnection.new(This.url; This.port; This)

// Desconectar do servidor
Function disconnect()
    This.connection.shutdown()
    This.connection := Null

// Enviar dados para o servidor
Function getInfo()
    var $blob : Blob
    TEXT TO BLOB("Information"; $blob)
    This.connection.send($blob)

// Callback chamado quando a conexão é estabelecida com sucesso
Function onConnection($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
    ALERT("Connection established")

// Callback chamado quando a conexão é fechada corretamente
Function onShutdown($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
    ALERT("Conexão fechada")

// Callback chamado ao receber dados do servidor
Function onData($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
    ALERT(BLOB to text($event.data; UTF8 text without length))

	//Warning: Não há garantia de que você receberá todos os dados de que precisa em um único pacote de rede.
	
// Chamada de retorno quando a conexão é fechada inesperadamente
Function onError($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
    ALERT("Erro de conexão")

// Chamada de retorno após onShutdown/onError, logo antes de o objeto TCPConnection ser liberado
Function onTerminate($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
	ALERT("Conexão encerrada")


```

##### Exemplos de uso

Crie um novo método chamado AsyncTCP, para inicializar e gerenciar a conexão TCP:

```4d
var $myObject : cs.MyAsyncTCPConnection
$myObject := cs.MyAsyncTCPConnection.new("myURL"; 10000)
$myObject.connect()
$myObject.getInfo()
$myObject.disconnect()

```

Chamar o método AsyncTCP em um worker:

```4d
CALL WORKER("new process"; "Async_TCP")

```

### Objeto TCPConnection

Um objeto TCPConnection é um objeto não compartilhável.

Os objetos TCPConnection fornecem as seguintes propriedades e funções:

|                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #TCPConnection.closed.Syntax -->](#closed)<br/><!-- INCLUDE #TCPConnection.closed.Summary -->           |
| [<!-- INCLUDE #TCPConnection.errors.Syntax -->](#errors)<br/><!-- INCLUDE #TCPConnection.errors.Summary -->           |
| [<!-- INCLUDE #TCPConnection.noDelay.Syntax -->](#nodelay)<br/><!-- INCLUDE #TCPConnection.noDelay.Summary -->        |
| [<!-- INCLUDE #TCPConnection.send().Syntax -->](#send)<br/><!-- INCLUDE #TCPConnection.send().Summary -->             |
| [<!-- INCLUDE #TCPConnection.shutdown().Syntax -->](#shutdown)<br/><!-- INCLUDE #TCPConnection.shutdown().Summary --> |
| [<!-- INCLUDE #TCPConnection.wait().Syntax -->](#wait)<br/><!-- INCLUDE #TCPConnection.wait().Summary -->             |

<!-- REF #4D.TCPConnection.new().Desc -->

## 4D.TCPConnection.new()

<!-- REF #4D.TCPConnection.new().Syntax -->**4D.TCPConnection.new**( *serverAddress* : Text ; *serverPort* : Number ; *options* : Object  ) : 4D.TCPConnection<!-- END REF -->

<!-- REF #4D.TCPConnection.new().params -->

| Parâmetro     | Tipo          |                             | Descrição                                                |
| ------------- | ------------- | --------------------------- | -------------------------------------------------------- |
| serverAddress | Text          | ->                          | Nome de domínio ou endereço IP do servidor               |
| serverPort    | Integer       | ->                          | Número da porta do servidor                              |
| options       | Object        | ->                          | Configuração [opções](#options-parameter) para a conexão |
| Resultados    | TCPConnection | <- | Novo objeto TCPConnection                                |

<!-- END REF -->

#### Descrição

A função `4D.TCPConnection.new()` <!-- REF #4D.TCPConnection.new().Summary -->cria uma nova conexão TCP com o *serverAddress* e a *serverPort* especificados, usando as *opções* definidas, e retorna um objeto `4D.HTTPRequest`<!-- END REF -->.

#### `options` parameter

No parâmetro *options*, passe um objeto que possa conter as seguintes propriedades:

| Propriedade  | Tipo       | Descrição                                                             | Por padrão |
| ------------ | ---------- | --------------------------------------------------------------------- | ---------- |
| onConnection | Formula    | Callback acionado quando a conexão for estabelecida.  | Indefinido |
| onData       | Formula    | Callback acionado quando os dados forem recebidos                     | Indefinido |
| onShutdown   | Formula    | Callback acionado quando a conexão for fechada corretamente           | Indefinido |
| onError      | Formula    | Callback acionado no caso de um erro                                  | Indefinido |
| onTerminate  | Formula    | Callback acionada imediatamente antes de a TCPConnection ser liberada | Indefinido |
| noDelay      | Parâmetros | **Somente leitura** Desabilita o algoritmo do Nagle se `true`         | False      |

#### Funções Callback

Todas as funções de chamada de retorno recebem dois parâmetros de objectos:

| Parâmetro   | Tipo                                            | Descrição                                          |
| ----------- | ----------------------------------------------- | -------------------------------------------------- |
| $connection | [objeto `TCPConnection`](#tcpconnection-object) | A instância de conexão TCP atual.  |
| $event      | [objeto `TCPEvent`](#tcpevent-object)           | Contém informações sobre o evento. |

**Sequência de chamadas de retorno:**

1. O `onConnection` é acionado quando a conexão é estabelecida.
2. `onData` é acionado cada vez que os dados são recebidos.
3. O `onShutdown` ou o `onError` estão ativados:
   - O `onShutdown` é acionado quando a conexão for fechada corretamente.
   - `onError` é acionado se ocorrer um erro.
4. O `onTerminate` é sempre acionado logo antes de a TCPConnection ser liberada (a conexão é fechada ou ocorre um erro).

#### Objeto TCPEvent

Um objeto [`TCPEvent`](TCPEventClass.md) é retornado quando uma [função de callback](#callback-functions) é chamada.

<!-- END REF -->

<!-- REF #TCPConnection.closed.Desc -->

## .closed

<!-- REF #TCPConnection.closed.Syntax -->**closed** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.closed` contém <!-- REF #TCPConnection.closed.Summary -->se a conexão está fechada<!-- END REF -->. Retorna `true` se a conexão for fechada, seja devido a um erro, uma chamada para `shutdown()`, ou fechamento pelo servidor.

<!-- END REF -->

<!-- REF #TCPConnection.errors.Desc -->

## .errors

<!-- REF #TCPConnection.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Descrição

A propriedade `.errors` contém <!-- REF #TCPConnection.errors.Summary -->uma coleção de objetos de erro associados à conexão<!-- END REF -->. Cada objeto de erro inclui o código de erro, uma descrição e a assinatura do componente que causou o erro.

| Propriedade |                                                                                           | Tipo       | Descrição                                            |
| ----------- | ----------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------- |
| errors      |                                                                                           | Collection | pilha de erros 4D em caso de erro                    |
|             | [].errCode            | Number     | Código de erro 4D                                    |
|             | [].message            | Text       | Descrição do erro 4D                                 |
|             | [].componentSignature | Text       | Assinatura da componente interna que devolveu o erro |

<!-- END REF -->

<!-- REF #TCPConnection.noDelay.Desc -->

## .noDelay

<!-- REF #TCPConnection.noDelay.Syntax -->**noDelay** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.noDelay` contém <!-- REF #TCPConnection.noDelay.Summary -->se o algoritmo de Nagle está desativado (`true`) ou ativado (`false`)<!-- END REF -->. Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF #TCPConnection.send().Desc -->

## .send()

<!-- REF #TCPConnection.send().Syntax -->**.send**( *data* : Blob )<!-- END REF -->

<!-- REF #TCPConnection.send().params -->

| Parâmetro | Tipo |    | Descrição              |
| --------- | ---- | -- | ---------------------- |
| data      | Blob | -> | Dados a serem enviados |

<!-- END REF -->

#### Descrição

A função `send()` <!-- REF #TCPConnection.send().Summary -->envia dados para o servidor<!-- END REF -->. Se a conexão ainda não foi estabelecida, os dados são enviados assim que a conexão for estabelecida.

<!-- END REF -->

<!-- REF #TCPConnection.shutdown().Desc -->

## .shutdown()

<!-- REF #TCPConnection.shutdown().Syntax -->**.shutdown**()<!-- END REF -->

<!-- REF #TCPConnection.shutdown().params -->

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

A função `shutdown()` <!-- REF #TCPConnection.shutdown().Summary -->fecha o canal de *gravação* da conexão (fluxo do cliente para o servidor)<!-- END REF --> e mantém o canal de *leitura* (fluxo do servidor para o cliente) aberto, permitindo que você continue recebendo dados até que a conexão seja totalmente fechada pelo servidor ou ocorra um erro.

<!-- END REF -->

<!-- REF #TCPConnection.wait().Desc -->

## .wait()

<!-- REF #TCPConnection.wait().Syntax -->**.wait**( { *timeout* : Real } )<!-- END REF -->

<!-- REF #TCPConnection.wait().params -->

| Parâmetro | Tipo |     | Descrição                          |
| --------- | ---- | :-: | ---------------------------------- |
| timeout   | Real |  -> | Tempo máximo de espera em segundos |

<!-- END REF -->

#### Descrição

A função `wait()` <!-- REF #TCPConnection.wait().Summary -->aguarda até que a conexão TCP seja fechada ou o `timeout` especificado seja atingido<!-- END REF -->

:::note

Durante a execução do `.wait()`, as funções de retorno de chamada são executadas, sejam elas originadas de outras instâncias do `SystemWorker`. Você pode sair de um `.wait()` chamando [`shutdown()`](#shutdown) de um retorno de chamada.

:::

<!-- END REF -->

