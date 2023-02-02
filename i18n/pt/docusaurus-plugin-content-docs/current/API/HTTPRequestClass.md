---
id: HTTPRequestClass
title: HTTPRequest
---

<details><summary>Histórico</summary>

| Versão | Mudanças    |
| ------ | ----------- |
| v19 R6 | Class added |

</details>

A classe `HTTPRequest` permite-lhe tratar [`objectos HTTPRequest`](#httprequest-object) que podem ser utilizados para configurar e enviar pedidos para um servidor HTTP, bem como para processar as respostas do servidor HTTP.

A classe `HTTPRequest` está disponível a partir da loja de classes `4D` . Você cria e envia pedidos HTTP usando a função [4D.HTTPRequest.new()](#4dhttprequestnew) , que retorna um objecto HTTPRequest [``](#httprequest-object).

### Exemplo

Criar uma classe `MyHttpRequestOptions` para as opções de pedido:

```4d
Class constructor($method : Text; $headers : Object; $body : Text)
This.method:=$method
This.headers:=$headers
This.body:=$body

Function onResponse($request : 4D.HTTPRequest; $event : Object)
//Método My onResponse, se quiser manejar a petição de forma assincronica

Function onError($request : 4D.HTTPRequest; $event : Object)
//Método My onError, se quiser manejar a petição de forma assincrônica
```

Pode agora criar o seu pedido:

```4d
var $headers : Object
$headers:=New object()
$headers["field1"]:="value1"

var myHttpRequestOptions : cs.MyHttpRequestOptions
myHttpRequestOptions := cs.MyHttpRequestOptions.new("GET"; $headers; "")

var $request : 4D.HTTPRequest
$request:=4D.HTTPRequest.new("www.google.com"; myHttpRequestOptions)
$request.wait() //If you want to handle the request synchronously
//Now pode usar $request.response para aceder ao resultado do pedido ou $request.error para verificar o erro que aconteceu.
```

### Objeto HTTPRequest

Um objecto HTTPRequest é um objecto não partilhável.

Os objectos HTTPRequest fornecem as seguintes propriedades e funções:

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


<details><summary>Histórico</summary>

| Versão | Mudanças                         |
| ------ | -------------------------------- |
| v19 R7 | Support of *decodeData* property |

</details>

<!-- REF #4D.HTTPRequest.new().Syntax -->**4D.HTTPRequest.new**( *url* : Text { ; *options* : Object } ) : 4D.HTTPRequest<!-- END REF -->


<!-- REF #4D.HTTPRequest.new().Params -->
| Parâmetros | Tipo           |    | Descrição                                           |
| ---------- | -------------- |:--:| --------------------------------------------------- |
| url        | Text           | -> | URL para onde enviar o pedido                       |
| options    | Objeto         | -> | Pedir propriedades de configuração                  |
| Resultados | 4D.HTTPRequest | <- | Novo objecto HTTPRequest|<!-- END REF -->

|

#### Descrição

A função `4D.HTTPRequest.new()` <!-- REF #4D.HTTPRequest.new().Summary -->cria e envia um pedido HTTP para o servidor HTTP definido em *url* com as opções definidas **, e devolve um objecto `4D.HTTPRequest`<!-- END REF -->.

O objeto devolvido `HTTPRequest` é utilizado para processar respostas do servidor HTTP e métodos de chamada.

Em *url*, passe o URL para onde pretende enviar o pedido. A sintaxe a utilizar é:

```
{http://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
{https://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

Se omitir a parte do protocolo (`http://` ou `https://`), é enviado um pedido https.

Por exemplo, pode passar as seguintes cordas:

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

#### parâmetro `options`

No parâmetro *opções* , passe um objeto que possa conter as seguintes propriedades:

| Propriedade          | Tipo                                            | Descrição                                                                                                                                                                                                                                                         | Predefinição |
| -------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| body                 | Variant                                         | Corpo do pedido (requerido no caso de `post` ou `put` requests). Pode ser um texto, um blob, ou um objecto. O tipo de conteúdo é determinado a partir do tipo desta propriedade, a menos que seja colocado dentro dos cabeçalhos                                  | indefinido   |
| certificatesFolder   | [Folder](FolderClass.md)                        | Sets the active client certificates folder                                                                                                                                                                                                                        | indefinido   |
| dataType             | Text                                            | Type of the response body attribute. Values: "text", "blob", "object", or "auto". If "auto", the type of the body content will be deduced from its MIME type (object for JSON, text for text, javascript, xml, http message and url encoded form, blob otherwise) | "auto"       |
| decodeData           | Booleano                                        | If true, the data received in the `onData` callback is uncompressed                                                                                                                                                                                               | False        |
| encoding             | Text                                            | Used only in case of requests with a `body` (`post` or `put` methods). Encoding of the request body content if it's a text, ignored if content-type is set inside the headers                                                                                     | "UTF-8"      |
| headers              | Objeto                                          | Headers of the request. Syntax: `headers.key=value` (*value* can be a Collection if the same key must appear multiple times)                                                                                                                                      | Empty object |
| method               | Text                                            | "POST", "GET", or other method                                                                                                                                                                                                                                    | "GET"        |
| minTLSVersion        | Text                                            | Sets the minimum version of TLS: "`TLSv1_0`", "`TLSv1_1`", "`TLSv1_2`", "`TLSv1_3`"                                                                                                                                                                               | "`TLSv1_2`"  |
| onData               | [Function](FunctionClass.md)                    | Callback when data from the body is received. It receives two objects as parameters (see below)                                                                                                                                                                   | indefinido   |
| onError              | [Function](FunctionClass.md)                    | Callback when an error occurs. It receives two objects as parameters (see below)                                                                                                                                                                                  | indefinido   |
| onHeaders            | [Function](FunctionClass.md)                    | Callback when the headers are received. It receives two objects as parameters (see below)                                                                                                                                                                         | indefinido   |
| onResponse           | [Function](FunctionClass.md)                    | Callback when a response is received. It receives two objects as parameters (see below)                                                                                                                                                                           | indefinido   |
| onTerminate          | [Function](FunctionClass.md)                    | Callback when the request is over. It receives two objects as parameters (see below)                                                                                                                                                                              | indefinido   |
| protocol             | Text                                            | "auto" ou "HTTP1". "auto" means HTTP1 in the current implementation                                                                                                                                                                                               | "auto"       |
| proxyAuthentication  | [authentication object](#authentication-object) | Object handling proxy authentication                                                                                                                                                                                                                              | indefinido   |
| serverAuthentication | [authentication object](#authentication-object) | Object handling server authentication                                                                                                                                                                                                                             | indefinido   |
| returnResponseBody   | Booleano                                        | If false, the response body is not returned in the [`response` object](#response). Returns an error if false and `onData` is undefined                                                                                                                            | True         |
| timeout              | Real                                            | Tempo de espera em segundos. Undefined = no timeout                                                                                                                                                                                                               | Indefinido   |


#### Funções Callback

All callback functions receive two object parameters:

| Parâmetros | Tipo                                        |
| ---------- | ------------------------------------------- |
| $param1    | [objeto `HTTPRequest`](#httprequest-object) |
| $param2    | [`Event` objecto](#event-object)            |

Here is the sequence of callback calls:

1. `onHeaders` is always called once
2. `onData` is called zero or several times (not called if the request does not have a body)

3. If no error occured, `onResponse` is always called once
4. If an error occurs, `onError` is executed once (and terminates the request)
5. `onTerminate` is always executed once

#### objecto evento

An `event` object is returned when a [callback function](#callback-functions) is called. It contains the following properties:

| Propriedade | Tipo | Descrição                                                                             |
| ----------- | ---- | ------------------------------------------------------------------------------------- |
| .dados      | blob | Received data. It is always *undefined* except in the `onData` callback               |
| .type       | text | Type of event. Possible values: "response", "error", "headers", "data", or "terminate |

#### objecto autenticação

An authentication object handles the `options.serverAuthentication` or `options.proxyAuthentication` property. It can contain the following properties:

| Propriedade | Tipo | Descrição                                                | Predefinição |
| ----------- | ---- | -------------------------------------------------------- | ------------ |
| name        | Text | Name used for authentication                             | indefinido   |
| senha       | Text | Password used for authentication                         | indefinido   |
| method      | Text | Method used for authentication:"basic", "digest", "auto" | "auto"       |

<!-- END REF -->

<!-- REF #HTTPRequestClass.dataType.Desc -->
## .dataType

<!-- REF #HTTPRequestClass.dataType.Syntax -->**dataType** : Text<!-- END REF -->

#### Descrição

A propriedade `.dataType` contém <!-- REF #HTTPRequestClass.dataType.Summary -->the `dataType` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew), "auto" if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.encoding.Desc -->
## .encoding

<!-- REF #HTTPRequestClass.encoding.Syntax -->**encoding** : Text<!-- END REF -->

#### Descrição

A propriedade `.encoding` contém <!-- REF #HTTPRequestClass.encoding.Summary -->the `encoding` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew), "UTF-8" if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.errors.Desc -->
## .errors

<!-- REF #HTTPRequestClass.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Descrição

The `.errors` property contains <!-- REF #HTTPRequestClass.errors.Summary -->the collection of all the errors if at least one error has been triggered<!-- END REF -->.

Here is the contents of the `.errors` property:

| Propriedade |                       | Tipo       | Descrição                                                    |
| ----------- | --------------------- | ---------- | ------------------------------------------------------------ |
| errors      |                       | Collection | 4D error stack in case of error                              |
|             | [].errCode            | Número     | 4D error code                                                |
|             | [].message            | Text       | Description of the 4D error                                  |
|             | [].componentSignature | Text       | Signature of the internal component which returned the error |

<!-- END REF -->

<!-- REF #HTTPRequestClass.headers.Desc -->
## .headers

<!-- REF #HTTPRequestClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Descrição

A propriedade `.headers` contém <!-- REF #HTTPRequestClass.headers.Summary -->the `headers` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. If it was omitted, contains an empty object.

<!-- END REF -->

<!-- REF #HTTPRequestClass.method.Desc -->
## .method

<!-- REF #HTTPRequestClass.method.Syntax -->**method** : Text<!-- END REF -->

#### Descrição

A propriedade `.method` contém <!-- REF #HTTPRequestClass.method.Summary -->the `method` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. If it was omitted, contains "GET".

<!-- END REF -->

<!-- REF #HTTPRequestClass.protocol.Desc -->
## .protocol

<!-- REF #HTTPRequestClass.protocol.Syntax -->**protocol** : Text<!-- END REF -->

#### Descrição

The `.protocol` property contains <!-- REF #HTTPRequestClass.protocol.Summary -->the `protocol` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. If it was omitted or if "auto" was used, contains the version of the protocol used.

<!-- END REF -->

<!-- REF #HTTPRequestClass.response.Desc -->
## .response

<details><summary>Histórico</summary>

| Versão | Mudanças                                                       |
| ------ | -------------------------------------------------------------- |
| v19 R8 | `.headers` returns lowercase names. New `.rawHeaders` property |

</details>

<!-- REF #HTTPRequestClass.response.Syntax -->**response** : Object<!-- END REF -->

#### Descrição

The `.response` property contains <!-- REF #HTTPRequestClass.response.Summary -->the response to the request if it has received at least the status code, undefined otherwise<!-- END REF -->.

A `response` object is a non-sharable object. It provides the following properties:

| Propriedade | Tipo    | Descrição                                                                                                                                                                                                                                          |
| ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .body       | Variant | Body of the response. The type of the message is defined according to the [`dataType`](#datatype) property. Undefined if the body has not been received yet                                                                                        |
| .headers    | Objeto  | Headers of the response. Header names are returned in lowercase. `<headername>.key` = value (value can be a collection if the same key appears multiple times). Undefined if the headers have not been received yet.                         |
| .estado     | Número  | Status code of the response                                                                                                                                                                                                                        |
| .statusText | Text    | Message explaining the status code                                                                                                                                                                                                                 |
| .rawHeaders | Objeto  | Headers of the response. Header names are returned untouched (with their original case). `<headerName>.key` = value (value can be a collection if the same key appears multiple times). Undefined if the headers have not been received yet. |

<!-- END REF -->

<!-- REF #HTTPRequestClass.returnResponseBody.Desc -->
## .returnResponseBody

<!-- REF #HTTPRequestClass.returnResponseBody.Syntax -->**returnResponseBody** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.returnResponseBody` contém <!-- REF #HTTPRequestClass.returnResponseBody.Summary -->the `returnResponseBody` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. If it was omitted, contains True.

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminate().Desc -->
## .terminate()

<!-- REF #HTTPRequestClass.terminate().Syntax -->**.terminate()**<!-- END REF -->


<!-- REF #HTTPRequestClass.terminate().Params -->
| Parâmetros | Tipo |  | Descrição                                             |
| ---------- | ---- |::| ----------------------------------------------------- |
|            |      |  | Não exige nenhum parâmetro|<!-- END REF -->

|

#### Descrição

> This function is thread-safe.

A função `.terminate()` <!-- REF #HTTPRequestClass.terminate().Summary -->aborts the HTTP request<!-- END REF -->. It triggers the `onTerminate` event.

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminated.Desc -->
## .terminated

<!-- REF #HTTPRequestClass.terminated.Syntax -->**terminated** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.terminated` contém <!-- REF #HTTPRequestClass.terminated.Summary -->True if the request is terminated (after the call to `onTerminate`), false otherwise<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.timeout.Desc -->
## .timeout

<!-- REF #HTTPRequestClass.timeout.Syntax -->**timeout** : Real<!-- END REF -->

#### Descrição

A propriedade `.timeout` contém <!-- REF #HTTPRequestClass.timeout.Summary -->the `timeout` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. If it was omitted, contains Undefined.

<!-- END REF -->

<!-- REF #HTTPRequestClass.url.Desc -->
## .url

<!-- REF #HTTPRequestClass.url.Syntax -->**url** : Text<!-- END REF -->

#### Descrição

A propriedade `.url` contém <!-- REF #HTTPRequestClass.url.Summary -->the URL of the HTTP request<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Desc -->
## .wait()

<!-- REF #HTTPRequestClass.wait().Syntax -->**.wait**( { *time* : Real } ) : HTTPRequestClass<!-- END REF -->


<!-- REF #HTTPRequestClass.wait().Params -->
| Parâmetros | Tipo           |    | Descrição                                        |
| ---------- | -------------- |:--:| ------------------------------------------------ |
| time       | Real           | -> | Maximum time in seconds to wait for the response |
| Resultados | 4D.HTTPRequest | <- | HTTPRequest object|<!-- END REF -->

|

#### Descrição

> This function is thread-safe.

A função `wait()` <!-- REF #HTTPRequestClass.wait().Summary -->waits for the response from the server<!-- END REF -->.

If a *time* parameter is passed, the function will wait at most the defined number of seconds.

If the response from the server has already arrived, the function returns immediately.
<!-- END REF -->
