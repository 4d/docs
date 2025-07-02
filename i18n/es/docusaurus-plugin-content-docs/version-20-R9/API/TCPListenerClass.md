---
id: TCPListenerClass
title: TCPListener
---

La clase `TCPListener` permite crear y configurar un servidor TCP en 4D. Once the TCP listener is instantiated, you can receive client TCP connections and communicate using any protocol supporting TCP.

La clase `TCPListener` está disponible en el class store `4D`. Puede crear un servidor TCP utilizando la función [4D.TCPListener.new()](#4dtcplistenernew), que devuelve un [objeto TCPListener](#tcplistener-object).

Todas las funciones de la clase `TCPListener` son hilo seguro.

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

Ver [ejemplo en la clase TCPConnection](./TCPConnectionClass.md#asynchronous-example) para una descripción de la clase de usuario MyAsyncTCPConnection.

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
| Resultado  | 4D.TCPListener | <- | Nuevo objeto TCPListener                                     |

<!-- END REF -->

#### Descripción

La función `4D.TCPListener.new()` <!-- REF #4D.TCPListener.new().Summary -->crea un nuevo servidor TCP escuchando el *puerto* especificado usando las *options* definidas, y devuelve un objeto `4D.TCPListener`<!-- END REF -->.

#### Parámetro *options*

In the *options* parameter, pass an object to configure the listener and all the `TCPConnections` it creates:

| Propiedad    | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                            | Por defecto |
| ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| onConnection | Formula | Llamada de retorno cuando se define una nueva conexión. The Formula receives two parameters (*$listener* and *$event*, see below) and must return either null/undefined to prevent the connection or an *option* object that will be used to create the [`TCPConnection`](./TCPConnectionClass.md). | Indefinido  |
| onError      | Formula | Retrollamada activada en caso de error. La fórmula recibe el objeto `TCPListener` en *$listener*                                                                                                                                                                                                                                       | Indefinido  |
| onTerminate  | Formula | Retrollamada activada justo antes de que se cierre el TCPListener. La fórmula recibe el objeto `TCPListener` en *$listener*                                                                                                                                                                                                            | Indefinido  |

#### Función callback (retrollamada)

Las funciones de retrollamada reciben hasta dos parámetros:

| Parámetros | Tipo                                        | Descripción                                           |
| ---------- | ------------------------------------------- | ----------------------------------------------------- |
| $listener  | [`TCPListener` object](#tcplistener-object) | La instancia actual del listener TCP. |
| $event     | [objeto `TCPEvent`](#tcpevent-object)       | Contiene información sobre el evento. |

**Secuencia de retrollamadas:**

1. `onConnection` is triggered each time a connection is established.
2. `onError` se activa si se produce un error.
3. `onTerminate` is always triggered just before a connection is terminated.

#### Objeto TCPEvent

Un objeto [`TCPEvent`](TCPEventClass.md) es devuelto cuando se llama una [función de retrollamada](#callback-functions).

<!-- END REF -->

<!-- REF #TCPListener.errors.Desc -->

## .errors

<!-- REF #TCPListener.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Descripción

La propiedad `.errors` contiene <!-- REF #TCPListener.errors.Summary -->una colección de objetos de error asociados con la conexión<!-- END REF -->. Cada objeto de error incluye el código de error, una descripción y la firma del componente que causó el error.

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

La propiedad `.port` contiene <!-- REF #TCPListener.port.Summary -->el número de puerto de la máquina<!-- END REF -->. Esta propiedad es de **solo lectura**.

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

La función `terminate()` <!-- REF #TCPListener.terminate().Summary -->cierra el oyente y libera el puerto<!-- END REF -->.

<!-- END REF -->

