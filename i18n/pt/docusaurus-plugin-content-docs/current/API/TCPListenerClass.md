---
id: TCPListenerClass
title: TCPListener
---

The `TCPListener` class allows you to create and configure a TCP server in 4D. Once the TCP listener is instantiated, you can receive client TCP connections and communicate using any protocol supporting TCP.

The `TCPListener` class is available from the `4D` class store. You can create a TCP server using the [4D.TCPListener.new()](#4dtcplistenernew) function, which returns a [TCPListener object](#tcplistener-object).

All `TCPListener` class functions are thread-safe.

<details><summary>História</summary>

| Release | Mudanças          |
| ------- | ----------------- |
| 20 R9   | Classe adicionada |

</details>

### Exemplo

```4d

property listener : 4D.TCPListener

Class constructor($port : Integer)
	
	This.listener:=4D.TCPListener.new($port; This)
		
Function terminate()
	
	This.listener.terminate()
	
Function onConnection($listener : 4D.TCPListener; $event : 4D.TCPEvent)->$result
    	//when connected, start a server to handle the communication
	If($event.address # "192.168.@") 
		$result:=Null //in some cases you can reject the connection
	Else
		$result:=cs.MyAsyncTCPConnection.new(This) //see TCPConnection class
	End if
	
Function onError($listener : 4D.TCPListener; $event : 4D.TCPEvent)
	
Function onTerminate($listener : 4D.TCPListener; $event : 4D.TCPEvent)

```

:::note

Veja [exemplo da clase TCPConnection](./TCPConnectionClass.md#asynchronous-example) para uma descrição da classe de usuário MyAsyncTCPConnection.

:::

### TCPListener Object

A TCPListener object is a shared object.

TCPListener objects provide the following properties and functions:

|                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #TCPListener.errors.Syntax -->](#errors)<br/><!-- INCLUDE #TCPListener.errors.Summary -->              |
| [<!-- INCLUDE #TCPListener.port.Syntax -->](#port)<br/><!-- INCLUDE #TCPListener.port.Summary -->                    |
| [<!-- INCLUDE #TCPListener.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #TCPListener.terminate().Summary --> |

<!-- REF #4D.TCPListener.new().Desc -->

## 4D.TCPListener.new()

<!-- REF #4D.TCPListener.new().Syntax -->**4D.TCPListener.new**( *port* : Number ; *options* : Object  ) : 4D.TCPListener<!-- END REF -->

<!-- REF #4D.TCPListener.new().params -->

| Parâmetro  | Tipo                           |                             | Descrição                                                |
| ---------- | ------------------------------ | --------------------------- | -------------------------------------------------------- |
| port       | Number                         | ->                          | TCP port to listen                                       |
| options    | Object                         | ->                          | Configuração [opções](#options-parameter) para o ouvinte |
| Resultados | 4D.TCPListener | <- | New TCPListener object                                   |

<!-- END REF -->

#### Descrição

The `4D.TCPListener.new()` function <!-- REF #4D.TCPListener.new().Summary -->creates a new TCP server listening to the specified *port* using the defined *options*, and returns a `4D.TCPListener` object<!-- END REF -->.

#### `options` parameter

In the *options* parameter, pass an object to configure the listener and all the `TCPConnections` it creates:

| Propriedade  | Tipo    | Descrição                                                                                                                                                                                                                                                                                                                                     | Por padrão |
| ------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| onConnection | Formula | Callback when a new connection is established. The Formula receives two parameters (*$listener* and *$event*, see below) and must return either null/undefined to prevent the connection or an *option* object that will be used to create the [`TCPConnection`](./TCPConnectionClass.md). | Indefinido |
| onError      | Formula | Callback triggered in case of an error. A fórmula recebe o objeto `TCPListener` em *$listener*                                                                                                                                                                                                                                | Indefinido |
| onTerminate  | Formula | Callback triggered just before the TCPListener is closed. A fórmula recebe o objeto `TCPListener` em *$listener*                                                                                                                                                                                                              | Indefinido |

#### Funções Callback

Callback functions receive up to two parameters:

| Parâmetro | Tipo                                        | Descrição                                          |
| --------- | ------------------------------------------- | -------------------------------------------------- |
| $listener | [`TCPListener` object](#tcplistener-object) | The current TCP listener instance. |
| $event    | [objeto `TCPEvent`](#tcpevent-object)       | Contém informações sobre o evento. |

**Sequência de chamadas de retorno:**

1. `onConnection` is triggered each time a connection is established.
2. `onError` é acionado se ocorrer um erro.
3. `onTerminate` is always triggered just before a connection is terminated.

#### Objeto TCPEvent

Um objeto [`TCPEvent`](TCPEventClass.md) é retornado quando uma [função de callback](#callback-functions) é chamada.

<!-- END REF -->

<!-- REF #TCPListener.errors.Desc -->

## .errors

<!-- REF #TCPListener.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Descrição

A propriedade `.errors` contém <!-- REF #TCPListener.errors.Summary -->uma coleção de objetos de erros associados à conexão<!-- END REF -->. Cada objeto de erro inclui o código de erro, uma descrição e a assinatura do componente que causou o erro.

| Propriedade |                                                                                           | Tipo       | Descrição                                            |
| ----------- | ----------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------- |
| errors      |                                                                                           | Collection | pilha de erros 4D em caso de erro                    |
|             | [].errCode            | Number     | Código de erro 4D                                    |
|             | [].message            | Text       | Descrição do erro 4D                                 |
|             | [].componentSignature | Text       | Assinatura da componente interna que devolveu o erro |

<!-- END REF -->

<!-- REF #TCPListener.port.Desc -->

## .port

<!-- REF #TCPListener.port.Syntax -->**port** : Number<!-- END REF -->

#### Descrição

A propriedade `.port` contém <!-- REF #TCPListener.port.Summary -->o número da porta da máquina<!-- END REF -->. Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF #TCPListener.terminate().Desc -->

## .terminate()

<!-- REF #TCPListener.terminate().Syntax -->**.terminate**()<!-- END REF -->

<!-- REF #TCPListener.terminate().params -->

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

A função `terminate()` <!-- REF #TCPListener.terminate().Summary -->fecha o listener e libera a porta<!-- END REF -->.

<!-- END REF -->

