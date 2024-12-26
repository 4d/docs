---
id: IncomingMessageClass
title: IncomingMessage
---

The `4D.IncomingMessage` class allows you to handle the object received by a custom [**HTTP request handler**](../WebServer/http-request-handler.md). HTTP requests and their properties are automatically received as an instance of the `4D.IncomingMessage` class. Parameters given directly in the request with GET verb are handled by the [`.urlQuery`](#urlquery) property, while parameters passed in the body of the request are available through functions such as [`.getBlob()`](#getblob) or [`getText()`](#gettext).

The HTTP request handler can return any value (or nothing). It usually returns an instance of the [`4D.OutgoingMessage`](OutgoingMessageClass.md) class.

All properties of this class are read-only. They are automatically filled by the request handler.

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R8       | Clase añadida  |

</details>

### Ejemplo

The following [**HTTPHandlers.json** file](../WebServer/http-request-handler.md) has been defined:

```json
[
    {
        "class": "GeneralHandling",
        "method": "gettingStarted",
        "pattern": "start",
        "verbs": "get, post"
    }
]
```

The `http://127.0.0.1/start/example?param=demo&name=4D` request is run with a `GET` verb in a browser. It is handled by the *gettingStarted* function of the following *GeneralHandling* singleton class:

```4d
shared singleton Class constructor()
        
Function gettingStarted($request : 4D.IncomingMessage) : 4D.OutgoingMessage
    
    var $result:=4D.OutgoingMessage.new()
    var $body : Text
    
    $body:="Called URL: "+$request.url+"\n"
    
    $body+="The parameters are received as an object: \n"+JSON Stringify($request.urlQuery; *)+"\n"
    
    $body+="The verb is: "+$request.verb+"\n"
    
    $body+="There are "+String($request.urlPath.length)+" url parts - Url parts are: "\
    +$request.urlPath.join(" - ")+"\n\n"
    
    
    $result.setBody($body)
    $result.setHeader("Content-Type"; "text/plain")
    
    return $result

```

The request is received on the server as *$request*, an object instance of the [4D.IncomingMessage class](../API/IncomingMessageClass.md).

Here is the response:

```json
Called URL: /start/example? param=demo&name=4D 
The parameters are received as an object:
{
  "param": "demo",
  "name": "4D"
}
The verb is: GET
There are 2 url parts - Url parts are: start - example
```

### IncomingMessage Object

4D.IncomingMessage objects provide the following properties and functions:

|                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #IncomingMessageClass.getBlob().Syntax -->](#getblob)<br/><!-- INCLUDE #IncomingMessageClass.getBlob().Summary -->          |
| [<!-- INCLUDE #IncomingMessageClass.getHeader().Syntax -->](#getheader)<br/><!-- INCLUDE #IncomingMessageClass.getHeader().Summary -->    |
| [<!-- INCLUDE #IncomingMessageClass.getJSON().Syntax -->](#getjson)<br/><!-- INCLUDE #IncomingMessageClass.getJSON().Summary -->          |
| [<!-- INCLUDE #IncomingMessageClass.getPicture().Syntax -->](#getpicture)<br/><!-- INCLUDE #IncomingMessageClass.getPicture().Summary --> |
| [<!-- INCLUDE #IncomingMessageClass.getText().Syntax -->](#gettext)<br/><!-- INCLUDE #IncomingMessageClass.getText().Summary -->          |
| [<!-- INCLUDE #IncomingMessageClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #IncomingMessageClass.headers.Summary -->              |
| [<!-- INCLUDE #IncomingMessageClass.url.Syntax -->](#url)<br/><!-- INCLUDE #IncomingMessageClass.url.Summary -->                          |
| [<!-- INCLUDE #IncomingMessageClass.urlPath.Syntax -->](#urlPath)<br/><!-- INCLUDE #IncomingMessageClass.urlPath.Summary -->              |
| [<!-- INCLUDE #IncomingMessageClass.urlQuery.Syntax -->](#urlQuery)<br/><!-- INCLUDE #IncomingMessageClass.urlQuery.Summary -->           |
| [<!-- INCLUDE #IncomingMessageClass.verb.Syntax -->](#verb)<br/><!-- INCLUDE #IncomingMessageClass.verb.Summary -->                       |

:::note

A 4D.IncomingMessage object is a [non-sharable](../Concepts/shared.md) object.

:::

<!-- REF #IncomingMessageClass.getBlob().Desc -->

## .getBlob()

<!-- REF #IncomingMessageClass.getBlob().Syntax -->**.getBlob**() : Blob<!-- END REF -->

<!-- REF #IncomingMessageClass.getBlob().Params -->

| Parámetros | Tipo |                             | Descripción                   |
| ---------- | ---- | --------------------------- | ----------------------------- |
| Result     | Blob | <- | Body of the request as a Blob |

<!-- END REF -->

#### Descripción

La función `.getBlob()` <!-- REF #IncomingMessageClass.getBlob().Summary -->devuelve el cuerpo de la petición como un Blob<!-- END REF -->.

If the body has not been given as a binary content, the function tries to convert the value but it can give unexpected results.

<!-- END REF -->

<!-- REF #IncomingMessageClass.getHeader().Desc -->

## .getHeader()

<!-- REF #IncomingMessageClass.getHeader().Syntax -->**.getHeader**( *key* : Text ) : Text<!-- END REF -->

<!-- REF #IncomingMessageClass.getHeader().Params -->

| Parámetros | Tipo |                             | Descripción                          |
| ---------- | ---- | --------------------------- | ------------------------------------ |
| key        | Text | ->                          | Header property to get               |
| Result     | Text | <- | Valor de la propiedad del encabezado |

<!-- END REF -->

#### Descripción

The `.getHeader()` function <!-- REF #IncomingMessageClass.getHeader().Summary -->returns the value of the *key* header<!-- END REF -->.

:::note

The *key* parameter is not case sensitive.

:::

#### Ejemplo

```4d
var $value : Text
var $request : 4D.IncomingMessage
$value := $request.getHeader("content-type")
```

<!-- END REF -->

<!-- REF #IncomingMessageClass.getJSON().Desc -->

## .getJSON()

<!-- REF #IncomingMessageClass.getJSON().Syntax -->**.getJSON**() : Variant<!-- END REF -->

<!-- REF #IncomingMessageClass.getJSON().Params -->

| Parámetros | Tipo    |                             | Descripción                                |
| ---------- | ------- | --------------------------- | ------------------------------------------ |
| Result     | Variant | <- | JSON resolution of the body of the request |

<!-- END REF -->

#### Descripción

The `.getJSON()` function <!-- REF #IncomingMessageClass.getJSON().Summary -->returns the body of the request as a JSON resolution<!-- END REF -->.

If the body has not been given as JSON valid content, an error is raised.

<!-- END REF -->

<!-- REF #IncomingMessageClass.getPicture().Desc -->

## .getPicture()

<!-- REF #IncomingMessageClass.getPicture().Syntax -->**.getPicture**() : Picture<!-- END REF -->

<!-- REF #IncomingMessageClass.getPicture().Params -->

| Parámetros | Tipo    |                             | Descripción                    |
| ---------- | ------- | --------------------------- | ------------------------------ |
| Result     | Picture | <- | Body of the request as picture |

<!-- END REF -->

#### Descripción

The `.getPicture()` function <!-- REF #IncomingMessageClass.getPicture().Summary -->returns the body of the request as a picture (in case of a body sent as a picture)<!-- END REF -->.

The content-type must be given in the headers to indicate that the body is a picture.

:::note

If the request is built using the [`HTTPRequest` class](HTTPRequestClass.md), the picture must be sent in the body as a Blob with the appropriate content-type.

:::

If the body is not received as a valid picture, the function returns null.

<!-- END REF -->

<!-- REF #IncomingMessageClass.getText().Desc -->

## .getText()

<!-- REF #IncomingMessageClass.getText().Syntax -->**.getText**() : Text<!-- END REF -->

<!-- REF #IncomingMessageClass.getText().Params -->

| Parámetros | Tipo |                             | Descripción                 |
| ---------- | ---- | --------------------------- | --------------------------- |
| Result     | Text | <- | Body of the request as text |

<!-- END REF -->

#### Descripción

The `.getText()` function <!-- REF #IncomingMessageClass.getText().Summary -->returns the body of the request as a text value<!-- END REF -->.

If the body has not been given as a string value, the function tries to convert the value but it can give unexpected results.

<!-- END REF -->

<!-- REF #IncomingMessageClass.headers.Desc -->

## .headers

<!-- REF #IncomingMessageClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Descripción

The `.headers` property contains <!-- REF #IncomingMessageClass.headers.Summary -->the current headers of the incoming message as key/value pairs (strings)<!-- END REF -->.

La propiedad `.headers` es de sólo lectura.

Header names (keys) are lowercased. Note header names are case sensitive.

<!-- END REF -->

<!-- REF #IncomingMessageClass.url.Desc -->

## .url

<!-- REF #IncomingMessageClass.url.Syntax -->**url** : Text<!-- END REF -->

#### Descripción

The `.url` property contains <!-- REF #IncomingMessageClass.url.Summary -->the URL of the request without the *IP:port* part and as a string<!-- END REF -->.

For example, if the request is addressed to: "http://127.0.0.1:80/docs/invoices/today", the `.url` property is "/docs/invoices/today".

The `.url` property is read-only.

:::note

The "host" part of the request (*IP:port*) is provided by the [`host` header](#headers).

:::

<!-- END REF -->

<!-- REF #IncomingMessageClass.urlPath.Desc -->

## .urlPath

<!-- REF #IncomingMessageClass.urlPath.Syntax -->**urlPath** : Collection<!-- END REF -->

#### Descripción

The `.urlPath` property contains <!-- REF #IncomingMessageClass.urlPath.Summary -->the URL of the request without the *IP:port* part and as a collection of strings<!-- END REF -->.

For example, if the request is addressed to: "http://127.0.0.1:80/docs/invoices/today", the `.urlPath` property is ["docs", "invoices" ,"today"].

The `.urlPath` property is read-only.

<!-- END REF -->

<!-- REF #IncomingMessageClass.urlQuery.Desc -->

## .urlQuery

<!-- REF #IncomingMessageClass.urlQuery.Syntax -->**urlQuery** : Object<!-- END REF -->

#### Descripción

The `.urlQuery` property contains <!-- REF #IncomingMessageClass.urlQuery.Summary -->the parameters of the request when they have been given in the URL as key/value pairs<!-- END REF -->.

The `.urlQuery` property is read-only.

Parameters can be passed in the URL of requests **directly** or **as JSON contents**.

#### Direct parameters

Example: `http://127.0.0.1:8044/myCall?firstname=Marie&id=2&isWoman=true`

In this case, parameters are received as stringified values in the `urlQuery` property: `urlQuery = {"firstname":"Marie" ,"id":"2" ,"isWoman":"true"}`

#### JSON contents parameters

Example: `http://127.0.0.1:8044/myCall/?myparams='[{"firstname": "Marie","isWoman": true,"id": 3}]'`.

Parameters are passed in JSON format and enclosed within a collection.

In this case, parameters are received as JSON text in the `urlQuery` property and can be parsed using [`JSON Parse`](../commands-legacy/json-parse.md).

```4d
//urlQuery.myparams: "[{"firstname": "Marie","isWoman": true,"id": 3}]"
$test:=Value type(JSON Parse($r.urlQuery.myparams))=Is collection) //true
```

Special characters such as simple quotes or carriage returns must be escaped.

Example: `http://127.0.0.1:8044/syntax/?mdcode=%60%60%604d`

````4d
//urlQuery.mdcode = ```4d
$test:=Length($r.urlQuery.mdcode) //5
````

:::note

Parameters given in the body of the request using POST or PUT verbs are handled through dedicated functions: [`getText()`](#gettext), [`getPicture()`](#getpicture), [`getBlob()`](#getblob), [`getJSON()`](#getjson).

:::

<!-- END REF -->

<!-- REF #IncomingMessageClass.verb.Desc -->

## .verb

<!-- REF #IncomingMessageClass.verb.Syntax -->**verb** : Text<!-- END REF -->

#### Descripción

The `.verb` property contains <!-- REF #IncomingMessageClass.verb.Summary -->the verb used by the request<!-- END REF -->.

HTTP and HTTPS request verbs include for example "get", "post", "put", etc.

The `.verb` property is read-only.

<!-- END REF -->
