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

> **Attention:** Si la méthode de base de données `On Web Authentication` n'existe pas, les connexions sont automatiquement acceptées (mode test).


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

### Database method calls

The `On Web Authentication` database method is automatically called when a request or processing requires the execution of some 4D code (except for REST calls). It is also called when the web server receives an invalid static URL (for example, if the static page requested does not exist).

The `On Web Authentication` database method is therefore called:

- when the web server receives a URL requesting a resource that does not exist
- when the web server receives a URL beginning with `4DACTION/`, `4DCGI/`...
- when the web server receives a root access URL and no home page has been set in the Settings or by means of the `WEB SET HOME PAGE` command
- when the web server processes a tag executing code (e.g `4DSCRIPT`) in a semi-dynamic page.

The `On Web Authentication` database method is NOT called:

- when the web server receives a URL requesting a valid static page.
- when the web server reveives a URL beginning with `rest/` and the REST server is launched (in this case, the authentication is handled through the [`On REST Authentication` database method](REST/configuration.md#using-the-on-rest-authentication-database-method) or [Structure settings](REST/configuration.md#using-the-structure-settings)).


### Syntaxe

**On Web Authentication**( *$1* : Text ; *$2* : Text ; *$3* : Text ; *$4* : Text ; *$5* : Text ; *$6* : Text ) -> $0 : Boolean

| Paramètres | Type    |    | Description                                       |
| ---------- | ------- |:--:| ------------------------------------------------- |
| $1         | Text    | <- | Variable URL                                      |
| $2         | Text    | <- | HTTP headers + HTTP body (up to 32 kb limit)      |
| $3         | Text    | <- | IP address of the web client (browser)            |
| $4         | Text    | <- | Adresse IP du serveur                             |
| $5         | Text    | <- | Nom d'utilisateur                                 |
| $6         | Text    | <- | Mot de passe                                      |
| $0         | Boolean | -> | True = request accepted, False = request rejected |

You must declare these parameters as follows:

```4d
//On Web Authentication database method

 C_TEXT($1;$2;$3;$4;$5;$6)
 C_BOOLEAN($0)

//Code for the method
```

Alternatively, you can use the [named parameters](Concepts/parameters.md#named-parameters) syntax:

```4d
// On Web Authentication database method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean

```
> All the `On Web Authentication` database method's parameters are not necessarily filled in. The information received by the database method depends on the selected [authentication mode](#authentication-mode)).


#### $1 - URL

The first parameter (`$1`) is the URL received by the server, from which the host address has been removed.

Let’s take the example of an Intranet connection. Suppose that the IP address of your 4D Web Server machine is 123.45.67.89. The following table shows the values of $1 depending on the URL entered in the Web browser:

| URL entered in web browser           | Value of parameter $1    |
| ------------------------------------ | ------------------------ |
| 123.45.67.89                         | /                        |
| http://123.45.67.89                  | /                        |
| 123.45.67.89/Customers               | /Customers               |
| http://123.45.67.89/Customers/Add    | /Customers/Add           |
| 123.45.67.89/Do_This/If_OK/Do_That | /Do_This/If_OK/Do_That |

#### $2 - Header and Body of the HTTP request

The second parameter (`$2`) is the header and the body of the HTTP request sent by the web browser. Note that this information is passed to your `On Web Authentication` database method as it is. Its contents will vary depending on the nature of the web browser which is attempting the connection.

If your application uses this information, it is up to you to parse the header and the body. You can use the `WEB GET HTTP HEADER` and the `WEB GET HTTP BODY` commands.
> For performance reasons, the size of data passing through the $2 parameter must not exceed 32 KB. Beyond this size, they are truncated by the 4D HTTP server.

#### $3 - Web client IP address

The `$3` parameter receives the IP address of the browser’s machine. This information can allow you to distinguish between intranet and internet connections.
> 4D returns IPv4 addresses in a hybrid IPv6/IPv4 format written with a 96-bit prefix, for example ::ffff:192.168.2.34 for the IPv4 address 192.168.2.34. For more information, refer to the [IPv6 Support](webServerConfig.md#about-ipv6-support) section.


#### $4 - Server IP address

The `$4` parameter receives the IP address used to call the web server. 4D allows for multi-homing, which allows you to exploit machines with more than one IP address. Pour plus d'informations, veuillez consulter la [Page Configuration](webServerConfig.md#ip-address-to-listen).


#### $5 and $6 - User Name and Password

The `$5` and `$6` parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser. This dialog box appears for each connection, if [basic](#basic-protocol) or [digest](#digest-protocol) authentication is selected.
> If the user name sent by the browser exists in 4D, the $6 parameter (the user’s password) is not returned for security reasons.

#### $0 parameter

The `On Web Authentication` database method returns a boolean in $0:

*   If $0 is True, the connection is accepted.

*   If $0 is False, the connection is refused.

The `On Web Connection` database method is only executed if the connection has been accepted by `On Web Authentication`.
> **WARNING**<br/>If no value is set to $0 or if $0 is not defined in the `On Web Authentication` database method, the connection is considered as accepted and the `On Web Connection` database method is executed.
> * * Do not call any interface elements in the `On Web Authentication` database method (`ALERT`, `DIALOG`, etc.) because otherwise its execution will be interrupted and the connection refused. The same thing will happen if an error occurs during its processing.


### Exemple

Example of the `On Web Authentication` database method in [DIGEST mode](#digest-protocol):

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
