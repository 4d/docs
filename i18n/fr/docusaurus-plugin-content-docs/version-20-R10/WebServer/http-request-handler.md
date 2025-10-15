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

## Conditions requises

Les gestionnaires de requêtes HTTP personnalisés sont pris en charge :

- lorsque les [sessions évolutives](./sessions.md#enabling-web-sessions) sont activées,
- avec le serveur Web principal uniquement (les gestionnaires de requêtes HTTP éventuellement définis dans les [serveurs Web des composants](../WebServer/webServerObject.md) sont ignorés).

:::warning

[Par défaut](../ORDA/privileges.md#default-file) pour des raisons de sécurité, l'accès externe au datastore n'est pas autorisé dans 4D. Vous devez configurer les [privilèges ORDA](../ORDA/privileges.md) pour autoriser les requêtes HTTP.

:::

## Fichier HTTPHandlers.json

Vous définissez vos gestionnaires de requêtes HTTP personnalisés dans un fichier de configuration nommé **HTTPHandlers.json** stocké dans le dossier [`Project/Sources`](../Project/architecture.md#sources).

Ce fichier contient tous les motifs d'URL à intercepter, les verbes manipulés et le code à appeler. Les gestionnaires sont fournis sous la forme d'une collection au format JSON.

Au moment de l'exécution, le premier motif (*pattern*) correspondant à l'URL est exécuté, les autres sont ignorés.

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

## Définition du gestionnaire

Un gestionnaire est défini par :

- un motif d'URL à intercepter
- une fonction et sa classe où le code est implémenté pour traiter le motif d'URL en question
- les verbes avec lesquels l'URL peut être appelée pour déclencher le gestionnaire personnalisé

L'identifiant du gestionnaire est le couple [motif + un verbe parmi la liste des verbes].

### Motifs d'URL

Les motifs d'URL peuvent être fournis sous forme de **préfixes** ou en utilisant des **expressions régulières** (*regex*).

- Pour déclarer un motif de préfixe, utilisez le nom de propriété "pattern" dans le fichier HTTPHandlers.json. Les préfixes sont considérés comme des expressions régulières contenant déjà un `/` initial et final.  
  Ex : `"pattern" : "docs"` ou `"pattern" : "docs/invoices"`

- Pour déclarer un motif d'expression régulière, utilisez le nom de la propriété "regexPattern" dans le fichier HTTPHandlers.json. Les motifs d'expressions régulières sont traités directement.
  Ex: `"regexPattern" : "/docs/.+/index\.html"`

Les propriétés "Pattern" et "regexPattern" ne peuvent pas être utilisées dans la même définition de gestionnaire (dans ce cas, seule la propriété "regexPattern" est prise en compte).

#### Correspondance des motifs

Les motifs d'URL sont déclenchés dans l'ordre défini :

- le premier motif correspondant est exécuté
- les motifs suivants ne sont pas exécutés même s'ils correspondent à l'URL

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

#### Motifs non autorisés

Les motifs d'URL correspondant aux fonctions de traitement HTTP intégrées de 4D ne sont pas autorisés dans les gestionnaires HTTP personnalisés. Par exemple, les motifs suivants ne peuvent pas être traités :

- `/4DACTION`
- `/rest`
- `/$lib/renderer`
- `/$shared`

### Class et method

Vous déclarez le code à exécuter lorsqu'un motif d'URL défini est intercepté à l'aide des propriétés "class" et "method".

- "class" : nom de la classe sans `cs.`, par exemple "UsersHandling" pour la classe utilisateur `cs.UsersHandling`. Il doit s'agir d'une classe [**partagée**](../Concepts/classes.md#shared-singleton) et [**singleton**](../Concepts/classes.md#singleton-classes).
- "méthode" : fonction de classe appartenant à la classe.

[Voir ci-dessous](#request-handler-code) pour plus d'informations sur le code du gestionnaire de requête.

### Verbs

Vous pouvez utiliser la propriété "verbs" dans la définition du gestionnaire pour déclarer les verbes HTTP pris en charge dans les requêtes entrantes pour ce gestionnaire. Une requête qui utilise un verbe qui n'est pas explicitement autorisé est automatiquement rejetée par le serveur.

Vous pouvez déclarer plusieurs verbes, séparés par une virgule. Les noms de verbes ne sont pas sensibles à la casse.

Ex : `"verbs" : "PUT, POST"`

:::note

Aucun contrôle n'est effectué sur les noms de verbes. Tous les noms peuvent être utilisés.

:::

Par défaut, si la propriété "verbs" n'est pas utilisée pour un gestionnaire, **tous** les verbes HTTP sont pris en charge dans les requêtes entrantes pour ce gestionnaire (sauf ceux éventuellement utilisés au préalable dans un motif plus détaillé, comme illustré dans l'exemple ci-dessus).

:::note

Le verbe HTTP peut également être évalué [à l'aide de la propriété `.verb` dans le code du gestionnaire de requête](../API/IncomingMessageClass.md#verb) pour être accepté ou rejeté.

:::

## Exemple

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

Exemples d'URL déclenchant les gestionnaires personnalisés :

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

## Code du gestionnaire de requête

### Configuration des fonctions

Le code du gestionnaire de requêtes HTTP doit être mis en œuvre dans une fonction d'une classe [**partagée**](../Concepts/classes.md#shared-singleton) et [**singleton**](../Concepts/classes.md#singleton-classes).

Si le singleton est manquant ou non partagé, une erreur "Cannot find singleton" est renvoyée par le serveur. Si la classe ou la fonction [définie comme handler](#handler-definition) dans le fichier HTTPHandlers.json n'est pas trouvée, le serveur renvoie l'erreur "Cannot find singleton function".

Les fonctions du gestionnaire de requêtes ne sont pas nécessairement partagées, sauf si certaines propriétés du gestionnaire sont modifiées par ces fonctions. Dans ce cas, vous devez déclarer ses fonctions avec le [mot-clé `shared`](../Concepts/classes.md#shared-functions).

:::note

Il est **déconseillé** d'exposer les fonctions du gestionnaire de requêtes aux appels REST externes en utilisant les mots-clés [`exposed`](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) ou [`onHTTPGet`](../ORDA/ordaClasses.md#onhttpget-keyword).

:::

### Entrée : une instance de la classe 4D.IncomingMessage

Lorsqu'une requête a été interceptée par le gestionnaire, elle est reçue sur le serveur en tant qu'instance de la classe [4D.IncomingMessage](../API/IncomingMessageClass.md).

Toutes les informations nécessaires concernant la requête sont disponibles dans cet objet, y compris l'URL, le verbe, les en-têtes et, le cas échéant, les paramètres (placés dans l'URL) et le corps de la requête.

Ensuite, le gestionnaire de requête peut utiliser ces informations pour mettre en oeuvre une logique métier appropriée.

### Sortie : une instance de la classe 4D.OutgoingMessage

Le gestionnaire de requête peut renvoyer une instance d'objet de la classe [4D.OutGoingMessage](../API/OutgoingMessageClass.md), c'est-à-dire un contenu web complet prêt à être traité par un navigateur, comme un contenu de fichier.

### Exemple

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

## Voir également

[Maîtriser les requêtes HTTP avec les gestionnaires de requêtes 4D](https://blog.4d.com/master-http-requests-with-4d-request-handlers/) (blog post)