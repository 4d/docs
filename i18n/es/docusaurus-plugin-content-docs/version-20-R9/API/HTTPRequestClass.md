---
id: HTTPRequestClass
title: HTTPRequest
---

La clase `HTTPRequest` permite manejar [objetos `HTTPRequest`](#httprequest-object) que se pueden utilizar para configurar y enviar solicitudes a un servidor HTTP, así como para procesar las respuestas del servidor HTTP.

La clase `HTTPRequest` está disponible en el class store `4D`. Para crear y enviar peticiones HTTP se utiliza la función [4D.HTTPRequest.new()](#4dhttprequestnew), que devuelve un [objeto `HTTPRequest`](#httprequest-object).

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R6       | Clase añadida  |

</details>

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
$request.wait() // Si desea gestionar la solicitud de forma sincrónica
// Ahora puede utilizar $request.response para acceder al resultado de la petición o $request.error para comprobar el error que se ha producido.
```

### Objeto HTTPRequest

Un objeto HTTPRequest es un objeto no compartible.

Los objetos HTTPRequest ofrecen las siguientes propiedades y funciones:

|                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #HTTPRequestClass.agent.Syntax -->](#agent)<br/><!-- INCLUDE #HTTPRequestClass.agent.Summary -->                              |
| [<!-- INCLUDE #HTTPRequestClass.dataType.Syntax -->](#datatype)<br/><!-- INCLUDE #HTTPRequestClass.dataType.Summary -->                     |
| [<!-- INCLUDE #HTTPRequestClass.encoding.Syntax -->](#encoding)<br/><!-- INCLUDE #HTTPRequestClass.encoding.Summary -->                     |
| [<!-- INCLUDE #HTTPRequestClass.errors.Syntax -->](#errors)<br/><!-- INCLUDE #HTTPRequestClass.errors.Summary -->                           |
| [<!-- INCLUDE #HTTPRequestClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #HTTPRequestClass.headers.Summary -->                        |
| [<!-- INCLUDE #HTTPRequestClass.method.Syntax -->](#method)<br/><!-- INCLUDE #HTTPRequestClass.method.Summary -->                           |
| [<!-- INCLUDE #HTTPRequestClass.protocol.Syntax -->](#protocol)<br/><!-- INCLUDE #HTTPRequestClass.protocol.Summary -->                     |
| [<!-- INCLUDE #HTTPRequestClass.response.Syntax -->](#response)<br/><!-- INCLUDE #HTTPRequestClass.response.Summary -->                     |
| [<!-- INCLUDE #HTTPRequestClass.returnResponseBody.Syntax -->](#datatype)<br/><!-- INCLUDE #HTTPRequestClass.returnResponseBody.Summary --> |
| [<!-- INCLUDE #HTTPRequestClass.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #HTTPRequestClass.terminate().Summary -->              |
| [<!-- INCLUDE #HTTPRequestClass.terminated.Syntax -->](#terminated)<br/><!-- INCLUDE #HTTPRequestClass.terminated.Summary -->               |
| [<!-- INCLUDE #HTTPRequestClass.timeout.Syntax -->](#timeout)<br/><!-- INCLUDE #HTTPRequestClass.timeout.Summary -->                        |
| [<!-- INCLUDE #HTTPRequestClass.url.Syntax -->](#url)<br/><!-- INCLUDE #HTTPRequestClass.url.Summary -->                                    |
| [<!-- INCLUDE #HTTPRequestClass.wait().Syntax -->](#wait)<br/><!-- INCLUDE #HTTPRequestClass.wait().Summary -->                             |

<!-- REF #4D.HTTPRequest.new().Desc -->

## 4D.HTTPRequest.new()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                    |
| ----------- | ----------------------------------------------------------------- |
| 20          | Validación TLS por defecto                                        |
| 19 R7       | Soporte de las propiedades *automaticRedirections* y *decodeData* |

</details>

<!-- REF #4D.HTTPRequest.new().Syntax -->**4D.HTTPRequest.new**( *url* : Text { ; *options* : Object } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #4D.HTTPRequest.new().Params -->

| Parámetros | Tipo                           |                             | Descripción                                 |
| ---------- | ------------------------------ | :-------------------------: | ------------------------------------------- |
| url        | Text                           |              ->             | URL a la que enviar la solicitud            |
| options    | Object                         |              ->             | Propiedades de configuración de la petición |
| Resultado  | 4D.HTTPRequest | <- | Nuevo objeto HTTPRequest                    |

<!-- END REF -->

#### Descripción

La función `4D.HTTPRequest.new()` <!-- REF #4D.HTTPRequest.new().Summary -->crea y envía una solicitud HTTP al servidor HTTP definido en *url* con las opciones definidas, y devuelve un objeto `4D.HTTPRequest`<!-- END REF -->.

El objeto `HTTPRequest` devuelto se utiliza para procesar las respuestas del servidor HTTP y llamar a los métodos.

En *url*, pase la URL a la que desea enviar la petición. La sintaxis a utilizar es:

```
{http://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
{https://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

Si se omite la parte "scheme" (`http://` o `https://`), se envía una petición https.

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

#### Parámetro *options*

En el parámetro *options*, pase un objeto que puede contener las siguientes propiedades:

| Propiedad              | Tipo                                              | Descripción                                                                                                                                                                                                                                                                                                                                                    | Por defecto          |
| ---------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| agent                  | [4D.HTTPAgent](HTTPAgentClass.md) | HTTPAgent a utilizar para la HTTPRequest. Las opciones del agente se fusionarán con las opciones de la petición (las opciones de la petición tienen prioridad). Si no se define un agente específico, se utiliza un agente global con valores predeterminados.                              | Objeto agente global |
| automaticRedirections  | Boolean                                           | Si es true, las redirecciones se realizan automáticamente (se gestionan hasta 5 redirecciones, se devuelve la 6ª respuesta de redirección si la hay)                                                                                                                                                                                        | True                 |
| body                   | Variant                                           | Cuerpo de la petición (necesario en el caso de las peticiones `post` o `put`). Puede ser un texto, un blob, o un objeto. El content-type se determina a partir del tipo de esta propiedad a menos que se defina dentro de los encabezados                                                                   | indefinido           |
| certificatesFolder     | [Folder](FolderClass.md)                          | Define la carpeta de certificados de cliente activa                                                                                                                                                                                                                                                                                                            | indefinido           |
| dataType               | Text                                              | Tipo de atributo del cuerpo de la respuesta. Valores: "text", "blob", "object", o "auto". Si "auto", el tipo de contenido del cuerpo se deducirá de su tipo MIME (object para JSON, texto para texto, javascript, xml, mensaje http y formulario codificado en url, blob en caso contrario) | "auto"               |
| decodeData             | Boolean                                           | Si true, los datos recibidos en la retrollamada `onData` se descomprimen                                                                                                                                                                                                                                                                                       | False                |
| encoding               | Text                                              | Se utiliza sólo en caso de peticiones con un `body` (métodos `post` o `put`). Codificación del contenido del cuerpo de la petición si es un texto, se ignora si se define content-type dentro de los encabezados                                                                                                            | "UTF-8"              |
| headers                | Object                                            | Encabezados de la petición. Sintaxis: `headers.key=value` (*value* puede ser una colección si la misma llave debe aparecer varias veces)                                                                                                                                                                    | Objeto vacío         |
| method                 | Text                                              | "POST", "GET" u otro método                                                                                                                                                                                                                                                                                                                                    | "GET"                |
| minTLSVersion          | Text                                              | Define la versión mínima de TLS: "`TLSv1_0`", "`TLSv1_1`", "`TLSv1_2`", "`TLSv1_3`"                                                                                                                                                                                                                                                            | "`TLSv1_2`"          |
| onData                 | [Function](FunctionClass.md)                      | Retrollamada cuando se reciben los datos del cuerpo. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                                                     | indefinido           |
| onError                | [Function](FunctionClass.md)                      | Retrollamada cuando ocurre un error. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                                                                     | indefinido           |
| onHeaders              | [Function](FunctionClass.md)                      | Retrollamada cuando se reciben los encabezados. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                                                          | indefinido           |
| onResponse             | [Function](FunctionClass.md)                      | Retrollamada cuando se recibe una respuesta. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                                                             | indefinido           |
| onTerminate            | [Function](FunctionClass.md)                      | Retrollamada cuando la petición haya terminado. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                                                          | indefinido           |
| protocol               | Text                                              | "auto" o "HTTP1". "auto" significa HTTP1 en la implementación actual                                                                                                                                                                                                                                                                           | "auto"               |
| proxyAuthentication    | [objeto de autenticación](#authentication-object) | Autenticación del proxy de gestión de objetos                                                                                                                                                                                                                                                                                                                  | indefinido           |
| serverAuthentication   | [objeto de autenticación](#authentication-object) | Autenticación del servidor de gestión de objetos                                                                                                                                                                                                                                                                                                               | indefinido           |
| returnResponseBody     | Boolean                                           | Si false, el cuerpo de la respuesta no se devuelve en el [objeto `response`](#response). Devuelve un error si es false y `onData` es undefined                                                                                                                                                                                                 | True                 |
| timeout                | Real                                              | Tiempo de espera en segundos. Indefinido = sin tiempo de espera                                                                                                                                                                                                                                                                                | Indefinido           |
| validateTLSCertificate | Boolean                                           | Si false, 4D no valida el certificado TLS y no devuelve un error si no es válido (es decir, caducado, autofirmado...). Importante: en la implementación actual, la propia Autoridad de Certificación no se verifica.                        | True                 |

#### Función callback (retrollamada)

Todas las funciones de retrollamada reciben dos parámetros objeto:

| Parámetros | Tipo                                        |
| ---------- | ------------------------------------------- |
| $param1    | [`Objeto HTTPRequest`](#httprequest-object) |
| $param2    | [Objeto `Event`](#event-object)             |

Esta es la secuencia de llamadas de retorno:

1. `onHeaders` se llama siempre una vez

2. `onData` se llama cero o varias veces (no se llama si la petición no tiene cuerpo)

3. Si no se ha producido ningún error, `onResponse` siempre se llama una vez

4. Si se produce un error, `onError` se ejecuta una vez (y termina la petición)

5. `onTerminate` se ejecuta siempre una vez

:::info

Para que las funciones de retrollamada se llamen cuando no utilice [`wait()`](#wait) (llamada asíncrona), el proceso debe ser un [worker](../Develop/processes.md#worker-processes) creado con [`CALL WORKER`](../commands-legacy/call-worker.md), NO [`New process`](../commands-legacy/new-process.md).

:::

#### objeto evento

Un objeto `event` es devuelto cuando una [función de callback](#callback-functions) es llamada. Contiene las siguientes propiedades:

| Propiedad             | Tipo | Descripción                                                                                                            |
| --------------------- | ---- | ---------------------------------------------------------------------------------------------------------------------- |
| .data | blob | Datos recibidos. Siempre es *undefined* excepto en la retrollamada `onData`                            |
| .type | text | Tipo de evento. Valores posibles: "response", "error", "headers", "data", o "terminate |

#### authentication object

Un objeto de autenticación maneja la propiedad `options.serverAuthentication` o `options.proxyAuthentication`. Puede contener las siguientes propiedades:

| Propiedad  | Tipo | Descripción                                                                       | Por defecto |
| ---------- | ---- | --------------------------------------------------------------------------------- | ----------- |
| name       | Text | Nombre usado para la autenticación                                                | indefinido  |
| contraseña | Text | Contraseña utilizada para la autenticación                                        | indefinido  |
| method     | Text | Método utilizado para la autenticación: "basic", "digest", "auto" | "auto"      |

<!-- END REF -->

<!-- REF #HTTPRequestClass.agent.Desc -->

## .agent

<!-- REF #HTTPRequestClass.agent.Syntax -->**agent** : 4D.HTTPAgent<!-- END REF -->

#### Descripción

La propiedad `.agent` contiene <!-- REF #HTTPRequestClass.agent.Summary -->el objeto `agent` pasado en [`options`](#options-parameter) o el objeto agente global si se omitió<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.dataType.Desc -->

## .dataType

<!-- REF #HTTPRequestClass.dataType.Syntax -->**dataType** : Text<!-- END REF -->

#### Descripción

La propiedad `.dataType` contiene <!-- REF #HTTPRequestClass.dataType.Summary -->el `dataType` pasado en el objeto [`options`](#options-parameter) al llamar a [new()](#4dhttprequestnew), "auto" si se omitió<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.encoding.Desc -->

## .encoding

<!-- REF #HTTPRequestClass.encoding.Syntax -->**encoding** : Text<!-- END REF -->

#### Descripción

La propiedad `.encoding` contiene <!-- REF #HTTPRequestClass.encoding.Summary -->el `encoding` pasado en el objeto [`options`](#options-parameter) al llamar a [new()](#4dhttprequestnew), "UTF-8" si se omitió<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.errors.Desc -->

## .errors

<!-- REF #HTTPRequestClass.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Descripción

La propiedad `.errors` contiene <!-- REF #HTTPRequestClass.errors.Summary -->la colección de todos los errores si se ha generado al menos un error<!-- END REF -->.

Este es el contenido de la propiedad `.errors`:

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

La propiedad `.headers` contiene <!-- REF #HTTPRequestClass.headers.Summary -->los `headers` pasados en el objeto [`options`](#options-parameter) al llamar a [new()](#4dhttprequestnew)<!-- END REF -->. Si se omite, contiene un objeto vacío.

<!-- END REF -->

<!-- REF #HTTPRequestClass.method.Desc -->

## .method

<!-- REF #HTTPRequestClass.method.Syntax -->**method** : Text<!-- END REF -->

#### Descripción

La propiedad `.method` contiene <!-- REF #HTTPRequestClass.method.Summary -->el `method` pasado en el objeto [`options`](#options-parameter) al llamar a [new()](#4dhttprequestnew)<!-- END REF -->. . .

<!-- END REF -->

<!-- REF #HTTPRequestClass.protocol.Desc -->

## .protocol

<!-- REF #HTTPRequestClass.protocol.Syntax -->**protocol** : Text<!-- END REF -->

#### Descripción

La propiedad `.protocol` contiene <!-- REF #HTTPRequestClass.protocol.Summary -->el `protocol` pasado en el objeto [`options`](#options-parameter) al llamar a [new()](#4dhttprequestnew)<!-- END REF -->. . Si se ha omitido o si se ha utilizado "auto", contiene la versión del protocolo utilizada.

<!-- END REF -->

<!-- REF #HTTPRequestClass.response.Desc -->

## .response

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                               |
| ----------- | -------------------------------------------------------------------------------------------- |
| 19 R8       | `.headers` devuelve los nombres en minúsculas. Nueva propiedad `.rawHeaders` |

</details>

<!-- REF #HTTPRequestClass.response.Syntax -->**response** : Object<!-- END REF -->

#### Descripción

La propiedad `.response` contiene <!-- REF #HTTPRequestClass.response.Summary -->la respuesta a la solicitud si ha recibido al menos el código de estado, de lo contrario undefined<!-- END REF -->.

Un objeto `response` es un objeto no compartible. Ofrece las siguientes propiedades:

| Propiedad                   | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .body       | Variant | Cuerpo de la respuesta. El tipo del mensaje se define según la propiedad [`dataType`](#datatype). Indefinido si el cuerpo no se ha recibido todavía                                                                                                                                                                                                                  |
| .headers    | Object  | Encabezados de la respuesta. Los nombres de los encabezados se devuelven en minúsculas. `<headername>.key` = valor (el valor puede ser una colección si la misma llave aparece varias veces). Indefinido si el los encabezados no se ha recibido aún.                                                             |
| .status     | Number  | Código de estado de la respuesta                                                                                                                                                                                                                                                                                                                                                                     |
| .statusText | Text    | Mensaje explicando el código de estado                                                                                                                                                                                                                                                                                                                                                               |
| .rawHeaders | Object  | Encabezados de la respuesta. Los nombres de los encabezadoss se devuelven intactos (con sus mayúsculas y minúsculas originales). `<headerName>.key` = valor (el valor puede ser una colección si la misma llave aparece varias veces). Indefinido si el los encabezados no se ha recibido aún. |

<!-- END REF -->

<!-- REF #HTTPRequestClass.returnResponseBody.Desc -->

## .returnResponseBody

<!-- REF #HTTPRequestClass.returnResponseBody.Syntax -->**returnResponseBody** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.returnResponseBody` contiene <!-- REF #HTTPRequestClass.returnResponseBody.Summary -->el `returnResponseBody` pasado en el objeto [`options`](#options-parameter) al llamar a [new()](#4dhttprequestnew)<!-- END REF -->. . Si se omite, contiene True.

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

La función `.terminate()` <!-- REF #HTTPRequestClass.terminate().Summary -->interrumpe la solicitud HTTP<!-- END REF -->. Activa el evento `onTerminate`.

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminated.Desc -->

## .terminated

<!-- REF #HTTPRequestClass.terminated.Syntax -->**terminated** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.terminated` contiene <!-- REF #HTTPRequestClass.terminated.Summary -->True si la solicitud es terminada (después de la llamada a `onTerminate`), false de lo contrario<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.timeout.Desc -->

## .timeout

<!-- REF #HTTPRequestClass.timeout.Syntax -->**timeout** : Real<!-- END REF -->

#### Descripción

La propiedad `.timeout` contiene <!-- REF #HTTPRequestClass.timeout.Summary -->el `timeout` pasado en el objeto [`options`](#options-parameter) al llamar a [new()](#4dhttprequestnew)<!-- END REF -->. . .

<!-- END REF -->

<!-- REF #HTTPRequestClass.url.Desc -->

## .url

<!-- REF #HTTPRequestClass.url.Syntax -->**url** : Text<!-- END REF -->

#### Descripción

La propiedad `.url` contiene <!-- REF #HTTPRequestClass.url.Summary -->la URL de la solicitud HTTP<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Desc -->

## .wait()

<!-- REF #HTTPRequestClass.wait().Syntax -->**.wait**( { *timeout* : Real } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Params -->

| Parámetros | Tipo                           |                             | Descripción                         |
| ---------- | ------------------------------ | :-------------------------: | ----------------------------------- |
| timeout    | Real                           |              ->             | Tiempo máximo de espera en segundos |
| Resultado  | 4D.HTTPRequest | <- | Objeto HTTPRequest                  |

<!-- END REF -->

#### Descripción

> Esta función es hilo seguro.

La función `wait()` <!-- REF #HTTPRequestClass.wait().Summary -->espera una respuesta del servidor o hasta que se alcance el `timeout` especificado<!-- END REF -->.

Si se pasa un *timeout*, la función espera la duración especificada en este parámetro. Se aceptan decimales.

Si la respuesta del servidor ya ha llegado, la función regresa inmediatamente.

:::note

Durante la ejecución de .wait(), se ejecutan las funciones de retrollamada de los workers, tanto si proceden de otras instancias `HTTPRequest` o [`SystemWorker`](SystemWorkerClass.md), como de otras llamadas [`CALL WORKER`](../commands-legacy/call-worker.md).  Puede salir de un .wait() llamando a [`terminate()`](#terminate) desde una retrollamada.

:::

<!-- END REF -->
