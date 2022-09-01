---
id: HTTPRequestClass
title: HTTPRequest
---

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R6  | Clase añadida  |

</details>

La clase `HTTPRequest` permite manejar objetos [`HTTPRequest`](#httprequest-object) que pueden ser utilizados para configurar y enviar peticiones a un servidor HTTP, así como para procesar las respuestas del servidor HTTP.

La clase `HTTPRequest` está disponible en el almacén de clases `4D`. Para crear y enviar peticiones HTTP se utiliza la función [4D.HTTPRequest.new()](#4dhttprequestnew), que devuelve un objeto [`HTTPRequest`](#httprequest-object).

### Ejemplo

Crear una clase `MyHttpRequestOptions` para las opciones de la petición:

```4d
Class constructor($method : Text; $headers : Object; $body : Text)
This.method:=$method
This.headers:=$headers
This.body:=$body

Function onResponse($request : 4D.HTTPRequest; $event : Object)
// Mi método onResponse, si quiere manejar la petición de forma asíncrona

Function onError($request : 4D.HTTPRequest; $event : Object)
// Mi método onError, si quiere manejar la petición de forma asíncrona
```

Ahora puede crear su petición:

```4d
var $headers : Object
$headers:=New object()
$headers["field1"]:="value1"

var myHttpRequestOptions : cs.MyHttpRequestOptions
myHttpRequestOptions := cs.MyHttpRequestOptions.new("GET"; $headers; "")

var $request : 4D.HTTPRequest
$request:=4D.HTTPRequest.new("www.google.com"; myHttpRequestOptions)
$request.wait() //If you want to handle the request synchronously
//Now you can use $request.response to access the result of the request or $request.error to check the error that happened.
```

### Objeto HTTPRequest

Un objeto HTTPRequest es un objeto no compartible.

Los objetos HTTPRequest ofrecen las siguientes propiedades y funciones:

|                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #HTTPRequestClass.dataType.Syntax -->](#dataType)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.dataType.Summary -->|
| [<!-- INCLUDE #HTTPRequestClass.encoding.Syntax -->](#encoding)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.encoding.Summary -->|
| [<!-- INCLUDE #HTTPRequestClass.errors.Syntax -->](#errors)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.errors.Summary -->|
| [<!-- INCLUDE #HTTPRequestClass.headers.Syntax -->](#headers)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.headers.Summary -->|
| [<!-- INCLUDE #HTTPRequestClass.method.Syntax -->](#method)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.method.Summary -->|
| [<!-- INCLUDE #HTTPRequestClass.protocol.Syntax -->](#protocol)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.protocol.Summary -->|
| [<!-- INCLUDE #HTTPRequestClass.response.Syntax -->](#response)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.response.Summary -->|
| [<!-- INCLUDE #HTTPRequestClass.returnResponseBody.Syntax -->](#returnResponseBody)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.returnResponseBody.Summary -->|
| [<!-- INCLUDE #HTTPRequestClass.terminate().Syntax -->](#terminate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.terminate().Summary -->|
| [<!-- INCLUDE #HTTPRequestClass.terminated.Syntax -->](#terminated)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.terminated.Summary -->|
| [<!-- INCLUDE #HTTPRequestClass.timeout.Syntax -->](#timeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.timeout.Summary -->|
| [<!-- INCLUDE #HTTPRequestClass.url.Syntax -->](#url)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.url.Summary -->|
| [<!-- INCLUDE #HTTPRequestClass.wait().Syntax -->](#wait)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.wait().Summary -->|

<!-- REF #4D.HTTPRequest.new().Desc -->
## 4D.HTTPRequest.new()

<!-- REF #4D.HTTPRequest.new().Syntax -->

**4D.HTTPRequest.new**( *url* : Text { ; *options* : Object } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #4D.HTTPRequest.new().Params -->
| Parámetros | Type           |    | Descripción                                         |
| ---------- | -------------- |:--:| --------------------------------------------------- |
| url        | Text           | -> | URL a la que enviar la solicitud                    |
| options    | Object         | -> | Propiedades de configuración de la petición         |
| Result     | 4D.HTTPRequest | <- | Nuevo objeto HTTPRequest|<!-- END REF -->

|

#### Descripción

La función `4D.HTTPRequest.new()` <!-- REF #4D.HTTPRequest.new().Summary -->creates and sends a HTTP request to the HTTP server defined in *url* with the defined *options*, and returns a `4D.HTTPRequest` object<!-- END REF -->.

The returned `HTTPRequest` object is used to process responses from the HTTP server and call methods.

En *url*, pase la URL a la que desea enviar la petición. La sintaxis a utilizar es:

```
{http://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
{https://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

If you omit the protocol part (`http://` or `https://`), a https request is sent.

Por ejemplo, puede pasar las siguientes cadenas:

```
    http://www.myserver.com
    www.myserver.com/path
    http://www.myserver.com/path?name="jones"
    https://www.myserver.com/login
    http://123.45.67.89:8083
    http://john:smith@123.45.67.89:8083
    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]
    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)
```

#### `options` parameter

En el parámetro *options*, pase un objeto que pueda contener las siguientes propiedades:

| Propiedad            | Type                                            | Descripción                                                                                                                                                                                                                                                               | Por defecto  |
| -------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| body                 | Variant                                         | Body of the request (required in case of `post` or `put` requests). Puede ser un texto, un blob, o un objeto. The content-type is determined from the type of this property unless it is set inside the headers                                                           | indefinido   |
| certificatesFolder   | [Folder](FolderClass.md)                        | Define la carpeta de certificados de cliente activa                                                                                                                                                                                                                       | indefinido   |
| dataType             | Text                                            | Tipo de atributo del cuerpo de la respuesta. Valores: "text", "blob", "object", o "auto". If "auto", the type of the body content will be deduced from its MIME type (object for JSON, text for text, javascript, xml, http message and url encoded form, blob otherwise) | "auto"       |
| encoding             | Text                                            | Used only in case of requests with a `body` (`post` or `put` methods). Encoding of the request body content if it's a text, ignored if content-type is set inside the headers                                                                                             | "UTF-8"      |
| headers              | Object                                          | Encabezados de la petición. Syntax: `headers.key=value` (*value* can be a Collection if the same key must appear multiple times)                                                                                                                                          | Empty object |
| method               | Text                                            | "POST", "GET" u otro método                                                                                                                                                                                                                                               | "GET"        |
| minTLSVersion        | Text                                            | Sets the minimum version of TLS: "`TLSv1_0`", "`TLSv1_1`", "`TLSv1_2`", "`TLSv1_3`"                                                                                                                                                                                       | "`TLSv1_2`"  |
| onData               | [Function](FunctionClass.md)                    | Retrollamada cuando se reciben los datos del cuerpo. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                   | indefinido   |
| onError              | [Function](FunctionClass.md)                    | Retrollamada cuando ocurre un error. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                   | indefinido   |
| onHeaders            | [Function](FunctionClass.md)                    | Retrollamada cuando se reciben los encabezados. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                        | indefinido   |
| onResponse           | [Function](FunctionClass.md)                    | Retrollamada cuando se recibe una respuesta. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                           | indefinido   |
| onTerminate          | [Function](FunctionClass.md)                    | Retrollamada cuando la petición haya terminado. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                        | indefinido   |
| protocol             | Text                                            | "auto" o "HTTP1". "auto" significa HTTP1 en la implementación actual                                                                                                                                                                                                      | "auto"       |
| proxyAuthentication  | [authentication object](#authentication-object) | Autenticación del proxy de gestión de objetos                                                                                                                                                                                                                             | indefinido   |
| serverAuthentication | [authentication object](#authentication-object) | Autenticación del servidor de gestión de objetos                                                                                                                                                                                                                          | indefinido   |
| returnResponseBody   | Boolean                                         | If false, the response body is not returned in the [`response` object](#response). Devuelve un error si es false y `onData` es indefinido                                                                                                                                 | True         |
| timeout              | Real                                            | Tiempo de espera en segundos. Indefinido = sin tiempo de espera                                                                                                                                                                                                           | Indefinido   |

#### Función callback (retrollamada)

Todas las funciones de retrollamada reciben dos parámetros objeto:

| Parámetros | Type                                        |
| ---------- | ------------------------------------------- |
| $param1    | [objeto `HTTPRequest`](#httprequest-object) |
| $param2    | [`Event` objeto](#event-object)             |

Esta es la secuencia de llamadas de retorno:

1. `onHeaders` se llama siempre una vez
2. `onData` is called zero or several times (not called if the request does not have a body)
3. Si no se produce ningún error, `onResponse` se llama siempre una vez
4. If an error occurs, `onError` is executed once (and terminates the request)
5. `onTerminate` se ejecuta siempre una vez

#### objeto evento

An `event` object is returned when a [callback function](#callback-functions) is called. Contiene las siguientes propiedades:

| Propiedad | Type | Descripción                                                                            |
| --------- | ---- | -------------------------------------------------------------------------------------- |
| .data     | blob | Datos recibidos. It is always *undefined* except in the `onData` callback              |
| .type     | text | Tipo de evento. Possible values: "response", "error", "headers", "data", or "terminate |

#### authentication object

An authentication object handles the `options.serverAuthentication` or `options.proxyAuthentication` property. Puede contener las siguientes propiedades:

| Propiedad  | Type | Descripción                                              | Por defecto |
| ---------- | ---- | -------------------------------------------------------- | ----------- |
| name       | Text | Nombre usado para la autenticación                       | indefinido  |
| contraseña | Text | Contraseña utilizada para la autenticación               | indefinido  |
| method     | Text | Method used for authentication:"basic", "digest", "auto" | "auto"      |

<!-- END REF -->

<!-- REF #HTTPRequestClass.dataType.Desc -->
## .dataType

<!-- REF #HTTPRequestClass.dataType.Syntax -->

**dataType**: Text<!-- END REF -->

#### Descripción

La propiedad `.dataType` contiene <!-- REF #HTTPRequestClass.dataType.Summary -->the `dataType` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew), "auto" if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.encoding.Desc -->
## .encoding

<!-- REF #HTTPRequestClass.encoding.Syntax -->

**encoding**: Text<!-- END REF -->

#### Descripción

La propiedad `.encoding` contiene <!-- REF #HTTPRequestClass.encoding.Summary -->the `encoding` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew), "UTF-8" if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.errors.Desc -->
## .errors

<!-- REF #HTTPRequestClass.errors.Syntax -->

**errors**: Collection<!-- END REF -->

#### Descripción

La propiedad `.errors` contiene <!-- REF #HTTPRequestClass.errors.Summary -->la colección de todos los errores si se ha producido al menos un error<!-- END REF -->.

Este es el contenido de la propiedad `.errors`:

| Propiedad |                       | Type       | Descripción                                           |
| --------- | --------------------- | ---------- | ----------------------------------------------------- |
| errors    |                       | Collection | Pila de error 4D en caso de error                     |
|           | [].errCode            | Number     | 4D error code                                         |
|           | [].message            | Text       | Descripción del error 4D                              |
|           | [].componentSignature | Text       | Firma del componente interno que ha devuelto el error |

<!-- END REF -->

<!-- REF #HTTPRequestClass.headers.Desc -->
## .headers

<!-- REF #HTTPRequestClass.headers.Syntax -->

**headers**: Object<!-- END REF -->

#### Descripción

La propiedad `.headers` contiene <!-- REF #HTTPRequestClass.headers.Summary -->the `headers` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. Si se omite, contiene un objeto vacío.

<!-- END REF -->

<!-- REF #HTTPRequestClass.method.Desc -->
## .method

<!-- REF #HTTPRequestClass.method.Syntax -->

**method**: Text<!-- END REF -->

#### Descripción

La propiedad `.errors` contiene <!-- REF #HTTPRequestClass.method.Summary -->the `method` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. .

<!-- END REF -->

<!-- REF #HTTPRequestClass.protocol.Desc -->
## .protocol

<!-- REF #HTTPRequestClass.protocol.Syntax -->

**protocol**: Text<!-- END REF -->

#### Descripción

La propiedad `.protocol` contiene <!-- REF #HTTPRequestClass.protocol.Summary -->the `protocol` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. If it was omitted or if "auto" was used, contains the version of the protocol used.

<!-- END REF -->

<!-- REF #HTTPRequestClass.response.Desc -->
## .response

<!-- REF #HTTPRequestClass.response.Syntax -->

**response**: Object<!-- END REF -->

#### Descripción

La propiedad `.response` contiene <!-- REF #HTTPRequestClass.response.Summary -->the response to the request if it has received at least the status code, undefined otherwise<!-- END REF -->.

A `response` object is a non-sharable object. Ofrece las siguientes propiedades:

| Propiedad   | Type    | Descripción                                                                                                                                                                |
| ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .body       | Variant | Cuerpo de la respuesta. The type of the message is defined according to the [`dataType`](#datatype) property. Indefinido si el cuerpo no se ha recibido todavía            |
| .headers    | Object  | Headers of the response. `headers.key` = value (value can be a collection if the same key appears multiple times). Indefinido si el los encabezados no se ha recibido aún. |
| .status     | Number  | Código de estado de la respuesta                                                                                                                                           |
| .statusText | Text    | Mensaje explicando el código de estado                                                                                                                                     |

<!-- END REF -->

<!-- REF #HTTPRequestClass.returnResponseBody.Desc -->
## .returnResponseBody

<!-- REF #HTTPRequestClass.returnResponseBody.Syntax -->

**returnResponseBody**: Boolean<!-- END REF -->

#### Descripción

La propiedad `.returnResponseBody` contiene <!-- REF #HTTPRequestClass.returnResponseBody.Summary -->the `returnResponseBody` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. .

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminate().Desc -->
## .terminate()

<!-- REF #HTTPRequestClass.terminate().Syntax -->

**.terminate()**<!-- END REF -->

<!-- REF #HTTPRequestClass.terminate().Params -->
| Parámetros | Type |  | Descripción                                                |
| ---------- | ---- |::| ---------------------------------------------------------- |
|            |      |  | Does not require any parameters|<!-- END REF -->

|

#### Descripción

> Esta función es hilo seguro.

La función `.terminate()` <!-- REF #HTTPRequestClass.terminate().Summary -->aborta la petición HTTP<!-- END REF -->. .

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminated.Desc -->
## .terminated

<!-- REF #HTTPRequestClass.terminated.Syntax -->

**terminated**: Boolean<!-- END REF -->

#### Descripción

La propiedad `.terminated` contiene <!-- REF #HTTPRequestClass.terminated.Summary -->True if the request is terminated (after the call to `onTerminate`), false otherwise<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.timeout.Desc -->
## .timeout

<!-- REF #HTTPRequestClass.timeout.Syntax -->

**timeout**: Real<!-- END REF -->

#### Descripción

La propiedad `.timeout` contiene <!-- REF #HTTPRequestClass.timeout.Summary -->the `timeout` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. .

<!-- END REF -->

<!-- REF #HTTPRequestClass.url.Desc -->
## .url

<!-- REF #HTTPRequestClass.url.Syntax -->

**url**: Text<!-- END REF -->

#### Descripción

La propiedad `.url` contiene <!-- REF #HTTPRequestClass.url.Summary -->la URL de la petición HTTP<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Desc -->
## .wait()

<!-- REF #HTTPRequestClass.wait().Syntax -->

**.wait**( { *time* : Real } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Params -->
| Parámetros | Type           |    | Descripción                                         |
| ---------- | -------------- |:--:| --------------------------------------------------- |
| time       | Real           | -> | Tiempo máximo en segundos para esperar la respuesta |
| Result     | 4D.HTTPRequest | <- | Objeto HTTPRequest|<!-- END REF -->

|

#### Descripción

> Esta función es hilo seguro.

The `4D.HTTPRequest.wait()` function <!-- REF #HTTPRequestClass.wait().Summary -->espera la respuesta del servidor<!-- END REF -->.

If a *time* parameter is passed, the function will wait at most the defined number of seconds.

If the response from the server has already arrived, the function returns immediately.
<!-- END REF -->
