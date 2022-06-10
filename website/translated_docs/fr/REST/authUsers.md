---
id: authUsers
title: Sessions et utilisateurs
---


## Authentification des utilisateurs

La première étape à suivre pour ouvrir une session REST sur le serveur 4D, consiste à authentifier l'utilisateur qui envoie la requête.

Connectez un utilisateur à votre application en passant le nom et le mot de passe de l'utilisateur dans [`$directory/login`]($directory.md#directorylogin).

Une fois qu'un utilisateur est connecté, une session est ouverte. Voir ci-dessous pour savoir comment traiter le cookie de session dans les requêtes ultérieures du client, si nécessaire.

La session est automatiquement fermée lorsque le timeout est écoulé.

## Cookie de session

Chaque requête REST est gérée via une session spécifique sur le serveur 4D.

Lorsqu'une première requête REST valide est reçue, le serveur crée la session et envoie un cookie de session nommé `WASID4D` dans l'**en-tête de réponse "Set-Cookie"**, contenant l'UUID de session, par exemple :

```
WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3
```

Assurez-vous, dans les requêtes REST, que ce cookie est inclus dans **l'en-tête "Cookie"** afin de réutiliser la même session. Sinon, une nouvelle session sera ouverte et une autre licence utilisée.

### Exemple

La gestion des cookies de session dépend de votre client HTTP. Cet exemple montre comment extraire et renvoyer le cookie de session dans le contexte des requêtes traitées via la commande 4D `HTTP Request`.

```4d
// Créer des en-têtes
ARRAY TEXT(headerNames;0)
ARRAY TEXT(headerValues;0)

APPEND TO ARRAY(headerNames;"username-4D")
APPEND TO ARRAY(headerNames;"session-4D-length")
APPEND TO ARRAY(headerNames;"hashed-password-4D")

APPEND TO ARRAY(headerValues;"kind user")
APPEND TO ARRAY(headerValues;"60")
APPEND TO ARRAY(headerValues;Generate digest("test";4D digest))

C_OBJECT($response)
$response:=New object

//Cette requête ouvre une session à l'utilisateur "kind user"
$result:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/$directory/login";"";\  
    $response;headerNames;headerValues;*)


//Créer de nouveaux tableaux pour les en-têtes uniquement avec le cookie WASID4D
buildHeader(->headerNames;->headerValues)

//Cette autre requête n'ouvrira pas une nouvelle session
$result:=HTTP Request(HTTP GET method;"127.0.0.1:8044/rest/$catalog";"";\  
    $response;headerNames;headerValues;*)
```

```4d
// méthode projet buildHeader  

C_POINTER($pointerNames;$1;$pointerValues;$2)
ARRAY TEXT($headerNames;0)
ARRAY TEXT($headerValues;0)

COPY ARRAY($1->;$headerNames)
COPY ARRAY($2->;$headerValues)

$indexCookie:=Find in array($headerValues;"WASID4D@")
$cookie:=$headerValues{$indexCookie}
$start:=Position("WASID4D";$cookie)
$end:=Position(";";$cookie)
$uuid:= Substring($cookie;$start;$end-$start)

ARRAY TEXT($headerNames;1)
ARRAY TEXT($headerValues;1)

$headerNames{1}:="Cookie"
$headerValues{1}:=$uuid

COPY ARRAY($headerNames;$1->)
COPY ARRAY($headerValues;$2->)
```



