---
id: TCPConnectionClass
title: TCPConnection
---

La clase `TCPConnection` permite gestionar conexiones cliente del Protocolo de Control de Transmisión (TCP) a un [servidor](./TCPListenerClass.md), permitiendo enviar y recibir datos, y manejar eventos del ciclo de vida de la conexión mediante retrollamadas.

La clase `TCPConnection` está disponible en el class store `4D`. Puede crear una conexión TCP utilizando la función [4D.TCPConnection.new()](#4dtcpconnectionnew) que devuelve un [TCPConnection object](#tcpconnection-object).

Todas las funciones de la clase `TCPConnection` son hilo seguro.

Gracias al *refcounting* estándar de los objetos 4D, una TCPConnection se libera automáticamente cuando deja de estar referenciada. En consecuencia, los recursos asociados, se limpian adecuadamente sin necesidad de un cierre explícito.

Los objetos TCPConnection se liberan cuando ya no existen referencias a ellos en memoria. Esto ocurre típicamente, por ejemplo, al final de una ejecución de un método para variables locales. If you want to "force" the closure of a connection at any moment, [**nullify** its references by setting them to **Null**](../Concepts/dt_object.md#resources).

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                  |
| ----------- | ----------------------------------------------- |
| 20 R9       | Nuevos atributos `listener`, `address` y `port` |
| 20 R8       | Clase añadida                                   |

</details>

### Ejemplos

Los siguientes ejemplos demuestran cómo utilizar las clases 4D.TCPConnection y 4D.TCPEvent para gestionar una conexión cliente TCP, manejar eventos, enviar datos y cerrar correctamente la conexión. Se ofrecen ejemplos tanto síncronos como asíncronos.

#### Ejemplo sincrónico

Este ejemplo muestra cómo establecer una conexión, enviar datos y cerrarla utilizando un simple objeto para la configuración:

```4d
var $domain : Text := "127.0.0.1"
var $port : Integer := 10000
var $options : Object := New object() // Objeto de configuración
var $tcpClient : 4D.TCPConnection
var $message : Text := "test message"

// Abrir una conexión
$tcpClient := 4D.TCPConnection.new($domain; $port; $options)

// Enviar datos
var $blobData : Blob
TEXT TO BLOB($message; $blobData; UTF8 text without length)
$tcpClient.send($blobData)

// Apagar
$tcpClient.shutdown()
$tcpClient.wait(0)

```

#### Ejemplo asincrónico

Este ejemplo define una clase que maneja el ciclo de vida de la conexión y los eventos, mostrando cómo trabajar de forma asíncrona:

```4d
// Definición de la clase: cs.MyAsyncTCPConnection

Class constructor($url : Text; $port : Integer)
    This.connection := Null
    This.url := $url
    This.port := $port

// Conectarse a uno de los servidores lanzados dentro de los workers
Function connect()
    This.connection := 4D.TCPConnection.new(This.url; This.port; This)

// Desconectarse del servidor
Function disconnect()
    This.connection.shutdown()
    This.connection := Null

// Enviar datos al servidor
Function getInfo()
    var $blob : Blob
    TEXT TO BLOB("Información"; $blob)
    This.connection.send($blob)

// Retrollamada cuando la conexión se ha establecido correctamente
Function onConnection($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
    ALERT("Conexión establecida")

// Retrollamada  cuando la conexión se ha cerrado correctamente
Function onShutdown($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
    ALERT("Conexión cerrada")

// Retrollamada cuando se reciben datos del servidor
Function onData($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
    ALERT(BLOB to text($event.data; UTF8 text without length))

	//Atención: no hay garantía de que reciba todos los datos que necesita en un solo paquete de red.
	
// Retrollamada cuando la conexión se cierra inesperadamente
Function onError($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
    ALERT("Error de conexión")

// Retrollamada después de onShutdown/onError justo antes de que el objeto TCPConnection sea liberado
Function onTerminate($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
	ALERT("Conexión terminada")


```

##### Ejemplo de uso

Crea un nuevo método llamado AsyncTCP, para inicializar y gestionar la conexión TCP:

```4d
var $myObject : cs.MyAsyncTCPConnection
$myObject := cs.MyAsyncTCPConnection.new("myURL"; 10000)
$myObject.connect()
$myObject.getInfo()
$myObject.disconnect()

```

Llama al método AsyncTCP en un worker:

```4d
CALL WORKER("new process"; "Async_TCP")

```

### Objeto TCPConnection

Un objeto TCPConnection es un objeto no compartible.

Los objetos TCPConnection ofrecen las siguientes propiedades y funciones:

|                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #TCPConnection.address.Syntax -->](#address)<br/><!-- INCLUDE #TCPConnection.address.Summary -->        |
| [<!-- INCLUDE #TCPConnection.closed.Syntax -->](#closed)<br/><!-- INCLUDE #TCPConnection.closed.Summary -->           |
| [<!-- INCLUDE #TCPConnection.errors.Syntax -->](#errors)<br/><!-- INCLUDE #TCPConnection.errors.Summary -->           |
| [<!-- INCLUDE #TCPConnection.listener.Syntax -->](#listener)<br/><!-- INCLUDE #TCPConnection.listener.Summary -->     |
| [<!-- INCLUDE #TCPConnection.noDelay.Syntax -->](#nodelay)<br/><!-- INCLUDE #TCPConnection.noDelay.Summary -->        |
| [<!-- INCLUDE #TCPConnection.port.Syntax -->](#port)<br/><!-- INCLUDE #TCPConnection.port.Summary -->                 |
| [<!-- INCLUDE #TCPConnection.send().Syntax -->](#send)<br/><!-- INCLUDE #TCPConnection.send().Summary -->             |
| [<!-- INCLUDE #TCPConnection.shutdown().Syntax -->](#shutdown)<br/><!-- INCLUDE #TCPConnection.shutdown().Summary --> |
| [<!-- INCLUDE #TCPConnection.wait().Syntax -->](#wait)<br/><!-- INCLUDE #TCPConnection.wait().Summary -->             |

<!-- REF #4D.TCPConnection.new().Desc -->

## 4D.TCPConnection.new()

<!-- REF #4D.TCPConnection.new().Syntax -->**4D.TCPConnection.new**( *serverAddress* : Text ; *serverPort* : Number ; *options* : Object  ) : 4D.TCPConnection<!-- END REF -->

<!-- REF #4D.TCPConnection.new().params -->

| Parámetros    | Tipo          |                             | Descripción                                                   |
| ------------- | ------------- | --------------------------- | ------------------------------------------------------------- |
| serverAddress | Text          | ->                          | Nombre de dominio o dirección IP del servidor                 |
| serverPort    | Integer       | ->                          | Número de puerto del servidor                                 |
| options       | Object        | ->                          | Configuración [opciones](#options-parameter) para la conexión |
| Resultado     | TCPConnection | <- | Nuevo objeto TCPConnection                                    |

<!-- END REF -->

#### Descripción

La función `4D.TCPConnection.new()` <!-- REF #4D.TCPConnection.new().Summary -->crea una nueva conexión TCP a la *serverAddress* y *serverPort* especificados, usando las *opciones* definidas, y devuelve un objeto `4D.HTTPRequest`<!-- END REF -->.

#### Parámetro *options*

En el parámetro *options*, pase un objeto que puede contener las siguientes propiedades:

| Propiedad         | Tipo    | Descripción                                                                                                                                    | Por defecto                                |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| onConnection      | Formula | Retrollamada que se activa cuando se establece la conexión.                                                                    | Indefinido                                 |
| onData            | Formula | Retrollamada activada cuando se reciben datos                                                                                                  | Indefinido                                 |
| onShutdown        | Formula | Retrollamada activada cuando la conexión se cierra correctamente                                                                               | Indefinido                                 |
| onError           | Formula | Retrollamada en caso de error                                                                                                                  | Indefinido                                 |
| onTerminate       | Formula | Retrollamada activada justo antes de que se libere la TCPConnection                                                                            | Indefinido                                 |
| noDelay           | Boolean | **Sólo lectura** cesactiva el algoritmo de Nagle si `true`                                                                                     | False                                      |
| connectionTimeout | Real    | Tiempo máximo (en segundos) para establecer la conexión. Si se supera, se interrumpe el intento de conexión | Definido por el sistema, generalmente ≥ 30 |

#### Función callback (retrollamada)

Todas las funciones de retrollamada reciben dos parámetros:

| Parámetros  | Tipo                                            | Descripción                                           |
| ----------- | ----------------------------------------------- | ----------------------------------------------------- |
| $connection | [objeto `TCPConnection`](#tcpconnection-object) | La instancia de conexión TCP actual.  |
| $event      | [objeto `TCPEvent`](#tcpevent-object)           | Contiene información sobre el evento. |

**Secuencia de retrollamadas:**

1. `onConnection` se activa cuando se establece la conexión.
2. `onData` se activa cada vez que se reciben datos.
3. Se activa `onShutdown` o `onError`:
   - `onShutdown` se activa cuando la conexión se cierra correctamente.
   - `onError` se activa si se produce un error.
4. `onTerminate` siempre se activa justo antes de que la TCPConnection se libere (la conexión se cierra o se produce un error).

#### Objeto TCPEvent

Un objeto [`TCPEvent`](TCPEventClass.md) es devuelto cuando se llama una [función de retrollamada](#callback-functions).

<!-- END REF -->

<!-- REF #TCPConnection.address.Desc -->

## .address

<!-- REF #TCPConnection.address.Syntax -->**address** : Text<!-- END REF -->

#### Descripción

La propiedad `.address` contiene <!-- REF #TCPConnection.address.Summary -->la dirección IP o el nombre de dominio de la máquina remota<!-- END REF -->.

<!-- END REF -->

<!-- REF #TCPConnection.closed.Desc -->

## .closed

<!-- REF #TCPConnection.closed.Syntax -->**closed** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.closed` contiene <!-- REF #TCPConnection.closed.Summary -->si la conexión está cerrada<!-- END REF -->. Devuelve `true` si la conexión se ha cerrado, ya sea debido a un error, una llamada a `shutdown()`, o el cierre por parte del servidor.

<!-- END REF -->

<!-- REF #TCPConnection.errors.Desc -->

## .errors

<!-- REF #TCPConnection.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Descripción

La propiedad `.errors` contiene <!-- REF #TCPConnection.errors.Summary -->una colección de objetos de error asociados a la conexión<!-- END REF -->. Each error object includes the error code, a description, and the signature of the component that caused the error.

| Propiedad |                                                                                           | Tipo       | Descripción                                           |
| --------- | ----------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------- |
| errors    |                                                                                           | Collection | Pila de error 4D en caso de error                     |
|           | [].errCode            | Number     | Código de error 4D                                    |
|           | [].message            | Text       | Descripción del error 4D                              |
|           | [].componentSignature | Text       | Firma del componente interno que ha devuelto el error |

<!-- END REF -->

<!-- REF #TCPConnection.listener.Desc -->

## .listener

<!-- REF #TCPConnection.listener.Syntax -->**listener** : Object<!-- END REF -->

#### Descripción

La propiedad `.listener` contiene <!-- REF #TCPConnection.listener.Summary -->el objeto [`TCPListener`](./TCPListenerClass.md) que creó la `TCPConnection`, si existe<!-- END REF -->. Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF #TCPConnection.noDelay.Desc -->

## .noDelay

<!-- REF #TCPConnection.noDelay.Syntax -->**noDelay** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.noDelay` contiene <!-- REF #TCPConnection.noDelay.Summary -->si el algoritmo de Nagle está desactivado (`true`) o activado (`false`)<!-- END REF -->. Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF #TCPConnection.port.Desc -->

## .port

<!-- REF #TCPConnection.port.Syntax -->**port** : Number<!-- END REF -->

#### Descripción

La propiedad `.port` contiene <!-- REF #TCPConnection.port.Summary -->el número de puerto de la máquina remota<!-- END REF -->. Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF #TCPConnection.send().Desc -->

## .send()

<!-- REF #TCPConnection.send().Syntax -->**.send**( *data* : Blob )<!-- END REF -->

<!-- REF #TCPConnection.send().params -->

| Parámetros | Tipo |    | Descripción    |
| ---------- | ---- | -- | -------------- |
| data       | Blob | -> | Datos a enviar |

<!-- END REF -->

#### Descripción

La función `send()` <!-- REF #TCPConnection.send().Summary -->envía datos al servidor<!-- END REF -->. Si la conexión no se ha establecido todavía, los datos se envían una vez que se ha establecido la conexión.

<!-- END REF -->

<!-- REF #TCPConnection.shutdown().Desc -->

## .shutdown()

<!-- REF #TCPConnection.shutdown().Syntax -->**.shutdown**()<!-- END REF -->

<!-- REF #TCPConnection.shutdown().params -->

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

La función `shutdown()`<!-- REF #TCPConnection.shutdown().Summary -->cierra el canal *write* de la conexión (cliente a servidor)<!-- END REF --> mientras se mantiene abierto el canal *read* (servidor al flujo del cliente) permitiéndole continuar recibiendo datos hasta que la conexión sea completamente cerrada por el servidor o se produzca un error.

<!-- END REF -->

<!-- REF #TCPConnection.wait().Desc -->

## .wait()

<!-- REF #TCPConnection.wait().Syntax -->**.wait**( { *timeout* : Real } )<!-- END REF -->

<!-- REF #TCPConnection.wait().params -->

| Parámetros | Tipo |     | Descripción                         |
| ---------- | ---- | :-: | ----------------------------------- |
| timeout    | Real |  -> | Tiempo máximo de espera en segundos |

<!-- END REF -->

#### Descripción

La función `wait()` <!-- REF #TCPConnection.wait().Summary -->espera hasta que se cierre la conexión TCP o se alcance el `timeout` especificado<!-- END REF -->

:::note

Durante la ejecución de `.wait()`, se ejecutan funciones de callback, tanto si proceden de otras instancias de `SystemWorker`. Puede salir de un `.wait()` llamando a [`shutdown()`](#shutdown) desde una retrollamada.

:::

<!-- END REF -->

