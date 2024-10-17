---
id: sessions
title: Sessions utilisateur
---

Le serveur Web de 4D offre des fonctions intégrées pour la gestion des **sessions utilisateur**. Creating and maintaining user sessions allows you to control and improve the user experience on your web application. When user sessions are enabled, web clients can reuse the same server context from one request to another.

Web server user sessions allow to:

- handle multiple requests simultaneously from the same web client through an unlimited number of preemptive processes (web server sessions are **scalable**),
- share data between the processes of a web client,
- associate privileges to user sessions,
- gérer l'accès via un objet `Session` et l'[API Session](API/SessionClass.md).

> **Note :** l'implémentation actuelle n'est que la première étape d'une fonctionnalité complète à venir qui permet aux développeurs de gérer les autorisations utilisateur hiérarchiques via des sessions dans l'ensemble de l'application Web.


## Activation des sessions

La gestion de session peut être activée et désactivée sur votre serveur Web 4D. Il y a différentes façons d'activer la gestion de session :

- Using the **Scalable sessions** option on the "Web/Options (I)" page of the Settings (permanent setting): ![alt-text](../assets/en/WebServer/settingsSession.png)

Cette option est sélectionnée par défaut dans les nouveaux projets. It can however be disabled by selecting the **No sessions** option, in which case the web session features are disabled (no `Session` object is available).

