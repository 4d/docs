---
id: http-request-handler
title: Gestionnaire de requêtes HTTP
---

By default, HTTP requests received by the 4D web server are handled through [built-in processing features](httpRequests.md) or the [REST server](../REST/REST_requests.md). 

In addition, 4D supports the implementation of **custom HTTP Request handlers**, allowing you to intercept specific incoming HTTP requests and process them using your own code. 

When a custom HTTP request handler intercepts a request, it is processed directly and no other processing features (e.g. [On Web authentication](./authentication.md#on-web-authentication) or [On Web connection](./httpRequests.md#on-web-connection) database methods) are called. 

Les gestionnaires de requêtes HTTP personnalisés répondent à divers besoins, y compris :

- l'utilisation d'une URL dédiée comme fournisseur de ressources ou comme zone de téléchargement de fichiers (pour télécharger ou téléverser divers fichiers),
- la redirection sur des pages spécifiques en fonction d'un contexte (utilisateur authentifié, privilèges accordés...),
- la gestion d'une authentification via oAuth 2.0.


## Requirements

Custom HTTP Request handlers are supported in the following context:

- [scalable sessions](./sessions.md#enabling-web-sessions) or [no sessions](../settings/web.md#no-sessions) are enabled,
- a web server run locally by 4D or 4D Server, including those [run by components](./webServerObject.md). 

:::warning

For security reasons, external access to the datastore can be disallowed in 4D. You need to configure the [ORDA privileges](../ORDA/privileges.md) to allow HTTP requests.  

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

Au moment de l'exécution, le premier motif correspondant à l'URL est exécuté, les autres sont ignorés.

Voici un exemple du contenu d'un fichier *HTTPHandlers.json* :

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

Cette déclaration de gestionnaire peut être lue ainsi : quand une requête commençant par `/start/` avec un verbe `GET` ou `POST` est reçue par le serveur, la fonction `gettingStarted` du singleton `GeneralHandling` est exécutée.


:::note

Vous devez redémarrer le serveur Web pour que les modifications apportées dans ce fichier soient prises en compte.

:::


## Handler definition

Un gestionnaire est défini par :

- un motif d'URL à intercepter
- une fonction et sa classe où le code est implémenté pour traiter le motif d'URL en question
- les verbes avec lesquels l'URL peut être appelée pour déclencher le gestionnaire personnalisé

L'identifiant du gestionnaire est le couple [motif + un verbe parmi la liste des verbes].


### URL patterns

URL patterns can be given as **prefixes** or using **regular expressions**. 

- To declare a prefix pattern, use the "pattern" property name in the HTTPHandlers.json file. Prefixes are considered as regular expressions already containing starting and ending `/`.  
Ex: `"pattern" : "docs"` or `"pattern" : "docs/invoices"`

- To declare a regular expression pattern, use the "regexPattern" property name in the HTTPHandlers.json file. Regular expressions patterns are handled directly. 
Ex: `"regexPattern" : "/docs/.+/index\.html"`

"Pattern" and "regexPattern" properties cannot be used in the same handler definition (in this case, only the "regexPattern" property is taken into account). 

Les motifs d'URL sont déclenchés dans l'ordre défini :

- le premier motif correspondant est exécuté
- les motifs suivants ne sont pas exécutés même s'ils correspondent à l'URL

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


#### Forbidden patterns

Les motifs d'URL correspondant aux fonctions de traitement HTTP intégrées de 4D ne sont pas autorisés dans les gestionnaires HTTP personnalisés. Par exemple, les motifs suivants ne peuvent pas être traités :

- `/4DACTION`
- `/rest`
- `/$lib/renderer`
- `/$shared`

### Class et method

Vous déclarez le code à exécuter lorsqu'un motif d'URL défini est intercepté à l'aide des propriétés "class" et "method".

- "class": class name without `cs.`, e.g. "UsersHandling" for the `cs.UsersHandling` user class. It must be a [**shared**](../Concepts/classes.md#shared-singleton) and [**singleton**](../Concepts/classes.md#singleton-classes) class. 
- "method": class function belonging to the class. 

[See below](#request-handler-code) for information about the request handler code. 

### Verbs

You can use the "verbs" property in the handler definition to declare HTTP verbs that are supported in incoming requests for this handler. A request that uses a verb that is not explicitely allowed is automatically rejected by the server. 

You can declare several verbs, separated by a comma. Verb names are not case sensitive. 

Ex : `"verbs" : "PUT, POST"`

:::note

No control is done on verb names. All names can be used.   

:::

By default, if the "verbs" property is not used for a handler, **all** HTTP verbs are supported in incoming requests for this handler (except those possibly used beforehand in a more detailed pattern, as shown in the example above).   

:::note

Le verbe HTTP peut également être évalué [à l'aide de la propriété `.verb` dans le code du gestionnaire de requête](../API/IncomingMessageClass.md#verb) pour être accepté ou rejeté.

:::

## Example

Voici un exemple détaillé de fichier HTTPHandlers.json :

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

Dans cet exemple, vous devez implémenter les fonctions suivantes :

- Fonction *handle* dans la classe *GeneralHandling*
- *manageAccount* dans la classe *UsersHandling*
- *handleInvoices* dans la classe *FinancialHandling*
- *handleDocs* dans la classe *DocsHandling*
- *handleTheInvoice* / *handleDetails* / *handleInvoices* dans la classe *InvoicesHandling*


Examples of URLs triggering the handlers:

`IP:port/info/` avec un verbe GET
`IP:port/info/general` avec un verbe GET

`IP:port/userAccount/update/` avec un verbe POST
`IP:port/userAccount/update/profile` avec un verbe POST

`IP:port/docs/invoices/past` avec un verbe GET
`IP:port/docs/invoices/today/latest` avec un verbe GET

`IP:port//docs/myPage.html` avec un verbe GET

`IP:port//docs/invoices/` avec un verbe GET, appelle la fonction *handleInvoices* (classe *InvoicesHandling*)
`IP:port//docs/invoices/details/` avec un verbe GET, appelle la fonction *handleDetails* (classe *InvoicesHandling*)
`IP :port//docs/invoices/details/theInvoice/xxxxxx` avec un verbe GET, appelle la fonction *handleTheInvoice* (classe *InvoiceslHandling*)


## Request handler code


### Function configuration

The HTTP Request handler code must be implemented in a function of a [**Shared**](../Concepts/classes.md#shared-singleton) [**singleton class**](../Concepts/classes.md#singleton-classes). 

Si le singleton est manquant ou non partagé, une erreur "Cannot find singleton" est renvoyée par le serveur. Si la classe ou la fonction [définie comme handler](#handler-definition) dans le fichier HTTPHandlers.json n'est pas trouvée, le serveur renvoie l'erreur "Cannot find singleton function".

Les fonctions du gestionnaire de requêtes ne sont pas nécessairement partagées, sauf si certaines propriétés du gestionnaire sont modifiées par ces fonctions. Dans ce cas, vous devez déclarer ses fonctions avec le [mot-clé `shared`](../Concepts/classes.md#shared-functions).

:::note

Il est **déconseillé** d'exposer les fonctions du gestionnaire de requêtes aux appels REST externes en utilisant les mots-clés [`exposed`](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) ou [`onHTTPGet`](../ORDA/ordaClasses.md#onhttpget-keyword).

:::


### Input: an instance of the 4D.IncomingMessage class

When a request has been intercepted by the handler, it is received on the server as an instance of the [4D.IncomingMessage class](../API/IncomingMessageClass.md). 

All necessary information about the request are available in this object, including the request url, verb, headers, and, if any, parameters (put in the URL) and body. 
 
Then, the request handler can use this information to trigger appropriate business logic.

### Sortie : une instance de la classe 4D.OutgoingMessage

Le gestionnaire de requête peut renvoyer une instance d'objet de la classe [4D.OutGoingMessage](../API/OutgoingMessageClass.md), c'est-à-dire un contenu web complet prêt à être traité par un navigateur, comme un contenu de fichier.


### Example


La classe [4D.IncomingMessage](../API/IncomingMessageClass.md) fournit des fonctions pour obtenir les [headers](../API/IncomingMessageClass.md#headers) et le [body](../API/IncomingMessageClass.md#gettext) de la requête.

Voici un exemple simple pour télécharger un fichier sur le serveur.

Le fichier **HTTPHandlers.json** :

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

L'URL appelée est : http://127.0.0.1:8044/putFile?fileName=testFile

Le contenu binaire du fichier est placé dans le corps de la requête et un verbe POST est utilisé. Le nom du fichier est fourni en paramètre (*fileName*) dans l'URL. Il est reçu dans l'objet [`urlQuery`](../API/IncomingMessageClass.md#urlquery) de la requête.


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


## See also

[Maîtriser les requêtes HTTP avec les gestionnaires de requêtes 4D](https://blog.4d.com/master-http-requests-with-4d-request-handlers/) (blog post)