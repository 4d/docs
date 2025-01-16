---
id: authentication
title: Authentification
---

L'authentification est nécessaire lorsque vous souhaitez fournir des droits d'accès spécifiques aux utilisateurs Web. L'authentification désigne la manière dont les informations concernant les références de l'utilisateur (généralement le nom et le mot de passe) sont collectées et traitées.

## Modes d’authentification

Le serveur web 4D propose trois modes d'authentification que vous pouvez sélectionner sur la page **Web**/**Options (I)** de la fenêtre des Propriétés :

![](../assets/en/WebServer/authentication.png)

> Il est recommandé d'utiliser une authentification **personnalisée**.

### Vue d’ensemble

Le schéma suivant résume le système d'accès au serveur web 4D :

![](../assets/en/WebServer/serverAccess.png)

> Les requêtes qui commencent par `rest/` sont gérées directement par le [serveur REST](REST/configuration.md).

### Authentification personnalisée (par défaut)

Dans ce mode, c'est au développeur de définir comment authentifier les utilisateurs. 4D évalue uniquement les requêtes HTTP [qui nécessitent une authentification](#method-calls).

Ce mode d'authentification est le plus flexible car il permet de :

- soit déléguer l'authentification de l'utilisateur à une application tierce (par exemple, un réseau social, un SSO);
- ou alors, fournir une interface à l'utilisateur (par exemple, un formulaire web) pour qu'il puisse créer son compte dans votre base de données clients ; ensuite, vous pouvez authentifier les utilisateurs avec n'importe quel algorithme personnalisé (voir [cet exemple](sessions.md#example) du chapitre "Sessions utilisateurs"). L'important est de ne jamais stocker le mot de passe en clair, en utilisant du code tel que :

```4d
//... user account creation
ds.webUser.password:=Generate password hash($password)  
ds.webUser.save()
```

