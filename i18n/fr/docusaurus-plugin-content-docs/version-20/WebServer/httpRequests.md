---
id: httpRequests
title: Traitement des requêtes HTTP
---

Le serveur web 4D offre plusieurs fonctionnalités pour gérer les requêtes HTTP :

- the `On Web Connection` database method, a router for your web application,
- the `/4DACTION` URL to call server-side code
- `WEB GET VARIABLES` to get values from HTML objects sent to the server
- other commands such as `WEB GET HTTP BODY`, `WEB GET HTTP HEADER`, or `WEB GET BODY PART` allow to customize the request processing, including cookies.
- the *COMPILER_WEB* project method, to declare your variables.


## On Web Connection

The `On Web Connection` database method can be used as the entry point for the 4D Web server.

### Appels des méthodes base

The `On Web Connection` database method is automatically called when the server receives any URL that is not a path to an existing page on the server. La méthode base est appelée avec l'URL.

For example, the URL "*a/b/c*" will call the database method, but "*a/b/c.html*" will not call the database method if the page "c.html" exists in the "a/b" subfolder of the [WebFolder](webServerConfig.md#root-folder).

> The request should have previously been accepted by the [`On Web Authentication`](authentication.md#on-web-authentication) database method (if it exists) and the web server must be launched.

### Syntaxe

**On Web Connection**( *$1* : Text ; *$2* : Text ; *$3* : Text ; *$4* : Text ; *$5* : Text ; *$6* : Text )

| Paramètres | Type |    | Description                                              |
| ---------- | ---- |:--:| -------------------------------------------------------- |
| $1         | Text | <- | Variable URL                                             |
| $2         | Text | <- | En-têtes HTTP + Corps HTTP (jusqu'à une limite de 32 ko) |
| $3         | Text | <- | Adresse IP du client web (navigateur)                    |
| $4         | Text | <- | Adresse IP du serveur                                    |
| $5         | Text | <- | Nom d'utilisateur                                        |
| $6         | Text | <- | Mot de passe                                             |


Vous devez déclarer ces paramètres de la manière suivante :

```4d
//On Web Connection
 
 C_TEXT($1;$2;$3;$4;$5;$6)
 
//Code de la méthode base
```

Alternativement, vous pouvez utiliser la syntaxe [paramètres nommés](Concepts/parameters.md#named-parameters) :

```4d
// On Web Connection database method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text)

```


> Calling a 4D command that displays an interface element (`DIALOG`, `ALERT`, etc.) is not allowed and ends the method processing.


### $1 - URL extra data

Le premier paramètre ($1) est l'URL saisie par les utilisateurs dans la barre d'adresse de leur navigateur web, sans l'adresse du serveur.

Prenons une connexion intranet comme exemple. Supposons que l'adresse IP de votre machine serveur Web 4D est 123.4.567.89. Le tableau suivant montre les valeurs de $1 en fonction de l'URL saisie dans le navigateur Web :

| URL entrée dans le navigateur web    | Valeur du paramètre $1   |
| ------------------------------------ | ------------------------ |
| 123.4.567.89                         | /                        |
| http://123.45.67.89                  | /                        |
| 123.4.567.89/Customers               | /Customers               |
| http://123.45.67.89/Customers/Add    | /Customers/Add           |
| 123.4.567.89/Do_This/If_OK/Do_That | /Do_This/If_OK/Do_That |

Notez que vous êtes libre d'utiliser ce paramètre à votre convenance. 4D ignore simplement la valeur passée au-delà de la partie hôte de l'URL. For example, you can establish a convention where the value "*/Customers/Add*" means “go directly to add a new record in the `[Customers]` table.” By supplying the web users with a list of possible values and/or default bookmarks, you can provide shortcuts to different parts of your application. En proposant aux utilisateurs web une liste de valeurs possibles et/ou des signets par défaut, vous pouvez leur fournir des raccourcis vers différentes parties de votre application. De cette façon, les utilisateurs web peuvent accéder rapidement aux ressources de votre site web sans passer par le chemin de navigation complet à chaque nouvelle connexion.


### $2 - En-tête (header) et corps (body) de la requête HTTP

Le deuxième paramètre ($2) est l'en-tête (header) et le corps (body) de la requête HTTP envoyée par le navigateur web. Note that this information is passed to your `On Web Connection` database method "as is". Son contenu variera en fonction de la nature du navigateur web qui tente la connexion.

Si votre application utilise ces informations, il vous appartient d'analyser l'en-tête et le corps. Vous pouvez utiliser les commandes `WEB GET HTTP HEADER` et `WEB GET HTTP BODY`.
> Pour des raisons de performance, la taille des données passant par le paramètre $2 ne doit pas dépasser 32 Ko. Au-delà de cette taille, ils sont tronqués par le serveur HTTP 4D.


### $3 - Adresse IP du client Web

Le paramètre $3 reçoit l'adresse IP de la machine du navigateur. Cette information peut vous permettre de distinguer entre les connexions intranet et internet.
> 4D renvoie les adresses IPv4 dans un format hybride IPv6/IPv4 écrit avec un préfixe de 96 bits, par exemple ::ffff:192.168.2.34 pour l'adresse IPv4 192.168.2.34. Pour plus d'informations, reportez-vous à la section [Prise en charge d'IPv6](webServerConfig.md#about-ipv6-support).

### $4 - Adresse IP du serveur

Le paramètre `$4` reçoit l'adresse IP utilisée pour appeler le serveur web 4D. 4D prend en charge le multi-homing, ce qui vous permet d'exploiter des machines avec plus d'une adresse IP. Pour plus d'informations, veuillez consulter la [Page Configuration](webServerConfig.html#ip-address-to-listen).

### $5 et $6 - Nom d'utilisateur et mot de passe

The $5 and $6 parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser, if applicable (see the [authentication page](authentication.md)).
> Si le nom d'utilisateur envoyé par le navigateur existe dans 4D, le paramètre $6 (le mot de passe de l'utilisateur) n'est pas renvoyé pour des raisons de sécurité.




## /4DACTION

***/4DACTION/***MethodName***<br/> **/4DACTION/******MethodName/Param*

| Paramètres | Type |    | Description                                  |
| ---------- | ---- |:--:| -------------------------------------------- |
| MethodName | Text | -> | Nom de la méthode projet 4D à exécuter       |
| Param      | Text | -> | Paramètre texte à passer à la méthode projet |

**Usage:** URL or Form action.

This URL allows you to call the *MethodName* 4D project method with an optional *Param* text parameter. The method will receive this parameter in *$1*.

- The 4D project method must have been [allowed for web requests](allowProject.md): the “Available through 4D tags and URLs (4DACTION...)” attribute value must have been checked in the properties of the method. Si l'attribut n'est pas coché, la requête web est rejetée.
- When 4D receives a `/4DACTION/MethodName/Param` request, the `On Web Authentication` database method (if it exists) is called.

`4DACTION/` can be associated with a URL in a static Web page:

```html
<A HREF="/4DACTION/MyMethod/hello">Do Something</A>
```

The `MyMethod` project method should generally return a "reply" (sending of an HTML page using `WEB SEND FILE` or `WEB SEND TEXT`, etc.). Assurez-vous de rendre le traitement aussi court que possible afin de ne pas bloquer le navigateur.

> A method called by `/4DACTION` must not call interface elements (`DIALOG`, `ALERT`, etc.).

#### Exemple

This example describes the association of the `/4DACTION` URL with an HTML picture object in order to dynamically display a picture in the page. Vous insérez les instructions suivantes dans une page HTML statique :

```html
<IMG SRC="/4DACTION/getPhoto/smith">
```

The `getPhoto` method is as follows:

```4d
C_TEXT($1) // Ce paramètre doit toujours être déclaré
var $path : Text
var $PictVar : Picture
var $BlobVar : Blob

// trouver l'image dans le dossier Images dans le dossier Resources 
$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+$1+".psd"

READ PICTURE FILE($path;$PictVar) // mettre l'image dans la variable image
PICTURE TO BLOB($PictVar;$BLOB;".png") // convertir l'image au format ".png"
WEB SEND BLOB($BLOB;"image/png")
```

### 4DACTION pour poster des formulaires

Le serveur Web 4D vous permet également d'utiliser des formulaires "postés", qui sont des pages HTML statiques envoyant des données au serveur Web, et de récupérer facilement toutes les valeurs. Le type POST doit leur être associé et l'action du formulaire doit impérativement commencer par /4DACTION/NomDeLaMéthode.

Il existe deux méthodes pour soumettre un formulaire (toutes deux pouvant être utilisées avec 4D) :
- POST, généralement utilisée pour envoyer des données au serveur Web,
- GET, généralement utilisée pour récupérer des données du serveur Web.

> When the Web server receives a posted form, it calls the `On Web Authentication` database method (if it exists).

In the called method, you must call the `WEB GET VARIABLES` command in order to [retrieve the names and values](#getting-values-from-the-requests) of all the fields included in an HTML page submitted to the server.

Exemple pour définir l'action d'un formulaire :

```html
<FORM ACTION="/4DACTION/MethodName" METHOD=POST>
```

#### Exemple

Dans une application Web, nous aimerions que les navigateurs puissent rechercher parmi les enregistrements en utilisant une page HTML statique. Cette page s'appelle “search.htm”. L'application contient d'autres pages statiques qui vous permettent, par exemple, d'afficher le résultat de la recherche ("results.htm"). The POST type has been associated to the page, as well as the `/4DACTION/SEARCH` action.

Voici le code HTML qui correspond à cette page :

```html
<form action="/4daction/processForm" method=POST>
<input type=text name=vName value=""><br/>
<input type=checkbox name=vExact value="Word">Whole word<br/>
<input type=submit name=OK value="Search">
</FORM>
```

During data entry, type “ABCD” in the data entry area, check the "Whole word" option and validate it by clicking the **Search** button. Dans la requête envoyée au serveur Web :

```
vName="ABCD"
vExact="Word"
OK="Search"
```

4D calls the `On Web Authentication` database method (if it exists), then the `processForm` project method is called, which is as follows:

```4d
 C_TEXT($1) //mandatory for compiled mode
 C_LONGINT($vName)
 C_TEXT(vName;vLIST)
 ARRAY TEXT($arrNames;0)
 ARRAY TEXT($arrVals;0)
 WEB GET VARIABLES($arrNames;$arrVals) //we retrieve all the variables of the form
 $vName:=Find in array($arrNames;"vName")
 vName:=$arrVals{$vName}
 If(Find in array($arrNames;"vExact")=-1) //If the option has not been checked
    vName:=vName+"@"
 End if
 QUERY([Jockeys];[Jockeys]Name=vName)
 FIRST RECORD([Jockeys])
 While(Not(End selection([Jockeys])))
    vLIST:=vLIST+[Jockeys]Name+" "+[Jockeys]Tel+"<br/>"
    NEXT RECORD([Jockeys])
 End while
 WEB SEND FILE("results.htm") //Send the list to the results.htm form
  //which contains a reference to the variable vLIST,
  //for example <!--4DHTML vLIST-->
  //...
End if
```





## Récupérer des valeurs depuis des requêtes HTTP

Le serveur Web de 4D vous permet de récupérer les données envoyées via des requêtes POST ou GET, en utilisant des formulaires Web ou des URL.

Lorsque le serveur Web reçoit une requêtes avec des données dans l'en-tête ou dans l'URL, 4D peut récupérer les valeurs de tous les objets HTML qu'elle contient. This principle can be implemented in the case of a Web form, sent for example using `WEB SEND FILE` or `WEB SEND BLOB`, where the user enters or modifies values, then clicks on the validation button.

In this case, 4D can retrieve the values of the HTML objects found in the request using the `WEB GET VARIABLES` command. The `WEB GET VARIABLES` command retrieves the values as text.

Considérons le code source HTML suivant :

```html
<html>
<head>
  <title>Welcome</title>
  <script language="JavaScript"><!--
function GetBrowserInformation(formObj){
formObj.vtNav_appName.value = navigator.appName
formObj.vtNav_appVersion.value = navigator.appVersion
formObj.vtNav_appCodeName.value = navigator.appCodeName
formObj.vtNav_userAgent.value = navigator.userAgent
return true
}
function LogOn(formObj){
if(formObj.vtUserName.value!=""){
return true
} else {
alert("Enter your name, then try again.")
return false
}
}
//--></script>
</head>
<body>
<form action="/4DACTION/WWW_STD_FORM_POST" method="post"
 name="frmWelcome"
 onsubmit="return GetBrowserInformation(frmWelcome)">
  <h1>Welcome to Spiders United</h1>
  <p><b>Please enter your name:</b>
  <input name="vtUserName" value="" size="30" type="text"></p>
  <p>
<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">
<input name="vsbRegister" value="Register" type="submit">
<input name="vsbInformation" value="Information" type="submit"></p>
<p>
<input name="vtNav_appName" value="" type="hidden">
<input name="vtNav_appVersion" value="" type="hidden">
<input name="vtNav_appCodeName" value="" type="hidden">
<input name="vtNav_userAgent" value="" type="hidden"></p>
</form>
</body>
</html>
```

Quand 4D envoie la page à un navigateur Web, cela ressemble à ceci :

![](../assets/en/WebServer/spiders.png)

Les principales caractéristiques de cette page sont les suivantes :

- It includes three **Submit** buttons: `vsbLogOn`, `vsbRegister` and `vsbInformation`.
- When you click **Log On**, the submission of the form is first processed by the JavaScript function `LogOn`. Si aucun nom n'est saisi, le formulaire n'est même pas envoyé à 4D et une alerte JavaScript est affichée.
- The form has a POST 4D method as well as a Submit script (*GetBrowserInformation*) that copies the browser properties to the four hidden objects whose names starts with *vtNav_App*. It also includes the `vtUserName` object.

Let’s examine the 4D method `WWW_STD_FORM_POST` that is called when the user clicks on one of the buttons on the HTML form.

```4d
  // Retrieval of value of variables
 ARRAY TEXT($arrNames;0)
 ARRAY TEXT($arrValues;0)
 WEB GET VARIABLES($arrNames;$arrValues)
 C_LONGINT($user)

 Case of

  // The Log On button was clicked
    :(Find in array($arrNames;"vsbLogOn")#-1)
       $user :=Find in array($arrNames;"vtUserName")
       QUERY([WWW Users];[WWW Users]UserName=$arrValues{$user})
       $0:=(Records in selection([WWW Users])>0)
       If($0)
          WWW POST EVENT("Log On";WWW Log information)
  // The WWW POST EVENT method saves the information in a database table
       Else

          $0:=WWW Register
  // The WWW Register method lets a new Web user register
       End if

  // The Register button was clicked
    :(Find in array($arrNames;"vsbRegister")#-1)
       $0:=WWW Register

  // The Information button was clicked
    :(Find in array($arrNames;"vsbInformation")#-1)
       WEB SEND FILE("userinfos.html")
 End case
```

Les caractéristiques de cette méthode sont :

- The values of the variables *vtNav_appName*, *vtNav_appVersion*, *vtNav_appCodeName*, and *vtNav_userAgent* (bound to the HTML objects having the same names) are retrieved using the `WEB GET VARIABLES` command from HTML objects created by the *GetBrowserInformation* JavaScript script.
- Out of the *vsbLogOn*, *vsbRegister* and *vsbInformation* variables bound to the three Submit buttons, only the one corresponding to the button that was clicked will be retrieved by the `WEB GET VARIABLES` command. Lorsque l'envoi est effectué par l'un de ces boutons, le navigateur renvoie la valeur du bouton cliqué à 4D. Cela vous indique sur quel bouton on a cliqué.

Gardez à l'esprit qu'en HTML, tous les objets sont des objets de texte. If you use a SELECT object, it is the value of the highlighted element in the object that is returned in the `WEB GET VARIABLES` command, and not the position of the element in the array as in 4D. `WEB GET VARIABLES` always returns values of the Text type.


## Autres commandes de serveur Web

Le serveur web 4D fournit plusieurs commandes web de bas niveau vous permettant de développer un traitement personnalisé des requêtes :

- the `WEB GET HTTP BODY` command returns the body as raw text, allowing any parsing you may need
- the `WEB GET HTTP HEADER` command return the headers of the request. It is useful to handle custom cookies, for example (along with the `WEB SET HTTP HEADER` command).
- the `WEB GET BODY PART` and `WEB Get body part count` commands to parse the body part of a multi-part request and retrieve text values, but also files posted, using BLOBs.

Ces commandes sont résumées dans le graphique suivant :

![](../assets/en/WebServer/httpCommands.png)

Le serveur web 4D prend en charge les fichiers envoyés en encodage de transfert par morceaux (chunked transfer encoding) depuis n'importe quel client Web. L'encodage de transfert chunked est un mécanisme de transfert de données spécifié en HTTP/1.1. Il permet le transfert de données sous forme de séries de "chunks" ou "morceaux" (parts) sans connaître la taille finale des données. The 4D Web Server also supports chunked transfer encoding from the server to Web clients (using `WEB SEND RAW DATA`).

## Méthode projet COMPILER_WEB

La méthode COMPILER\_WEB, si elle existe, est systématiquement appelée lorsque le serveur HTTP reçoit une requête dynamique et appelle le moteur 4D. This is the case, for example, when the 4D Web server receives a posted form or a URL to process in [`On Web Connection`](#on-web-connection). Cette méthode est destinée à contenir des directives de typage et/ou d'initialisation de variables utilisées lors des échanges Web. Elle est utilisée par le compilateur lorsque l'application est compilée. La méthode COMPILER\_WEB est commune à tous les formulaires Web. Par défaut, la méthode COMPILER_WEB n'existe pas. Vous devez la créer explicitement.

> La méthode projet COMPILER_WEB est également appelée, si elle existe, pour chaque requête SOAP acceptée.
