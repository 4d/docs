---
id: TCPListenerClass
title: TCPListener
---

A classe `TCPListener` permite que você crie e configure um servidor TCP em 4D. Depois que o listener TCP for instanciado, você poderá receber conexões TCP clientes e se comunicar usando qualquer protocolo compatível com TCP.

A classe `TCPListener` está disponível no repositório de classes `4D`. Você pode criar um servidor TCP usando a função [4D.TCPListener.new()](#4dtcplistenernew), que retorna um objeto [TCPListener](#tcplistener-object).

Todas as funções da classe `TCPListener` são thread-safe.

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
    	//quando conectado, inicie um servidor para tratar da comunicação
	If($event.address # "192.168.@") 
		$result:=Null //em alguns casos, você pode rejeitar a conexão
	Else
		$result:=cs.MyAsyncTCPConnection.new(This) //ver classe TCPConnection
	End if
	
Function onError($listener : 4D.TCPListener; $event : 4D.TCPEvent)
	
Function onTerminate($listener : 4D.TCPListener; $event : 4D.TCPEvent)

```

:::note

Veja [exemplo da clase TCPConnection](./TCPConnectionClass.md#asynchronous-example) para uma descrição da classe de usuário MyAsyncTCPConnection.

:::

### TCPListener Object

Um objeto TCPListener é um objeto compartilhado.

Os objetos TCPListener fornecem as seguintes propriedades e funções:

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
| port       | Number                         | ->                          | Porta TCP para ouvir                                     |
| options    | Object                         | ->                          | Configuração [opções](#options-parameter) para o ouvinte |
| Resultados | 4D.TCPListener | <- | Novo objeto TCPListener                                  |

<!-- END REF -->

#### Descrição

A função `4D.TCPListener.new()` <!-- REF #4D.TCPListener.new().Summary -->cria um novo servidor TCP que escuta a *port* especificada usando as *options* definidas e retorna um objeto `4D.TCPListener`<!-- END REF -->.

#### `options` parameter

No parâmetro *options*, passe um objeto para configurar o listener e todas as `TCPConnections` que ele cria:

| Propriedade  | Tipo    | Descrição                                                                                                                                                                                                                                                                                                                                       | Por padrão |
| ------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| onConnection | Formula | Callback quando uma nova conexão é estabelecida. The Formula receives two parameters (*$listener* and *$event*, see below) and must return either null/undefined to prevent the connection or an *option* object that will be used to create the [`TCPConnection`](./TCPConnectionClass.md). | Indefinido |
| onError      | Formula | Callback triggered in case of an error. A fórmula recebe o objeto `TCPListener` em *$listener*                                                                                                                                                                                                                                  | Indefinido |
| onTerminate  | Formula | Callback triggered just before the TCPListener is closed. A fórmula recebe o objeto `TCPListener` em *$listener*                                                                                                                                                                                                                | Indefinido |

#### Funções Callback

Callback functions receive up to two parameters:

| Parâmetro | Tipo                                        | Descrição                                          |
| --------- | ------------------------------------------- | -------------------------------------------------- |
| $listener | [`TCPListener` object](#tcplistener-object) | The current TCP listener instance. |
| $event    | [objeto `TCPEvent`](#tcpevent-object)       | Contém informações sobre o evento. |

**Sequência de chamadas de retorno:**

1. `onConnection` é acionado cada vez que uma conexão é estabelecida.
2. `onError` é acionado se ocorrer um erro.
3. `onTerminate` é sempre acionado antes de uma conexão ser encerrada.

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