Voir également [cet exemple](gettingStarted.md#authenticating-users) du chapitre "Prise en main".

Si aucune authentification personnalisée n'est fournie, 4D appelle la méthode base [`On Web Authentication`](#on-web-authentication) (si elle existe). In addition to $urll and $content, only the IP addresses of the browser and the server ($IPClient and $IPServer) are provided, the user name and password ($user and $password) are empty. La méthode doit retourner **True** dans $0 si l'utilisateur est authentifié avec succès. Ensuite, la ressource qui fait l'objet de la requête est fournie. Si l'authentification échoue, **False** est retourné dans $0.

> **Attention :** Si la méthode de base `On Web Authentication` n'existe pas, les connexions sont automatiquement acceptées (mode test).

### Protocole BASIC

Lorsqu'un utilisateur se connecte au serveur, une boîte de dialogue standard apparaît sur son navigateur afin qu'il saisisse son nom d'utilisateur et son mot de passe.

> Le nom et le mot de passe saisis par l'utilisateur sont envoyés en clair dans l'en-tête de la requête HTTP. Ce mode requiert généralement le protocole HTTPS pour assurer la confidentialité.

Les valeurs saisies sont ensuite évaluées :

- Si l'option **Inclure les mots de passe 4D** est cochée, les informations d'identification des utilisateurs seront d'abord évaluées par rapport à la [table interne des utilisateurs 4D](Users/overview.md).
  - Si le nom d'utilisateur envoyé par le navigateur existe dans la table des utilisateurs 4D et que le mot de passe est correct, la connexion est acceptée. Si le mot de passe est incorrect, la connexion est refusée.
  - Si le nom d'utilisateur n'existe pas dans la table des utilisateurs 4D, la méthode base [`On Web Authentication`](#on-web-authentication) est appelée. Si la méthode base `On Web Authentication` n'existe pas, les connexions sont rejetées.
- Si l'option **Inclure les mots de passe 4D** n'est pas cochée, les informations d'identification des utilisateurs sont envoyées à la méthode base [`On Web Authentication`](#on-web-authentication) avec les autres paramètres de connexion (adresse et port IP, URL...) afin que vous puissiez les traiter. Si la méthode base `On Web Authentication` n'existe pas, les connexions sont rejetées.

> Avec le serveur Web du client 4D, gardez à l'esprit que tous les sites publiés par les machines 4D Client partageront la même table d'utilisateurs. La validation des utilisateurs/mots de passe est effectuée par l'application 4D Server.

### Mots de passe protocole DIGEST

Ce mode offre un niveau de sécurité plus élevé car les informations d'authentification sont traitées par un processus à sens unique appelé "hashing" qui rend leur contenu impossible à déchiffrer.

Comme en mode BASIC, l'utilisateur doit saisir son nom et mot de passe lors de la connexion. La méthode base [`On Web Authentication`](#on-web-authentication) est ensuite appelée. When the DIGEST mode is activated, the $password parameter (password) is always returned empty. En effet, lors de l'utilisation de ce mode, ces informations ne passent pas par le réseau en texte clair (non chiffré). Il est donc impératif dans ce cas d'évaluer les demandes de connexion à l'aide de la commande `WEB Validate digest`.

> Vous devez redémarrer le serveur web pour que les modifications apportées à ces paramètres soient prises en compte.

## On Web Authentication

La méthode base `On Web Authentication` est chargée de gérer l'accès au moteur du serveur web. Elle est appelée par 4D ou 4D Server lorsqu'une requête HTTP dynamique est reçue.

### Appels des méthodes base

La méthode base `On Web Authentication` est automatiquement appelée lorsqu'une requête ou un traitement nécessite l'exécution de code 4D (à l'exception des appels REST). Elle est également appelée lorsque le serveur web reçoit une URL statique invalide (par exemple, si la page statique demandée n'existe pas).

La méthode base `On Web Authentication` est donc appelée :

- lorsque le serveur web reçoit une URL demandant une ressource qui n'existe pas
- lorsque le serveur web reçoit une URL commençant par `4DACTION/`, `4DCGI/`...
- when the web server receives a root access URL and no home page has been set in the Settings or by means of the [`WEB SET HOME PAGE`](../commands-legacy/web-set-home-page.md) command
- lorsque le serveur web traite une balise exécutant du code (par exemple `4DSCRIPT`) dans une page semi-dynamique.

La méthode base `On Web Authentication` n'est PAS appelée :

- lorsque le serveur web reçoit une URL demandant une page statique valide.
- when the web server receives a URL beginning with `rest/` and the REST server is launched (in this case, the authentication is handled through the [`ds.authentify` function](../REST/authUsers#force-login-mode) or (deprecated) the [`On REST Authentication` database method](REST/configuration.md#using-the-on-rest-authentication-database-method) or [Structure settings](REST/configuration.md#using-the-structure-settings)).
- when the web server receives a URL with a pattern triggering a [custom HTTP Request Handler](http-request-handler.md).

### Syntaxe

**On Web Authentication**( _$url_ : Text ; _$content_ : Text ; _$IPClient_ : Text ; _$IPServer_ : Text ; _$user_ : Text ; _$password_ : Text ) -> $accept : Boolean

| Paramètres | Type    |                             | Description                                                                 |
| ---------- | ------- | :-------------------------: | --------------------------------------------------------------------------- |
| $url       | Text    | <- | Variable URL                                                                |
| $content   | Text    | <- | En-têtes HTTP + Corps HTTP (jusqu'à une limite de 32 ko) |
| $IPClient  | Text    | <- | Adresse IP du client web (navigateur)                    |
| $IPServer  | Text    | <- | Adresse IP du serveur                                                       |
| $user      | Text    | <- | Nom d'utilisateur                                                           |
| $password  | Text    | <- | Mot de passe                                                                |
| $accept    | Boolean |              ->             | True = demande acceptée, False = demande rejetée                            |

Vous devez déclarer ces paramètres de la manière suivante :

```4d
// On Web Authentication database method
#DECLARE ($url : Text; $content : Text; \
  $IPClient : Text; $IPServer : Text; \
  $user : Text; $password : Text) \
  -> $accept : Boolean

//Code for the method

```

:::note

Tous les paramètres de la méthode base `On Web Authentication` ne sont pas nécessairement remplis. Les informations reçues par la méthode base dépendent du [mode d'authentification](#mode-d-authentification) sélectionné.

:::

#### $url - URL

The first parameter (`$url`) is the URL received by the server, from which the host address has been removed.

Prenons l'exemple d'une connexion Intranet. Supposons que l'adresse IP de votre machine serveur Web 4D est 123.45.67.89. The following table shows the values of $urll depending on the URL entered in the Web browser:

| URL entrée dans le navigateur web                                                                                                                 | Value of parameter $urll                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 123.45.67.89                                                                                      | /                                                                                     |
| http://123.45.67.89                                                               | /                                                                                     |
| 123.45.67.89/Customers                                                                            | /Customers                                                                            |
| http://123.45.67.89/Customers/Add                                                 | /Customers/Add                                                                        |
| 123.45.67.89/Do_This/If_OK/Do_That | /Do_This/If_OK/Do_That |

#### $content - Header and Body of the HTTP request

The second parameter (`$content`) is the header and the body of the HTTP request sent by the web browser. Notez que ces informations sont transmises telles quelles à votre méthode base `On Web Authentication`. Son contenu variera en fonction de la nature du navigateur web qui tente la connexion.

Si votre application utilise ces informations, il vous appartient d'analyser l'en-tête et le corps. Vous pouvez utiliser les commandes `WEB GET HTTP HEADER` et `WEB GET HTTP BODY`.

> For performance reasons, the size of data passing through the $content parameter must not exceed 32 KB. Au-delà de cette taille, ils sont tronqués par le serveur HTTP 4D.

#### $IPClient - Web client IP address

The `$IPClient` parameter receives the IP address of the browser’s machine. Cette information peut vous permettre de distinguer entre les connexions intranet et internet.

> 4D renvoie les adresses IPv4 dans un format hybride IPv6/IPv4 écrit avec un préfixe de 96 bits, par exemple ::ffff:192.168.2.34 pour l'adresse IPv4 192.168.2.34. Pour plus d'informations, consultez la section [Support IPv6](webServerConfig.md#about-ipv6-support).

#### $IPServer - Server IP address

The `$IPServer` parameter receives the IP address used to call the web server. 4D permet le multi-homing, ce qui vous permet d'exploiter des machines avec plus d'une adresse IP. Pour plus d'informations, veuillez consulter la [Page Configuration](webServerConfig.md#ip-address-to-listen).

#### $user and $password - User Name and Password

The `$user` and `$password` parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser. Cette boîte de dialogue apparaît pour chaque connexion, si l'authentification [basique](#basic-protocol) ou [digest](#digest-protocol) est sélectionnée.

> If the user name sent by the browser exists in 4D, the $password parameter (the user’s password) is not returned for security reasons.

#### $accept - Function return

The `On Web Authentication` database method returns a boolean:

- If it is True, the connection is accepted.

- If it is False, the connection is refused.

La méthode base `On Web Connection` est seulement exécutée si la connexion a été acceptée par `On Web Authentication`.

:::warning

- If no value is returned, the connection is considered as **accepted** and the `On Web Connection` database method is executed.
- N'appelez pas d'éléments d'interface dans la méthode base `On Web Authentication` (`ALERT`, `DIALOG`, etc.) car sinon son exécution sera interrompue et la connexion refusée. La même chose se produira s'il y a une erreur lors de son traitement.

:::

### Exemple

Exemple de méthode base `On Web Authentication` en mode [DIGEST](#digest-protocol) :

```4d
 // On Web Authentication
 #DECLARE ($url : Text; $header : Text; $ipB : Text; $ipS : Text; \
 	$user : Text; $pw : Text) -> $valid : Boolean
  
 var $found : cs.WebUserSelection
 $valid:=False

 $found:=ds.WebUser.query("User === :1";$user)
 If($found.length=1) //User est trouvé
 	$valid:=WEB Validate digest($user;[WebUser]password)
 Else
    $valid:=False // User n'existe pas
 End if
```
