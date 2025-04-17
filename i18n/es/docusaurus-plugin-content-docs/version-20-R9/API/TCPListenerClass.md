---
id: TCPListenerClass
title: TCPListener
---

The `TCPListener` class allows you to create and configure a TCP server in 4D. Once the TCP listener is instantiated, you can receive client TCP connections and communicate using any protocol supporting TCP.

The `TCPListener` class is available from the `4D` class store. You can create a TCP server using the [4D.TCPListener.new()](#4dtcplistenernew) function, which returns a [TCPListener object](#tcplistener-object).

All `TCPListener` class functions are thread-safe.

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R9       | Clase añadida  |

</details>

### Ejemplo

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

See [example in TCPConnection class](./TCPConnectionClass.md#asynchronous-example) for a description of the MyAsyncTCPConnection user class.

:::

### Objeto TCPListener

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

| Parámetros | Tipo                           |                             | Descripción                                                  |
| ---------- | ------------------------------ | --------------------------- | ------------------------------------------------------------ |
| port       | Number                         | ->                          | Puerto TCP de escucha                                        |
| options    | Object                         | ->                          | Configuration [options](#options-parameter) for the listener |
| Resultado  | 4D.TCPListener | <- | New TCPListener object                                       |

<!-- END REF -->

#### Descripción

The `4D.TCPListener.new()` function <!-- REF #4D.TCPListener.new().Summary -->creates a new TCP server listening to the specified *port* using the defined *options*, and returns a `4D.TCPListener` object<!-- END REF -->.

#### Parámetro *options*

In the *options* parameter, pass an object to configure the listener and all the `TCPConnections` it creates:

| Propiedad    | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                   | Por defecto |
| ------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| onConnection | Formula | Callback when a new connection is established. The Formula receives two parameters (*$listener* and *$event*, see below) and must return either null/undefined to prevent the connection or an *option* object that will be used to create the [`TCPConnection`](./TCPConnectionClass.md). | Indefinido  |
| onError      | Formula | Callback triggered in case of an error. The Formula receives the `TCPListener` object in *$listener*                                                                                                                                                                                                                          | Indefinido  |
| onTerminate  | Formula | Callback triggered just before the TCPListener is closed. The Formula receives the `TCPListener` object in *$listener*                                                                                                                                                                                                        | Indefinido  |

#### Función callback (retrollamada)

Callback functions receive up to two parameters:

| Parámetros | Tipo                                        | Descripción                                           |
| ---------- | ------------------------------------------- | ----------------------------------------------------- |
| $listener  | [`TCPListener` object](#tcplistener-object) | The current TCP listener instance.    |
| $event     | [objeto `TCPEvent`](#tcpevent-object)       | Contains information about the event. |

**Sequence of Callback Calls:**

1. `onConnection` is triggered each time a connection is established.
2. `onError` is triggered if an error occurs.
3. `onTerminate` is always triggered just before a connection is terminated.

#### Objeto TCPEvent

Un objeto [`TCPEvent`](TCPEventClass.md) es devuelto cuando se llama una [función de retrollamada](#callback-functions).

<!-- END REF -->

<!-- REF #TCPListener.errors.Desc -->

## .errors

<!-- REF #TCPListener.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Descripción

The `.errors` property contains <!-- REF #TCPListener.errors.Summary -->a collection of error objects associated with the connection<!-- END REF -->. Each error object includes the error code, a description, and the signature of the component that caused the error.

| Propiedad |                                                                                           | Tipo       | Descripción                                           |
| --------- | ----------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------- |
| errors    |                                                                                           | Collection | Pila de error 4D en caso de error                     |
|           | [].errCode            | Number     | Código de error 4D                                    |
|           | [].message            | Text       | Descripción del error 4D                              |
|           | [].componentSignature | Text       | Firma del componente interno que ha devuelto el error |

<!-- END REF -->

<!-- REF #TCPListener.port.Desc -->

## .port

<!-- REF #TCPListener.port.Syntax -->**port** : Number<!-- END REF -->

#### Descripción

The `.port` property contains <!-- REF #TCPListener.port.Summary -->the port number of the machine<!-- END REF -->. Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF #TCPListener.terminate().Desc -->

## .terminate()

<!-- REF #TCPListener.terminate().Syntax -->**.terminate**()<!-- END REF -->

<!-- REF #TCPListener.terminate().params -->

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

The `terminate()` function <!-- REF #TCPListener.terminate().Summary -->closes the listener and releases the port<!-- END REF -->.

<!-- END REF -->

