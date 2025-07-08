---
id: UDPSocketClass
title: UDPSocket
---

The `UDPSocket` class allows you to send and receive UDP packets. UDP (User Datagram Protocol) is an easy-to-implement protocol for sending data. It is faster and simpler than TCP (only 8 bytes of header as opposed to at least 20 bytes in TCP), but it does not offer the same level of reliability. It is useful for applications where data must arrive at their destination quickly. However, it does not allow verification of delivery, nor does it allow error-checking or recovery of data that was not delivered correctly.

The `UDPSocket` class is available from the `4D` class store. You can create a UDP connection using the [4D.UDPSocket.new()](#4dudpsocketnew) function, which returns a [UDPSocket object](#udpsocket-object).

Thanks to the standard 4D object *refcounting*, a UDPSocket is automatically released when it is no longer referenced, i.e. when no more references to them exist in memory. Esto ocurre típicamente, por ejemplo, al final de una ejecución de un método para variables locales. Consequently, the associated resources are properly cleaned up without requiring explicit closure. However, if you want to "force" the closure of a socket at any moment, [**nullify** its references by setting them to **Null**](../Concepts/dt_object.md#resources).

:::info 4DTCPUDPLog.txt file

For debugging and monitoring, you can use the [4DTCPUDPLog.txt log file] that records events related to UDP sockets. Los eventos incluyen transmisión de datos, errores e información del ciclo de vida de la conexión.

:::

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R10      | Clase añadida  |

</details>

### Ejemplo

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

| Parámetros | Tipo      |                             | Descripción                                                                                    |
| ---------- | --------- | --------------------------- | ---------------------------------------------------------------------------------------------- |
| port       | Integer   | ->                          | Local port used for UDP socket (0 or omitted = find any unused port to use) |
| options    | Object    | ->                          | Configuration [options](#options-parameter) for the socket                                     |
| Resultado  | UDPSocket | <- | New UDPSocket object                                                                           |

<!-- END REF -->

#### Descripción

The `4D.UDPSocket.new()` function <!-- REF #4D.UDPSocket.new().Summary -->creates a new UDP socket using the defined *options* on the specified *port* (if any) or on a random unused port, and returns a `4D.UDPSocket` object<!-- END REF -->.

#### Parámetro *options*

En el parámetro *options*, pase un objeto que puede contener las siguientes propiedades:

| Propiedad   | Tipo    | Descripción                                   | Por defecto |
| ----------- | ------- | --------------------------------------------- | ----------- |
| onData      | Formula | Retrollamada activada cuando se reciben datos | Indefinido  |
| onError     | Formula | Retrollamada en caso de error                 | Indefinido  |
| onTerminate | Formula | Callback triggered when the port is released  | Indefinido  |

#### Función callback (retrollamada)

Todas las funciones de retrollamada reciben dos parámetros:

| Parámetros | Tipo                                    | Descripción                                           |
| ---------- | --------------------------------------- | ----------------------------------------------------- |
| $socket    | [`UDPSocket` object](#udpsocket-object) | The current UDPSocket instance.       |
| $event     | [`UDPEvent` object](#udppevent-object)  | Contiene información sobre el evento. |

**Secuencia de retrollamadas:**

1. `onData` se activa cada vez que se reciben datos.
2. `onError` se activa si se produce un error.
3. `onTerminate` is always triggered just before the port is released (socket is closed or an error occured).

#### UDPEvent object

A [`UDPEvent`](UDPEventClass.md) object is returned when a [callback function](#callback-functions) is called.

<!-- END REF -->

<!-- REF #UDPSocket.errors.Desc -->

## .errors

<!-- REF #UDPSocket.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Descripción

The `.errors` property contains <!-- REF #UDPSocket.errors.Summary -->a collection of error objects associated with the socket<!-- END REF -->. Cada objeto de error incluye el código de error, una descripción y la firma del componente que causó el error.

| Propiedad |                                                                                           | Tipo       | Descripción                                           |
| --------- | ----------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------- |
| errors    |                                                                                           | Collection | Pila de error 4D en caso de error                     |
|           | [].errCode            | Number     | Código de error 4D                                    |
|           | [].message            | Text       | Descripción del error 4D                              |
|           | [].componentSignature | Text       | Firma del componente interno que ha devuelto el error |

<!-- END REF -->

<!-- REF #UDPSocket.port.Desc -->

## .port

<!-- REF #UDPSocket.port.Syntax -->**port** : Number<!-- END REF -->

#### Descripción

The `.port` property contains <!-- REF #UDPSocket.port.Summary -->the port number to listen to<!-- END REF -->. Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF #UDPSocket.send().Desc -->

## .send()

<!-- REF #UDPSocket.send().Syntax -->**.send**( *data* : Blob ; *hostName* : Text ; *remotePort* : Integer )<!-- END REF -->

<!-- REF #UDPSocket.send().params -->

| Parámetros | Tipo    |    | Descripción                                          |
| ---------- | ------- | -- | ---------------------------------------------------- |
| data       | Blob    | -> | Datos a enviar                                       |
| hostName   | Text    | -> | Name or IP address of server                         |
| remotePort | Integer | -> | Remote port to connect to (0=any) |

<!-- END REF -->

#### Descripción

The `send()` function <!-- REF #UDPSocket.send().Summary -->sends *data* to the remote *hostName* server on the specified *remotePort*<!-- END REF -->.

*hostName* is the name or IP address of the server where the data will be sent.

*remotePort* is the number of the port to be connected to. If you pass 0, any available port will be used.

<!-- END REF -->

#### Ver también

[UDPEvent](UDPEventClass.md)