- Utilisation de la propriété [`.scalableSession`](API/WebServerClass.md#scalablesession) de l'objet Web Server (pour passer le paramètre *settings* de la fonction [`.start()`](API/WebServerClass.md#start)). Dans ce cas, ce paramètre remplace l'option définie dans la boîte de dialogue Propriétés pour l'objet Web Server (il n'est pas stocké sur disque).

> The `WEB SET OPTION` command can also set the session mode for the main Web server.

Dans tous les cas, ce paramètre est local à la machine ; il peut donc être différent sur le serveur Web 4D Server et les serveurs Web des machines 4D distantes.

> **Compatibility**: A **Legacy sessions** option is available in projects created with a 4D version prior to 4D v18 R6 (for more information, please refer to the [doc.4d.com](https://doc.4d.com) web site).


## Implémentation des sessions

When [sessions are enabled](#enabling-sessions), automatic mechanisms are implemented, based upon a private cookie set by 4D itself: "4DSID_*AppName*", where *AppName* is the name of the application project. Ce cookie référence la session web courante pour l'application.

> Le nom du cookie peut être obtenu à l'aide de la propriété [`.sessionCookieName`](API/WebServerClass.md#sessioncookiename).

1. In each web client request, the Web server checks for the presence and the value of the private "4DSID_*AppName*" cookie.

2. Si le cookie a une valeur, 4D recherche la session qui a créé ce cookie parmi les sessions existantes ; si cette session est trouvée, elle est réutilisée pour l'appel.

2. Si la requête du client ne correspond pas à une session déjà ouverte :

- a new session with a private "4DSID_*AppName*" cookie is created on the web server
- a new Guest `Session` object is created and is dedicated to the scalable web session.

L'objet `Session` courant est alors accessible via la commande [`Session`](API/SessionClass.md#session) dans le code de n'importe quel processus Web.

![alt-text](../assets/en/WebServer/schemaSession.png)

Les process Web ne se terminent généralement pas, ils sont recyclés dans un pool pour des raisons d'optimisation. Lorsqu'un process termine l'exécution d'une requête, il est replacé dans le pool et rendu disponible pour la requête suivante. Since a web process can be reused by any session, [process variables](Concepts/variables.md#process-variables) must be cleared by your code at the end of its execution (using [`CLEAR VARIABLE`](https://doc.4d.com/4dv18/help/command/en/page89.html) for example). Ce nettoyage est nécessaire pour toute information liée au process, comme une référence à un fichier ouvert. C'est la raison pour laquelle **il est recommandé** d'utiliser l'objet [Session](API/SessionClass.md) lorsque vous souhaitez conserver les informations relatives à la session.


## Partage d'informations

Chaque objet `Session` fournit une propriété [`.storage`](API/SessionClass.md#storage) qui est un [objet partagé](Concepts/shared.md). Cette propriété vous permet de partager des informations entre tous les process gérés par la session.

## Durée de vie des sessions

Une session web évolutive est fermée lorsque:

- le serveur web est arrêté,
- le délai d'attente du cookie de session a été atteint.

La durée de vie d'un cookie inactif est de 60 minutes par défaut, ce qui signifie que le serveur Web fermera automatiquement les sessions inactives après 60 minutes.

Ce timeout peut être défini à l'aide de la propriété [`.idleTimeout`](API/SessionClass.md#idletimeout) de l'objet `Session` (le timeout ne peut pas être inférieur à 60 minutes).

Lorsqu'une session Web évolutive est fermée, si la commande [`Session`](API/SessionClass.md#session) est appelée par la suite :

- the `Session` object does not contain privileges (it is a Guest session)
- la propriété [`.storage`](API/SessionClass.md#storage) est vide
- un nouveau cookie de session est associé à la session


## Privilèges

Privileges can be associated to sessions. Sur le serveur web, vous pouvez fournir un accès spécifique ou des fonctionnalités en fonction des privilèges de la session.

Vous pouvez attribuer des privilèges à l'aide de la fonction [`.setPrivileges()`](API/SessionClass.md#setprivileges). Dans votre code, vous pouvez vérifier les privilèges de la session pour autoriser ou refuser l'accès à l'aide de la fonction [`.hasPrivilege()`](API/SessionClass.md#hasprivilege). Par défaut, les nouvelles sessions n'ont aucun privilège : ce sont des sessions **invité** (la fonction [`.isGuest()`](API/SessionClass.md#isguest) retourne true).

> Dans l'implémentation actuelle, seul le privilège "WebAdmin" est disponible.

Voici un exemple :

```4d
If (Session.hasPrivilege("WebAdmin"))
    //Accès accordé, ne rien faire
Else
    //Afficher une page d'authentification
End if
```


## Exemple

Dans une application CRM, chaque commercial gère son propre portefeuille de clients. Le datastore contient au moins deux dataclass liées : Customers et SalesPersons (un commercial a plusieurs clients).

![alt-text](../assets/en/WebServer/exampleSession.png)

Nous voulons qu'un(e) commercial(e) s'authentifie, ouvre une session sur le serveur web et que les 3 meilleurs clients soient chargés dans la session.


1. Nous exécutons cette URL pour ouvrir une session :

```
http://localhost:8044/authenticate.shtml
```

> Dans un environnement de production, il est nécessaire d'utiliser une [connexion HTTPS](API/WebServerClass.md#httpsenabled) pour éviter la circulation d'informations non chiffrées sur le réseau.


2. The `authenticate.shtml` page is a form containing *userId* et *password* input fields and sending a 4DACTION POST action:

```html
<!DOCTYPE html>
<html>
<body bgcolor="#ffffff">
<FORM ACTION="/4DACTION/authenticate" METHOD=POST>
    UserId: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>
    Password: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>
<INPUT TYPE=SUBMIT NAME=OK VALUE="Log In">
</FORM>
</body>
</html>
```

![alt-text](../assets/en/WebServer/authenticate.png)

3. The authenticate project method looks for the *userID* person and validates the password against the hashed value already stored in the *SalesPersons* table:

```4d
var $indexUserId; $indexPassword; $userId : Integer
var $password : Text
var $userTop3; $sales; $info : Object


ARRAY TEXT($anames; 0)
ARRAY TEXT($avalues; 0)

WEB GET VARIABLES($anames; $avalues)

$indexUserId:=Find in array($anames; "userId")
$userId:=Num($avalues{$indexUserId})

$indexPassword:=Find in array($anames; "password")
$password:=$avalues{$indexPassword}

$sales:=ds.SalesPersons.query("userId = :1"; $userId).first()

If ($sales#Null)
    If (Verify password hash($password; $sales.password))
        $info:=New object()
        $info.userName:=$sales.firstname+" "+$sales.lastname
        Session.setPrivileges($info)
        Use (Session.storage)
            If (Session.storage.myTop3=Null)
                $userTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)
                Session.storage.myTop3:=$userTop3
            End if
        End use
        WEB SEND HTTP REDIRECT("/authenticationOK.shtml")
    Else
        WEB SEND TEXT("This password is wrong")
    End if
Else
    WEB SEND TEXT("This userId is unknown")
End if
```
