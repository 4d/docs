---
id: httpRequests
title: Traitement des requêtes HTTP
---

Le serveur web 4D offre plusieurs fonctionnalités pour gérer les requêtes HTTP :

- la méthode base `On Web Connection`, un routeur pour votre application web,
- l'URL `/4DACTION` pour appeler le code côté serveur
- `WEB GET VARIABLES` pour récupérer les valeurs des objets HTML envoyés au serveur
- d'autres commandes telles que `WEB GET HTTP BODY`, `WEB GET HTTP HEADER`, ou `WEB GET BODY PART` permettent de personnaliser le traitement des requêtes, y compris les cookies.
- la méthode projet *COMPILER_WEB* pour déclarer vos variables.

## On Web Connection

La méthode base `On Web Connection` peut être utilisée comme point d'entrée pour le serveur Web 4D.

### Appels des méthodes base

La méthode base `On Web Connection` est automatiquement appelée lorsque le serveur reçoit une URL qui n'est pas un chemin vers une page existante sur le serveur. La méthode base est appelée avec l'URL.

Par exemple, l'URL "*a/b/c*" appellera la méthode base, mais "*a/b/c.html*" n'appellera pas la méthode base si la page "c.html" existe dans le sous-dossier "a/b" du [WebFolder](webServerConfig.md#root-folder).

> La requête doit avoir été acceptée préalablement par la méthode base [`On Web Authentication`](authentication.md#on-web-authentication) (si elle existe) et le serveur web doit être lancé.

### Syntaxe

**On Web Connection**( *$1* : Text ; *$2* : Text ; *$3* : Text ; *$4* : Text ; *$5* : Text ; *$6* : Text )

| Paramètres | Type |                             | Description                                                                 |
| ---------- | ---- | :-------------------------: | --------------------------------------------------------------------------- |
| $1         | Text | <- | Variable URL                                                                |
| $2         | Text | <- | En-têtes HTTP + Corps HTTP (jusqu'à une limite de 32 ko) |
| $3         | Text | <- | Adresse IP du client web (navigateur)                    |
| $4         | Text | <- | Adresse IP du serveur                                                       |
| $5         | Text | <- | Nom d'utilisateur                                                           |
| $6         | Text | <- | Mot de passe                                                                |

Vous devez déclarer ces paramètres de la manière suivante :

```4d
//On Web Connection
 
 C_TEXT($1;$2;$3;$4;$5;$6)
 
//Code de la méthode base
```

Alternativement, vous pouvez utiliser la syntaxe des [paramètres nommés](Concepts/parameters.md#named-parameters) :

```4d
// On Web Connection
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text)

```

> Appeler une commande 4D qui affiche un élément d'interface (`DIALOG`, `ALERT`, etc.) n'est pas autorisé et met fin au traitement de la méthode.

### $1 - URL extra data

Le premier paramètre ($1) est l'URL saisie par les utilisateurs dans la barre d'adresse de leur navigateur web, sans l'adresse du serveur.

Prenons une connexion intranet comme exemple. Supposons que l'adresse IP de votre machine serveur Web 4D est 123.4.567.89. Le tableau suivant montre les valeurs de $1 en fonction de l'URL saisie dans le navigateur Web :

| URL entrée dans le navigateur web                                                                                                                 | Valeur du paramètre $1                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 123.4.567.89                                                                                      | /                                                                                     |
| http://123.45.67.89                                                               | /                                                                                     |
| 123.4.567.89/Customers                                                                            | /Customers                                                                            |
| http://123.45.67.89/Customers/Add                                                 | /Customers/Add                                                                        |
| 123.4.567.89/Do_This/If_OK/Do_That | /Do_This/If_OK/Do_That |

Notez que vous êtes libre d'utiliser ce paramètre à votre convenance. 4D ignore simplement la valeur passée au-delà de la partie hôte de l'URL. Par exemple, vous pouvez établir une convention où la valeur "*/Customers/Add*" signifie "accès direct pour ajouter un nouvel enregistrement dans la table `[Customers]`". En proposant aux utilisateurs web une liste de valeurs possibles et/ou des signets par défaut, vous pouvez leur fournir des raccourcis vers différentes parties de votre application. De cette façon, les utilisateurs web peuvent accéder rapidement aux ressources de votre site web sans passer par le chemin de navigation complet à chaque nouvelle connexion.

### $2 - En-tête (header) et corps (body) de la requête HTTP

Le deuxième paramètre ($2) est l'en-tête (header) et le corps (body) de la requête HTTP envoyée par le navigateur web. Notez que ces informations sont passées telles quelles à votre méthode base `On Web Connection`. Son contenu variera en fonction de la nature du navigateur web qui tente la connexion.

Si votre application utilise ces informations, il vous appartient d'analyser l'en-tête et le corps. Vous pouvez utiliser les commandes `WEB GET HTTP HEADER` et `WEB GET HTTP BODY`.

> Pour des raisons de performance, la taille des données passant par le paramètre $2 ne doit pas dépasser 32 Ko. Au-delà de cette taille, ils sont tronqués par le serveur HTTP 4D.

### $3 - Adresse IP du client Web

Le paramètre $3 reçoit l'adresse IP de la machine du navigateur. Cette information peut vous permettre de distinguer entre les connexions intranet et internet.

> 4D renvoie les adresses IPv4 dans un format hybride IPv6/IPv4 écrit avec un préfixe de 96 bits, par exemple ::ffff:192.168.2.34 pour l'adresse IPv4 192.168.2.34. Pour plus d'informations, consultez la section [Support IPv6](webServerConfig.md#about-ipv6-support).

### $4 - Adresse IP du serveur

Le paramètre `$4` reçoit l'adresse IP utilisée pour appeler le serveur web 4D. 4D prend en charge le multi-homing, ce qui vous permet d'exploiter des machines avec plus d'une adresse IP. Pour plus d'informations, veuillez consulter la [Page Configuration](webServerConfig.html#ip-address-to-listen).

### $5 et $6 - Nom d'utilisateur et mot de passe

Les paramètres $5 et $6 reçoivent le nom d'utilisateur et le mot de passe saisis par l'utilisateur dans la boîte de dialogue d'identification standard affichée par le navigateur, le cas échéant (voir la [page d'authentification](authentication.md)).

> Si le nom d'utilisateur envoyé par le navigateur existe dans 4D, le paramètre $6 (le mot de passe de l'utilisateur) n'est pas renvoyé pour des raisons de sécurité.

## /4DACTION

\*\*/4DACTION/\*\**MethodName*<br/>
\*\*/4DACTION/\*\**MethodName/Param*

| Paramètres | Type |     | Description                                  |
| ---------- | ---- | :-: | -------------------------------------------- |
| MethodName | Text |  -> | Nom de la méthode projet 4D à exécuter       |
| Param      | Text |  -> | Paramètre texte à passer à la méthode projet |

**Utilisation :** URL ou action du formulaire.

Cette URL vous permet d'appeler la méthode projet 4D *MethodName* avec un paramètre texte *Param* optionnel. La méthode recevra ce paramètre dans *$1*.

- La méthode projet 4D doit avoir été [autorisée pour les requêtes web](allowProject.md) : l'attribut "Disponible via Balises HTML et URLs 4D (4DACTION. .)” doit avoir été coché dans les propriétés de la méthode. Si l'attribut n'est pas coché, la requête web est rejetée.
- Lorsque 4D reçoit une requête `/4DACTION/MethodName/Param`, la méthode base `On Web Authentication` est appelée (si elle existe).

`4DACTION/` peut être associé à une URL dans une page Web statique :

```html
<A HREF="/4DACTION/MyMethod/hello">Do Something</A>
```

La méthode de projet `MyMethod` doit généralement retourner une "réponse" (envoi d'une page HTML à l'aide de `WEB SEND FILE` ou `WEB SEND TEXT`, etc.). Assurez-vous de rendre le traitement aussi court que possible afin de ne pas bloquer le navigateur.

> Une méthode appelée par `/4DACTION` ne doit pas appeler d'élément d'interface (`DIALOG`, `ALERT`, etc.).

#### Exemple

Cet exemple décrit l'association de l'URL `/4DACTION` avec un objet image HTML afin d'afficher dynamiquement une image dans la page. Vous insérez les instructions suivantes dans une page HTML statique :

```html
<IMG SRC="/4DACTION/getPhoto/smith">
```

La méthode `getPhoto` est la suivante :

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

> Lorsque le serveur Web reçoit un formulaire posté, il appelle la méthode base `On Web Authentication` (si elle existe).

Dans la méthode appelée, vous devez utiliser la commande `WEB GET VARIABLES` afin de [récupérer les noms et les valeurs](#getting-values-from-the-requests) de tous les champs inclus dans une page HTML soumise au serveur.

Exemple pour définir l'action d'un formulaire :

```html
<FORM ACTION="/4DACTION/MethodName" METHOD=POST>
```

#### Exemple

Dans une application Web, nous aimerions que les navigateurs puissent rechercher parmi les enregistrements en utilisant une page HTML statique. Cette page s'appelle “search.htm”. L'application contient d'autres pages statiques qui vous permettent, par exemple, d'afficher le résultat de la recherche ("results.htm"). Le type POST a été associé à la page, ainsi que l'action `/4DACTION/SEARCH`.

Voici le code HTML qui correspond à cette page :

```html
<form action="/4daction/processForm" method=POST>
<input type=text name=vName value=""><br/>
<input type=checkbox name=vExact value="Word">Whole word<br/>
<input type=submit name=OK value="Search">
</FORM>
```

Pendant la saisie des données, tapez "ABCD" dans la zone de saisie, cochez l'option "Mot entier" et validez en cliquant sur le bouton **Rechercher**. Dans la requête envoyée au serveur Web :

```
vName="ABCD"
vExact="Word"
OK="Search"
```

4D appelle la méthode base `On Web Authentication` (si elle existe), puis la méthode de projet `processForm` est appelée, qui est la suivante :

```4d
 C_TEXT($1) //obligatoire pour le mode compilé
 C_LONGINT($vName)
 C_TEXT(vName;vLIST)
 ARRAY TEXT($arrNames;0)
 ARRAY TEXT($arrVals;0)
 WEB GET VARIABLES($arrNames;$arrVals) //on récupère toutes les variables du formulaire
 $vName:=Find in array($arrNames;"vName")
 vName:=$arrVals{$vName}
 If(Find in array($arrNames;"vExact")=-1) //Si l’option n’a pas été cochée
    vName:=vName+"@"
 End if
 QUERY([Jockeys];[Jockeys]Name=vName)
 FIRST RECORD([Jockeys])
 While(Not(End selection([Jockeys])))
    vLIST:=vLIST+[Jockeys]Name+" "+[Jockeys]Tel+"<br/>"
    NEXT RECORD([Jockeys])
 End while
 WEB SEND FILE("results.htm") //Envoi de la liste dans le formulaire 
  //results.htm, qui contient une référence à la variable vLIST,
  //par exemple <!--4DHTML vLIST-->
  //...
End if
```

## Récupérer des valeurs depuis des requêtes HTTP

Le serveur Web de 4D vous permet de récupérer les données envoyées via des requêtes POST ou GET, en utilisant des formulaires Web ou des URL.

Lorsque le serveur Web reçoit une requêtes avec des données dans l'en-tête ou dans l'URL, 4D peut récupérer les valeurs de tous les objets HTML qu'elle contient. Ce principe peut être mis en œuvre dans le cas d'un formulaire Web, envoyé par exemple en utilisant `WEB SEND FILE` ou `WEB SEND BLOB`, où l'utilisateur saisit ou modifie des valeurs, puis clique sur le bouton de validation.

Dans ce cas, 4D peut récupérer les valeurs des objets HTML trouvés dans la requête en utilisant la commande `WEB GET VARIABLES`. La commande `WEB GET VARIABLES` récupère les valeurs en tant que texte.

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

- Elle comprend trois boutons **Submit** : `vsbLogOn`, `vsbRegister` et `vsbInformation`.
- Lorsque vous cliquez sur **Log On**, la soumission du formulaire est d'abord traitée par la fonction JavaScript `LogOn`. Si aucun nom n'est saisi, le formulaire n'est même pas envoyé à 4D et une alerte JavaScript est affichée.
- Le formulaire a une méthode 4D POST ainsi qu'un script Submit (*GetBrowserInformation*) qui copie les propriétés du navigateur dans les quatre objets cachés dont les noms commencent par *vtNav_App*.
  Il inclut également l'objet `vtUserName`.

Examinons la méthode 4D `WWW_STD_FORM_POST` qui est appelée lorsque l'utilisateur clique sur l'un des boutons du formulaire HTML.

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

- Les valeurs des variables *vtNav_appName*, *vtNav_appVersion*, *vtNav_appCodeName* et *vtNav_userAgent* (liées aux objets HTML portant les mêmes noms) sont récupérées à l'aide de la commande `WEB GET VARIABLES` à partir des objets HTML créés par le script JavaScript *GetBrowserInformation*.
- Parmi les variables *vsbLogOn*, *vsbRegister* et *vsbInformation* liées aux trois boutons Submit, seule celle correspondant au bouton cliqué sera récupérée par la commande `WEB GET VARIABLES`. Lorsque l'envoi est effectué par l'un de ces boutons, le navigateur renvoie la valeur du bouton cliqué à 4D. Cela vous indique sur quel bouton on a cliqué.

Gardez à l'esprit qu'en HTML, tous les objets sont des objets de texte. Si vous utilisez un objet SELECT, c'est la valeur de l'élément mis en évidence dans l'objet qui est renvoyée dans la commande `WEB GET VARIABLES`, et non la position de l'élément dans le tableau comme dans 4D. `WEB GET VARIABLES` retourne toujours des valeurs de type Texte.

## Autres commandes de serveur Web

Le serveur web 4D fournit plusieurs commandes web de bas niveau vous permettant de développer un traitement personnalisé des requêtes :

- la commande `WEB GET HTTP BODY` renvoie le body en tant que texte brut, permettant tout parsing dont vous pourriez avoir besoin
- la commande `WEB GET HTTP HEADER` renvoie les en-têtes de la requête. Elle est utile pour gérer des cookies personnalisés, par exemple (en plus de la commande `WEB SET HTTP HEADER`).
- les commandes `WEB GET BODY PART` et `WEB Get body part count` pour analyser la partie body d'une requête multi-part et récupérer les valeurs de texte, mais aussi les fichiers envoyés, en utilisant des BLOBs.

Ces commandes sont résumées dans le graphique suivant :

![](../assets/en/WebServer/httpCommands.png)

Le serveur web 4D prend en charge les fichiers envoyés en encodage de transfert par morceaux (chunked transfer encoding) depuis n'importe quel client Web. L'encodage de transfert chunked est un mécanisme de transfert de données spécifié en HTTP/1.1. Il permet le transfert de données sous forme de séries de "chunks" ou "morceaux" (parts) sans connaître la taille finale des données. Le serveur Web 4D prend également en charge le codage de transfert chunked du serveur vers les clients Web (en utilisant `WEB SEND RAW DATA`).

## Méthode projet COMPILER_WEB

La méthode COMPILER\_WEB, si elle existe, est systématiquement appelée lorsque le serveur HTTP reçoit une requête dynamique et appelle le moteur 4D. La méthode COMPILER\_WEB, si elle existe, est systématiquement appelée lorsque le serveur HTTP reçoit une requête dynamique et appelle le moteur 4D. Cette méthode est destinée à contenir des directives de typage et/ou d'initialisation de variables utilisées lors des échanges Web. Elle est utilisée par le compilateur lorsque l'application est compilée. La méthode COMPILER\_WEB est commune à tous les formulaires Web. Par défaut, la méthode COMPILER_WEB n'existe pas. Vous devez la créer explicitement.

> La méthode projet COMPILER_WEB est également appelée, si elle existe, pour chaque requête SOAP acceptée.
