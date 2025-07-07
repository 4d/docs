---
id: http-request-handler
title: HTTP Request handler
---

By default, HTTP requests received by the 4D web server are handled through [built-in processing features](httpRequests.md) or the [REST server](../REST/REST_requests.md).

In addition, 4D supports the implementation of **custom HTTP Request handlers**, allowing you to intercept specific incoming HTTP requests and process them using your own code.

Cuando un manejador de peticiones HTTP personalizado intercepta una solicitud, se procesa directamente y no hay otras funcionalidades de procesamiento (por ejemplo, son llamados métodos base [On Web authentication](./authentication.md#on-web-authentication) o [On Web connection](./httpRequests.md#on-web-connection).

Custom HTTP request handlers meet various needs, including:

- using a given URL as a resource provider or a file-uploading box (to download or upload various files),
- redirecting on specific pages according to a context (user authenticated, privileges granted...),
- gestionar una autenticación a través de oAuth 2.0.

## Requisitos

Custom HTTP Request handlers are supported:

- cuando las [sesiones escalables](./sessions.md#enabling-web-sessions) están habilitadas,
- with the main Web Server only (HTTP Request handlers that may have been defined in [Web Servers of components](../WebServer/webServerObject.md) are ignored).

:::warning

[Por defecto](../ORDA/privileges.md#default-file) por razones de seguridad, el acceso externo al datastore no está permitido en 4D. You need to configure the [ORDA privileges](../ORDA/privileges.md) to allow HTTP requests.

:::

## Archivo HTTPHandlers.json

Define sus manejadores de petición HTTP personalizados en un archivo de configuración llamado **HTTPHandlers.json** almacenado en la carpeta [`Project/Sources`](../Project/architecture.md#sources).

This file contains all listened URL patterns, the handled verbs, and the code to be called. Handlers are provided as a collection in JSON format.

At runtime, the first pattern matching the URL is executed, the others are ignored.

Here is an example of a *HTTPHandlers.json* file contents:

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

### Patrones de la URL

URL patterns can be given as **prefixes** or using **regular expressions**.

- To declare a prefix pattern, use the "pattern" property name in the HTTPHandlers.json file. Prefixes are considered as regular expressions already containing starting and ending `/`.\
   Ej: `"pattern": "docs"` o `"pattern": "docs/invoices"`

- To declare a regular expression pattern, use the "regexPattern" property name in the HTTPHandlers.json file. Regular expressions patterns are handled directly.
   Ex: `"regexPattern" : "/docs/.+/index\.html"`

"Pattern" and "regexPattern" properties cannot be used in the same handler definition (in this case, only the "regexPattern" property is taken into account).

#### Pattern matching

URL patterns are triggered in the given order:

- the first matching pattern is executed
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

#### Patrones prohibidos

URL patterns matching 4D built-in HTTP processing features are not allowed in custom HTTP handlers. For example, the following patterns cannot be handled:

- `/4DACTION`
- `/rest`
- `/$lib/renderer`
- `/$shared`

### Clase y método

You declare the code to be executed when a defined URL pattern is intercepted using the "class" and "method" properties.

- "class": class name without `cs.`, e.g. "UsersHandling" for the `cs.UsersHandling` user class. Debe ser una clase [**compartida**](../Concepts/classes.md#shared-singleton) y [**singleton**](../Concepts/classes.md#singleton-classes).
- "method": class function belonging to the class.

[Ver abajo](#request-handler-code) para obtener información sobre el código del gestor de peticiones.

### Verbs

You can use the "verbs" property in the handler definition to declare HTTP verbs that are supported in incoming requests for this handler. A request that uses a verb that is not explicitely allowed is automatically rejected by the server.

You can declare several verbs, separated by a comma. Verb names are not case sensitive.

Ej: `"verbs" : "PUT, POST"`

:::note

No control is done on verb names. Se pueden utilizar todos los nombres.

:::

By default, if the "verbs" property is not used for a handler, **all** HTTP verbs are supported in incoming requests for this handler (except those possibly used beforehand in a more detailed pattern, as shown in the example above).

:::note

El verbo HTTP también puede ser evaluado [utilizando la propiedad `.verb` dentro del código del manejador de peticiones](../API/IncomingMessageClass.md#verb) para ser aceptado o rechazado.

:::

## Ejemplo

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
- *manageAccount* en la clase *UsersHandling*
- *handleInvoices* en la clase *FinancialHandling*
- *handleDocs* en la clase *DocsHandling*
- *handleTheInvoice* / *handleDetails* / *handleInvoices* in the *InvoicesHandling* class

Examples of URLs triggering the handlers:

`IP:port/info/` with a GET verb
`IP:port/info/general` with a GET verb

`IP:port/userAccount/update/` with a POST verb
`IP:port/userAccount/update/profile` with a POST verb

`IP:port/docs/invoices/past` with a GET verb
`IP:port/docs/invoices/today/latest` with a GET verb

`IP:port//docs/myPage.html` with a GET verb

`IP:port//docs/invoices/` with a GET verb, calls *handleInvoices* function (*InvoicesHandling* class)
`IP:port//docs/invoices/details/` with a GET verb, calls *handleDetails* function (*InvoicesHandling* class)
`IP:port//docs/invoices/details/theInvoice/xxxxxx` with a GET verb, calls *handleTheInvoice* function (*InvoiceslHandling* class)

## Código del gestor de peticiones

### Function configuration

The HTTP Request handler code must be implemented in a function of a [**Shared**](../Concepts/classes.md#shared-singleton) [**singleton class**](../Concepts/classes.md#singleton-classes).

If the singleton is missing or not shared, an error "Cannot find singleton" is returned by the server. If the class or the function [defined as handler](#handler-definition) in the HTTPHandlers.json file is not found, an error "Cannot find singleton function" is returned by the server.

Request handler functions are not necessarily shared, unless some request handler properties are updated by the functions. En este caso, necesita declarar sus funciones con la [palabra clave 'shared'](../Concepts/classes.md#shared-functions).

:::note

It is **not recommended** to expose request handler functions to external REST calls using [`exposed`](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) or [`onHTTPGet`](../ORDA/ordaClasses.md#onhttpget-keyword) keywords.

:::

### Input: an instance of the 4D.IncomingMessage class

Cuando una solicitud ha sido interceptada por el manejador, se recibe en el servidor como una instancia de la [clase 4D.IncomingMessage](../API/IncomingMessageClass.md).

All necessary information about the request are available in this object, including the request url, verb, headers, and, if any, parameters (put in the URL) and body.

Then, the request handler can use this information to trigger appropriate business logic.

### Output: an instance of the 4D.OutgoingMessage class

The request handler can return an object instance of the [4D.OutGoingMessage class](../API/OutgoingMessageClass.md), i.e. some full web content ready for a browser to handle, such as a file content.

### Ejemplo

La [clase 4D.IncomingMessage](../API/IncomingMessageClass.md) ofrece funciones para obtener los [encabezados](../API/IncomingMessageClass.md#headers) y el [cuerpo](../API/IncomingMessageClass.md#gettext) de la solicitud.

He aquí un ejemplo sencillo para cargar un archivo en el servidor.

El archivo **HTTPHandlers.json**:

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

The binary content of the file is put in the body of the request and a POST verb is used. El nombre del archivo se da como parámetro (*fileName*) en la URL. Se recibe en el objeto [`urlQuery`](../API/IncomingMessageClass.md#urlquery) en la petición.

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

## Ver también

[Perfect mastery of your back end business logic thanks to HTTP requests handlers](https://blog.4d.com/master-http-requests-with-4d-request-handlers/) (blog post)