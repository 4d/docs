---
id: OutGoingMessageClass
title: OutGoingMessage
---

The `4D.OutGoingMessage` class allows you to build messages to be returned by your application functions in response to [REST requests](../REST/REST_requests.md). If the response is of type `4D.OutGoingMessage`, the REST server does not return an object but the object instance of the `OutgoingMessage` class.

Typically, this class can be used in functions declared with the [`onHttpGet`](../ORDA/ordaClasses.md#onhttpget-keyword) keyword and designed to handle HTTP GET requests. Such requests are used, for example, to implement features such as download file, generate and download picture as well as receiving any content-type via a browser.

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

### OutGoingMessage Object

4D.OutGoingMessage objects provide the following properties and functions:

|                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #OutGoingMessageClass.body.Syntax -->](#body)<br/><!-- INCLUDE #OutGoingMessageClass.body.Summary -->                    |
| [<!-- INCLUDE #OutGoingMessageClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #OutGoingMessageClass.headers.Summary -->           |
| [<!-- INCLUDE #OutGoingMessageClass.setBody().Syntax -->](#setbody)<br/><!-- INCLUDE #OutGoingMessageClass.setBody().Summary -->       |
| [<!-- INCLUDE #OutGoingMessageClass.setHeader().Syntax -->](#setheader)<br/><!-- INCLUDE #OutGoingMessageClass.setHeader().Summary --> |
| [<!-- INCLUDE #OutGoingMessageClass.setStatus().Syntax -->](#setstatus)<br/><!-- INCLUDE #OutGoingMessageClass.setStatus().Summary --> |
| [<!-- INCLUDE #OutGoingMessageClass.status.Syntax -->](#status)<br/><!-- INCLUDE #OutGoingMessageClass.status.Summary -->              |

:::note

A 4D.OutGoingMessage object is a [non-sharable](../Concepts/shared.md) object.

:::

<!-- REF #OutGoingMessageClass.body.Desc -->

## .body

<!-- REF #OutGoingMessageClass.body.Syntax -->**body** : any<!-- END REF -->

#### Descripción

The `.body` property contains <!-- REF #OutGoingMessageClass.body.Summary -->the outgoing message body<!-- END REF -->. The following data types are supported in the `.body` property:

- text
- blob
- object
- image

The `.body` property is read-write.

You can also set the `.body` property using the [`setBody()`](#setbody) function, in which case the `content-type` header is automatically set.

<!-- END REF -->

<!-- REF #OutGoingMessageClass.headers.Desc -->

## .headers

<!-- REF #OutGoingMessageClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Descripción

The `.headers` property contains <!-- REF #OutGoingMessageClass.headers.Summary -->the current headers of the outgoing message as key/value pairs<!-- END REF -->.

The `.headers` property is read-only. To set a header, use the [`setHeader()`](#setheader) function.

<!-- END REF -->

<!-- REF #OutGoingMessageClass.setBody().Desc -->

## .setBody()

<!-- REF #OutGoingMessageClass.setBody().Syntax -->**.setBody**( *body* : any )<!-- END REF -->

<!-- REF #OutGoingMessageClass.setBody().Params -->

| Parámetros | Tipo |    | Descripción                  |
| ---------- | ---- | -- | ---------------------------- |
| body       | any  | -> | Body of the outgoing message |

<!-- END REF -->

#### Descripción

The `.setBody()` function <!-- REF #OutGoingMessageClass.setBody().Summary -->sets the outgoing message *body*<!-- END REF -->.

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

<!-- REF #OutGoingMessageClass.setHeader().Desc -->

## .setHeader()

<!-- REF #OutGoingMessageClass.setHeader().Syntax -->**.setHeader**( *key* : Text ; *value* : Text )<!-- END REF -->

<!-- REF #OutGoingMessageClass.setHeader().Params -->

| Parámetros | Tipo |    | Descripción                  |
| ---------- | ---- | -- | ---------------------------- |
| key        | Text | -> | Header property to set       |
| value      | Text | -> | Value of the header property |

<!-- END REF -->

#### Descripción

The `.setHeader()` function <!-- REF #OutGoingMessageClass.setHeader().Summary -->sets the outgoing message header *key* with the provided *value*<!-- END REF -->. If both parameters are not Text values, an error is raised.

When returning a 4D.OutGoingMessage object instance, 4D automatically sets some headers (e.g. `Set-Cookie` with `WASID4D=...` and `4DSID__ProjectName_=....`).

:::note

If you set a *value* for the "Content-Type" header *key*, make sure you call this function after the call to [`setBody()`](#setbody), because `setBody()` automatically fills this header. For a list of "Content-Type" header values, please refer to the [`WEB SEND BLOB`](../commands-legacy/web-send-blob.md) documentation.

:::

<!-- END REF -->

<!-- REF #OutGoingMessageClass.setStatus().Desc -->

## .setStatus()

<!-- REF #OutGoingMessageClass.setStatus().Syntax -->**.setStatus**( *status* : Integer )<!-- END REF -->

<!-- REF #OutGoingMessageClass.setStatus().Params -->

| Parámetros | Tipo    |    | Descripción   |
| ---------- | ------- | -- | ------------- |
| status     | Integer | -> | Status to set |

<!-- END REF -->

#### Descripción

The `.setStatus()` function <!-- REF #OutGoingMessageClass.setStatus().Summary -->sets the `status` property with the given *status*<!-- END REF -->.

If *status* is not an integer value, an error is raised.

For a list of HTTP status codes, please refer the [HTTP status code list on Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

<!-- END REF -->

<!-- REF #OutGoingMessageClass.status.Desc -->

## .status

<!-- REF #OutGoingMessageClass.status.Syntax -->**status** : Integer<!-- END REF -->

#### Descripción

The `.status` property contains <!-- REF #OutGoingMessageClass.status.Summary -->the current status of the outgoing message<!-- END REF -->. This property can be set using the [`setStatus()`](setstatus) function.

<!-- END REF -->
