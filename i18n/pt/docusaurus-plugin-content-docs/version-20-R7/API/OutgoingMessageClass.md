---
id: OutgoingMessageClass
title: OutgoingMessage
---

The `4D.OutgoingMessage` class allows you to build messages to be returned by your application functions in response to [REST requests](../REST/REST_requests.md). If the response is of type `4D.OutgoingMessage`, the REST server does not return an object but the object instance of the `OutgoingMessage` class.

Typically, this class can be used in functions declared with the [`onHttpGet`](../ORDA/ordaClasses.md#onhttpget-keyword) keyword and designed to handle HTTP GET requests. Such requests are used, for example, to implement features such as download file, generate and download picture as well as receiving any content-type via a browser.

An instance of this class is built on 4D Server and can be sent to the browser by the [4D REST Server](../REST/gettingStarted.md) only. This class allows to use other technologies than HTTP (e.g. mobile).

<details><summary>História</summary>

| Release | Mudanças          |
| ------- | ----------------- |
| 20 R7   | Classe adicionada |

</details>

### Exemplo

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

### Objeto OutgoingMessage

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

Um objeto 4D.OutgoingMessage é um objeto [não compartilhável](../Concepts/shared.md).

:::

<!-- REF #OutgoingMessageClass.body.Desc -->

## .body

<!-- REF #OutgoingMessageClass.body.Syntax -->**body** : any<!-- END REF -->

#### Descrição

The `.body` property contains <!-- REF #OutgoingMessageClass.body.Summary -->the outgoing message body<!-- END REF -->. The following data types are supported in the `.body` property:

- text
- blob
- object
- image

The `.body` property is read-write.

Você também pode definir a propriedade `.body` usando a função [`setBody()`](#setbody), caso em que o cabeçalho `content-type` é automaticamente definido.

<!-- END REF -->

<!-- REF #OutgoingMessageClass.headers.Desc -->

## .headers

<!-- REF #OutgoingMessageClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Descrição

The `.headers` property contains <!-- REF #OutgoingMessageClass.headers.Summary -->the current headers of the outgoing message as key/value pairs<!-- END REF -->.

The `.headers` property is read-only. Para definir um cabeçalho, use a função [`setHeader()`](#setheader).

<!-- END REF -->

<!-- REF #OutgoingMessageClass.setBody().Desc -->

## .setBody()

<!-- REF #OutgoingMessageClass.setBody().Syntax -->**.setBody**( *body* : any )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setBody().Params -->

| Parâmetro | Tipo |    | Descrição                    |
| --------- | ---- | -- | ---------------------------- |
| body      | any  | -> | Body of the outgoing message |

<!-- END REF -->

#### Descrição

A função `.setBody()` <!-- REF #OutgoingMessageClass.setBody().Summary -->define a mensagem de saída *body*<!-- END REF -->.

The following data types are supported in the *body*:

- Text
- Blob
- Object
- Imagem

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

| Parâmetro | Tipo |    | Descrição                             |
| --------- | ---- | -- | ------------------------------------- |
| \|        | Text | -> | Propriedade de cabeçalho para definir |
| value     | Text | -> | Value of the header property          |

<!-- END REF -->

#### Descrição

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

| Parâmetro | Tipo    |    | Descrição           |
| --------- | ------- | -- | ------------------- |
| status    | Integer | -> | Status para definir |

<!-- END REF -->

#### Descrição

The `.setStatus()` function <!-- REF #OutgoingMessageClass.setStatus().Summary -->sets the `status` property with the given *status*<!-- END REF -->.

If *status* is not an integer value, an error is raised.

For a list of HTTP status codes, please refer the [HTTP status code list on Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

<!-- END REF -->

<!-- REF #OutgoingMessageClass.status.Desc -->

## .status

<!-- REF #OutgoingMessageClass.status.Syntax -->**status** : Integer<!-- END REF -->

#### Descrição

The `.status` property contains <!-- REF #OutgoingMessageClass.status.Summary -->the current status of the outgoing message<!-- END REF -->. Essa propriedade pode ser definida com a função [`setStatus()`](setstatus).

<!-- END REF -->
