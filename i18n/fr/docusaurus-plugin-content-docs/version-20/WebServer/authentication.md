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
- ou alors, fournir une interface à l'utilisateur (par exemple, un formulaire web) pour qu'il puisse créer son compte dans votre base de données clients ; ensuite, vous pouvez authentifier les utilisateurs avec n'importe quel algorithme personnalisé (voir [cette exemple](sessions.md#example) dans le chapitre "Sessions Utilisateur"). L'important est de ne jamais stocker le mot de passe en clair, en utilisant du code tel que :

```4d
//... user account creation
ds.webUser.password:=Generate password hash($password)  
ds.webUser.save()
```

Voir également [cet exemple](gettingStarted.md#authenticating-users) du chapitre "Prise en main".

Si aucune authentification personnalisée n'est fournie, 4D appelle la méthode de base de données [`On Web Authentication`](#on-web-authentication) (si elle existe). En plus de $1 et $2, seules les adresses IP du navigateur et du serveur ($3 et $4) sont fournies, le nom d'utilisateur et le mot de passe ($5 et $6) sont vides. La méthode doit retourner **True** dans $0 si l'utilisateur est authentifié avec succès. Ensuite, la ressource qui fait l'objet de la requête est fournie. Si l'authentification échoue, **False** est retourné dans $0.

> **Attention :** Si la méthode base `On Web Authentication` n'existe pas, les connexions sont automatiquement acceptées (mode test).


### Protocole BASIC

Lorsqu'un utilisateur se connecte au serveur, une boîte de dialogue standard apparaît sur son navigateur afin qu'il saisisse son nom d'utilisateur et son mot de passe.

> Le nom et le mot de passe saisis par l'utilisateur sont envoyés en clair dans l'en-tête de la requête HTTP. Ce mode requiert généralement le protocole HTTPS pour assurer la confidentialité.

Les valeurs saisies sont ensuite évaluées :

- Si l'option **Inclure les mots de passe 4D** est cochée, les informations d'identification des utilisateurs seront d'abord évaluées par rapport à la [table interne des utilisateurs 4D](Users/overview.md).
    - Si le nom d'utilisateur envoyé par le navigateur existe dans la table des utilisateurs 4D et que le mot de passe est correct, la connexion est acceptée. Si le mot de passe est incorrect, la connexion est refusée.
    - Si le nom de l'utilisateur n'existe pas dans la table des utilisateurs 4D, la méthode base [`On Web Authentication`](#on-web-authentication) est appelée. Si la méthode base `On Web Authentication` n'existe pas, les connexions sont rejetées.

- Si l'option **Inclure les mots de passe 4D** n'est pas cochée, les informations d'identification des utilisateurs sont envoyées à la méthode base [`On Web Authentication`](#on-web-authentication) avec les autres paramètres de connexion (adresse et port IP, URL...) afin de pouvoir les traiter. Si la méthode base `On Web Authentication` n'existe pas, les connexions sont rejetées.
> Avec le serveur Web du client 4D, gardez à l'esprit que tous les sites publiés par les machines 4D Client partageront la même table d'utilisateurs. La validation des utilisateurs/mots de passe est effectuée par l'application 4D Server.

### Mots de passe protocole DIGEST

Ce mode offre un niveau de sécurité plus élevé car les informations d'authentification sont traitées par un processus à sens unique appelé "hashing" qui rend leur contenu impossible à déchiffrer.

Comme en mode BASIC, l'utilisateur doit saisir son nom et mot de passe lors de la connexion. Ensuite, la méthode base [`On Web Authentication`](#on-web-authentication) est appelée. Lorsque le mode DIGEST est activé, le paramètre $6 (mot de passe) est toujours retourné vide. En effet, lors de l'utilisation de ce mode, ces informations ne passent pas par le réseau en texte clair (non chiffré). Il est donc impératif dans ce cas d'évaluer les demandes de connexion à l'aide de la commande `WEB Validate digest`.
> Vous devez redémarrer le serveur web pour que les modifications apportées à ces paramètres soient prises en compte.



## On Web Authentication

La méthode de base de données `On Web Authentication` est chargée de gérer l'accès au moteur du serveur web. Elle est appelée par 4D ou 4D Server lorsqu'une requête HTTP dynamique est reçue.

### Appels des méthodes base

La méthode base `On Web Authentication` est automatiquement appelée lorsqu'une requête ou un traitement nécessite l'exécution de code 4D (à l'exception des appels REST). Elle est également appelée lorsque le serveur web reçoit une URL statique invalide (par exemple, si la page statique demandée n'existe pas).

La méthode base `On Web Authentication` est donc appelée :

- lorsque le serveur web reçoit une URL demandant une ressource qui n'existe pas
- lorsque le serveur web reçoit une URL commençant par `4DACTION/`, `4DCGI/`...
- lorsque le serveur web reçoit une URL d'accès root et aucune page d'accueil n'a été définie dans les Propriétés ou à l'aide de la commande `WEB SET HOME PAGE`
- lorsque le serveur web traite une balise exécutant du code (par exemple `4DSCRIPT`) dans une page semi-dynamique.

La méthode base `On Web Authentication` n'est PAS appelée :

- lorsque le serveur web reçoit une URL demandant une page statique valide.
- lorsque le serveur web reçoit une URL commençant par `rest/` et que le serveur REST est lancé (dans ce cas, l'authentification est gérée via la méthode base [`On REST Authentication`](REST/configuration.md#using-the-on-rest-authentication-database-method) ou les [Propriétés de structure](REST/configuration.md#using-the-structure-settings)).


### Syntaxe

**On Web Authentication**( *$1* : Text ; *$2* : Text ; *$3* : Text ; *$4* : Text ; *$5* : Text ; *$6* : Text ) -> $0 : Boolean

| Paramètres | Type    |    | Description                                              |
| ---------- | ------- |:--:| -------------------------------------------------------- |
| $1         | Text    | <- | Variable URL                                             |
| $2         | Text    | <- | En-têtes HTTP + Corps HTTP (jusqu'à une limite de 32 ko) |
| $3         | Text    | <- | Adresse IP du client web (navigateur)                    |
| $4         | Text    | <- | Adresse IP du serveur                                    |
| $5         | Text    | <- | Nom d'utilisateur                                        |
| $6         | Text    | <- | Mot de passe                                             |
| $0         | Boolean | -> | True = demande acceptée, False = demande rejetée         |

Vous devez déclarer ces paramètres de la manière suivante :

```4d
//On Web Authentication 
 
 C_TEXT($1;$2;$3;$4;$5;$6)
 C_BOOLEAN($0)
 
//Code de la méthode base
```

Alternativement, vous pouvez utiliser la syntaxe [paramètres nommés](Concepts/parameters.md#named-parameters) :

```4d
// On Web Authentication database method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean

```
> Tous les paramètres de la méthode base `On Web Authentication` ne sont pas nécessairement remplis. Les informations reçues par la méthode base dépendent du \[mode d'authentification\](#mode-d-authentification) sélectionné.


#### $1 - URL

Le premier paramètre (`$1`) est l'URL reçue par le serveur, de laquelle l'adresse de l'hôte a été enlevée.

Prenons l'exemple d'une connexion Intranet. Supposons que l'adresse IP de votre machine serveur Web 4D est 123.45.67.89. Le tableau suivant montre les valeurs de $1 en fonction de l'URL saisie dans le navigateur Web :

| URL entrée dans le navigateur web    | Valeur du paramètre $1   |
| ------------------------------------ | ------------------------ |
| 123.45.67.89                         | /                        |
| http://123.45.67.89                  | /                        |
| 123.45.67.89/Customers               | /Customers               |
| http://123.45.67.89/Customers/Add    | /Customers/Add           |
| 123.45.67.89/Do_This/If_OK/Do_That | /Do_This/If_OK/Do_That |

#### $2 - En-tête (header) et corps (body) de la requête HTTP

Le deuxième paramètre (`$2`) est l'en-tête et le corps de la requête HTTP envoyée par le navigateur web. Notez que ces informations sont transmises telles quelles à votre méthode base `On Web Authentication`. Son contenu variera en fonction de la nature du navigateur web qui tente la connexion.

Si votre application utilise ces informations, il vous appartient d'analyser l'en-tête et le corps. Vous pouvez utiliser les commandes `WEB GET HTTP HEADER` et `WEB GET HTTP BODY`.
> Pour des raisons de performance, la taille des données passant par le paramètre $2 ne doit pas dépasser 32 Ko. Au-delà de cette taille, ils sont tronqués par le serveur HTTP 4D.

#### $3 - Adresse IP du client Web

Le paramètre `$3` reçoit l'adresse IP de la machine du navigateur. Cette information peut vous permettre de distinguer entre les connexions intranet et internet.
> 4D renvoie les adresses IPv4 dans un format hybride IPv6/IPv4 écrit avec un préfixe de 96 bits, par exemple ::ffff:192.168.2.34 pour l'adresse IPv4 192.168.2.34. Pour plus d'informations, reportez-vous à la section [Prise en charge d'IPv6](webServerConfig.md#about-ipv6-support).


#### $4 - Adresse IP du serveur

Le paramètre `$4` reçoit l'adresse IP utilisée pour appeler le serveur web. 4D permet le multi-homing, ce qui vous permet d'exploiter des machines avec plus d'une adresse IP. Pour plus d'informations, veuillez consulter la [Page Configuration](webServerConfig.md#ip-address-to-listen).


#### $5 et $6 - Nom d'utilisateur et mot de passe

Les paramètres `$5` et `$6` reçoivent le nom d'utilisateur et le mot de passe saisis par l'utilisateur dans la boîte de dialogue d'identification standard affichée par le navigateur. Cette boîte de dialogue apparaît pour chaque connexion, si l'authentification [basic](#basic-protocol) ou [digest](#digest-protocol) est sélectionnée.
> Si le nom d'utilisateur envoyé par le navigateur existe dans 4D, le paramètre $6 (le mot de passe de l'utilisateur) n'est pas renvoyé pour des raisons de sécurité.

#### Paramètre $0

La méthode base `On Web Authentication` retourne un booléen dans $0 :

*   Si $0 est True, la connexion est acceptée.

*   Si $0 est False, la connexion est refusée.

La méthode base `On Web Connection` est exécutée seulement si la connexion a été acceptée par `On Web Authentication`.
> **ATTENTION**<br/>Si aucune valeur n'est définie pour $0 ou si $0 n'est pas défini dans la méthode base `On Web Authentication`, la connexion est considérée comme acceptée et la méthode base `On Web Connection` est exécutée.
> * N'appelez aucun élément d'interface dans la méthode base `On Web Authentication``(ALERT`, `DIALOG`, etc.) car sinon son exécution sera interrompue et la connexion refusée. La même chose se produira s'il y a une erreur lors de son traitement.


### Exemple

Exemple de méthode base `On Web Authentication` en mode [DIGEST](#digest-protocol) :

```4d
 // On Web Authentication Database Method
 #DECLARE ($url : Text; $header : Text; $ipB : Text; $ipS : Text; \
    $user : Text; $pw : Text) -> $valid : Boolean

 var $found : cs.WebUserSelection
 $valid:=False

 $found:=ds.WebUser.query("User === :1";$user)
 If($found.length=1) // User is found
    $valid:=WEB Validate digest($user;[WebUser]password)
 Else
    $valid:=False // User does not exist
 End if
```
