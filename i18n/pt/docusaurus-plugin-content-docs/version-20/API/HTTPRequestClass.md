---
id: HTTPRequestClass
title: HTTPRequest
---

A classe `HTTPRequest` permite-lhe tratar [`objectos HTTPRequest`](#httprequest-object) que podem ser utilizados para configurar e enviar pedidos para um servidor HTTP, bem como para processar as respostas do servidor HTTP.

A classe `HTTPRequest` está disponível a partir da loja de classes `4D` . Você cria e envia pedidos HTTP usando a função [4D.HTTPRequest.new()](#4dhttprequestnew) , que retorna um objecto HTTPRequest [``](#httprequest-object).

<details><summary>Histórico</summary>

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

| Release | Mudanças                                                       |
| ------- | -------------------------------------------------------------- |
| 20      | Validação TLS por padrão                                       |
| 18 R6   | Suporte às propriedades *automaticRedirections* e *decodeData* |

</details>

<!-- REF #4D.HTTPRequest.new().Syntax -->**4D.HTTPRequest.new**( *url* : Text { ; *options* : Object } ) : 4D.HTTPRequest<!-- END REF -->


<!-- REF #4D.HTTPRequest.new().Params -->
| Parâmetro  | Tipo           |    | Descrição                                           |
| ---------- | -------------- |:--:| --------------------------------------------------- |
| url        | Text           | -> | URL para onde enviar o pedido                       |
| options    | Object         | -> | Pedir propriedades de configuração                  |
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

Se você omitir a parte do esquema (`http://` ou `https://`), será enviada uma solicitação https.

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

| Propriedade            | Tipo                                            | Descrição                                                                                                                                                                                                                                                                   | Por padrão    |
| ---------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| automaticRedirections  | Parâmetros                                      | Se true, os redirecionamentos serão realizados automaticamente (até 5 redirecionamentos são tratados, a resposta do 6. º redirecionamento é retornada, se houver)                                                                                                           | True          |
| body                   | Diferente de                                    | Corpo do pedido (requerido no caso de `post` ou `put` requests). Pode ser um texto, um blob, ou um objecto. O tipo de conteúdo é determinado a partir do tipo desta propriedade, a menos que seja colocado dentro dos cabeçalhos                                            | indefinido    |
| certificatesFolder     | [Folder](FolderClass.md)                        | Define a pasta de certificados de cliente activos                                                                                                                                                                                                                           | indefinido    |
| dataType               | Text                                            | Tipo de atributo do corpo de resposta. Valores: "texto", "blob", "objecto", ou "auto". Se "auto", o tipo do conteúdo do corpo será deduzido do seu tipo MIME (objecto para JSON, texto para texto, javascript, xml, mensagem http e forma codificada url, ou então um blob) | "auto"        |
| decodeData             | Parâmetros                                      | Se for verdade, os dados recebidos em `onData` callback não são compactados                                                                                                                                                                                                 | False         |
| encoding               | Text                                            | Utilizado apenas em caso de pedidos com um `body` (métodos `post` ou `put`). Codificação do conteúdo do corpo do pedido se for um texto, ignorado se o tipo de conteúdo for colocado dentro dos cabeçalhos                                                                  | "UTF-8"       |
| headers                | Object                                          | Cabeçalhos do pedido. Sintaxe: `headers.key=valor` (*valor* pode ser uma Colecção se a mesma chave tiver de aparecer várias vezes)                                                                                                                                          | Objecto vazio |
| method                 | Text                                            | "POST", "GET", ou outro método                                                                                                                                                                                                                                              | "GET"         |
| minTLSVersion          | Text                                            | Define a versão mínima do TLS: "`TLSv1_0`", "`TLSv1_1`", "`TLSv1_2`", "`TLSv1_3`"                                                                                                                                                                                           | "`TLSv1_2`"   |
| onData                 | [Function](FunctionClass.md)                    | Chamada de retorno quando os dados do corpo são recebidos. Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                | indefinido    |
| onError                | [Function](FunctionClass.md)                    | Chamada de retorno quando ocorre um erro. Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                                 | indefinido    |
| onHeaders              | [Function](FunctionClass.md)                    | Chamada de retorno quando os cabeçalhos são recebidos. Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                    | indefinido    |
| onResponse             | [Function](FunctionClass.md)                    | Chamada de retorno quando uma resposta é recebida. Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                        | indefinido    |
| onTerminate            | [Function](FunctionClass.md)                    | Chamada de retorno quando o pedido estiver terminado. Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                     | indefinido    |
| protocol               | Text                                            | "auto" ou "HTTP1". "auto" significa HTTP1 na implementação actual                                                                                                                                                                                                           | "auto"        |
| proxyAuthentication    | [authentication-object](#authentication-object) | Autenticação por procuração de tratamento de objectos                                                                                                                                                                                                                       | indefinido    |
| serverAuthentication   | [authentication-object](#authentication-object) | Autenticação do servidor de tratamento de objectos                                                                                                                                                                                                                          | indefinido    |
| returnResponseBody     | Parâmetros                                      | Se falso, o corpo de resposta não é devolvido na [`resposta` objecto](#response). Devolve um erro se falso e `onData` é indefinido                                                                                                                                          | True          |
| timeout                | Real                                            | Tempo de espera em segundos. Indefinido = sem timeout                                                                                                                                                                                                                       | Indefinido    |
| validateTLSCertificate | Parâmetros                                      | Se false, 4D não valida o certificado TLS e não retorna um erro se ele for inválido (i.e. expirado, auto-assinado...). Importante: Na implementação actual, a Autoridade de Certificação em si não é verificada.                                                            | True          |


#### Funções Callback

Todas as funções de chamada de retorno recebem dois parâmetros de objectos:

| Parâmetro | Tipo                                        |
| --------- | ------------------------------------------- |
| $param1   | [objeto `HTTPRequest`](#httprequest-object) |
| $param2   | [`Event` objecto](#event-object)            |

Aqui está a sequência de chamadas de retorno:

1. `onHeaders` é sempre chamado uma vez
2. `onData` é chamado zero ou várias vezes (não chamado se o pedido não tiver um corpo)

3. Se não ocorreu nenhum erro, `onResponse` é sempre chamado uma vez
4. Se ocorrer um erro, `onError` é executado uma vez (e encerra o pedido)
5. `onTerminate` é sempre executado uma vez

#### objecto evento

Um evento `` objecto é devolvido quando uma função de retorno de chamada [](#callback-functions) é chamada. Contém as seguintes propriedades:

| Propriedade | Tipo | Descrição                                                                                  |
| ----------- | ---- | ------------------------------------------------------------------------------------------ |
| .data       | blob | Dados recebidos. É sempre *indefinido* excepto no `onData` callback                        |
| .type       | text | Tipo de evento. Possíveis valores: "resposta", "erro", "cabeçalhos", "dados", ou "terminar |

#### authentication-object

Um objecto de autenticação lida com o `options.serverAuthentication` ou `options.proxyAuthentication` propriedade. Pode conter as seguintes propriedades:

| Propriedade | Tipo | Descrição                                                      | Por padrão |
| ----------- | ---- | -------------------------------------------------------------- | ---------- |
| name        | Text | Nome utilizado para autenticação                               | indefinido |
| senha       | Text | Senha utilizada para autenticação                              | indefinido |
| method      | Text | Método utilizado para autenticação: "basic", "digest", "auto". | "auto"     |

<!-- END REF -->

<!-- REF #HTTPRequestClass.dataType.Desc -->
## .dataType

<!-- REF #HTTPRequestClass.dataType.Syntax -->**dataType** : Text<!-- END REF -->

#### Descrição

A propriedade `.dataType` contém <!-- REF #HTTPRequestClass.dataType.Summary -->o `dataType` passou no objecto [`opções`](#options-parameter) ao chamar [new()](#4dhttprequestnew), "auto" se foi omitido<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.encoding.Desc -->
## .encoding

<!-- REF #HTTPRequestClass.encoding.Syntax -->**encoding** : Text<!-- END REF -->

#### Descrição

A propriedade `.encoding` contém <!-- REF #HTTPRequestClass.encoding.Summary -->a codificação `passou nas opções [`](#options-parameter) ao chamar [new()](#4dhttprequestnew), "UTF-8" se foi omitido<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.errors.Desc -->
## .errors

<!-- REF #HTTPRequestClass.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Descrição

A propriedade `.errors` contém <!-- REF #HTTPRequestClass.errors.Summary -->a recolha de todos os erros, se pelo menos um erro tiver sido desencadeado<!-- END REF -->.

Aqui está o conteúdo da propriedade `.errors` :

| Propriedade |                       | Tipo       | Descrição                                            |
| ----------- | --------------------- | ---------- | ---------------------------------------------------- |
| errors      |                       | Collection | pilha de erros 4D em caso de erro                    |
|             | [].errCode            | Number     | Código de erro 4D                                    |
|             | [].message            | Text       | Descrição do erro 4D                                 |
|             | [].componentSignature | Text       | Assinatura da componente interna que devolveu o erro |

<!-- END REF -->

<!-- REF #HTTPRequestClass.headers.Desc -->
## .headers

<!-- REF #HTTPRequestClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Descrição

A propriedade `.headers` contém <!-- REF #HTTPRequestClass.headers.Summary -->os cabeçalhos `` passaram no objecto [`opções`](#options-parameter) ao chamar [new()](#4dhttprequestnew)<!-- END REF -->. Se foi omitido, contém um objecto vazio.

<!-- END REF -->

<!-- REF #HTTPRequestClass.method.Desc -->
## .method

<!-- REF #HTTPRequestClass.method.Syntax -->**method** : Text<!-- END REF -->

#### Descrição

A propriedade `.method` contém <!-- REF #HTTPRequestClass.method.Summary -->o método `` passou no objecto [`opções`](#options-parameter) ao chamar [new()](#4dhttprequestnew)<!-- END REF -->. Se foi omitido, contém "GET".

<!-- END REF -->

<!-- REF #HTTPRequestClass.protocol.Desc -->
## .protocol

<!-- REF #HTTPRequestClass.protocol.Syntax -->**protocol** : Text<!-- END REF -->

#### Descrição


A propriedade `.protocol` contém <!-- REF #HTTPRequestClass.protocol.Summary -->o protocolo `` passou no objecto [`opções`](#options-parameter) ao chamar [new()](#4dhttprequestnew)<!-- END REF -->. Se foi omitido ou se "auto" foi utilizado, contém a versão do protocolo utilizado.


<!-- END REF -->

<!-- REF #HTTPRequestClass.response.Desc -->
## .response

<details><summary>Histórico</summary>

| Release | Mudanças                                                               |
| ------- | ---------------------------------------------------------------------- |
| 19 R8   | `.headers` devolve nomes em minúsculas. Novo propriedade `.rawHeaders` |

</details>

<!-- REF #HTTPRequestClass.response.Syntax -->**response** : Object<!-- END REF -->

#### Descrição

O sítio `.resposta` contém <!-- REF #HTTPRequestClass.response.Summary -->a resposta ao pedido, se tiver recebido pelo menos o código de estatuto, indefinido de outra forma<!-- END REF -->.

Uma `resposta` objecto é um objecto não partilhável. Contém as seguintes propriedades:

| Propriedade | Tipo         | Descrição                                                                                                                                                                                                                                                               |
| ----------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .body       | Diferente de | Corpo da resposta. O tipo da mensagem é definido de acordo com a propriedade [`dataType`](#datatype) . Indefinido se o corpo ainda não tiver sido recebido                                                                                                              |
| .headers    | Object       | Cabeçalhos da resposta. Os nomes dos cabeçalhos são devolvidos em minúsculas. `<headername>.key` = valor (valor pode ser uma colecção se a mesma chave aparecer várias vezes). Indefinido se os cabeçalhos ainda não tiverem sido recebidos.                      |
| .status     | Number       | Código de estado da resposta                                                                                                                                                                                                                                            |
| .statusText | Text         | Mensagem que explica o código de estado                                                                                                                                                                                                                                 |
| .rawHeaders | Object       | Cabeçalhos da resposta. Os nomes dos cabeçalhos são devolvidos intactos (com o seu caso original). `<headerName>.key` = valor (valor pode ser uma colecção se a mesma chave aparecer várias vezes). Indefinido se os cabeçalhos ainda não tiverem sido recebidos. |

<!-- END REF -->

<!-- REF #HTTPRequestClass.returnResponseBody.Desc -->
## .returnResponseBody

<!-- REF #HTTPRequestClass.returnResponseBody.Syntax -->**returnResponseBody** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.returnResponseBody` contém <!-- REF #HTTPRequestClass.returnResponseBody.Summary -->o `returnResponseBody` passado no objeto [`opções`](#options-parameter) ao chamar [new()](#4dhttprequestnew)<!-- END REF -->. Se foi omitido, contém True.

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminate().Desc -->
## .terminate()

<!-- REF #HTTPRequestClass.terminate().Syntax -->**.terminate()**<!-- END REF -->


<!-- REF #HTTPRequestClass.terminate().Params -->
| Parâmetro | Tipo |  | Descrição                                             |
| --------- | ---- |::| ----------------------------------------------------- |
|           |      |  | Não exige nenhum parâmetro|<!-- END REF -->

|

#### Descrição

> Esta função é thread segura.

A função `.terminate()` <!-- REF #HTTPRequestClass.terminate().Summary -->aborta o pedido HTTP<!-- END REF -->. Desencadeia o evento `onTerminate` .

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminated.Desc -->
## .terminated

<!-- REF #HTTPRequestClass.terminated.Syntax -->**terminated** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.terminated` contém <!-- REF #HTTPRequestClass.terminated.Summary -->Verdadeiro se o pedido for terminado (após a chamada para `onTerminate`), falso caso contrário<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.timeout.Desc -->
## .timeout

<!-- REF #HTTPRequestClass.timeout.Syntax -->**timeout** : Real<!-- END REF -->

#### Descrição

A propriedade `.timeout` contém <!-- REF #HTTPRequestClass.timeout.Summary -->o `timeout` passado no objeto [`opções`](#options-parameter) ao chamar [new()](#4dhttprequestnew)<!-- END REF -->. Se foi omitido, contém Indefinido.

<!-- END REF -->

<!-- REF #HTTPRequestClass.url.Desc -->
## .url

<!-- REF #HTTPRequestClass.url.Syntax -->**url** : Text<!-- END REF -->

#### Descrição

A propriedade `.url` contém <!-- REF #HTTPRequestClass.url.Summary -->o URL do pedido HTTP<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Desc -->
## .wait()

<!-- REF #HTTPRequestClass.wait().Syntax -->**.wait**( { *time* : Real } ) : 4D.HTTPRequest<!-- END REF -->


<!-- REF #HTTPRequestClass.wait().Params -->
| Parâmetro  | Tipo           |    | Descrição                                           |
| ---------- | -------------- |:--:| --------------------------------------------------- |
| time       | Real           | -> | Tempo máximo em segundos para esperar pela resposta |
| Resultados | 4D.HTTPRequest | <- | HTTPRequest object|<!-- END REF -->

|

#### Descrição

> Esta função é thread segura.


A função `wait()` <!-- REF #HTTPRequestClass.wait().Summary -->aguarda a resposta do servidor<!-- END REF -->.

Se for passado um parâmetro *tempo* , a função esperará no máximo o número definido de segundos.

Se a resposta do servidor já tiver chegado, a função regressa imediatamente.

During a `.wait()` execution, callback functions are executed, whether from other `HTTPRequest` or [`SystemWorker`](SystemWorkerClass.md) instances, or other `CALL WORKER` calls. Pode sair de um `.wait()` ligando para [`terminate()`](#terminate) a partir de uma chamada de retorno.

<!-- END REF -->
