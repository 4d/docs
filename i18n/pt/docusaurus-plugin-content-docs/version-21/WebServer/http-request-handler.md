---
id: http-request-handler
title: Gestionnaire de requêtes HTTP
---

Par défaut, les requêtes HTTP reçues par le serveur web 4D sont traitées par des [fonctionalités intégrées de traitement](httpRequests.md) ou le [serveur REST](../REST/REST_requests.md).

Toutefois, 4D prend en charge la mise en œuvre de **gestionnaires de requêtes HTTP personnalisés** (*custom HTTP handlers*), vous permettant d'intercepter des requêtes HTTP entrantes spécifiques et de les traiter à l'aide de votre propre code.

Lorsqu'un gestionnaire de requête HTTP personnalisé intercepte une requête, celle-ci est traitée directement et aucune autre fonctionnalité de traitement (par exemple, les méthodes base [On Web authentication](./authentication.md#on-web-authentication) ou [On Web connection](./httpRequests.md#on-web-connection)) n'est appelée.

Les gestionnaires de requêtes HTTP personnalisés répondent à divers besoins, y compris :

- l'utilisation d'une URL dédiée comme fournisseur de ressources ou comme zone de téléchargement de fichiers (pour télécharger ou téléverser divers fichiers),
- la redirection sur des pages spécifiques en fonction d'un contexte (utilisateur authentifié, privilèges accordés...),
- la gestion d'une authentification via oAuth 2.0.

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

Au moment de l'exécution, le premier motif correspondant à l'URL est exécuté, les autres sont ignorés.

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

Cette déclaration de gestionnaire peut être lue ainsi : quand une requête commençant par `/start/` avec un verbe `GET` ou `POST` est reçue par le serveur, la fonction `gettingStarted` du singleton `GeneralHandling` est exécutée.

:::note

Vous devez redémarrer le serveur Web pour que les modifications apportées dans ce fichier soient prises en compte.

:::

## Définition du gestionnaire

Un gestionnaire est défini par :

- un motif d'URL à intercepter
- une fonction et sa classe où le code est implémenté pour traiter le motif d'URL en question
- les verbes avec lesquels l'URL peut être appelée pour déclencher le gestionnaire personnalisé

L'identifiant du gestionnaire est le couple [motif + un verbe parmi la liste des verbes].

### Motifs d'URL

Os padrões de URL podem ser fornecidos como **prefixos** ou usando **expressões regulares**.

- To declare a regular expression pattern, use the "regexPattern" property name in the HTTPHandlers.json file. Regular expressions patterns are handled directly.  
  Ex: `"regexPattern" : "/docs/**/index.html"`

Les propriétés "Pattern" et "regexPattern" ne peuvent pas être utilisées dans la même définition de gestionnaire (dans ce cas, seule la propriété "regexPattern" est prise en compte).

#### Correspondance des motifs

Les motifs d'URL sont déclenchés dans l'ordre défini :

 - le premier motif correspondant est exécuté
 - the following patterns are not executed even if they match the URL

Par conséquent, vous devez appliquer une stratégie précise lorsque vous écrivez vos gestionnaires : les motifs les plus détaillés doivent être écrits avant les motifs plus généraux.

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

Les motifs d'URL correspondant aux fonctions de traitement HTTP intégrées de 4D ne sont pas autorisés dans les gestionnaires HTTP personnalisés. Par exemple, les motifs suivants ne peuvent pas être traités :

- `/4DACTION`
- `/rest`
- `/$lib/renderer`
- `/$shared`

### Classe e método

Vous déclarez le code à exécuter lorsqu'un motif d'URL défini est intercepté à l'aide des propriétés "class" et "method".

