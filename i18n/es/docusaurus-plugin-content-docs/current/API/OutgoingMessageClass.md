---
id: OutgoingMessageClass
title: OutgoingMessage
---

La clase `4D.OutgoingMessage` le permite construir mensajes para ser devueltos por las funciones de su aplicación en respuesta a las [peticiones REST](../REST/REST_requests.md). Si la respuesta es del tipo `4D.OutgoingMessage`, el servidor REST no devuelve un objeto, sino la instancia del objeto de la clase `OutgoingMessage`.

Normalmente, esta clase puede ser usada en funciones personalizadas [HTTP request handler](../WebServer/http-request-handler.md#function-configuration) o en funciones declaradas con la palabra clave [`onHTTPGet`](../ORDA/ordaClasses.md#onhttpget-keyword) y diseñadas para manejar peticiones HTTP GET. Tales peticiones se utilizan, por ejemplo, para implementar funcionalidades como la descarga de archivos, generar y descargar imágenes así como recibir cualquier tipo de contenido a través de un navegador.

Una instancia de esta clase se construye en 4D Server y puede ser enviada al navegador sólo por el [servidor REST 4D](../REST/gettingStarted.md). Esta clase permite utilizar otras tecnologías distintas de HTTP (por ejemplo, móvil).

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R7       | Clase añadida  |

</details>

### Ejemplo

En este ejemplo, una función `getFile()` es implementada en la [Datastore class](../ORDA/ordaClasses.md#datastore-class) y [puede ser llamada](../ORDA/ordaClasses.md#onhttpget-keyword) por una petición REST. El objetivo es devolver un archivo **testFile.pdf** como respuesta a la petición:

```4d
Class extends DataStoreImplementation

exposed onHTTPGet Function getFile() : 4D.OutgoingMessage
	
	var $result:=4D.OutgoingMessage.new()
	var $file:=File("/RESOURCES/testFile.pdf")
	
	$result.setBody($file.getContent()) // Se trata de contenido binario
	$result.setHeader("Content-Type"; "application/pdf")
	return $result
```

### Objeto OutgoingMessage

Los objetos 4D.OutgoingMessage ofrecen las siguientes propiedades y funciones:

|                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #OutgoingMessageClass.body.Syntax -->](#body)<br/><!-- INCLUDE #OutgoingMessageClass.body.Summary -->                    |
| [<!-- INCLUDE #OutgoingMessageClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #OutgoingMessageClass.headers.Summary -->           |
| [<!-- INCLUDE #OutgoingMessageClass.setBody().Syntax -->](#setbody)<br/><!-- INCLUDE #OutgoingMessageClass.setBody().Summary -->       |
| [<!-- INCLUDE #OutgoingMessageClass.setHeader().Syntax -->](#setheader)<br/><!-- INCLUDE #OutgoingMessageClass.setHeader().Summary --> |
| [<!-- INCLUDE #OutgoingMessageClass.setStatus().Syntax -->](#setstatus)<br/><!-- INCLUDE #OutgoingMessageClass.setStatus().Summary --> |
| [<!-- INCLUDE #OutgoingMessageClass.status.Syntax -->](#status)<br/><!-- INCLUDE #OutgoingMessageClass.status.Summary -->              |

:::note

Un objeto 4D.OutgoingMessage es un objeto [no compartible](../Concepts/shared.md).

:::

<!-- REF OutgoingMessageClass.body.Desc -->

## .body

<!-- REF #OutgoingMessageClass.body.Syntax -->**body** : any<!-- END REF -->

#### Descripción

La propiedad `.body` contiene <!-- REF #OutgoingMessageClass.body.Summary -->el cuerpo del mensaje saliente<!-- END REF -->. Los siguientes tipos de datos están soportados en la propiedad `.body`:

- text
- blob
- object
- image

La propiedad `.body` es de lectura-escritura.

También puede definir la propiedad `.body` utilizando la función [`setBody()`](#setbody), en cuyo caso el encabezado `content-type` se define automáticamente.

<!-- END REF -->

<!-- REF OutgoingMessageClass.headers.Desc -->

## .headers

<!-- REF #OutgoingMessageClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Descripción

La propiedad `.headers` contiene <!-- REF #OutgoingMessageClass.headers.Summary -->los encabezados actuales del mensaje saliente en forma de pares clave/valor<!-- END REF -->.

La propiedad `.headers` es de sólo lectura. Para definir un encabezado, use la función [`setHeader()`](#setheader).

<!-- END REF -->

<!-- REF OutgoingMessageClass.setBody().Desc -->

## .setBody()

<!-- REF #OutgoingMessageClass.setBody().Syntax -->**.setBody**( *body* : any )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setBody().Params -->

| Parámetros | Tipo |    | Descripción                 |
| ---------- | ---- | -- | --------------------------- |
| body       | any  | -> | Cuerpo del mensaje saliente |

<!-- END REF -->

#### Descripción

La función `.setBody()` <!-- REF #OutgoingMessageClass.setBody().Summary -->define el mensaje saliente *body*<!-- END REF -->.

Los siguientes tipos de datos están soportados en el *body*:

- Text
- Blob
- Object
- Imagen

Cuando se utiliza esta función, el encabezado content-type se define automáticamente en función del tipo *body*:

- Content-Type:text/plain si el cuerpo es un Texto
- Content-Type:application/octet-stream si el body es un Blob
- Content-Type:application/json si el body es un objeto
- Content-Type:image/jpeg, image/gif... si el body es una imagen

Si *body* no es de un tipo de valor soportado, se devuelve un error.

<!-- END REF -->

<!-- REF OutgoingMessageClass.setHeader().Desc -->

## .setHeader()

<!-- REF #OutgoingMessageClass.setHeader().Syntax -->**.setHeader**( *key* : Text ; *value* : Text )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setHeader().Params -->

| Parámetros | Tipo |    | Descripción                          |
| ---------- | ---- | -- | ------------------------------------ |
| key        | Text | -> | Propiedad de encabezado a definir    |
| value      | Text | -> | Valor de la propiedad del encabezado |

<!-- END REF -->

#### Descripción

La función `.setHeader()` <!-- REF #OutgoingMessageClass.setHeader().Summary -->define lla llave *key* del encabezado del mensaje saliente con el *valuer* suministrado<!-- END REF -->. Si ambos parámetros no son valores texto, se produce un error.

Al devolver una instancia del objeto 4D.OutgoingMessage, 4D define automáticamente algunos encabezados (por ejemplo, `Set-Cookie` con `WASID4D=...` y `4DSID__ProjectName_=....`).

:::note

Si define un *value* para la *key* el encabezado "Content-Type", asegúrese de llamar a esta función después de la llamada a [`setBody()`](#setbody), porque `setBody()` llena automáticamente este encabezado. Para obtener una lista de valores del encabezado "Content-Type", consulte la documentación de [`WEB SEND BLOB`](../commands-legacy/web-send-blob.md).

:::

<!-- END REF -->

<!-- REF OutgoingMessageClass.setStatus().Desc -->

## .setStatus()

<!-- REF #OutgoingMessageClass.setStatus().Syntax -->**.setStatus**( *status* : Integer )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setStatus().Params -->

| Parámetros | Tipo    |    | Descripción      |
| ---------- | ------- | -- | ---------------- |
| status     | Integer | -> | Estado a definir |

<!-- END REF -->

#### Descripción

La función `.setStatus()` <!-- REF #OutgoingMessageClass.setStatus().Summary -->define la propiedad `status` con el *status*<!-- END REF -->.

Si *status* no es un valor entero, se produce un error.

Para obtener una lista de códigos de estado HTTP, consulte la [lista de códigos de estado HTTP en Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

<!-- END REF -->

<!-- REF OutgoingMessageClass.status.Desc -->

## .status

<!-- REF #OutgoingMessageClass.status.Syntax -->**status** : Integer<!-- END REF -->

#### Descripción

La propiedad `.status` contiene <!-- REF #OutgoingMessageClass.status.Summary -->el estado actual del mensaje saliente<!-- END REF -->. Esta propiedad puede definirse utilizando la función [`setStatus()`](setstatus).

<!-- END REF -->
