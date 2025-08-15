---
id: UDPSocketClass
title: UDPSocket
---

La clase `UDPSocket` permite enviar y recibir paquetes UDP. UDP (User Datagram Protocol) es un protocolo de fácil implementación para el envío de datos. Es más rápido y sencillo que TCP (sólo 8 bytes de encabezado frente a los al menos 20 bytes en TCP), pero no ofrece el mismo nivel de fiabilidad. Es útil para aplicaciones en las que los datos deben llegar rápidamente a su destino. Sin embargo, no permite verificar la entrega, ni comprobar errores o recuperar datos que no se hayan entregado correctamente.

La clase `UDPSocket` está disponible en el class store `4D`. Puede crear una conexión UDP utilizando la función [4D.UDPSocket.new()](#4dudpsocketnew), que devuelve un [objeto UDPSocket](#udpsocket-object).

Gracias al *refcounting* de los objetos 4D estándar, un socket UDPSocket se libera automáticamente cuando deja de estar referenciado, es decir, cuando no existen más referencias a ellos en memoria. Esto ocurre típicamente, por ejemplo, al final de una ejecución de un método para variables locales. En consecuencia, los recursos asociados se limpian adecuadamente sin necesidad de un cierre explícito. Sin embargo, si quieres "forzar" el cierre de un socket en cualquier momento, [**nulifica** sus referencias poniéndolas **Null**](../Concepts/dt_object.md#resources).

:::info 4DTCPUDPLog.txt file

Para depuración y monitorización, puede utilizar el fichero de registro [4DTCPUDPLog.txt](../Debugging/debugLogFiles.md#4dtcpudplogtxt) que registra los eventos relacionados con los sockets UDP. Los eventos incluyen transmisión de datos, errores e información del ciclo de vida de la conexión.

:::

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R10      | Clase añadida  |

</details>

### Ejemplo

### Objeto UDPSocket

Un objeto UDPSocket no es modificable y no es streamable.

Los objetos UDPSocket ofrecen las siguientes propiedades y funciones:

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #UDPSocket.errors.Syntax -->](#errors)<br/><!-- INCLUDE #UDPSocket.errors.Summary --> |
| [<!-- INCLUDE #UDPSocket.port.Syntax -->](#port)<br/><!-- INCLUDE #UDPSocket.port.Summary -->       |
| [<!-- INCLUDE #UDPSocket.send().Syntax -->](#send)<br/><!-- INCLUDE #UDPSocket.send().Summary -->   |

<!-- REF 4D.UDPSocket.new().Desc -->

## 4D.UDPSocket.new()

<!-- REF #4D.UDPSocket.new().Syntax -->**4D.UDPSocket.new**() : 4D.UDPSocket<br/>**4D.UDPSocket.new**( *options* : Object ) : 4D.UDPSocket<br/>**4D.UDPSocket.new**( *port* : Integer ) : 4D.UDPSocket<br/>**4D.UDPSocket.new**( *port* : Integer ; *options* : Object ) : 4D.UDPSocket<!-- END REF -->

<!-- REF #4D.UDPSocket.new().params -->

| Parámetros | Tipo      |                             | Descripción                                                                                                                     |
| ---------- | --------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| port       | Integer   | ->                          | Puerto local utilizado para el socket UDP (0 u omitido = buscar cualquier puerto no utilizado para utilizar) |
| options    | Object    | ->                          | Configuración [opciones](#options-parameter) para el socket                                                                     |
| Resultado  | UDPSocket | <- | Nuevo objeto UDPSocket                                                                                                          |

<!-- END REF -->

#### Descripción

La función `4D.UDPSocket.new()` <!-- REF #4D.UDPSocket.new().Summary -->crea un nuevo socket UDP utilizando las *options* definidas (si las hay) en el *port* especificado (si lo hay) o en un puerto aleatorio no utilizado, y devuelve un objeto `4D.UDPSocket`<!-- END REF -->.

#### Parámetro *options*

En el parámetro *options*, puede pasar un objeto que contenga las siguientes propiedades:

| Propiedad   | Tipo    | Descripción                                      | Por defecto |
| ----------- | ------- | ------------------------------------------------ | ----------- |
| onData      | Formula | Retrollamada activada cuando se reciben datos    | Indefinido  |
| onError     | Formula | Retrollamada en caso de error                    | Indefinido  |
| onTerminate | Formula | Retrollamada activada cuando se libera el puerto | Indefinido  |

#### Función callback (retrollamada)

Todas las funciones de retrollamada reciben dos parámetros:

| Parámetros | Tipo                                    | Descripción                                           |
| ---------- | --------------------------------------- | ----------------------------------------------------- |
| $socket    | [`UDPSocket` object](#udpsocket-object) | La instancia UDPSocket actual.        |
| $event     | [`UDPEvent` object](#udpevent-object)   | Contiene información sobre el evento. |

**Secuencia de retrollamadas:**

1. `onData` se activa cada vez que se reciben datos.
2. `onError` se activa si se produce un error.
3. `onTerminate` siempre se activa justo antes de que el puerto se libere (el socket se cierra o se produce un error).

#### Objeto UDPEvent

Un objeto [`UDPEvent`](UDPEventClass.md) es devuelto cuando se llama una [función de retrollamada](#callback-functions).

<!-- END REF -->

<!-- REF UDPSocket.errors.Desc -->

## .errors

<!-- REF #UDPSocket.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Descripción

La propiedad `.errors` contiene <!-- REF #UDPSocket.errors.Summary -->una colección de objetos de error asociados al socket<!-- END REF -->. Cada objeto de error incluye el código de error, una descripción y la firma del componente que causó el error.

| Propiedad |                                                                                           | Tipo       | Descripción                                           |
| --------- | ----------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------- |
| errors    |                                                                                           | Collection | Pila de error 4D en caso de error                     |
|           | [].errCode            | Number     | Código de error 4D                                    |
|           | [].message            | Text       | Descripción del error 4D                              |
|           | [].componentSignature | Text       | Firma del componente interno que ha devuelto el error |

<!-- END REF -->

<!-- REF UDPSocket.port.Desc -->

## .port

<!-- REF #UDPSocket.port.Syntax -->**port** : Number<!-- END REF -->

#### Descripción

La propiedad `.port` contiene <!-- REF #UDPSocket.port.Summary -->el número de puerto a escuchar<!-- END REF -->. Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF UDPSocket.send().Desc -->

## .send()

<!-- REF #UDPSocket.send().Syntax -->**.send**( *data* : Blob ; *hostName* : Text ; *remotePort* : Integer )<!-- END REF -->

<!-- REF #UDPSocket.send().params -->

| Parámetros | Tipo    |    | Descripción                                                       |
| ---------- | ------- | -- | ----------------------------------------------------------------- |
| data       | Blob    | -> | Datos a enviar                                                    |
| hostName   | Text    | -> | Nombre o dirección IP del servidor                                |
| remotePort | Integer | -> | Puerto remoto al que conectarse (0=cualquiera) |

<!-- END REF -->

#### Descripción

La función `send()` <!-- REF #UDPSocket.send().Summary -->envía *data* al servidor remoto *hostName* en el *remotePort* especificado<!-- END REF -->.

*hostName* es el nombre o la dirección IP del servidor al que se enviarán los datos.

*remotePort* es el número del puerto al que hay que conectarse. Si pasa 0, se utilizará cualquier puerto disponible.

<!-- END REF -->

#### Ver también

[UDPEvent](UDPEventClass.md)