- "class": class name without `cs.`, e.g. "UsersHandling" for the `cs.UsersHandling` user class. Deve ser uma classe [**compartilhada**](../Concepts/classes.md#shared-singleton) e [**singleton**](../Concepts/classes.md#singleton-classes).
- "method": class function belonging to the class.

[Veja abaixo](#request-handler-code) para informações sobre o código do manipulador de pedidos.

### Verbs

Vous pouvez utiliser la propriété "verbs" dans la définition du gestionnaire pour déclarer les verbes HTTP pris en charge dans les requêtes entrantes pour ce gestionnaire. Une requête qui utilise un verbe qui n'est pas explicitement autorisé est automatiquement rejetée par le serveur.

Vous pouvez déclarer plusieurs verbes, séparés par une virgule. Les noms de verbes ne sont pas sensibles à la casse.

Ex : `"verbs" : "PUT, POST"`

:::note

No control is done on verb names. Todos os nomes podem ser usados.

:::

Par défaut, si la propriété "verbs" n'est pas utilisée pour un gestionnaire, **tous** les verbes HTTP sont pris en charge dans les requêtes entrantes pour ce gestionnaire (sauf ceux éventuellement utilisés au préalable dans un motif plus détaillé, comme illustré dans l'exemple ci-dessus).

:::note

Le verbe HTTP peut également être évalué [à l'aide de la propriété `.verb` dans le code du gestionnaire de requête](../API/IncomingMessageClass.md#verb) pour être accepté ou rejeté.

:::

## Exemplo

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

- *handle function* in the *GeneralHandling* class
- *manageAccount* na classe *UsersHandling*
- *handleInvoices* na classe \*FinancialHandling
- *handleDocs* na classe *DocsHandling*
- *handleTheInvoice* / *handleDetails* / *handleInvoices* na clase *InvoicesHandling*

Exemples d'URL déclenchant les gestionnaires personnalisés :

`IP:port/info/` com um verbo GET
`IP:port/info/general` com um verbo GET

`IP:port/userAccount/update/` avec un verbe POST
`IP:port/userAccount/update/profile` avec un verbe POST

`IP:port/docs/invoices/past` avec un verbe GET
`IP:port/docs/invoices/today/latest` avec un verbe GET

`IP:port//docs/myPage.html` avec un verbe GET

`IP:port//docs/invoices/` avec un verbe GET, appelle la fonction *handleInvoices* (classe *InvoicesHandling*)
`IP:port//docs/invoices/details/` avec un verbe GET, appelle la fonction *handleDetails* (classe *InvoicesHandling*)
`IP :port//docs/invoices/details/theInvoice/xxxxxx` avec un verbe GET, appelle la fonction *handleTheInvoice* (classe *InvoiceslHandling*)

## Code du gestionnaire de requête

### Configuration des fonctions

Le code du gestionnaire de requêtes HTTP doit être mis en œuvre dans une fonction d'une classe [**partagée**](../Concepts/classes.md#shared-singleton) et [**singleton**](../Concepts/classes.md#singleton-classes).

Si le singleton est manquant ou non partagé, une erreur "Cannot find singleton" est renvoyée par le serveur. Si la classe ou la fonction [définie comme handler](#handler-definition) dans le fichier HTTPHandlers.json n'est pas trouvée, le serveur renvoie l'erreur "Cannot find singleton function".

Request handler functions are not necessarily shared, unless some request handler properties are updated by the functions. Nesse caso, você precisa declarar suas funções com a palavra-chave [`shared`](../Concepts/classes.md#shared-functions).

:::note

Il est **déconseillé** d'exposer les fonctions du gestionnaire de requêtes aux appels REST externes en utilisant les mots-clés [`exposed`](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) ou [`onHTTPGet`](../ORDA/ordaClasses.md#onhttpget-keyword).

:::

### Entrée : une instance de la classe 4D.IncomingMessage

Lorsqu'une requête a été interceptée par le gestionnaire, elle est reçue sur le serveur en tant qu'instance de la classe [4D.IncomingMessage](../API/IncomingMessageClass.md).

Toutes les informations nécessaires concernant la requête sont disponibles dans cet objet, y compris l'URL, le verbe, les en-têtes et, le cas échéant, les paramètres (placés dans l'URL) et le corps de la requête.

Ensuite, le gestionnaire de requête peut utiliser ces informations pour mettre en oeuvre une logique métier appropriée.

### Sortie : une instance de la classe 4D.OutgoingMessage

Le gestionnaire de requête peut renvoyer une instance d'objet de la classe [4D.OutGoingMessage](../API/OutgoingMessageClass.md), c'est-à-dire un contenu web complet prêt à être traité par un navigateur, comme un contenu de fichier.

### Exemplo

La classe [4D.IncomingMessage](../API/IncomingMessageClass.md) fournit des fonctions pour obtenir les [headers](../API/IncomingMessageClass.md#headers) et le [body](../API/IncomingMessageClass.md#gettext) de la requête.

Voici un exemple simple pour télécharger un fichier sur le serveur.

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

L'URL appelée est : http://127.0.0.1:8044/putFile?fileName=testFile

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

[Maîtriser les requêtes HTTP avec les gestionnaires de requêtes 4D](https://blog.4d.com/master-http-requests-with-4d-request-handlers/) (blog post)