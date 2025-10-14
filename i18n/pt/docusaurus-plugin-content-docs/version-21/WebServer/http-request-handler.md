---
id: http-request-handler
title: HTTP Request handler
---

By default, HTTP requests received by the 4D web server are handled through [built-in processing features](httpRequests.md) or the [REST server](../REST/REST_requests.md).

In addition, 4D supports the implementation of **custom HTTP Request handlers**, allowing you to intercept specific incoming HTTP requests and process them using your own code.

When a custom HTTP request handler intercepts a request, it is processed directly and no other processing features (e.g. [On Web authentication](./authentication.md#on-web-authentication) or [On Web connection](./httpRequests.md#on-web-connection) database methods) are called.

Custom HTTP request handlers meet various needs, including:

 - using a given URL as a resource provider or a file-uploading box (to download or upload various files),
 - redirecting on specific pages according to a context (user authenticated, privileges granted...),
 - handle an authentication via oAuth 2.0.

## Requisitos

Custom HTTP Request handlers are supported in the following context:

- [scalable sessions](./sessions.md#enabling-web-sessions) or [no sessions](../settings/web.md#no-sessions) are enabled,
- a web server run locally by 4D or 4D Server, including those [run by components](./webServerObject.md).

:::warning

For security reasons, external access to the datastore can be disallowed in 4D. Você precisa configurar os [privilégios ORDA](../ORDA/privileges.md) para permitir solicitações HTTP.

:::

## How to set handlers

You can declare HTTP Request handlers:

- in a configuration file named **HTTPHandlers.json** stored in the [`Project/Sources`](../Project/architecture.md#sources) folder of the project. HTTP Request handlers are loaded and applied in the main Web server once it is started.
- using a [`.handlers`](../API/WebServerClass.md#handlers) property set in the *settings* parameter of the [start()](../API/WebServerClass.md#start) function, for any web server object:

```4d
WEB Server.start($settings.handlers) //set rules at web server startup
```

If both a **HTTPHandlers.json** file and a call to the [`WEB Server`](../commands/web-server.md) command with a valid `$settings.handlers` are used, the `WEB Server` command has priority.

The json file (or the object in the *settings* parameter) contains all listened URL patterns, the handled verbs, and the code to be called.

Handlers are provided as a collection.

At runtime, the first pattern matching the URL is executed, the others are ignored.

Aqui está um exemplo do conteúdo de um arquivo *HTTPHandlers.json*:

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

This handler declaration can be read as: when any request starting by `/start/` with a `GET` or `POST` verb is received by the server, the `gettingStarted` function of the `GeneralHandling` singleton is executed.

:::note

You must restart the Web server so that modifications made in this file are taken into account.

:::

## Handler definition

A handler is defined by:

 - a listened URL pattern
 - a function and its class where the code is implemented to handle the listened URL pattern
 - the verbs with which the URL can be called to trigger the handler

The handler identifier is the couple [pattern + a verb among the verbs list].

### URL patterns

Os padrões de URL podem ser fornecidos como **prefixos** ou usando **expressões regulares**.

- To declare a regular expression pattern, use the "regexPattern" property name in the HTTPHandlers.json file. Regular expressions patterns are handled directly.  
  Ex: `"regexPattern" : "/docs/**/index.html"`

- To declare a prefix pattern, use the "pattern" property name in the HTTPHandlers.json file. Regular expressions patterns are handled directly.
  Ex: `"regexPattern" : "/docs/.+/index\.html"`

"Pattern" and "regexPattern" properties cannot be used in the same handler definition (in this case, only the "regexPattern" property is taken into account).

#### Pattern matching

Les modèles d'URL sont déclenchés dans l'ordre indiqué :

 - le premier motif correspondant est exécuté
 - the following patterns are not executed even if they match the URL

As a consequence, you need to apply a accurate strategy when writing your handlers: the most detailed patterns must be written before the more general patterns.

```json
[
    {
        "class": "InvoiceslHandling",
        "method": "handleTheInvoice",
        "regexPattern": "/docs/invoices/details/theInvoice",
        "verbs": "GET"
    },
    {
        "class": "InvoiceslHandling",
        "method": "handleUnauthorizedVerbs",
        "regexPattern": "/docs/invoices/details/theInvoice",
        "comment": "This handler is triggered for all verbs except GET (handled above)"
    },
    {
        "class": "DocsHandling",
        "method": "handleDocs",
        "regexPattern": "/docs",
        "comment": "This handler is triggered for all the verbs"
    }
]

```

#### Padrões proibidos

URL patterns matching 4D built-in HTTP processing features are not allowed in custom HTTP handlers. For example, the following patterns cannot be handled:

 - `/4DACTION`
 - `/rest`
 - `/$lib/renderer`
 - `/$shared`

### Classe e método

You declare the code to be executed when a defined URL pattern is intercepted using the "class" and "method" properties.

 - "class": class name without `cs.`, e.g. "UsersHandling" for the `cs.UsersHandling` user class. Deve ser uma classe [**compartilhada**](../Concepts/classes.md#shared-singleton) e [**singleton**](../Concepts/classes.md#singleton-classes).
 - "method": class function belonging to the class.

[Veja abaixo](#request-handler-code) para informações sobre o código do manipulador de pedidos.

### Verbs

You can use the "verbs" property in the handler definition to declare HTTP verbs that are supported in incoming requests for this handler. A request that uses a verb that is not explicitely allowed is automatically rejected by the server.

You can declare several verbs, separated by a comma. Verb names are not case sensitive.

Ex: `"verbs" : "PUT, POST"`

:::note

No control is done on verb names. Todos os nomes podem ser usados.

:::

By default, if the "verbs" property is not used for a handler, **all** HTTP verbs are supported in incoming requests for this handler (except those possibly used beforehand in a more detailed pattern, as shown in the example above).

:::note

The HTTP verb can also be evaluated [using the `.verb` property within the request handler code](../API/IncomingMessageClass.md#verb) to be accepted or rejected.

:::

## Exemplo

Here is a detailed example of a HTTPHandlers.json file:

```json

[
   {
        "class": "GeneralHandling",
        "method": "handle",
        "pattern": "info", //URL prefix
        "verbs": "GET"
    }, 
    {
        "class": "UsersHandling",
        "method": "manageAccount",
        "pattern": "userAccount/update",   //URL prefix
        "verbs": "PUT,POST"
    }, 
    {
        "class": "FinancialHandling",
        "method": "handleInvoices",
        "regexPattern": "/docs/invoices/(past|today)", //URL prefix given as a regex
        "verbs": "GET"
    },
    {
        "class": "DocsHandling",
        "method": "handleDocs",
        "regexPattern": "/docs/myPage.html",  //URL prefix given as a regex
        "verbs": "GET"
    },
    {
        "class": "InvoicesHandling",
        "method": "handleTheInvoice",
        "pattern": "docs/invoices/details/theInvoice", // The most specific URL first
        "verbs": "GET,POST"
    },
    {
        "class": "InvoicesHandling",
        "method": "handleDetails",
        "pattern": "docs/invoices/details",    // The general URLs after
        "verbs": "GET"
    },
    {
        "class": "InvoicesHandling",
        "method": "handleInvoices",   // The general URLs after
        "pattern": "docs/invoices",
        "verbs": "GET"
    }
]

```

In this example, you must implement the following functions:

 - *handle function* in the *GeneralHandling* class
 - *manageAccount* na classe *UsersHandling*
 - *handleInvoices* na classe \*FinancialHandling
 - *handleDocs* na classe *DocsHandling*
 - *handleTheInvoice* / *handleDetails* / *handleInvoices* na clase *InvoicesHandling*

Examples of URLs triggering the handlers:

`IP:port/info/` com um verbo GET
`IP:port/info/general` com um verbo GET

`IP:port/userAccount/update/` with a POST verb
`IP:port/userAccount/update/profile` with a POST verb

`IP:port/docs/invoices/past` with a GET verb
`IP:port/docs/invoices/today/latest` with a GET verb

`IP:port//docs/myPage.html` with a GET verb

`IP:port//docs/invoices/` with a GET verb, calls *handleInvoices* function (*InvoicesHandling* class)
`IP:port//docs/invoices/details/` with a GET verb, calls *handleDetails* function (*InvoicesHandling* class)
`IP:port//docs/invoices/details/theInvoice/xxxxxx` with a GET verb, calls *handleTheInvoice* function (*InvoiceslHandling* class)

## Request handler code

### Configuration des fonctions

The HTTP Request handler code must be implemented in a function of a [**Shared**](../Concepts/classes.md#shared-singleton) [**singleton class**](../Concepts/classes.md#singleton-classes).

If the singleton is missing or not shared, an error "Cannot find singleton" is returned by the server. If the class or the function [defined as handler](#handler-definition) in the HTTPHandlers.json file is not found, an error "Cannot find singleton function" is returned by the server.

Request handler functions are not necessarily shared, unless some request handler properties are updated by the functions. Nesse caso, você precisa declarar suas funções com a palavra-chave [`shared`](../Concepts/classes.md#shared-functions).

:::note

It is **not recommended** to expose request handler functions to external REST calls using [`exposed`](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) or [`onHTTPGet`](../ORDA/ordaClasses.md#onhttpget-keyword) keywords.

:::

### Input: an instance of the 4D.IncomingMessage class

When a request has been intercepted by the handler, it is received on the server as an instance of the [4D.IncomingMessage class](../API/IncomingMessageClass.md).

All necessary information about the request are available in this object, including the request url, verb, headers, and, if any, parameters (put in the URL) and body.

Then, the request handler can use this information to trigger appropriate business logic.

### Output: an instance of the 4D.OutgoingMessage class

The request handler can return an object instance of the [4D.OutGoingMessage class](../API/OutgoingMessageClass.md), i.e. some full web content ready for a browser to handle, such as a file content.

### Exemplo

The [4D.IncomingMessage class](../API/IncomingMessageClass.md) provides functions to get the [headers](../API/IncomingMessageClass.md#headers) and the [body](../API/IncomingMessageClass.md#gettext) of the request.

Here is a simple example to upload a file on the server.

O arquivo **HTTPHandlers.json**:

```json
[
    {
        "class": "UploadFile",
        "method": "uploadFile",
        "regexPattern": "/putFile",
        "verbs": "POST"
    }
]
```

The called URL is: http://127.0.0.1:8044/putFile?fileName=testFile

The binary content of the file is put in the body of the request and a POST verb is used. O nome do arquivo é fornecido como parâmetro (*fileName*) no URL. Ele é recebido no objeto [`urlQuery`](../API/IncomingMessageClass.md#urlquery) na solicitação.

```4d
    //UploadFile class

shared singleton Class constructor()
	
	
Function uploadFile($request : 4D.IncomingMessage) : 4D.OutgoingMessage
	
	var $response:=4D.OutgoingMessage.new()
	
	var $body:="Not supported file"
	var $fileName; $fileType : Text
	var $file : 4D.File
	var $picture : Picture
	var $created : Boolean
	
	$fileName:=$request.urlQuery.fileName
	$fileType:=$request.getHeader("Content-Type")
	
	Case of 
		: ($fileType="application/pdf")
			$file:=File("/PACKAGE/Files/"+$fileName+".pdf")
			$created:=$file.create()
			$file.setContent($request.getBlob())
			$body:="Upload OK - File size: "+String($file.size)
			
		: ($fileType="image/jpeg")
			$file:=File("/PACKAGE/Files/"+$fileName+".jpg")
			$picture:=$request.getPicture()
			WRITE PICTURE FILE($file.platformPath; $picture)
			$body:="Upload OK - Image size: "+String($file.size)
			
	End case 
	
	$response.setBody($body)
	$response.setHeader("Content-Type"; "text/plain")
	
	return $response

```

## Veja também

[Perfect mastery of your back end business logic thanks to HTTP requests handlers](https://blog.4d.com/master-http-requests-with-4d-request-handlers/) (blog post)