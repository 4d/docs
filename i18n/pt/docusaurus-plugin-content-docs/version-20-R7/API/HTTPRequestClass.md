---
id: HTTPRequestClass
title: HTTPRequest
---

The `HTTPRequest` class allows you to handle [`HTTPRequest objects`](#httprequest-object) that can be used to configure and send requests to an HTTP server, as well as to process the HTTP server responses.

A classe `HTTPRequest` está disponível no class store `4D`. You create and send HTTP requests using the [4D.HTTPRequest.new()](#4dhttprequestnew) function, that returns a [`HTTPRequest object`](#httprequest-object).

<details><summary>História</summary>

| Release | Mudanças          |
| ------- | ----------------- |
| 19 R6   | Classe adicionada |

</details>

### Exemplo

Criar uma classe `MyHttpRequestOptions` para as opções de pedido:

```4d
Class constructor($method : Text; $headers : Object; $body : Text)
This.method:=$method This.headers:=$headers This.body:=$body Function onResponse($request : 4D.HTTPRequest; $event : Object)
//Método My onResponse, se quiser manejar a petição de forma assincronica Function onError($request : 4D.HTTPRequest; $event : Object)
//Método My onError, se quiser manejar a petição de forma assincrônica
```

Pode agora criar o seu pedido:

```4d
var $headers : Object
$headers:=New object()
$headers["field1"]:="value1"

var myHttpRequestOptions : cs. MyHttpRequestOptions
myHttpRequestOptions := cs. MyHttpRequestOptions.new("GET"; $headers; "")

var $request : 4D.HTTPRequest
$request:=4D.HTTPRequest.new("www.google.com"; myHttpRequestOptions)
$request.wait() //If you want to handle the request synchronously
//Now pode usar $request.response para aceder ao resultado do pedido ou $request.error para verificar o erro que aconteceu.
```

### Objeto HTTPRequest

Um objecto HTTPRequest é um objecto não partilhável.

Os objectos HTTPRequest fornecem as seguintes propriedades e funções:

|                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #HTTPRequestClass.agent.Syntax -->](#agent)<br/><!-- INCLUDE #HTTPRequestClass.agent.Summary -->                                        |
| [<!-- INCLUDE #HTTPRequestClass.dataType.Syntax -->](#dataType)<br/><!-- INCLUDE #HTTPRequestClass.dataType.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.encoding.Syntax -->](#encoding)<br/><!-- INCLUDE #HTTPRequestClass.encoding.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.errors.Syntax -->](#errors)<br/><!-- INCLUDE #HTTPRequestClass.errors.Summary -->                                     |
| [<!-- INCLUDE #HTTPRequestClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #HTTPRequestClass.headers.Summary -->                                  |
| [<!-- INCLUDE #HTTPRequestClass.method.Syntax -->](#method)<br/><!-- INCLUDE #HTTPRequestClass.method.Summary -->                                     |
| [<!-- INCLUDE #HTTPRequestClass.protocol.Syntax -->](#protocol)<br/><!-- INCLUDE #HTTPRequestClass.protocol.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.response.Syntax -->](#response)<br/><!-- INCLUDE #HTTPRequestClass.response.Summary -->                               |
| [<!-- INCLUDE #HTTPRequestClass.returnResponseBody.Syntax -->](#returnResponseBody)<br/><!-- INCLUDE #HTTPRequestClass.returnResponseBody.Summary --> |
| [<!-- INCLUDE #HTTPRequestClass.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #HTTPRequestClass.terminate().Summary -->                        |
| [<!-- INCLUDE #HTTPRequestClass.terminated.Syntax -->](#terminated)<br/><!-- INCLUDE #HTTPRequestClass.terminated.Summary -->                         |
| [<!-- INCLUDE #HTTPRequestClass.timeout.Syntax -->](#timeout)<br/><!-- INCLUDE #HTTPRequestClass.timeout.Summary -->                                  |
| [<!-- INCLUDE #HTTPRequestClass.url.Syntax -->](#url)<br/><!-- INCLUDE #HTTPRequestClass.url.Summary -->                                              |
| [<!-- INCLUDE #HTTPRequestClass.wait().Syntax -->](#wait)<br/><!-- INCLUDE #HTTPRequestClass.wait().Summary -->                                       |

<!-- REF #4D.HTTPRequest.new().Desc -->

## 4D.HTTPRequest.new()

<details><summary>História</summary>

| Release | Mudanças                                                       |
| ------- | -------------------------------------------------------------- |
| 20      | Validação TLS por padrão                                       |
| 18 R6   | Suporte às propriedades *automaticRedirections* e *decodeData* |

</details>

<!-- REF #4D.HTTPRequest.new().Syntax -->**4D.HTTPRequest.new**( *url* : Text { ; *options* : Object } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #4D.HTTPRequest.new().Params -->

| Parâmetro  | Tipo                           |                             | Descrição                          |
| ---------- | ------------------------------ | :-------------------------: | ---------------------------------- |
| url        | Text                           |              ->             | URL para onde enviar o pedido      |
| options    | Object                         |              ->             | Pedir propriedades de configuração |
| Resultados | 4D.HTTPRequest | <- | Novo objecto HTTPRequest           |

<!-- END REF -->

#### Descrição

The `4D.HTTPRequest.new()` function <!-- REF #4D.HTTPRequest.new().Summary -->creates and sends a HTTP request to the HTTP server defined in *url* with the defined *options*, and returns a `4D.HTTPRequest` object<!-- END REF -->.

The returned `HTTPRequest` object is used to process responses from the HTTP server and call methods.

In *url*, pass the URL where you want to send the request. A sintaxe a utilizar é:

```
{http://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
{https://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

Se você omitir a parte do esquema (`http://` ou `https://`), é enviado um pedido https.

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

#### `options` parameter

In the *options* parameter, pass an object that can contain the following properties:

| Propriedade            | Tipo                                              | Descrição                                                                                                                                                                                                                                                                                                                                                           | Por padrão          |
| ---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| agent                  | [4D.HTTPAgent](HTTPAgentClass.md) | HTTPAgent para usar para o HTTPRequest. Agent options will be merged with request options (request options take precedence). If no specific agent is defined, a global agent with default values is used.                                                                                        | Global agent object |
| automaticRedirections  | Parâmetros                                        | Se true, os redirecionamentos serão realizados automaticamente (até 5 redirecionamentos são tratados, a resposta do 6. º redirecionamento é retornada, se houver)                                                                                                                                                                | True                |
| body                   | Diferente de                                      | Corpo do pedido (requerido no caso de `post` ou `put` requests). Pode ser um texto, um blob, ou um objecto. O tipo de conteúdo é determinado a partir do tipo desta propriedade, a menos que seja colocado dentro dos cabeçalhos                                                                                 | indefinido          |
| certificatesFolder     | [Folder](FolderClass.md)                          | Define a pasta de certificados de cliente activos                                                                                                                                                                                                                                                                                                                   | indefinido          |
| dataType               | Text                                              | Tipo de atributo do corpo de resposta. Valores: "texto", "blob", "objecto", ou "auto". Se "auto", o tipo do conteúdo do corpo será deduzido do seu tipo MIME (objecto para JSON, texto para texto, javascript, xml, mensagem http e forma codificada url, ou então um blob)                      | "auto"              |
| decodeData             | Parâmetros                                        | Se for verdade, os dados recebidos em `onData` callback não são compactados                                                                                                                                                                                                                                                                                         | False               |
| encoding               | Text                                              | Used only in case of requests with a `body` (`post` or `put` methods). Codificação do conteúdo do corpo do pedido se for um texto, ignorado se o tipo de conteúdo for colocado dentro dos cabeçalhos                                                                                                                             | "UTF-8"             |
| headers                | Object                                            | Cabeçalhos do pedido. Syntax: `headers.key=value` (*value* can be a Collection if the same key must appear multiple times)                                                                                                                                                                                       | Objecto vazio       |
| method                 | Text                                              | "POST", "GET", ou outro método                                                                                                                                                                                                                                                                                                                                      | "GET"               |
| minTLSVersion          | Text                                              | Sets the minimum version of TLS: "`TLSv1_0`", "`TLSv1_1`", "`TLSv1_2`", "`TLSv1_3`"                                                                                                                                                                                                                                                                 | "`TLSv1_2`"         |
| onData                 | [Function](FunctionClass.md)                      | Chamada de retorno quando os dados do corpo são recebidos. Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                                                                     | indefinido          |
| onError                | [Function](FunctionClass.md)                      | Chamada de retorno quando ocorre um erro. Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                                                                                      | indefinido          |
| onHeaders              | [Function](FunctionClass.md)                      | Chamada de retorno quando os cabeçalhos são recebidos. Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                                                                         | indefinido          |
| onResponse             | [Function](FunctionClass.md)                      | Chamada de retorno quando uma resposta é recebida. Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                                                                             | indefinido          |
| onTerminate            | [Function](FunctionClass.md)                      | Chamada de retorno quando o pedido estiver terminado. Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                                                                          | indefinido          |
| protocol               | Text                                              | "auto" ou "HTTP1". "auto" significa HTTP1 na implementação actual                                                                                                                                                                                                                                                                                   | "auto"              |
| proxyAuthentication    | [objeto de autenticação](#authentication-object)  | Autenticação por procuração de tratamento de objectos                                                                                                                                                                                                                                                                                                               | indefinido          |
| serverAuthentication   | [objeto de autenticação](#authentication-object)  | Autenticação do servidor de tratamento de objectos                                                                                                                                                                                                                                                                                                                  | indefinido          |
| returnResponseBody     | Parâmetros                                        | Se false, o corpo de resposta não é retornado no objeto [`response`](#response). Devolve um erro se falso e `onData` é indefinido                                                                                                                                                                                                                   | True                |
| timeout                | Real                                              | Tempo de espera em segundos. Indefinido = sem timeout                                                                                                                                                                                                                                                                                               | Indefinido          |
| validateTLSCertificate | Parâmetros                                        | Se false, 4D não valida o certificado TLS e não retorna um erro se ele for inválido (i.e. expirado, auto-assinado...). Importante: Na implementação actual, a Autoridade de Certificação em si não é verificada. | True                |

#### Funções Callback

Todas as funções de chamada de retorno recebem dois parâmetros de objectos:

| Parâmetro | Tipo                                        |
| --------- | ------------------------------------------- |
| $param1   | [`Objeto HTTPRequest`](#objeto-httprequest) |
| $param2   | [Objeto `Event`](#event-object)             |

Aqui está a sequência de chamadas de retorno:

1. `onHeaders` é sempre chamado uma vez

2. `onData` is called zero or several times (not called if the request does not have a body)

3. Se não ocorreu nenhum erro, `onResponse` é sempre chamado uma vez

4. Se ocorrer um erro, `onError` é executado uma vez (e encerra o pedido)

5. `onTerminate` é sempre executado uma vez

:::info

For the callback functions to be called when you do not use [`wait()`](#wait) (asynchronous call), the process must be a [worker](../Develop/processes.md#worker-processes) created with [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1389.html), NOT [`New process`](https://doc.4d.com/4dv20/help/command/en/page317.html).

:::

#### objecto evento

Um objeto `event` é retornado quando uma [função de retorno de chamada](#callback-functions) é chamada. Contém as seguintes propriedades:

| Propriedade           | Tipo | Descrição                                                                                                                  |
| --------------------- | ---- | -------------------------------------------------------------------------------------------------------------------------- |
| .data | blob | Dados recebidos. É sempre *undefined* excepto no callback `onData`                                         |
| .type | text | Tipo de evento. Possíveis valores: "resposta", "erro", "cabeçalhos", "dados", ou "terminar |

#### authentication-object

An authentication object handles the `options.serverAuthentication` or `options.proxyAuthentication` property. Pode conter as seguintes propriedades:

| Propriedade | Tipo | Descrição                                                                                      | Por padrão |
| ----------- | ---- | ---------------------------------------------------------------------------------------------- | ---------- |
| name        | Text | Nome utilizado para autenticação                                                               | indefinido |
| senha       | Text | Senha utilizada para autenticação                                                              | indefinido |
| method      | Text | Método utilizado para autenticação: "basic", "digest", "auto". | "auto"     |

<!-- END REF -->

<!-- REF #HTTP Parse message.Desc -->

## HTTP Parse message

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R4   | Adicionado |

</details>

<!-- REF #HTTP Parse message.Syntax -->**HTTP Parse message**( *data* : Text ) : Object<br/>**HTTP Parse message**( *data* : Blob ) : Object<!-- END REF -->

<!-- REF #HTTP Parse message.Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                       |
| ---------- | ---------- | :-------------------------: | --------------------------------------------------------------- |
| data       | Text, Blob |              ->             | Dados a serem analisados                                        |
| Resultados | Object     | <- | Objeto, cada propriedade é uma parte dos dados de várias partes |

<!-- END REF -->

#### Descrição

The `HTTP Parse message` command <!-- REF #HTTP Parse message.Summary -->parses a multipart/form-data text or blob (HTTP "response" message) and extracts the content to an object. Each property of the returned object corresponds to a part of the multipart data<!-- END REF -->.

:::info

HTTP em si, é um protocolo de comunicação sem estado. Neste quadro, os clientes iniciam uma comunicação enviando mensagens "request" aos servidores, especificando detalhes como método, alvo, cabeçalhos, conteúdo, etc. Os servidores, respondem com mensagens de "resposta" que incluem os mesmos detalhes. `HTTP Parse message` parses either the "request" or the "response" message into a well-organized object.

:::

#### Exemplo

No exemplo a seguir, analisamos os dados de um arquivo de texto que contém solicitações HTTP.

Aqui está o conteúdo do arquivo:

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

Para analisar o arquivo:

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

<!-- REF #HTTPRequestClass.agent.Desc -->

## .agent

<!-- REF #HTTPRequestClass.agent.Syntax -->**agent** : 4D.HTTPAgent<!-- END REF -->

#### Descrição

The `.agent` property contains <!-- REF #HTTPRequestClass.agent.Summary -->the `agent`object passed in [`options`](#options-parameter) or the global agent object if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.dataType.Desc -->

## .dataType

<!-- REF #HTTPRequestClass.dataType.Syntax -->**dataType** : Text<!-- END REF -->

#### Descrição

The `.dataType` property contains <!-- REF #HTTPRequestClass.dataType.Summary -->the `dataType` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew), "auto" if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.encoding.Desc -->

## .encoding

<!-- REF #HTTPRequestClass.encoding.Syntax -->**encoding** : Text<!-- END REF -->

#### Descrição

The `.encoding` property contains <!-- REF #HTTPRequestClass.encoding.Summary -->the `encoding` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew), "UTF-8" if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.errors.Desc -->

## .errors

<!-- REF #HTTPRequestClass.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Descrição

The `.errors` property contains <!-- REF #HTTPRequestClass.errors.Summary -->the collection of all the errors if at least one error has been triggered<!-- END REF -->.

Aqui está o conteúdo da propriedade `.errors`:

| Propriedade |                                                                                           | Tipo       | Descrição                                            |
| ----------- | ----------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------- |
| errors      |                                                                                           | Collection | pilha de erros 4D em caso de erro                    |
|             | [].errCode            | Number     | Código de erro 4D                                    |
|             | [].message            | Text       | Descrição do erro 4D                                 |
|             | [].componentSignature | Text       | Assinatura da componente interna que devolveu o erro |

<!-- END REF -->

<!-- REF #HTTPRequestClass.headers.Desc -->

## .headers

<!-- REF #HTTPRequestClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Descrição

The `.headers` property contains <!-- REF #HTTPRequestClass.headers.Summary -->the `headers` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. Se foi omitido, contém um objecto vazio.

<!-- END REF -->

<!-- REF #HTTPRequestClass.method.Desc -->

## .method

<!-- REF #HTTPRequestClass.method.Syntax -->**method** : Text<!-- END REF -->

#### Descrição

The `.method` property contains <!-- REF #HTTPRequestClass.method.Summary -->the `method` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. Se foi omitido, contém "GET".

<!-- END REF -->

<!-- REF #HTTPRequestClass.protocol.Desc -->

## .protocol

<!-- REF #HTTPRequestClass.protocol.Syntax -->**protocol** : Text<!-- END REF -->

#### Descrição

The `.protocol` property contains <!-- REF #HTTPRequestClass.protocol.Summary -->the `protocol` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. Se foi omitido ou se "auto" foi utilizado, contém a versão do protocolo utilizado.

<!-- END REF -->

<!-- REF #HTTPRequestClass.response.Desc -->

## .response

<details><summary>História</summary>

| Release | Mudanças                                                                               |
| ------- | -------------------------------------------------------------------------------------- |
| 19 R8   | `.headers` devolve nomes em minúsculas. Nova propriedade `.rawHeaders` |

</details>

<!-- REF #HTTPRequestClass.response.Syntax -->**response** : Object<!-- END REF -->

#### Descrição

The `.response` property contains <!-- REF #HTTPRequestClass.response.Summary -->the response to the request if it has received at least the status code, undefined otherwise<!-- END REF -->.

Um objeto `response` é um objeto não compartilhável. Contém as seguintes propriedades:

| Propriedade                 | Tipo         | Descrição                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .body       | Diferente de | Corpo da resposta. O tipo da mensagem é definido conforme a propriedade [`dataType`](#datatype). Indefinido se o corpo ainda não tiver sido recebido                                                                                                                                                                                  |
| .headers    | Object       | Cabeçalhos da resposta. Os nomes dos cabeçalhos são devolvidos em minúsculas. `<headername>.key` = value (value can be a collection if the same key appears multiple times). Indefinido se os cabeçalhos ainda não tiverem sido recebidos.                                         |
| .status     | Number       | Código de estado da resposta                                                                                                                                                                                                                                                                                                                                          |
| .statusText | Text         | Mensagem que explica o código de estado                                                                                                                                                                                                                                                                                                                               |
| .rawHeaders | Object       | Cabeçalhos da resposta. Os nomes dos cabeçalhos são devolvidos intactos (com o seu caso original). `<headerName>.key` = value (value can be a collection if the same key appears multiple times). Indefinido se os cabeçalhos ainda não tiverem sido recebidos. |

<!-- END REF -->

<!-- REF #HTTPRequestClass.returnResponseBody.Desc -->

## .returnResponseBody

<!-- REF #HTTPRequestClass.returnResponseBody.Syntax -->**returnResponseBody** : Boolean<!-- END REF -->

#### Descrição

The `.returnResponseBody` property contains <!-- REF #HTTPRequestClass.returnResponseBody.Summary -->the `returnResponseBody` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. Se foi omitido, contém True.

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminate().Desc -->

## .terminate()

<!-- REF #HTTPRequestClass.terminate().Syntax -->**.terminate()**<!-- END REF -->

<!-- REF #HTTPRequestClass.terminate().Params -->

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

> Esta função é thread segura.

The `.terminate()` function <!-- REF #HTTPRequestClass.terminate().Summary -->aborts the HTTP request<!-- END REF -->. Desencadeia o evento `onTerminate`.

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminated.Desc -->

## .terminated

<!-- REF #HTTPRequestClass.terminated.Syntax -->**terminated** : Boolean<!-- END REF -->

#### Descrição

The `.terminated` property contains <!-- REF #HTTPRequestClass.terminated.Summary -->True if the request is terminated (after the call to `onTerminate`), false otherwise<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.timeout.Desc -->

## .timeout

<!-- REF #HTTPRequestClass.timeout.Syntax -->**timeout** : Real<!-- END REF -->

#### Descrição

The `.timeout` property contains <!-- REF #HTTPRequestClass.timeout.Summary -->the `timeout` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. Se foi omitido, contém Indefinido.

<!-- END REF -->

<!-- REF #HTTPRequestClass.url.Desc -->

## .url

<!-- REF #HTTPRequestClass.url.Syntax -->**url** : Text<!-- END REF -->

#### Descrição

The `.url` property contains <!-- REF #HTTPRequestClass.url.Summary -->the URL of the HTTP request<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Desc -->

## .wait()

<!-- REF #HTTPRequestClass.wait().Syntax -->**.wait**( { *time* : Real } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Params -->

| Parâmetro  | Tipo                           |                             | Descrição                                           |
| ---------- | ------------------------------ | :-------------------------: | --------------------------------------------------- |
| time       | Real                           |              ->             | Tempo máximo em segundos para esperar pela resposta |
| Resultados | 4D.HTTPRequest | <- | HTTPRequest object                                  |

<!-- END REF -->

#### Descrição

> Esta função é thread segura.

The `wait()` function <!-- REF #HTTPRequestClass.wait().Summary -->waits for the response from the server<!-- END REF -->.

If a *time* parameter is passed, the function will wait at most the defined number of seconds.

Se a resposta do servidor já tiver chegado, a função regressa imediatamente.

During a `.wait()` execution, callback functions are executed, whether from other `HTTPRequest` or [`SystemWorker`](SystemWorkerClass.md) instances, or other [`CALL WORKER`](../commands-legacy/call-worker.md) calls. Você pode sair de um `.wait()` chamando [`terminate()`](#terminate) de um retorno de chamada.

<!-- END REF -->
