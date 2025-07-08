---
id: UDPSocketClass
title: UDPSocket
---

The `UDPSocket` class allows you to send and receive UDP packets. UDP (User Datagram Protocol) is an easy-to-implement protocol for sending data. It is faster and simpler than TCP (only 8 bytes of header as opposed to at least 20 bytes in TCP), but it does not offer the same level of reliability. It is useful for applications where data must arrive at their destination quickly. However, it does not allow verification of delivery, nor does it allow error-checking or recovery of data that was not delivered correctly.

The `UDPSocket` class is available from the `4D` class store. You can create a UDP connection using the [4D.UDPSocket.new()](#4dudpsocketnew) function, which returns a [UDPSocket object](#udpsocket-object).

Thanks to the standard 4D object *refcounting*, a UDPSocket is automatically released when it is no longer referenced, i.e. when no more references to them exist in memory. Isso geralmente ocorre, por exemplo, no final da execução de um método para variáveis locais. Consequently, the associated resources are properly cleaned up without requiring explicit closure. However, if you want to "force" the closure of a socket at any moment, [**nullify** its references by setting them to **Null**](../Concepts/dt_object.md#resources).

:::info 4DTCPUDPLog.txt file

For debugging and monitoring, you can use the [4DTCPUDPLog.txt log file] that records events related to UDP sockets. Events include data transmission, errors, and connection lifecycle information.

:::

<details><summary>História</summary>

| Release | Mudanças          |
| ------- | ----------------- |
| 20 R10  | Classe adicionada |

</details>

### Exemplo

### UDPSocket Object

A UDPSocket object is immutable, non streamable.

UDPSocket objects provide the following properties and functions:

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #UDPSocket.errors.Syntax -->](#errors)<br/><!-- INCLUDE #UDPSocket.errors.Summary --> |
| [<!-- INCLUDE #UDPSocket.port.Syntax -->](#port)<br/><!-- INCLUDE #UDPSocket.port.Summary -->       |
| [<!-- INCLUDE #UDPSocket.send().Syntax -->](#send)<br/><!-- INCLUDE #UDPSocket.send().Summary -->   |

<!-- REF #4D.UDPSocket.new().Desc -->

## 4D.UDPSocket.new()

<!-- REF #4D.UDPSocket.new().Syntax -->**4D.UDPSocket.new**( *options* : Object  ) : 4D.UDPSocket<br/>**4D.UDPSocket.new**( *port* : Integer ; *options* : Object  ) : 4D.UDPSocket<!-- END REF -->

<!-- REF #4D.UDPSocket.new().params -->

| Parâmetro  | Tipo      |                             | Descrição                                                                                      |
| ---------- | --------- | --------------------------- | ---------------------------------------------------------------------------------------------- |
| port       | Integer   | ->                          | Local port used for UDP socket (0 or omitted = find any unused port to use) |
| options    | Object    | ->                          | Configuration [options](#options-parameter) for the socket                                     |
| Resultados | UDPSocket | <- | New UDPSocket object                                                                           |

<!-- END REF -->

#### Descrição

The `4D.UDPSocket.new()` function <!-- REF #4D.UDPSocket.new().Summary -->creates a new UDP socket using the defined *options* on the specified *port* (if any) or on a random unused port, and returns a `4D.UDPSocket` object<!-- END REF -->.

#### `options` parameter

No parâmetro *options*, passe um objeto que possa conter as seguintes propriedades:

| Propriedade | Tipo    | Descrição                                         | Por padrão |
| ----------- | ------- | ------------------------------------------------- | ---------- |
| onData      | Formula | Callback acionado quando os dados forem recebidos | Indefinido |
| onError     | Formula | Callback acionado no caso de um erro              | Indefinido |
| onTerminate | Formula | Callback triggered when the port is released      | Indefinido |

#### Funções Callback

Todas as funções de chamada de retorno recebem dois parâmetros de objectos:

| Parâmetro | Tipo                                    | Descrição                                          |
| --------- | --------------------------------------- | -------------------------------------------------- |
| $socket   | [`UDPSocket` object](#udpsocket-object) | The current UDPSocket instance.    |
| $event    | [`UDPEvent` object](#udppevent-object)  | Contém informações sobre o evento. |

**Sequência de chamadas de retorno:**

1. `onData` é acionado cada vez que os dados são recebidos.
2. `onError` é acionado se ocorrer um erro.
3. `onTerminate` is always triggered just before the port is released (socket is closed or an error occured).

#### UDPEvent object

A [`UDPEvent`](UDPEventClass.md) object is returned when a [callback function](#callback-functions) is called.

<!-- END REF -->

<!-- REF #UDPSocket.errors.Desc -->

## .errors

<!-- REF #UDPSocket.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Descrição

The `.errors` property contains <!-- REF #UDPSocket.errors.Summary -->a collection of error objects associated with the socket<!-- END REF -->. Cada objeto de erro inclui o código de erro, uma descrição e a assinatura do componente que causou o erro.

| Propriedade |                                                                                           | Tipo       | Descrição                                            |
| ----------- | ----------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------- |
| errors      |                                                                                           | Collection | pilha de erros 4D em caso de erro                    |
|             | [].errCode            | Number     | Código de erro 4D                                    |
|             | [].message            | Text       | Descrição do erro 4D                                 |
|             | [].componentSignature | Text       | Assinatura da componente interna que devolveu o erro |

<!-- END REF -->

<!-- REF #UDPSocket.port.Desc -->

## .port

<!-- REF #UDPSocket.port.Syntax -->**port** : Number<!-- END REF -->

#### Descrição

The `.port` property contains <!-- REF #UDPSocket.port.Summary -->the port number to listen to<!-- END REF -->. Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF #UDPSocket.send().Desc -->

## .send()

<!-- REF #UDPSocket.send().Syntax -->**.send**( *data* : Blob ; *hostName* : Text ; *remotePort* : Integer )<!-- END REF -->

<!-- REF #UDPSocket.send().params -->

| Parâmetro  | Tipo    |    | Descrição                                            |
| ---------- | ------- | -- | ---------------------------------------------------- |
| data       | Blob    | -> | Dados a serem enviados                               |
| hostName   | Text    | -> | Name or IP address of server                         |
| remotePort | Integer | -> | Remote port to connect to (0=any) |

<!-- END REF -->

#### Descrição

The `send()` function <!-- REF #UDPSocket.send().Summary -->sends *data* to the remote *hostName* server on the specified *remotePort*<!-- END REF -->.

*hostName* is the name or IP address of the server where the data will be sent.

*remotePort* is the number of the port to be connected to. If you pass 0, any available port will be used.

<!-- END REF -->

#### Veja também

[UDPEvent](UDPEventClass.md)