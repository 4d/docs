---
id: HTTPRequestClass
title: HTTPRequest
---

The `HTTPRequest` class allows you to handle [`HTTPRequest objects`](#httprequest-object) that can be used to configure and send requests to an HTTP server, as well as to process the HTTP server responses.

The `HTTPRequest` class is available from the `4D` class store. You create and send HTTP requests using the [4D.HTTPRequest.new()](#4dhttprequestnew) function, that returns a [`HTTPRequest object`](#httprequest-object).

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R6       | Clase añadida  |

</details>

### Ejemplo

Create a `MyHttpRequestOptions` class for the request options:

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
$request.wait() // Si desea gestionar la solicitud de forma sincrónica
// Ahora puede utilizar $request.response para acceder al resultado de la petición o $request.error para comprobar el error que se ha producido.
```

### Objeto HTTPRequest

Un objeto HTTPRequest es un objeto no compartible.

Los objetos HTTPRequest ofrecen las siguientes propiedades y funciones:

|                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #HTTPRequestClass.dataType.Syntax -->](#dataType)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.dataType.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.encoding.Syntax -->](#encoding)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.encoding.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.errors.Syntax -->](#errors)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.errors.Summary -->                                     |
| [<!-- INCLUDE #HTTPRequestClass.headers.Syntax -->](#headers)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.headers.Summary -->                                  |
| [<!-- INCLUDE #HTTPRequestClass.method.Syntax -->](#method)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.method.Summary -->                                     |
| [<!-- INCLUDE #HTTPRequestClass.protocol.Syntax -->](#protocol)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.protocol.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.response.Syntax -->](#response)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.response.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.returnResponseBody.Syntax -->](#returnResponseBody)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.returnResponseBody.Summary --> |
| [<!-- INCLUDE #HTTPRequestClass.terminate().Syntax -->](#terminate)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.terminate().Summary -->                        |
| [<!-- INCLUDE #HTTPRequestClass.terminated.Syntax -->](#terminated)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.terminated.Summary -->                         |
| [<!-- INCLUDE #HTTPRequestClass.timeout.Syntax -->](#timeout)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.timeout.Summary -->                                  |
| [<!-- INCLUDE #HTTPRequestClass.url.Syntax -->](#url)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.url.Summary -->                                              |
| [<!-- INCLUDE #HTTPRequestClass.wait().Syntax -->](#wait)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #HTTPRequestClass.wait().Summary -->                                       |

<!-- REF #4D.HTTPRequest.new().Desc -->

## 4D.HTTPRequest.new()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                 |
| ----------- | -------------------------------------------------------------- |
| 20          | Validación TLS por defecto                                     |
| 19 R7       | Support of _automaticRedirections_ and _decodeData_ properties |

</details>

<!-- REF #4D.HTTPRequest.new().Syntax -->**4D.HTTPRequest.new**( *url* : Text { ; *options* : Object } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #4D.HTTPRequest.new().Params -->

| Parámetros | Tipo                           |     | Descripción                                 |
| ---------- | ------------------------------ | :-: | ------------------------------------------- |
| url        | Text                           |  -> | URL a la que enviar la solicitud            |
| options    | Object                         |  -> | Propiedades de configuración de la petición |
| Result     | 4D.HTTPRequest |  <- | Nuevo objeto HTTPRequest                    |

<!-- END REF -->

#### Descripción

The `4D.HTTPRequest.new()` function <!-- REF #4D.HTTPRequest.new().Summary -->creates and sends a HTTP request to the HTTP server defined in _url_ with the defined _options_, and returns a `4D.HTTPRequest` object<!-- END REF -->.

The returned `HTTPRequest` object is used to process responses from the HTTP server and call methods.

In _url_, pass the URL where you want to send the request. La sintaxis a utilizar es:

```
{http://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
{https://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

If you omit the scheme part (`http://` or `https://`), a https request is sent.

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

In the _options_ parameter, pass an object that can contain the following properties:

| Propiedad              | Tipo                                            | Descripción                                                                                                                                                                                                                                                                                                                                                    | Por defecto  |
| ---------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| automaticRedirections  | Boolean                                         | Si es true, las redirecciones se realizan automáticamente (se gestionan hasta 5 redirecciones, se devuelve la 6ª respuesta de redirección si la hay)                                                                                                                                                                                        | True         |
| body                   | Variant                                         | Body of the request (required in case of `post` or `put` requests). Puede ser un texto, un blob, o un objeto. El content-type se determina a partir del tipo de esta propiedad a menos que se defina dentro de los encabezados                                                                              | indefinido   |
| certificatesFolder     | [Folder](FolderClass.md)                        | Define la carpeta de certificados de cliente activa                                                                                                                                                                                                                                                                                                            | indefinido   |
| dataType               | Text                                            | Tipo de atributo del cuerpo de la respuesta. Valores: "text", "blob", "object", o "auto". Si "auto", el tipo de contenido del cuerpo se deducirá de su tipo MIME (object para JSON, texto para texto, javascript, xml, mensaje http y formulario codificado en url, blob en caso contrario) | "auto"       |
| decodeData             | Boolean                                         | If true, the data received in the `onData` callback is uncompressed                                                                                                                                                                                                                                                                                            | False        |
| encoding               | Text                                            | Used only in case of requests with a `body` (`post` or `put` methods). Codificación del contenido del cuerpo de la petición si es un texto, se ignora si se define content-type dentro de los encabezados                                                                                                                   | "UTF-8"      |
| headers                | Object                                          | Encabezados de la petición. Syntax: `headers.key=value` (_value_ can be a Collection if the same key must appear multiple times)                                                                                                                                                                            | Objeto vacío |
| method                 | Text                                            | "POST", "GET" u otro método                                                                                                                                                                                                                                                                                                                                    | "GET"        |
| minTLSVersion          | Text                                            | Sets the minimum version of TLS: "`TLSv1_0`", "`TLSv1_1`", "`TLSv1_2`", "`TLSv1_3`"                                                                                                                                                                                                                                                            | "`TLSv1_2`"  |
| onData                 | [Function](FunctionClass.md)                    | Retrollamada cuando se reciben los datos del cuerpo. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                                                     | indefinido   |
| onError                | [Function](FunctionClass.md)                    | Retrollamada cuando ocurre un error. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                                                                     | indefinido   |
| onHeaders              | [Function](FunctionClass.md)                    | Retrollamada cuando se reciben los encabezados. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                                                          | indefinido   |
| onResponse             | [Function](FunctionClass.md)                    | Retrollamada cuando se recibe una respuesta. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                                                             | indefinido   |
| onTerminate            | [Function](FunctionClass.md)                    | Retrollamada cuando la petición haya terminado. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                                                          | indefinido   |
| protocol               | Text                                            | "auto" o "HTTP1". "auto" significa HTTP1 en la implementación actual                                                                                                                                                                                                                                                                           | "auto"       |
| proxyAuthentication    | [authentication object](#authentication-object) | Autenticación del proxy de gestión de objetos                                                                                                                                                                                                                                                                                                                  | indefinido   |
| serverAuthentication   | [authentication object](#authentication-object) | Autenticación del servidor de gestión de objetos                                                                                                                                                                                                                                                                                                               | indefinido   |
| returnResponseBody     | Boolean                                         | If false, the response body is not returned in the [`response` object](#response). Returns an error if false and `onData` is undefined                                                                                                                                                                                                         | True         |
| timeout                | Real                                            | Tiempo de espera en segundos. Indefinido = sin tiempo de espera                                                                                                                                                                                                                                                                                | Indefinido   |
| validateTLSCertificate | Boolean                                         | Si false, 4D no valida el certificado TLS y no devuelve un error si no es válido (es decir, caducado, autofirmado...). Importante: en la implementación actual, la propia Autoridad de Certificación no se verifica.                        | True         |

#### Función callback (retrollamada)

Todas las funciones de retrollamada reciben dos parámetros objeto:

| Parámetros | Tipo                                        |
| ---------- | ------------------------------------------- |
| $param1    | [`HTTPRequest` object](#httprequest-object) |
| $param2    | [`Event` object](#event-object)             |

Esta es la secuencia de llamadas de retorno:

1. `onHeaders` is always called once

2. `onData` is called zero or several times (not called if the request does not have a body)

3. If no error occured, `onResponse` is always called once

4. If an error occurs, `onError` is executed once (and terminates the request)

5. `onTerminate` is always executed once

#### objeto evento

An `event` object is returned when a [callback function](#callback-functions) is called. Contiene las siguientes propiedades:

| Propiedad             | Tipo | Descripción                                                                                                            |
| --------------------- | ---- | ---------------------------------------------------------------------------------------------------------------------- |
| .data | blob | Datos recibidos. It is always _undefined_ except in the `onData` callback                              |
| .type | text | Tipo de evento. Valores posibles: "response", "error", "headers", "data", o "terminate |

#### authentication object

An authentication object handles the `options.serverAuthentication` or `options.proxyAuthentication` property. Puede contener las siguientes propiedades:

| Propiedad  | Tipo | Descripción                                                                       | Por defecto |
| ---------- | ---- | --------------------------------------------------------------------------------- | ----------- |
| name       | Text | Nombre usado para la autenticación                                                | indefinido  |
| contraseña | Text | Contraseña utilizada para la autenticación                                        | indefinido  |
| method     | Text | Método utilizado para la autenticación: "basic", "digest", "auto" | "auto"      |

<!-- END REF -->

<!-- REF #HTTP Parse message.Desc -->

## HTTP Parse message

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R4       | Añadidos       |

</details>

<!-- REF #HTTP Parse message.Syntax -->**HTTP Parse message**( *data* : Text ) : Object<br/>**HTTP Parse message**( *data* : Blob ) : Object<!-- END REF -->

<!-- REF #HTTP Parse message.Params -->

| Parámetros | Tipo       |     | Descripción                                                   |
| ---------- | ---------- | :-: | ------------------------------------------------------------- |
| data       | Text, Blob |  -> | Datos a analizar                                              |
| Result     | Object     |  <- | Objeto, cada propiedad es parte de los datos de varias partes |

<!-- END REF -->

#### Descripción

The `HTTP Parse message` command <!-- REF #HTTP Parse message.Summary -->parses a multipart/form-data text or blob (HTTP "response" message) and extracts the content to an object. Each property of the returned object corresponds to a part of the multipart data<!-- END REF -->.

:::info

El propio HTTP es un protocolo de comunicación sin estado. En este marco, los clientes inician la comunicación enviando mensajes de "petición" a los servidores, especificando detalles como el método, el objetivo, los encabezados, el contenido, etc. Los servidores, a su vez, responden con mensajes de "respuesta" que incluyen los mismos detalles. `HTTP Parse message` parses either the "request" or the "response" message into a well-organized object.

:::

#### Ejemplo

En el siguiente ejemplo, analizamos los datos de un archivo de texto que contiene peticiones HTTP.

Este es el contenido del archivo:

```
POST /batch/gmail/v1/ HTTP/1.1
Accept-Encoding: gzip, deflate
Authorization: Bearer xxxxxx
Connection: Close
Content-Length: 442
Content-Type: multipart/mixed; boundary=batch_19438756D576A14ABA87C112F56B9396; charset=UTF-8
Date: Wed, 29 Nov 2023 13:51:35 GMT
Host: gmail.googleapis.com
User-Agent: 4D/20.4.0


--batch_19438756D576A14ABA87C112F56B9396
Content-Type: application/http
Content-ID: <item1>

GET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58689824c92?format=raw HTTP/1.1


--batch_19438756D576A14ABA87C112F56B9396
Content-Type: application/http
Content-ID: <item2>

GET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58642b28e2b?format=raw HTTP/1.1

--batch_19438756D576A14ABA87C112F56B9396--
```

Para analizar el archivo:

```4d
var $message : Text:=File("/RESOURCES/HTTPrequest.txt").getText()
var $parsedMessage : Object:=HTTP Parse message($message)
//$parsedMessage= {
//headers:{"User-Agent":"4D/20.4.0",...},
//parts:[{"contentType":"application/http","contentID":"item1",...}], 
//requestLine:"POST /batch/gmail/v1/ HTTP/1.1"
//}
```

<!-- END REF -->

<!-- REF #HTTPRequestClass.dataType.Desc -->

## .dataType

<!-- REF #HTTPRequestClass.dataType.Syntax -->**dataType** : Text<!-- END REF -->

#### Descripción

The `.dataType` property contains <!-- REF #HTTPRequestClass.dataType.Summary -->the `dataType` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew), "auto" if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.encoding.Desc -->

## .encoding

<!-- REF #HTTPRequestClass.encoding.Syntax -->**encoding** : Text<!-- END REF -->

#### Descripción

The `.encoding` property contains <!-- REF #HTTPRequestClass.encoding.Summary -->the `encoding` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew), "UTF-8" if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.errors.Desc -->

## .errors

<!-- REF #HTTPRequestClass.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Descripción

The `.errors` property contains <!-- REF #HTTPRequestClass.errors.Summary -->the collection of all the errors if at least one error has been triggered<!-- END REF -->.

Here is the contents of the `.errors` property:

| Propiedad |                                                                                           | Tipo       | Descripción                                           |
| --------- | ----------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------- |
| errors    |                                                                                           | Collection | Pila de error 4D en caso de error                     |
|           | [].errCode            | Number     | Código de error 4D                                    |
|           | [].message            | Text       | Descripción del error 4D                              |
|           | [].componentSignature | Text       | Firma del componente interno que ha devuelto el error |

<!-- END REF -->

<!-- REF #HTTPRequestClass.headers.Desc -->

## .headers

<!-- REF #HTTPRequestClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Descripción

The `.headers` property contains <!-- REF #HTTPRequestClass.headers.Summary -->the `headers` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. Si se omite, contiene un objeto vacío.

<!-- END REF -->

<!-- REF #HTTPRequestClass.method.Desc -->

## .method

<!-- REF #HTTPRequestClass.method.Syntax -->**method** : Text<!-- END REF -->

#### Descripción

The `.method` property contains <!-- REF #HTTPRequestClass.method.Summary -->the `method` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. .

<!-- END REF -->

<!-- REF #HTTPRequestClass.protocol.Desc -->

## .protocol

<!-- REF #HTTPRequestClass.protocol.Syntax -->**protocol** : Text<!-- END REF -->

#### Descripción

The `.protocol` property contains <!-- REF #HTTPRequestClass.protocol.Summary -->the `protocol` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. Si se ha omitido o si se ha utilizado "auto", contiene la versión del protocolo utilizada.

<!-- END REF -->

<!-- REF #HTTPRequestClass.response.Desc -->

## .response

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                 |
| ----------- | ------------------------------------------------------------------------------ |
| 19 R8       | `.headers` returns lowercase names. New `.rawHeaders` property |

</details>

<!-- REF #HTTPRequestClass.response.Syntax -->**response** : Object<!-- END REF -->

#### Descripción

The `.response` property contains <!-- REF #HTTPRequestClass.response.Summary -->the response to the request if it has received at least the status code, undefined otherwise<!-- END REF -->.

A `response` object is a non-sharable object. Ofrece las siguientes propiedades:

| Propiedad                   | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .body       | Variant | Cuerpo de la respuesta. The type of the message is defined according to the [`dataType`](#datatype) property. Indefinido si el cuerpo no se ha recibido todavía                                                                                                                                                                                               |
| .headers    | Object  | Encabezados de la respuesta. Los nombres de los encabezados se devuelven en minúsculas. `<headername>.key` = value (value can be a collection if the same key appears multiple times). Indefinido si el los encabezados no se ha recibido aún.                                                             |
| .status     | Number  | Código de estado de la respuesta                                                                                                                                                                                                                                                                                                                                                              |
| .statusText | Text    | Mensaje explicando el código de estado                                                                                                                                                                                                                                                                                                                                                        |
| .rawHeaders | Object  | Encabezados de la respuesta. Los nombres de los encabezadoss se devuelven intactos (con sus mayúsculas y minúsculas originales). `<headerName>.key` = value (value can be a collection if the same key appears multiple times). Indefinido si el los encabezados no se ha recibido aún. |

<!-- END REF -->

<!-- REF #HTTPRequestClass.returnResponseBody.Desc -->

## .returnResponseBody

<!-- REF #HTTPRequestClass.returnResponseBody.Syntax -->**returnResponseBody** : Boolean<!-- END REF -->

#### Descripción

The `.returnResponseBody` property contains <!-- REF #HTTPRequestClass.returnResponseBody.Summary -->the `returnResponseBody` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. Si se omite, contiene True.

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminate().Desc -->

## .terminate()

<!-- REF #HTTPRequestClass.terminate().Syntax -->**.terminate()**<!-- END REF -->

<!-- REF #HTTPRequestClass.terminate().Params -->

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

> Esta función es hilo seguro.

The `.terminate()` function <!-- REF #HTTPRequestClass.terminate().Summary -->aborts the HTTP request<!-- END REF -->. It triggers the `onTerminate` event.

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminated.Desc -->

## .terminated

<!-- REF #HTTPRequestClass.terminated.Syntax -->**terminated** : Boolean<!-- END REF -->

#### Descripción

The `.terminated` property contains <!-- REF #HTTPRequestClass.terminated.Summary -->True if the request is terminated (after the call to `onTerminate`), false otherwise<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.timeout.Desc -->

## .timeout

<!-- REF #HTTPRequestClass.timeout.Syntax -->**timeout** : Real<!-- END REF -->

#### Descripción

The `.timeout` property contains <!-- REF #HTTPRequestClass.timeout.Summary -->the `timeout` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. .

<!-- END REF -->

<!-- REF #HTTPRequestClass.url.Desc -->

## .url

<!-- REF #HTTPRequestClass.url.Syntax -->**url** : Text<!-- END REF -->

#### Descripción

The `.url` property contains <!-- REF #HTTPRequestClass.url.Summary -->the URL of the HTTP request<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Desc -->

## .wait()

<!-- REF #HTTPRequestClass.wait().Syntax -->**.wait**( { *time* : Real } ) : HTTPRequestClass<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Params -->

| Parámetros | Tipo                           |     | Descripción                                         |
| ---------- | ------------------------------ | :-: | --------------------------------------------------- |
| time       | Real                           |  -> | Tiempo máximo en segundos para esperar la respuesta |
| Result     | 4D.HTTPRequest |  <- | Objeto HTTPRequest                                  |

<!-- END REF -->

#### Descripción

> Esta función es hilo seguro.

The `wait()` function <!-- REF #HTTPRequestClass.wait().Summary -->waits for the response from the server<!-- END REF -->.

If a _time_ parameter is passed, the function will wait at most the defined number of seconds.

Si la respuesta del servidor ya ha llegado, la función regresa inmediatamente.

<!-- END REF -->
