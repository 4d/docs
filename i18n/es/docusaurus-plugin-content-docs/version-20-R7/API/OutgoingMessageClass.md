---
id: OutgoingMessageClass
title: OutgoingMessage
---

The `4D.OutgoingMessage` class allows you to build messages to be returned by your application functions in response to [REST requests](../REST/REST_requests.md). If the response is of type `4D.OutgoingMessage`, the REST server does not return an object but the object instance of the `OutgoingMessage` class.

Típicamente, esta clase puede ser usada en funciones declaradas con la palabra clave [`onHttpGet`](../ORDA/ordaClasses.md#onhttpget-keyword) y diseñadas para manejar las peticiones HTTP GET. Such requests are used, for example, to implement features such as download file, generate and download picture as well as receiving any content-type via a browser.

An instance of this class is built on 4D Server and can be sent to the browser by the [4D REST Server](../REST/gettingStarted.md) only. This class allows to use other technologies than HTTP (e.g. mobile).

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R7       | Clase añadida  |

</details>

### Ejemplo

In this example, a `getFile()` function is implemented in the [Datastore class](../ORDA/ordaClasses.md#datastore-class) and [can be called](../ORDA/ordaClasses.md#onhttpget-keyword) by a REST request. The purpose is to return a **testFile.pdf** file as a response to the request:

```4d
Class extends DataStoreImplementation

exposed onHTTPGet Function getFile() : 4D.OutgoingMessage
	
	var $result:=4D.OutgoingMessage.new()
	var $file:=File("/RESOURCES/testFile.pdf")
	
	$result.setBody($file.getContent())  // This is binary content
	$result.setHeader("Content-Type"; "application/pdf")
	return $result
```

### OutgoingMessage Object

4D.OutgoingMessage objects provide the following properties and functions:

|                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #OutgoingMessageClass.body.Syntax -->](#body)<br/><!-- INCLUDE #OutgoingMessageClass.body.Summary -->                    |
| [<!-- INCLUDE #OutgoingMessageClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #OutgoingMessageClass.headers.Summary -->           |
| [<!-- INCLUDE #OutgoingMessageClass.setBody().Syntax -->](#setbody)<br/><!-- INCLUDE #OutgoingMessageClass.setBody().Summary -->       |
| [<!-- INCLUDE #OutgoingMessageClass.setHeader().Syntax -->](#setheader)<br/><!-- INCLUDE #OutgoingMessageClass.setHeader().Summary --> |
| [<!-- INCLUDE #OutgoingMessageClass.setStatus().Syntax -->](#setstatus)<br/><!-- INCLUDE #OutgoingMessageClass.setStatus().Summary --> |
| [<!-- INCLUDE #OutgoingMessageClass.status.Syntax -->](#status)<br/><!-- INCLUDE #OutgoingMessageClass.status.Summary -->              |

:::note

A 4D.OutgoingMessage object is a [non-sharable](../Concepts/shared.md) object.

:::

<!-- REF #OutgoingMessageClass.body.Desc -->

## .body

<!-- REF #OutgoingMessageClass.body.Syntax -->**body** : any<!-- END REF -->

#### Descripción

La propiedad `.body` contiene <!-- REF #OutgoingMessageClass.body.Summary -->el cuerpo del mensaje saliente<!-- END REF -->. The following data types are supported in the `.body` property:

- text
- blob
- object
- image

La propiedad `.body` es de lectura-escritura.

También puede definir la propiedad `.body` utilizando la función [`setBody()`](#setbody), en cuyo caso el encabezado `content-type` se define automáticamente.

<!-- END REF -->

<!-- REF #OutgoingMessageClass.headers.Desc -->

## .headers

<!-- REF #OutgoingMessageClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Descripción

The `.headers` property contains <!-- REF #OutgoingMessageClass.headers.Summary -->the current headers of the outgoing message as key/value pairs<!-- END REF -->.

La propiedad `.headers` es de sólo lectura. Para definir un encabezado, use la función [`setHeader()`](#setheader).

<!-- END REF -->

<!-- REF #OutgoingMessageClass.setBody().Desc -->

## .setBody()

<!-- REF #OutgoingMessageClass.setBody().Syntax -->**.setBody**( *body* : any )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setBody().Params -->

| Parámetros | Tipo |    | Descripción                  |
| ---------- | ---- | -- | ---------------------------- |
| body       | any  | -> | Body of the outgoing message |

<!-- END REF -->

#### Descripción

The `.setBody()` function <!-- REF #OutgoingMessageClass.setBody().Summary -->sets the outgoing message *body*<!-- END REF -->.

The following data types are supported in the *body*:

- Text
- Blob
- Object
- Imagen

When this function is used, the content-type header is automatically set depending on the *body* type:

- Content-Type:text/plain if the body is a Text
- Content-Type:application/octet-stream if body is a Blob
- Content-Type:application/json if body is an Object
- Content-Type:image/jpeg, image/gif... if body is an Image

If *body* is not of a supported value type, an error is returned.

<!-- END REF -->

<!-- REF #OutgoingMessageClass.setHeader().Desc -->

## .setHeader()

<!-- REF #OutgoingMessageClass.setHeader().Syntax -->**.setHeader**( *key* : Text ; *value* : Text )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setHeader().Params -->

| Parámetros | Tipo |    | Descripción                          |
| ---------- | ---- | -- | ------------------------------------ |
| key        | Text | -> | Propiedad de encabezado a definir    |
| value      | Text | -> | Valor de la propiedad del encabezado |

<!-- END REF -->

#### Descripción

The `.setHeader()` function <!-- REF #OutgoingMessageClass.setHeader().Summary -->sets the outgoing message header *key* with the provided *value*<!-- END REF -->. If both parameters are not Text values, an error is raised.

When returning a 4D.OutgoingMessage object instance, 4D automatically sets some headers (e.g. `Set-Cookie` with `WASID4D=...` and `4DSID__ProjectName_=....`).

:::note

If you set a *value* for the "Content-Type" header *key*, make sure you call this function after the call to [`setBody()`](#setbody), because `setBody()` automatically fills this header. For a list of "Content-Type" header values, please refer to the [`WEB SEND BLOB`](../commands-legacy/web-send-blob.md) documentation.

:::

<!-- END REF -->

<!-- REF #OutgoingMessageClass.setStatus().Desc -->

## .setStatus()

<!-- REF #OutgoingMessageClass.setStatus().Syntax -->**.setStatus**( *status* : Integer )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setStatus().Params -->

| Parámetros | Tipo    |    | Descripción      |
| ---------- | ------- | -- | ---------------- |
| status     | Integer | -> | Estado a definir |

<!-- END REF -->

#### Descripción

The `.setStatus()` function <!-- REF #OutgoingMessageClass.setStatus().Summary -->sets the `status` property with the given *status*<!-- END REF -->.

If *status* is not an integer value, an error is raised.

For a list of HTTP status codes, please refer the [HTTP status code list on Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

<!-- END REF -->

<!-- REF #OutgoingMessageClass.status.Desc -->

## .status

<!-- REF #OutgoingMessageClass.status.Syntax -->**status** : Integer<!-- END REF -->

#### Descripción

The `.status` property contains <!-- REF #OutgoingMessageClass.status.Summary -->the current status of the outgoing message<!-- END REF -->. This property can be set using the [`setStatus()`](setstatus) function.

<!-- END REF -->
