---
id: IncomingMessageClass
title: IncomingMessage
---

The `4D.IncomingMessage` class allows you to handle the object received by a custom [**HTTP request handler**](../WebServer/http-request-handler.md). HTTP requests and their properties are automatically received as an instance of the `4D.IncomingMessage` class. Parameters given directly in the request with GET verb are handled by the [`.urlQuery`](#urlquery) property, while parameters passed in the body of the request are available through functions such as [`.getBlob()`](#getblob) or [`getText()`](#gettext).

The HTTP request handler can return any value (or nothing). Geralmente ele retorna uma instância da classe [`4D.OutgoingMessage`](OutgoingMessageClass.md).

All properties of this class are read-only. They are automatically filled by the request handler.

<details><summary>História</summary>

| Release | Mudanças          |
| ------- | ----------------- |
| 20 R8   | Classe adicionada |

</details>

### Exemplo

O seguinte arquivo [**HTTPHandlers.json**](../WebServer/http-request-handler.md) foi definido:

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

The `http://127.0.0.1/start/example?param=demo&name=4D` request is run with a `GET` verb in a browser. Ele é tratado pela função *gettingStarted* da seguinte classe singleton *GeneralHandling*:

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

A solicitação é recebida no servidor como *$request*, uma instância de objeto da classe `4D.IncomingMessage`.

Aqui está a resposta:

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

### Objeto IncomingMessage

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
| [<!-- INCLUDE #IncomingMessageClass.urlPath.Syntax -->](#urlpath)<br/><!-- INCLUDE #IncomingMessageClass.urlPath.Summary -->              |
| [<!-- INCLUDE #IncomingMessageClass.urlQuery.Syntax -->](#urlquery)<br/><!-- INCLUDE #IncomingMessageClass.urlQuery.Summary -->           |
| [<!-- INCLUDE #IncomingMessageClass.verb.Syntax -->](#verb)<br/><!-- INCLUDE #IncomingMessageClass.verb.Summary -->                       |

:::note

Um objeto 4D.IncomingMessage é um objeto [não compartilhável](../Concepts/shared.md).

:::

<!-- REF #IncomingMessageClass.getBlob().Desc -->

## .getBlob()

<!-- REF #IncomingMessageClass.getBlob().Syntax -->**.getBlob**() : Blob<!-- END REF -->

<!-- REF #IncomingMessageClass.getBlob().Params -->

| Parâmetro  | Tipo |                             | Descrição                     |
| ---------- | ---- | --------------------------- | ----------------------------- |
| Resultados | Blob | <- | Body of the request as a Blob |

<!-- END REF -->

#### Descrição

A função `.getBlob()` <!-- REF #IncomingMessageClass.getBlob().Summary -->retorna o corpo da solicitação como um Blob<!-- END REF -->.

If the body has not been given as a binary content, the function tries to convert the value but it can give unexpected results.

<!-- END REF -->

<!-- REF #IncomingMessageClass.getHeader().Desc -->

## .getHeader()

<!-- REF #IncomingMessageClass.getHeader().Syntax -->**.getHeader**( *key* : Text ) : Text<!-- END REF -->

<!-- REF #IncomingMessageClass.getHeader().Params -->

| Parâmetro  | Tipo |                             | Descrição                         |
| ---------- | ---- | --------------------------- | --------------------------------- |
| \|         | Text | ->                          | Propriedade de cabeçalho a obter  |
| Resultados | Text | <- | Valor da propriedade do cabeçalho |

<!-- END REF -->

#### Descrição

A função `.getHeader()` <!-- REF #IncomingMessageClass.getHeader().Summary -->retorna o valor do cabeçalho *key*<!-- END REF -->.

:::note

O parâmetro *key* não diferencia maiúsculas de minúsculas.

:::

#### Exemplo

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

| Parâmetro  | Tipo         |                             | Descrição                                  |
| ---------- | ------------ | --------------------------- | ------------------------------------------ |
| Resultados | Diferente de | <- | JSON resolution of the body of the request |

<!-- END REF -->

#### Descrição

A função `.getJSON()` <!-- REF #IncomingMessageClass.getJSON().Summary -->retorna o corpo da solicitação como uma resolução JSON<!-- END REF -->.

If the body has not been given as JSON valid content, an error is raised.

<!-- END REF -->

<!-- REF #IncomingMessageClass.getPicture().Desc -->

## .getPicture()

<!-- REF #IncomingMessageClass.getPicture().Syntax -->**.getPicture**() : Picture<!-- END REF -->

<!-- REF #IncomingMessageClass.getPicture().Params -->

| Parâmetro  | Tipo   |                             | Descrição                      |
| ---------- | ------ | --------------------------- | ------------------------------ |
| Resultados | Imagem | <- | Body of the request as picture |

<!-- END REF -->

#### Descrição

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

| Parâmetro  | Tipo |                             | Descrição                       |
| ---------- | ---- | --------------------------- | ------------------------------- |
| Resultados | Text | <- | Corpo da solicitação como texto |

<!-- END REF -->

#### Descrição

A função `.getText()` <!-- REF #IncomingMessageClass.getText().Summary -->retorna o corpo da solicitação como valor de texto<!-- END REF -->.

If the body has not been given as a string value, the function tries to convert the value but it can give unexpected results.

<!-- END REF -->

<!-- REF #IncomingMessageClass.headers.Desc -->

## .headers

<!-- REF #IncomingMessageClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Descrição

A propriedade `.headers` contém <!-- REF #IncomingMessageClass.headers.Summary --> os cabeçalhos atuais da mensagem recebida como pares chave/valor (strings)<!-- END REF -->.

A propriedade `.headers` é somente leitura.

Nomes de cabeçalho (chaves) são menores. Observe que os nomes dos cabeçalhos diferenciam maiúsculas de minúsculas.

<!-- END REF -->

<!-- REF #IncomingMessageClass.url.Desc -->

## .url

<!-- REF #IncomingMessageClass.url.Syntax -->**url** : Text<!-- END REF -->

#### Descrição

A propriedade `.url` contém <!-- REF #IncomingMessageClass.url.Summary -->a URL da solicitação sem a parte *IP:port* e como um string<!-- END REF -->.

For example, if the request is addressed to: "http://127.0.0.1:80/docs/invoices/today", the `.url` property is "/docs/invoices/today".

A propriedade `.url` é somente leitura.

:::note

A parte "host" do pedido (*IP:port*) é fornecida pelo [cabeçalho `host`](#headers).

:::

<!-- END REF -->

<!-- REF #IncomingMessageClass.urlPath.Desc -->

## .urlPath

<!-- REF #IncomingMessageClass.urlPath.Syntax -->**urlPath** : Collection<!-- END REF -->

#### Descrição

The `.urlPath` property contains <!-- REF #IncomingMessageClass.urlPath.Summary -->the URL of the request without the *IP:port* part and as a collection of strings<!-- END REF -->.

For example, if the request is addressed to: "http://127.0.0.1:80/docs/invoices/today", the `.urlPath` property is ["docs", "invoices" ,"today"].

A propriedade `.urlPath` é somente leitura.

<!-- END REF -->

<!-- REF #IncomingMessageClass.urlQuery.Desc -->

## .urlQuery

<!-- REF #IncomingMessageClass.urlQuery.Syntax -->**urlQuery** : Object<!-- END REF -->

#### Descrição

A propriedade `.urlQuery` contém <!-- REF #IncomingMessageClass.urlQuery.Summary -->os parâmetros da solicitação quando eles são fornecidos no URL como pares de chave/valor<!-- END REF -->.

A propriedade `.urlQuery` é somente leitura.

Os parâmetros podem ser passados no URL das solicitações **diretamente** ou **como conteúdo JSON**.

#### Direct parameters

Exemplo: `http://127.0.0.1:8044/minhaCall?firstname=Marie&id=2&isWoman=true`

In this case, parameters are received as stringified values in the `urlQuery` property: `urlQuery = {"firstname":"Marie" ,"id":"2" ,"isWoman":"true"}`

#### Parâmetros conteúdo JSON

Example: `http://127.0.0.1:8044/myCall/?myparams='[{"firstname": "Marie","isWoman": true,"id": 3}]'`.

Parameters are passed in JSON format and enclosed within a collection.

Nesse caso, os parâmetros são recebidos como texto JSON na propriedade `urlQuery` e podem ser analisados usando [`JSON Parse`](../commands-legacy/json-parse.md).

```4d
//urlQuery.myparams: "[{"firstname": "Marie","isWoman": true,"id": 3}]"
$test:=Value type(JSON Parse($r.urlQuery.myparams))=Is collection) //true
```

Special characters such as simple quotes or carriage returns must be escaped.

Exemple: `http://127.0.0.1:8044/syntax/?mdcode=%60%60%604d`

```4d
//urlQuery.mdcode = ```4d
$test:=Length($r.urlQuery.mdcode) //5
```

:::note

Parameters given in the body of the request using POST or PUT verbs are handled through dedicated functions: [`getText()`](#gettext), [`getPicture()`](#getpicture), [`getBlob()`](#getblob), [`getJSON()`](#getjson).

:::

<!-- END REF -->

<!-- REF #IncomingMessageClass.verb.Desc -->

## .verb

<!-- REF #IncomingMessageClass.verb.Syntax -->**verb** : Text<!-- END REF -->

#### Descrição

A propriedade `.verb` contém <!-- REF #IncomingMessageClass.verb.Summary -->o verbo usado pelo pedido<!-- END REF -->.

HTTP and HTTPS request verbs include for example "get", "post", "put", etc.

A propriedade `.verb` é somente leitura.

<!-- END REF -->

